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
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        port: "",
        pathname: "/**", // Isse dicebear ke saare paths whitelist ho jayenge
      }, 
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // 🚀 GITHUB AVATARS WHITELIST
        port: "",
        pathname: "/**", // Isse saare github profiles allow ho jayenge
      },
    ],
  },
};

export default nextConfig;