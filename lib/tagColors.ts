// Tag color system - returns color classes based on tag content
export function getTagColor(tag: string): string {
  const tagLower = tag.toLowerCase();

  // Development & Frameworks
  if (tagLower.includes('next') || tagLower.includes('react') || tagLower.includes('vue')) {
    return 'bg-blue-500/10 text-blue-700 border-blue-300';
  }
  if (tagLower.includes('node') || tagLower.includes('javascript') || tagLower.includes('typescript')) {
    return 'bg-yellow-500/10 text-yellow-700 border-yellow-300';
  }

  // Design & UI/UX
  if (tagLower.includes('design') || tagLower.includes('ui') || tagLower.includes('ux') || tagLower.includes('branding')) {
    return 'bg-purple-500/10 text-purple-700 border-purple-300';
  }

  // SEO & Marketing
  if (tagLower.includes('seo') || tagLower.includes('marketing') || tagLower.includes('analytics')) {
    return 'bg-green-500/10 text-green-700 border-green-300';
  }

  // E-commerce
  if (tagLower.includes('ecommerce') || tagLower.includes('e-commerce') || tagLower.includes('shopify') || tagLower.includes('woocommerce')) {
    return 'bg-orange-500/10 text-orange-700 border-orange-300';
  }

  // Content & CMS
  if (tagLower.includes('cms') || tagLower.includes('sanity') || tagLower.includes('wordpress') || tagLower.includes('contentful')) {
    return 'bg-pink-500/10 text-pink-700 border-pink-300';
  }

  // Social Media
  if (tagLower.includes('social') || tagLower.includes('instagram') || tagLower.includes('facebook') || tagLower.includes('twitter')) {
    return 'bg-indigo-500/10 text-indigo-700 border-indigo-300';
  }

  // Default coastal theme color
  return 'bg-[#5D878C]/10 text-[#385154] border-[#5D878C]/30';
}
