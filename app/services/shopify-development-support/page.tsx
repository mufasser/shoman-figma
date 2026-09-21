import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import {
  ShopifyBuild,
  ShopifyHero,
  ShopifyIntegrations,
  ShopifyPricing,
  ShopifyProcess,
  ShopifyQuestions,
  ShopifyRelated,
  ShopifyWho,
} from "@/components/services/shopify/ShopifySections";
import { ShopifySectionNavigation } from "@/components/services/shopify/ShopifyInteractions";
import "@/components/services/shopify/shopify.css";

export default function ShopifyPage() {
  return (
    <div className="shopify-page">
      <Navbar />
      <ShopifySectionNavigation />
      <main>
        <ShopifyHero />
        <ShopifyWho />
        <ShopifyBuild />
        <ShopifyIntegrations />
        <ShopifyProcess />
        <ShopifyPricing />
        <ShopifyQuestions />
        <ShopifyRelated />
        <div className="sh-final-cta">
          <FinalCTA
            title="Ready to build your"
            highlight="Shopify store?"
            description="No jargon. No hard sell. A direct conversation with a senior Shopify engineer about your goals, integrations, and the right build approach."
            primaryLabel="Start Your Build"
            secondaryLabel="View Our Work"
            secondaryHref="/portfolio"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
