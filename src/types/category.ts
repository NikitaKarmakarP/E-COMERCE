export interface Subcategory {
    id: string;
    name: string;
    slug: string;
    image?: string;
}

export interface FilterOption {
    label: string;
    value: string;
}

export interface Filter {
    id: string;
    name: string;
    type: 'checkbox' | 'range' | 'radio';
    options?: FilterOption[];
    min?: number;
    max?: number;
    unit?: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    icon: string;
    color: string;
    description: string;
    subcategories: Subcategory[];
    filters: Filter[];
    featuredProducts?: string[]; // IDs of featured products
}
