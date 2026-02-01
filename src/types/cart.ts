import { Product } from '@/data/products';

export interface CartItem extends Product {
    quantity: number;
}

export interface CartCategoryGroup {
    category: string;
    items: CartItem[];
    deliverySlot?: string;
}

export interface Coupon {
    code: string;
    discount: number;
    description: string;
}
