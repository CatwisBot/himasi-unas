/** @type {import('next').NextConfig} */
const nextConfig = {
  // Commented out 'output: export' because it's incompatible with API routes
  // output: 'export',
  images: {
    unoptimized: true,
  },
  // Updated to use new Next.js 15 config option
  serverExternalPackages: ['@prisma/client']
};

module.exports = nextConfig;