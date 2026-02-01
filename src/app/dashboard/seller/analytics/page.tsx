'use client';

import sStyles from '../seller.module.css';

export default function SellerAnalytics() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2>Performance Analytics</h2>
                    <p style={{ color: '#64748b' }}>Insights into your store&apos;s growth</p>
                </div>
                <select style={{ padding: '10px 20px', borderRadius: '10px', border: '1px solid #e2e8f0', fontWeight: 600 }}>
                    <option>Last 30 Days</option>
                    <option>Last 6 Months</option>
                    <option>Year to Date</option>
                </select>
            </div>

            <div className={sStyles.statsGrid}>
                {[
                    { label: 'Total Visits', value: '12,450', trend: '+15.2%', isUp: true },
                    { label: 'Conversion Rate', value: '3.2%', trend: '+0.4%', isUp: true },
                    { label: 'Bounce Rate', value: '42%', trend: '-2.1%', isUp: true },
                    { label: 'Net Profit', value: '₹42,800', trend: '+8.3%', isUp: true },
                ].map(s => (
                    <div key={s.label} className={sStyles.statCard}>
                        <div className={sStyles.statLabel}>{s.label}</div>
                        <div className={sStyles.statValue}>{s.value}</div>
                        <div className={`${sStyles.statTrend} ${s.isUp ? sStyles.trendUp : sStyles.trendDown}`}>
                            {s.isUp ? '↑' : '↓'} {s.trend}
                        </div>
                    </div>
                ))}
            </div>

            <div className={sStyles.mainGrid}>
                <div className={sStyles.card} style={{ flex: 2 }}>
                    <h3>Sales Revenue (Monthly)</h3>
                    <div className={sStyles.chartPlaceholder} style={{ height: '300px' }}>
                        <div className={sStyles.chartBars} style={{ alignItems: 'flex-end', gap: '20px' }}>
                            {[30, 45, 25, 60, 40, 75, 50, 85, 65, 90, 70, 95].map((h, i) => (
                                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                    <div className={sStyles.bar} style={{ height: `${h}%`, width: '100%', borderRadius: '6px 6px 0 0' }}></div>
                                    <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={sStyles.card} style={{ flex: 1 }}>
                    <h3>Sales by Category</h3>
                    <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { name: 'Fashion', percent: 65, color: 'var(--primary)' },
                            { name: 'Electronics', percent: 20, color: 'var(--secondary)' },
                            { name: 'Grocery', percent: 15, color: '#53b175' },
                        ].map(cat => (
                            <div key={cat.name}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700 }}>
                                    <span>{cat.name}</span>
                                    <span>{cat.percent}%</span>
                                </div>
                                <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' }}>
                                    <div style={{ height: '100%', width: `${cat.percent}%`, background: cat.color }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={sStyles.card}>
                <h3>Top Selling Products</h3>
                <table className={sStyles.table} style={{ marginTop: '1.5rem' }}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Total Sold</th>
                            <th>Revenue</th>
                            <th>Stock Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Cotton T-Shirt (M)</strong></td>
                            <td>Fashion</td>
                            <td>422</td>
                            <td>₹3,79,378</td>
                            <td><span className={sStyles.statusActive}>In Stock</span></td>
                        </tr>
                        <tr>
                            <td><strong>Wireless Optical Mouse</strong></td>
                            <td>Electronics</td>
                            <td>310</td>
                            <td>₹4,02,690</td>
                            <td><span className={sStyles.statusStockout}>Out of Stock</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
