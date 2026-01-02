import Link from 'next/link';
import { getPortfolioItem } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import WebsiteViewToggle from '@/components/WebsiteViewToggle';
import { getTagColor } from '@/lib/tagColors';

export default async function PortfolioItemPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const item = await getPortfolioItem(slug);

  if (!item) {
    notFound();
  }

  // Filter out any invalid images to prevent urlFor errors
  const validImages = item.images?.filter((img: any) => img && img.asset) || [];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <article className="max-w-6xl mx-auto px-6 py-24">
        {/* Back link */}
        <Link
          href="/work"
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
          Back to Work
        </Link>

        {/* Client */}
        {item.client && (
          <p className="text-sm uppercase tracking-wider text-[#5D878C] font-medium mb-4">
            {item.client}
          </p>
        )}

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#222326] mb-6">
          {item.title || 'Untitled Project'}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          {item.completedDate && (
            <time dateTime={item.completedDate}>
              Completed {new Date(item.completedDate).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
              })}
            </time>
          )}
          {item.projectUrl && (
            <>
              <span>•</span>
              <a
                href={item.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5D878C] hover:text-[#4A6C70] transition-colors inline-flex items-center gap-1"
              >
                View Live Site
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </>
          )}
        </div>

        {/* Description */}
        {item.description && (
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              {item.description}
            </p>
          </div>
        )}

        {/* Images - Different layouts based on project type */}
        {validImages.length > 0 && (
          <>
            {/* Website Project - Interactive View Toggle */}
            {item.projectType === 'website' && (
              <WebsiteViewToggle
                images={validImages}
                title={item.title}
                projectUrl={item.projectUrl}
                urlFor={urlFor}
              />
            )}

            {/* Social Media Project - Grid Layout */}
            {item.projectType === 'social-media' && (
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {validImages.map((image: any, index: number) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      {/* Social Post Header */}
                      <div className="p-4 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8DB1B6] to-[#5D878C] flex items-center justify-center text-white font-bold">
                            {item.client.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-gray-900">{item.client}</p>
                            <p className="text-xs text-gray-500">Social Media Post</p>
                          </div>
                        </div>
                      </div>
                      {/* Post Image */}
                      <div className="aspect-square overflow-hidden bg-gray-100">
                        <img
                          src={urlFor(image).width(800).height(800).url()}
                          alt={image.alt || `${item.title} post ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Post Actions */}
                      <div className="p-4">
                        <div className="flex items-center gap-4 mb-2">
                          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Other/Default Project - Standard Grid */}
            {(!item.projectType || item.projectType === 'other') && (
              <div className="grid grid-cols-1 gap-8 mb-12">
                {validImages.map((image: any, index: number) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={urlFor(image).width(1200).url()}
                      alt={image.alt || `${item.title} screenshot ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              Technologies & Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${getTagColor(tag)}`}
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
