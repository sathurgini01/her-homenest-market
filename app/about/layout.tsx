import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'About Our Women-Led Marketplace',
  description: 'Learn how Her HomeNest supports Colombo women entrepreneurs with verified profiles, direct customer contact and zero marketplace commission.',
  alternates: {canonical: '/about'},
};

export default function AboutLayout({children}: {children: React.ReactNode}) {
  return children;
}
