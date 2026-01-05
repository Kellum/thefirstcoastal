import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thefirstcoastal.com'),
  title: {
    default: 'The First Coastal - Web Design & Development in Northeast Florida',
    template: '%s | The First Coastal',
  },
  description: 'Northeast Florida web design, development, SEO & strategy. Helping Jacksonville, St. Augustine & First Coast businesses build smarter digital solutions.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thefirstcoastal.com',
    siteName: 'The First Coastal',
    title: 'The First Coastal - Web Design & Development in Northeast Florida',
    description: 'Northeast Florida web design, development, SEO & strategy. Helping Jacksonville, St. Augustine & First Coast businesses build smarter digital solutions.',
    images: 'https://thefirstcoastal.com/og-image.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The First Coastal - Web Design & Development in Northeast Florida',
    description: 'Northeast Florida web design, development, SEO & strategy. Helping Jacksonville, St. Augustine & First Coast businesses build smarter digital solutions.',
    images: ['https://thefirstcoastal.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Navigation />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
