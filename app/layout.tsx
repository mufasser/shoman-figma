import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import CalendlyFloatingButton from "@/components/CalendlyFloatingButton";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-XSJH59ZVSR";

export const metadata: Metadata = {
  title: "Shoman Solutions — Ecommerce Engineering Built Right",
  description: "UK-based ecommerce development agency specialising in Adobe Commerce, Magento, Shopify, systems integration and technical audits.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <CalendlyFloatingButton />
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
