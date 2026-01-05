export const metadata = {
  title: 'About - The First Coastal',
  description: 'We help businesses in Northeast Florida make better decisions about their online presence and build solutions that actually work.',
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F0F4F5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-[#222326] mb-6">About</h1>
          <p className="text-xl text-[#3B3C40] font-light">
            Problem solvers based in Northeast Florida
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">What We&apos;re About</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Most businesses face the same problem: they know they need a better online presence, but they don&apos;t know what that actually means or how to get there. So they end up spending money on things that sound good but don&apos;t solve their actual problems.
            </p>
            <p>
              We started The First Coastal to fix that. We help businesses in Northeast Florida—from Fernandina and Jacksonville to St. Augustine—figure out what they really need, avoid the expensive mistakes, and build digital solutions that actually work for their specific situation.
            </p>
            <p>
              Sometimes that means building a new website. Sometimes it means fixing the one you have. Sometimes it means realizing you don&apos;t need what you thought you needed. We&apos;ll tell you the truth, even if it means less work for us.
            </p>
            <p>
              We combine technical expertise with an understanding of how businesses actually operate. No jargon, no overselling, no &quot;solutions&quot; that create new problems. Just straightforward help making better choices about your online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Solve the Right Problem',
                description: 'We spend time understanding what you actually need before jumping to solutions. Sometimes the obvious answer is the wrong one.',
              },
              {
                title: 'No BS',
                description: 'Technical explanations without talking down to you. Honest assessments even when it costs us work. Clear pricing, no surprises.',
              },
              {
                title: 'Build Things That Work',
                description: 'Code that performs well, designs that make sense, SEO that actually helps people find you. We measure success by whether it solves your problem.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-black">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#5D878C] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Think We Can Help?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let&apos;s have a conversation about what you&apos;re trying to accomplish.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#BFB195] text-[#222326] rounded-lg hover:brightness-95 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
