import { Category } from '@/types/category';

export const categories: Category[] = [
    {
        id: 'fashion',
        name: 'Fashion',
        slug: 'fashion',
        icon: '👔',
        color: '#e0f2fe',
        description: 'Explore the latest trends in clothing, footwear and accessories for everyone.',
        subcategories: [
            { id: 'f-men', name: 'Men', slug: 'men' },
            { id: 'f-women', name: 'Women', slug: 'women' },
            { id: 'f-kids', name: 'Kids', slug: 'kids' },
            { id: 'f-ethnic', name: 'Ethnic Wear', slug: 'ethnic' },
            { id: 'f-western', name: 'Western Wear', slug: 'western' },
            { id: 'f-footwear', name: 'Footwear', slug: 'footwear' },
            { id: 'f-acc', name: 'Accessories', slug: 'accessories' },
        ],
        filters: [
            {
                id: 'brand',
                name: 'Brand',
                type: 'checkbox',
                options: [
                    { label: 'Nike', value: 'nike' },
                    { label: 'Adidas', value: 'adidas' },
                    { label: 'Levis', value: 'levis' },
                    { label: 'Zara', value: 'zara' },
                    { label: 'H&M', value: 'hm' },
                ],
            },
            {
                id: 'size',
                name: 'Size',
                type: 'checkbox',
                options: [
                    { label: 'S', value: 's' },
                    { label: 'M', value: 'm' },
                    { label: 'L', value: 'l' },
                    { label: 'XL', value: 'xl' },
                    { label: 'XXL', value: 'xxl' },
                ],
            },
            {
                id: 'price',
                name: 'Price Range',
                type: 'range',
                min: 0,
                max: 10000,
                unit: '₹',
            },
        ],
    },
    {
        id: 'grocery',
        name: 'Grocery & Daily Needs',
        slug: 'grocery',
        icon: '🍎',
        color: '#f0fdf4',
        description: 'Fresh fruits, vegetables, and daily essentials delivered to your door.',
        subcategories: [
            { id: 'g-fv', name: 'Fruits & Vegetables', slug: 'fruits-vegetables' },
            { id: 'g-staples', name: 'Staples', slug: 'staples' },
            { id: 'g-snacks', name: 'Snacks & Munchies', slug: 'snacks' },
            { id: 'g-bev', name: 'Beverages', slug: 'beverages' },
            { id: 'g-house', name: 'Household Care', slug: 'household' },
        ],
        filters: [
            {
                id: 'type',
                name: 'Type',
                type: 'checkbox',
                options: [
                    { label: 'Organic', value: 'organic' },
                    { label: 'Regular', value: 'regular' },
                ],
            },
            {
                id: 'brand',
                name: 'Brand',
                type: 'checkbox',
                options: [
                    { label: 'Tata', value: 'tata' },
                    { label: 'Amul', value: 'amul' },
                    { label: 'Nestle', value: 'nestle' },
                    { label: 'Aashirvaad', value: 'aashirvaad' },
                ],
            },
        ],
    },
    {
        id: 'electronics',
        name: 'Electronics',
        slug: 'electronics',
        icon: '📱',
        color: '#fff1f2',
        description: 'Latest gadgets, mobiles, laptops and accessories.',
        subcategories: [
            { id: 'e-mob', name: 'Mobiles', slug: 'mobiles' },
            { id: 'e-lap', name: 'Laptops', slug: 'laptops' },
            { id: 'e-aud', name: 'Audio', slug: 'audio' },
            { id: 'e-wear', name: 'Wearables', slug: 'wearables' },
        ],
        filters: [
            {
                id: 'brand',
                name: 'Brand',
                type: 'checkbox',
                options: [
                    { label: 'Apple', value: 'apple' },
                    { label: 'Samsung', value: 'samsung' },
                    { label: 'Sony', value: 'sony' },
                    { label: 'Dell', value: 'dell' },
                    { label: 'HP', value: 'hp' },
                ],
            },
            {
                id: 'ram',
                name: 'RAM',
                type: 'checkbox',
                options: [
                    { label: '4GB', value: '4gb' },
                    { label: '8GB', value: '8gb' },
                    { label: '16GB', value: '16gb' },
                    { label: '32GB', value: '32gb' },
                ],
            },
        ],
    },
    {
        id: 'home',
        name: 'Home & Living',
        slug: 'home-living',
        icon: '🏠',
        color: '#fef3c7',
        description: 'Everything you need to make your house a home.',
        subcategories: [
            { id: 'h-kit', name: 'Kitchen & Dining', slug: 'kitchen' },
            { id: 'h-dec', name: 'Home Decor', slug: 'decor' },
            { id: 'h-fur', name: 'Furniture', slug: 'furniture' },
            { id: 'h-bed', name: 'Bedding', slug: 'bedding' },
        ],
        filters: [
            {
                id: 'material',
                name: 'Material',
                type: 'checkbox',
                options: [
                    { label: 'Wood', value: 'wood' },
                    { label: 'Metal', value: 'metal' },
                    { label: 'Plastic', value: 'plastic' },
                    { label: 'Cotton', value: 'cotton' },
                ],
            },
        ],
    },
    {
        id: 'beauty',
        name: 'Beauty & Health',
        slug: 'beauty-health',
        icon: '💄',
        color: '#fdf2f8',
        description: 'Care for yourself with the best beauty and health products.',
        subcategories: [
            { id: 'b-skin', name: 'Skincare', slug: 'skincare' },
            { id: 'b-make', name: 'Makeup', slug: 'makeup' },
            { id: 'b-hair', name: 'Haircare', slug: 'haircare' },
            { id: 'b-well', name: 'Wellness', slug: 'wellness' },
        ],
        filters: [
            {
                id: 'skin-type',
                name: 'Skin Type',
                type: 'checkbox',
                options: [
                    { label: 'Oily', value: 'oily' },
                    { label: 'Dry', value: 'dry' },
                    { label: 'Combination', value: 'combination' },
                    { label: 'Normal', value: 'normal' },
                ],
            },
        ],
    },
    {
        id: 'toys',
        name: 'Toys & Kids',
        slug: 'toys-kids',
        icon: '🧸',
        color: '#ede9fe',
        description: 'Safe and fun toys for kids of all ages.',
        subcategories: [
            { id: 't-act', name: 'Action Figures', slug: 'action-figures' },
            { id: 't-board', name: 'Board Games', slug: 'board-games' },
            { id: 't-learn', name: 'Learning Toys', slug: 'learning-toys' },
            { id: 't-baby', name: 'Baby Care', slug: 'baby-care' },
        ],
        filters: [
            {
                id: 'age',
                name: 'Age Group',
                type: 'checkbox',
                options: [
                    { label: '0-2 Years', value: '0-2' },
                    { label: '3-5 Years', value: '3-5' },
                    { label: '6-8 Years', value: '6-8' },
                    { label: '9+ Years', value: '9+' },
                ],
            },
        ],
    },
    {
        id: 'tools',
        name: 'Tools & Essentials',
        slug: 'tools-essentials',
        icon: '🛠️',
        color: '#fef2f2',
        description: 'Reliable tools for all your DIY and professional needs.',
        subcategories: [
            { id: 'tl-pow', name: 'Power Tools', slug: 'power-tools' },
            { id: 'tl-hand', name: 'Hand Tools', slug: 'hand-tools' },
            { id: 'tl-elec', name: 'Electrical', slug: 'electrical' },
            { id: 'tl-gar', name: 'Garden Tools', slug: 'garden' },
        ],
        filters: [
            {
                id: 'usage',
                name: 'Usage',
                type: 'checkbox',
                options: [
                    { label: 'Professional', value: 'pro' },
                    { label: 'DIY/Home', value: 'diy' },
                ],
            },
        ],
    },
    {
        id: 'pets',
        name: 'Pet Supplies',
        slug: 'pet-supplies',
        icon: '🐾',
        color: '#ecfdf5',
        description: 'Everything for your furry, feathery, or finny friends.',
        subcategories: [
            { id: 'p-food', name: 'Pet Food', slug: 'food' },
            { id: 'p-toys', name: 'Pet Toys', slug: 'toys' },
            { id: 'p-groom', name: 'Grooming', slug: 'grooming' },
            { id: 'p-health', name: 'Health & Wellness', slug: 'health' },
        ],
        filters: [
            {
                id: 'pet-type',
                name: 'Pet Type',
                type: 'checkbox',
                options: [
                    { label: 'Dog', value: 'dog' },
                    { label: 'Cat', value: 'cat' },
                    { label: 'Fish', value: 'fish' },
                    { label: 'Bird', value: 'bird' },
                ],
            },
        ],
    },
];
export const getCategoryBySlug = (slug: string) => {
    const mainCategory = categories.find((c) => c.slug === slug);
    if (mainCategory) {
        return { category: mainCategory, subcategory: null, isMain: true };
    }

    for (const cat of categories) {
        const sub = cat.subcategories.find((s) => s.slug === slug);
        if (sub) {
            return { category: cat, subcategory: sub, isMain: false };
        }
    }

    return null;
};
