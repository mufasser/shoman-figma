"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionLabel } from "@/components/services/ServiceComponents";

const services = [
  {
    bg: "#fff5f5",
    href: "/services/adobe-commerce",
    image: "/assets/services/adobe-commerce-engineering.jpg",
    imageAlt: "Adobe Commerce engineers discussing a store build",
    title: "Adobe Commerce (Magento) Engineering",
    desc: "Experienced backend engineering, security patching, performance optimisation, and custom module development for Adobe Commerce and Magento 2 stores.",
    cta: "Explore Service",
  },
  {
    bg: "#f5fbee",
    href: "/services/shopify",
    image: "/assets/services/shopify-store-development.jpg",
    imageAlt: "Shopify project planning session",
    title: "Shopify Store Launch & Development",
    desc: "End-to-end Shopify and Shopify Plus store builds for startups, growing brands, and enterprise clients. Custom themes, integrations, and conversion-focused development.",
    cta: "Explore Service",
  },
  {
    bg: "#fff8f0",
    href: "/services/migration",
    image: "/assets/services/adobe-commerce-app-builder.jpg",
    imageAlt: "Adobe Commerce App Builder migration planning",
    title: "Adobe Commerce App Builder",
    desc: "Full platform migration handling all products, orders, customers, SEO redirects, and third-party integrations — with zero data loss and no downtime on launch day.",
    cta: "Explore Service",
  },
  {
    bg: "#f0f9ff",
    href: "/services/audits",
    image: "/assets/services/technical-audit-service.jpg",
    imageAlt: "Technical audit review meeting",
    title: "Technical Audit Service",
    desc: "Fixed-fee, expert-written audit of your ecommerce store. Security, performance, checkout path, or migration complexity — delivered as a prioritised PDF report in 5 days.",
    cta: "Order Audit",
  },
  {
    bg: "#f5f3ff",
    href: "/services/integrations",
    image: "/assets/services/enterprise-systems-integration.jpg",
    imageAlt: "Enterprise systems integration workshop",
    title: "Enterprise Systems Integration",
    desc: "Custom middleware and API development connecting your ecommerce platform to ERP (SAP, Dynamics), CRM (Salesforce, HubSpot), and warehouse systems in real time.",
    cta: "Explore Service",
  },
  {
    bg: "#f0f9ff",
    href: "/services/white-label",
    image: "/assets/services/white-label-agency-partnerships.jpg",
    imageAlt: "White-label agency partnership discussion",
    title: "White-Label Agency Partnerships",
    desc: "Add an experienced ecommerce engineering team to your agency roster invisibly. We deliver under your brand, on your timelines — so you never have to turn away profitable work.",
    cta: "Become a Partner",
  },
];

