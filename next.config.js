/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        AUTH_SECRET: process.env.AUTH_SECRET,
        BACKEND_API_URL: process.env.BACKEND_API_URL,
    },
};

module.exports = nextConfig;
