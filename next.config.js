/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "icons8.com"
      },
      {
        protocol: "https",
        hostname: "img.icons8.com"
      },
      {
        protocol: "https",
        hostname: "creazilla-store.fra1.digitaloceanspaces.com"
      }
    ]
  },
  webpack: config => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
      string_decoder: false,
      dns: false,
      net: false,
      stream: false,
      crypto: false,
      tls: false
    };
    return config;
  }
};

module.exports = nextConfig;
