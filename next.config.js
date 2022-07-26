/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: 'http://127.0.0.1:8000/api/v1',
    BASE_URL: 'http://localhost:8080'
  }
}

module.exports = nextConfig
