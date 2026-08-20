import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Samyuktha A L | Interactive Portfolio",
  description: "MCA Generative AI Student & Full-Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}