'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What exactly do you do?',
      answer: 'We help businesses figure out what they actually need for their online presence, then build it. That includes web design, development, SEO, and strategy consulting. Sometimes we build new sites, sometimes we fix existing ones, sometimes we help you realize you need something completely different than what you thought.',
    },
    {
      question: 'Do you work with businesses outside Northeast Florida?',
      answer: 'Yes, but we\'re based in Northeast Florida (Jacksonville to St. Augustine area) and that\'s where most of our clients are. We understand the local market well, which helps when making strategic decisions.',
    },
    {
      question: 'How long does a website project take?',
      answer: 'Depends entirely on what you need. A straightforward business site might take 4-6 weeks. Something more complex could take months. We\'ll give you an honest timeline once we understand your specific situation—no padding, no games.',
    },
    {
      question: 'How much does it cost?',
      answer: 'Every project is different, so we can\'t give you a price until we know what you need. We\'ll talk through your situation, figure out what makes sense, and give you a detailed quote. No surprise fees, no upselling things you don\'t need.',
    },
    {
      question: 'Do you offer support after a site launches?',
      answer: 'Yes. Websites need updates, security patches, and occasional fixes. We offer maintenance packages, or we can train you to handle basic updates yourself if you prefer. Either way, we don\'t disappear after launch.',
    },
    {
      question: 'Can you fix my existing website\'s SEO?',
      answer: 'Probably. We\'ll audit your site, identify what\'s actually hurting you (versus what doesn\'t matter), and give you a clear plan for improvement. SEO isn\'t magic—it\'s technical fixes, good content, and patience.',
    },
    {
      question: 'What makes you different from other web development companies?',
      answer: 'We\'ll tell you the truth even when it means less work for us. We explain technical stuff without condescending. We don\'t sell you things you don\'t need. And we actually answer our phones.',
    },
    {
      question: 'How do I get started?',
      answer: 'Contact us through the form on our contact page. We\'ll set up a call to talk through what you\'re trying to solve, answer your questions, and figure out if we\'re a good fit. No pressure, no sales pitch.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F0F4F5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-[#222326] mb-6">FAQ</h1>
          <p className="text-xl text-[#3B3C40] font-light">
            Common questions, straight answers
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-coastal transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-[#222326] pr-8">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl text-[#5D878C] flex-shrink-0"
                  >
                    ↓
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#222326] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Still have questions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We&apos;re here to help. Reach out anytime.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#5D878C] text-white rounded-lg hover:bg-[#385154] transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
