import analyzer from '@next/bundle-analyzer';

const config = {
  output: 'export',
  images: {
    // not currently needed, but who knows
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'saecula.io',
      },
    ],
  },
};

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(config);
