/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.sanity.io",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.sanity.io",
              "img-src 'self' data: https://cdn.sanity.io blob:",
              "font-src 'self' https://fonts.gstatic.com https://cdn.sanity.io",
              "connect-src 'self' https://*.sanity.io https://*.sanity.net",
              "frame-src 'self' https://*.sanity.io",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
