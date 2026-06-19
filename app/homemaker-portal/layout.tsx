import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Homemaker Portal',
  robots: {index: false, follow: false, nocache: true},
};

export default function HomemakerPortalLayout({children}: {children: React.ReactNode}) {
  return children;
}
