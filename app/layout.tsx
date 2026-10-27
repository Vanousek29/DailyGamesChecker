import type { Metadata } from 'next';
import { Caprasimo, Figtree } from 'next/font/google';
import './design-system.css';
import './globals.css';

const caprasimo = Caprasimo({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-caprasimo',
  display: 'swap',
});

const figtree = Figtree({
  weight: ['400', '600', '700'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Daily hry',
  description: 'Osobní rozcestník denních her – co je dnes ještě potřeba dohrát.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${caprasimo.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
