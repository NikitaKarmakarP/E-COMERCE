'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/Product/ProductCard';
import { products } from '@/data/products';
import styles from '../discovery.module.css';

export default function MoversShakersPage() {
    // Mock movers: products with highest discounts
    const movers = products.filter(p => p.discount && parseInt(p.discount) >= 40);

    return (
        <>
            <Header />
            <main className={styles.discoveryPage}>
                <section className={styles.hero} style={{ background: 'linear-gradient(135deg, #a855f7 0%, #4c1d95 100%)' }}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <span className={styles.badge}>📈 Biggest Gainers</span>
                            <h1>Movers & Shakers</h1>
                            <p>Products with the biggest jump in sales velocity over the last 24 hours.</p>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className={styles.filterBar}>
                        <button className={`${styles.filterBtn} ${styles.filterBtnActive}`}>All Day</button>
                        <button className={styles.filterBtn}>Electronics</button>
                        <button className={styles.filterBtn}>Books</button>
                    </div>

                    <div className={styles.grid}>
                        {movers.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
