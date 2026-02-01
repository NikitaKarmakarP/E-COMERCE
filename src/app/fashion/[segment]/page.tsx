import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/Product/ProductCard';
import { products } from '@/data/products';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ segment: string }>;
}

const SEGMENT_CONFIG: Record<string, { title: string; subtitle: string; banner: string; queries: string[] }> = {
    men: {
        title: "Men's Fashion",
        subtitle: "Redefine your style with our premium collection.",
        banner: "/images/men_banner.png",
        queries: ["T-Shirts", "Shirts", "Jeans", "Trousers", "Jackets", "Activewear", "Footwear", "Accessories"]
    },
    women: {
        title: "Women's Collection",
        subtitle: "Elegant designs for the modern you.",
        banner: "/images/women_banner.png",
        queries: ["Dresses", "Tops", "Kurtas", "Sarees", "Jeans", "Skirts", "Handbags", "Jewellery"]
    },
    kids: {
        title: "Kids' World",
        subtitle: "Fun and comfy styles for little ones.",
        banner: "/images/kids_banner.png",
        queries: ["Boys Clothing", "Girls Clothing", "Infants", "Toys", "School Supplies", "Footwear"]
    }
};

export default async function FashionSegmentPage({ params }: PageProps) {
    const { segment } = await params;
    const config = SEGMENT_CONFIG[segment];

    if (!config) {
        notFound();
    }

    // Filter products: category must be 'fashion' and subcategory should match segment
    // Since our mock data is simple, I'll allow matches on 'subcategory' loosely or just show all fashion for demo if strict match fails.
    // In a real app, 'subcategory' in Product would map to 'men', 'women', 'kids'.
    // Let's ensure my mock/real data has these values.
    const segmentProducts = products.filter(p =>
        p.category === 'fashion' &&
        (p.subcategory === segment || p.subcategory === 'footwear' || p.subcategory === 'accessories')
        // Including footwear/accessories strictly might be broad, but good for demo volume.
    );

    return (
        <div className={styles.pageContainer}>
            <Header />

            {/* Banner */}
            <header className={styles.bannerSection}>
                <Image
                    src={config.banner}
                    alt={config.title}
                    fill
                    className={styles.bannerImage}
                    priority
                />
                <div className={styles.bannerContent}>
                    <h1 className={`${styles.bannerTitle} animate-slide-up`}>{config.title}</h1>
                    <p className={`${styles.bannerSubtitle} animate-slide-up`}>{config.subtitle}</p>
                </div>
            </header>

            <main className="container">
                {/* Visual Chips */}
                <section className={styles.chipSection}>
                    <div className={styles.chipScroll}>
                        <button className={`${styles.chip} ${styles.activeChip}`}>View All</button>
                        {config.queries.map(q => (
                            <button key={q} className={styles.chip}>{q}</button>
                        ))}
                    </div>
                </section>

                {/* Controls */}
                <div className={styles.controlsSection}>
                    <span className={styles.resultsCount}>{segmentProducts.length} Styles Found</span>
                    {/* Sort Dropdown could go here */}
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {segmentProducts.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                    {/* Fallback if no products */}
                    {segmentProducts.length === 0 && (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem', color: '#64748b' }}>
                            <h3>No products found in this category yet.</h3>
                            <p>We are stocking up! Check back soon.</p>
                        </div>
                    )}
                </div>

                {/* Pagination / Load More */}
                {segmentProducts.length > 0 && (
                    <div className={styles.loadMore}>
                        <button className={styles.loadMoreBtn}>Load More Styles</button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
