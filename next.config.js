/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
