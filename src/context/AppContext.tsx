'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '@/types/cart';

interface FamilyMember {
    id: string;
    name: string;
    role: 'head' | 'member' | 'kid' | 'elder';
    avatar: string;
}

interface AppContextType {
    isElderMode: boolean;
    setIsElderMode: (val: boolean) => void;
    isKidsMode: boolean;
    setIsKidsMode: (val: boolean) => void;
    familyMembers: FamilyMember[];
    activeMember: FamilyMember | null;
    setActiveMember: (m: FamilyMember) => void;
    budgetLimit: number;
    currentSpend: number;
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
    const [activeMember, setActiveMember] = useState<FamilyMember | null>(null);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [wishlistItems, setWishlistItems] = useState<any[]>([]);

    const familyMembers: FamilyMember[] = [
        { id: '1', name: 'Nikita', role: 'head', avatar: '👩‍💼' },
        { id: '2', name: 'Rahul', role: 'member', avatar: '👨‍💻' },
        { id: '3', name: 'Dadi', role: 'elder', avatar: '👵' },
        { id: '4', name: 'Aavya', role: 'kid', avatar: '👧' },
    ];

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
            budgetLimit: 15000,
            currentSpend: 8200,
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
