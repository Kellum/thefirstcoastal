export default function WhyFirstCoastal() {
  const benefits = [
    'Lower costs without lower quality',
    'Faster turnaround',
    'Someone who actually knows your project, not just your file number',
    'Real answers to real questions, not scripted replies',
  ];

  return (
    <section className="py-16 lg:py-20 xl:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-[#222326]">
          We&apos;re Not an Agency. That&apos;s the Point.
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
          <p>
            Big agencies have overhead. They have account managers, project managers, designers, developers—all billing hours. You pay for the bureaucracy.
          </p>
          <p>
            We&apos;re lean. You talk directly to the person building your site. Decisions get made fast. There&apos;s no game of telephone between you and the work.
          </p>
        </div>
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-bold mb-6 text-[#222326]">What that means for you:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-coastal mr-3 text-xl">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
