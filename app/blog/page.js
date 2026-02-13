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

  return (
    <main className="pt-16">
      <Section background="primary-800">
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-h1 font-display text-neutral-100 mb-6">
                Blog
              </h1>
              <p className="text-body-lg text-neutral-400">
                Thought leadership on industrial intelligence: AI + physical
                systems, control philosophy, re-industrialization, and
                engineering design thinking.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section divider>
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
              <p className="text-body text-neutral-500 mb-4">
                No posts yet. Content is coming soon.
              </p>
              <p className="text-caption text-neutral-600 mb-2">
                Add posts via Sanity Studio at /studio
              </p>
              <p className="text-caption text-neutral-600">
                Ensure NEXT_PUBLIC_SANITY_PROJECT_ID is set in .env.local
              </p>
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}
