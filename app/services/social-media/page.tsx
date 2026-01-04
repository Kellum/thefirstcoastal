import Link from 'next/link';

export const metadata = {
  title: 'Social Media Management | The First Coastal',
  description: 'Social media management for Northeast Florida businesses. Content that actually represents your brand.',
};

export default function SocialMedia() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F0F4F5]">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#222326] mb-4">Social Media Management</h1>
          <p className="text-2xl text-coastal mb-6 italic">Content That Actually Represents Your Brand</p>
          <p className="text-xl text-gray-700 leading-relaxed">
            We handle your social media so you can focus on running your business. No cookie-cutter templates, no generic stock photos—just content that sounds like you and looks professional.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#222326]">What We Handle</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <div>
                    <h3 className="font-semibold text-lg text-[#222326] mb-1">Content Creation</h3>
                    <p className="text-gray-700">Posts, graphics, and captions that fit your brand voice. No generic motivational quotes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <div>
                    <h3 className="font-semibold text-lg text-[#222326] mb-1">Posting & Scheduling</h3>
                    <p className="text-gray-700">Consistent presence without you having to remember to post. We handle the timing and frequency.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <div>
                    <h3 className="font-semibold text-lg text-[#222326] mb-1">Community Management</h3>
                    <p className="text-gray-700">Responding to comments and messages in a timely, professional manner.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <div>
                    <h3 className="font-semibold text-lg text-[#222326] mb-1">Platform Strategy</h3>
                    <p className="text-gray-700">Figure out which platforms actually matter for your business. Not everything needs to be everywhere.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <div>
                    <h3 className="font-semibold text-lg text-[#222326] mb-1">Performance Tracking</h3>
                    <p className="text-gray-700">Monthly reports on what&apos;s working and what&apos;s not. Plain English, no vanity metrics.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-coastal mr-3 mt-1">→</span>
                  <div>
                    <h3 className="font-semibold text-lg text-[#222326] mb-1">Brand Photography</h3>
                    <p className="text-gray-700">Custom photos that actually look like your business, not stock images everyone else is using.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Platforms We Work With */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#222326]">Platforms We Work With</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg text-[#222326] mb-2">Instagram</h3>
                <p className="text-gray-700">Posts, stories, and reels that actually get engagement.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg text-[#222326] mb-2">Facebook</h3>
                <p className="text-gray-700">Business page management and community building.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg text-[#222326] mb-2">LinkedIn</h3>
                <p className="text-gray-700">Professional content for B2B businesses and service providers.</p>
              </div>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-4 text-[#222326]">What Makes Us Different</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-coastal mr-3 mt-1">✓</span>
                <span className="text-gray-700">We learn your brand voice and use it. Posts sound like they came from you, not a social media manager.</span>
              </li>
              <li className="flex items-start">
                <span className="text-coastal mr-3 mt-1">✓</span>
                <span className="text-gray-700">We focus on your local market. Northeast Florida businesses need local relevance, not generic content.</span>
              </li>
              <li className="flex items-start">
                <span className="text-coastal mr-3 mt-1">✓</span>
                <span className="text-gray-700">No fluff metrics. We track what actually matters for your business, not just likes and follows.</span>
              </li>
              <li className="flex items-start">
                <span className="text-coastal mr-3 mt-1">✓</span>
                <span className="text-gray-700">You approve everything before it goes live. Final say is always yours.</span>
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
              Social media management works best as an ongoing partnership. We learn your business, your voice, and what resonates with your audience over time.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              <span className="font-semibold text-[#222326]">Most clients invest between $1,200-$6,000</span> depending on how many platforms, how often you post, and whether you need content creation or just management.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Let&apos;s talk about where you are now and what you&apos;re trying to accomplish. We&apos;ll figure out a plan that makes sense for your business and budget.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tired of Posting the Same Stock Photos?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s build a social presence that actually represents your business.
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
