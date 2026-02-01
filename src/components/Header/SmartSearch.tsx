'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './SmartSearch.module.css';
import { products, Product } from '@/data/products';
import { categories } from '@/data/categories';
import Link from 'next/link';

export default function SmartSearch() {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [suggestions, setSuggestions] = useState<Product[]>([]);
    const [recentSearches, setRecentSearches] = useState(['Laptop', 'Face wash', 'Jeans']);
    const [trendingSearches, setTrendingSearches] = useState(['Maggi', 'Puma Shoes', 'Organic Honey', 'Smart Watch']);
    const [isVoiceActive, setIsVoiceActive] = useState(false);

    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (query.length > 1) {
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(query.toLowerCase()) ||
                p.category.toLowerCase().includes(query.toLowerCase()) ||
                p.brand?.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 6);
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    }, [query]);

    // Handle outside click to close suggestions
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleVoiceSearch = () => {
        setIsVoiceActive(true);
        setTimeout(() => {
            setIsVoiceActive(false);
            setQuery('Smart mechanical keyboard');
            setIsFocused(true);
        }, 2000);
    };

    return (
        <div className={styles.searchContainer} ref={searchRef}>
            <div className={`${styles.searchBar} ${isFocused ? styles.focused : ''}`}>
                <select className={styles.categorySelect} aria-label="Select search category">
                    <option>All</option>
                    {categories.map(c => <option key={c.id} value={c.slug}>{c.name.split(' ')[0]}</option>)}
                </select>

                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        placeholder="Search for toys, fashion, groceries..."
                        aria-label="Search for products"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onKeyDown={(e) => e.key === 'Enter' && query && (window.location.href = `/search?q=${query}`)}
                    />
                    <div className={styles.actionButtons}>
                        <button className={styles.iconBtn} onClick={handleVoiceSearch} title="Voice Search" aria-label="Voice Search">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                        </button>
                        <button className={styles.iconBtn} title="Image Search" aria-label="Image Search">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                        </button>
                    </div>
                </div>

                <button className={styles.searchBtn} onClick={() => query && (window.location.href = `/search?q=${query}`)} aria-label="Search">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
            </div>

            {isFocused && (
                <div className={styles.suggestionsPanel}>
                    {query.length < 2 ? (
                        <div className={styles.initialState}>
                            <div className={styles.suggestSection}>
                                <h4>Trending Now</h4>
                                <div className={styles.tagGrid}>
                                    {trendingSearches.map(term => (
                                        <button key={term} className={styles.searchTag} onClick={() => setQuery(term)}>
                                            <span className={styles.trendIcon}>📈</span> {term}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.suggestSection}>
                                <h4>Recent Searches</h4>
                                <ul className={styles.historyList}>
                                    {recentSearches.map(term => (
                                        <li key={term} onClick={() => setQuery(term)}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                            {term}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.resultsArea}>
                            {suggestions.length > 0 ? (
                                <div className={styles.productList}>
                                    {suggestions.map(product => (
                                        <Link
                                            href={`/product/${product.id}`}
                                            key={product.id}
                                            className={styles.pResult}
                                            onClick={() => setIsFocused(false)}
                                        >
                                            <div className={styles.pThumb}></div>
                                            <div className={styles.pInfo}>
                                                <span className={styles.pName}>{product.name}</span>
                                                <span className={styles.pCat}>{product.category} • ₹{product.price}</span>
                                            </div>
                                            <span className={styles.pArrow}>↗</span>
                                        </Link>
                                    ))}
                                    <Link href={`/search?q=${query}`} className={styles.seeAll}>
                                        See all results for &ldquo;{query}&rdquo;
                                    </Link>
                                </div>
                            ) : (
                                <div className={styles.noResults}>
                                    <p>No products found for &ldquo;{query}&rdquo;</p>
                                    <span>Try searching for something else...</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {isVoiceActive && (
                <div className={styles.voiceOverlay}>
                    <div className={styles.voiceContent}>
                        <div className={styles.pulseRing}></div>
                        <div className={styles.micIcon}>🎙️</div>
                        <h2>Listening...</h2>
                        <p>Say the name of a product or brand</p>
                        <button onClick={() => setIsVoiceActive(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}
