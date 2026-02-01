'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import SmartSearch from './SmartSearch';
import MegaMenu from './MegaMenu';
import { categories } from '@/data/categories';
import { useApp } from '@/context/AppContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { activeMember, isKidsMode, isElderMode, cartItems, wishlistItems } = useApp();
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const wishlistCount = wishlistItems.length;

    return (
        <>
            <header className={`${styles.header} ${isKidsMode ? styles.kidsTheme : ''} ${isElderMode ? styles.elderTheme : ''}`}>
                <div className={styles.topBar}>
                    <div className={`container ${styles.topBarContent}`}>
                        <p>India&apos;s Mega Mart: <strong>Free Delivery</strong> on orders above ₹499</p>
                        <div className={styles.topLinks}>
                            {activeMember && (
                                <div className={styles.familyIndicator}>
                                    <span className={styles.memberAvatar}>{activeMember.avatar}</span>
                                    <span>{activeMember.name}&apos;s Profile</span>
                                </div>
                            )}
                            <Link href="/track">Track Order</Link>
                            <Link href="/support">Support</Link>
                        </div>
                    </div>
                </div>

                <div className={`${styles.mainHeader} glass`}>
                    <div className={`container ${styles.headerContent}`}>
                        <div className={styles.leftSection}>
                            <button
                                className={styles.menuToggle}
                                onClick={() => setIsMenuOpen(true)}
                                aria-label="Open main menu"
                                aria-expanded={isMenuOpen}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            </button>
                            <Link href="/" className={styles.logo}>
                                <span className={styles.logoShort}>BB</span>
                                <div className={styles.logoText}>
                                    <h1>BHARATBAZAAR</h1>
                                    <span>MEGA MART</span>
                                </div>
                            </Link>
                        </div>

                        <SmartSearch />

                        <nav className={styles.navIcons}>
                            <div className={styles.iconItem}>
                                <div className={styles.avatarCircle}>
                                    {activeMember ? activeMember.avatar : '👤'}
                                </div>
                                <div className={styles.accountDropdown}>
                                    <span>{activeMember ? activeMember.name : 'Account'}</span>
                                    <div className={styles.dropdownContent}>
                                        <Link href="/login">Login / Register</Link>
                                        <Link href="/dashboard/seller">Seller Panel</Link>
                                        <Link href="/dashboard/admin">Admin Desk</Link>
                                    </div>
                                </div>
                            </div>
                            <Link href="/wishlist" className={styles.iconItem} aria-label={`Wishlist, ${wishlistCount} items`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.89-8.89 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                {wishlistCount > 0 && <span className={styles.badge}>{wishlistCount}</span>}
                                <span>Wishlist</span>
                            </Link>
                            <Link href="/cart" className={styles.iconItem} aria-label={`Cart, ${cartCount} items`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
                                <span>Cart</span>
                            </Link>
                        </nav>
                    </div>
                </div>

                <nav className={styles.bottomNav}>
                    <div className="container">
                        <ul className={styles.navList}>
                            <li>
                                <button
                                    onClick={() => setIsMenuOpen(true)}
                                    className={styles.allCats}
                                    aria-label="Open all categories menu"
                                    aria-expanded={isMenuOpen}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg> All
                                </button>
                            </li>
                            {categories.map(cat => (
                                <li key={cat.id}><Link href={`/category/${cat.slug}`}>{cat.name}</Link></li>
                            ))}
                            <li><Link href="/deals" className={styles.dealLink}>Today&apos;s Deals</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <MegaMenu
                categories={categories}
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </>
    );
}
