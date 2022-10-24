/** @type {import('next').NextConfig} */
const isProd = process.env.NEXT_PUBLIC_APP_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CLIENT_URL: isProd
      ? 'https://imaimai17468.github.io'
      : 'http://localhost:3000',
  },
}

module.exports = nextConfig
