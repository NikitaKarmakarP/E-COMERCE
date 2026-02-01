'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/Product/ProductCard';
import { products } from '@/data/products';
import styles from '../discovery.module.css';

export default function BestSellersPage() {
    // Mock best sellers: featured products
    const bestSellers = products.filter(p => p.featured);

    return (
        <>
            <Header />
            <main className={styles.discoveryPage}>
                <section className={styles.hero} style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #b45309 100%)' }}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <span className={styles.badge}>🏆 Top Rated</span>
                            <h1>Best Sellers</h1>
                            <p>Our most loved products, backed by thousands of happy customers.</p>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className={styles.filterBar}>
                        <button className={`${styles.filterBtn} ${styles.filterBtnActive}`}>All Time</button>
                        <button className={styles.filterBtn}>This Month</button>
                        <button className={styles.filterBtn}>Electronics</button>
                        <button className={styles.filterBtn}>Home Decor</button>
                    </div>

                    <div className={styles.grid}>
                        {bestSellers.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
