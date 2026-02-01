'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/Product/ProductCard';
import { products } from '@/data/products';
import styles from '../discovery.module.css';

export default function BharatFreshPage() {
    // Mock fresh: grocery items
    const freshProducts = products.filter(p => p.isGrocery);

    return (
        <>
            <Header />
            <main className={styles.discoveryPage}>
                <section className={styles.hero} style={{ background: 'linear-gradient(135deg, #10b981 0%, #065f46 100%)' }}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <span className={styles.badge}>🥬 Farm to Table</span>
                            <h1>Bharat Fresh</h1>
                            <p>Hand-picked organic vegetables, fresh fruits, and daily essentials delivered within 10 minutes.</p>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className={styles.filterBar}>
                        <button className={`${styles.filterBtn} ${styles.filterBtnActive}`}>All Fresh</button>
                        <button className={styles.filterBtn}>Vegetables</button>
                        <button className={styles.filterBtn}>Fruits</button>
                        <button className={styles.filterBtn}>Dairy & Eggs</button>
                    </div>

                    <div className={styles.grid}>
                        {freshProducts.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
