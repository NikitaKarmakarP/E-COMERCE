'use client';

import sStyles from './seller.module.css';
import Link from 'next/link';

export default function SellerOverview() {
    const stats = [
        { label: 'Total Earnings', value: '₹142,500', trend: '+12.5%', isUp: true },
        { label: 'Orders Today', value: '42', trend: '+5.2%', isUp: true },
        { label: 'Pending Shipments', value: '18', trend: '-2.1%', isUp: false },
        { label: 'Avg. Rating', value: '4.8/5', trend: '0.0%', isUp: true },
    ];

    const products = [
        { id: '1', name: 'Cotton T-Shirt', stock: 120, price: 899, status: 'Active' },
        { id: '2', name: 'Wireless Mouse', stock: 0, price: 1299, status: 'Out of Stock' },
        { id: '3', name: 'Organic Mangoes', stock: 45, price: 599, status: 'Pending Review' },
        { id: '4', name: 'Laptop Stand', stock: 88, price: 2199, status: 'Active' },
    ];

    return (
        <>
            {/* Stats Grid */}
            <div className={sStyles.statsGrid}>
                {stats.map(s => (
                    <div key={s.label} className={sStyles.statCard}>
                        <div className={sStyles.statLabel}>{s.label}</div>
                        <div className={sStyles.statValue}>{s.value}</div>
                        <div className={`${sStyles.statTrend} ${s.isUp ? sStyles.trendUp : sStyles.trendDown}`}>
                            {s.isUp ? '↑' : '↓'} {s.trend} <span>than last month</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className={sStyles.mainGrid}>
                {/* Recent Orders / Inventory */}
                <div className={sStyles.card}>
                    <h3>
                        Inventory Highlights
                        <Link href="/dashboard/seller/products" className="primary-btn" style={{ padding: '8px 16px', fontSize: '0.8rem', textDecoration: 'none' }}>Manage All</Link>
                    </h3>
                    <table className={sStyles.table}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(p => (
                                <tr key={p.id}>
                                    <td style={{ fontWeight: 700 }}>{p.name}</td>
                                    <td>{p.stock} units</td>
                                    <td>₹{p.price}</td>
                                    <td>
                                        <span className={`${sStyles.status} ${p.status === 'Active' ? sStyles.statusActive : p.status === 'Out of Stock' ? sStyles.statusStockout : sStyles.statusPending}`}>
                                            {p.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Analytics Mini */}
                <div className={sStyles.card}>
                    <h3>Earnings (7 Days)</h3>
                    <div className={sStyles.chartPlaceholder}>
                        <div className={sStyles.chartBars}>
                            <div className={sStyles.bar} style={{ height: '40%' }}></div>
                            <div className={sStyles.bar} style={{ height: '60%' }}></div>
                            <div className={sStyles.bar} style={{ height: '35%' }}></div>
                            <div className={sStyles.bar} style={{ height: '80%' }}></div>
                            <div className={sStyles.bar} style={{ height: '55%' }}></div>
                            <div className={sStyles.bar} style={{ height: '90%' }}></div>
                            <div className={sStyles.bar} style={{ height: '75%' }}></div>
                        </div>
                    </div>
                    <div style={{ marginTop: '1.5rem' }}>
                        <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '10px' }}>Market performance is <strong>15% higher</strong> than average this week.</p>
                        <Link href="/dashboard/seller/analytics" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem' }}>View full report →</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
