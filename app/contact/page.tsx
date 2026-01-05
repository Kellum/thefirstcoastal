'use client';

import { useState, FormEvent } from 'react';

type ServiceType = 'general' | 'website' | 'social-media' | 'seo' | 'consulting';

interface FormData {
  // Basic fields
  name: string;
  email: string;
  company: string;
  message: string;
  services: ServiceType[];

  // Website fields
  websiteUrl: string;
  hasExistingWebsite: string;
  websiteTimeline: string;
  websiteBudget: string;

  // Social Media fields
  socialPlatforms: string[];
  hasExistingAccounts: string;
  socialGoals: string;

  // SEO fields
  seoWebsiteUrl: string;
  hasDoneSeo: string;
  targetArea: string;
  competitors: string;

  // Consulting fields
  businessType: string;
  challenges: string;
  consultationFormat: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    services: [],
    websiteUrl: '',
    hasExistingWebsite: '',
    websiteTimeline: '',
    websiteBudget: '',
    socialPlatforms: [],
    hasExistingAccounts: '',
    socialGoals: '',
    seoWebsiteUrl: '',
    hasDoneSeo: '',
    targetArea: '',
    competitors: '',
    businessType: '',
    challenges: '',
    consultationFormat: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [animatingOut, setAnimatingOut] = useState<ServiceType[]>([]);
  const [useSameWebsiteUrl, setUseSameWebsiteUrl] = useState(false);

  const handleServiceToggle = (service: ServiceType) => {
    if (formData.services.includes(service)) {
      // Start fade-out animation
      setAnimatingOut(prev => [...prev, service]);
      setTimeout(() => {
        setFormData(prev => ({
          ...prev,
          services: prev.services.filter(s => s !== service)
        }));
        setAnimatingOut(prev => prev.filter(s => s !== service));
      }, 300); // Match fade-out duration
    } else {
      // Add immediately with fade-in
      setFormData(prev => ({
        ...prev,
        services: [...prev.services, service]
      }));
    }
  };

