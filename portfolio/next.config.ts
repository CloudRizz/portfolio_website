/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // static export
  trailingSlash: true,    // for static hosting URLs
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  distDir: 'out',         // output folder for Amplify
  experimental: {
    optimizeCss: true,
  }
}

export default nextConfig
