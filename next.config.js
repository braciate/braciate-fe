/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = {
  distDir: "_next",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "qahzsggmrbbpiaoyuruy.supabase.co",
      },
    ],
  },
};

module.exports = withVideos(nextConfig);
