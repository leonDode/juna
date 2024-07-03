/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
    ...nextConfig,
    async rewrites() {
        return [
            {
                source: '/dashboard-administrador/',
                destination: '/dashboard-admin/[id]/[token]'
            },
            {
                source: '/dashboard-cliente/',
                destination: '/dashboard-cliente/[id]/[token]'
            }
        ];
    }
};
