import analyzer from '@next/bundle-analyzer';

const config = {
  images: {
    dangerouslyAllowSVG: true,
  },
  turbopack: {},
};

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(config);
