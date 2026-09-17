import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Adobe Commerce & Magento Development and Support | Shoman Solutions",
  description: "Certified backend engineering for Adobe Commerce and Magento. Security patching, performance optimisation, custom modules, and ongoing support with clear SLAs.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
