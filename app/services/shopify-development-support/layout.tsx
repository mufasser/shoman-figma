import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development & Store Launch | Shoman Solutions",
  description: "Custom Shopify and Shopify Plus development for fast, scalable ecommerce stores built to convert.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
