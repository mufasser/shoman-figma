import type { Metadata } from "next";
export const metadata: Metadata = { title: "Adobe Commerce (Magento) Engineering — Shoman Solutions" };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
