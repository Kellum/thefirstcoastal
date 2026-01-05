export default function CommonProblems() {
  const problems = [
    {
      problem: 'My website looks like it\'s from 2012.',
      solution: 'We hear this a lot. Your business has grown, but your website hasn\'t. We bring it up to speed—modern design, mobile-friendly, fast.',
    },
    {
      problem: 'I\'m invisible on Google.',
      solution: 'You exist, but no one can find you. We fix the technical SEO issues, build content that actually ranks, and get you showing up where your customers are looking.',
    },
    {
      problem: 'I paid someone a lot of money and got garbage.',
      solution: 'Unfortunately common. We can audit what you have, figure out what\'s salvageable, and either fix it or start fresh—whichever makes more sense.',
    },
    {
      problem: 'I don\'t even know what I need.',
      solution: 'That\'s fine. Most people don\'t. We\'ll figure it out together.',
    },
  ];

  return (
    <section className="py-16 lg:py-20 xl:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16 text-[#222326]">
          Common Problems We Solve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 rounded-lg hover:border-coastal hover:shadow-lg transition-all duration-300"
            >
              <p className="text-xl font-semibold mb-4 text-[#222326] italic">
                &quot;{item.problem}&quot;
              </p>
              <p className="text-gray-700 leading-relaxed">
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
