'use client';

import { useState, useEffect } from 'react';

interface ServiceTabsProps {
  services: string[];
}

const serviceLabels: Record<string, string> = {
  'web-design': 'Web Design',
  'social-media': 'Social Media',
  'seo': 'SEO',
  'design': 'Design'
};

const serviceIcons: Record<string, JSX.Element> = {
  'web-design': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  'social-media': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
  ),
  'seo': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  'design': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  )
};

export default function ServiceTabs({ services }: ServiceTabsProps) {
  const [activeTab, setActiveTab] = useState(services[0]);

  // Don't show tabs if only one service
  if (services.length <= 1) {
    return null;
  }

  const scrollToSection = (service: string) => {
    const element = document.getElementById(`section-${service}`);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveTab(service);
    }
  };

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = services.map(service => {
        const element = document.getElementById(`section-${service}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            service,
            top: rect.top,
            bottom: rect.bottom
          };
        }
        return null;
      }).filter(Boolean);

      // Find which section is currently in view
      const current = sections.find(section =>
        section && section.top <= 150 && section.bottom > 150
      );

      if (current) {
        setActiveTab(current.service);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services]);

  return (
    <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 mb-12">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-center">
          <div className="inline-flex gap-2 bg-gray-100 rounded-lg p-1">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => scrollToSection(service)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === service
                    ? 'bg-white text-[#5D878C] shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {serviceIcons[service]}
                <span className="hidden sm:inline">{serviceLabels[service]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
