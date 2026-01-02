'use client';

import Image from 'next/image';

interface BrowserMockupProps {
  screenshot?: string;
  title: string;
  className?: string;
}

export default function BrowserMockup({ screenshot, title, className = '' }: BrowserMockupProps) {
  return (
    <div className={`bg-white rounded-lg shadow-2xl overflow-hidden ${className}`}>
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
        {/* Window Controls */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF4136] transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFB700] transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-[#00D924] transition-colors cursor-pointer"></div>
        </div>

        {/* URL Bar */}
        <div className="flex-1 ml-3 flex items-center">
          <div className="bg-white rounded-md px-4 py-1.5 text-xs text-gray-500 max-w-[200px] w-full border border-gray-200 flex items-center gap-2">
            <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="truncate font-mono text-[10px]">
              {title.toLowerCase().replace(/\s+/g, '-')}.com
            </span>
          </div>
        </div>

        {/* Browser Actions */}
        <div className="flex items-center gap-2 ml-2">
          <div className="w-5 h-5 rounded flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
            <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="aspect-video overflow-hidden bg-gray-50 relative">
        {screenshot ? (
          <img
            src={screenshot}
            alt={`${title} desktop view`}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#8DB1B6] to-[#4A6C70] flex items-center justify-center">
            <div className="text-white/50 text-sm font-medium">No screenshot available</div>
          </div>
        )}
      </div>
    </div>
  );
}
