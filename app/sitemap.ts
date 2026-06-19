import type {MetadataRoute} from 'next';
import {CATEGORY_DETAILS, categoryToSlug} from '@/lib/category-data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    {path: '', priority: 1, changeFrequency: 'weekly' as const},
    {path: '/explore', priority: 0.9, changeFrequency: 'daily' as const},
    {path: '/about', priority: 0.7, changeFrequency: 'monthly' as const},
    {path: '/contact', priority: 0.5, changeFrequency: 'monthly' as const},
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...CATEGORY_DETAILS.map((category) => ({
      url: `${siteUrl}/category/${categoryToSlug(category.name)}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
