/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      enabled: false, // Turbopackを無効化
    },
  },
  webpack(config, { dev, isServer }) {
    if (dev && !isServer) {
      config.devtool = 'source-map';
    }
    return config;
  },
};

export default nextConfig;
