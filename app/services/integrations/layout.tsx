import type { Metadata } from "next";
export const metadata: Metadata = { title: "Enterprise Systems Integration — Shoman Solutions" };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