  const handlePlatformToggle = (platform: string) => {
    setFormData(prev => ({
      ...prev,
      socialPlatforms: prev.socialPlatforms.includes(platform)
        ? prev.socialPlatforms.filter(p => p !== platform)
        : [...prev.socialPlatforms, platform]
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          services: [],
          websiteUrl: '',
          hasExistingWebsite: '',
          websiteTimeline: '',
          websiteBudget: '',
          socialPlatforms: [],
          hasExistingAccounts: '',
          socialGoals: '',
          seoWebsiteUrl: '',
          hasDoneSeo: '',
          targetArea: '',
          competitors: '',
          businessType: '',
          challenges: '',
          consultationFormat: '',
        });
        setUseSameWebsiteUrl(false);

        // Smooth scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus('error');
        console.error('Error:', data.error);

        // Reset error message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F0F4F5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-[#222326] mb-6">Contact</h1>
          <p className="text-xl text-[#3B3C40] font-light">
            Let&apos;s start a conversation
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Form - First on mobile, second on desktop */}
            <div className="order-1 lg:order-2">
              {submitStatus === 'success' ? (
                <div className="text-center py-12 animate-fadeIn">
                  <div className="mb-6">
                    <svg className="mx-auto h-16 w-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="px-6 py-3 bg-[#5D878C] text-white rounded-lg hover:bg-[#385154] transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition"
                    placeholder="Your company name"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What can we help you with? *
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'general' as ServiceType, label: 'General Inquiry' },
                      { value: 'website' as ServiceType, label: 'Website Development' },
                      { value: 'social-media' as ServiceType, label: 'Social Media' },
                      { value: 'seo' as ServiceType, label: 'SEO' },
                      { value: 'consulting' as ServiceType, label: 'Strategy Consulting' },
                    ].map((service) => (
                      <label key={service.value} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service.value)}
                          onChange={() => handleServiceToggle(service.value)}
                          className="w-5 h-5 text-coastal border-gray-300 rounded focus:ring-coastal"
                        />
                        <span className="text-gray-700">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Website Development Fields */}
                {(formData.services.includes('website') || animatingOut.includes('website')) && (
                  <div className={`pl-4 border-l-4 border-[#5D878C] space-y-4 ${animatingOut.includes('website') ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
                    <h3 className="font-semibold text-gray-700">Website Development Details</h3>

                    <div>
                      <label htmlFor="hasExistingWebsite" className="block text-sm font-medium text-gray-700 mb-2">
                        Do you have an existing website? *
                      </label>
                      <select
                        id="hasExistingWebsite"
                        name="hasExistingWebsite"
                        required
                        value={formData.hasExistingWebsite}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition"
                      >
                        <option value="">Select one</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    {formData.hasExistingWebsite === 'yes' && (
                      <div className="animate-fadeIn">
                        <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-2">
                          Current Website URL
                        </label>
                        <input
                          type="text"
                          id="websiteUrl"
                          name="websiteUrl"
                          value={formData.websiteUrl}
                          onChange={handleChange}
                          pattern="^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition"
                          placeholder="yourwebsite.com or https://yourwebsite.com"
                        />
                      </div>
                    )}

                    <div>
                      <label htmlFor="websiteTimeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Timeline *
                      </label>
                      <select
                        id="websiteTimeline"
                        name="websiteTimeline"
                        required
                        value={formData.websiteTimeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (Within 2 weeks)</option>
                        <option value="1-month">1 Month</option>
                        <option value="2-3-months">2-3 Months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="websiteBudget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range *
                      </label>
                      <select
                        id="websiteBudget"
                        name="websiteBudget"
                        required
                        value={formData.websiteBudget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition"
                      >
                        <option value="">Select budget</option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-3k">$1,000 - $3,000</option>
                        <option value="3k-5k">$3,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-20k">$10,000 - $20,000</option>
                        <option value="20k-plus">$20,000+</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Social Media Fields */}
                {(formData.services.includes('social-media') || animatingOut.includes('social-media')) && (
                  <div className={`pl-4 border-l-4 border-[#5D878C] space-y-4 ${animatingOut.includes('social-media') ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
                    <h3 className="font-semibold text-gray-700">Social Media Details</h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Which platforms? *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'Twitter/X', 'Pinterest'].map((platform) => (
                          <label key={platform} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.socialPlatforms.includes(platform)}
                              onChange={() => handlePlatformToggle(platform)}
                              className="w-4 h-4 text-coastal border-gray-300 rounded focus:ring-coastal"
                            />
                            <span className="text-sm text-gray-700">{platform}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="hasExistingAccounts" className="block text-sm font-medium text-gray-700 mb-2">
                        Do you have existing accounts? *
                      </label>
                      <select
                        id="hasExistingAccounts"
                        name="hasExistingAccounts"
                        required
                        value={formData.hasExistingAccounts}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition"
                      >
                        <option value="">Select one</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="some">Some platforms</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="socialGoals" className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Goals *
                      </label>
                      <select
                        id="socialGoals"
                        name="socialGoals"
                        required
                        value={formData.socialGoals}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition"
                      >
                        <option value="">Select goal</option>
                        <option value="brand-awareness">Brand Awareness</option>
                        <option value="lead-generation">Lead Generation</option>
                        <option value="engagement">Community Engagement</option>
                        <option value="sales">Drive Sales</option>
                        <option value="multiple">Multiple Goals</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* SEO Fields */}
                {(formData.services.includes('seo') || animatingOut.includes('seo')) && (
                  <div className={`pl-4 border-l-4 border-[#5D878C] space-y-4 ${animatingOut.includes('seo') ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
                    <h3 className="font-semibold text-gray-700">SEO Details</h3>

                    <div>
                      <label htmlFor="seoWebsiteUrl" className="block text-sm font-medium text-gray-700 mb-2">
                        Website URL *
                      </label>

                      {formData.services.includes('website') && formData.websiteUrl && (
                        <label className="flex items-center space-x-2 mb-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={useSameWebsiteUrl}
                            onChange={(e) => {
                              setUseSameWebsiteUrl(e.target.checked);
                              if (e.target.checked) {
                                setFormData(prev => ({ ...prev, seoWebsiteUrl: prev.websiteUrl }));
                              } else {
                                setFormData(prev => ({ ...prev, seoWebsiteUrl: '' }));
                              }
                            }}
                            className="w-4 h-4 text-coastal border-gray-300 rounded focus:ring-coastal"
                          />
                          <span className="text-sm text-gray-600">Same as website URL above</span>
                        </label>
                      )}

                      {!useSameWebsiteUrl && (
                        <input
                          type="text"
                          id="seoWebsiteUrl"
                          name="seoWebsiteUrl"
                          required
                          value={formData.seoWebsiteUrl}
                          onChange={handleChange}
                          pattern="^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition"
                          placeholder="yourwebsite.com or https://yourwebsite.com"
                        />
                      )}

                      {useSameWebsiteUrl && (
                        <div className="px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-600">
                          {formData.websiteUrl}
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="hasDoneSeo" className="block text-sm font-medium text-gray-700 mb-2">
                        Have you done SEO before? *
                      </label>
                      <select
                        id="hasDoneSeo"
                        name="hasDoneSeo"
                        required
                        value={formData.hasDoneSeo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition"
                      >
                        <option value="">Select one</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="unsure">Unsure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="targetArea" className="block text-sm font-medium text-gray-700 mb-2">
                        Target Geographic Area *
                      </label>
                      <input
                        type="text"
                        id="targetArea"
                        name="targetArea"
                        required
                        value={formData.targetArea}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition"
                        placeholder="e.g., Jacksonville, FL or National"
                      />
                    </div>

                    <div>
                      <label htmlFor="competitors" className="block text-sm font-medium text-gray-700 mb-2">
                        Main Competitors (optional)
                      </label>
                      <input
                        type="text"
                        id="competitors"
                        name="competitors"
                        value={formData.competitors}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition"
                        placeholder="competitor1.com, competitor2.com"
                      />
                    </div>
                  </div>
                )}

                {/* Strategy Consulting Fields */}
                {(formData.services.includes('consulting') || animatingOut.includes('consulting')) && (
                  <div className={`pl-4 border-l-4 border-[#5D878C] space-y-4 ${animatingOut.includes('consulting') ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
                    <h3 className="font-semibold text-gray-700">Strategy Consulting Details</h3>

                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Type/Industry *
                      </label>
                      <input
                        type="text"
                        id="businessType"
                        name="businessType"
                        required
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition"
                        placeholder="e.g., Restaurant, Retail, Healthcare"
                      />
                    </div>

                    <div>
                      <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-2">
                        Specific Challenges *
                      </label>
                      <textarea
                        id="challenges"
                        name="challenges"
                        required
                        value={formData.challenges}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition resize-none"
                        placeholder="What challenges are you facing?"
                      />
                    </div>

                    <div>
                      <label htmlFor="consultationFormat" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Format *
                      </label>
                      <select
                        id="consultationFormat"
                        name="consultationFormat"
                        required
                        value={formData.consultationFormat}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition"
                      >
                        <option value="">Select format</option>
                        <option value="in-person">In-Person</option>
                        <option value="video">Video Call</option>
                        <option value="phone">Phone Call</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details {formData.services.length === 0 && '*'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required={formData.services.length === 0}
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coastal focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us more about your project..."
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    Something went wrong. Please try again or email us directly at info@thefirstcoastal.com
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#5D878C] text-white rounded-lg hover:bg-[#385154] transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              )}
            </div>

            {/* Contact Info - Second on mobile, first on desktop */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ready to elevate your digital presence? Whether you have a specific project in mind or just want to explore possibilities, we&apos;d love to hear from you.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a href="mailto:info@thefirstcoastal.com" className="text-[#5D878C] hover:text-[#385154] transition-colors">
                    info@thefirstcoastal.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Areas Served</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-600">
                    <p>Fernandina</p>
                    <p>Amelia Island</p>
                    <p>Yulee</p>
                    <p>Oceanway</p>
                    <p>Jacksonville</p>
                    <p>The Jacksonville Beaches</p>
                    <p>Ponte Vedra</p>
                    <p>Nocatee</p>
                    <p>St. Augustine</p>
                    <p>Orange Park</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Response Time</h3>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section - Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Proudly Serving Northeast Florida</h2>
          <p className="text-gray-600 mb-4">
            From Fernandina to St. Augustine and everywhere in between. We understand the local market.
          </p>
          <p className="text-gray-500 text-sm">
            Fernandina • Amelia Island • Yulee • Oceanway • Jacksonville • The Jacksonville Beaches • Ponte Vedra • Nocatee • St. Augustine • Orange Park
          </p>
        </div>
      </section>
    </div>
  );
}
