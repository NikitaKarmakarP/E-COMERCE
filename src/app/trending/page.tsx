'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/Product/ProductCard';
import { products } from '@/data/products';
import styles from '../discovery.module.css';

export default function TrendingPage() {
    // Mock trending logic: products with high ratings or featured
    const trendingProducts = products.filter(p => p.rating >= 4.7);

    return (
        <>
            <Header />
            <main className={styles.discoveryPage}>
                <section className={styles.hero} style={{ background: 'linear-gradient(135deg, #f43f5e 0%, #881337 100%)' }}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <span className={styles.badge}>🔥 What&apos;s Hot</span>
                            <h1>Trending Now</h1>
                            <p>Discover the most popular products being bought across India right now.</p>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className={styles.filterBar}>
                        <button className={`${styles.filterBtn} ${styles.filterBtnActive}`}>All Trending</button>
                        <button className={styles.filterBtn}>Fashion</button>
                        <button className={styles.filterBtn}>Electronics</button>
                        <button className={styles.filterBtn}>Grocery</button>
                    </div>

                    <div className={styles.grid}>
                        {trendingProducts.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
