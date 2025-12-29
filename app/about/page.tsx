export const metadata = {
  title: 'About - The First Coastal',
  description: 'Learn about The First Coastal, Northeast Florida\'s premier marketing agency.',
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F0F4F5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-[#222326] mb-6">About</h1>
          <p className="text-xl text-[#3B3C40] font-light">
            Marketing excellence rooted in Northeast Florida
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              The First Coastal was founded with a simple mission: to provide Northeast Florida businesses with world-class marketing services that drive real results. We&apos;re proud to call the First Coast home.
            </p>
            <p>
              From Jacksonville to St. Augustine, we understand the unique character and needs of businesses in our region. Our team combines local insight with cutting-edge digital expertise to help brands stand out in today&apos;s competitive landscape.
            </p>
            <p>
              Whether you&apos;re a startup looking to make your mark or an established business ready to scale, we bring the strategic thinking and creative execution needed to achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on excellence. Every project receives our full attention and expertise.',
              },
              {
                title: 'Local Focus',
                description: 'We understand Northeast Florida. Our regional expertise gives our clients a competitive edge.',
              },
              {
                title: 'Results Driven',
                description: 'Beautiful design means nothing without results. We measure success by your growth.',
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
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl mb-8 text-white/90">
            Ready to take your business to the next level?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#BFB195] text-[#222326] rounded-lg hover:brightness-95 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
