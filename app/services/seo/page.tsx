import Link from 'next/link';

export const metadata = {
  title: 'SEO Services | The First Coastal',
  description: 'Search engine optimization for Northeast Florida businesses. Get found by people looking for what you do.',
};

export default function SEO() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F0F4F5]">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#222326] mb-4">SEO (Search Engine Optimization)</h1>
          <p className="text-2xl text-coastal mb-6 italic">Get Found by People Looking for What You Do</p>
          <p className="text-xl text-gray-700 leading-relaxed">
            SEO isn&apos;t magic and anyone who tells you otherwise is selling something. It&apos;s a combination of technical fixes, content strategy, and patience. We do the work—you get the results.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-[#222326]">What We Handle</h2>

          <div className="space-y-12">
            {/* Technical SEO */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#222326]">Technical SEO</h3>
              <p className="text-gray-700 mb-4">The behind-the-scenes stuff that makes search engines happy (and your site faster).</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Site audits to find what&apos;s broken</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Speed optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Mobile usability fixes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Schema markup and structured data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Index management and sitemap optimization</span>
                </li>
              </ul>
            </div>

            {/* Local SEO */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#222326]">Local SEO</h3>
              <p className="text-gray-700 mb-4">For businesses serving Northeast Florida and beyond—get found in local searches and map results.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Google Business Profile optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Local citation building and cleanup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Review strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Local keyword targeting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Map pack optimization</span>
                </li>
              </ul>
            </div>

            {/* Content Strategy */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#222326]">Content Strategy</h3>
              <p className="text-gray-700 mb-4">The words on your site matter. We help you say the right things in the right places.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Keyword research based on what your customers actually search</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Content planning and creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">On-page optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Blog strategy (if it makes sense for your business)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border-2 border-coastal/20">
            <h2 className="text-3xl font-bold mb-6 text-[#222326]">How We Work (and What It Costs)</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              SEO is different for everyone. Some businesses need a one-time cleanup. Others benefit from ongoing work to stay competitive.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              <span className="font-semibold text-[#222326]">Most clients invest between $1,200-$6,000</span> depending on their goals and timeline. Monthly retainers, one-time projects, or something in between—we&apos;ll find what works.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Let&apos;s talk about where you are now and where you want to be. We&apos;ll tell you honestly what&apos;s possible and what it&apos;ll take to get there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-[#5D878C] text-white rounded-lg hover:bg-[#385154] transition-colors duration-200 font-medium shadow-md hover:shadow-lg text-center"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/work"
                className="inline-block px-8 py-4 bg-white text-[#222326] border-2 border-gray-300 rounded-lg hover:border-coastal transition-colors duration-200 font-medium text-center"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#222326] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Rank Higher?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s figure out what&apos;s holding you back and make a plan to fix it.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#5D878C] text-white rounded-lg hover:bg-[#385154] transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
