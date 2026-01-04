'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    href: '/services',
    label: 'Services',
    dropdown: [
      { href: '/services/website-solutions', label: 'Website Solutions' },
      { href: '/services/social-media', label: 'Social Media' },
      { href: '/services/seo', label: 'SEO' },
      { href: '/services/strategy-consulting', label: 'Strategy & Consulting' },
    ]
  },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMobileDropdownOpen(false); // Reset mobile dropdown when closing menu
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="The First Coastal Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-2xl font-semibold text-[#222326] tracking-tight font-[family-name:var(--font-montserrat)] group-hover:text-[#5D878C] transition-colors duration-200">
              The First Coastal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.dropdown ? (
                  <div className="relative">
                    <Link
                      href={link.href}
                      className="text-[#222326] hover:text-[#5D878C] transition-colors duration-200 flex items-center gap-1"
                    >
                      {link.label}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 pt-1 -mt-1 z-50">
                        <div className="w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2 text-[#222326] hover:bg-gray-50 hover:text-[#5D878C] transition-colors duration-200"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[#222326] hover:text-[#5D878C] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1.5 z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-charcoal block transition-all"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-charcoal block transition-all"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-charcoal block transition-all"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full bg-white z-40 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-full py-20 space-y-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center w-full px-8"
                >
                  {link.dropdown ? (
                    <div className="space-y-3">
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="text-3xl font-light text-[#222326] hover:text-[#5D878C] transition-colors duration-200 flex items-center justify-center gap-2 w-full"
                      >
                        {link.label}
                        <motion.svg
                          animate={{ rotate: mobileDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3 overflow-hidden"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={toggleMenu}
                                className="text-xl font-light text-gray-600 hover:text-[#5D878C] transition-colors duration-200 block"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-3xl font-light text-[#222326] hover:text-[#5D878C] transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
