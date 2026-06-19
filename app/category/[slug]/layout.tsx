import type {Metadata} from 'next';
import {CATEGORY_BY_SLUG} from '@/lib/category-data';

type Props = {
  children: React.ReactNode;
  params: Promise<{slug: string}>;
};

export async function generateMetadata({params}: Omit<Props, 'children'>): Promise<Metadata> {
  const {slug} = await params;
  const category = CATEGORY_BY_SLUG[slug];

  if (!category) {
    return {
      title: 'Homemaker Category',
      robots: {index: false, follow: true},
    };
  }

  const canonical = `/category/${slug}`;
  return {
    title: `${category.name} in Colombo`,
    description: `${category.summary} Browse verified Colombo homemakers and contact them directly.`,
    alternates: {canonical},
    openGraph: {
      title: `${category.name} in Colombo`,
      description: category.summary,
      url: canonical,
    },
  };
}

export default function CategoryLayout({children}: Props) {
  return children;
}
