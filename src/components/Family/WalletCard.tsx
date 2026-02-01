'use client';

import styles from './WalletCard.module.css';
import { useApp } from '@/context/AppContext';

export default function WalletCard() {
    const { wallet, topUpWallet } = useApp();

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <span className={styles.title}>Family Wallet Balance</span>
                    <span className={styles.icon}>💳</span>
                </div>
                <div className={styles.balance}>
                    {wallet.currency}{wallet.balance.toLocaleString()}
                </div>
                <div className={styles.actions}>
                    <button className={styles.btn} onClick={() => topUpWallet(1000)}>+ Add ₹1,000</button>
                    <button className={styles.btn} onClick={() => topUpWallet(5000)}>+ Add ₹5,000</button>
                </div>
            </div>

            <div className={styles.history}>
                <h3>Recent Transactions</h3>
                <div className={styles.list}>
                    {wallet.transactions.slice(0, 5).map(t => (
                        <div key={t.id} className={styles.transaction}>
                            <div className={styles.tInfo}>
                                <span className={styles.tDesc}>{t.description}</span>
                                <span className={styles.tMeta}>{t.memberName} • {t.date}</span>
                            </div>
                            <span className={`${styles.tAmount} ${t.type === 'purchase' ? styles.debit : styles.credit}`}>
                                {t.type === 'purchase' ? '-' : '+'} {wallet.currency}{t.amount.toLocaleString()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
