import AboutTestimonialsWidget from "@/components/AboutTestimonialsWidget";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  MigrationAssurance,
  MigrationCoverage,
  MigrationHero,
  MigrationOnboarding,
  MigrationPricing,
  MigrationProofStrip,
  MigrationWorkflow,
} from "@/components/services/migration/MigrationSections";
import "@/components/services/migration/migration.css";

export default function MigrationPage() {
  return (
    <div className="migration-page">
      <Navbar />
      <main>
        <MigrationHero />
        <MigrationAssurance />
        <MigrationCoverage />
        <MigrationOnboarding />
        <MigrationWorkflow />
        <MigrationPricing />
        <MigrationProofStrip />
        <AboutTestimonialsWidget eyebrow="Client Voices" title="Migration stories from real commerce teams" />
        <div className="mg-final-cta">
          <FinalCTA
            eyebrow="Free migration discovery call"
            title="Ready to leave Magento"
            highlight="without leaving data behind?"
            description="Talk directly with a senior migration engineer about your dataset, integrations, SEO history and safest route to Shopify."
            primaryLabel="Start Your Migration"
            secondaryLabel="View Migration Work"
            secondaryHref="/portfolio"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
