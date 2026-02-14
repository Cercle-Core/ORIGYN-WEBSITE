/**
 * CategoryPill
 * Category badge for blog posts.
 */
import Link from 'next/link';

export default function CategoryPill({ category, active = false }) {
  if (!category) return null;

  return (
    <Link
      href={`/blog/category/${category.slug?.current}`}
      aria-current={active ? 'page' : undefined}
      className={`
        inline-flex items-center px-3 py-1 rounded-full
        text-caption border transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900
        ${active
          ? 'text-neutral-100 bg-accent/25 border-accent/50'
          : 'text-accent bg-accent/15 border-accent/30 hover:bg-accent/25'}
      `}
    >
      {category.title}
    </Link>
  );
}
