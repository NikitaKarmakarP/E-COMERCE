export interface SellerStats {
    totalEarnings: number;
    ordersToday: number;
    pendingShipments: number;
    rating: number;
}

export interface SellerProduct {
    id: string;
    name: string;
    stock: number;
    price: number;
    status: 'active' | 'out-of-stock' | 'pending-review';
}

export interface PlatformStats {
    totalGmv: number;
    totalUsers: number;
    activeSellers: number;
    fraudAlerts: number;
}
