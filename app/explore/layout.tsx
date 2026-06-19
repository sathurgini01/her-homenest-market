import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Explore Colombo Homemakers',
  description: 'Browse verified Colombo homemakers by category, location, rating and availability. Find food, tailoring, handmade gifts, beauty and classes.',
  alternates: {canonical: '/explore'},
  openGraph: {
    title: 'Explore Colombo Homemakers',
    description: 'Find verified women-led home businesses and contact them directly.',
    url: '/explore',
  },
};

export default function ExploreLayout({children}: {children: React.ReactNode}) {
  return children;
}
