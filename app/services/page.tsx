"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/services/ServiceComponents";

const services = [
  {
    num: "01",
    platform: "Adobe Commerce",
    sym: "Ac",
    platformColor: "#FF0000",
    bg: "#fff5f5",
    href: "/services/adobe-commerce",
    title: "Adobe Commerce & Magento Support",
    desc: "Certified backend engineering, security patching, performance optimisation, and custom module development for Adobe Commerce and Magento 2 stores.",
    tags: ["Security Patching", "Performance", "Custom Modules", "Retainers"],
    cta: "Explore Service",
  },
  {
    num: "02",
    platform: "Shopify",
    sym: "Sh",
    platformColor: "#96BF48",
    bg: "#f5fbee",
    href: "/services/shopify",
    title: "Shopify Store Launch & Development",
    desc: "End-to-end Shopify and Shopify Plus store builds for startups, growing brands, and enterprise clients. Custom themes, integrations, and conversion-focused development.",
    tags: ["Custom Theme", "Shopify Plus", "App Integration", "Startup to Enterprise"],
    cta: "Explore Service",
  },
  {
    num: "03",
    platform: "Migration",
    sym: "→",
    platformColor: "#F46F25",
    bg: "#fff8f0",
    href: "/services/migration",
    title: "Magento to Shopify Migration",
    desc: "Full platform migration handling all products, orders, customers, SEO redirects, and third-party integrations — with zero data loss and no downtime on launch day.",
    tags: ["Zero Data Loss", "SEO Protected", "No Downtime", "Fixed-Price Roadmap"],
    cta: "Explore Service",
  },
  {
    num: "04",
    platform: "Audit",
    sym: "Au",
    platformColor: "#0284C7",
    bg: "#f0f9ff",
    href: "/services/audits",
    title: "Technical Audit Service",
    desc: "Fixed-fee, expert-written audit of your ecommerce store. Security, performance, checkout path, or migration complexity — delivered as a prioritised PDF report in 5 days.",
    tags: ["From £499", "5 Day Turnaround", "Security", "Checkout Performance"],
    cta: "Order Audit",
  },
  {
    num: "05",
    platform: "Integration",
    sym: "⚙",
    platformColor: "#6366F1",
    bg: "#f5f3ff",
    href: "/services/integrations",
    title: "Enterprise Systems Integration",
    desc: "Custom middleware and API development connecting your ecommerce platform to ERP (SAP, Dynamics), CRM (Salesforce, HubSpot), and warehouse systems in real time.",
    tags: ["SAP", "Salesforce", "Custom API", "Real-Time Sync"],
    cta: "Explore Service",
  },
  {
    num: "06",
    platform: "White-Label",
    sym: "WL",
    platformColor: "#0284C7",
    bg: "#f0f9ff",
    href: "/services/white-label",
    title: "White-Label Agency Partnerships",
    desc: "Add a certified ecommerce engineering team to your agency roster invisibly. We deliver under your brand, on your timelines — so you never have to turn away profitable work.",
    tags: ["NDA Protected", "Your Brand", "Overflow Capacity", "Pre-Sales Support"],
    cta: "Become a Partner",
  },
];

