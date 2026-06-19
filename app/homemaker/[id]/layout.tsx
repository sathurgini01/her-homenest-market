import type {Metadata} from 'next';
import {getPublicHomemakers} from '@/lib/mock-data';

type Props = {
  children: React.ReactNode;
  params: Promise<{id: string}>;
};

export async function generateMetadata({params}: Omit<Props, 'children'>): Promise<Metadata> {
  const {id} = await params;
  const homemaker = getPublicHomemakers().find((item) => item.id === id);

  if (!homemaker) {
    return {
      title: 'Homemaker Profile',
      robots: {index: false, follow: true},
    };
  }

  const canonical = `/homemaker/${homemaker.id}`;
  const description = `${homemaker.businessName} offers ${homemaker.category.toLowerCase()} in ${homemaker.area}, Colombo. ${homemaker.bio}`;

  return {
    title: `${homemaker.businessName} | ${homemaker.category}`,
    description: description.slice(0, 160),
    alternates: {canonical},
    openGraph: {
      type: 'profile',
      title: homemaker.businessName,
      description: description.slice(0, 160),
      url: canonical,
      images: homemaker.photos[0]
        ? [{url: homemaker.photos[0], alt: homemaker.businessName}]
        : undefined,
    },
  };
}

export default async function HomemakerLayout({children, params}: Props) {
  const {id} = await params;
  const homemaker = getPublicHomemakers().find((item) => item.id === id);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const structuredData = homemaker
    ? {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: homemaker.businessName,
        description: homemaker.bio,
        url: `${siteUrl}/homemaker/${homemaker.id}`,
        image: homemaker.photos,
        telephone: `+${homemaker.whatsappNumber}`,
        priceRange: `LKR ${homemaker.priceFrom}+`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: homemaker.area,
          addressRegion: 'Colombo',
          addressCountry: 'LK',
        },
        aggregateRating: homemaker.reviewCount
          ? {
              '@type': 'AggregateRating',
              ratingValue: homemaker.rating,
              reviewCount: homemaker.reviewCount,
              bestRating: 5,
            }
          : undefined,
      }
    : null;

  return (
    <>
      {children}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData).replace(/</g, '\\u003c')}}
        />
      )}
    </>
  );
}
