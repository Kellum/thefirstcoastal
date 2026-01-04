import Link from 'next/link';

export const metadata = {
  title: 'Strategy & Consulting | The First Coastal',
  description: 'Digital strategy and consulting for Northeast Florida businesses. Figure out what you need before you spend money.',
};

export default function StrategyConsulting() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F0F4F5]">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#222326] mb-4">Strategy & Consulting</h1>
          <p className="text-2xl text-coastal mb-6 italic">Figure Out What You Need Before You Spend Money</p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Sometimes the best thing we can do is help you think through the problem before building anything. We offer standalone strategy sessions for businesses who want clarity before commitment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-[#222326]">What We Help With</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Not every business needs a new website or a six-month SEO campaign. Sometimes you just need someone to look at what you have, tell you what&apos;s worth fixing, and help you prioritize. That&apos;s what we do.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-coastal mr-3 mt-1">→</span>
                <div>
                  <h3 className="font-semibold text-lg text-[#222326] mb-1">Website Audits</h3>
                  <p className="text-gray-700">We&apos;ll look at your site and tell you what&apos;s working, what&apos;s not, and what to fix first.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-coastal mr-3 mt-1">→</span>
                <div>
                  <h3 className="font-semibold text-lg text-[#222326] mb-1">Competitor Analysis</h3>
                  <p className="text-gray-700">See how you stack up and where there are opportunities to stand out.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-coastal mr-3 mt-1">→</span>
                <div>
                  <h3 className="font-semibold text-lg text-[#222326] mb-1">Digital Marketing Roadmaps</h3>
                  <p className="text-gray-700">A clear plan for where to focus your time and money online.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-coastal mr-3 mt-1">→</span>
                <div>
                  <h3 className="font-semibold text-lg text-[#222326] mb-1">Technology Stack Decisions</h3>
                  <p className="text-gray-700">Should you use Shopify or build custom? Squarespace or WordPress? We&apos;ll help you decide.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-coastal mr-3 mt-1">→</span>
                <div>
                  <h3 className="font-semibold text-lg text-[#222326] mb-1">Vendor Evaluation</h3>
                  <p className="text-gray-700">Got a proposal from another agency? We&apos;ll tell you if it&apos;s fair or if you&apos;re getting oversold.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-coastal mr-3 mt-1">→</span>
                <div>
                  <h3 className="font-semibold text-lg text-[#222326] mb-1">Prioritization</h3>
                  <p className="text-gray-700">What to do first, what can wait, and what&apos;s not worth doing at all.</p>
                </div>
              </div>
            </div>
          </div>

          {/* When This Makes Sense */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-[#222326]">When This Makes Sense</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-coastal mr-3 mt-1">✓</span>
                <span className="text-gray-700">You&apos;re not sure if you need a new website or just improvements to your current one</span>
              </li>
              <li className="flex items-start">
                <span className="text-coastal mr-3 mt-1">✓</span>
                <span className="text-gray-700">You&apos;ve got multiple quotes and want a second opinion</span>
              </li>
              <li className="flex items-start">
                <span className="text-coastal mr-3 mt-1">✓</span>
                <span className="text-gray-700">You know something&apos;s wrong with your digital presence but aren&apos;t sure what</span>
              </li>
              <li className="flex items-start">
                <span className="text-coastal mr-3 mt-1">✓</span>
                <span className="text-gray-700">You want a roadmap before committing to a big project</span>
              </li>
              <li className="flex items-start">
                <span className="text-coastal mr-3 mt-1">✓</span>
                <span className="text-gray-700">You&apos;ve been burned before and want to make sure you&apos;re making the right choice this time</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border-2 border-coastal/20">
            <h2 className="text-3xl font-bold mb-6 text-[#222326]">How This Works</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Strategy sessions are simple. We talk, we review what you&apos;ve got, and we give you an honest assessment. No sales pitch, no pressure to hire us for anything else.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              <span className="font-semibold text-[#222326]">Most clients invest between $1,200-$6,000</span> depending on the scope. An hour or two of strategic thinking often saves thousands in misdirected effort.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Book a free 30-minute call first. We&apos;ll figure out if a strategy session makes sense for you, or if you&apos;re better off jumping straight into building something.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Where to Start?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s talk through your situation. No commitment, just clarity.
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
