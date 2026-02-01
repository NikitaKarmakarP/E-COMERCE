'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './support.module.css';
import Link from 'next/link';

export default function SupportPage() {
    return (
        <div className={styles.supportPage}>
            <Header />

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={`${styles.title} animate-slide-up`}>How can we help you?</h1>
                    <p className={`${styles.subtitle} animate-slide-up`}>Search for answers or browse common topics below</p>

                    <div className={`${styles.searchBox} animate-fade-in`}>
                        <input
                            type="text"
                            placeholder="Type keywords like 'return', 'refund', 'delivery'..."
                            className={styles.searchInput}
                        />
                        <button className={styles.searchBtn} aria-label="Search">🔍</button>
                    </div>
                </div>
            </section>

            <main className="container">
                <div className={styles.cardGrid}>
                    <Link href="/track" className={styles.card}>
                        <span className={styles.icon}>📦</span>
                        <h3 className={styles.cardTitle}>Track Order</h3>
                        <p className={styles.cardDesc}>Check the status of your recent orders and shipments.</p>
                    </Link>

                    <div className={styles.card}>
                        <span className={styles.icon}>↩️</span>
                        <h3 className={styles.cardTitle}>Returns & Refunds</h3>
                        <p className={styles.cardDesc}>Manage returns, exchanges, and check refund status.</p>
                    </div>

                    <div className={styles.card}>
                        <span className={styles.icon}>👤</span>
                        <h3 className={styles.cardTitle}>Account Settings</h3>
                        <p className={styles.cardDesc}>Update profile details, address book, and payment methods.</p>
                    </div>
                </div>

                <div className={styles.faqSection}>
                    <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h4 className={styles.faqQuestion}>Where is my order?</h4>
                            <p className={styles.faqAnswer}>You can track your order using the 'Track Order' option above. We also send SMS updates at every step.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h4 className={styles.faqQuestion}>How do I return an item?</h4>
                            <p className={styles.faqAnswer}>Visit the 'My Orders' section, select the item, and click 'Return'. Pickup will be scheduled within 24 hours.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h4 className={styles.faqQuestion}>Is tracking available for grocery?</h4>
                            <p className={styles.faqAnswer}>Yes! Grocery orders have live tracking. You can see the delivery partner's location on the map.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h4 className={styles.faqQuestion}>What payment methods are accepted?</h4>
                            <p className={styles.faqAnswer}>We accept UPI, Credit/Debit Cards, Net Banking, and Cash on Delivery (for eligible pincodes).</p>
                        </div>
                    </div>
                </div>

                <div className={styles.contactBanner}>
                    <h2>Still need help?</h2>
                    <p>Our support team is available 24/7 to assist you.</p>

                    <div className={styles.contactGrid}>
                        <div className={styles.contactItem}>
                            <h4>💬 Live Chat</h4>
                            <p>Instant support from our agents.</p>
                            <a href="#" className={styles.contactLink}>Start Chat</a>
                        </div>
                        <div className={styles.contactItem}>
                            <h4>📧 Email Us</h4>
                            <p>Get a response within 2 hours.</p>
                            <a href="mailto:support@bharatbazaar.com" className={styles.contactLink}>support@bharatbazaar.com</a>
                        </div>
                        <div className={styles.contactItem}>
                            <h4>📞 Call Us</h4>
                            <p>Toll-free 8 AM - 10 PM</p>
                            <a href="tel:18001234567" className={styles.contactLink}>1800-123-4567</a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
