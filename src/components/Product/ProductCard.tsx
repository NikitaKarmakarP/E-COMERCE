'use client';

import styles from './ProductCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    rating: number;
    discount?: string;
    isGrocery?: boolean;
    brand?: string;
}

export default function ProductCard({
    id, name, price, originalPrice, image, category, rating, discount, isGrocery, brand
}: ProductCardProps) {
    const { isElderMode, addToCart, toggleWishlist, isInWishlist } = useApp();
    const isFashion = category.toLowerCase() === 'fashion';
    const isWished = isInWishlist(id);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addToCart({ id, name, price, originalPrice, image, category, rating, discount, isGrocery, brand });
    };

    const handleWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist({ id, name, price, originalPrice, image, category, rating, discount, isGrocery, brand });
    };

    return (
        <div className={`${styles.card} ${isFashion ? styles.fashionCard : ''} ${isGrocery ? styles.groceryCard : ''} ${isElderMode ? styles.elderCard : ''} animate-fade-in`}>
            <div className={styles.imageWrapper}>
                <Link href={`/product/${id}`} className={styles.imageLink}>
                    <div className={styles.imagePlaceholder}>
                        <span className={styles.imageIcon} aria-hidden="true">{isGrocery ? '🍎' : isFashion ? '👕' : '📦'}</span>
                        {brand && (
                            <div className={styles.verifiedBadge} title="Verified Seller">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--primary)" ><path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z"></path><path d="M10 15.5l-3.5-3.5 1.41-1.41L10 12.67l6.59-6.58L18 7.5l-8 8z" fill="white"></path></svg>
                            </div>
                        )}
                        {discount && <span className={styles.discountBadge}>{discount} OFF</span>}
                        {isFashion && <div className={styles.fashionOverlay}><span>View Similar</span></div>}
                    </div>
                </Link>
                <button
                    className={`${styles.wishlistBtn} ${isWished ? styles.wished : ''}`}
                    onClick={handleWishlist}
                    aria-label={isWished ? "Remove from Wishlist" : "Add to Wishlist"}
                    aria-pressed={isWished}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={isWished ? "var(--secondary)" : "none"} stroke={isWished ? "var(--secondary)" : "currentColor"} strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.89-8.89 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
            </div>

            <div className={styles.content}>
                {brand && <div className={styles.brand}>{brand}</div>}

                <Link href={`/product/${id}`}>
                    <h3 className={styles.title}>{name}</h3>
                </Link>

                <div className={styles.ratingRow}>
                    <div className={styles.ratingStars} aria-label={`${rating} out of 5 stars`}>
                        <span aria-hidden="true">{"★".repeat(Math.round(rating))}</span>
                        <span className={styles.emptyStars} aria-hidden="true">{"★".repeat(5 - Math.round(rating))}</span>
                    </div>
                    <span className={styles.ratingValue}>{rating}</span>
                </div>

                <div className={styles.priceRow}>
                    <div className={styles.pricing}>
                        <span className={styles.price}>₹{price.toLocaleString()}</span>
                        {originalPrice && <span className={styles.originalPrice}>₹{originalPrice.toLocaleString()}</span>}
                    </div>
                    {discount && <span className={styles.discountText}>({discount} OFF)</span>}
                </div>

                {isGrocery ? (
                    <div className={styles.groceryActions}>
                        <div className={styles.weightSelect}>1 kg ▾</div>
                        <button className={styles.addBtn} onClick={handleAddToCart} aria-label={`Add ${name} to cart`}>ADD</button>
                    </div>
                ) : (
                    <button className={styles.buyBtn} onClick={handleAddToCart} aria-label={isFashion ? `Add ${name} to Bag` : `Add ${name} to Cart`}>{isFashion ? 'Add to Bag' : 'Add to Cart'}</button>
                )}
            </div>
        </div>
    );
}
