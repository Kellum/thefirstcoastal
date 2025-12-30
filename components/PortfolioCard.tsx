'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getTagColor } from '@/lib/tagColors';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
  slug: string;
  projectType?: 'website' | 'social-media' | 'other';
}

export default function PortfolioCard({
  title,
  category,
  description,
  image,
  tags,
  slug
}: PortfolioCardProps) {
  return (
    <div>
      <Link href={`/work/${slug}`} className="block group">
        <motion.div
          className="relative cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background Image */}
          {image ? (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
              />
              {/* Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#222326]/20 to-[#222326]/40" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#8DB1B6] to-[#4A6C70]" />
          )}

          {/* Subtle Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg pointer-events-none" />
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
