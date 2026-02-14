import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section, Container, Grid } from '../../../../components/layout';
import { BlogPostCard, CategoryPill } from '../../../../components/blog';
import { FadeIn } from '../../../../components/ui';
import { client } from '../../../../lib/sanity';
import {
  postsByCategoryQuery,
  categoryBySlugQuery,
  categoriesQuery,
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
      openGraph: {
        title: `${category.title} | ORIGYN Blog`,
        description: category.description || `Posts in ${category.title}`,
      },
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

async function getCategories() {
  try {
    return await client.fetch(categoriesQuery);
  } catch {
    return [];
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
  const [category, posts, categories] = await Promise.all([
    getCategory(params.slug),
    getPostsByCategory(params.slug),
    getCategories(),
  ]);

  if (!category) notFound();

  return (
    <main className="pt-16">
      <Section background="primary-800" density="default" divider>
        <Container>
          <Link
            href="/blog"
            className="text-caption text-neutral-500 hover:text-neutral-300 transition-colors mb-6 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 rounded"
          >
            ← Back to Blog
          </Link>
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-caption uppercase tracking-[0.14em] text-accent mb-4">
                Category
              </p>
              <h1 className="text-h1 font-display text-neutral-100 mb-4">
                {category.title}
              </h1>
              {category.description && (
                <p className="text-body-lg text-neutral-400 mb-4">
                  {category.description}
                </p>
              )}
              <p className="text-caption text-neutral-500">
                {posts?.length || 0} posts in this category
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section density="default" divider>
        <Container>
          {categories?.length > 0 && (
            <div className="mb-12">
              <h2 className="text-caption font-display text-neutral-400 uppercase tracking-wider mb-4">
                Browse categories
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <CategoryPill
                    key={cat._id}
                    category={cat}
                    active={cat.slug?.current === params.slug}
                  />
                ))}
              </div>
            </div>
          )}

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
