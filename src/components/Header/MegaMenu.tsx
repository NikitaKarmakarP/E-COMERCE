import { Category } from '@/types/category';
import styles from './MegaMenu.module.css';
import Link from 'next/link';

interface MegaMenuProps {
    categories: Category[];
    isOpen: boolean;
    onClose: () => void;
}

export default function MegaMenu({ categories, isOpen, onClose }: MegaMenuProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose} aria-hidden="true">
            <div
                className={`${styles.menu} ${isOpen ? styles.open : ''}`}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Main Navigation Menu"
            >
                <div className={styles.header}>
                    <div className={styles.userSection}>
                        <div className={styles.userIcon}>👤</div>
                        <span>Hello, Sign In</span>
                    </div>
                    <button className={styles.closeBtn} onClick={onClose} aria-label="Close Menu">×</button>
                </div>

                <div className={styles.content}>
                    <div className={styles.section}>
                        <h3>Shop By Category</h3>
                        <ul className={styles.categoryList}>
                            {categories.map((cat) => (
                                <li key={cat.id} className={styles.categoryItem}>
                                    <Link href={`/category/${cat.slug}`} onClick={onClose}>
                                        <span className={styles.catIcon} aria-hidden="true">{cat.icon}</span>
                                        <span className={styles.catName}>{cat.name}</span>
                                        <span className={styles.arrow} aria-hidden="true">›</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Trending</h3>
                        <ul>
                            <li><Link href="/best-sellers" onClick={onClose}>Best Sellers</Link></li>
                            <li><Link href="/trending" onClick={onClose}>Trending Now</Link></li>
                            <li><Link href="/new-releases" onClick={onClose}>New Releases</Link></li>
                            <li><Link href="/movers-shakers" onClick={onClose}>Movers & Shakers</Link></li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Programs & Features</h3>
                        <ul>
                            <li><Link href="/programs" onClick={onClose}>All Programs</Link></li>
                            <li><Link href="/bharat-fresh" onClick={onClose}>Bharat Fresh</Link></li>
                            <li><Link href="/deals" onClick={onClose}>Today&apos;s Deals</Link></li>
                            <li><Link href="/gift-cards" onClick={onClose}>Gift Cards</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
