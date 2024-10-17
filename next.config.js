/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = {
  output: "standalone",
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
