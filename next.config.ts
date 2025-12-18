import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: "deterministic",
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              name: "framework",
              chunks: "all",
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
            },
            lib: {
              test(module: { size: () => number; identifier: () => string }) {
                return (
                  module.size() > 160000 &&
                  /node_modules[/\\]/.test(module.identifier())
                );
              },
              name(module: { identifier: () => string }) {
                const hash = Buffer.from(module.identifier())
                  .toString("base64")
                  .substring(0, 8)
                  .replace(/[^a-zA-Z0-9]/g, "");
                return `lib-${hash}`;
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            commons: {
              name: "commons",
              minChunks: 2,
              priority: 20,
            },
            shared: {
              name(
                _module: { identifier: () => string },
                chunks: { name: string }[]
              ) {
                const hash = Buffer.from(
                  chunks.reduce((acc, chunk) => acc + chunk.name, "")
                )
                  .toString("base64")
                  .substring(0, 8)
                  .replace(/[^a-zA-Z0-9]/g, "");
                return hash;
              },
              priority: 10,
              minChunks: 2,
              reuseExistingChunk: true,
            },
          },
          maxInitialRequests: 25,
          minSize: 20000,
        },
      };
    }
    return config;
  },
};

export default nextConfig;
