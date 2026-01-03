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
  title: 'The First Coastal - Web Design & Development in Northeast Florida',
  description: 'We help Northeast Florida businesses make better decisions about their online presence. Web design, development, SEO, and strategy consulting.',
  keywords: 'web design, web development, SEO, digital strategy, Northeast Florida, First Coast, Jacksonville, St. Augustine',
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
