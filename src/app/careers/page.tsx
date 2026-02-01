import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './careers.module.css';

export default function CareersPage() {
    return (
        <div className={styles.pageContainer}>
            <Header />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Build the Future of<br />Indian Commerce</h1>
                    <p className={styles.heroSubtitle}>
                        Join the team that is redefining how a billion people shop, connect, and grow.
                    </p>
                    <button className="primary-btn" style={{ marginTop: '2rem', padding: '1rem 2.5rem', background: 'white', color: '#2563eb' }}>
                        View Open Roles
                    </button>
                </div>
            </header>

            <section className={styles.valuesSection}>
                <h2 className={styles.sectionTitle}>Why BharatBazaar?</h2>
                <div className={styles.grid}>
                    <div className={styles.valueCard}>
                        <span className={styles.icon}>🚀</span>
                        <h3>Massive Scale</h3>
                        <p style={{ color: '#64748b', marginTop: '1rem' }}>
                            Your code, designs, and strategies will impact millions of users across 120+ cities every single day.
                        </p>
                    </div>
                    <div className={styles.valueCard}>
                        <span className={styles.icon}>💡</span>
                        <h3>Innovation First</h3>
                        <p style={{ color: '#64748b', marginTop: '1rem' }}>
                            We don't just follow trends; we set them. Experiment, fail fast, and learn faster.
                        </p>
                    </div>
                    <div className={styles.valueCard}>
                        <span className={styles.icon}>❤️</span>
                        <h3>People Centric</h3>
                        <p style={{ color: '#64748b', marginTop: '1rem' }}>
                            Comprehensive health insurance, flexible work policies, and a culture of empathy.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.jobsSection}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <h2 className={styles.sectionTitle}>Open Positions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem' }}>
                        <div className={styles.jobCard}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Senior Frontend Engineer</h3>
                                <p style={{ color: '#64748b' }}>Engineering • Remote / Bangalore</p>
                            </div>
                            <span className={styles.jobTag}>Engineering</span>
                            <button className="primary-btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Apply</button>
                        </div>

                        <div className={styles.jobCard}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Product Design Lead</h3>
                                <p style={{ color: '#64748b' }}>Design • Mumbai</p>
                            </div>
                            <span className={styles.jobTag}>Design</span>
                            <button className="primary-btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Apply</button>
                        </div>

                        <div className={styles.jobCard}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Supply Chain Analyst</h3>
                                <p style={{ color: '#64748b' }}>Operations • Delhi NCR</p>
                            </div>
                            <span className={styles.jobTag}>Operations</span>
                            <button className="primary-btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Apply</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
