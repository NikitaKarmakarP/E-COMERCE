'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/Product/ProductCard';
import { products } from '@/data/products';
import styles from '../discovery.module.css';

export default function NewReleasesPage() {
    // Mock new releases: slice of products
    const newReleases = products.slice(-6);

    return (
        <>
            <Header />
            <main className={styles.discoveryPage}>
                <section className={styles.hero} style={{ background: 'linear-gradient(135deg, #10b981 0%, #064e3b 100%)' }}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <span className={styles.badge}>✨ Just Arrived</span>
                            <h1>New Releases</h1>
                            <p>Be the first to own the latest gear, fashion, and gadgets in the market.</p>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className={styles.filterBar}>
                        <button className={`${styles.filterBtn} ${styles.filterBtnActive}`}>Latest</button>
                        <button className={styles.filterBtn}>Coming Soon</button>
                        <button className={styles.filterBtn}>Fashion</button>
                        <button className={styles.filterBtn}>Mobiles</button>
                    </div>

                    <div className={styles.grid}>
                        {newReleases.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
