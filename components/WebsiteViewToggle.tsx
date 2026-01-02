'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageUrl {
  url1400: string;
  url1600: string;
  url1000: string;
  url800: string;
  url400: string;
  url1200: string;
  alt: string;
}

interface WebsiteViewToggleProps {
  imageUrls?: ImageUrl[];
  title: string;
  projectUrl?: string;
  desktopScreenshot?: string;
  mobileScreenshot?: string;
}

type ViewMode = 'desktop' | 'mobile';

export default function WebsiteViewToggle({
  imageUrls,
  title,
  projectUrl,
  desktopScreenshot,
  mobileScreenshot
}: WebsiteViewToggleProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');

  // Use new screenshots if available, fallback to legacy images
  const desktopImage = desktopScreenshot || imageUrls?.[0]?.url1400;
  const mobileImage = mobileScreenshot || imageUrls?.[1]?.url400 || imageUrls?.[0]?.url400;

  return (
    <div className="space-y-6 mb-12">
      {/* View Mode Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex gap-2 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode('desktop')}
            className={`flex items-center gap-2 px-6 py-2 rounded-md text-sm font-medium transition-all ${
              viewMode === 'desktop'
                ? 'bg-white text-[#5D878C] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Desktop
          </button>
          <button
            onClick={() => setViewMode('mobile')}
            className={`flex items-center gap-2 px-6 py-2 rounded-md text-sm font-medium transition-all ${
              viewMode === 'mobile'
                ? 'bg-white text-[#5D878C] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Mobile
          </button>
        </div>
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        {/* Desktop Browser Mockup View */}
        {viewMode === 'desktop' && (
          <motion.div
            key="desktop"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                {/* Window Controls */}
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                {/* URL Bar */}
                <div className="flex-1 ml-4 flex items-center">
                  <div className="bg-white rounded-md px-4 py-2 text-sm text-gray-500 max-w-md w-full border border-gray-200 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="truncate font-mono text-xs">
                      {projectUrl || title.toLowerCase().replace(/\s+/g, '-') + '.com'}
                    </span>
                  </div>
                </div>
              </div>
              {/* Browser Content */}
              <div className="overflow-hidden bg-gray-50">
                {desktopImage ? (
                  <img
                    src={desktopImage}
                    alt={`${title} desktop view`}
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="w-full aspect-video bg-gradient-to-br from-[#8DB1B6] to-[#4A6C70] flex items-center justify-center">
                    <div className="text-white/50 text-sm font-medium">No screenshot available</div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Mobile iPhone Mockup View */}
        {viewMode === 'mobile' && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative" style={{ width: '300px' }}>
              {/* iPhone Frame */}
              <div className="relative bg-[#1d1d1f] rounded-[3rem] p-3 shadow-2xl">
                {/* Screen Container */}
                <div className="relative bg-black rounded-[2.5rem] overflow-hidden" style={{ height: '600px' }}>
                  {/* Dynamic Island */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-28 h-7 bg-black rounded-full flex items-center justify-center">
                    <div className="w-16 h-4 bg-gradient-to-b from-gray-900 to-black rounded-full flex items-center justify-between px-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-800"></div>
                    </div>
                  </div>

                  {/* Screen Content - Fixed height with contain */}
                  <div className="relative w-full h-full bg-white pt-7">
                    {mobileImage ? (
                      <img
                        src={mobileImage}
                        alt={`${title} mobile view`}
                        className="w-full h-full object-contain object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#8DB1B6] to-[#4A6C70] flex items-center justify-center">
                        <div className="text-white/50 text-xs font-medium px-4 text-center">
                          No mobile screenshot available
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/30 rounded-full"></div>
                </div>

                {/* Side Buttons */}
                <div className="absolute -left-[3px] top-24 w-0.5 h-6 bg-[#2d2d2d] rounded-l"></div>
                <div className="absolute -left-[3px] top-32 w-0.5 h-6 bg-[#2d2d2d] rounded-l"></div>
                <div className="absolute -right-[3px] top-28 w-0.5 h-12 bg-[#2d2d2d] rounded-r"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
