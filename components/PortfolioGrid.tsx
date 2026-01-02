'use client';

import { useState } from 'react';
import PortfolioCard from '@/components/PortfolioCard';
import WebsiteShowcase from '@/components/WebsiteShowcase';
import SocialMediaShowcase from '@/components/SocialMediaShowcase';
import SEOShowcase from '@/components/SEOShowcase';
import DesignShowcase from '@/components/DesignShowcase';
import { urlFor } from '@/lib/sanity';

interface PortfolioItem {
  _id: string;
  title: string;
  slug: string;
  client: string;
  description: string;
  tags: string[];
  images?: any[];
  desktopScreenshot?: any;
  mobileScreenshot?: any;
  projectType?: 'website' | 'social-media' | 'other';
  servicesProvided?: string[];
  displayType?: 'web-mockup' | 'social-card' | 'seo-card' | 'design-card' | 'generic';
}

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const categories = ['All', 'Web Design', 'Social Media', 'SEO', 'Design'];

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Map display names to service values
  const categoryMap: Record<string, string> = {
    'Web Design': 'web-design',
    'Social Media': 'social-media',
    'SEO': 'seo',
    'Design': 'design'
  };

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => {
        const services = item.servicesProvided || (item.projectType ? [item.projectType] : []);
        const categoryValue = categoryMap[selectedCategory];
        return services.includes(categoryValue);
      });

  return (
    <>
      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#5D878C] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              // Safely generate image URLs with error handling
              let imageUrl: string | undefined;
              let imageObjects: Array<{ url: string; asset: any }> | undefined;
              let desktopScreenshotUrl: string | undefined;
              let mobileScreenshotUrl: string | undefined;

              try {
                imageUrl = item.images?.[0] ? urlFor(item.images[0]).width(800).height(600).url() : undefined;
                imageObjects = item.images?.filter(img => img).map(img => ({
                  url: urlFor(img).width(800).height(600).url(),
                  asset: img
                }));
                desktopScreenshotUrl = item.desktopScreenshot ? urlFor(item.desktopScreenshot).width(1200).height(800).url() : undefined;
                mobileScreenshotUrl = item.mobileScreenshot ? urlFor(item.mobileScreenshot).width(390).height(844).url() : undefined;
              } catch (error) {
                console.error('Error generating image URLs:', error);
                imageUrl = undefined;
                imageObjects = undefined;
                desktopScreenshotUrl = undefined;
                mobileScreenshotUrl = undefined;
              }

              // Determine display type - use displayType field, or fall back to legacy logic
              let displayType = item.displayType;

              // Backward compatibility: if no displayType, determine from first service or projectType
              if (!displayType) {
                const services = item.servicesProvided || (item.projectType ? [item.projectType] : []);
                const primaryService = services[0];

                if (primaryService === 'web-design' || item.projectType === 'website') {
                  displayType = 'web-mockup';
                } else if (primaryService === 'social-media' || item.projectType === 'social-media') {
                  displayType = 'social-card';
                } else {
                  displayType = 'generic';
                }
              }

              // Render component based on displayType
              if (displayType === 'web-mockup') {
                return (
                  <WebsiteShowcase
                    key={item._id}
                    title={item.title}
                    slug={item.slug}
                    category={item.client}
                    description={item.description}
                    tags={item.tags || []}
                    image={imageUrl}
                    images={imageObjects}
                    desktopScreenshot={desktopScreenshotUrl}
                    mobileScreenshot={mobileScreenshotUrl}
                  />
                );
              } else if (displayType === 'social-card') {
                return (
                  <SocialMediaShowcase
                    key={item._id}
                    title={item.title}
                    slug={item.slug}
                    category={item.client}
                    description={item.description}
                    tags={item.tags || []}
                    image={imageUrl}
                    images={imageObjects}
                  />
                );
              } else if (displayType === 'seo-card') {
                return (
                  <SEOShowcase
                    key={item._id}
                    title={item.title}
                    slug={item.slug}
                    category={item.client}
                    description={item.description}
                    tags={item.tags || []}
                    image={imageUrl}
                  />
                );
              } else if (displayType === 'design-card') {
                return (
                  <DesignShowcase
                    key={item._id}
                    title={item.title}
                    slug={item.slug}
                    category={item.client}
                    description={item.description}
                    tags={item.tags || []}
                    image={imageUrl}
                  />
                );
              } else {
                // Generic card fallback
                return (
                  <PortfolioCard
                    key={item._id}
                    title={item.title}
                    slug={item.slug}
                    category={item.client}
                    description={item.description}
                    tags={item.tags || []}
                    image={imageUrl}
                    projectType={item.projectType}
                  />
                );
              }
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
