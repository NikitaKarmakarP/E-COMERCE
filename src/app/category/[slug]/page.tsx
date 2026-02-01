import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/Product/ProductCard';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import styles from '../category.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
    const { slug } = await params;
    const category = categories.find((c) => c.slug === slug);

    if (!category) {
        notFound();
    }

    // Filter products by category
    const categoryProducts = products.filter((p) => p.category === category.id);

    return (
        <>
            <Header />

            <main className={styles.categoryPage}>
                {/* Category Hero */}
                <header className={styles.categoryHeader}>
                    <div className="container">
                        <div className={styles.headerContent}>
                            <div className={styles.iconBox} style={{ backgroundColor: category.color }}>
                                {category.icon}
                            </div>
                            <div className={styles.headerText}>
                                <h1>{category.name}</h1>
                                <p>{category.description}</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    {/* Subcategory Navigation */}
                    <nav className={styles.subcategoryNav}>
                        <div className={styles.subcategoryList}>
                            <button className={`${styles.subcategoryItem} ${styles.subcategoryItemActive}`}>
                                All {category.name}
                            </button>
                            {category.subcategories.map((sub) => (
                                <button key={sub.id} className={styles.subcategoryItem}>
                                    {sub.name}
                                </button>
                            ))}
                        </div>
                    </nav>

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
                                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>No products found in this category.</p>
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
