import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
