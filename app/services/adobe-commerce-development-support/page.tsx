import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { SectionNavigation } from "@/components/services/adobe-commerce/AdobeInteractions";
import { AdobeHero, AdobePainPoints, AdobeEngagement, AdobeVersions, AdobeProcess, AdobePricing, AdobeQuestions, AdobeRelated } from "@/components/services/adobe-commerce/AdobeSections";
import "@/components/services/adobe-commerce/adobe-commerce.css";

export default function AdobeCommercePage() {
  return <div className="adobe-page service-layout"><Navbar /><SectionNavigation /><main><AdobeHero /><AdobePainPoints /><AdobeEngagement /><AdobeVersions /><AdobeProcess /><AdobePricing /><AdobeQuestions /><AdobeRelated /><div className="ac-final-cta"><FinalCTA title="Ready to fix your" /></div></main><Footer /></div>;
}
