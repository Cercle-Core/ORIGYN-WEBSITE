import './globals.css';
import { Analytics } from '@/components/providers/analytics';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'ORIGYN Platform',
    template: '%s | ORIGYN Platform'
  },
  description: 'ORIGYN platform website and ecosystem information.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
