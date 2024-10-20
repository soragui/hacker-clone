import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hacker News Clone',
  description: 'A Hacker News clone built with Next.js 14 and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="scanline"></div>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}