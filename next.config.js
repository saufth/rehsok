/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_EMAIL_SERVICE_KEY: process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY,
    NEXT_PUBLIC_EMAIL_TEMPLATE_KEY: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY,
    NEXT_PUBLIC_EMAIL_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
