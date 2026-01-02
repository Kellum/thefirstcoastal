'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getTagColor } from '@/lib/tagColors';

interface DesignShowcaseProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
  slug: string;
}

export default function DesignShowcase({
  title,
  category,
  description,
  image,
  tags,
  slug
}: DesignShowcaseProps) {
  return (
    <div>
      <Link href={`/work/${slug}`} className="block group">
        <motion.div
          className="relative cursor-pointer overflow-hidden rounded-lg bg-white shadow-md"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {/* Design Portfolio Layout */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-4">
            {/* Header with Client Initial */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8DB1B6] to-[#5D878C] flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {category.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Design Project</p>
                  <p className="text-sm font-semibold text-gray-900">{category}</p>
                </div>
              </div>
              {/* Design tools indicator */}
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Ps</span>
                </div>
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Ai</span>
                </div>
              </div>
            </div>

            {/* Main Design Showcase - Image or Pattern */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 mb-3">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                // Default creative pattern if no image
                <div className="w-full h-full bg-gradient-to-br from-[#8DB1B6] via-[#5D878C] to-[#4A6C70] relative overflow-hidden">
                  {/* Decorative shapes */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-2xl"></div>
                  <div className="absolute bottom-6 left-6 w-32 h-32 rounded-full bg-white/10 blur-3xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Design Details Grid */}
            <div className="grid grid-cols-3 gap-2">
              {/* Color Palette */}
              <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                <p className="text-[10px] text-gray-500 mb-1.5 font-medium">Colors</p>
                <div className="flex gap-1">
                  <div className="w-4 h-4 rounded-full bg-[#5D878C] border-2 border-white shadow-sm"></div>
                  <div className="w-4 h-4 rounded-full bg-[#222326] border-2 border-white shadow-sm"></div>
                  <div className="w-4 h-4 rounded-full bg-[#F0F4F5] border-2 border-white shadow-sm"></div>
                </div>
              </div>

              {/* Typography */}
              <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                <p className="text-[10px] text-gray-500 mb-1 font-medium">Type</p>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold text-gray-800">Aa</span>
                  <span className="text-[9px] text-gray-500">Custom</span>
                </div>
              </div>

              {/* Style */}
              <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                <p className="text-[10px] text-gray-500 mb-1 font-medium">Style</p>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-[#8DB1B6] to-[#5D878C]"></div>
                  <span className="text-[9px] text-gray-600 font-medium">Modern</span>
                </div>
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
