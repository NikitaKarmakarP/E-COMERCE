'use client';

import sStyles from '../seller.module.css';

export default function SellerSettings() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem' }}>
            {/* Settings Nav */}
            <div className={sStyles.card} style={{ height: 'fit-content', padding: '1rem' }}>
                {[
                    { label: 'Store Profile', icon: '🏪', active: true },
                    { label: 'Payout Settings', icon: '💰' },
                    { label: 'Shipping Policy', icon: '🚚' },
                    { label: 'Tax Information', icon: '📄' },
                    { label: 'Team Members', icon: '👥' },
                    { label: 'Notifications', icon: '🔔' },
                ].map(item => (
                    <div key={item.label} style={{
                        padding: '12px 20px',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        background: item.active ? '#f1f5f9' : 'transparent',
                        fontWeight: item.active ? 800 : 600,
                        color: item.active ? 'var(--primary)' : '#64748b',
                        display: 'flex',
                        gap: '12px'
                    }}>
                        <span>{item.icon}</span> {item.label}
                    </div>
                ))}
            </div>

            {/* Settings Form */}
            <div className={sStyles.card}>
                <h2 style={{ marginBottom: '0.5rem' }}>Store Profile</h2>
                <p style={{ color: '#64748b', marginBottom: '2rem' }}>Configure your public store identity and contact info</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'min-content 1fr', gap: '3rem', alignItems: 'center', marginBottom: '3rem' }}>
                    <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#f1f5f9', border: '2px dashed #cbd5e1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <span style={{ fontSize: '2rem' }}>📷</span>
                        <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700 }}>Update Logo</span>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '8px' }}>Levi&apos;s Official Store</h4>
                        <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Store ID: BB-SEL-4092 • Member since 2024</p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontWeight: 700, fontSize: '0.9rem' }}>Business Name</label>
                        <input type="text" defaultValue="Levi Strauss & Co." style={{ padding: '12px 18px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontWeight: 700, fontSize: '0.9rem' }}>Support Email</label>
                        <input type="email" defaultValue="support@levis-india.com" style={{ padding: '12px 18px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: 'span 2' }}>
                        <label style={{ fontWeight: 700, fontSize: '0.9rem' }}>Store Description</label>
                        <textarea defaultValue="Official flagship store for Levi's on BharatBazaar Mega Mart. Offering authentic denim, apparel, and accessories for men and women." rows={4} style={{ padding: '12px 18px', borderRadius: '10px', border: '1px solid #e2e8f0', resize: 'none' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontWeight: 700, fontSize: '0.9rem' }}>State/Province</label>
                        <input type="text" defaultValue="Maharashtra" style={{ padding: '12px 18px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontWeight: 700, fontSize: '0.9rem' }}>City</label>
                        <input type="text" defaultValue="Mumbai" style={{ padding: '12px 18px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
                    </div>
                </div>

                <div style={{ marginTop: '3rem', borderTop: '1px solid #f1f5f9', paddingTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                    <button className="secondary-btn" style={{ padding: '12px 30px' }}>Cancel</button>
                    <button className="primary-btn" style={{ padding: '12px 30px' }}>Save Changes</button>
                </div>
            </div>
        </div>
    );
}
