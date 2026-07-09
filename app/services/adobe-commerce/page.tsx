"use client";
import ServiceLayout from "@/components/services/ServiceLayout";
import {
  SectionLabel, SectionHeading, PainGrid, Checklist,
  PricingTable, FAQ, ProcessSteps, OutcomeCards, TwoCol,
} from "@/components/services/ServiceComponents";
import { AlertTriangle, Ban, Gauge, PhoneOff, Puzzle, ShieldAlert } from "lucide-react";

const COLOR = "#FF0000";
const BG = "#fff5f5";


export default function AdobeCommercePage() {
  return (
    <ServiceLayout
      badge="Adobe Commerce Certified"
      badgeColor={COLOR}
      badgeBg={BG}
      platformSymbol="Ac"
      platformColor={COLOR}
      heroTitle="Adobe Commerce & Magento"
      heroHighlight="Engineered to Stay Fast."
      heroSub="Certified backend engineering for Adobe Commerce and Magento 2. We stabilise platforms other agencies gave up on — security patching, performance, custom modules, and honest SLAs."
      ctaText="Book Free Consultation"
      secondaryCta="See Our Process"
      breadcrumb="Adobe Commerce & Magento"
    >
      {/* Pain points */}
      <section style={{ background: "var(--color-bg-soft)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel text="Common Pain Points" />
          <SectionHeading sub="These are the real issues we hear every week from merchants stuck on Magento and Adobe Commerce — and the exact problems we're built to fix.">
            Sound familiar?
          </SectionHeading>
          <PainGrid color={COLOR} items={[
            { icon: Gauge, title: "Slow checkout costing conversions", body: "Unoptimised queries, missing indices, and bloated extensions drag checkout to 6–12 seconds. Every second costs you sales." },
            { icon: ShieldAlert, title: "Security patches falling behind", body: "Adobe releases patches regularly. Missing them leaves your store vulnerable to exploit and non-compliant with PCI DSS." },
            { icon: AlertTriangle, title: "Extension conflicts breaking things", body: "Third-party extensions fighting each other cause cart errors, admin crashes, and broken product pages." },
            { icon: Ban, title: "No staging or deployment process", body: "Changes pushed directly to live. No rollback plan. One bad deploy brings the whole store down." },
            { icon: PhoneOff, title: "Previous agency went silent", body: "Mid-project handoffs with no documentation, undocumented code, and zero knowledge transfer." },
            { icon: Puzzle, title: "Custom module technical debt", body: "Old modules written by multiple developers with no standards, no tests, and no one who knows how they work." },
          ]} />
        </div>
      </section>

      {/* What's included */}
      <section style={{ background: "var(--color-white)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <TwoCol
            left={
              <>
                <SectionLabel text="What's Included" />
                <SectionHeading sub="Every retainer covers the same core baseline. No surprises, no scope creep — just clear deliverables from the start.">
                  What you get on every engagement
                </SectionHeading>
                <Checklist color={COLOR} items={[
                  "Adobe Security & Core Patch management — every release",
                  "Custom module development and extension builds",
                  "Database query optimisation and index rebuilding",
                  "Varnish / Redis / FPC caching layer setup and tuning",
                  "Staging environment management and deployment pipeline",
                  "Monthly performance report with Core Web Vitals tracking",
                  "24-hour response SLA with escalation path to senior engineer",
                  "Code review on all custom work before it goes live",
                  "Full documentation of every change we make",
                ]} />
              </>
            }
            right={
              <div style={{ background: "var(--color-ink)", borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 11, color: "var(--color-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>
                  Typical project outcomes
                </div>
                {[
                  { label: "Checkout load time", before: "8.4s", after: "1.1s", color: COLOR },
                  { label: "Core Web Vitals LCP", before: "Fail", after: "Pass", color: "var(--color-success)" },
                  { label: "Security patches", before: "6 behind", after: "Current", color: "var(--color-brand)" },
                  { label: "Extension conflicts", before: "12 active", after: "0", color: "#0284c7" },
                ].map((r) => (
                  <div key={r.label} style={{ marginBottom: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontSize: 12, color: "var(--color-subtle)" }}>{r.label}</span>
                      <div style={{ display: "flex", gap: 8 }}>
                        <span style={{ fontSize: 12, color: "var(--color-copy)", textDecoration: "line-through" }}>{r.before}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: r.color }}>{r.after}</span>
                      </div>
                    </div>
                    <div style={{ height: 5, background: "var(--color-ink-2)", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: "85%", background: r.color, borderRadius: 3 }} />
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid var(--color-ink-2)", fontSize: 12, color: "var(--color-muted)" }}>
                  Average results across 40+ Adobe Commerce retainer clients
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "var(--color-bg-soft)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <TwoCol
            left={
              <>
                <SectionLabel text="Our Process" />
                <SectionHeading sub="How we onboard a new Adobe Commerce client and start delivering value in week one.">
                  From first call to first fix
                </SectionHeading>
                <ProcessSteps color={COLOR} steps={[
                  { num: "1", title: "Discovery & codebase audit", body: "We review your current stack, identify the highest-risk issues, and produce a prioritised fix list before the retainer even starts." },
                  { num: "2", title: "Staging environment setup", body: "If you don't have one, we set it up. No changes ever go live without being tested in a mirrored environment first." },
                  { num: "3", title: "Security & performance baseline", body: "We patch all outstanding security vulnerabilities and fix the top three performance issues in the first sprint." },
                  { num: "4", title: "Ongoing sprint delivery", body: "2-week sprints with a defined scope, a delivery report, and a review call. You always know what's happening." },
                  { num: "5", title: "Monthly performance review", body: "Core Web Vitals, uptime, patch status, and a clear backlog for the next period — delivered as a written report." },
                ]} />
              </>
            }
            right={
              <div>
                <SectionLabel text="Outcomes We Deliver" />
                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--color-ink)", marginBottom: 8 }}>Numbers from real client projects</h3>
                </div>
                <OutcomeCards color={COLOR} items={[
                  { metric: "53%", label: "Faster checkout", desc: "Average page speed improvement on checkout after first sprint" },
                  { metric: "0", label: "Security gaps", desc: "Clients on retainer have zero outstanding critical patches" },
                  { metric: "40+", label: "Clients", desc: "Active Adobe Commerce and Magento retainer clients" },
                  { metric: "24h", label: "Response SLA", desc: "Maximum response time on all support tickets, guaranteed" },
                ]} />
              </div>
            }
            reverse
          />
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: "var(--color-white)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <SectionLabel text="Retainer Packages" />
            <SectionHeading>Choose your support level</SectionHeading>
          </div>
          <PricingTable color={COLOR} tiers={[
            {
              name: "Essential Support",
              price: "£1,200",
              period: "/month",
              desc: "Core security and stability for SME stores that need reliable uptime and patching.",
              features: [
                "8 hours development per month",
                "Security patch management",
                "Monthly performance report",
                "48-hour ticket response SLA",
                "Staging environment access",
              ],
              cta: "Get Started",
            },
            {
              name: "Growth Engineering",
              price: "£2,800",
              period: "/month",
              desc: "Active development alongside support. For stores investing in new features alongside stability.",
              features: [
                "20 hours development per month",
                "Custom module builds included",
                "Core Web Vitals monitoring",
                "24-hour response SLA",
                "Dedicated senior engineer",
                "Sprint planning calls included",
              ],
              cta: "Most Popular Choice",
              highlight: true,
            },
            {
              name: "Enterprise Scale",
              price: "Custom",
              desc: "High-volume stores with complex requirements, strict SLAs, and dedicated team allocation.",
              features: [
                "Dedicated engineer allocation",
                "4-hour critical response SLA",
                "Multi-store support",
                "Full CI/CD pipeline management",
                "Architecture consulting included",
                "Quarterly roadmap sessions",
              ],
              cta: "Let's Talk",
            },
          ]} />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--color-bg-soft)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <SectionLabel text="FAQ" />
            <SectionHeading>Questions we hear most</SectionHeading>
          </div>
          <FAQ items={[
            { q: "Do we own the code your team writes?", a: "Yes, always. Every line of custom code written during your engagement belongs to you, with no licensing restrictions. We document it fully and hand it over as part of every sprint." },
            { q: "What happens if we need to cancel the retainer?", a: "There is a 30-day notice period on all retainer plans. We will produce a full handover document covering everything we've worked on, so your next team can pick it up without confusion." },
            { q: "Can you work with our existing internal developer?", a: "Absolutely — in fact we prefer it. We can work alongside your in-house resource, handle code reviews for their work, and focus our time on the complex backend tasks that take the most time." },
            { q: "How quickly can you start?", a: "Typically within 5–7 working days of signing. We run a codebase discovery call in the first week, and the first sprint starts in week two. Security patches are often applied in the first 48 hours." },
            { q: "Do you work with Adobe Commerce Cloud (Magento Cloud)?", a: "Yes. We work with both self-hosted Magento 2 and Adobe Commerce Cloud. Our team includes engineers experienced with the Cloud ECE tooling, environment management, and the Commerce Cloud architecture." },
          ]} />
        </div>
      </section>
    </ServiceLayout>
  );
}
