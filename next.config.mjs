/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['react-icons'],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    
    // Add proper module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': './src/components',
    };
    
    return config;
  },
};

export default nextConfig;
