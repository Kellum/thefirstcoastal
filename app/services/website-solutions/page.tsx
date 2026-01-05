import Link from 'next/link';

export const metadata = {
  title: 'Website Solutions | The First Coastal',
  description: 'Complete website design and development for Northeast Florida businesses. From concept to launch, we handle everything.',
};

export default function WebsiteSolutions() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F0F4F5]">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#222326] mb-4">Website Solutions</h1>
          <p className="text-2xl text-coastal mb-6 italic">Websites Built Right, From Concept to Launch</p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Whether you need a brand-new website or want to improve what you already have, we handle the entire process—design, development, and deployment. No handoffs between agencies, no miscommunication. Just one team that sees it through.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* For New Websites */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#222326]">For New Websites</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Custom design that reflects your business (not a template with your logo)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Modern development with React and Next.js—fast, secure, maintainable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Mobile-first approach (most people browse on phones)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Clear navigation and visual hierarchy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Hosting setup and deployment</span>
                </li>
              </ul>
            </div>

            {/* For Existing Websites */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#222326]">For Existing Websites</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Redesigns that improve usability and performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Technical updates and security improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Adding new features or functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Speed optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <span className="text-gray-700">Fixing accessibility issues</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What You Get */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#222326]">What You Get</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-coastal mr-3 mt-1">✓</span>
                <span className="text-gray-700">Unlimited design revisions until you&apos;re satisfied</span>
              </div>
              <div className="flex items-start">
                <span className="text-coastal mr-3 mt-1">✓</span>
                <span className="text-gray-700">Clean, documented code you own</span>
              </div>
              <div className="flex items-start">
                <span className="text-coastal mr-3 mt-1">✓</span>
                <span className="text-gray-700">Mobile responsive on all devices</span>
              </div>
              <div className="flex items-start">
                <span className="text-coastal mr-3 mt-1">✓</span>
                <span className="text-gray-700">Performance optimized (we obsess over load times)</span>
              </div>
              <div className="flex items-start">
                <span className="text-coastal mr-3 mt-1">✓</span>
                <span className="text-gray-700">SEO-friendly architecture from the start</span>
              </div>
              <div className="flex items-start">
                <span className="text-coastal mr-3 mt-1">✓</span>
                <span className="text-gray-700">Accessibility built in, not bolted on</span>
              </div>
            </div>
          </div>

          {/* How We Build */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#222326]">How We Build</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-coastal mr-3 mt-1">→</span>
                <span className="text-gray-700">Modern frameworks (React, Next.js) that actually perform</span>
              </li>
              <li className="flex items-start">
                <span className="text-coastal mr-3 mt-1">→</span>
                <span className="text-gray-700">Custom development, not WordPress themes held together with plugins</span>
              </li>
              <li className="flex items-start">
                <span className="text-coastal mr-3 mt-1">→</span>
                <span className="text-gray-700">Progressive Web Apps (PWAs) for app-like experiences</span>
              </li>
              <li className="flex items-start">
                <span className="text-coastal mr-3 mt-1">→</span>
                <span className="text-gray-700">E-commerce integration when needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-coastal mr-3 mt-1">→</span>
                <span className="text-gray-700">API connections and custom functionality</span>
              </li>
              <li className="flex items-start">
                <span className="text-coastal mr-3 mt-1">→</span>
                <span className="text-gray-700">Database design and management</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border-2 border-coastal/20">
            <h2 className="text-3xl font-bold mb-6 text-[#222326]">Let&apos;s Talk About Your Project</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We don&apos;t list specific prices because honestly, it depends. A simple brochure site is different from e-commerce. A redesign is different from starting from scratch.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Most clients invest between $1,200-$6,000 depending on what they need. <span className="font-semibold text-[#222326]">But your budget shouldn&apos;t disqualify you</span>—we work with businesses at different stages.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Book a free 30-minute call and we&apos;ll tell you straight up what&apos;s possible for your situation. If we can&apos;t help, we&apos;ll point you toward someone who can.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            No pressure, no hard sell. Just an honest conversation about what you need.
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
