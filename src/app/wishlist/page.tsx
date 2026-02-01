'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/Product/ProductCard';
import { useApp } from '@/context/AppContext';
import styles from './wishlist.module.css';
import Link from 'next/link';

export default function WishlistPage() {
    const { wishlistItems } = useApp();

    return (
        <>
            <Header />
            <main className={styles.wishlistPage}>
                <div className="container">
                    <div className={styles.wishlistHeader}>
                        <h1>My Wishlist</h1>
                        <p>{wishlistItems.length} items saved for later</p>
                    </div>

                    {wishlistItems.length > 0 ? (
                        <div className={styles.productGrid}>
                            {wishlistItems.map(product => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <div className={styles.emptyIcon}>❤️</div>
                            <h2>Your wishlist is empty</h2>
                            <p>Save items you like in your wishlist to review them later.</p>
                            <Link href="/" className="primary-btn" style={{ padding: '1rem 2.5rem', marginTop: '2rem', display: 'inline-block' }}>
                                Continue Shopping
                            </Link>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
