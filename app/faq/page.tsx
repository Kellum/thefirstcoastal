'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does The First Coastal offer?',
      answer: 'We specialize in web design, web development, SEO optimization, and social media marketing. Our team provides end-to-end digital marketing solutions tailored to your business needs.',
    },
    {
      question: 'Do you work with businesses outside Northeast Florida?',
      answer: 'While we\'re based in Northeast Florida and have deep expertise in the First Coast market, we work with clients across the country. Our local focus gives us unique insights, but our reach is nationwide.',
    },
    {
      question: 'How long does a typical web design project take?',
      answer: 'Project timelines vary based on complexity and scope. A standard website typically takes 4-8 weeks from kickoff to launch. We\'ll provide a detailed timeline during our initial consultation.',
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Every project is unique, so we provide custom quotes based on your specific needs and goals. Contact us for a free consultation and detailed proposal.',
    },
    {
      question: 'Do you offer ongoing support after launch?',
      answer: 'Absolutely! We offer various maintenance and support packages to keep your website running smoothly, secure, and up-to-date. We\'re here for the long haul.',
    },
    {
      question: 'Can you help improve my existing website\'s SEO?',
      answer: 'Yes! We provide comprehensive SEO audits and optimization services for existing websites. We\'ll identify opportunities and implement strategies to improve your search rankings.',
    },
    {
      question: 'What makes The First Coastal different?',
      answer: 'We combine technical excellence with local market knowledge. Our team doesn\'t just build websites—we create digital experiences that resonate with your audience and drive measurable results.',
    },
    {
      question: 'How do I get started?',
      answer: 'Simply reach out through our contact page or give us a call. We\'ll schedule a free consultation to discuss your goals and how we can help achieve them.',
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
            Common questions about our services
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
