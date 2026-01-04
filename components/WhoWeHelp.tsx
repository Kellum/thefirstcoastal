export default function WhoWeHelp() {
  const clientTypes = [
    'Service businesses tired of their outdated website',
    'Trades and contractors who need to actually show up in local search',
    'Small teams who want something professional without the agency markup',
    'Anyone who\'s been burned by overpromising web "gurus" before',
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#222326]">
          Local Businesses Doing Real Work
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          We work best with businesses that have something to offer but struggle to communicate it online. Service companies, trades, local shops—people who are great at what they do but don&apos;t have time to figure out websites and SEO.
        </p>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-[#222326]">Common clients:</h3>
          <ul className="space-y-3">
            {clientTypes.map((client, index) => (
              <li key={index} className="flex items-start">
                <span className="text-coastal mr-3 mt-1">→</span>
                <span className="text-gray-700">{client}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-gray-600 italic text-center">
          Not a fit for everyone. If you want a million flashy animations and don&apos;t care about performance, we&apos;re probably not your people.
        </p>
      </div>
    </section>
  );
}
