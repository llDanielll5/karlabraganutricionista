/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      }
      // Convert all other *.svg imports to React components
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  swcMinify: false,
  // experimental: { serverComponentsExternalPackages: ["@react-pdf/renderer"] },
  reactStrictMode: true,
  env: {
    REACT_APP_ACCESS_TOKEN_MAP_BOX: process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX,
  },
};

export default nextConfig;
