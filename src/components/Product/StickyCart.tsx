'use client';

import { useState, useEffect } from 'react';
import styles from './StickyCart.module.css';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';

export default function StickyCart() {
    const { cartItems } = useApp();
    const [isVisible, setIsVisible] = useState(false);

    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (itemCount === 0) return null;

    return (
        <div className={`${styles.cartWrapper} ${isVisible ? styles.visible : styles.visibleAlways}`}>
            <Link href="/cart" className={styles.cartBtn}>
                <div className={styles.iconBox}>
                    <span className={styles.cartIcon}>🛒</span>
                    <span className={styles.badge}>{itemCount}</span>
                </div>
                <div className={styles.cartInfo}>
                    <span className={styles.cartText}>{itemCount} Items</span>
                    <span className={styles.cartTotal}>₹{totalAmount.toLocaleString()}</span>
                </div>
                <span className={styles.arrow}>→</span>
            </Link>
        </div>
    );
}
