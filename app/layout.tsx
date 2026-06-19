import type {Metadata, Viewport} from 'next';
import './globals.css'; // Global styles

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Her HomeNest Market | Trusted Colombo Homemakers',
    template: '%s | Her HomeNest Market',
  },
  description: 'Discover verified women-led home businesses in Colombo for food, baking, tailoring, handmade gifts, beauty and classes. Contact homemakers directly on WhatsApp.',
  applicationName: 'Her HomeNest Market',
  keywords: [
    'Colombo homemakers',
    'Sri Lanka handmade marketplace',
    'home-cooked food Colombo',
    'women entrepreneurs Sri Lanka',
    'handmade gifts Colombo',
    'tailoring Colombo',
  ],
  authors: [{name: 'Her HomeNest Market'}],
  creator: 'Her HomeNest Market',
  publisher: 'Her HomeNest Market',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_LK',
    url: '/',
    siteName: 'Her HomeNest Market',
    title: 'Her HomeNest Market | Trusted Colombo Homemakers',
    description: 'Find verified Colombo women offering food, handmade products and local services. Browse their work and contact them directly.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Handmade bracelet gift box from a Colombo woman entrepreneur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Her HomeNest Market | Trusted Colombo Homemakers',
    description: 'Discover verified women-led home businesses and handmade products across Colombo.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  category: 'marketplace',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3B1F32',
  colorScheme: 'light',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Her HomeNest Market',
        url: siteUrl,
        logo: `${siteUrl}/icon.svg`,
        description: 'A marketplace connecting customers with verified women-led home businesses in Colombo.',
        areaServed: {
          '@type': 'City',
          name: 'Colombo',
          containedInPlace: {
            '@type': 'Country',
            name: 'Sri Lanka',
          },
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Her HomeNest Market',
        publisher: {'@id': `${siteUrl}/#organization`},
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/explore?search={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-paper font-sans text-charcoal min-h-screen selection:bg-turmeric/30 selection:text-ink">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData).replace(/</g, '\\u003c')}}
        />
      </body>
    </html>
  );
}
