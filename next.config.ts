import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const basePath = isGithubActions ? "/escano_portfolio" : "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  // FIX: This must be at the top level, NOT inside experimental
  allowedDevOrigins: ["localhost:3000", "192.168.*.*:3000", "192.168.*.*", "localhost"],
};

export default nextConfig;