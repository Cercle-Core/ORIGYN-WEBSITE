/**
 * BlogPostCard
 * Post preview for blog listing. Uses design tokens.
 */
import Link from 'next/link';
import { urlFor } from '../../lib/sanity';

export default function BlogPostCard({ post }) {
  const { title, slug, excerpt, publishedAt, category, author, coverImage } = post;

  return (
    <Link
      href={`/blog/${slug?.current}`}
      className="
        block rounded-lg p-6
        bg-neutral-900/50 border border-neutral-800
        hover:border-neutral-700 hover:bg-neutral-900/70
        transition-all duration-200 ease-smooth
      "
    >
      <article>
        {coverImage && (
          <div className="mb-4 -mx-6 -mt-6 overflow-hidden rounded-t-lg">
            <img
              src={urlFor(coverImage).width(600).height(320).fit('crop').url()}
              alt=""
              className="w-full h-48 object-cover"
            />
          </div>
        )}
        {category && (
          <span className="inline-block text-caption text-accent uppercase tracking-wider mb-2">
            {category.title}
          </span>
        )}
        <h3 className="text-h4 font-display text-neutral-100 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-body text-neutral-400 mb-4 line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center gap-3 text-caption text-neutral-500">
          {author?.name && <span>{author.name}</span>}
          <span>·</span>
          <time dateTime={publishedAt}>
            {new Date(publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
        </div>
      </article>
    </Link>
  );
}
