'use client';

import { useEffect, useState } from 'react';
import Button from '../ui/Button';

const links = [
  { href: '#platform', label: 'Platform' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#industries', label: 'Industries' },
  { href: '#developers', label: 'Developers' }
];

export default function Navbar({ variant = 'sticky' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const computedVariant = variant === 'sticky' && scrolled ? 'solid' : variant;
  const navClass = `top-nav top-nav--${computedVariant} ${scrolled ? 'top-nav--scrolled' : ''}`.trim();

  return (
    <header className={navClass}>
      <div className="container top-nav__inner">
        <strong className="logo">ORIGYN</strong>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <Button as="a" href="#access" variant="primary">
            Request Access
          </Button>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="container mobile-menu__inner">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <Button as="a" href="#access" variant="secondary" onClick={() => setMenuOpen(false)}>
            Request Access
          </Button>
        </div>
      </div>
    </header>
  );
}
