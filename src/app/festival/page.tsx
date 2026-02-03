'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/Product/ProductCard';
import { products } from '@/data/products';
import styles from '../discovery.module.css';

export default function FestivalPage() {
    // Show products that are featured as part of festival deals
    const festivalProducts = products.filter(p => p.featured);

    return (
        <>
            <Header />
            <main className={styles.discoveryPage}>
                <section className={styles.hero} style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' }}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <span className={styles.badge} style={{ color: 'var(--secondary)' }}>✨ Celebration Specials</span>
                            <h1>Festival Dhamaka</h1>
                            <p>Celebrate the season with extra savings and exclusive collections.</p>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className={styles.filterBar}>
                        <button className={`${styles.filterBtn} ${styles.filterBtnActive}`}>All Festival Deals</button>
                        <button className={styles.filterBtn}>Fashion</button>
                        <button className={styles.filterBtn}>Sweets & Gifting</button>
                        <button className={styles.filterBtn}>Home Decor</button>
                    </div>

                    <div className={styles.grid}>
                        {festivalProducts.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
