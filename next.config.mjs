
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  assetPrefix: "",
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
