'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
  slug: string;
}

export default function PortfolioCard({
  title,
  category,
  description,
  image,
  tags,
  slug
}: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/work/${slug}`} className="block">
      <motion.div
        className="relative cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background - Image with overlay or gradient fallback */}
        {image ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#222326]/40 to-[#222326]/60" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#8DB1B6] to-[#4A6C70]" />
        )}

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-[#222326] bg-opacity-95 flex flex-col justify-center items-center p-6 text-white"
        >
          <span className="text-sm uppercase tracking-wider text-[#BFB195] mb-2">
            {category}
          </span>
          <h3 className="text-2xl font-bold mb-3 text-center">{title}</h3>
          <p className="text-gray-300 text-center mb-4 text-sm leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#BFB195] bg-opacity-30 border border-[#BFB195] text-[#BFB195] rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bottom badge (visible when not hovered) */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-6 left-6 right-6"
        >
          <div className="bg-white rounded-lg p-4 shadow-xl">
            <p className="text-xs uppercase tracking-wider text-[#5D878C] font-semibold mb-1">{category}</p>
            <h3 className="text-xl font-bold text-[#222326]">{title}</h3>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
