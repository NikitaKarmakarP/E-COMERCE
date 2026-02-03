'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/Product/ProductCard';
import StickyCart from '@/components/Product/StickyCart';
import SmartHub from '@/components/SmartHub/SmartHub';
import OffersSection from '@/components/Offers/OffersSection';
import styles from './page.module.css';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />

      <main className={styles.main} id="main-content">
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <div className={styles.trustBadge}>Trusted by 10M+ Indians</div>
                <h1 className="animate-fade-in">
                  Everything you need, <br />
                  <span>Delivered Fast.</span>
                </h1>
                <p>From the freshest groceries to the latest trends. Experience the mega-mart transformation.</p>
                <div className={styles.heroActions}>
                  <Link href="/categories" className={styles.primaryBtn} aria-label="Shop our collections now">Shop Now</Link>
                  <Link href="/deals" className={styles.secondaryBtn} aria-label="Explore today's deals">Explore Deals</Link>
                </div>
              </div>
              <div className={styles.heroImage}>
                <div className={styles.imageCard}>
                  <div className={styles.floatingPrice}>₹99 onwards</div>
                  <div className={styles.discountTag}>60% OFF</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SmartHub />

        {/* Category Quick Links */}
        <section className={styles.categoriesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div>
                <h2>Shop by Department</h2>
                <p>Quality curated just for you.</p>
              </div>
              <Link href="/categories" className={styles.viewAll} aria-label="View all departments">View All &rarr;</Link>
            </div>
            <div className={styles.categoryGrid}>
              {categories.map((cat) => (
                <Link href={`/category/${cat.slug}`} key={cat.id} className={styles.categoryCard}>
                  <div className={styles.iconBox} style={{ backgroundColor: cat.color }} aria-hidden="true">
                    {cat.icon}
                  </div>
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Flash Sale Banner */}
        <div className="container">
          <Link href="/deals" className={styles.flashBanner}>
            <div className={styles.flashInfo}>
              <span className={styles.flashTag}>Flash Sale</span>
              <h3>Ends In <span className={styles.timer}>
                {String(timeLeft.hours).padStart(2, '0')}H : {String(timeLeft.minutes).padStart(2, '0')}M : {String(timeLeft.seconds).padStart(2, '0')}S
              </span></h3>
            </div>
            <p>Up to 80% Off on Top Brands. Don&apos;t miss out!</p>
          </Link>
        </div>

        <OffersSection />

        {/* Featured Products */}
        <section className={`${styles.productsSection} section-padding`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div>
                <h2>Trending Today</h2>
                <p>See what everyone is buying right now.</p>
              </div>
              <Link href="/trending" className={styles.viewMore}>See All Trending</Link>
            </div>
            <div className={styles.productGrid}>
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Banners */}
        <section className={styles.bannerSection}>
          <div className="container">
            <div className={styles.dualBanners}>
              <div className={`${styles.promoBanner} ${styles.fashionBanner}`} onClick={() => window.location.href = '/category/fashion'}>
                <div className={styles.bannerOverlay}>
                  <span>FASHION</span>
                  <h3>Style Upgrade</h3>
                  <Link href="/category/fashion" aria-label="Upgrade your style with our Fashion collection">Upgrade Now</Link>
                </div>
              </div>
              <div className={`${styles.promoBanner} ${styles.groceryBanner}`} onClick={() => window.location.href = '/category/grocery'}>
                <div className={styles.bannerOverlay}>
                  <span>FRESH</span>
                  <h3>Pantry Essentials</h3>
                  <Link href="/category/grocery" aria-label="Save big on Pantry Essentials">Save Big</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.featuresSection}>
          <div className="container">
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon} aria-hidden="true">⚡</div>
                <h4>Instant Delivery</h4>
                <p>Items delivered in under 2 hours</p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon} aria-hidden="true">🛡️</div>
                <h4>Secure Payments</h4>
                <p>100% safe checkout & UPI options</p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon} aria-hidden="true">⭐</div>
                <h4>Top Quality</h4>
                <p>Curated brands you know and love</p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon} aria-hidden="true">🔄</div>
                <h4>Easy Returns</h4>
                <p>No hassle 10-day return policy</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <StickyCart />
      <Footer />
    </>
  );
}
