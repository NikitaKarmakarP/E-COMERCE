'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './track.module.css';
import { Order, Shipment } from '@/types/delivery';

export default function TrackOrderPage() {
    const mockOrder: Order = {
        id: 'BB-9928341',
        date: 'Feb 01, 2026',
        total: 8195,
        shipments: [
            {
                id: 'SHP-001',
                type: 'express',
                status: 'out-for-delivery',
                items: ['Organic Fresh Alphonso Mangoes', 'Premium Dog Food'],
                estimatedArrival: 'Today, 2:45 PM (15 mins away)',
                trackingStep: 3,
                warehouse: 'Bhiwandi Local Hub (WH-04)'
            },
            {
                id: 'SHP-002',
                type: 'standard',
                status: 'packed',
                items: ['Premium Cotton Polo T-Shirt', 'Smart Noise Cancelling Headphones'],
                estimatedArrival: 'Feb 03, 2026',
                trackingStep: 2,
                warehouse: 'Gurugram Mega Warehouse (WH-01)'
            },
            {
                id: 'SHP-003',
                type: 'night',
                status: 'ordered',
                items: ['Wireless Mechanical Keyboard'],
                estimatedArrival: 'Tomorrow, 11:30 PM',
                trackingStep: 1,
                warehouse: 'Bengaluru Tech Hub (WH-02)'
            }
        ]
    };

    const steps = ['Ordered', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered'];

    return (
        <>
            <Header />
            <main className={styles.trackPage}>
                <div className="container">
                    <h1 className={styles.title}>Track Your Order</h1>

                    <div className={styles.orderCard}>
                        <div className={styles.orderHeader}>
                            <div className={styles.orderMeta}>
                                <h2>Order #{mockOrder.id}</h2>
                                <p>Placed on {mockOrder.date} • {mockOrder.shipments.length} Shipments</p>
                            </div>
                            <div className={styles.splitBadge}>
                                Order Split for Faster Delivery ⚡
                            </div>
                        </div>

                        <div className={styles.shipmentList}>
                            {mockOrder.shipments.map((shipment) => (
                                <div key={shipment.id} className={styles.shipmentCard}>
                                    <div className={`${styles.shipmentType} ${styles['type' + shipment.type.charAt(0).toUpperCase() + shipment.type.slice(1)]}`}>
                                        {shipment.type} delivery
                                    </div>

                                    <div className={styles.shipmentHeader}>
                                        <div className={styles.arrivalInfo}>
                                            <h4>Estimated Arrival</h4>
                                            <p>{shipment.estimatedArrival}</p>
                                        </div>
                                        <div className={styles.warehouseInfo}>
                                            Fulfilling from:<br />
                                            <strong>{shipment.warehouse}</strong>
                                        </div>
                                    </div>

                                    {/* Visual Tracker */}
                                    <div className={styles.timeline}>
                                        <div
                                            className={styles.progressLine}
                                            style={{ width: `${(shipment.trackingStep / (steps.length - 1)) * 90}%` }}
                                        ></div>
                                        {steps.map((step, idx) => (
                                            <div
                                                key={step}
                                                className={`${styles.step} ${idx < shipment.trackingStep ? styles.stepCompleted : ''} ${idx === shipment.trackingStep ? styles.stepActive : ''}`}
                                            >
                                                <div className={styles.dot}>
                                                    {idx < shipment.trackingStep ? '✓' : ''}
                                                </div>
                                                <span className={styles.stepTitle}>{step}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className={styles.shipmentItems}>
                                        {shipment.items.map(item => (
                                            <span key={item} className={styles.itemTag}>{item}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div className={styles.orderCard} style={{ marginBottom: 0 }}>
                            <h3>Why split my order?</h3>
                            <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                                To get your items to you as fast as possible, we ship from the nearest warehouse that has your items in stock.
                                Grocery items are delivered in minutes from local dark stores, while fashion electronics come from our mega-hubs.
                            </p>
                        </div>
                        <div className={styles.orderCard} style={{ marginBottom: 0, background: 'var(--primary)', color: 'white' }}>
                            <h3 style={{ color: 'white' }}>Need Help?</h3>
                            <p style={{ marginTop: '1rem', opacity: 0.8, marginBottom: '1.5rem' }}>
                                Chat with our delivery partner or contact 24/7 support for any delivery related queries.
                            </p>
                            <button className="primary-btn" style={{ background: 'white', color: 'var(--primary)' }}>
                                Live Chat with Agent
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
