/**
 * CategoryPill
 * Category badge for blog posts.
 */
import Link from 'next/link';

export default function CategoryPill({ category }) {
  if (!category) return null;

  return (
    <Link
      href={`/blog/category/${category.slug?.current}`}
      className="
        inline-block px-3 py-1 rounded-full
        text-caption text-accent
        bg-accent/15 border border-accent/30
        hover:bg-accent/25 transition-colors
      "
    >
      {category.title}
    </Link>
  );
}
