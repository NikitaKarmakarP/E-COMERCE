import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { categories } from '@/data/categories';
import styles from './categories.module.css';
import Link from 'next/link';

export default function CategoriesPage() {
    return (
        <>
            <Header />
            <main className={styles.main} id="main-content">
                <div className="container">
                    <header className={styles.header}>
                        <h1>Browse All Categories</h1>
                        <p>Explore our wide range of products across different departments.</p>
                    </header>

                    <div className={styles.categoryGrid}>
                        {categories.map((cat) => (
                            <div key={cat.id} className={styles.categoryWrap}>
                                <Link href={`/category/${cat.slug}`} className={styles.categoryCard}>
                                    <div className={styles.iconBox} style={{ backgroundColor: cat.color }} aria-hidden="true">
                                        {cat.icon}
                                    </div>
                                    <div className={styles.content}>
                                        <h3>{cat.name}</h3>
                                        <p>{cat.description}</p>
                                    </div>
                                </Link>

                                <div className={styles.subcategoryList}>
                                    {cat.subcategories.map((sub) => (
                                        <Link
                                            key={sub.id}
                                            href={`/category/${cat.slug}?sub=${sub.slug}`}
                                            className={styles.subItem}
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
