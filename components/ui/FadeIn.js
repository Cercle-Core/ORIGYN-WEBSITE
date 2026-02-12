/**
 * FadeIn - Motion utility
 * Fade-in on scroll. Subtle, intentional, controlled.
 * Per design: industrial infrastructure — no bouncy or playful animations.
 *
 * When to use: Section reveals, content blocks
 * When NOT to use: Every element (use sparingly for emphasis)
 */
'use client';

import { useEffect, useRef, useState } from 'react';

export default function FadeIn({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-500 ease-smooth
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
