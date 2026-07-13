"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionLabel } from "@/components/services/ServiceComponents";
import { ArrowRight, BarChart3, ChevronRight, PackageCheck, RefreshCw, Rocket, Search, Settings, ShieldCheck, ShoppingBag } from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";

const cases = [
  { id: 1, platform: "Adobe Commerce", platformColor: "#FF0000", platformSym: "Ac", type: "Performance", bg: "#fff5f5", icon: ShoppingBag, client: "UK Fashion Retailer", title: "Checkout Load Cut by 53% — Adobe Commerce", problem: "8.4-second checkout losing 30% of shoppers before payment", result: "53% faster", resultLabel: "checkout speed", tags: ["Adobe Commerce", "Performance"] },
  { id: 2, platform: "Shopify Plus", platformColor: "#96BF48", platformSym: "Sh", type: "Migration", bg: "#f5fbee", icon: PackageCheck, client: "B2B Distributor", title: "40,000 Orders Migrated — Zero Downtime", problem: "Magento 1 end-of-life with 10 years of order history at risk", result: "0 hrs", resultLabel: "downtime on launch", tags: ["Shopify Plus", "Migration"] },
  { id: 3, platform: "SAP Integration", platformColor: "#6366F1", platformSym: "API", type: "Integration", bg: "#f5f3ff", icon: Settings, client: "Manufacturing Brand", title: "£80K/Year Saved via ERP Sync", problem: "Staff manually reconciling 1,200+ daily orders between Shopify and SAP", result: "£80K/yr", resultLabel: "manual cost removed", tags: ["Integration", "SAP"] },
  { id: 4, platform: "Adobe Commerce", platformColor: "#FF0000", platformSym: "Ac", type: "Support", bg: "#fff5f5", icon: ShieldCheck, client: "Health & Beauty Brand", title: "6 Critical Security Patches Applied — Live in 48h", problem: "6 outstanding Adobe security patches including a critical RCE vulnerability", result: "48hrs", resultLabel: "to fully patched & live", tags: ["Adobe Commerce", "Security"] },
  { id: 5, platform: "Shopify", platformColor: "#96BF48", platformSym: "Sh", type: "Build", bg: "#f5fbee", icon: Rocket, client: "UK DTC Startup", title: "First Store Launched — £120K Revenue Month 1", problem: "Founder needed a production-ready Shopify store in 3 weeks, no technical team", result: "£120K", resultLabel: "revenue in launch month", tags: ["Shopify", "Build"] },
  { id: 6, platform: "Salesforce Integration", platformColor: "#00A1E0", platformSym: "Sf", type: "Integration", bg: "#f0f9ff", icon: RefreshCw, client: "SaaS Company", title: "Shopify ↔ Salesforce CRM Sync in Real Time", problem: "No connection between Shopify order data and Salesforce — sales team flying blind", result: "<5s", resultLabel: "order-to-CRM sync time", tags: ["Integration", "Salesforce"] },
];

const allTags = ["All", "Adobe Commerce", "Shopify", "Shopify Plus", "Migration", "Performance", "Integration", "Build", "Security", "SAP", "Salesforce"];

