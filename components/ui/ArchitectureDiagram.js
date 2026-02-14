/**
 * Architecture Diagram Blocks
 * Used for: platform layers, system flow, Data → Model → Control
 * Must include: grid alignment, layer stacking, subtle shadow, hover detail reveal
 *
 * When to use: Platform architecture, system flow diagrams
 * When NOT to use: Simple feature lists (use Card instead)
 */
'use client';

import { useState } from 'react';

export default function ArchitectureDiagram({ layers = [], className = '' }) {
  return (
    <div className={`grid gap-4 ${className}`}>
      {layers.map((layer, index) => (
        <ArchitectureLayer key={index} {...layer} index={index} />
      ))}
    </div>
  );
}

function ArchitectureLayer({ title, description, detail, index }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      type="button"
      className={`
        group relative rounded-lg p-6 text-left w-full
        bg-neutral-900/50 border border-neutral-800
        shadow-sm
        transition-all duration-300 ease-smooth
        hover:border-neutral-700 hover:shadow-md
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900
      `}
      onClick={() => setRevealed((value) => !value)}
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      aria-expanded={revealed}
    >
      <div className="flex items-start gap-4">
        <span className="text-caption font-mono text-accent/80 shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-4">
            <h4 className="text-h4 font-display text-neutral-100 mb-2">
              {title}
            </h4>
            <span className="text-caption text-neutral-500 group-hover:text-neutral-300 transition-colors">
              {revealed ? 'Hide detail' : 'View detail'}
            </span>
          </div>
          <p className="text-body text-neutral-400">
            {description}
          </p>
          {detail && (
            <div
              className={`
                mt-4 overflow-hidden transition-all duration-300 ease-smooth
                ${revealed ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <p className="text-caption text-neutral-500">
                {detail}
              </p>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
