import Link from 'next/link';
import { getBlogPosts } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';

export default async function Blog() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F0F4F5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-[#222326] mb-6">Blog</h1>
          <p className="text-xl text-[#3B3C40] font-light">
            Insights, tips, and industry news from our team
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {blogPosts && blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post: any) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group"
                >
                  <article className="overflow-hidden rounded-lg border border-gray-200 hover:border-coastal transition-all duration-300 hover:shadow-lg">
                    {/* Featured Image */}
                    {post.featuredImage && (
                      <div className="aspect-video overflow-hidden bg-gray-100">
                        <img
                          src={urlFor(post.featuredImage).width(600).height(400).url()}
                          alt={post.featuredImage.alt || post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      {/* Category */}
                      <span className="text-xs uppercase tracking-wider text-[#5D878C] font-medium">
                        {post.category.replace('-', ' ')}
                      </span>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-[#222326] mt-2 mb-3 group-hover:text-[#5D878C] transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.author}</span>
                        <time dateTime={post.publishedDate}>
                          {new Date(post.publishedDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-4">No blog posts yet.</p>
              <p className="text-gray-400 text-sm">
                Add blog posts in the{' '}
                <Link href="/studio" className="text-[#5D878C] hover:underline">
                  CMS Studio
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#222326] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to grow your business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss how we can help you succeed
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
