/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['utfs.io, hebbkx1anhila5yf.public.blob.vercel-storage.com'],
        remotePatterns:[
            {
                protocol: 'https',
                hostname: '**',
                port : ''
            }

        ]
    }
};

export default nextConfig;
