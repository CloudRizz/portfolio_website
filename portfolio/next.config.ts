/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // Ensure static export works with AWS Amplify
  distDir: 'out',
  // Enable static optimization
  experimental: {
    optimizeCss: true
  }
}

export default nextConfig
