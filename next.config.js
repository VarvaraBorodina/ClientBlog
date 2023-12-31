/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')('./i18n.ts');

const nextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ['@svgr/webpack'],
      }
    );
    return config;
  },
};

module.exports = withNextIntl(nextConfig);
