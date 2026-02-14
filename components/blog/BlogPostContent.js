/**
 * BlogPostContent
 * Renders Portable Text body with design system styling.
 * Supports: headings, paragraphs, lists, blockquotes, links, images, inline code.
 */
'use client';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '../../lib/sanity';
import { CodeBlock } from '../ui';

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = urlFor(value).width(800).fit('max').url();
      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={value.alt || ''}
              fill
              sizes="(max-width: 800px) 100vw, 800px"
              className="object-contain rounded-lg"
            />
          </div>
          {value.alt && (
            <figcaption className="mt-2 text-caption text-neutral-500 text-center">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }) => {
      if (!value?.code) return null;
      return (
        <CodeBlock
          code={value.code}
          language={value.language || 'bash'}
          className="my-6"
        />
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-h2 font-display text-neutral-100 mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-h3 font-display text-neutral-100 mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-h4 font-display text-neutral-100 mt-6 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-body text-neutral-300 mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-6 my-6 text-body-lg text-neutral-400 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-body text-neutral-300 mb-4 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-body text-neutral-300 mb-4 space-y-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-neutral-100">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-neutral-200">{children}</em>
    ),
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-neutral-800 text-code font-mono text-accent">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accent-hover underline transition-colors"
      >
        {children}
      </a>
    ),
  },
};

export default function BlogPostContent({ value }) {
  if (!value) return null;
  return (
    <div className="blog-content">
      <PortableText value={value} components={components} />
    </div>
  );
}
