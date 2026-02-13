# Blog System Setup (Phase 4)

The blog is powered by **Sanity** headless CMS. Follow these steps to complete setup.

## 1. Create a Sanity project

1. Go to [sanity.io/manage](https://sanity.io/manage) and sign in
2. Click **Create project** → name it (e.g. `origyn-blog`)
3. Copy the **Project ID** from the project settings

## 2. Environment variables

Copy `.env.example` to `.env.local` and add your Sanity credentials:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Get these from [sanity.io/manage](https://sanity.io/manage) after creating your project.

## 3. Install dependencies

```bash
npm install --legacy-peer-deps
```

> `--legacy-peer-deps` is needed because Sanity v3 may require React 19; we use React 18.

## 4. Run the development server

```bash
npm run dev
```

- **Blog**: [http://localhost:3000/blog](http://localhost:3000/blog)
- **Sanity Studio**: [http://localhost:3000/studio](http://localhost:3000/studio)

## 5. Add content in Sanity Studio

1. Go to `/studio`
2. Create **Authors** (name, slug, bio)
3. Create **Categories** (one per content pillar):
   - AI + Physical Systems
   - Control Systems Philosophy
   - Re-industrialization
   - Engineering Design Thinking
4. Create **Posts** (title, slug, excerpt, author, category, body, publishedAt)

## Content pillars

| Pillar | Category slug |
|--------|---------------|
| AI + physical systems | `ai-physical` |
| Control systems philosophy | `control-philosophy` |
| Re-industrialization | `reindustrialization` |
| Engineering design thinking | `design-thinking` |

## Optional: Code blocks in posts

To add syntax-highlighted code blocks, install the code input plugin:

```bash
npm install @sanity/code-input --legacy-peer-deps
```

Then add to `sanity.config.js`:

```js
import { codeInput } from '@sanity/code-input';
// ...
plugins: [structureTool(), codeInput()],
```

And add the `code` type back to `sanity/schemas/blockContent.js` (see Sanity code-input docs).

## File structure

```
sanity/
  schemas/
    author.js
    category.js
    post.js
    blockContent.js
    index.js
lib/
  sanity.js          # Client, GROQ queries, urlFor
app/
  blog/
    page.js          # Blog listing
    [slug]/page.js   # Single post
    category/[slug]/page.js
  studio/[[...index]]/page.js  # Sanity Studio
components/
  blog/
    BlogPostCard.js
    BlogPostContent.js  # Portable Text renderer
    CategoryPill.js
```
