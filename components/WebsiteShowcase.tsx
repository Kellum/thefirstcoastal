'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getTagColor } from '@/lib/tagColors';

interface WebsiteShowcaseProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  images?: any[];
  tags: string[];
  slug: string;
}

export default function WebsiteShowcase({
  title,
  category,
  description,
  image,
  tags,
  slug
}: WebsiteShowcaseProps) {
  return (
    <div>
      <Link href={`/work/${slug}`} className="block group">
        <motion.div
          className="relative cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br from-[#F0F4F5] to-[#E5ECEE] p-6"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {/* Browser Mockup - Static */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 ml-3">
                <div className="bg-white rounded px-3 py-0.5 text-[10px] text-gray-400 max-w-[120px] truncate border border-gray-200">
                  {title.toLowerCase().replace(/\s+/g, '-')}
                </div>
              </div>
            </div>

            {/* Browser Content */}
            <div className="aspect-video overflow-hidden bg-gray-50">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#8DB1B6] to-[#4A6C70]" />
              )}
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
