export default function HowWeWork() {
  const steps = [
    {
      number: '1',
      title: 'Discovery Call',
      description: 'We talk. You tell us what\'s frustrating you, what\'s not working, what you\'re trying to accomplish. No forms, no questionnaires—just a conversation.',
    },
    {
      number: '2',
      title: 'Honest Assessment',
      description: 'We tell you what we think you actually need. Sometimes it\'s a full rebuild. Sometimes it\'s a few tweaks. Sometimes it\'s "you\'re fine, don\'t spend money right now." We\'ll be straight with you.',
    },
    {
      number: '3',
      title: 'Build & Launch',
      description: 'If we move forward, we build it right. Clean code, fast performance, mobile-first. You\'ll understand what you\'re getting and why.',
    },
    {
      number: '4',
      title: 'Ongoing Support',
      description: 'Websites aren\'t "set it and forget it." We stick around to help you maintain, update, and improve—without nickel-and-diming you for every small change.',
    },
  ];

  return (
    <section className="py-16 lg:py-20 xl:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16 text-[#222326]">
          From Problem to Solution (Without the Runaround)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col">
                <div className="mb-4">
                  <span className="text-5xl lg:text-6xl font-bold text-coastal-200">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#222326]">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
