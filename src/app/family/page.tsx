'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WalletCard from '@/components/Family/WalletCard';
import styles from './page.module.css';
import { useApp } from '@/context/AppContext';

export default function FamilyDashboard() {
    const { familyMembers, updateMemberLimit, activeMember } = useApp();

    const getProgressColor = (spent: number, limit: number) => {
        const percentage = (spent / limit) * 100;
        if (percentage > 90) return styles.danger;
        if (percentage > 75) return styles.warning;
        return styles.bar;
    };

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <div className={styles.header}>
                        <h1>Family Account Center</h1>
                        <p>Manage shared wallet, spending limits, and permissions.</p>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.leftCol}>
                            <WalletCard />
                        </div>

                        <div className={styles.rightCol}>
                            <div className={styles.sectionTitle}>
                                <h2>Family Members</h2>
                                <p>Set spending limits for each member.</p>
                            </div>

                            <div className={styles.memberList}>
                                {familyMembers.map(member => (
                                    <div key={member.id} className={styles.memberCard}>
                                        <div className={styles.avatar}>{member.avatar}</div>
                                        <div className={styles.info}>
                                            <span className={styles.name}>
                                                {member.name} {member.id === activeMember?.id && '(You)'}
                                            </span>
                                            <span className={styles.role}>{member.role}</span>

                                            {member.spendingLimit && (
                                                <div className={styles.spendInfo}>
                                                    <div className={styles.progress}>
                                                        <div
                                                            className={`${styles.bar} ${getProgressColor(member.spentThisMonth, member.spendingLimit)}`}
                                                            style={{ width: `${Math.min((member.spentThisMonth / member.spendingLimit) * 100, 100)}%` }}
                                                        ></div>
                                                    </div>
                                                    <small>
                                                        ₹{member.spentThisMonth.toLocaleString()} spent of ₹{member.spendingLimit.toLocaleString()}
                                                    </small>
                                                </div>
                                            )}
                                        </div>

                                        <div className={styles.limits}>
                                            <label className={styles.limitLabel}>Monthly Limit (₹)</label>
                                            <input
                                                type="number"
                                                className={styles.limitInput}
                                                value={member.spendingLimit || ''}
                                                onChange={(e) => updateMemberLimit(member.id, Number(e.target.value))}
                                                disabled={activeMember?.role !== 'head' && activeMember?.role !== 'elder'}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
