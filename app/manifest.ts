import type {MetadataRoute} from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Her HomeNest Market',
    short_name: 'HomeNest',
    description: 'Discover verified women-led home businesses and handmade products across Colombo.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F2E7',
    theme_color: '#3B1F32',
    lang: 'en-LK',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
