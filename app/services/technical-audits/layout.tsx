import type { Metadata } from "next";
export const metadata: Metadata = { title: "Technical Audit Service — Shoman Solutions" };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
