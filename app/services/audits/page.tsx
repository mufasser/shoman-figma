"use client";
import { useState } from "react";
import ServiceLayout from "@/components/services/ServiceLayout";
import {
  SectionLabel, SectionHeading, Checklist,
  FAQ, OutcomeCards, TwoCol,
} from "@/components/services/ServiceComponents";
import { ArrowRight, Check } from "lucide-react";

const COLOR = "#0284C7";
const BG = "#f0f9ff";

const auditTypes = [
  {
    id: "security",
    label: "Security & Core Health",
    icon: "🔒",
    title: "Security & Core Health Check",
    desc: "A comprehensive review of your store's security posture, patch status, and platform stability. Ideal before a major marketing push or when you suspect vulnerabilities.",
    includes: [
      "Outstanding security patch audit",
      "Admin user permissions review",
      "Third-party extension risk assessment",
      "SSL/TLS and HTTPS configuration",
      "PCI DSS compliance check",
      "Database access controls review",
      "Error log analysis (last 90 days)",
      "Prioritised remediation checklist",
    ],
  },
  {
    id: "migration",
    label: "Migration Complexity",
    icon: "🔀",
    title: "Migration Complexity Assessment",
    desc: "Understand exactly what a platform migration will involve before committing. We assess your data volume, custom features, and integrations and tell you the real cost and timeline.",
    includes: [
      "Data volume analysis (products, orders, customers)",
      "Custom feature inventory",
      "Third-party integration mapping",
      "SEO risk assessment",
      "Shopify compatibility check",
      "Feature gap identification",
      "Migration timeline estimate",
      "Written migration plan document",
    ],
  },
  {
    id: "checkout",
    label: "Checkout & Performance",
    icon: "⚡",
    title: "Checkout & Payment Path Optimisation",
    desc: "A detailed analysis of your checkout funnel and payment path. We identify exactly where users are dropping off and give you a prioritised list of fixes to implement.",
    includes: [
      "Full checkout flow review",
      "Core Web Vitals measurement (LCP, CLS, FID)",
      "Page speed waterfall analysis",
      "Mobile checkout UX review",
      "Payment method coverage check",
      "Cart abandonment trigger analysis",
      "A/B test recommendations",
      "Prioritised fix list with estimated impact",
    ],
  },
];

