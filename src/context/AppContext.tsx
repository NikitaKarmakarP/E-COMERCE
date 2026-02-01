'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '@/types/cart';
import { FamilyMember, FamilyWallet, Transaction } from '@/types/family';

interface AppContextType {
    isElderMode: boolean;
    setIsElderMode: (val: boolean) => void;
    isKidsMode: boolean;
    setIsKidsMode: (val: boolean) => void;

    familyMembers: FamilyMember[];
    activeMember: FamilyMember | null;
    setActiveMember: (m: FamilyMember) => void;
    updateMemberLimit: (id: string, limit: number) => void;

    wallet: FamilyWallet;
    topUpWallet: (amount: number) => void;
    recordTransaction: (amount: number, description: string) => boolean; // returns success

    cartItems: CartItem[];
    wishlistItems: any[];
    addToCart: (product: any) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, delta: number) => void;
    clearCart: () => void;
    toggleWishlist: (product: any) => void;
    isInWishlist: (id: string) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [isElderMode, setIsElderMode] = useState(false);
    const [isKidsMode, setIsKidsMode] = useState(false);

    // Mock Initial Data
    const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([
        { id: '1', name: 'Nikita', role: 'head', avatar: '👩‍💼', spendingLimit: 50000, spentThisMonth: 12400, canApproveRequests: true },
        { id: '2', name: 'Rahul', role: 'member', avatar: '👨‍💻', spendingLimit: 20000, spentThisMonth: 5600 },
        { id: '3', name: 'Dadi', role: 'elder', avatar: '👵', spendingLimit: 10000, spentThisMonth: 850 },
        { id: '4', name: 'Aavya', role: 'kid', avatar: '👧', spendingLimit: 2000, spentThisMonth: 1200 },
    ]);

    const [activeMember, setActiveMember] = useState<FamilyMember | null>(null);

    const [wallet, setWallet] = useState<FamilyWallet>({
        balance: 25000,
        currency: '₹',
        transactions: [
            { id: 't1', memberId: '1', memberName: 'Nikita', amount: 4500, description: 'Grocery Haul', date: '2024-02-01', type: 'purchase' },
            { id: 't2', memberId: '2', memberName: 'Rahul', amount: 8999, description: 'Gaming Headset', date: '2024-01-28', type: 'purchase' },
            { id: 't3', memberId: '4', memberName: 'Aavya', amount: 499, description: 'Drawing Kit', date: '2024-01-30', type: 'purchase' },
        ]
    });

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [wishlistItems, setWishlistItems] = useState<any[]>([]);

    useEffect(() => {
        if (!activeMember) setActiveMember(familyMembers[0]);
    }, []);

    useEffect(() => {
        if (activeMember?.role === 'elder') {
            setIsElderMode(true);
            setIsKidsMode(false);
        } else if (activeMember?.role === 'kid') {
            setIsKidsMode(true);
            setIsElderMode(false);
        } else {
            setIsElderMode(false);
            setIsKidsMode(false);
        }
    }, [activeMember]);

    const updateMemberLimit = (id: string, limit: number) => {
        setFamilyMembers(prev => prev.map(m => m.id === id ? { ...m, spendingLimit: limit } : m));
    };

    const topUpWallet = (amount: number) => {
        setWallet(prev => ({
            ...prev,
            balance: prev.balance + amount,
            transactions: [{
                id: Date.now().toString(),
                memberId: activeMember?.id || 'sys',
                memberName: activeMember?.name || 'System',
                amount: amount,
                description: 'Wallet Top-up',
                date: new Date().toISOString().split('T')[0],
                type: 'topup'
            }, ...prev.transactions]
        }));
    };

    const recordTransaction = (amount: number, description: string): boolean => {
        if (!activeMember) return false;

        // Check wallet balance
        if (wallet.balance < amount) {
            alert("Insufficient wallet balance!");
            return false;
        }

        // Check member limit if applicable
        if (activeMember.spendingLimit && (activeMember.spentThisMonth + amount > activeMember.spendingLimit)) {
            alert(`Spending limit exceeded! You have ₹${activeMember.spendingLimit - activeMember.spentThisMonth} left.`);
            return false;
        }

        // Process Transaction
        setWallet(prev => ({
            ...prev,
            balance: prev.balance - amount,
            transactions: [{
                id: Date.now().toString(),
                memberId: activeMember.id,
                memberName: activeMember.name,
                amount: amount,
                description,
                date: new Date().toISOString().split('T')[0],
                type: 'purchase'
            }, ...prev.transactions]
        }));

        // Update Member Spend
        setFamilyMembers(prev => prev.map(m =>
            m.id === activeMember.id ? { ...m, spentThisMonth: m.spentThisMonth + amount } : m
        ));

        // Sync active member state
        setActiveMember(prev => prev ? { ...prev, spentThisMonth: prev.spentThisMonth + amount } : null);

        return true;
    };

    const addToCart = (product: any) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string, delta: number) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const clearCart = () => setCartItems([]);

    const toggleWishlist = (product: any) => {
        setWishlistItems(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) {
                return prev.filter(item => item.id !== product.id);
            }
            return [...prev, product];
        });
    };

    const isInWishlist = (id: string) => {
        return wishlistItems.some(item => item.id === id);
    };

    return (
        <AppContext.Provider value={{
            isElderMode, setIsElderMode,
            isKidsMode, setIsKidsMode,
            familyMembers,
            activeMember, setActiveMember,
            updateMemberLimit,
            wallet, topUpWallet, recordTransaction,
            cartItems,
            wishlistItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            toggleWishlist,
            isInWishlist
        }}>
            <div className={isElderMode ? 'elder-mode' : ''}>
                {children}
            </div>
        </AppContext.Provider>
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (!context) throw new Error('useApp must be used within AppProvider');
    return context;
}
