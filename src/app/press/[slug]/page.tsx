import { pressReleases } from '@/data/press-releases';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './press-detail.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return pressReleases.map((post) => ({
        slug: post.slug,
    }));
}

export default function PressDetailPage({ params }: { params: { slug: string } }) {
    const post = pressReleases.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <Header />
            <main>
                <article className={styles.container}>
                    <Link href="/press" className={styles.backLink}>&larr; Back to Newsroom</Link>

                    <header className={styles.header}>
                        <div className={styles.meta}>
                            <span className={styles.metaItem}>{post.date}</span>
                            <span>•</span>
                            <span className={styles.metaItem} style={{ textTransform: 'uppercase', color: '#ef4444', fontWeight: 700 }}>
                                {post.tags[0]}
                            </span>
                        </div>
                        <h1 className={styles.title}>{post.title}</h1>
                    </header>

                    {/* Use a placeholder div with background for image to avoid next/image complexity with external/mock urls if needed, though here we assume local or valid urls */}
                    <div
                        className={styles.image}
                        style={{ background: `url(${post.image}) no-repeat center center / cover`, backgroundColor: '#e2e8f0' }}
                    />

                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className={styles.shareSection}>
                        <span style={{ fontWeight: 700, color: '#1e293b' }}>Share this article</span>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button className={styles.shareBtn}>Twitter</button>
                            <button className={styles.shareBtn}>LinkedIn</button>
                            <button className={styles.shareBtn}>Copy Link</button>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
