import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/Product/ProductCard';
import { getCategoryBySlug } from '@/data/categories';
import { products } from '@/data/products';
import styles from '../category.module.css';

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const CATEGORY_BANNERS: Record<string, string> = {
    'grocery': '/images/grocery_banner.png',
    'fruits-vegetables': '/images/grocery_banner.png',
    'electronics': '/images/electronics_banner.png',
    'mobiles': '/images/electronics_banner.png',
    'beauty-health': '/images/beauty_banner.png',
    'skincare': '/images/beauty_banner.png',
    'toys-kids': '/images/toys_banner.png',
    'tools-essentials': '/images/tools_banner.png',
    'power-tools': '/images/tools_banner.png',
    // Fallbacks
    'default': '/images/hero_banner.png'
};

export default async function CategoryPage({ params, searchParams }: PageProps) {
    const { slug } = await params;
    const result = getCategoryBySlug(slug);

    if (!result) {
        notFound();
    }

    const { category, subcategory, isMain } = result;
    const bannerImage = CATEGORY_BANNERS[slug] || CATEGORY_BANNERS[category.id] || CATEGORY_BANNERS['default'];

    // Filter products
    const categoryProducts = products.filter((p) => {
        if (isMain) {
            return p.category === category.id;
        } else {
            return p.category === category.id && (p.subcategory === subcategory!.id || p.subcategory === slug); // Handle exact or rough match
        }
    });

    return (
        <>
            <Header />

            <main className={styles.categoryPage}>
                {/* Category Hero */}
                <header className={styles.categoryHeader} style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white'
                }}>
                    <div className="container">
                        <div className={styles.headerContent}>
                            <div className={styles.iconBox} style={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)' }}>
                                {category.icon}
                            </div>
                            <div className={styles.headerText}>
                                <h1 style={{ color: 'white' }}>{isMain ? category.name : subcategory!.name}</h1>
                                <p style={{ color: 'rgba(255,255,255,0.9)' }}>{category.description}</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    {/* Subcategory Navigation (Only show if Main) */}
                    {isMain && (
                        <nav className={styles.subcategoryNav}>
                            <div className={styles.subcategoryList}>
                                <Link href={`/category/${category.slug}`} className={`${styles.subcategoryItem} ${styles.subcategoryItemActive}`}>
                                    All {category.name}
                                </Link>
                                {category.subcategories.map((sub) => (
                                    <Link key={sub.id} href={`/category/${sub.slug}`} className={styles.subcategoryItem}>
                                        {sub.name}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    )}

                    <div className={styles.mainLayout}>
                        {/* Sidebar Filters */}
                        <aside className={styles.sidebar}>
                            <div className={styles.filterCard}>
                                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Filters</h3>
                                {category.filters.map((filter) => (
                                    <div key={filter.id} className={styles.filterSection}>
                                        <span className={styles.filterTitle}>{filter.name}</span>
                                        {filter.type === 'checkbox' && filter.options && (
                                            <div className={styles.checkboxList}>
                                                {filter.options.map((opt) => (
                                                    <label key={opt.value} className={styles.checkboxItem}>
                                                        <input type="checkbox" name={filter.id} value={opt.value} />
                                                        {opt.label}
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                        {filter.type === 'range' && (
                                            <div className={styles.rangeFilter}>
                                                <input type="range" min={filter.min} max={filter.max} style={{ width: '100%' }} />
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.85rem' }}>
                                                    <span>{filter.unit}{filter.min}</span>
                                                    <span>{filter.unit}{filter.max}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <button className="primary-btn" style={{ width: '100%', marginTop: '1rem' }}>
                                    Apply Filters
                                </button>
                            </div>
                        </aside>

                        {/* Product List Area */}
                        <section className={styles.content}>
                            <div className={styles.productControls}>
                                <span className={styles.resultCount}>
                                    Showing {categoryProducts.length} products
                                </span>
                                <div className={styles.sortWrapper}>
                                    <label htmlFor="sort" style={{ marginRight: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Sort by:</label>
                                    <select id="sort" className={styles.sortSelect}>
                                        <option value="popularity">Popularity</option>
                                        <option value="newest">Newest First</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="rating">Top Rated</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.productGrid}>
                                {categoryProducts.length > 0 ? (
                                    categoryProducts.map((product) => (
                                        <ProductCard key={product.id} {...product} />
                                    ))
                                ) : (
                                    <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem 0' }}>
                                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
                                        <h3>No products found under {isMain ? category.name : subcategory!.name}</h3>
                                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>We are stocking up this aisle! Check back later.</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
