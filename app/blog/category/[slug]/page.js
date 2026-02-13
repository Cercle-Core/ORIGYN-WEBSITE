import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section, Container, Grid } from '../../../../components/layout';
import { BlogPostCard } from '../../../../components/blog';
import { FadeIn } from '../../../../components/ui';
import { client } from '../../../../lib/sanity';
import {
  postsByCategoryQuery,
  categoryBySlugQuery,
} from '../../../../lib/sanity';

export async function generateMetadata({ params }) {
  try {
    const category = await client.fetch(categoryBySlugQuery, {
      slug: params.slug,
    });
    if (!category) return { title: 'Category not found | ORIGYN' };
    return {
      title: `${category.title} | ORIGYN Blog`,
      description: category.description || `Posts in ${category.title}`,
    };
  } catch {
    return { title: 'Category | ORIGYN Blog' };
  }
}

export async function generateStaticParams() {
  try {
    const categories = await client.fetch(
      `*[_type == "category"]{ "slug": slug.current }`
    );
    return categories?.map((c) => ({ slug: c.slug })) || [];
  } catch {
    return [];
  }
}

async function getCategory(slug) {
  try {
    return await client.fetch(categoryBySlugQuery, { slug });
  } catch {
    return null;
  }
}

async function getPostsByCategory(slug) {
  try {
    return await client.fetch(postsByCategoryQuery, { slug });
  } catch {
    return [];
  }
}

export default async function BlogCategoryPage({ params }) {
  const [category, posts] = await Promise.all([
    getCategory(params.slug),
    getPostsByCategory(params.slug),
  ]);

  if (!category) notFound();

  return (
    <main className="pt-16">
      <Section background="primary-800">
        <Container>
          <Link
            href="/blog"
            className="text-caption text-neutral-500 hover:text-neutral-300 transition-colors mb-6 inline-block"
          >
            ← Back to Blog
          </Link>
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-h1 font-display text-neutral-100 mb-6">
                {category.title}
              </h1>
              {category.description && (
                <p className="text-body-lg text-neutral-400">
                  {category.description}
                </p>
              )}
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section divider>
        <Container>
          {posts?.length > 0 ? (
            <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <FadeIn key={post._id}>
                  <BlogPostCard post={post} />
                </FadeIn>
              ))}
            </Grid>
          ) : (
            <div className="py-16 text-center">
              <p className="text-body text-neutral-500">
                No posts in this category yet.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}
