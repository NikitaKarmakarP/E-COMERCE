'use client';

import { useApp } from '@/context/AppContext';
import styles from './SmartHub.module.css';
import Link from 'next/link';

export default function SmartHub() {
    const { activeMember, familyMembers, setActiveMember, addToCart } = useApp();

    // Derive budget info from active member
    const budgetLimit = activeMember?.spendingLimit || 10000; // Default fallback
    const currentSpend = activeMember?.spentThisMonth || 0;

    const predictions = [
        { id: 1, item: 'Milk (2L)', type: 'restock', daysLeft: 2, icon: '🥛' },
        { id: 2, item: 'Atta (5kg)', type: 'restock', daysLeft: 5, icon: '🌾' },
        { id: 3, item: 'Detergent', type: 'prediction', reason: 'Monthly buy expected tomorrow', icon: '🧼' },
    ];

    const festivalDeal = {
        name: 'Holi Dhamaka',
        assistant: 'I noticed you usually buy organic colors and sweets around this time. Want me to add your favorites to the cart?',
        cta: 'View Holi Collection'
    };

    const handleQuickAdd = (p: any) => {
        addToCart({
            id: 'predict-' + p.id,
            name: p.item,
            price: 50, // Mock price for predicted items
            category: 'grocery',
            image: '',
            rating: 5,
            isGrocery: true
        });
    };

    return (
        <div className={styles.hubContainer}>
            <div className="container">
                <div className={styles.hubGrid}>

                    {/* Family Mini Dashboard */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3>Family Group</h3>
                            <button className={styles.settingsBtn} onClick={() => window.location.href = '/family'}>⚙️</button>
                        </div>
                        <div className={styles.familyList}>
                            {familyMembers.map(member => (
                                <div
                                    key={member.id}
                                    className={`${styles.member} ${activeMember?.id === member.id ? styles.activeMember : ''}`}
                                    onClick={() => setActiveMember(member)}
                                >
                                    <span className={styles.avatar}>{member.avatar}</span>
                                    <span className={styles.memberName}>{member.name}</span>
                                    <span className={styles.roleTag}>{member.role}</span>
                                </div>
                            ))}
                            <button className={styles.addMember} onClick={() => alert('Invite a family member by entering their phone number or email...')}>+</button>
                        </div>
                        <div className={styles.sharedCartInfo}>
                            <p>🛒 <strong>Shared Cart:</strong> Rahul added 2 items</p>
                        </div>
                    </div>

                    {/* AI Insights & Predictions */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3>Smart Restock</h3>
                            <span className={styles.aiBadge}>AI Powered</span>
                        </div>
                        <div className={styles.predictionList}>
                            {predictions.map(p => (
                                <div key={p.id} className={styles.predictionItem}>
                                    <span className={styles.itemIcon}>{p.icon}</span>
                                    <div className={styles.itemMeta}>
                                        <h4>{p.item}</h4>
                                        <p>{p.daysLeft ? `Running low: ~${p.daysLeft} days left` : p.reason}</p>
                                    </div>
                                    <button className={styles.quickAdd} onClick={() => handleQuickAdd(p)}>Add</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Budget & Subscriptions */}
                    <div className={`${styles.card} ${styles.budgetCard}`}>
                        <h3>{activeMember?.name}&apos;s Budget</h3>
                        <div className={styles.progressContainer}>
                            <div
                                className={styles.progressBar}
                                style={{ width: `${Math.min((currentSpend / budgetLimit) * 100, 100)}%` }}
                            ></div>
                        </div>
                        <div className={styles.budgetMeta}>
                            <span>₹{currentSpend.toLocaleString()} spent</span>
                            <span>Limit: ₹{budgetLimit.toLocaleString()}</span>
                        </div>
                        <div className={styles.subscriptionBox}>
                            <p>📦 <strong>Smart Subscription:</strong> 12 items arriving Sunday</p>
                            <Link href="/subscriptions" className={styles.manageLink}>Manage →</Link>
                        </div>
                    </div>

                    {/* Assistant / Festival Mode */}
                    <div className={`${styles.card} ${styles.assistantCard}`}>
                        <div className={styles.assistantHeader}>
                            <div className={styles.assistantAvatar}>🤖</div>
                            <h4>Festival Shopping Assistant</h4>
                        </div>
                        <p className={styles.assistantMsg}>{festivalDeal.assistant}</p>
                        <Link href="/festival" className={styles.assistantCta}>{festivalDeal.cta}</Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
