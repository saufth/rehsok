/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  i18n: {
    locales: ["es_mx"],
    defaultLocale: "es_mx",
  }
}

module.exports = nextConfig
