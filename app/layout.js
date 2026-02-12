import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar, Footer } from '../components/layout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar variant="transparent" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
