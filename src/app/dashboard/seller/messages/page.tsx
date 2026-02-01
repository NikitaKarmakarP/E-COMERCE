'use client';

import { useState } from 'react';
import sStyles from '../seller.module.css';

export default function SellerMessages() {
    const chats = [
        { id: 1, name: 'Rahul Sharma', lastMsg: 'Is the XL size available?', time: '2m ago', active: true, unread: true },
        { id: 2, name: 'Anjali Gupta', lastMsg: 'Thank you for the fast delivery!', time: '1h ago', unread: false },
        { id: 3, name: 'Vikram Singh', lastMsg: 'I want to return the keyboard.', time: '3h ago', unread: true },
        { id: 4, name: 'Priya Verma', lastMsg: 'When will the mangoes be in stock?', time: '1d ago', unread: false },
    ];

    return (
        <div className={sStyles.card} style={{ padding: 0, overflow: 'hidden', height: '80vh', display: 'grid', gridTemplateColumns: '350px 1fr' }}>
            {/* Chat List */}
            <div style={{ borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Customer Chats</h2>
                    <input
                        type="text"
                        placeholder="Search conversations..."
                        style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }}
                    />
                </div>
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    {chats.map(chat => (
                        <div key={chat.id} style={{
                            padding: '1.2rem 1.5rem',
                            borderBottom: '1px solid #f1f5f9',
                            cursor: 'pointer',
                            background: chat.active ? '#f8fafc' : 'white',
                            position: 'relative'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <span style={{ fontWeight: 800 }}>{chat.name}</span>
                                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{chat.time}</span>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{chat.lastMsg}</p>
                            {chat.unread && <div style={{ position: 'absolute', right: '1.5rem', bottom: '1.2rem', width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }}></div>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Window */}
            <div style={{ display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
                <div style={{ padding: '1.2rem 2rem', background: 'white', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👤</div>
                    <div>
                        <h4 style={{ margin: 0 }}>Rahul Sharma</h4>
                        <span style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: 700 }}>● Online</span>
                    </div>
                </div>

                <div style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', overflowY: 'auto' }}>
                    <div style={{ alignSelf: 'flex-start', maxWidth: '70%', background: 'white', padding: '12px 18px', borderRadius: '15px 15px 15px 0', border: '1px solid #e2e8f0', fontSize: '0.95rem' }}>
                        Hello, I saw your Cotton T-Shirt. Is the XL size available for the Blue color?
                        <span style={{ display: 'block', fontSize: '0.7rem', color: '#94a3b8', marginTop: '5px' }}>12:30 PM</span>
                    </div>
                    <div style={{ alignSelf: 'flex-end', maxWidth: '70%', background: 'var(--primary)', color: 'white', padding: '12px 18px', borderRadius: '15px 15px 0 15px', fontSize: '0.95rem' }}>
                        Hi Rahul! Yes, we just restocked the Blue XL. You can place the order now.
                        <span style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', marginTop: '5px' }}>12:32 PM</span>
                    </div>
                </div>

                <div style={{ padding: '1.5rem 2rem', background: 'white', borderTop: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <input
                            type="text"
                            placeholder="Type your reply here..."
                            style={{ flex: 1, padding: '12px 20px', borderRadius: '50px', border: '1px solid #e2e8f0', background: '#f8fafc', outline: 'none' }}
                        />
                        <button className="primary-btn" style={{ borderRadius: '50px', padding: '0 25px' }}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
