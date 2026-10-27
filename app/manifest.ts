import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Daily hry',
    short_name: 'Daily hry',
    description: 'Osobní rozcestník denních her – co je dnes ještě potřeba dohrát.',
    lang: 'cs',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#f5ead8',
    theme_color: '#f5ead8',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