export default function ServicesPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        paddingTop: 72, background: "#fff",
        borderBottom: "1px solid #e2e8f0",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236,115,35,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 24px 72px" }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#fef3e8", border: "1px solid rgba(236,115,35,0.2)",
              borderRadius: 100, padding: "6px 14px", marginBottom: 20,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ec7323", display: "inline-block" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#ec7323", letterSpacing: "0.06em" }}>
                6 SPECIALIST SERVICES
              </span>
            </div>
            <h1 style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 800, lineHeight: 1.1,
              letterSpacing: "-0.03em", color: "#0f172a", marginBottom: 20,
            }}>
              Every ecommerce challenge.<br />
              <span style={{ color: "#ec7323" }}>One engineering team.</span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#475569", maxWidth: 520 }}>
              From launching your first Shopify store to migrating a complex Adobe Commerce platform — we cover every stage of the ecommerce lifecycle with specialist engineers, not generalists.
            </p>
          </div>

          {/* Quick stats */}
          <div style={{ display: "flex", gap: 32, marginTop: 40, flexWrap: "wrap" }}>
            {[
              { value: "10+", label: "Years experience" },
              { value: "150+", label: "Projects delivered" },
              { value: "6", label: "Core service areas" },
              { value: "100%", label: "Code ownership" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#ec7323", letterSpacing: "-0.03em" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "#64748b", fontWeight: 500, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {services.map((s) => (
              <Link key={s.href} href={s.href} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "#fff",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: 16,
                  padding: "32px 36px",
                  display: "grid",
                  gridTemplateColumns: "64px 1fr auto",
                  gap: 28, alignItems: "center",
                  transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = s.platformColor + "60";
                  el.style.boxShadow = `0 12px 40px ${s.platformColor}15`;
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#e2e8f0";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
                className="service-row"
                >
                  {/* Number + icon */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: s.platformColor,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 14, fontWeight: 800, color: "#fff",
                    }}>{s.sym}</div>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8" }}>{s.num}</span>
                  </div>

                  {/* Content */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <div style={{
                        fontSize: 11, fontWeight: 600, color: s.platformColor,
                        background: s.bg, padding: "3px 10px", borderRadius: 100,
                      }}>{s.platform}</div>
                    </div>
                    <h3 style={{
                      fontSize: 18, fontWeight: 700, color: "#0f172a",
                      marginBottom: 8, letterSpacing: "-0.01em",
                    }}>{s.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: "#64748b", marginBottom: 14, maxWidth: 600 }}>{s.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {s.tags.map((tag) => (
                        <span key={tag} style={{
                          fontSize: 11, fontWeight: 500,
                          color: "#475569", background: "#f1f5f9",
                          padding: "3px 10px", borderRadius: 100,
                          border: "1px solid #e2e8f0",
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* CTA arrow */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: 8,
                    fontSize: 13, fontWeight: 600, color: s.platformColor,
                    whiteSpace: "nowrap",
                    padding: "10px 18px", borderRadius: 9,
                    border: `1.5px solid ${s.platformColor}40`,
                    background: s.bg,
                    transition: "all 0.2s",
                  }}
                  className="service-cta"
                  >
                    {s.cta} <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure section */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{
            background: "#0f172a", borderRadius: 20,
            padding: "56px 48px",
            display: "grid", gridTemplateColumns: "1fr auto",
            gap: 40, alignItems: "center",
            position: "relative", overflow: "hidden",
          }} className="cta-grid">
            <div style={{
              position: "absolute", top: -60, right: 200,
              width: 300, height: 300, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(236,115,35,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ position: "relative" }}>
              <SectionLabel text="Not Sure Which Service?" />
              <h2 style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 800, lineHeight: 1.2,
                color: "#fff", marginBottom: 14,
                letterSpacing: "-0.02em",
              }}>
                Talk to a senior engineer.<br />
                <span style={{ color: "#ec7323" }}>No sales pitch.</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#94a3b8", maxWidth: 480 }}>
                Tell us where your store is and what's frustrating you. We'll tell you exactly what we'd recommend — even if that recommendation is that you don't need us yet.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
              <a href="/contact" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "#ec7323", color: "#fff",
                padding: "14px 28px", borderRadius: 9,
                fontSize: 14, fontWeight: 600, textDecoration: "none",
                transition: "all 0.2s", whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#d4621a";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#ec7323";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}>
                Book Free Discovery Call <ArrowRight size={15} />
              </a>
              <a href="/services/audits" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                border: "1.5px solid rgba(255,255,255,0.15)", color: "#fff",
                padding: "14px 28px", borderRadius: 9,
                fontSize: 14, fontWeight: 600, textDecoration: "none",
                transition: "all 0.2s", whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#ec7323";
                (e.currentTarget as HTMLElement).style.color = "#ec7323";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}>
                Start With a £499 Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (max-width: 768px) {
          .service-row { grid-template-columns: 1fr !important; }
          .service-cta { display: none !important; }
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
