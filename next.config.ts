import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/adobe-commerce",
        destination: "/services/adobe-commerce-development-support",
        permanent: true,
      },
      {
        source: "/services/shopify",
        destination: "/services/shopify-development-support",
        permanent: true,
      },
      {
        source: "/services/migration",
        destination: "/services/magento-to-shopify-migration",
        permanent: true,
      },
      {
        source: "/services/audits",
        destination: "/services/technical-audits",
        permanent: true,
      },
      {
        source: "/services/integrations",
        destination: "/services/third-party-integrations",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
