import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["example.com", "images.unsplash.com"], // Add trusted hosts here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This allows all hosts (less secure)
      },
    ],
  },
};

export default nextConfig;