export default function AuditsPage() {
  const [activeTab, setActiveTab] = useState("security");
  const active = auditTypes.find((a) => a.id === activeTab)!;

  return (
    <ServiceLayout
      badge="Fixed-Fee Service"
      badgeColor={COLOR}
      badgeBg={BG}
      platformSymbol="Au"
      platformColor={COLOR}
      heroTitle="Technical Audit"
      heroHighlight="Service."
      heroSub="Get a clear, prioritised picture of your store's health before investing in new features or campaigns. Expert-written, actionable — not an automated scan report. Delivered in 5 business days."
      ctaText="Order Your Audit — From £499"
      secondaryCta="See What's Included"
      breadcrumb="Technical Audits"
    >
      {/* Audit type tabs */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel text="Audit Types" />
          <SectionHeading sub="Three specialist audit types. Choose the one that matches your current need — or order all three.">
            Three audits, three different problems solved
          </SectionHeading>

          {/* Tab switcher */}
          <div style={{
            display: "flex", gap: 8, marginBottom: 32,
            background: "#fff", border: "1px solid #e2e8f0",
            borderRadius: 12, padding: 6, width: "fit-content",
          }} className="tabs-wrap">
            {auditTypes.map((a) => (
              <button key={a.id} onClick={() => setActiveTab(a.id)} style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "10px 18px", borderRadius: 8, border: "none",
                fontSize: 13, fontWeight: 600, cursor: "pointer",
                background: activeTab === a.id ? COLOR : "transparent",
                color: activeTab === a.id ? "#fff" : "#64748b",
                transition: "all 0.2s",
              }}>
                <span>{a.icon}</span> {a.label}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }} className="tab-grid">
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: BG, border: `1px solid ${COLOR}30`,
                borderRadius: 100, padding: "5px 14px", marginBottom: 16,
              }}>
                <span style={{ fontSize: 16 }}>{active.icon}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: COLOR }}>{active.label}</span>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 14, letterSpacing: "-0.02em" }}>{active.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#475569", marginBottom: 28 }}>{active.desc}</p>
              <a href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: COLOR, color: "#fff",
                padding: "12px 22px", borderRadius: 9,
                fontSize: 14, fontWeight: 600, textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0369a1";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = COLOR;
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}>
                Order This Audit <ArrowRight size={15} />
              </a>
            </div>
            <div style={{
              background: "#fff", border: "1.5px solid #e2e8f0",
              borderTop: `4px solid ${COLOR}`,
              borderRadius: 14, padding: 28,
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
                What&apos;s reviewed
              </div>
              <Checklist color={COLOR} items={active.includes} />
            </div>
          </div>

          <style jsx>{`
            @media(max-width:768px){
              .tab-grid{grid-template-columns:1fr!important}
              .tabs-wrap{flex-direction:column;width:100%!important}
            }
          `}</style>
        </div>
      </section>

      {/* Sample report */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <TwoCol
            left={
              <>
                <SectionLabel text="What You Receive" />
                <SectionHeading sub="Not an automated scan. A senior engineer writes every audit by hand, with real findings and specific recommendations.">
                  An actionable PDF report — not a dashboard
                </SectionHeading>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
                  {[
                    { icon: "📋", title: "Executive summary", body: "A clear top-10 priority list written for both technical and non-technical readers. You know exactly what to fix first and why." },
                    { icon: "🔬", title: "Detailed findings", body: "Every issue documented with the specific file, query, or configuration causing it — not a generic description." },
                    { icon: "🛠️", title: "Remediation guidance", body: "For each issue: what to fix, how to fix it, and an estimated effort level. You can hand this directly to any developer." },
                    { icon: "📈", title: "Impact scoring", body: "Each finding is scored by severity (Critical / High / Medium / Low) and expected business impact if left unfixed." },
                  ].map((f) => (
                    <div key={f.title} style={{ display: "flex", gap: 14 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: BG, display: "flex", alignItems: "center",
                        justifyContent: "center", fontSize: 18, flexShrink: 0,
                      }}>{f.icon}</div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>{f.title}</div>
                        <div style={{ fontSize: 13, lineHeight: 1.65, color: "#64748b" }}>{f.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            }
            right={
              <div style={{ background: "#0f172a", borderRadius: 16, overflow: "hidden" }}>
                {/* Mock PDF report preview */}
                <div style={{ background: COLOR, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>Audit Report — example.com</span>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 11 }}>5 pages · PDF</span>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 11, color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Executive Summary</div>
                    {[
                      { label: "Critical issues", count: 2, color: "#ef4444" },
                      { label: "High priority", count: 5, color: "#f97316" },
                      { label: "Medium priority", count: 8, color: "#eab308" },
                      { label: "Low priority", count: 12, color: "#10b981" },
                    ].map((s) => (
                      <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                        <span style={{ fontSize: 12, color: "#94a3b8" }}>{s.label}</span>
                        <span style={{
                          fontSize: 12, fontWeight: 700, color: s.color,
                          background: s.color + "20", padding: "2px 10px", borderRadius: 100,
                        }}>{s.count} found</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ borderTop: "1px solid #1e293b", paddingTop: 18 }}>
                    <div style={{ fontSize: 11, color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Top Priority Findings</div>
                    {[
                      { title: "Missing security patch SUPEE-11346", severity: "CRITICAL", color: "#ef4444" },
                      { title: "Checkout query running 4.2s without index", severity: "CRITICAL", color: "#ef4444" },
                      { title: "Admin session timeout not configured", severity: "HIGH", color: "#f97316" },
                    ].map((f) => (
                      <div key={f.title} style={{ marginBottom: 10, padding: "10px 12px", background: "#162032", borderRadius: 8 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                          <span style={{ fontSize: 12, color: "#e2e8f0", lineHeight: 1.4 }}>{f.title}</span>
                          <span style={{
                            fontSize: 9, fontWeight: 700, color: f.color,
                            background: f.color + "20", padding: "2px 7px", borderRadius: 100,
                            whiteSpace: "nowrap", alignSelf: "flex-start",
                          }}>{f.severity}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 16, fontSize: 11, color: "#475569", textAlign: "center" }}>
                    This is a preview. Real reports contain 20–40 detailed findings.
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <SectionLabel text="Pricing" />
            <SectionHeading>Fixed, transparent pricing</SectionHeading>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="price-grid">
            {[
              {
                name: "Self-Audit Checklist",
                price: "Free",
                desc: "A downloadable checklist covering the top 25 audit points. Run it yourself or share with your developer.",
                features: ["25-point checklist PDF", "Security quick-check", "Performance basics", "No expert review"],
                cta: "Download Free",
                highlight: false,
              },
              {
                name: "Standard Audit",
                price: "£499",
                period: "fixed fee",
                desc: "A full expert audit of one focus area. Delivered as a prioritised PDF report in 5 business days.",
                features: [
                  "Choose one audit type",
                  "Senior engineer review",
                  "Prioritised findings PDF",
                  "Remediation guidance included",
                  "5 business day delivery",
                  "30-min review call included",
                ],
                cta: "Order Audit",
                highlight: true,
              },
              {
                name: "Deep Audit",
                price: "Custom",
                desc: "All three audit types combined, with a full architecture review and a 90-minute strategy session.",
                features: [
                  "All three audit types",
                  "Full architecture review",
                  "90-min strategy call",
                  "12-month roadmap included",
                  "7 business day delivery",
                  "Ongoing advisory option",
                ],
                cta: "Get a Quote",
                highlight: false,
              },
            ].map((tier) => (
              <div key={tier.name} style={{
                background: tier.highlight ? "#0f172a" : "#fff",
                border: tier.highlight ? `2px solid ${COLOR}` : "1.5px solid #e2e8f0",
                borderRadius: 16, padding: "28px 24px",
                position: "relative",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${COLOR}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}>
                {tier.highlight && (
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    background: COLOR, color: "#fff",
                    fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 100,
                  }}>MOST ORDERED</div>
                )}
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: tier.highlight ? COLOR : "#94a3b8", marginBottom: 10 }}>{tier.name}</div>
                <div style={{ fontSize: 36, fontWeight: 800, color: tier.highlight ? "#fff" : "#0f172a", letterSpacing: "-0.03em", marginBottom: 4 }}>{tier.price}</div>
                {(tier as { period?: string }).period && <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8 }}>{(tier as { period?: string }).period}</div>}
                <p style={{ fontSize: 13, lineHeight: 1.65, color: tier.highlight ? "#94a3b8" : "#64748b", marginBottom: 24, minHeight: 52 }}>{tier.desc}</p>
                <div style={{ borderTop: `1px solid ${tier.highlight ? "#1e293b" : "#f1f5f9"}`, paddingTop: 20, marginBottom: 24 }}>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {tier.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <span style={{ width: 18, height: 18, borderRadius: "50%", background: COLOR + "20", border: `1.5px solid ${COLOR}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                          <Check size={10} color={COLOR} strokeWidth={2.5} />
                        </span>
                        <span style={{ fontSize: 13, color: tier.highlight ? "#cbd5e1" : "#475569", lineHeight: 1.5 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="/contact" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  width: "100%", padding: "12px 0", borderRadius: 9,
                  fontSize: 14, fontWeight: 600, textDecoration: "none",
                  background: tier.highlight ? COLOR : "transparent",
                  color: tier.highlight ? "#fff" : COLOR,
                  border: `1.5px solid ${COLOR}`,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!tier.highlight) {
                    (e.currentTarget as HTMLElement).style.background = COLOR;
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!tier.highlight) {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = COLOR;
                  }
                }}>
                  {tier.cta} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
          <style jsx>{`@media(max-width:768px){.price-grid{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ background: "#fff", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel text="Audit Outcomes" />
          <SectionHeading sub="What clients do with their audit results.">After the audit</SectionHeading>
          <OutcomeCards color={COLOR} items={[
            { metric: "92%", label: "Find critical issues", desc: "Of audited stores have at least one critical finding they weren't aware of" },
            { metric: "£499", label: "Fixed fee", desc: "Standard audit. No surprises, no scope creep, no hourly billing" },
            { metric: "5 days", label: "Turnaround", desc: "From payment to PDF delivery. Booked in within 48 hours of order" },
            { metric: "70%", label: "Become clients", desc: "Of audit clients go on to a development retainer or project after their report" },
          ]} />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <SectionLabel text="FAQ" />
            <SectionHeading>Audit questions answered</SectionHeading>
          </div>
          <FAQ items={[
            { q: "Is this an automated scan or a real expert review?", a: "It's a real expert review. Every audit is written by a senior engineer who actually reads your code, checks your configuration, and writes specific findings — not a report generated by a tool like Screaming Frog or GTmetrix. You can tell the difference immediately." },
            { q: "What access do you need from us?", a: "For the Security & Core Health audit and Checkout audits, we need read-only admin access to your platform and ideally codebase access (Git or SFTP). For the Migration Complexity audit, we need admin access and ideally a database dump." },
            { q: "What happens after the audit?", a: "You receive the report, we schedule a 30-minute review call to walk through the top findings, and you're free to implement with your own team or ask us to handle the remediation work. There's no pressure to engage further." },
            { q: "Can the audit findings be fixed by our own developer?", a: "Yes — that's part of the value. The remediation guidance is written specifically so that any competent Magento or Shopify developer can pick it up and implement it, even if they didn't write the code originally." },
          ]} />
        </div>
      </section>
    </ServiceLayout>
  );
}
