export interface LoyaltyInfo {
    points: number;
    value: number; // in currency
    tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
}

export interface ScratchCard {
    id: string;
    status: 'locked' | 'unscratched' | 'scratched';
    reward?: string;
    minOrder?: number;
}

export interface ComboDeal {
    id: string;
    items: string[];
    price: number;
    originalPrice: number;
    savings: number;
    image: string;
}
