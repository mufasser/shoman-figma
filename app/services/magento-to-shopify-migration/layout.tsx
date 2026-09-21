import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magento to Shopify Migration Services | Shoman Solutions",
  description:
    "Move products, customers, orders, media, redirects and custom Magento data into Shopify with a validated, resumable migration workflow.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
