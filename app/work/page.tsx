import { getPortfolioItems } from '@/lib/sanity';
import PortfolioGrid from '@/components/PortfolioGrid';
import Link from 'next/link';

export default async function Work() {
  const portfolioItems = await getPortfolioItems();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F0F4F5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-[#222326] mb-6">Work</h1>
          <p className="text-xl text-[#3B3C40] font-light">
            Showcasing our recent projects and client success stories
          </p>
        </div>
      </section>

      {/* Portfolio Grid with Filtering */}
      {portfolioItems && portfolioItems.length > 0 ? (
        <PortfolioGrid items={portfolioItems} />
      ) : (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-500 text-lg mb-4">No portfolio items yet.</p>
            <p className="text-gray-400 text-sm">
              Add portfolio items in the{' '}
              <Link href="/studio" className="text-[#5D878C] hover:underline">
                CMS Studio
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-[#222326] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to see your project here?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s create something amazing together
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
