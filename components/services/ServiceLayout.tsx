"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, BadgeCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import "./service-standard.css";

interface ServiceLayoutProps {
  children: React.ReactNode;
  // Hero
  badge: string;
  badgeColor: string;
  badgeBg: string;
  platformSymbol: string;
  platformColor: string;
  heroTitle: string;
  heroHighlight: string;
  heroSub: string;
  ctaText: string;
  ctaHref?: string;
  secondaryCta?: string;
  breadcrumb: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroImageWidth?: number;
  heroImageHeight?: number;
  standardized?: boolean;
}

function getDefaultService(breadcrumb: string) {
  if (breadcrumb.includes("Adobe")) return "Adobe Commerce / Magento";
  if (breadcrumb.includes("Shopify") && breadcrumb.includes("Migration")) return "Migration";
  if (breadcrumb.includes("Shopify")) return "Shopify Development";
  if (breadcrumb.includes("Audit")) return "Technical Audit";
  if (breadcrumb.includes("White-Label")) return "White-Label Partnership";
  if (breadcrumb.includes("Integration")) return "Systems Integration";

  return "";
}

export default function ServiceLayout({
  children,
  badge,
  badgeColor,
  badgeBg,
  platformSymbol,
  platformColor,
  heroTitle,
  heroHighlight,
  heroSub,
  ctaText,
  secondaryCta,
  breadcrumb,
  heroImage,
  heroImageAlt = "",
  heroImageWidth = 978,
  heroImageHeight = 856,
  standardized = false,
  ctaHref = "/contact-us",
}: ServiceLayoutProps) {
  const defaultService = getDefaultService(breadcrumb);

  return (
    <div
      className={`service-layout${standardized ? " service-standard-page" : ""}`}
      style={{
        "--service-accent": platformColor,
        "--service-accent-soft": badgeBg,
        "--service-badge-color": badgeColor,
      } as CSSProperties}
    >
      <Navbar />

      {/* Hero */}
      <section className="service-standard-hero">
        <div className="service-hero-glow service-hero-glow--right" />
        <div className="service-hero-glow service-hero-glow--left" />

        <div className="service-standard-hero__inner">
          {/* Breadcrumb */}
          <div className="service-standard-breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <Link href="/services">Services</Link>
            <ChevronRight size={13} />
            <span>{breadcrumb}</span>
          </div>

          <div className="hero-service-grid service-standard-hero__grid">
            <div className="service-standard-hero__content">
              {/* Platform badge */}
              <div className="service-standard-badge">
                <div className="service-standard-badge__symbol">{platformSymbol}</div>
                <span>{badge}</span>
              </div>

              <h1 className="service-standard-hero__title">
                {heroTitle}
                <span>{heroHighlight}</span>
              </h1>

              <p className="service-standard-hero__description">{heroSub}</p>

              <div className="service-standard-hero__actions">
                <a className="service-standard-button service-standard-button--primary" href={ctaHref}>
                  {ctaText} <ArrowRight size={15} />
                </a>
                {secondaryCta && (
                  <a className="service-standard-button" href="#overview">
                    {secondaryCta}
                  </a>
                )}
              </div>
            </div>

            {heroImage ? (
              <div className="hero-service-image">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  width={heroImageWidth}
                  height={heroImageHeight}
                  loading="eager"
                  sizes="(max-width: 768px) 92vw, 430px"
                  className="hero-service-image__asset"
                />
              </div>
            ) : (
              <div className="hero-service-form">
                <ContactForm
                  compact
                  title="Tell us about your project"
                  subtitle="Share the essentials and a senior ecommerce engineer will reply with the next best step."
                  submitLabel="Send Enquiry"
                  footerNote="Response within one business day."
                  defaultServices={defaultService ? [defaultService] : []}
                  defaultValues={{
                    message: `I'm interested in ${breadcrumb}.`,
                  }}
                  backHref="/services"
                  backLabel="Back to Services"
                />
              </div>
            )}
          </div>
        </div>

      </section>

      {/* Page body */}
      <div id="overview" className="service-standard-overview">{children}</div>

      {/* Bottom CTA */}
      <section className="service-standard-final-cta">
        <div className="service-standard-final-cta__glow" />
        <div className="service-standard-final-cta__inner">
          <div className="service-standard-final-cta__badge">
            <BadgeCheck size={14} color="var(--color-brand)" strokeWidth={2.3} />
            <span>Free 30-min discovery call</span>
          </div>
          <h2>
            Ready to discuss your<br />
            <span>{breadcrumb} project?</span>
          </h2>
          <p>
            No jargon. No hard sell. A direct conversation with a senior engineer who understands your platform.
          </p>
          <div className="service-standard-final-cta__actions">
            <a className="service-standard-final-cta__primary" href="/contact-us">
              Book Free Consultation <ArrowRight size={15} />
            </a>
            <a className="service-standard-final-cta__secondary" href="/contact-us">
              View All Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
