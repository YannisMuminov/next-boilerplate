import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "github.com", "avatars.mds.yandex.net"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
