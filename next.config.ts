import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      resolveAlias: {
        '@getbrevo/brevo': require.resolve('@getbrevo/brevo')
      }
    }
  }
};

export default nextConfig;
