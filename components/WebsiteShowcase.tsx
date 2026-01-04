'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { getTagColor } from '@/lib/tagColors';
import BrowserMockup from './BrowserMockup';
import IPhoneMockup from './iPhoneMockup';

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
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  // Use new screenshots if available, fallback to legacy image
  const finalDesktopScreenshot = desktopScreenshot || image;
  const finalMobileScreenshot = mobileScreenshot || image;

  const toggleViewMode = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setViewMode(prev => prev === 'desktop' ? 'mobile' : 'desktop');
  };

  return (
    <div>
      {/* Toggle Button */}
      <div className="flex justify-end mb-2 px-1">
        <button
          onClick={toggleViewMode}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors text-xs font-medium group"
          aria-label={`Switch to ${viewMode === 'desktop' ? 'mobile' : 'desktop'} view`}
        >
          <motion.div
            animate={{ rotate: viewMode === 'mobile' ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {viewMode === 'desktop' ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            )}
          </motion.div>
          <span className="hidden sm:inline">{viewMode === 'desktop' ? 'Desktop' : 'Mobile'}</span>
        </button>
      </div>

      <Link href={`/work/${slug}`} className="block group">
        <motion.div
          className="relative cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br from-[#F0F4F5] to-[#E5ECEE] p-6"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {viewMode === 'desktop' ? (
              <motion.div
                key="desktop"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <BrowserMockup
                  screenshot={finalDesktopScreenshot}
                  title={title}
                  projectUrl={projectUrl}
                />
              </motion.div>
            ) : (
              <motion.div
                key="mobile"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex justify-center py-4"
              >
                <IPhoneMockup
                  screenshot={finalMobileScreenshot}
                  title={title}
                />
              </motion.div>
            )}
          </AnimatePresence>

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
