import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import ServicesCarousel from "@/components/ServicesCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import { Blog, CommunityBanner } from "@/components/BlogAndCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoTicker />
      <ServicesCarousel />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <Blog />
      <CommunityBanner />
      <Footer />
    </main>
  );
}
