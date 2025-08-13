module.exports = {
  publicRuntimeConfig: {
    site: {
      name: 'store',
      url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://earvinpiamonte-nextjs-tailwindcss-template.vercel.app',
      title: 'store',
      description: 'store',
      socialPreview: '/images/preview.png',
    },
  },
  swcMinify: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
};


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  // (Optional) Set the base path if deploying to a subdirectory
  // basePath: '/your-repo-name',
};

module.exports = nextConfig;