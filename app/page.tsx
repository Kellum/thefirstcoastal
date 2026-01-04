import Link from 'next/link';
import Image from 'next/image';
import { getServices } from '@/lib/sanity';
import HowWeWork from '@/components/HowWeWork';
import WhoWeHelp from '@/components/WhoWeHelp';
import WhyFirstCoastal from '@/components/WhyFirstCoastal';
import LocalFocus from '@/components/LocalFocus';
import CommonProblems from '@/components/CommonProblems';

export default async function Home() {
  const services = await getServices();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-jax-pier.jpg"
            alt="Jacksonville Beach Pier at sunset - First Coast"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            We Help Businesses Make Better Choices Online
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 font-light drop-shadow-lg">
            Website solutions, SEO, strategy—the stuff that actually works
          </p>
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-lg">
            Most businesses waste time and money on digital solutions that don&apos;t solve their actual problems. We help you figure out what you really need, then build it. Based in Northeast Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work"
              className="px-8 py-4 bg-white/95 text-[#222326] rounded-lg hover:bg-white transition-all duration-200 font-medium shadow-xl hover:shadow-2xl hover:scale-105"
            >
              See What We&apos;ve Built
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#5D878C] text-white rounded-lg hover:bg-[#385154] transition-all duration-200 font-medium shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services && services.length > 0 ? (
              services.map((service: any) => (
                <div
                  key={service._id}
                  className="p-8 border border-gray-200 rounded-lg hover:border-coastal hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#222326]">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))
            ) : (
              // Fallback content if no services in CMS yet
              <>
                <div className="p-8 border border-gray-200 rounded-lg hover:border-coastal hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-[#222326]">Website Solutions</h3>
                  <p className="text-gray-600">Complete website design and development—from concept to launch. Whether you need a new site or improvements to what you have, we handle it all.</p>
                </div>
                <div className="p-8 border border-gray-200 rounded-lg hover:border-coastal hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-[#222326]">Social Media</h3>
                  <p className="text-gray-600">Content creation, posting, and community management. No generic templates—just content that actually represents your brand.</p>
                </div>
                <div className="p-8 border border-gray-200 rounded-lg hover:border-coastal hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-[#222326]">SEO</h3>
                  <p className="text-gray-600">Help people find you when they search for what you offer. Technical SEO, content strategy, the works—without the snake oil.</p>
                </div>
                <div className="p-8 border border-gray-200 rounded-lg hover:border-coastal hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-[#222326]">Strategy</h3>
                  <p className="text-gray-600">Figure out what you actually need before spending money building it. Sometimes the answer isn&apos;t &quot;build everything.&quot;</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <HowWeWork />

      {/* Who We Help Section */}
      <WhoWeHelp />

      {/* Why First Coastal Section */}
      <WhyFirstCoastal />

      {/* Local Focus Section */}
      <LocalFocus />

      {/* Common Problems Section */}
      <CommonProblems />

      {/* CTA Section */}
      <section className="py-24 bg-[#222326] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Have a Problem to Solve?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s figure out if we can help, and how.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#5D878C] text-white rounded-lg hover:bg-[#385154] transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
