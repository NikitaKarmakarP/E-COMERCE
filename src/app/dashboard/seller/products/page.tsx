'use client';

import { useState } from 'react';
import sStyles from '../seller.module.css';

export default function MyProducts() {
    const [products, setProducts] = useState([
        { id: '1', name: 'Cotton T-Shirt', stock: 120, price: 899, status: 'Active', sku: 'TSH-001' },
        { id: '2', name: 'Wireless Mouse', stock: 0, price: 1299, status: 'Out of Stock', sku: 'MSE-042' },
        { id: '3', name: 'Organic Mangoes', stock: 45, price: 599, status: 'Pending Review', sku: 'FRU-099' },
        { id: '4', name: 'Laptop Stand', stock: 88, price: 2199, status: 'Active', sku: 'ACC-112' },
    ]);

    return (
        <div className={sStyles.card} style={{ minHeight: '80vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h2>Product Inventory</h2>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Manage your listings and stock levels</p>
                </div>
                <button className="primary-btn" style={{ padding: '12px 24px' }}>+ Add New Product</button>
            </div>

            <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
                <input
                    type="text"
                    placeholder="Search by name or SKU..."
                    style={{ flex: 1, padding: '12px 20px', borderRadius: '10px', border: '1px solid #e2e8f0' }}
                />
                <select style={{ padding: '12px 20px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <option>All Categories</option>
                    <option>Fashion</option>
                    <option>Electronics</option>
                    <option>Grocery</option>
                </select>
                <select style={{ padding: '12px 20px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Out of Stock</option>
                </select>
            </div>

            <table className={sStyles.table}>
                <thead>
                    <tr>
                        <th>Product Info</th>
                        <th>SKU</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => (
                        <tr key={p.id}>
                            <td>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        📦
                                    </div>
                                    <span style={{ fontWeight: 700 }}>{p.name}</span>
                                </div>
                            </td>
                            <td style={{ color: '#64748b', fontFamily: 'monospace' }}>{p.sku}</td>
                            <td>
                                <span style={{ color: p.stock === 0 ? '#ef4444' : 'inherit' }}>
                                    {p.stock} units
                                </span>
                            </td>
                            <td style={{ fontWeight: 700 }}>₹{p.price.toLocaleString()}</td>
                            <td>
                                <span className={`${sStyles.status} ${p.status === 'Active' ? sStyles.statusActive : p.status === 'Out of Stock' ? sStyles.statusStockout : sStyles.statusPending}`}>
                                    {p.status}
                                </span>
                            </td>
                            <td>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button style={{ color: 'var(--primary)', fontWeight: 700 }}>Edit</button>
                                    <button style={{ color: '#ef4444', fontWeight: 700 }}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
