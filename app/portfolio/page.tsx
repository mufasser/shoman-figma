import type { Metadata } from "next";
import { getContentPayload } from "@/app/graphql/content";
import PortfolioView from "@/components/portfolio/PortfolioView";

export const metadata: Metadata = { title: "Portfolio | Shoman Solutions", description: "Explore our Adobe Commerce, Shopify, migration, and integration projects." };

export default async function PortfolioPage() {
  const content = await getContentPayload();
  return <PortfolioView initialProjects={content.projects} initialTestimonials={content.testimonials} />;
}
