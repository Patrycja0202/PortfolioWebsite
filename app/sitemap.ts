import { MetadataRoute } from 'next';

const baseUrl = 'https://analyticastudio.pl';
const locales = ['', '/pl', '/no'];
const paths = ['', '/o-mnie', '/projekty', '/oferta', '/cennik', '/kontakt'];

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
