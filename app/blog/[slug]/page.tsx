import Link from 'next/link';
import { getBlogPost } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import PortableTextRenderer from '@/components/PortableTextRenderer';

// Revalidate every 60 seconds - allows new blog posts to appear without redeployment
export const revalidate = 60;

export default async function BlogPost({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Safely check if featured image exists and has asset
  const hasFeaturedImage = post.featuredImage && post.featuredImage.asset;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <article className="max-w-4xl mx-auto px-6 py-24">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-[#5D878C] hover:text-[#4A6C70] mb-8 transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        {/* Category */}
        <span className="text-sm uppercase tracking-wider text-[#5D878C] font-medium">
          {post.category.replace('-', ' ')}
        </span>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#222326] mt-4 mb-6">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span className="font-medium">{post.author}</span>
          <span>•</span>
          <time dateTime={post.publishedDate}>
            {new Date(post.publishedDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </time>
        </div>

        {/* Featured Image */}
        {hasFeaturedImage && (
          <div className="aspect-video overflow-hidden rounded-lg mb-12">
            <img
              src={urlFor(post.featuredImage).width(1200).height(675).url()}
              alt={post.featuredImage.alt || post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        {post.content && post.content.length > 0 ? (
          <PortableTextRenderer value={post.content} />
        ) : (
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {post.excerpt}
            </p>
          </div>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#F0F4F5] text-[#385154] rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-[#222326] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s create something exceptional together
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#5D878C] text-white rounded-lg hover:bg-[#385154] transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
