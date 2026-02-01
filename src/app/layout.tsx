import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BHARATBAZAAR MEGA MART | From Daily Needs to Dream Buys",
  description: "India's Ultimate Shopping Destination. Shop Fashion, Grocery, Electronics, Toys, Beauty & more at BharatBazaar Mega Mart.",
  keywords: "ecommerce, bharatbazaar, grocery, fashion, electronics, online shopping india",
};

import { Outfit, Inter } from "next/font/google";
import MobileBottomNav from "@/components/Navigation/MobileBottomNav";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import { AppProvider } from '@/context/AppContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a237e" />
      </head>
      <body className={`${outfit.variable} ${inter.variable}`}>
        <AppProvider>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          {children}
          <MobileBottomNav />
        </AppProvider>
      </body>
    </html>
  );
}
