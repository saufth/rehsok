/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  i18n: {
    locales: ["es-MX"],
    defaultLocale: "es-MX",
    localeDetection: false
  }
}

module.exports = nextConfig
