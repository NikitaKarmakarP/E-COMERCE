'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './subscriptions.module.css';
import Link from 'next/link';

export default function SubscriptionsPage() {
    const subscriptions = [
        { id: 1, name: 'Smart Milk Delivery', frequency: 'Daily', items: ['A2 Cow Milk 1L'], nextDelivery: 'Tomorrow, 7 AM', status: 'Active' },
        { id: 2, name: 'Fresh Fruits Basket', frequency: 'Weekly', items: ['Seasonal Fruits 2kg'], nextDelivery: 'Sat, 10 Feb', status: 'Active' },
        { id: 3, name: 'Pantry Essentials', frequency: 'Monthly', items: ['Atta 5kg', 'Rice 5kg', 'Dal 2kg'], nextDelivery: 'Mar 01', status: 'Paused' },
    ];

    return (
        <>
            <Header />
            <main className={styles.subsPage}>
                <div className="container">
                    <header className={styles.header}>
                        <h1>My Smart Subscriptions</h1>
                        <p>Manage your recurring deliveries and save up to 15% on every order.</p>
                        <button className="primary-btn">+ Create New Subscription</button>
                    </header>

                    <div className={styles.subsGrid}>
                        {subscriptions.map(sub => (
                            <div key={sub.id} className={styles.subCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.subInfo}>
                                        <h3>{sub.name}</h3>
                                        <span className={sub.status === 'Active' ? styles.activeBadge : styles.pausedBadge}>{sub.status}</span>
                                    </div>
                                    <span className={styles.freq}>{sub.frequency}</span>
                                </div>
                                <div className={styles.items}>
                                    <strong>Items:</strong> {sub.items.join(', ')}
                                </div>
                                <div className={styles.footer}>
                                    <div className={styles.delivery}>
                                        <span>Next Delivery:</span>
                                        <strong>{sub.nextDelivery}</strong>
                                    </div>
                                    <div className={styles.actions}>
                                        <button className={styles.editBtn}>Edit</button>
                                        <button className={styles.pauseBtn}>{sub.status === 'Active' ? 'Pause' : 'Resume'}</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <section className={styles.benefits}>
                        <h2>Why Subscribe?</h2>
                        <div className={styles.benefitsGrid}>
                            <div className={styles.benefit}>
                                <span>💰</span>
                                <h4>Guaranteed Savings</h4>
                                <p>Get flat 15% off on all items in your subscription list.</p>
                            </div>
                            <div className={styles.benefit}>
                                <span>⏳</span>
                                <h4>Set and Forget</h4>
                                <p>Never run out of essentials. We deliver like clockwork.</p>
                            </div>
                            <div className={styles.benefit}>
                                <span>🚚</span>
                                <h4>Free Priority Shipping</h4>
                                <p>Zero delivery charges on all subscription orders.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
