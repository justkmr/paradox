import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // 🌟 IMAGES HOSTNAME CONFIGURATION ADD KIYA
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        port: "",
        pathname: "/**", // Isse simpleicons ke saare paths whitelist ho jayenge
      },
    ],
  },
};

export default nextConfig;