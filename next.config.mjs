import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.figma.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'analytica-studio.com' }],
        destination: 'https://www.analytica-studio.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
