'use client';

import { useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './cart.module.css';
import { CartItem, CartCategoryGroup } from '@/types/cart';
import { useApp } from '@/context/AppContext';
import Link from 'next/link';

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, addToCart } = useApp();
    const [savedItems, setSavedItems] = useState<CartItem[]>([]);
    const [useWallet, setUseWallet] = useState(false);
    const wallatBalance = 250;

    // Group items by category for separate delivery slots
    const groups: CartCategoryGroup[] = [
        {
            category: 'Grocery & Daily Needs',
            items: cartItems.filter(item => item.category === 'grocery' || item.category === 'pet-supplies'),
            deliverySlot: 'Tomorrow, 6 AM - 9 AM'
        },
        {
            category: 'Fashion & Electronics',
            items: cartItems.filter(item => item.category === 'fashion' || item.category === 'electronics'),
            deliverySlot: 'Standard Delivery (2-3 Days)'
        }
    ].filter(g => g.items.length > 0);

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const totalDiscount = cartItems.reduce((acc, item) => {
        const original = item.originalPrice || item.price;
        return acc + (original - item.price) * item.quantity;
    }, 0);
    const shipping = cartItems.length > 0 ? (subtotal > 499 ? 0 : 49) : 0;
    const finalTotal = subtotal + shipping - (useWallet ? Math.min(wallatBalance, subtotal) : 0);

    const saveForLater = (item: CartItem) => {
        removeFromCart(item.id);
        setSavedItems(prev => [...prev, item]);
    };

    const moveToCart = (item: CartItem) => {
        setSavedItems(prev => prev.filter(i => i.id !== item.id));
        addToCart(item);
    };

    return (
        <>
            <Header />
            <main className={styles.cartPage}>
                <div className="container">
                    <h1 className={styles.title}>Your Smart Cart</h1>

                    {cartItems.length === 0 ? (
                        <div className={styles.emptyCart}>
                            <div className={styles.emptyIcon}>🛒</div>
                            <h2>Your cart is empty</h2>
                            <p>Looks like you haven&apos;t added anything to your cart yet.</p>
                            <Link href="/" className="primary-btn" style={{ padding: '1rem 2rem', marginTop: '1.5rem', display: 'inline-block' }}>Start Shopping</Link>
                        </div>
                    ) : (
                        <div className={styles.mainLayout}>
                            {/* Left Column: Items Grouped by Category */}
                            <div className={styles.itemsSection}>
                                {groups.map((group, idx) => (
                                    <div key={idx} className={styles.categoryGroup}>
                                        <div className={styles.groupHeader}>
                                            <h3>
                                                {group.category.includes('Grocery') ? '🍎' : '📦'}
                                                {group.category}
                                            </h3>
                                            <div className={styles.deliverySelector}>
                                                <label>Delivery Speed:</label>
                                                <select className={styles.typeSelect}>
                                                    {group.category.includes('Grocery') ? (
                                                        <>
                                                            <option>Express (10-30 Mins)</option>
                                                            <option>Scheduled</option>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <option>Standard (1-3 Days)</option>
                                                            <option>Night Delivery (9 PM - 12 AM)</option>
                                                            <option>Scheduled</option>
                                                        </>
                                                    )}
                                                </select>
                                            </div>
                                        </div>

                                        <div className={styles.itemList}>
                                            {group.items.map(item => (
                                                <div key={item.id} className={styles.cartItem}>
                                                    <div className={styles.itemThumb}>
                                                        <span style={{ fontSize: '2rem' }}>{item.isGrocery ? '🍎' : item.category === 'fashion' ? '👕' : '📱'}</span>
                                                    </div>
                                                    <div className={styles.itemInfo}>
                                                        <span className={styles.brand}>{item.brand}</span>
                                                        <h4>{item.name}</h4>
                                                        <div className={styles.itemActions}>
                                                            <span className={styles.actionLink} onClick={() => removeFromCart(item.id)}>Remove</span>
                                                            <span className={styles.actionLink} onClick={() => saveForLater(item)}>Save for Later</span>
                                                        </div>
                                                    </div>
                                                    <div className={styles.qtyPrice}>
                                                        <div className={styles.qtyControl}>
                                                            <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, -1)}>−</button>
                                                            <span>{item.quantity}</span>
                                                            <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, 1)}>+</button>
                                                        </div>
                                                        <span className={styles.price}>₹{(item.price * item.quantity).toLocaleString()}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* Save for later section */}
                                {savedItems.length > 0 && (
                                    <section className={styles.saveForLater}>
                                        <h2>Saved for Later ({savedItems.length})</h2>
                                        <div className={styles.saveGrid}>
                                            {savedItems.map(item => (
                                                <div key={item.id} className={styles.categoryGroup} style={{ padding: '1.5rem' }}>
                                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                                        <div className={styles.itemThumb} style={{ width: '60px', height: '60px' }}>
                                                            {item.isGrocery ? '🍎' : '📦'}
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <h4 style={{ fontSize: '0.9rem' }}>{item.name}</h4>
                                                            <p style={{ fontWeight: '800', marginTop: '5px' }}>₹{item.price}</p>
                                                            <button
                                                                className="secondary-btn"
                                                                style={{ marginTop: '10px', padding: '5px 15px', fontSize: '0.8rem' }}
                                                                onClick={() => moveToCart(item)}
                                                            >
                                                                Move to Cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}
                            </div>

                            {/* Right Column: Checkout Summary */}
                            <aside className={styles.summarySidebar}>
                                <div className={styles.walletBox}>
                                    <div className={styles.walletText}>
                                        <h5>Wallet Balance</h5>
                                        <p>₹{wallatBalance} available</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={useWallet}
                                        onChange={(e) => setUseWallet(e.target.checked)}
                                        style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }}
                                    />
                                </div>

                                <div className={styles.summaryCard}>
                                    <h3>Order Summary</h3>
                                    <div className={styles.row}>
                                        <span>Subtotal ({cartItems.length} items)</span>
                                        <span>₹{subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>Item Savings</span>
                                        <span style={{ color: 'var(--success)' }}>− ₹{totalDiscount.toLocaleString()}</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>Shipping Fee</span>
                                        <span>{shipping === 0 ? <span style={{ color: 'var(--success)' }}>FREE</span> : `₹${shipping}`}</span>
                                    </div>

                                    <div className={styles.breakdown}>
                                        <p>Category Breakup</p>
                                        {groups.map(g => (
                                            <div key={g.category} className={styles.breakdownRow}>
                                                <span>{g.category.split(' ')[0]}</span>
                                                <span>₹{g.items.reduce((acc, i) => acc + (i.price * i.quantity), 0).toLocaleString()}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {useWallet && subtotal > 0 && (
                                        <div className={styles.row}>
                                            <span>Wallet Usage</span>
                                            <span style={{ color: 'var(--success)' }}>− ₹{Math.min(wallatBalance, subtotal)}</span>
                                        </div>
                                    )}

                                    <div className={styles.couponSection}>
                                        <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>Apply Coupon</p>
                                        <div className={styles.couponInput}>
                                            <input type="text" placeholder="Enter code" />
                                            <button className={styles.actionLink}>Apply</button>
                                        </div>
                                    </div>

                                    <div className={`${styles.row} ${styles.rowTotal}`}>
                                        <span>Total</span>
                                        <span>₹{finalTotal.toLocaleString()}</span>
                                    </div>

                                    <button className={styles.checkoutBtn} onClick={() => alert('Order Placed! ID: BB-' + Math.random().toString(36).substr(2, 9).toUpperCase())}>Proceed to Checkout</button>
                                </div>

                                <div style={{ textAlign: 'center', opacity: 0.6, fontSize: '0.8rem' }}>
                                    <p>🛡️ 100% Safe and Secure Payments</p>
                                </div>
                            </aside>
                        </div>
                    )}
                </div>
            </main>
            <div style={{ marginTop: 'auto' }}>
                <Footer />
            </div>
        </>
    );
}
