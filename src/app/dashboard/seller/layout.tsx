'use client';

import styles from '../dashboard.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SellerLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navLinks = [
        { href: '/dashboard/seller', label: '📊 Overview' },
        { href: '/dashboard/seller/products', label: '📦 My Products' },
        { href: '/dashboard/seller/orders', label: '📑 Orders' },
        { href: '/dashboard/seller/analytics', label: '📈 Analytics' },
        { href: '/dashboard/seller/messages', label: '💬 Messages' },
        { href: '/dashboard/seller/settings', label: '⚙️ Settings' },
    ];

    return (
        <div className={styles.dashboardLayout}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.sidebarBrand}>
                    <span>BB</span> BHARATBAZAAR
                </div>
                <nav className={styles.nav}>
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.navLink} ${pathname === link.href ? styles.activeLink : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
                <header className={styles.contentHeader}>
                    <div>
                        <h1>Seller Portal</h1>
                        <p style={{ color: '#64748b' }}>Levis Official Store • Premium Seller</p>
                    </div>
                    <div className={styles.userPanel}>
                        <button className={styles.notifBtn}>
                            🔔 <span className={styles.dot}></span>
                        </button>
                        <div className={styles.avatarCircle} style={{ width: '40px', height: '40px', marginBottom: 0 }}>👤</div>
                    </div>
                </header>

                {children}
            </main>
        </div>
    );
}
