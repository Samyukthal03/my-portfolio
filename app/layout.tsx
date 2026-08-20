import type { Metadata } from 'next';
import { DM_Sans, Space_Mono } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-space-mono' });

export const metadata: Metadata = {
  title: 'Samyuktha A L — AI, ML & Creative Technology',
  description: 'Personal portfolio of Samyuktha A L, an MCA Generative AI student building AI-powered, full-stack, and human-centered digital experiences.',
  openGraph: {
    title: 'Samyuktha A L — AI, ML & Creative Technology',
    description: 'AI-powered, full-stack, and human-centered digital experiences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samyuktha A L — AI, ML & Creative Technology',
    description: 'AI-powered, full-stack, and human-centered digital experiences.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${spaceMono.variable} bg-[#070707] text-[#F5F1EA] antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
