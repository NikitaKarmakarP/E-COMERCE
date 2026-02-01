'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './terms.module.css';

export default function TermsPage() {
    return (
        <div className={styles.pageContainer}>
            <Header />

            <header className={styles.header}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        <h1 className={styles.title}>Terms of Service</h1>
                        <p className={styles.lastUpdated}>Last Updated: February 01, 2026</p>
                    </div>
                    <button
                        className="primary-btn"
                        style={{ background: 'white', color: '#0f172a', border: '1px solid #e2e8f0', padding: '0.5rem 1rem' }}
                        onClick={() => window.print()}
                    >
                        🖨️ Print Terms
                    </button>
                </div>
            </header>

            <div className={styles.layout}>
                <aside className={styles.sidebar}>
                    <nav>
                        <h4 style={{ marginBottom: '1rem', fontWeight: 700, color: '#0f172a' }}>Table of Contents</h4>
                        <a href="#intro" className={styles.navLink}>1. Introduction</a>
                        <a href="#account" className={styles.navLink}>2. Account & Security</a>
                        <a href="#orders" className={styles.navLink}>3. Orders & Payments</a>
                        <a href="#returns" className={styles.navLink}>4. Returns & Refunds</a>
                        <a href="#liability" className={styles.navLink}>5. Liability</a>
                        <a href="#privacy" className={styles.navLink}>6. Privacy Policy</a>
                    </nav>
                </aside>

                <main className={styles.content}>
                    <section id="intro" className={styles.section}>
                        <h2 className={styles.sectionHeading}>1. Introduction</h2>
                        <p className={styles.text}>
                            Welcome to BharatBazaar. These Terms and Conditions govern your use of our website and mobile application. By accessing or using our services, you agree to be bound by these terms.
                        </p>
                        <p className={styles.text}>
                            If you do not agree with any part of these terms, please do not use our services. We reserve the right to modify these terms at any time.
                        </p>
                    </section>

                    <section id="account" className={styles.section}>
                        <h2 className={styles.sectionHeading}>2. Account & Security</h2>
                        <p className={styles.text}>
                            You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account.
                        </p>
                        <p className={styles.text}>
                            BharatBazaar reserves the right to terminate accounts that violate our community guidelines or engage in fraudulent activity.
                        </p>
                    </section>

                    <section id="orders" className={styles.section}>
                        <h2 className={styles.sectionHeading}>3. Orders & Payments</h2>
                        <p className={styles.text}>
                            All orders are subject to availability. We reserve the right to limit the quantity of items purchased per person or per order.
                        </p>
                        <p className={styles.text}>
                            Prices are subject to change without notice. In the event of a pricing error, we reserve the right to cancel the order and refund the amount paid.
                        </p>
                    </section>

                    <section id="returns" className={styles.section}>
                        <h2 className={styles.sectionHeading}>4. Returns & Refunds</h2>
                        <p className={styles.text}>
                            Returns are accepted within 7 days of delivery for eligible items. Perishable goods like fresh produce may have different return windows (usually 24 hours).
                        </p>
                    </section>

                    <section id="liability" className={styles.section}>
                        <h2 className={styles.sectionHeading}>5. Liability</h2>
                        <p className={styles.text}>
                            BharatBazaar shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits.
                        </p>
                    </section>
                </main>
            </div>

            <Footer />
        </div>
    );
}
