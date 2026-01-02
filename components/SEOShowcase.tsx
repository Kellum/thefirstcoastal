'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getTagColor } from '@/lib/tagColors';

interface SEOShowcaseProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
  slug: string;
}

export default function SEOShowcase({
  title,
  category,
  description,
  image,
  tags,
  slug
}: SEOShowcaseProps) {
  return (
    <div>
      <Link href={`/work/${slug}`} className="block group">
        <motion.div
          className="relative cursor-pointer overflow-hidden rounded-lg bg-white shadow-md"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {/* SEO Metrics Dashboard */}
          <div className="p-5 bg-gradient-to-br from-white to-[#F0F4F5]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8DB1B6] to-[#5D878C] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">SEO Performance</p>
                  <p className="text-xs font-semibold text-gray-900">{category}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-xs font-bold text-green-600">Optimized</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Lighthouse Score */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">Performance</span>
                  <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#222326]">95</span>
                  <span className="text-xs text-gray-400">/100</span>
                </div>
                <div className="mt-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                </div>
              </div>

              {/* Traffic Increase */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">Traffic</span>
                  <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#222326]">+65</span>
                  <span className="text-xs text-gray-400">%</span>
                </div>
                <div className="mt-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[65%] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                </div>
              </div>

              {/* Rankings */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">Rank Increase</span>
                  <svg className="w-3 h-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#222326]">+24</span>
                  <span className="text-xs text-gray-400">pos</span>
                </div>
                <div className="mt-1 text-xs text-purple-600 font-medium">Top 10 keywords</div>
              </div>

              {/* Speed */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">Page Speed</span>
                  <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#222326]">1.2</span>
                  <span className="text-xs text-gray-400">sec</span>
                </div>
                <div className="mt-1 text-xs text-orange-600 font-medium">Load time</div>
              </div>
            </div>

            {/* Graph Visualization */}
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-700">Traffic Growth</span>
                <span className="text-xs text-green-600 font-semibold">↑ 65%</span>
              </div>
              {/* Simple bar chart */}
              <div className="flex items-end justify-between gap-1 h-16">
                {[30, 35, 45, 50, 60, 75, 85, 95].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-[#5D878C] to-[#8DB1B6] rounded-t transition-all group-hover:from-[#4A6C70] group-hover:to-[#5D878C]"
                    style={{ height: `${height}%` }}
                  />
                ))}
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
