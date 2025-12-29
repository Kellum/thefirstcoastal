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
  title: 'The First Coastal - Northeast Florida Marketing Agency',
  description: 'Premier marketing agency serving Northeast Florida. Specializing in web design, development, SEO, and social media services.',
  keywords: 'marketing agency, web design, web development, SEO, social media, Northeast Florida, First Coast',
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
