import Link from 'next/link';
import Image from 'next/image';
import { getServices } from '@/lib/sanity';

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
            Where Coastal Creativity Meets Digital Excellence
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 font-light drop-shadow-lg">
            Northeast Florida&apos;s Premier Marketing Agency
          </p>
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-lg">
            We craft exceptional digital experiences through web design, development, SEO, and social media marketing. Rooted in the First Coast, serving businesses across Northeast Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work"
              className="px-8 py-4 bg-white/95 text-[#222326] rounded-lg hover:bg-white transition-all duration-200 font-medium shadow-xl hover:shadow-2xl hover:scale-105"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#5D878C] text-white rounded-lg hover:bg-[#385154] transition-all duration-200 font-medium shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Services</h2>
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
                  <h3 className="text-2xl font-bold mb-4 text-[#222326]">Web Design</h3>
                  <p className="text-gray-600">Beautiful, user-focused designs that captivate and convert.</p>
                </div>
                <div className="p-8 border border-gray-200 rounded-lg hover:border-coastal hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-[#222326]">Development</h3>
                  <p className="text-gray-600">Fast, scalable websites built with modern technology.</p>
                </div>
                <div className="p-8 border border-gray-200 rounded-lg hover:border-coastal hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-[#222326]">SEO</h3>
                  <p className="text-gray-600">Rank higher and reach more customers organically.</p>
                </div>
                <div className="p-8 border border-gray-200 rounded-lg hover:border-coastal hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-[#222326]">Social Media</h3>
                  <p className="text-gray-600">Engaging content that builds your brand presence.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#222326] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to elevate your brand?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s create something exceptional together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#5D878C] text-white rounded-lg hover:bg-[#385154] transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
