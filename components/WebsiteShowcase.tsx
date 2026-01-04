'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getTagColor } from '@/lib/tagColors';
import BrowserMockup from './BrowserMockup';

interface WebsiteShowcaseProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  images?: any[];
  tags: string[];
  slug: string;
  desktopScreenshot?: string;
  mobileScreenshot?: string;
  projectUrl?: string;
}

export default function WebsiteShowcase({
  title,
  category,
  description,
  image,
  tags,
  slug,
  desktopScreenshot,
  mobileScreenshot,
  projectUrl
}: WebsiteShowcaseProps) {
  // Use desktop screenshot, fallback to legacy image
  const finalDesktopScreenshot = desktopScreenshot || image;

  return (
    <div>
      <Link href={`/work/${slug}`} className="block group">
        <motion.div
          className="relative cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br from-[#F0F4F5] to-[#E5ECEE] p-6"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <BrowserMockup
            screenshot={finalDesktopScreenshot}
            title={title}
            projectUrl={projectUrl}
          />

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
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">{category}</p>
        <h3 className="text-base font-semibold text-[#222326] group-hover:text-[#5D878C] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
