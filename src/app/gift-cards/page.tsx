'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../discovery.module.css';

export default function GiftCardsPage() {
    const cardStyles = [
        { id: 1, name: 'Birthday Bash', bg: 'linear-gradient(45deg, #f472b6, #db2777)', icon: '🎂' },
        { id: 2, name: 'Wedding Bell', bg: 'linear-gradient(45deg, #fbbf24, #d97706)', icon: '💍' },
        { id: 3, name: 'Anniversary Special', bg: 'linear-gradient(45deg, #c084fc, #7c3aed)', icon: '❤️' },
        { id: 4, name: 'Corporate Gift', bg: 'linear-gradient(45deg, #64748b, #0f172a)', icon: '💼' },
        { id: 5, name: 'Housewarming', bg: 'linear-gradient(45deg, #34d399, #059669)', icon: '🏠' },
        { id: 6, name: 'Generic BB Card', bg: 'linear-gradient(45deg, #6366f1, #312e81)', icon: '🛒' },
    ];

    return (
        <>
            <Header />
            <main className={styles.discoveryPage}>
                <section className={styles.hero} style={{ background: 'linear-gradient(135deg, #6366f1 0%, #312e81 100%)' }}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <span className={styles.badge}>🎁 Spread Joy</span>
                            <h1>Gift Cards</h1>
                            <p>The perfect gift for any occasion. Choose a theme and let them pick their favorite products.</p>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className={styles.grid}>
                        {cardStyles.map(card => (
                            <div key={card.id} className={styles.card} style={{ background: 'white', padding: '1rem', borderRadius: '25px', position: 'relative', overflow: 'hidden' }}>
                                <div style={{
                                    height: '180px',
                                    background: card.bg,
                                    borderRadius: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    color: 'white'
                                }}>
                                    <span style={{ fontSize: '3.5rem' }}>{card.icon}</span>
                                    <h3 style={{ margin: '10px 0 0', fontWeight: 800 }}>BHARATBAZAAR</h3>
                                </div>
                                <div style={{ padding: '1.5rem 0.5rem 0.5rem' }}>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>{card.name}</h4>
                                    <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Digital Voucher delivered via Email/SMS</p>
                                    <button className="primary-btn" style={{ width: '100%', padding: '12px' }}>Buy Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
