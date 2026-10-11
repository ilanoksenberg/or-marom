import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be hosted anywhere (GitHub Pages, Netlify, Vercel).
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === "production" ? "/or-marom" : "",
};

export default nextConfig;
