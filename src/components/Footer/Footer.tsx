import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.newsletter}>
                <div className="container">
                    <div className={styles.newsletterContent}>
                        <div>
                            <h3>Subscribe to BharatBazaar Insider</h3>
                            <p>Get the latest deals, coupons, and product launches right in your inbox.</p>
                        </div>
                        <form className={styles.newsletterForm}>
                            <input type="email" placeholder="Enter your email" aria-label="Email Address" required />
                            <button type="submit">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.footerGrid}>
                    <div className={styles.brandCol}>
                        <div className={styles.logo}>
                            <h1>BHARATBAZAAR</h1>
                            <span>MEGA MART</span>
                        </div>
                        <p>From Daily Needs to Dream Buys – Your one-stop shop for everything you need. Quality products, lightning-fast delivery.</p>
                        <div className={styles.socials}>
                            {/* Social Icons would go here */}
                        </div>
                    </div>

                    <div className={styles.linkCol}>
                        <h4>Shop By Category</h4>
                        <ul>
                            <li><Link href="/category/fashion">Fashion</Link></li>
                            <li><Link href="/category/grocery">Grocery</Link></li>
                            <li><Link href="/category/electronics">Electronics</Link></li>
                            <li><Link href="/category/home-living">Home & Kitchen</Link></li>
                            <li><Link href="/category/beauty-health">Beauty & Care</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linkCol}>
                        <h4>Customer Support</h4>
                        <ul>
                            <li><Link href="/track">Track Order</Link></li>
                            <li><Link href="/support">Returns & Refunds</Link></li>
                            <li><Link href="/support">Shipping Policy</Link></li>
                            <li><Link href="/support">Contact Us</Link></li>
                            <li><Link href="/support">Help Center</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linkCol}>
                        <h4>About BharatBazaar</h4>
                        <ul>
                            <li><Link href="/about">Our Story</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/press">Press Releases</Link></li>
                            <li><Link href="/ethics">Business Ethics</Link></li>
                            <li><Link href="/terms">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>&copy; {currentYear} BharatBazaar Mega Mart. All Rights Reserved. Built with pride in India.</p>
                    <div className={styles.paymentMethods}>
                        {/* Payment Icons */}
                        <span>UPI</span> | <span>VISA</span> | <span>MasterCard</span> | <span>RuPay</span> | <span>NetBanking</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
