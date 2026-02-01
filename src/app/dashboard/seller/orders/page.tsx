'use client';

import { useState } from 'react';
import sStyles from '../seller.module.css';

export default function SellerOrders() {
    const orders = [
        { id: 'ORD-7721', customer: 'Rahul Sharma', date: 'Feb 01, 12:30 PM', total: 1899, status: 'Processing', items: 2 },
        { id: 'ORD-7718', customer: 'Anjali Gupta', date: 'Feb 01, 10:15 AM', total: 450, status: 'Shipped', items: 1 },
        { id: 'ORD-7690', customer: 'Vikram Singh', date: 'Jan 31, 06:45 PM', total: 12400, status: 'Processing', items: 3 },
        { id: 'ORD-7685', customer: 'Priya Verma', date: 'Jan 31, 02:20 PM', total: 899, status: 'Delivered', items: 1 },
        { id: 'ORD-7650', customer: 'Amit Patel', date: 'Jan 30, 11:00 AM', total: 2199, status: 'Cancelled', items: 1 },
    ];

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'Processing': return { background: '#eff6ff', color: '#1d4ed8' };
            case 'Shipped': return { background: '#fef3c7', color: '#92400e' };
            case 'Delivered': return { background: '#f0fdf4', color: '#166534' };
            case 'Cancelled': return { background: '#fef2f2', color: '#991b1b' };
            default: return {};
        }
    };

    return (
        <div className={sStyles.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h2>Customer Orders</h2>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Track and manage your sales</p>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="secondary-btn" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>Export CSV</button>
                    <button className="primary-btn" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>Print Labels</button>
                </div>
            </div>

            <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {['All Orders', 'Pending', 'Processing', 'Completed', 'Cancelled'].map(tab => (
                    <button
                        key={tab}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '50px',
                            border: '1px solid #e2e8f0',
                            background: tab === 'All Orders' ? '#0f172a' : 'white',
                            color: tab === 'All Orders' ? 'white' : '#64748b',
                            fontWeight: 700,
                            cursor: 'pointer'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <table className={sStyles.table}>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Date & Time</th>
                        <th>Total Amount</th>
                        <th>Items</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td style={{ fontWeight: 800, color: 'var(--primary)' }}>#{order.id}</td>
                            <td style={{ fontWeight: 700 }}>{order.customer}</td>
                            <td style={{ color: '#64748b', fontSize: '0.85rem' }}>{order.date}</td>
                            <td style={{ fontWeight: 800 }}>₹{order.total.toLocaleString()}</td>
                            <td style={{ textAlign: 'center' }}>{order.items}</td>
                            <td>
                                <span style={{
                                    padding: '5px 12px',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    ...getStatusStyle(order.status)
                                }}>
                                    {order.status}
                                </span>
                            </td>
                            <td>
                                <button style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700 }}>Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
