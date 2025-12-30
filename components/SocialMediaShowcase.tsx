'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getTagColor } from '@/lib/tagColors';

interface SocialMediaShowcaseProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  images?: any[];
  tags: string[];
  slug: string;
}

export default function SocialMediaShowcase({
  title,
  category,
  description,
  image,
  images,
  tags,
  slug
}: SocialMediaShowcaseProps) {
  // For social media, show first image or fallback
  const displayImage = image;

  return (
    <div>
      <Link href={`/work/${slug}`} className="block group">
        <motion.div
          className="relative cursor-pointer overflow-hidden rounded-lg bg-white shadow-md"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {/* Social Media Post Container */}
          <div>
            {/* Post Header - Minimal */}
            <div className="p-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#8DB1B6] to-[#5D878C] flex items-center justify-center text-white text-xs font-bold">
                  {category.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-xs text-gray-900">{category}</p>
                </div>
              </div>
            </div>

            {/* Post Image */}
            <div className="aspect-square overflow-hidden bg-gray-50">
              {displayImage ? (
                <img
                  src={displayImage}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#8DB1B6] to-[#4A6C70]" />
              )}
            </div>

            {/* Post Actions - Minimal */}
            <div className="p-3 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Subtle Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 rounded-lg pointer-events-none" />
        </motion.div>
      </Link>

      {/* Tags Between Card and Title */}
      <div className="mt-3 px-1 flex flex-wrap gap-1.5">
        {tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className={`px-2 py-1 rounded text-[10px] font-medium border ${getTagColor(tag)}`}
          >
            {tag}
          </span>
        ))}
        {tags.length > 3 && (
          <span className="px-2 py-1 rounded text-[10px] font-medium bg-gray-100 text-gray-600 border border-gray-200">
            +{tags.length - 3}
          </span>
        )}
      </div>

      {/* Title and Description Below Tags */}
      <div className="mt-2 px-1">
        <h3 className="text-base font-semibold text-[#222326] group-hover:text-[#5D878C] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
