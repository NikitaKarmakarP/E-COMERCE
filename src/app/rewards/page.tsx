'use client';

import { useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './rewards.module.css';

export default function RewardsPage() {
    const [points] = useState(2450);
    const [cashback] = useState(450);

    const scratchCards = [
        { id: '1', status: 'unscratched', icon: '🎁', title: 'Gift card' },
        { id: '2', status: 'unscratched', icon: '💰', title: 'Cashback' },
        { id: '3', status: 'locked', icon: '🔒', title: 'Order above ₹999' },
        { id: '4', status: 'locked', icon: '🔒', title: 'Order above ₹1499' },
    ];

    return (
        <>
            <Header />
            <main className={styles.rewardsPage}>
                <div className="container">
                    <h1 className={styles.title}>Rewards & Loyalty</h1>

                    <div className={styles.rewardsGrid}>
                        {/* Loyalty Card */}
                        <div className={styles.mainCard}>
                            <div className={styles.pointsHeader}>
                                <h2>Your Points</h2>
                                <div className={styles.pointsValue}>{points.toLocaleString()}</div>
                                <div className={styles.tierBadge}>GOLD MEMBER</div>
                            </div>

                            <div className={styles.statsRow}>
                                <div className={styles.statBox}>
                                    <h4>Wallet Balance</h4>
                                    <p>₹{cashback}</p>
                                </div>
                                <div className={styles.statBox}>
                                    <h4>Points Value</h4>
                                    <p>₹{points / 10}</p>
                                </div>
                            </div>

                            <div style={{ marginTop: '2.5rem' }}>
                                <button className="primary-btn" style={{ width: '100%', padding: '1.2rem' }}>
                                    Convert Points to Wallet
                                </button>
                            </div>
                        </div>

                        {/* Scratch Cards Section */}
                        <div className={styles.mainCard}>
                            <div className={styles.scratchSection}>
                                <h3>Scratch Cards</h3>
                                <div className={styles.scratchGrid}>
                                    {scratchCards.map(card => (
                                        <div key={card.id} className={`${styles.cardContainer} ${card.status === 'locked' ? styles.cardLocked : styles.cardUnscratched}`}>
                                            <span>{card.icon}</span>
                                            <p style={{ fontSize: '0.75rem', textAlign: 'center', padding: '0 10px' }}>{card.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Referral Support */}
                        <div className={`${styles.mainCard} ${styles.referralCard}`}>
                            <h2>Refer & Earn ₹250</h2>
                            <p>Invite your friends to BharatBazaar. They get ₹100 off on their first order, and you get ₹250 in your wallet!</p>

                            <div className={styles.refCodeBox}>
                                <span className={styles.codeText}>BB250MEGA</span>
                                <button className={styles.copyBtn}>Copy Code</button>
                            </div>
                        </div>

                        {/* Benefits Info */}
                        <div className={styles.mainCard} style={{ gridColumn: '1 / -1' }}>
                            <h3>Privilege Benefits</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '1.5rem' }}>
                                <div>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>⚡ Free Delivery</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>On all orders above ₹199 (Standard is ₹499)</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>🏷️ Exclusive Deals</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Additional 5% discount on all Grocery items</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>🎧 Priority Support</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Direct access to dedicated support team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
