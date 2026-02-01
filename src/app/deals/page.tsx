'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/Product/ProductCard';
import { products } from '@/data/products';
import styles from './deals.module.css';

export default function DealsPage() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 14,
        minutes: 32,
        seconds: 45
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const dealProducts = products.filter(p => p.discount);

    return (
        <>
            <Header />
            <main className={styles.dealsPage}>
                <div className={styles.heroBanner}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <div className={styles.badge}>🔥 LIMITED TIME OFFER</div>
                            <h1>Today&apos;s Super Deals</h1>
                            <p>Up to 80% Off on Top Brands. Grab them before they&apos;re gone!</p>

                            <div className={styles.timerContainer}>
                                <div className={styles.timeBox}>
                                    <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                                    <label>HOURS</label>
                                </div>
                                <div className={styles.timerSeparator}>:</div>
                                <div className={styles.timeBox}>
                                    <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                                    <label>MINUTES</label>
                                </div>
                                <div className={styles.timerSeparator}>:</div>
                                <div className={styles.timeBox}>
                                    <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                                    <label>SECONDS</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className={styles.dealsGrid}>
                        {dealProducts.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
