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

    const handleDriverChat = (shipmentId: string) => {
        alert(`Connecting to delivery partner for Shipment ${shipmentId}...`);
    };

    const handleSupportChat = () => {
        alert('Opening 24/7 Live Support... An agent will be with you shortly.');
    };

    return (
        <div style={{ background: 'var(--bg-main)' }}>
            <Header />
            <main className={styles.trackPage}>
                <div className="container">
                    <h1 className={`${styles.title} animate-slide-up`}>Track Your Order</h1>

                    <div className={`${styles.orderCard} animate-fade-in`}>
                        <div className={styles.orderHeader}>
                            <div className={styles.orderMeta}>
                                <h2>Order #{mockOrder.id}</h2>
                                <p>Placed on {mockOrder.date} • {mockOrder.shipments.length} Active Shipments</p>
                            </div>
                            <div className={styles.splitBadge}>
                                ⚡ Order Split for Faster Delivery
                            </div>
                        </div>

                        <div className={styles.shipmentList}>
                            {mockOrder.shipments.map((shipment) => {
                                const typeClass = shipment.type.charAt(0).toUpperCase() + shipment.type.slice(1);
                                return (
                                    <div key={shipment.id} className={styles.shipmentCard}>
                                        <div className={`${styles.shipmentType} ${styles['type' + typeClass]}`}>
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
                                                {shipment.status === 'out-for-delivery' && (
                                                    <div style={{ marginTop: '1rem' }}>
                                                        <button
                                                            className={styles.actionBtn}
                                                            style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                                                            onClick={() => handleDriverChat(shipment.id)}
                                                        >
                                                            📞 Call Driver
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Visual Tracker */}
                                        <div className={styles.timeline}>
                                            <div
                                                className={styles.progressLine}
                                                style={{ width: `${(shipment.trackingStep / (steps.length - 1)) * 80}%` }}
                                            ></div>
                                            {steps.map((step, idx) => (
                                                <div
                                                    key={step}
                                                    className={`${styles.step} ${idx < shipment.trackingStep ? styles.stepCompleted : ''} ${idx === shipment.trackingStep ? styles.stepActive : ''}`}
                                                >
                                                    <div className={styles.dot}>
                                                        {idx < shipment.trackingStep ? '✓' : idx === shipment.trackingStep ? '●' : ''}
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
                                );
                            })}
                        </div>
                    </div>

                    <div className={styles.helpSections}>
                        <div className={styles.helpCard}>
                            <h3>Why split my order?</h3>
                            <p>
                                BharatBazaar utilizes a hyper-local warehouse network to ensure you get your items as fast as humanly possible.
                                Fresh groceries are dispatched from your neighborhood dark-store within minutes, while large electronics come from our regional mega-hubs.
                            </p>
                            <button className={styles.actionBtn} onClick={() => alert('Showing detailed delivery policy...')}>
                                Learn More
                            </button>
                        </div>
                        <div className={`${styles.helpCard} ${styles.secondaryCard}`}>
                            <h3>Need Assistance?</h3>
                            <p>
                                Our dedicated support team is available 24 hours a day, 7 days a week to help you with anything from delivery delays to returns.
                            </p>
                            <button className={`${styles.actionBtn} ${styles.whiteBtn}`} onClick={handleSupportChat}>
                                Start Live Chat
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
