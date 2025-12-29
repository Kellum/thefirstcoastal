import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if you want fresh data (but slower)
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper function to fetch all services
export async function getServices() {
  return client.fetch(
    `*[_type == "service"] | order(order asc) {
      _id,
      title,
      description,
      icon,
      order
    }`
  );
}

// Helper function to fetch all portfolio items
export async function getPortfolioItems() {
  return client.fetch(
    `*[_type == "portfolioItem"] | order(completedDate desc) {
      _id,
      title,
      "slug": slug.current,
      client,
      description,
      projectUrl,
      completedDate,
      images,
      tags,
      featured
    }`
  );
}

// Helper function to fetch a single portfolio item by slug
export async function getPortfolioItem(slug: string) {
  return client.fetch(
    `*[_type == "portfolioItem" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      client,
      description,
      projectUrl,
      completedDate,
      images,
      tags,
      featured
    }`,
    { slug }
  );
}

// Helper function to fetch all blog posts
export async function getBlogPosts() {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedDate desc) {
      _id,
      title,
      slug,
      author,
      publishedDate,
      excerpt,
      featuredImage,
      category,
      tags
    }`
  );
}

// Helper function to fetch a single blog post by slug
export async function getBlogPost(slug: string) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author,
      publishedDate,
      excerpt,
      featuredImage,
      content,
      category,
      tags
    }`,
    { slug }
  );
}
