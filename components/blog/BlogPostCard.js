/**
 * BlogPostCard
 * Post preview for blog listing. Uses design tokens.
 */
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../lib/sanity';

export default function BlogPostCard({ post, featured = false }) {
  const { title, slug, excerpt, publishedAt, category, author, coverImage } = post;

  return (
    <Link
      href={`/blog/${slug?.current}`}
      className={`
        group block rounded-lg p-6 h-full
        bg-neutral-900/50 border border-neutral-800
        hover:border-neutral-700 hover:bg-neutral-900/70
        transition-all duration-200 ease-smooth
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900
        ${featured ? 'lg:p-8 border-accent/30 shadow-[0_0_30px_-20px_rgba(59,130,246,0.5)]' : ''}
      `}
    >
      <article className="h-full flex flex-col">
        {coverImage && (
          <div className={`mb-4 ${featured ? '-mx-8 -mt-8 aspect-[16/8]' : '-mx-6 -mt-6 aspect-[600/320]'} overflow-hidden rounded-t-lg relative`}>
            <Image
              src={urlFor(coverImage).width(900).height(480).fit('crop').url()}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 520px"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        )}

        <div className="flex items-center gap-2 text-caption text-neutral-500 mb-2">
          {category && (
            <span className="text-accent uppercase tracking-wider">
              {category.title}
            </span>
          )}
          {publishedAt && (
            <time dateTime={publishedAt}>
              {new Date(publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          )}
        </div>

        <h3 className={`${featured ? 'text-h3' : 'text-h4'} font-display text-neutral-100 mb-2 line-clamp-2`}>
          {title}
        </h3>
        <p className={`text-body text-neutral-400 ${featured ? 'mb-6 line-clamp-3' : 'mb-4 line-clamp-2'}`}>
          {excerpt}
        </p>

        <div className="mt-auto pt-3 border-t border-neutral-800/80 flex items-center justify-between gap-3 text-caption">
          <span className="text-neutral-500 truncate">
            {author?.name || 'ORIGYN Editorial'}
          </span>
          <span className="inline-flex items-center gap-2 text-accent transition-all duration-200 group-hover:text-accent-hover group-hover:translate-x-0.5">
            Read article
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
