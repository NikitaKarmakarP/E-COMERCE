'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { Product } from '@/data/products';
import styles from './QuickViewModal.module.css';

interface QuickViewModalProps {
    product: Product;
    onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
    const { addToCart } = useApp();

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">×</button>

                <div className={styles.imageSection}>
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className={styles.productImage}
                        />
                    ) : (
                        <span style={{ fontSize: '5rem' }}>
                            {product.isGrocery ? '🍎' : product.category === 'fashion' ? '👕' : '📦'}
                        </span>
                    )}
                </div>

                <div className={styles.detailsSection}>
                    <div className={styles.brand}>{product.brand}</div>
                    <h2 className={styles.title}>{product.name}</h2>

                    <div className={styles.rating}>
                        <span>{"★".repeat(Math.round(product.rating))}</span>
                        <span>{product.rating} Rating</span>
                    </div>

                    <div className={styles.priceBlock}>
                        <span className={styles.price}>₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                            <span className={styles.originalPrice}>₹{product.originalPrice.toLocaleString()}</span>
                        )}
                        {product.discount && (
                            <span className={styles.discount}>{product.discount} OFF</span>
                        )}
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            {product.description || 'Premium quality product from BharatBazaar Mega Mart. 100% Original and authentic.'}
                        </p>
                    </div>

                    <div className={styles.actions}>
                        <button
                            className={styles.addToCart}
                            onClick={() => {
                                addToCart(product);
                                onClose();
                            }}
                        >
                            Add to Cart
                        </button>
                        <Link href={`/product/${product.id}`} className={styles.viewDetails}>
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
