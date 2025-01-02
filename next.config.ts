import type { NextConfig } from "next";
import path from 'path';


const nextConfig: NextConfig = {
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
