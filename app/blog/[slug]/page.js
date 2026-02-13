import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section, Container } from '../../../components/layout';
import { BlogPostContent, CategoryPill } from '../../../components/blog';
import { client, urlFor } from '../../../lib/sanity';
import { postBySlugQuery } from '../../../lib/sanity';

export async function generateMetadata({ params }) {
  try {
    const post = await client.fetch(postBySlugQuery, { slug: params.slug });
    if (!post) return { title: 'Post not found | ORIGYN' };
    return {
      title: `${post.title} | ORIGYN Blog`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.coverImage
          ? [urlFor(post.coverImage).width(1200).height(630).url()]
          : [],
      },
    };
  } catch {
    return { title: 'Post | ORIGYN Blog' };
  }
}

export async function generateStaticParams() {
  try {
    const posts = await client.fetch(
      `*[_type == "post" && defined(publishedAt)]{ "slug": slug.current }`
    );
    return posts?.map((p) => ({ slug: p.slug })) || [];
  } catch {
    return [];
  }
}

async function getPost(slug) {
  try {
    return await client.fetch(postBySlugQuery, { slug });
  } catch {
    return null;
  }
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const { title, excerpt, publishedAt, author, category, coverImage, body } =
    post;

  return (
    <main className="pt-16">
      <Section background="primary-800">
        <Container>
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="text-caption text-neutral-500 hover:text-neutral-300 transition-colors mb-6 inline-block"
            >
              ← Back to Blog
            </Link>
            {category && (
              <div className="mb-4">
                <CategoryPill category={category} />
              </div>
            )}
            <h1 className="text-h1 font-display text-neutral-100 mb-4">
              {title}
            </h1>
            <p className="text-body-lg text-neutral-400 mb-6">{excerpt}</p>
            <div className="flex items-center gap-4 text-caption text-neutral-500">
              {author?.name && <span>{author.name}</span>}
              <time dateTime={publishedAt}>
                {new Date(publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>
        </Container>
      </Section>

      {coverImage && (
        <Section background="default">
          <Container>
            <div className="max-w-4xl mx-auto">
              <img
                src={urlFor(coverImage).width(1200).height(600).fit('max').url()}
                alt=""
                className="w-full rounded-lg"
              />
            </div>
          </Container>
        </Section>
      )}

      <Section background="primary-900">
        <Container>
          <article className="max-w-3xl mx-auto">
            <BlogPostContent value={body} />
          </article>
        </Container>
      </Section>
    </main>
  );
}
