import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">The First Coastal</h3>
            <p className="text-gray-400 text-sm">
              Helping Northeast Florida businesses make better decisions about their online presence. Web design, development, SEO, strategy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#5D878C] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#5D878C] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-gray-400 hover:text-[#5D878C] transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-[#5D878C] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#5D878C] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400 text-sm">Northeast Florida</p>
            <p className="text-gray-400 text-sm">First Coast Region</p>
          </div>
        </div>

        <div className="border-t border-slate-gray mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} The First Coastal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
