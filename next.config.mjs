/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/leedshack/tickets',
                destination: 'https://universe.com/leedshack2025',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
