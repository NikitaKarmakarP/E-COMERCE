export interface PressRelease {
    id: string;
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string; // HTML or Markdown string
    image: string;
    tags: string[];
}

export const pressReleases: PressRelease[] = [
    {
        id: '1',
        slug: 'bharat-fresh-launch',
        title: 'Launch of "Bharat Fresh" - Farm to Fork in 12 Hours',
        date: 'Feb 01, 2026',
        excerpt: 'Connecting 5,000+ farmers directly to urban households, ensuring fair prices and maximum freshness.',
        image: '/images/grocery_banner.png',
        tags: ['Innovation', 'Sustainability'],
        content: `
            <p><strong>Mumbai, India</strong> – BharatBazaar Mega Mart is proud to announce the nationwide launch of its ambitious "Bharat Fresh" initiative, a supply chain revolution designed to bring farm-fresh produce to urban tables within 12 hours of harvest.</p>
            
            <h3>Empowering Farmers, Delighting Customers</h3>
            <p>The initiative cuts out traditional middlemen, allowing farmers to sell their produce directly on the BharatBazaar platform at fair market rates. By optimizing logistics with cold-chain transport, we ensure that fruits and vegetables retain their nutritional value and freshness.</p>
            
            <blockquote>"This is not just about groceries; it's about dignity for our farmers and health for our customers," said Rajesh Kumar, CEO of BharatBazaar.</blockquote>

            <h3>Key Highlights:</h3>
            <ul>
                <li><strong>Speed:</strong> Harvest at 6 AM, Delivery by 6 PM.</li>
                <li><strong>Fair Pricing:</strong> Farmers receive 30% more than traditional mandis.</li>
                <li><strong>Quality:</strong> AI-based quality sorting ensures only the best produce is packed.</li>
            </ul>
            
            <p>The program is currently live in Mumbai, Delhi, and Bangalore, with plans to expand to 20 more cities by the end of the year.</p>
        `
    },
    {
        id: '2',
        slug: 'sustainable-investment',
        title: 'BharatBazaar Pledges ₹500 Cr for Sustainable Last-Mile Delivery',
        date: 'Jan 28, 2026',
        excerpt: 'In a landmark move towards a greener future, the company announces a massive investment to electrify its entire delivery fleet by 2028.',
        image: '/images/electronics_banner.png',
        tags: ['Corporate', 'Environment'],
        content: `
            <p><strong>Bangalore, India</strong> – Reaffirming its commitment to environmental stewardship, BharatBazaar has pledged ₹500 Crores over the next two years to transition its entire logistics fleet to Electric Vehicles (EVs).</p>

            <h3>The Road to Zero Emissions</h3>
            <p>This investment will fund the procurement of 10,000 electric 2-wheelers and 3-wheelers, as well as the setting up of charging infrastructure at all fulfillment centers.</p>

            <p>This move is expected to reduce the company's carbon footprint by 40% annually.</p>
        `
    },
    {
        id: '3',
        slug: 'growth-report-q4',
        title: 'Q4 Growth Report: 40% YoY Revenue Increase',
        date: 'Jan 15, 2026',
        excerpt: 'Driven by strong performance in Tier-2 cities and the rapid adoption of our quick-commerce vertical.',
        image: '/images/beauty_banner.png',
        tags: ['Finance', 'Growth'],
        content: `
            <p><strong>New Delhi, India</strong> – BharatBazaar today released its financial results for the fourth quarter of 2025, showing a robust 40% year-over-year revenue growth.</p>
            <p>The growth was primarily fueled by the company's aggressive expansion into Tier-2 cities and the massive success of its "Mega Sale" events.</p>
        `
    },
    {
        id: '4',
        slug: 'best-app-award',
        title: 'BharatBazaar Wins "Best E-commerce App" Award',
        date: 'Dec 10, 2025',
        excerpt: 'Recognized for outstanding user experience and accessibility features at the India Digital Awards 2025.',
        image: '/images/toys_banner.png',
        tags: ['Awards', 'Technology'],
        content: `
            <p><strong>Mumbai, India</strong> – We are thrilled to announce that the BharatBazaar mobile app has been awarded the prestigious "Best E-commerce App" at the India Digital Awards 2025.</p>
            <p>The jury praised the app's intuitive interface, vernacular language support, and "Elder Mode" accessibility features.</p>
        `
    }
];
