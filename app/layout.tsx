import type {Metadata} from 'next';
import {Newsreader, Public_Sans, IBM_Plex_Mono} from 'next/font/google';
import './globals.css'; // Global styles

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  weight: ['300', '400', '500', '600', '700'],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Her HomeNest Market — SheMakes Colombo',
  description: 'A local marketplace connecting Colombo-based homemakers with customers searching for trusted, quality, women-led products & services.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${publicSans.variable} ${ibmPlexMono.variable}`}>
      <body suppressHydrationWarning className="bg-paper font-sans text-charcoal min-h-screen selection:bg-turmeric/30 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
