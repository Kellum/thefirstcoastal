import Link from 'next/link';
import { getServices } from '@/lib/sanity';

export default async function Home() {
  const services = await getServices();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-white to-[#F0F4F5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-[#222326] mb-6">
            Home
          </h1>
          <p className="text-xl md:text-2xl text-[#3B3C40] mb-8 font-light">
            Northeast Florida&apos;s premier marketing agency
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            We craft exceptional digital experiences through web design, development, SEO, and social media marketing. Based in the First Coast, serving businesses across Northeast Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work"
              className="px-8 py-4 bg-[#5D878C] text-white rounded-lg hover:bg-[#385154] transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#BFB195] text-[#222326] rounded-lg hover:brightness-95 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
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
