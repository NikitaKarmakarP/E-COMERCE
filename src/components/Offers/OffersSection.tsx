'use client';

import styles from './OffersSection.module.css';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';

export default function OffersSection() {
    const { addToCart } = useApp();
    const comboDeals = [
        { id: 'c1', title: 'Breakfast Combo', items: 'Oats + Honey + Almond Milk', price: 999, originalPrice: 1499, savings: 500, icon: '🥣' },
        { id: 'c2', title: 'Gym Essentials', items: 'Protein + Shaker + Peanut Butter', price: 2499, originalPrice: 3499, savings: 1000, icon: '💪' },
    ];

    const handleAddCombo = (deal: any) => {
        addToCart({
            id: deal.id,
            name: deal.title,
            price: deal.price,
            originalPrice: deal.originalPrice,
            category: 'grocery',
            image: '',
            rating: 5,
            isGrocery: true,
            brand: 'BharatBazaar Value'
        });
    };

    return (
        <section className={styles.offersSection}>
            <div className="container">
                <div className={styles.sectionGrid}>

                    {/* Combo Deals */}
                    <div className={styles.comboCard}>
                        <div className={styles.cardHeader}>
                            <h3>Exclusive Combo Deals</h3>
                            <span className={styles.badge}>Save up to ₹1000</span>
                        </div>
                        <div className={styles.comboList}>
                            {comboDeals.map(deal => (
                                <div key={deal.id} className={styles.dealItem}>
                                    <div className={styles.dealIcon}>{deal.icon}</div>
                                    <div className={styles.dealMeta}>
                                        <h4>{deal.title}</h4>
                                        <p>{deal.items}</p>
                                        <div className={styles.priceRow}>
                                            <span className={styles.dealPrice}>₹{deal.price}</span>
                                            <span className={styles.dealOldPrice}>₹{deal.originalPrice}</span>
                                        </div>
                                    </div>
                                    <button className={styles.addCombo} onClick={() => handleAddCombo(deal)}>Add Combo</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Festival Banner */}
                    <div className={styles.festivalBanner}>
                        <div className={styles.festivalOverlay}>
                            <span className={styles.festTag}>SEASONAL OFFER</span>
                            <h2>Holi Dhamaka Sale</h2>
                            <p>Flat 30% Off on White Apparel & Organic Colors</p>
                            <div className={styles.festActions}>
                                <Link href="/category/fashion" className={styles.festBtn}>Shop Fashion</Link>
                                <Link href="/category/grocery" className={styles.festBtnOutline}>Shop Colors</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
