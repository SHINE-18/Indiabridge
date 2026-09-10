import type { Metadata, Viewport } from 'next';
import { Inter, DM_Sans, Outfit, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { SITE_METADATA } from '@/lib/constants';
import './globals.css';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#101012',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.url),
  title: {
    default: 'Indiabridge Capital Partners | India Manufacturing Entry & Industrial Execution',
    template: `%s | ${SITE_METADATA.name}`,
  },
  description: SITE_METADATA.description,
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_METADATA.url,
    title: 'Indiabridge Capital Partners | India Manufacturing Entry & Industrial Execution',
    description: SITE_METADATA.description,
    siteName: SITE_METADATA.name,
    images: [
      {
        url: '/images/r6W5e3iUkSFH5GrkSKHMeTPFII.webp',
        width: 1200,
        height: 630,
        alt: `${SITE_METADATA.name} — Industrial Execution Platform`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indiabridge Capital Partners | India Manufacturing Entry & Industrial Execution',
    description: SITE_METADATA.description,
    images: ['/images/r6W5e3iUkSFH5GrkSKHMeTPFII.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { ScrollRevealManager } from '@/components/layout/ScrollRevealManager';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScrollProvider>
          <ScrollRevealManager />
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
