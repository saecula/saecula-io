import analyzer from '@next/bundle-analyzer';

const config = {
  images: {
    // not currently needed, but who knows
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'saecula.io',
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(config);
