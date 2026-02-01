'use client';

import { use, useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { products } from '@/data/products';
import { useApp } from '@/context/AppContext';
import styles from './product.module.css';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function ProductDetails({ params }: PageProps) {
    const { id } = use(params);
    const { addToCart } = useApp();
    const [quantity, setQuantity] = useState(1);

    const product = products.find(p => p.id === id);

    if (!product) {
        notFound();
    }

    const { name, price, originalPrice, description, rating, category, brand, isGrocery, discount } = product;

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
    };

    return (
        <>
            <Header />
            <main className={styles.productPage}>
                <div className="container">
                    <div className={styles.productGrid}>
                        <div className={styles.imageGallery}>
                            <div className={styles.mainImage}>
                                <div className={styles.imageIcon}>
                                    {isGrocery ? '🍎' : category === 'fashion' ? '👕' : '📱'}
                                </div>
                                {discount && <span className={styles.discountBadge}>{discount} OFF</span>}
                            </div>
                            <div className={styles.thumbnailList}>
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className={styles.thumbnail}></div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.productInfo}>
                            <div className={styles.breadcrumbs}>
                                <span>Home</span> / <span>{category}</span> / <span>{brand}</span>
                            </div>

                            <h1 className={styles.productTitle}>{name}</h1>
                            <p className={styles.brandName}>By <strong>{brand}</strong> {brand === 'BharatBazaar' && '✅ Verified'}</p>

                            <div className={styles.ratingRow}>
                                <div className={styles.stars}>{"★".repeat(Math.round(rating))}</div>
                                <span className={styles.ratingText}>{rating} Rating & 1,240 Reviews</span>
                            </div>

                            <div className={styles.pricingSection}>
                                <div className={styles.priceRow}>
                                    <span className={styles.currentPrice}>₹{price.toLocaleString()}</span>
                                    {originalPrice && <span className={styles.oldPrice}>₹{originalPrice.toLocaleString()}</span>}
                                    {discount && <span className={styles.discountText}>{discount} OFF</span>}
                                </div>
                                <p className={styles.taxInfo}>Inclusive of all taxes</p>
                            </div>

                            <div className={styles.optionsSection}>
                                {category === 'fashion' ? (
                                    <div className={styles.optionGroup}>
                                        <span className={styles.optionLabel}>Select Size:</span>
                                        <div className={styles.sizeGrid}>
                                            {['S', 'M', 'L', 'XL', 'XXL'].map(s => (
                                                <button key={s} className={styles.sizeBtn}>{s}</button>
                                            ))}
                                        </div>
                                    </div>
                                ) : isGrocery ? (
                                    <div className={styles.optionGroup}>
                                        <span className={styles.optionLabel}>Pack Size:</span>
                                        <div className={styles.sizeGrid}>
                                            {['250g', '500g', '1kg', '5kg'].map(s => (
                                                <button key={s} className={`${styles.sizeBtn} ${s === '1kg' ? styles.activeSize : ''}`}>{s}</button>
                                            ))}
                                        </div>
                                    </div>
                                ) : null}
                            </div>

                            <div className={styles.checkoutActions}>
                                <div className={styles.qtySelector}>
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}>
                                    Add to Cart
                                </button>
                                <button className={styles.buyNowBtn}>
                                    Buy Now
                                </button>
                            </div>

                            <div className={styles.deliveryCheck}>
                                <h4>Check Delivery</h4>
                                <div className={styles.pincodeInput}>
                                    <input type="text" placeholder="Enter Pincode" defaultValue="400001" />
                                    <button>Check</button>
                                </div>
                                <p className={styles.deliveryStatus}>🚚 Delivery by <strong>Tomorrow, 8 AM</strong></p>
                            </div>

                            <div className={styles.productDetails}>
                                <h3>Product Details</h3>
                                <p>{description || 'High-quality product from BharatBazaar Mega Mart. Specially curated for your needs with the best price guarantee.'}</p>
                                <ul>
                                    <li>100% Original products</li>
                                    <li>Easy 7 days returns and exchanges</li>
                                    <li>Pay on delivery might be available</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
