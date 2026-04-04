import { MetadataRoute } from 'next';

const baseUrl = 'https://analytica-studio.com';
// '' = English (no prefix, default locale), '/pl' = Polish, '/no' = Norwegian
const locales = ['', '/pl', '/no'];
const paths = ['', '/projekty', '/o-mnie', '/kontakt', '/oferta', '/cennik'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of paths) {
      entries.push({
        url: `${baseUrl}${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : 0.8,
      });
    }
  }

  return entries;
}
