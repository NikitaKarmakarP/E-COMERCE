'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../discovery.module.css';

export default function ProgramsFeaturesPage() {
    const programs = [
        {
            title: 'BB First',
            desc: 'Unlimited Free Deliveries, Early Access to Sales, and Premium Benefits.',
            icon: '👑',
            color: '#facc15'
        },
        {
            title: 'BB Rewards',
            desc: 'Earn 5% BB Coins on every purchase. Use them for extra discounts.',
            icon: '🪙',
            color: '#fb923c'
        },
        {
            title: 'Partner Stores',
            desc: 'Shop from local verified merchants and get doorstep delivery.',
            icon: '🏪',
            color: '#60a5fa'
        },
        {
            title: 'Family Sharing',
            desc: 'Connect up to 4 family members and share a single digital budget.',
            icon: '👨‍👩‍👧',
            color: '#f472b6'
        },
        {
            title: 'Bulk Buy',
            desc: 'Special B2B pricing for bulk orders tailored for businesses.',
            icon: '📦',
            color: '#4ade80'
        },
        {
            title: 'Zero Waste',
            desc: 'Our eco-friendly initiative for sustainable packaging and products.',
            icon: '🌍',
            color: '#34d399'
        }
    ];

    return (
        <>
            <Header />
            <main className={styles.discoveryPage}>
                <section className={styles.hero} style={{ background: 'linear-gradient(135deg, #334155 0%, #020617 100%)' }}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <span className={styles.badge}>🚀 Beyond Shopping</span>
                            <h1>Programs & Features</h1>
                            <p>Exclusive programs designed to make your shopping experience more rewarding and personalized.</p>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className={styles.grid}>
                        {programs.map(p => (
                            <div key={p.title} className={styles.card} style={{
                                background: 'white',
                                padding: '3rem 2rem',
                                borderRadius: '30px',
                                textAlign: 'center',
                                border: '1px solid #f1f5f9',
                                transition: 'transform 0.3s'
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    background: `${p.color}15`,
                                    color: p.color,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.5rem',
                                    margin: '0 auto 2rem'
                                }}>
                                    {p.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>{p.title}</h3>
                                <p style={{ color: '#64748b', lineHeight: 1.6, marginBottom: '2rem' }}>{p.desc}</p>
                                <button style={{
                                    padding: '12px 25px',
                                    borderRadius: '50px',
                                    border: `2px solid ${p.color}`,
                                    color: p.color,
                                    background: 'transparent',
                                    fontWeight: 800,
                                    cursor: 'pointer'
                                }}>
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
