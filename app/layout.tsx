import type { Metadata, Viewport } from 'next';
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
  applicationName: 'Daily hry',
  appleWebApp: {
    capable: true,
    title: 'Daily hry',
    statusBarStyle: 'default',
  },
  // Next vydává standardizované `mobile-web-app-capable`; Safari na iOS starším
  // než 16.4 čte ještě původní variantu s prefixem.
  other: { 'apple-mobile-web-app-capable': 'yes' },
};

export const viewport: Viewport = {
  themeColor: '#f5ead8',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${caprasimo.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
