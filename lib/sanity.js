import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
};

export const client = createClient(config);

const builder = imageUrlBuilder(config);
export function urlFor(source) {
  return builder.image(source);
}

// GROQ fragments
const postFields = `
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "category": category->{
    _id,
    title,
    slug,
    pillar
  },
  "author": author->{
    _id,
    name,
    slug,
    avatar,
    bio
  },
  coverImage,
  body
`;

export const postsQuery = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
  ${postFields}
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}`;

export const postsByCategoryQuery = `*[_type == "post" && category->slug.current == $slug && defined(publishedAt)] | order(publishedAt desc) {
  ${postFields}
}`;

export const categoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  pillar
}`;

export const categoryBySlugQuery = `*[_type == "category" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  pillar
}`;
