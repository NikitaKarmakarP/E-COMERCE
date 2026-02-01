export interface FamilyMember {
    id: string;
    name: string;
    role: 'head' | 'member' | 'kid' | 'elder';
    avatar: string;
    email?: string;
    phone?: string;
    spendingLimit?: number; // Monthly limit
    spentThisMonth: number;
    canApproveRequests?: boolean;
}

export interface Transaction {
    id: string;
    memberId: string;
    memberName: string;
    amount: number;
    description: string;
    date: string;
    type: 'purchase' | 'refund' | 'topup';
}

export interface FamilyWallet {
    balance: number;
    currency: string;
    transactions: Transaction[];
}
