import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar, Footer } from '../components/layout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://origyn.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ORIGYN | Industrial Intelligence Infrastructure',
    template: '%s | ORIGYN',
  },
  description:
    'Bridge the gap between AI research and production control systems. One platform. Data to actuation. Built for engineers who ship.',
  keywords: [
    'industrial AI',
    'control systems',
    'manufacturing',
    'optimization',
    'data pipeline',
    'industrial intelligence',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ORIGYN',
    title: 'ORIGYN | Industrial Intelligence Infrastructure',
    description:
      'Bridge the gap between AI research and production control systems.',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'ORIGYN' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ORIGYN | Industrial Intelligence Infrastructure',
    description:
      'Bridge the gap between AI research and production control systems.',
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ORIGYN',
  url: siteUrl,
  description:
    'Industrial intelligence infrastructure. Bridge AI research and production control systems.',
  logo: `${siteUrl}/logo.svg`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Navbar variant="transparent" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
