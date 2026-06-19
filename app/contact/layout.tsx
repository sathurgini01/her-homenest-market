import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Contact Her HomeNest',
  description: 'Contact the Her HomeNest team for marketplace support, seller onboarding, verification questions or trust and safety concerns.',
  alternates: {canonical: '/contact'},
};

export default function ContactLayout({children}: {children: React.ReactNode}) {
  return children;
}
