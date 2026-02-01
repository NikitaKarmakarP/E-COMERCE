import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './ethics.module.css';

export default function EthicsPage() {
    return (
        <div className={styles.pageContainer}>
            <Header />

            <header className={styles.hero}>
                <h1 className={styles.heroTitle}>Our Code of Ethics</h1>
                <p className={styles.heroSubtitle}>
                    Integrity is not just a policy at BharatBazaar; it is the foundation of everything we build.
                </p>
            </header>

            <div className={styles.contentSection}>
                <p className={styles.statement}>
                    "We believe that true success is measured not just by profits, but by the trust we earn from our customers, partners, and employees."
                </p>

                <div className={styles.pillarGrid}>
                    <div className={styles.pillar}>
                        <h3 className={styles.pillarTitle}>Uncompromising Honesty</h3>
                        <p className={styles.pillarText}>
                            We are transparent about our pricing, our sourcing, and our policies. No hidden fees, no fine print surprises. We own our mistakes and fix them.
                        </p>
                    </div>
                    <div className={styles.pillar}>
                        <h3 className={styles.pillarTitle}>Fair Treatment</h3>
                        <p className={styles.pillarText}>
                            Every delivery partner, warehouse packer, and software engineer is treated with dignity. We ensure fair wages and safe working conditions.
                        </p>
                    </div>
                    <div className={styles.pillar}>
                        <h3 className={styles.pillarTitle}>Customer Privacy</h3>
                        <p className={styles.pillarText}>
                            Your data belongs to you. We strictly prohibit selling user data to third parties and use best-in-class encryption to protect it.
                        </p>
                    </div>
                    <div className={styles.pillar}>
                        <h3 className={styles.pillarTitle}>Sustainability</h3>
                        <p className={styles.pillarText}>
                            We are committed to reducing our carbon footprint. From electric delivery vehicles to biodegradable packaging, we choose the planet over convenience.
                        </p>
                    </div>
                </div>

                <div className={styles.commitmentBox}>
                    <h3 style={{ fontSize: '1.5rem', color: '#064e3b', marginBottom: '1rem', fontWeight: 700 }}>Whistleblower Policy</h3>
                    <p style={{ color: '#475569', marginBottom: '1.5rem' }}>
                        We have a zero-tolerance policy for unethical behavior. Employees and partners can anonymously report violations without fear of retaliation.
                    </p>
                    <button style={{ padding: '0.8rem 2rem', background: '#064e3b', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 600, cursor: 'pointer' }}>
                        Report an Issue
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}
