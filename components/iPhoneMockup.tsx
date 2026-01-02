'use client';

import Image from 'next/image';

interface iPhoneMockupProps {
  screenshot?: string;
  title: string;
  className?: string;
}

export default function iPhoneMockup({ screenshot, title, className = '' }: iPhoneMockupProps) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: '300px' }}>
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

          {/* Screen Content - Now with contain to show full screenshot */}
          <div className="relative w-full h-full bg-white pt-7">
            {screenshot ? (
              <img
                src={screenshot}
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
        {/* Volume Buttons */}
        <div className="absolute -left-[3px] top-24 w-0.5 h-6 bg-[#2d2d2d] rounded-l"></div>
        <div className="absolute -left-[3px] top-32 w-0.5 h-6 bg-[#2d2d2d] rounded-l"></div>

        {/* Power Button */}
        <div className="absolute -right-[3px] top-28 w-0.5 h-12 bg-[#2d2d2d] rounded-r"></div>
      </div>
    </div>
  );
}
