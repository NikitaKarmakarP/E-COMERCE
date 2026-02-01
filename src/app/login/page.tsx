'use client';

import { useState } from 'react';
import styles from './login.module.css';
import Link from 'next/link';

export default function LoginPage() {
    const [step, setStep] = useState(1); // 1: Number, 2: OTP
    const [phone, setPhone] = useState('');

    return (
        <main className={styles.loginPage}>
            <div className={styles.loginCard}>
                <div className={styles.logo}>BHARATBAZAAR</div>

                {step === 1 ? (
                    <>
                        <h2>Welcome Back!</h2>
                        <p>Login with your phone number to access your account</p>

                        <div className={styles.inputGroup}>
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                placeholder="+91 00000 00000"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <button
                            className="primary-btn"
                            style={{ width: '100%', padding: '1.2rem', marginBottom: '1rem' }}
                            onClick={() => setStep(2)}
                        >
                            Get Secure OTP
                        </button>

                        <p className={styles.footer}>
                            By continuing, you agree to our <Link href="/terms">Terms of Service</Link> & <Link href="/privacy">Privacy Policy</Link>
                        </p>
                    </>
                ) : (
                    <>
                        <h2>Enter OTP</h2>
                        <p>We&apos;ve sent a 4-digit code to <strong>{phone}</strong></p>

                        <div className={styles.otpInputs}>
                            <input type="text" maxLength={1} className={styles.otpBox} autoFocus />
                            <input type="text" maxLength={1} className={styles.otpBox} />
                            <input type="text" maxLength={1} className={styles.otpBox} />
                            <input type="text" maxLength={1} className={styles.otpBox} />
                        </div>

                        <button
                            className="primary-btn"
                            style={{ width: '100%', padding: '1.2rem' }}
                            onClick={() => window.location.href = '/'}
                        >
                            Verify & Login
                        </button>

                        <button
                            className="secondary-btn"
                            style={{ width: '100%', padding: '1.2rem', border: 'none', background: 'transparent' }}
                            onClick={() => setStep(1)}
                        >
                            Change Number
                        </button>

                        <p className={styles.footer}>
                            Didn&apos;t receive code? <button style={{ color: 'var(--primary)', fontWeight: 700 }}>Resend in 0:24</button>
                        </p>
                    </>
                )}
            </div>
        </main>
    );
}