export default function CaseStudiesPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? cases : cases.filter(c => c.tags.includes(active));

  return (
    <div style={{ background: "var(--color-white)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: 72, background: "var(--color-white)", borderBottom: "1px solid var(--color-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(var(--color-brand-rgb), 0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 24px 72px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
            <Link href="/" style={{ fontSize: 13, color: "var(--color-subtle)", textDecoration: "none", fontWeight: 500 }}>Home</Link>
            <ChevronRight size={13} color="var(--color-border-strong)" />
            <span style={{ fontSize: 13, color: "var(--color-ink)", fontWeight: 600 }}>Portfolio</span>
          </div>
          <div style={{ maxWidth: 640 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-brand-soft)", border: "1px solid rgba(var(--color-brand-rgb), 0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 20 }}>
              <BarChart3 size={14} color="var(--color-brand)" strokeWidth={2.2} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-brand)" }}>REAL RESULTS · REAL PROJECTS</span>
            </div>
            <h1 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--color-ink)", marginBottom: 20 }}>
              Proof in the numbers.<br />
              <span style={{ color: "var(--color-brand)" }}>Not the proposal.</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--color-copy)" }}>
              Every case study below shows the exact platform, the specific problem, what we built, and the measurable result. No vague &quot;improved performance&quot; — real metrics from real projects.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{ background: "var(--color-bg-soft)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>

          {/* Filter bar */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
            {allTags.map((tag) => (
              <button key={tag} onClick={() => setActive(tag)} style={{
                padding: "8px 16px", borderRadius: 100,
                fontSize: 12, fontWeight: 600, cursor: "pointer",
                border: `1.5px solid ${active === tag ? "var(--color-brand)" : "var(--color-border)"}`,
                background: active === tag ? "var(--color-brand)" : "var(--color-white)",
                color: active === tag ? "var(--color-white)" : "var(--color-muted)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { if (active !== tag) { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-brand)"; (e.currentTarget as HTMLElement).style.color = "var(--color-brand)"; } }}
              onMouseLeave={(e) => { if (active !== tag) { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"; (e.currentTarget as HTMLElement).style.color = "var(--color-muted)"; } }}>
                {tag}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="cases-grid">
            {filtered.map((c) => {
              const Icon = c.icon;
              return (
              <div key={c.id} style={{
                background: c.bg,
                border: `1.5px solid ${c.platformColor}20`,
                borderRadius: 16, padding: "28px 24px",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${c.platformColor}20`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 6, background: c.platformColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: "var(--color-white)" }}>{c.platformSym}</div>
                      <span style={{ fontSize: 11, fontWeight: 600, color: c.platformColor }}>{c.platform}</span>
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 600, color: "var(--color-subtle)", background: "var(--color-bg-muted)", padding: "2px 8px", borderRadius: 100, border: "1px solid var(--color-border)" }}>{c.type}</span>
                  </div>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: c.platformColor + "14", color: c.platformColor,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 12,
                  }}><Icon size={23} strokeWidth={2.2} /></div>
                  <div style={{ fontSize: 11, color: "var(--color-subtle)", fontWeight: 500, marginBottom: 6 }}>{c.client}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--color-ink)", lineHeight: 1.4, marginBottom: 10, letterSpacing: "-0.01em" }}>{c.title}</h3>
                  <p style={{ fontSize: 12, lineHeight: 1.65, color: "var(--color-muted)", marginBottom: 20, fontStyle: "italic" }}>&ldquo;{c.problem}&rdquo;</p>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", borderTop: `1px solid ${c.platformColor}20`, paddingTop: 16 }}>
                  <div>
                    <div style={{ fontSize: 28, fontWeight: 800, color: c.platformColor, letterSpacing: "-0.02em", lineHeight: 1 }}>{c.result}</div>
                    <div style={{ fontSize: 11, color: "var(--color-muted)", fontWeight: 500, marginTop: 3 }}>{c.resultLabel}</div>
                  </div>
                  <a href="#" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 600, color: c.platformColor, textDecoration: "none", transition: "gap 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = "5px")}>
                    Read <ArrowRight size={12} />
                  </a>
                </div>
              </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "64px 0", color: "var(--color-subtle)" }}>
              <Search size={36} color="var(--color-subtle)" style={{ marginBottom: 12 }} />
              <p style={{ fontSize: 15 }}>No portfolio found for &ldquo;{active}&rdquo;</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-white)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ background: "var(--color-ink)", borderRadius: 20, padding: "56px 48px", display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center", position: "relative", overflow: "hidden" }} className="cs-cta-grid">
            <div style={{ position: "absolute", top: -40, right: 160, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(var(--color-brand-rgb), 0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <SectionLabel text="Have a Similar Challenge?" />
              <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, lineHeight: 1.2, color: "var(--color-white)", marginBottom: 12, letterSpacing: "-0.02em" }}>
                Every case study started with<br />a 30-minute call.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--color-subtle)", maxWidth: 480 }}>
                Tell us your platform, your problem, and your timeline. We&apos;ll tell you exactly what we&apos;d do — and whether we&apos;re the right fit.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--color-brand)", color: "var(--color-white)", padding: "14px 28px", borderRadius: 9, fontSize: 14, fontWeight: 600, textDecoration: "none", transition: "all 0.2s", whiteSpace: "nowrap" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--color-brand-hover)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--color-brand)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                Book Free Discovery Call <ArrowRight size={15} />
              </Link>
              <Link href="/services/audits" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, border: "1.5px solid rgba(255, 255, 255, 0.15)", color: "var(--color-white)", padding: "14px 28px", borderRadius: 9, fontSize: 14, fontWeight: 600, textDecoration: "none", transition: "all 0.2s", whiteSpace: "nowrap" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-brand)"; (e.currentTarget as HTMLElement).style.color = "var(--color-brand)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.15)"; (e.currentTarget as HTMLElement).style.color = "var(--color-white)"; }}>
                Start With a £499 Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />

      <Footer />
      <style jsx>{`
        @media(max-width:900px){.cases-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:600px){.cases-grid{grid-template-columns:1fr!important}}
        @media(max-width:768px){.cs-cta-grid{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  );
}
