/**
 * Navbar
 * Variants: transparent (hero), solid (scroll), sticky
 * States: hover, active, mobile open
 *
 * When to use: All pages
 * When NOT to use: N/A - global component
 */
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';

const navLinks = [
  { label: 'Platform', href: '/platform' },
  { label: 'Industries', href: '/industries' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Developers', href: '/developers' },
  { label: 'R&D', href: '/rnd' },
  { label: 'About', href: '/about' },
];

export default function Navbar({ variant = 'transparent', scrollBehavior = true }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!scrollBehavior || variant !== 'transparent') return;
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollBehavior, variant]);

  const isSolid = variant === 'solid' || (variant === 'transparent' && scrollBehavior && scrolled);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-smooth
        ${isSolid ? 'bg-primary-900/95 backdrop-blur-sm border-b border-neutral-800' : 'bg-transparent'}
      `}
    >
      <nav className="max-w-[var(--max-content-wide)] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-body font-display text-neutral-100 hover:text-white transition-colors">
            ORIGYN
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-caption transition-colors ${
                    isActive ? 'text-neutral-100 font-medium' : 'text-neutral-400 hover:text-neutral-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <Button variant="primary">Request Access</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-neutral-400 hover:text-neutral-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`transition-colors ${isActive ? 'text-neutral-100 font-medium' : 'text-neutral-400 hover:text-neutral-100'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <Button variant="primary" className="w-full justify-center">
                Request Access
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
