import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './about.module.css';

export default function AboutPage() {
    return (
        <div className={styles.aboutContainer}>
            <Header />

            {/* Hero Section */}
            <header className={styles.heroSection}>
                <div className={styles.heroBackground}></div>
                <div className={styles.heroContent}>
                    <span className={styles.heroSubtitle}>Since 1998</span>
                    <h1 className={styles.heroTitle}>Structuring the<br />Future of Commerce</h1>
                    <p className={styles.heroDescription}>
                        From a humble single-store beginning to India's most trusted mega mart.
                        We believe in quality, community, and the power of dreams.
                    </p>
                </div>
                <div className={styles.scrollIndicator}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </div>
            </header>

            {/* Stats Section */}
            <section className={styles.statsSection}>
                <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>25+</div>
                        <div className={styles.statLabel}>Years of Trust</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>10M+</div>
                        <div className={styles.statLabel}>Happy Customers</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>500+</div>
                        <div className={styles.statLabel}>Retail Partners</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>120</div>
                        <div className={styles.statLabel}>Cities Covered</div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className={styles.timelineSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Journey</h2>
                        <p style={{ color: '#64748b', fontSize: '1.2rem' }}>A story of resilience and innovation.</p>
                    </div>

                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineContent}>
                                <span className={styles.yearBadge}>1998</span>
                                <h3 className={styles.timelineTitle}>Where it all began</h3>
                                <p className={styles.timelineText}>
                                    Our founder opened the first BharatBazaar store in a small 200 sq.ft shop in Mumbai, selling fresh produce and spices.
                                </p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineContent}>
                                <span className={styles.yearBadge}>2005</span>
                                <h3 className={styles.timelineTitle}>First Supermarket</h3>
                                <p className={styles.timelineText}>
                                    We expanded into our first full-scale supermarket, introducing the concept of self-service shopping to the neighborhood.
                                </p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineContent}>
                                <span className={styles.yearBadge}>2012</span>
                                <h3 className={styles.timelineTitle}>Going Digital</h3>
                                <p className={styles.timelineText}>
                                    Launched our first website for local delivery. It was simple, but it marked the beginning of our digital transformation.
                                </p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineContent}>
                                <span className={styles.yearBadge}>2020</span>
                                <h3 className={styles.timelineTitle}>Mega Mart Expansion</h3>
                                <p className={styles.timelineText}>
                                    Rebranded to BharatBazaar Mega Mart, integrating fashion, electronics, and home essentials into one unified platform.
                                </p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineContent}>
                                <span className={styles.yearBadge}>2026</span>
                                <h3 className={styles.timelineTitle}>The Future is Here</h3>
                                <p className={styles.timelineText}>
                                    With AI-driven supply chains and instant delivery networks, we are redefining what modern commerce looks like in India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className={styles.valuesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Guiding Principles</h2>
                    <p style={{ color: '#64748b', fontSize: '1.2rem' }}>The values that drive every decision we make.</p>
                </div>

                <div className={styles.valuesGrid}>
                    <div className={styles.valueCard}>
                        <span className={styles.valueIcon}>🤝</span>
                        <h3 className={styles.valueTitle}>Customer Obsession</h3>
                        <p className={styles.valueText}>
                            We start with the customer and work backwards. Their trust is our most valuable currency.
                        </p>
                    </div>
                    <div className={styles.valueCard}>
                        <span className={styles.valueIcon}>🌱</span>
                        <h3 className={styles.valueTitle}>Sustainability</h3>
                        <p className={styles.valueText}>
                            Building a business that lasts means caring for the planet. We are committed to eco-friendly practices.
                        </p>
                    </div>
                    <div className={styles.valueCard}>
                        <span className={styles.valueIcon}>🇮🇳</span>
                        <h3 className={styles.valueTitle}>Local First</h3>
                        <p className={styles.valueText}>
                            Empowering local farmers, artisans, and manufacturers is at the heart of our sourcing strategy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className={styles.quoteSection}>
                <div className="container">
                    <p className={styles.quoteText}>
                        "We didn't just build a store; we built a community. BharatBazaar is not just about buying things; it's about bettering lives."
                    </p>
                    <p className={styles.quoteAuthor}>— Rajesh Kumar, Founder</p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
