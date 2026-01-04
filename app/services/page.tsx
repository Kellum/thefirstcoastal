import Link from 'next/link';

export const metadata = {
  title: 'Services | The First Coastal',
  description: 'Website solutions, SEO, and strategy services for Northeast Florida businesses. No fluff, no upsells—just what you actually need.',
};

export default function Services() {
  const services = [
    {
      title: 'Website Solutions',
      description: 'Complete website design and development—from concept to launch. Whether you need a new site or improvements to what you have, we handle it all.',
      href: '/services/website-solutions',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Social Media Management',
      description: 'Content creation, posting, and community management. No generic templates—just content that actually represents your brand.',
      href: '/services/social-media',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
    {
      title: 'SEO',
      description: 'Get found by people searching for what you offer. Technical SEO, local optimization, and content strategy—without the snake oil.',
      href: '/services/seo',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Strategy & Consulting',
      description: 'Figure out what you actually need before spending money. Audits, roadmaps, vendor evaluation—clarity before commitment.',
      href: '/services/strategy-consulting',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
  ];

  const whatWeDontDo = [
    {
      title: 'Paid advertising (PPC)',
      description: 'We can refer you to good people',
    },
    {
      title: 'Graphic design beyond web/social',
      description: 'No print, no logos (unless part of a web or social media project)',
    },
    {
      title: 'Content writing at scale',
      description: 'We write for websites and social media, not content mills',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F0F4F5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#222326] mb-6">Our Services</h1>
          <p className="text-xl text-[#3B3C40] font-light mb-4">
            What We Actually Do (And Don&apos;t Do)
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We offer a focused set of services for local businesses. No fluff, no upsells into things you don&apos;t need. Here&apos;s what we do.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 border-2 border-gray-200 rounded-xl hover:border-coastal hover:shadow-xl transition-all duration-300"
              >
                <div className="text-coastal mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold mb-3 text-[#222326] group-hover:text-coastal transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-coastal font-medium group-hover:gap-2 transition-all duration-300">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border-2 border-coastal/20">
            <h2 className="text-3xl font-bold mb-6 text-[#222326]">About Pricing</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We don&apos;t list specific prices because honestly, it depends. Every business has different needs, different goals, and different budgets.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              <span className="font-semibold text-[#222326]">Most clients invest between $1,200-$6,000</span> depending on what they need. But your budget shouldn&apos;t disqualify you—we work with businesses at different stages.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Book a free 30-minute call and we&apos;ll tell you straight up what&apos;s possible for your situation. If we can&apos;t help, we&apos;ll point you toward someone who can.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#5D878C] text-white rounded-lg hover:bg-[#385154] transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* What We Don't Do Section */}
      <section className="py-20 bg-[#222326] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">What We Don&apos;t Do</h2>
          <p className="text-lg text-gray-300 mb-8">
            We believe in being clear about scope. Here&apos;s what&apos;s outside our wheelhouse:
          </p>
          <ul className="space-y-4 mb-8">
            {whatWeDontDo.map((item, index) => (
              <li key={index}>
                <span className="font-semibold">{item.title}</span> — {item.description}
              </li>
            ))}
          </ul>
          <p className="text-gray-300 italic">
            If you need something we don&apos;t do, we&apos;ll tell you and try to point you in the right direction.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#5D878C] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Talk?</h2>
          <p className="text-xl mb-8 text-white/90">
            No pressure, no hard sell. Just a conversation about what you&apos;re trying to accomplish and whether we can help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#222326] rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
