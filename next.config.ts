import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useCache: true,
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
