/**
 * Expandable Section
 * Click-to-expand for architecture details, mobile-friendly.
 * Used on Platform page for layer breakdown.
 */
'use client';

import { useState } from 'react';

export default function ExpandableSection({
  title,
  description,
  children,
  defaultOpen = false,
  id,
  className = '',
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      id={id}
      className={`
        rounded-lg border border-neutral-800
        bg-neutral-900/50
        transition-all duration-300 ease-smooth
        hover:border-neutral-700
        ${className}
      `}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <span className="text-caption font-mono text-accent/80 shrink-0 mt-0.5">
          {open ? '−' : '+'}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-h4 font-display text-neutral-100 mb-2">
            {title}
          </h3>
          <p className="text-body text-neutral-400">
            {description}
          </p>
        </div>
        <svg
          className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-smooth
          ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 pb-6 pt-0 border-t border-neutral-800 mt-0 pt-4">
          {children}
        </div>
      </div>
    </div>
  );
}
