import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './press.module.css';
import { pressReleases } from '@/data/press-releases';
import Link from 'next/link';

export default function PressPage() {
    // Get the latest article for the hero section
    const featuredPost = pressReleases[0];
    const otherPosts = pressReleases.slice(1);

    return (
        <div className={styles.pageContainer}>
            <Header />

            <header className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>BharatBazaar Newsroom</h1>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1' }}>Updates, announcements, and stories from our world.</p>
                </div>
            </header>

            <section className={styles.featuredSection}>
                <div className={styles.featuredCard}>
                    <div className={styles.featuredContent}>
                        <span className={styles.tag}>Latest Headline</span>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            {featuredPost.title}
                        </h2>
                        <p className={styles.excerpt}>
                            {featuredPost.excerpt}
                        </p>
                        <Link href={`/press/${featuredPost.slug}`} className={styles.readMore}>Read Full Story &rarr;</Link>
                    </div>
                    <div
                        className={styles.featuredImage}
                        style={{
                            backgroundImage: `url(${featuredPost.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundColor: '#e2e8f0'
                        }}
                    ></div>
                </div>
            </section>

            <main className="container">
                <div className={styles.newsGrid}>
                    {otherPosts.map((post) => (
                        <div key={post.id} className={styles.articleCard}>
                            <div className={styles.dateBadge}>{post.date}</div>
                            <h3 className={styles.headline}>{post.title}</h3>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                            <Link href={`/press/${post.slug}`} className={styles.readMore}>Read More &rarr;</Link>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
