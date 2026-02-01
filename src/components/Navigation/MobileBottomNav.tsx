'use client';

import Link from 'next/link';
import styles from './MobileBottomNav.module.css';
import { useApp } from '@/context/AppContext';

export default function MobileBottomNav() {
    const { cartItems, wishlistItems } = useApp();
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const wishlistCount = wishlistItems.length;

    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.navItem}>
                <div className={styles.icon} aria-hidden="true">🏠</div>
                <span>Home</span>
            </Link>
            <Link href="/categories" className={styles.navItem}>
                <span className={styles.icon} aria-hidden="true">📁</span>
                <span>Categories</span>
            </Link>
            <Link href="/wishlist" className={styles.navItem}>
                <div className={styles.icon} aria-hidden="true">❤️</div>
                <span>Wishlist</span>
                {wishlistCount > 0 && <span className={styles.badge}>{wishlistCount}</span>}
            </Link>
            <Link href="/cart" className={styles.navItem}>
                <div className={styles.icon} aria-hidden="true">🛒</div>
                <span>Cart</span>
                {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
            </Link>
            <Link href="/account" className={styles.navItem}>
                <div className={styles.icon} aria-hidden="true">👤</div>
                <span>Profile</span>
            </Link>
        </nav>
    );
}
