import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', 
        destination: '/server/api/:path*', // 将`/api`重定向到 `/server/api` 路径
      },
    ];
  },
  i18n:{
    locales: ['en', 'zh'],
    defaultLocale: 'zh'
  }
};

export default nextConfig;
