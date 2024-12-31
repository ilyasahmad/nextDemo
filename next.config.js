const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['unsplash.com'],
  },
  // output: 'export', // Enables static HTML export
};

module.exports = withNextIntl(nextConfig);
