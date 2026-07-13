"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, BadgeCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

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
}: ServiceLayoutProps) {
  const defaultService = getDefaultService(breadcrumb);

  return (
    <div style={{ background: "var(--color-white)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        paddingTop: 72,
        background: "var(--color-white)",
        borderBottom: "1px solid var(--color-border)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background blobs */}
        <div style={{
          position: "absolute", top: -100, right: -100,
          width: 500, height: 500, borderRadius: "50%",
          background: `radial-gradient(circle, ${platformColor}10 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -60, left: -60,
          width: 300, height: 300, borderRadius: "50%",
          background: `radial-gradient(circle, ${platformColor}07 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 24px 64px", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
            <Link href="/" style={{ fontSize: 13, color: "var(--color-subtle)", textDecoration: "none", fontWeight: 500 }}>Home</Link>
            <ChevronRight size={13} color="var(--color-border-strong)" />
            <Link href="/services" style={{ fontSize: 13, color: "var(--color-subtle)", textDecoration: "none", fontWeight: 500 }}>Services</Link>
            <ChevronRight size={13} color="var(--color-border-strong)" />
            <span style={{ fontSize: 13, color: "var(--color-ink)", fontWeight: 600 }}>{breadcrumb}</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(360px, 430px)", gap: 48, alignItems: "start" }} className="hero-service-grid">
            <div>
              {/* Platform badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: badgeBg,
                border: `1px solid ${badgeColor}30`,
                borderRadius: 100, padding: "6px 14px", marginBottom: 20,
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 5,
                  background: platformColor,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 9, fontWeight: 800, color: "var(--color-white)", flexShrink: 0,
                }}>{platformSymbol}</div>
                <span style={{ fontSize: 12, fontWeight: 600, color: badgeColor, letterSpacing: "0.04em" }}>{badge}</span>
              </div>

              <h1 style={{
                fontSize: "clamp(32px, 4vw, 54px)",
                fontWeight: 800, lineHeight: 1.1,
                letterSpacing: "-0.03em", color: "var(--color-ink)",
                marginBottom: 20,
              }}>
                {heroTitle}
                <span style={{ color: platformColor, display: "block" }}>{heroHighlight}</span>
              </h1>

              <p style={{
                fontSize: 17, lineHeight: 1.75, color: "var(--color-copy)",
                marginBottom: 32, maxWidth: 560,
              }}>{heroSub}</p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/services/audits" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "var(--color-brand)", color: "var(--color-white)",
                  padding: "13px 24px", borderRadius: 9,
                  fontSize: 14, fontWeight: 600, textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--color-brand-hover)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--color-brand)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}>
                  {ctaText} <ArrowRight size={15} />
                </a>
                {secondaryCta && (
                  <a href="#overview" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    border: "1.5px solid var(--color-border)", color: "var(--color-ink)",
                    padding: "13px 24px", borderRadius: 9,
                    fontSize: 14, fontWeight: 600, textDecoration: "none",
                    transition: "all 0.2s",
                    background: "var(--color-white)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-brand)";
                    (e.currentTarget as HTMLElement).style.color = "var(--color-brand)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--color-ink)";
                  }}>
                    {secondaryCta}
                  </a>
                )}
              </div>
            </div>

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
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .hero-service-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
            .hero-service-form { max-width: 100% !important; }
          }
        `}</style>
      </section>

      {/* Page body */}
      <div id="overview">{children}</div>

      {/* Bottom CTA */}
      <section style={{ background: "var(--color-ink)", padding: "80px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600, height: 300,
          background: `radial-gradient(ellipse, ${platformColor}15 0%, transparent 65%)`,
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 540, margin: "0 auto", position: "relative" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(var(--color-brand-rgb), 0.1)", border: "1px solid rgba(var(--color-brand-rgb), 0.2)",
            borderRadius: 100, padding: "6px 16px", marginBottom: 20,
          }}>
            <BadgeCheck size={14} color="var(--color-brand)" strokeWidth={2.3} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-brand)" }}>Free 30-min discovery call</span>
          </div>
          <h2 style={{
            fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 800,
            lineHeight: 1.15, color: "var(--color-white)", marginBottom: 14,
            letterSpacing: "-0.02em",
          }}>
            Ready to discuss your<br />
            <span style={{ color: "var(--color-brand)" }}>{breadcrumb} project?</span>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--color-subtle)", marginBottom: 32 }}>
            No jargon. No hard sell. A direct conversation with a senior engineer who understands your platform.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--color-brand)", color: "var(--color-white)",
              padding: "14px 28px", borderRadius: 9,
              fontSize: 14, fontWeight: 600, textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--color-brand-hover)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--color-brand)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}>
              Book Free Consultation <ArrowRight size={15} />
            </a>
            <a href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1.5px solid rgba(255, 255, 255, 0.15)",
              color: "var(--color-white)",
              padding: "14px 28px", borderRadius: 9,
              fontSize: 14, fontWeight: 600, textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-brand)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-brand)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.15)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-white)";
            }}>
              View All Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
