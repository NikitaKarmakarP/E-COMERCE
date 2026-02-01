'use client';

import styles from '../dashboard.module.css';
import aStyles from './admin.module.css';
import sStyles from '../seller/seller.module.css'; // Reuse table styles
import Link from 'next/link';

export default function AdminDashboard() {
    const stats = [
        { label: 'Total GMV', value: '₹4.2 Cr', trend: '+18%' },
        { label: 'Active Sellers', value: '1,240', trend: '+45' },
        { label: 'Total Users', value: '85.4K', trend: '+2.1K' },
        { label: 'Fraud Alerts', value: '12', trend: '-5' },
    ];

    const pendingSellers = [
        { id: '1', name: 'Zudio Collections', category: 'Fashion', date: 'Feb 01, 2026' },
        { id: '2', name: 'Fresh Farm Hub', category: 'Grocery', date: 'Jan 31, 2026' },
    ];

    return (
        <div className={styles.dashboardLayout}>
            {/* Sidebar */}
            <aside className={styles.sidebar} style={{ background: '#1a1c23' }}>
                <div className={styles.sidebarBrand}>
                    <span>AD</span> BB CONTROL
                </div>
                <nav className={styles.nav}>
                    <Link href="/dashboard/admin" className={`${styles.navLink} ${styles.activeLink}`}>🏢 Platform</Link>
                    <Link href="/dashboard/admin/users" className={styles.navLink}>👥 Users</Link>
                    <Link href="/dashboard/admin/sellers" className={styles.navLink}>🏪 Sellers</Link>
                    <Link href="/dashboard/admin/categories" className={styles.navLink}>📁 Categories</Link>
                    <Link href="/dashboard/admin/fraud" className={styles.navLink}>🛡️ Fraud Detection</Link>
                    <Link href="/dashboard/admin/settings" className={styles.navLink} style={{ marginTop: 'auto' }}>⚙️ System</Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
                <header className={styles.contentHeader}>
                    <div>
                        <h1>Platform Overview</h1>
                        <p style={{ color: '#64748b' }}>Central management for BharatBazaar Mega Mart</p>
                    </div>
                    <div className={styles.userPanel}>
                        <span style={{ fontWeight: 800, color: 'var(--primary)' }}>Super Admin</span>
                        <div className={styles.avatarCircle} style={{ width: '40px', height: '40px', marginBottom: 0, background: '#1a1c23' }}>🛡️</div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className={sStyles.statsGrid}>
                    {stats.map(s => (
                        <div key={s.label} className={sStyles.statCard}>
                            <div className={sStyles.statLabel}>{s.label}</div>
                            <div className={sStyles.statValue}>{s.value}</div>
                            <div className={sStyles.statTrend} style={{ color: s.label.includes('Fraud') ? '#ef4444' : '#22c55e' }}>
                                {s.trend} than yesterday
                            </div>
                        </div>
                    ))}
                </div>

                <div className={sStyles.mainGrid}>
                    <div className={sStyles.card}>
                        <h3>Fraud Detection System</h3>
                        <div className={aStyles.alertCard}>
                            <div className={aStyles.alertIcon}>🚨</div>
                            <div className={aStyles.alertBody}>
                                <h5>Multiple Account Detection</h5>
                                <p>User IP: 192.168.1.1 linked to 5 different accounts.</p>
                            </div>
                            <button className={aStyles.actionBtn}>Block IP</button>
                        </div>
                        <div className={aStyles.alertCard} style={{ background: '#fff7ed', borderColor: '#fdba74' }}>
                            <div className={aStyles.alertIcon}>⚠️</div>
                            <div className={aStyles.alertBody}>
                                <h5 style={{ color: '#9a3412' }}>High Value Refund</h5>
                                <p style={{ color: '#c2410c' }}>User ID #9928 attempted ₹45,000 refund for 'Laptop'.</p>
                            </div>
                            <button className={aStyles.actionBtn} style={{ background: '#9a3412' }}>Review</button>
                        </div>
                    </div>

                    <div className={sStyles.card}>
                        <h3>Pending Approvals</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {pendingSellers.map(seller => (
                                <div key={seller.id} style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <span style={{ fontWeight: 800 }}>{seller.name}</span>
                                        <span className={aStyles.sellerBadge}>{seller.category}</span>
                                    </div>
                                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '10px' }}>Applied: {seller.date}</p>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button className="primary-btn" style={{ flex: 1, padding: '6px', fontSize: '0.75rem' }}>Approve</button>
                                        <button className="secondary-btn" style={{ flex: 1, padding: '6px', fontSize: '0.75rem' }}>Reject</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
