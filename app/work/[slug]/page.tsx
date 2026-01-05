import Link from 'next/link';
import { getPortfolioItem, getPortfolioItems } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import WebsiteViewToggle from '@/components/WebsiteViewToggle';
import ProjectHeader from '@/components/ProjectHeader';
import ServiceTabs from '@/components/ServiceTabs';
import SEOSection from '@/components/SEOSection';
import PortableTextRenderer from '@/components/PortableTextRenderer';
import InstagramPost from '@/components/InstagramPost';
import { getTagColor } from '@/lib/tagColors';

// Revalidate every 60 seconds - allows new portfolio items to appear without redeployment
export const revalidate = 60;

// Enable dynamic params for new portfolio items
export const dynamicParams = true;

// Generate static params for existing portfolio items
export async function generateStaticParams() {
  const items = await getPortfolioItems();
  return items.map((item: any) => ({
    slug: item.slug,
  }));
}

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

  // Pre-generate image URLs for client component (can't pass functions to client components)
  const imageUrls = validImages.map((img: any) => ({
    url1400: urlFor(img).width(1400).url(),
    url1600: urlFor(img).width(1600).url(),
    url1000: urlFor(img).width(1000).url(),
    url800: urlFor(img).width(800).height(800).url(),
    url400: urlFor(img).width(400).url(),
    url1200: urlFor(img).width(1200).url(),
    alt: img.alt || `${item.title} screenshot`
  }));

  // Generate URLs for new screenshot fields
  const desktopScreenshotUrl = item.desktopScreenshot
    ? urlFor(item.desktopScreenshot).width(1400).url()
    : undefined;
  const mobileScreenshotUrl = item.mobileScreenshot
    ? urlFor(item.mobileScreenshot).width(400).url()
    : undefined;

  // Generate URLs for client logo (no height constraint to preserve aspect ratio)
  const clientLogoUrl = item.clientLogo
    ? urlFor(item.clientLogo).width(400).url()
    : undefined;

  // Generate URLs for social media posts
  const socialMediaPostUrls = item.socialMediaPosts?.filter((post: any) => post && post.asset).map((post: any) => ({
    url: urlFor(post).width(800).height(800).url(),
    alt: post.alt || 'Social media post',
    platform: post.platform || 'Social Media',
    caption: post.caption || '',
    postUrl: post.postUrl || ''
  })) || [];

  // Generate URL for Instagram profile picture
  const instagramProfilePicUrl = item.instagramProfilePicture
    ? urlFor(item.instagramProfilePicture).width(200).height(200).url()
    : undefined;

  // Generate URLs for SEO metrics
  const seoBeforeUrl = item.seoMetrics?.beforeScreenshot
    ? urlFor(item.seoMetrics.beforeScreenshot).width(800).url()
    : undefined;
  const seoAfterUrl = item.seoMetrics?.afterScreenshot
    ? urlFor(item.seoMetrics.afterScreenshot).width(800).url()
    : undefined;

  // Get services provided (fallback to projectType for backward compatibility)
  const services = item.servicesProvided || (item.projectType ? [item.projectType] : []);

  return (
    <div className="min-h-screen">
      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link
          href="/work"
          className="inline-flex items-center text-[#5D878C] hover:text-[#4A6C70] transition-colors"
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
      </div>

      {/* Header Section */}
      <article className="max-w-6xl mx-auto px-6 py-12">
        {/* Basic Header - Logo, Client, Title */}
        <ProjectHeader
          clientLogo={clientLogoUrl}
          clientName={item.client}
          title={item.title || 'Untitled Project'}
        />

        {/* Desktop/Mobile Mockups - First visual */}
        <div className="mb-12 max-w-5xl mx-auto">
          <WebsiteViewToggle
            imageUrls={imageUrls}
            title={item.title}
            projectUrl={item.projectUrl}
            desktopScreenshot={desktopScreenshotUrl}
            mobileScreenshot={mobileScreenshotUrl}
          />
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {item.description && item.description.length > 400
              ? `${item.description.substring(0, 400)}...`
              : item.description}
          </p>

          {/* View Website Button - Prominent */}
          {item.projectUrl && (
            <div className="mb-6">
              <a
                href={item.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#5D878C] text-white rounded-lg hover:bg-[#4A6C70] transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:scale-105 text-lg"
              >
                View Live Website
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}

          {/* Completion Date */}
          {item.completedDate && (
            <div className="text-sm text-gray-600">
              <time dateTime={item.completedDate}>
                Completed {new Date(item.completedDate).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric'
                })}
              </time>
            </div>
          )}
        </div>

        {/* Service Tabs - Only show if multiple services */}
        <ServiceTabs services={services} />

        {/* Service Sections */}
        <div className="space-y-20">
          {/* Web Design Section */}
          {(services.includes('web-design') || services.includes('website')) && (
            <section id="section-web-design" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-[#222326] mb-6 pb-4 border-b-2 border-[#5D878C]">
                Web Design & Development
              </h2>
              {item.websiteDescription && (
                <div className="mb-8">
                  <PortableTextRenderer value={item.websiteDescription} />
                </div>
              )}

              {/* Project Type & Technical Details */}
              {item.websiteProjectType && (
                <div className="mb-8 bg-gradient-to-br from-[#F0F4F5] to-white rounded-xl p-6">
                  {/* Project Type Badge */}
                  <div className="mb-6">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#5D878C] text-white">
                      {item.websiteProjectType === 'new-build' && '🚀 New Website Build'}
                      {item.websiteProjectType === 'redesign' && '✨ Website Redesign'}
                      {item.websiteProjectType === 'maintenance' && '🔧 Website Maintenance'}
                    </span>
                  </div>

                  {/* For New Builds */}
                  {item.websiteProjectType === 'new-build' && (
                    <div className="space-y-6">
                      {/* Technologies */}
                      {item.websiteTechnologies && item.websiteTechnologies.length > 0 && (
                        <div>
                          <h4 className="text-lg font-semibold text-[#222326] mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.websiteTechnologies.map((tech: string, index: number) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Challenges */}
                      {item.websiteChallenges && (
                        <div>
                          <h4 className="text-lg font-semibold text-[#222326] mb-3">Challenges & Obstacles</h4>
                          <div className="prose prose-sm max-w-none">
                            <PortableTextRenderer value={item.websiteChallenges} />
                          </div>
                        </div>
                      )}

                      {/* Solutions */}
                      {item.websiteSolutions && (
                        <div>
                          <h4 className="text-lg font-semibold text-[#222326] mb-3">Solutions Implemented</h4>
                          <div className="prose prose-sm max-w-none">
                            <PortableTextRenderer value={item.websiteSolutions} />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* For Redesigns/Maintenance */}
                  {(item.websiteProjectType === 'redesign' || item.websiteProjectType === 'maintenance') && (
                    <div className="space-y-6">
                      {/* Existing Platform */}
                      {item.websiteExistingPlatform && item.websiteExistingPlatform.length > 0 && (
                        <div>
                          <h4 className="text-lg font-semibold text-[#222326] mb-3">Original Platform</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.websiteExistingPlatform.map((platform: string, index: number) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                              >
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Issues */}
                      {item.websiteIssues && (
                        <div>
                          <h4 className="text-lg font-semibold text-[#222326] mb-3">Issues with Previous Site</h4>
                          <div className="prose prose-sm max-w-none">
                            <PortableTextRenderer value={item.websiteIssues} />
                          </div>
                        </div>
                      )}

                      {/* Improvements */}
                      {item.websiteImprovements && (
                        <div>
                          <h4 className="text-lg font-semibold text-[#222326] mb-3">Improvements Made</h4>
                          <div className="prose prose-sm max-w-none">
                            <PortableTextRenderer value={item.websiteImprovements} />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Key Features */}
              {item.websiteFeatures && item.websiteFeatures.length > 0 && (
                <div className="mt-12 bg-gradient-to-br from-[#F0F4F5] to-white rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-[#222326] mb-6 text-center">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {item.websiteFeatures.map((feature: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5D878C] flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Social Media Section */}
          {services.includes('social-media') && (
            <section id="section-social-media" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-[#222326] mb-6 pb-4 border-b-2 border-[#5D878C]">
                Social Media
              </h2>
              {item.socialMediaDescription && (
                <div className="mb-8">
                  <PortableTextRenderer value={item.socialMediaDescription} />
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {socialMediaPostUrls.map((post: any, index: number) => (
                  <InstagramPost
                    key={index}
                    imageUrl={post.url}
                    alt={post.alt}
                    profilePictureUrl={instagramProfilePicUrl}
                    username={item.instagramHandle}
                    displayName={item.client}
                    isVerified={item.isInstagramVerified || false}
                    caption={post.caption}
                    postUrl={post.postUrl}
                  />
                ))}
              </div>
              {socialMediaPostUrls.length === 0 && validImages.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {validImages.map((image: any, index: number) => (
                    <InstagramPost
                      key={index}
                      imageUrl={urlFor(image).width(800).height(800).url()}
                      alt={image.alt || `${item.title} post ${index + 1}`}
                      profilePictureUrl={instagramProfilePicUrl}
                      username={item.instagramHandle}
                      displayName={item.client}
                      isVerified={item.isInstagramVerified || false}
                    />
                  ))}
                </div>
              )}
            </section>
          )}

          {/* SEO Section */}
          {services.includes('seo') && (
            <section id="section-seo" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-[#222326] mb-6 pb-4 border-b-2 border-[#5D878C]">
                SEO & Performance
              </h2>
              {item.seoDescription && (
                <div className="mb-8">
                  <PortableTextRenderer value={item.seoDescription} />
                </div>
              )}
              <SEOSection
                seoMetrics={item.seoMetrics}
                beforeUrl={seoBeforeUrl}
                afterUrl={seoAfterUrl}
              />
            </section>
          )}

          {/* Design Section */}
          {(services.includes('design') || services.includes('branding')) && validImages.length > 0 && (
            <section id="section-design" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-[#222326] mb-6 pb-4 border-b-2 border-[#5D878C]">
                Design
              </h2>
              {item.brandingDescription && (
                <div className="mb-8">
                  <PortableTextRenderer value={item.brandingDescription} />
                </div>
              )}
              <div className="grid grid-cols-1 gap-8">
                {validImages.map((image: any, index: number) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={urlFor(image).width(1200).url()}
                      alt={image.alt || `${item.title} image ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

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
