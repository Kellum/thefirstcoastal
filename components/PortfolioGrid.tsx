'use client';

import { useState } from 'react';
import PortfolioCard from '@/components/PortfolioCard';
import { urlFor } from '@/lib/sanity';

interface PortfolioItem {
  _id: string;
  title: string;
  slug: string;
  client: string;
  description: string;
  tags: string[];
  images?: any[];
}

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const categories = ['All', 'Web Design', 'Development', 'SEO', 'E-commerce', 'Marketing'];

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.tags?.some(tag =>
        tag.toLowerCase().includes(selectedCategory.toLowerCase())
      ));

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
            {filteredItems.map((item) => (
              <PortfolioCard
                key={item._id}
                title={item.title}
                slug={item.slug}
                category={item.client}
                description={item.description}
                tags={item.tags || []}
                image={item.images?.[0] ? urlFor(item.images[0]).width(800).height(600).url() : undefined}
              />
            ))}
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
