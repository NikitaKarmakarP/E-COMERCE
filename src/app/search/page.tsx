'use client';

import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/Product/ProductCard';
import { products } from '@/data/products';
import styles from './search.module.css';

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';

    const results = products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.brand?.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <Header />
            <main className={styles.searchPage}>
                <div className="container">
                    <div className={styles.searchHeader}>
                        <h1>Search Results for &ldquo;{query}&rdquo;</h1>
                        <p>{results.length} items found</p>
                    </div>

                    {results.length > 0 ? (
                        <div className={styles.productGrid}>
                            {results.map(product => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.noResults}>
                            <span className={styles.noResultsIcon}>🔍</span>
                            <h2>No results found</h2>
                            <p>Try different keywords or check your spelling</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
