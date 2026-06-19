import type { Metadata } from "next";
export const metadata: Metadata = { title: "Shopify Store Launch & Development — Shoman Solutions" };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
