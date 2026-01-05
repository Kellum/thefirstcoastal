import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

// Use environment variables with fallback for build time
// Railway will have these available at runtime
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'y0gns0g3';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disabled CDN for immediate updates from Sanity Studio
});

// Image URL builder
const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
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
      clientLogo,
      description,
      projectUrl,
      completedDate,
      servicesProvided,
      displayType,
      desktopScreenshot,
      mobileScreenshot,
      socialMediaPosts,
      seoMetrics,
      images,
      tags,
      featured,
      projectType
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
      clientLogo,
      description,
      projectUrl,
      completedDate,
      servicesProvided,
      displayType,
      websiteDescription,
      websiteProjectType,
      websiteTechnologies,
      websiteChallenges,
      websiteSolutions,
      websiteExistingPlatform,
      websiteIssues,
      websiteImprovements,
      websiteFeatures,
      desktopScreenshot,
      mobileScreenshot,
      socialMediaDescription,
      socialMediaPosts[]{
        ...,
        caption,
        postUrl,
        platform,
        alt
      },
      instagramHandle,
      instagramProfilePicture,
      isInstagramVerified,
      seoDescription,
      seoMetrics,
      brandingDescription,
      images,
      tags,
      featured,
      projectType
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
      "slug": slug.current,
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
