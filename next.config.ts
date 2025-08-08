import type { NextConfig } from "next";
import path from 'path';


const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['cdn.sanity.io'],
    minimumCacheTTL: 31536000, // 1 año en segundos
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles/base')],
    prependData: `@import "variables.scss";`, // Archivo de variables Sass
  },
};

export default nextConfig;
