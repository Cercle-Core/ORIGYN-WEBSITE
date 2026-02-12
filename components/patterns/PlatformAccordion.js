'use client';

import { useState } from 'react';

export default function PlatformAccordion({ items = [] }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="platform-accordion" role="presentation">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <article key={item.id} className={`accordion-item ${isOpen ? 'accordion-item--open' : ''}`}>
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span>{item.title}</span>
              <span className="accordion-icon" aria-hidden>
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div id={`accordion-panel-${item.id}`} className="accordion-panel" hidden={!isOpen}>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
