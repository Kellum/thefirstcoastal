'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WebsiteViewToggleProps {
  images: any[];
  title: string;
  projectUrl?: string;
  urlFor: (source: any) => any;
}

type ViewMode = 'desktop' | 'fullwidth' | 'responsive';

export default function WebsiteViewToggle({
  images,
  title,
  projectUrl,
  urlFor
}: WebsiteViewToggleProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');

  return (
    <div className="space-y-6 mb-12">
      {/* View Mode Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex gap-2 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode('desktop')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              viewMode === 'desktop'
                ? 'bg-white text-[#5D878C] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Desktop
          </button>
          <button
            onClick={() => setViewMode('fullwidth')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              viewMode === 'fullwidth'
                ? 'bg-white text-[#5D878C] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Full View
          </button>
          <button
            onClick={() => setViewMode('responsive')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              viewMode === 'responsive'
                ? 'bg-white text-[#5D878C] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Responsive
          </button>
        </div>
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        {/* Desktop Browser Mockup View */}
        {viewMode === 'desktop' && (
          <motion.div
            key="desktop"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {images.map((image: any, index: number) => (
              <div key={index} className="mb-12">
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-5xl mx-auto">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 ml-4">
                      <div className="bg-white rounded px-4 py-1.5 text-sm text-gray-600 max-w-md border border-gray-200">
                        {projectUrl || title.toLowerCase().replace(/\s+/g, '-') + '.com'}
                      </div>
                    </div>
                  </div>
                  {/* Browser Content */}
                  <div className="overflow-hidden">
                    <img
                      src={urlFor(image).width(1400).url()}
                      alt={image.alt || `${title} screenshot ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                {index === 0 && images.length > 1 && (
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Screenshot {index + 1} of {images.length}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        )}

        {/* Full Width View */}
        {viewMode === 'fullwidth' && (
          <motion.div
            key="fullwidth"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {images.map((image: any, index: number) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={urlFor(image).width(1600).url()}
                  alt={image.alt || `${title} screenshot ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </motion.div>
        )}

        {/* Responsive/Device View */}
        {viewMode === 'responsive' && (
          <motion.div
            key="responsive"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row items-start justify-center gap-8"
          >
            {/* Desktop Mockup */}
            <div className="flex-1 max-w-2xl">
              <div className="bg-gray-800 rounded-t-lg p-3 shadow-2xl">
                <div className="bg-white rounded aspect-video overflow-hidden">
                  {images[0] && (
                    <img
                      src={urlFor(images[0]).width(1000).url()}
                      alt={`${title} desktop view`}
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                </div>
              </div>
              <div className="h-3 bg-gray-700 rounded-b-lg"></div>
              <div className="h-2 bg-gray-600 w-1/3 mx-auto rounded-b"></div>
              <p className="text-center text-sm text-gray-500 mt-4">Desktop (1920x1080)</p>
            </div>

            {/* Mobile Mockup */}
            <div className="w-48">
              <div className="bg-gray-800 rounded-[2rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[1.5rem] aspect-[9/19.5] overflow-hidden">
                  {images[1] || images[0] ? (
                    <img
                      src={urlFor(images[1] || images[0]).width(400).url()}
                      alt={`${title} mobile view`}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : null}
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">Mobile (375x812)</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