export default function ServicesPage() {
  return (
    <div style={{ background: "var(--color-white)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        paddingTop: 72, background: "var(--color-white)",
        borderBottom: "1px solid var(--color-border)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(var(--color-brand-rgb), 0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 24px 72px" }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--color-brand-soft)", border: "1px solid rgba(var(--color-brand-rgb), 0.2)",
              borderRadius: 100, padding: "6px 14px", marginBottom: 20,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-brand)", display: "inline-block" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-brand)", letterSpacing: "0.06em" }}>
                6 specialist services · Startup to enterprise
              </span>
            </div>
            <h1 style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 800, lineHeight: 1.1,
              letterSpacing: "-0.03em", color: "var(--color-ink)", marginBottom: 20,
            }}>
              Every ecommerce challenge.<br />
              <span style={{ color: "var(--color-brand)" }}>One engineering team.</span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--color-copy)", maxWidth: 520 }}>
              From launching your first Shopify store to migrating a complex Adobe Commerce platform — we cover every stage of the ecommerce lifecycle with specialist engineers, not generalists.
            </p>
          </div>


          {/* Quick stats */}
          <div style={{ display: "flex", gap: 32, marginTop: 40, flexWrap: "wrap" }}>
            {[
              { value: "10+", label: "Years experience" },
              { value: "50+", label: "Projects delivered" },
              { value: "Enterprise", label: "Adobe Commerce App Builder Specialists" },
              { value: "100%", label: "Code ownership" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "var(--color-brand)", letterSpacing: "-0.03em" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "var(--color-muted)", fontWeight: 500, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section style={{ background: "var(--color-bg-soft)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="services-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 24 }}>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="service-card-link" style={{ textDecoration: "none", color: "inherit" }}>
                <article className="service-list-card" style={{
                  background: "var(--color-white)",
                  border: "1.5px solid var(--color-border)",
                  borderRadius: 18,
                  overflow: "hidden",
                  minHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
                }}>
                  <div className="service-list-card__media" style={{ position: "relative", aspectRatio: "16 / 7", overflow: "hidden", background: s.bg }}>
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover", transition: "transform 0.35s ease" }}
                    />
                  </div>

                  <div className="service-list-card__content" style={{ padding: "34px 36px 36px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{
                      fontSize: "clamp(28px, 3vw, 38px)",
                      fontWeight: 800,
                      color: "var(--color-ink)",
                      lineHeight: 1.12,
                      marginBottom: 24,
                      letterSpacing: "-0.03em",
                    }}>{s.title}</h3>
                    <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--color-copy)", marginBottom: 30 }}>
                      {s.desc}
                    </p>
                    <span className="service-list-card__cta" style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 12,
                      alignSelf: "flex-start",
                      marginTop: "auto",
                      minHeight: 52,
                      padding: "0 24px",
                      borderRadius: 8,
                      background: "rgba(var(--color-brand-rgb), 0.48)",
                      color: "var(--color-ink)",
                      fontSize: 15,
                      fontWeight: 800,
                      transition: "background 0.2s ease, transform 0.2s ease",
                    }}>
                      {s.cta}
                      <span style={{
                        width: 32,
                        height: 32,
                        borderRadius: 7,
                        background: "var(--color-brand)",
                        color: "var(--color-white)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        <ArrowRight size={17} strokeWidth={2.4} />
                      </span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure section */}
      <section style={{ background: "var(--color-white)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{
            background: "var(--color-ink)", borderRadius: 20,
            padding: "56px 48px",
            display: "grid", gridTemplateColumns: "1fr auto",
            gap: 40, alignItems: "center",
            position: "relative", overflow: "hidden",
          }} className="cta-grid">
            <div style={{
              position: "absolute", top: -60, right: 200,
              width: 300, height: 300, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(var(--color-brand-rgb), 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ position: "relative" }}>
              <SectionLabel text="Not Sure Which Service?" />
              <h2 style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 800, lineHeight: 1.2,
                color: "var(--color-white)", marginBottom: 14,
                letterSpacing: "-0.02em",
              }}>
                Talk to a senior engineer.<br />
                <span style={{ color: "var(--color-brand)" }}>No sales pitch.</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--color-subtle)", maxWidth: 480 }}>
                Tell us where your store is and what&apos;s frustrating you. We&apos;ll tell you exactly what we&apos;d recommend — even if that recommendation is that you don&apos;t need us yet.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
              <a href="/contact" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "var(--color-brand)", color: "var(--color-white)",
                padding: "14px 28px", borderRadius: 9,
                fontSize: 14, fontWeight: 600, textDecoration: "none",
                transition: "all 0.2s", whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-brand-hover)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-brand)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}>
                Book Free Discovery Call <ArrowRight size={15} />
              </a>
              <a href="/services/audits" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                border: "1.5px solid rgba(255, 255, 255, 0.15)", color: "var(--color-white)",
                padding: "14px 28px", borderRadius: 9,
                fontSize: 14, fontWeight: 600, textDecoration: "none",
                transition: "all 0.2s", whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-brand)";
                (e.currentTarget as HTMLElement).style.color = "var(--color-brand)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.15)";
                (e.currentTarget as HTMLElement).style.color = "var(--color-white)";
              }}>
                Start With a £499 Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .service-card-link:hover .service-list-card {
          border-color: rgba(var(--color-brand-rgb), 0.34);
          box-shadow: 0 18px 54px rgba(15, 23, 42, 0.08);
          transform: translateY(-3px);
        }
        .service-card-link:hover .service-list-card__media :global(img) {
          transform: scale(1.04);
        }
        .service-card-link:hover .service-list-card__cta {
          background: rgba(var(--color-brand-rgb), 0.6) !important;
        }
        @media (max-width: 980px) {
          .services-card-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .service-list-card__content {
            padding: 26px 24px 28px !important;
          }
          .service-list-card__media {
            aspect-ratio: 16 / 9 !important;
          }
          .cta-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .service-list-card__cta {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
