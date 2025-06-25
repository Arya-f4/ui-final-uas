import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // Ensure ESLint runs during builds
    // Optionally, you can specify files to ignore or customize rules
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**', // Allow all paths from this hostname
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
