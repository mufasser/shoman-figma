"use client";
import { useState } from "react";
import ServiceLayout from "@/components/services/ServiceLayout";
import {
  SectionLabel, SectionHeading, Checklist,
  FAQ, OutcomeCards, PricingTable, TwoCol,
} from "@/components/services/ServiceComponents";
import { ArrowRight, ClipboardList, Microscope, ShieldCheck, Shuffle, TrendingUp, Wrench, Zap } from "lucide-react";
import type { CSSProperties } from "react";

const COLOR = "#0284C7";
const BG = "#f0f9ff";

const auditTypes = [
  {
    id: "security",
    label: "Security & Core Health",
    icon: ShieldCheck,
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
    icon: Shuffle,
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
    icon: Zap,
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
  const ActiveIcon = active.icon;

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
      heroImage="/assets/services/Technical-Audit-Service-hero-section.png"
      heroImageAlt="Technical ecommerce audit and performance analysis"
      heroImageWidth={978}
      heroImageHeight={856}
      standardized
    >
      {/* Audit type tabs */}
      <section className="service-content-section service-content-section--soft">
        <div className="service-content-container">
          <SectionLabel text="Audit Types" />
          <SectionHeading sub="Three specialist audit types. Choose the one that matches your current need — or order all three.">
            Three audits, three different problems solved
          </SectionHeading>

          {/* Tab switcher */}
          <div className="audit-tabs">
            {auditTypes.map((a) => {
              const Icon = a.icon;
              return (
              <button className={activeTab === a.id ? "is-active" : undefined} key={a.id} onClick={() => setActiveTab(a.id)}>
                <Icon size={15} strokeWidth={2.2} /> {a.label}
              </button>
              );
            })}
          </div>

          {/* Active tab content */}
          <div className="audit-tab-panel">
            <div>
              <div className="audit-tab-panel__badge">
                <ActiveIcon size={15} strokeWidth={2.2} />
                <span>{active.label}</span>
              </div>
              <h3>{active.title}</h3>
              <p>{active.desc}</p>
              <a className="audit-tab-panel__cta" href="/contact-us">
                Order This Audit <ArrowRight size={15} />
              </a>
            </div>
            <div className="audit-tab-panel__review">
              <div className="audit-tab-panel__review-title">
                What&apos;s reviewed
              </div>
              <Checklist color={COLOR} items={active.includes} />
            </div>
          </div>

        </div>
      </section>

      {/* Sample report */}
      <section className="service-content-section">
        <div className="service-content-container">
          <TwoCol
            left={
              <>
                <SectionLabel text="What You Receive" />
                <SectionHeading sub="Not an automated scan. A senior engineer writes every audit by hand, with real findings and specific recommendations.">
                  An actionable PDF report — not a dashboard
                </SectionHeading>
                <div className="audit-deliverables">
                  {[
                    { icon: ClipboardList, title: "Executive summary", body: "A clear top-10 priority list written for both technical and non-technical readers. You know exactly what to fix first and why." },
                    { icon: Microscope, title: "Detailed findings", body: "Every issue documented with the specific file, query, or configuration causing it — not a generic description." },
                    { icon: Wrench, title: "Remediation guidance", body: "For each issue: what to fix, how to fix it, and an estimated effort level. You can hand this directly to any developer." },
                    { icon: TrendingUp, title: "Impact scoring", body: "Each finding is scored by severity (Critical / High / Medium / Low) and expected business impact if left unfixed." },
                  ].map((f) => {
                    const Icon = f.icon;
                    return (
                    <div className="audit-deliverable" key={f.title}>
                      <div className="audit-deliverable__icon"><Icon size={19} strokeWidth={2.2} /></div>
                      <div>
                        <div className="audit-deliverable__title">{f.title}</div>
                        <div className="audit-deliverable__body">{f.body}</div>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </>
            }
            right={
              <div className="audit-report">
                {/* Mock PDF report preview */}
                <div className="audit-report__header">
                  <span>Audit Report — example.com</span>
                  <small>5 pages · PDF</small>
                </div>
                <div className="audit-report__body">
                  <div className="audit-report__summary">
                    <div className="audit-report__section-title">Executive Summary</div>
                    {[
                      { label: "Critical issues", count: 2, color: "#ef4444" },
                      { label: "High priority", count: 5, color: "#f97316" },
                      { label: "Medium priority", count: 8, color: "#eab308" },
                      { label: "Low priority", count: 12, color: "#10b981" },
                    ].map((s) => (
                      <div className="audit-report__summary-row" key={s.label}>
                        <span>{s.label}</span>
                        <strong style={{ "--status-color": s.color } as CSSProperties}>{s.count} found</strong>
                      </div>
                    ))}
                  </div>
                  <div className="audit-report__findings">
                    <div className="audit-report__section-title">Top Priority Findings</div>
                    {[
                      { title: "Missing security patch SUPEE-11346", severity: "CRITICAL", color: "#ef4444" },
                      { title: "Checkout query running 4.2s without index", severity: "CRITICAL", color: "#ef4444" },
                      { title: "Admin session timeout not configured", severity: "HIGH", color: "#f97316" },
                    ].map((f) => (
                      <div className="audit-report__finding" key={f.title}>
                        <div>
                          <span>{f.title}</span>
                          <strong style={{ "--status-color": f.color } as CSSProperties}>{f.severity}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="audit-report__note">
                    This is a preview. Real reports contain 20–40 detailed findings.
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="service-content-section service-content-section--soft">
        <div className="service-content-container">
          <div className="service-centered-heading">
            <SectionLabel text="Pricing" />
            <SectionHeading>Fixed, transparent pricing</SectionHeading>
          </div>
          <PricingTable
            color={COLOR}
            popularLabel="MOST ORDERED"
            tiers={[
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
            ]}
          />
        </div>
      </section>

      {/* Outcomes */}
      <section className="service-content-section">
        <div className="service-content-container">
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
      <section className="service-content-section service-content-section--soft">
        <div className="service-content-container service-content-container--narrow">
          <div className="service-centered-heading">
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
      {/* <FinalCTA /> */}
    </ServiceLayout>
    
  );
}
