import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css'; // Global styles
import { GoogleAnalytics } from '@next/third-parties/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "GraceOccasions",
  description: "Transform homes, weddings, temples, and events with handcrafted décor, bespoke gifting, Sholapith art, and Zardosi creations by Grace Occasions.",
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png", 
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-[#FAF6F0] text-[#2C2623] min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
