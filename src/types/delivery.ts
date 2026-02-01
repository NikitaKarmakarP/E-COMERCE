export type DeliveryType = 'express' | 'standard' | 'scheduled' | 'night';

export interface Shipment {
    id: string;
    type: DeliveryType;
    status: 'ordered' | 'packed' | 'shipped' | 'out-for-delivery' | 'delivered';
    items: string[]; // item names or IDs
    estimatedArrival: string;
    trackingStep: number; // 1-4
    warehouse: string;
}

export interface Order {
    id: string;
    date: string;
    total: number;
    shipments: Shipment[];
}
