/** @type {import('next').NextConfig} */
import PUBLIC_RUNTIME_CONFIG from './src/utils/publicRuntimeConfig.mjs';

const nextConfig = {
    publicRuntimeConfig: PUBLIC_RUNTIME_CONFIG,
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: [
            "localhost",
            "raw.githubusercontent.com"
        ]
    }
};

export default nextConfig;
