import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUYlc456G70wXkzfSb2YKWF_vZLTzslEZpg&s')],
  },
};

export default nextConfig;
