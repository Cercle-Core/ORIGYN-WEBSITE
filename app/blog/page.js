import { Section, Container, Grid } from '../../components/layout';
import { BlogPostCard, CategoryPill } from '../../components/blog';
import { FadeIn } from '../../components/ui';
import { client, postsQuery, categoriesQuery } from '../../lib/sanity';

export const metadata = {
  title: 'Blog | ORIGYN',
  description:
    'Thought leadership on AI + physical systems, control systems philosophy, re-industrialization, and engineering design thinking.',
};

async function getPosts() {
  try {
    return await client.fetch(postsQuery);
  } catch {
    return [];
  }
}

async function getCategories() {
  try {
    return await client.fetch(categoriesQuery);
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()]);
  const featuredPost = posts?.[0];
  const remainingPosts = posts?.slice(1) || [];

  return (
    <main className="pt-16">
      <Section background="primary-800" density="hero" divider>
        <Container>
          <FadeIn>
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <p className="text-caption uppercase tracking-[0.14em] text-accent mb-4">
                  Editorial
                </p>
                <h1 className="text-h1 font-display text-neutral-100 mb-6">
                  ORIGYN Blog
                </h1>
                <p className="text-body-lg text-neutral-300 max-w-2xl mb-8">
                  Insights on industrial intelligence: AI + physical systems, control philosophy, re-industrialization, and engineering design thinking.
                </p>
                <p className="text-caption text-neutral-500">
                  {posts?.length || 0} published {posts?.length === 1 ? 'article' : 'articles'}
                </p>
              </div>

              {featuredPost && (
                <div className="lg:col-span-5">
                  <BlogPostCard post={featuredPost} featured />
                </div>
              )}
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section density="default" divider>
        <Container>
          {categories?.length > 0 && (
            <div className="mb-12">
              <h2 className="text-caption font-display text-neutral-400 uppercase tracking-wider mb-4">
                Content pillars
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <CategoryPill key={cat._id} category={cat} />
                ))}
              </div>
            </div>
          )}

          {remainingPosts?.length > 0 ? (
            <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <FadeIn key={post._id}>
                  <BlogPostCard post={post} />
                </FadeIn>
              ))}
            </Grid>
          ) : !featuredPost ? (
            <div className="py-16 text-center">
              <p className="text-body text-neutral-500 mb-4">
                No posts yet. Content is coming soon.
              </p>
              {process.env.NODE_ENV !== 'production' && (
                <>
                  <p className="text-caption text-neutral-600 mb-2">
                    Add posts via Sanity Studio at /studio
                  </p>
                  <p className="text-caption text-neutral-600">
                    Ensure NEXT_PUBLIC_SANITY_PROJECT_ID is set in .env.local
                  </p>
                </>
              )}
            </div>
          ) : null}
        </Container>
      </Section>
    </main>
  );
}
