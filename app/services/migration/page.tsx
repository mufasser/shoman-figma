"use client";
import ServiceLayout from "@/components/services/ServiceLayout";
import {
  SectionLabel, SectionHeading, Checklist,
  PricingTable, FAQ, ProcessSteps, OutcomeCards, TwoCol,
} from "@/components/services/ServiceComponents";
import { Clock3, Search, ShieldCheck } from "lucide-react";

const COLOR = "#F46F25";
const BG = "#fff8f0";


export default function MigrationPage() {
  return (
    <ServiceLayout
      badge="Migration Specialists"
      badgeColor={COLOR}
      badgeBg={BG}
      platformSymbol="→"
      platformColor={COLOR}
      heroTitle="Magento → Shopify"
      heroHighlight="Migration. Done Right."
      heroSub="We move your entire store — products, orders, customers, SEO rankings, and integrations — from Magento to Shopify with zero data loss and no downtime on launch day."
      ctaText="Start With a Roadmap"
      secondaryCta="See the Process"
      breadcrumb="Migration"
    >
      {/* Guarantees */}
      <section style={{ background: "var(--color-bg-soft)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel text="Our Migration Guarantees" />
          <SectionHeading sub="Every migration we run comes with three non-negotiable commitments. We've delivered on all three across 40+ migrations.">
            Three promises we always keep
          </SectionHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="three-col">
            {[
              {
                icon: ShieldCheck,
                title: "Zero data loss",
                body: "Every product, variant, order, customer record, and piece of metadata is transferred and validated against the source. We run automated checks before go-live.",
                metric: "100%",
                metricLabel: "data accuracy rate",
              },
              {
                icon: Search,
                title: "SEO rankings protected",
                body: "Full URL redirect mapping, meta data transfer, canonical handling, and structured data rebuild. We don't just move your content — we protect what it's worth to you in organic traffic.",
                metric: "0",
                metricLabel: "ranking drops on average",
              },
              {
                icon: Clock3,
                title: "No launch downtime",
                body: "We run a live migration on a staging URL, validate everything, then switch DNS with a planned cutover window. Average downtime on launch day is under 15 minutes.",
                metric: "<15min",
                metricLabel: "average cutover window",
              },
            ].map((c) => {
              const Icon = c.icon;

              return (
              <div key={c.title} style={{
                background: "var(--color-white)",
                border: "1.5px solid var(--color-border)",
                borderTop: `4px solid ${COLOR}`,
                borderRadius: 14, padding: "28px 24px",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 36px ${COLOR}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}>
                <div style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  background: BG,
                  color: COLOR,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                }}>
                  <Icon size={22} strokeWidth={2.1} />
                </div>
                <div style={{ fontSize: 36, fontWeight: 800, color: COLOR, letterSpacing: "-0.03em", marginBottom: 2 }}>{c.metric}</div>
                <div style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 14, fontWeight: 500 }}>{c.metricLabel}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-ink)", marginBottom: 8 }}>{c.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: "var(--color-muted)" }}>{c.body}</div>
              </div>
              );
            })}
            <style jsx>{`@media(max-width:768px){.three-col{grid-template-columns:1fr!important}}`}</style>
          </div>
        </div>
      </section>

      {/* Migration pipeline */}
      <section style={{ background: "var(--color-white)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <TwoCol
            left={
              <>
                <SectionLabel text="Migration Process" />
                <SectionHeading sub="Our structured 7-stage migration process has been refined across 40+ Magento to Shopify projects. No shortcuts.">
                  The migration pipeline
                </SectionHeading>
                <ProcessSteps color={COLOR} steps={[
                  { num: "1", title: "Discovery & Migration Roadmap", body: "We audit your Magento setup — data volume, custom features, extensions, and integrations — and produce a written migration plan with timeline and cost. This is available as a fixed-fee standalone service." },
                  { num: "2", title: "Data extraction & cleaning", body: "We extract products, variants, orders, customers, and metadata from Magento. Duplicates are removed, data is normalised, and we flag any records that need review before import." },
                  { num: "3", title: "Feature mapping", body: "Every Magento feature — layered navigation, customer groups, price rules, custom attributes — is mapped to its Shopify equivalent or a custom-built replacement." },
                  { num: "4", title: "Shopify build & data import", body: "We build the new Shopify store and import all data in structured phases. Products first, then customers, then orders, with validation checks at each stage." },
                  { num: "5", title: "API & integration re-build", body: "All third-party integrations — ERPs, CRMs, payment gateways, email platforms — are rebuilt or reconnected to the new Shopify store." },
                  { num: "6", title: "Redirect mapping & SEO audit", body: "Every old URL gets a 301 redirect. We validate all redirects, check canonical tags, rebuild structured data, and confirm no SEO signals are lost." },
                  { num: "7", title: "UAT, cutover & launch monitoring", body: "Full user acceptance testing on staging. DNS cutover with a planned maintenance window. We monitor live for 72 hours post-launch and respond to any issues immediately." },
                ]} />
              </>
            }
            right={
              <>
                <SectionLabel text="What's Included" />
                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--color-ink)", marginBottom: 8 }}>Everything in a full migration</h3>
                </div>
                <Checklist color={COLOR} items={[
                  "Full product, variant, and metafield transfer",
                  "All order history with status and metadata",
                  "Customer accounts with order associations",
                  "Custom pricing rules and discount codes",
                  "SEO meta titles, descriptions, and alt text",
                  "URL redirect mapping (every legacy URL)",
                  "Structured data and schema rebuild",
                  "Third-party integration reconnection",
                  "Payment and tax configuration",
                  "Post-migration monitoring report",
                ]} />
                <div style={{
                  marginTop: 28, background: BG,
                  border: `1px solid ${COLOR}30`,
                  borderRadius: 12, padding: "20px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: COLOR, marginBottom: 6 }}>
                    <Search size={15} strokeWidth={2.2} />
                    Migration Roadmap — Fixed Fee
                  </div>
                  <div style={{ fontSize: 13, lineHeight: 1.65, color: "var(--color-copy)" }}>
                    Not ready to commit to a full migration? Start with our fixed-fee Migration Roadmap. We audit your Magento store and deliver a written plan covering scope, complexity, timeline, and cost — before you sign anything.
                  </div>
                  <div style={{ marginTop: 12, fontSize: 14, fontWeight: 700, color: COLOR }}>From £499 · 5 business day turnaround</div>
                </div>
              </>
            }
          />
        </div>
      </section>

      {/* Why switch */}
      <section style={{ background: "var(--color-bg-soft)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel text="Magento vs Shopify" />
          <SectionHeading sub="Why businesses make the switch — and what they gain on the other side.">
            The real reasons brands migrate
          </SectionHeading>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr style={{ background: "var(--color-ink)" }}>
                  <th style={{ padding: "14px 20px", textAlign: "left", fontSize: 12, fontWeight: 600, color: "var(--color-subtle)", letterSpacing: "0.06em" }}>Factor</th>
                  <th style={{ padding: "14px 20px", textAlign: "left", fontSize: 12, fontWeight: 600, color: "#F46F25", letterSpacing: "0.06em" }}>Magento 2</th>
                  <th style={{ padding: "14px 20px", textAlign: "left", fontSize: 12, fontWeight: 600, color: "#96BF48", letterSpacing: "0.06em" }}>Shopify / Plus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Server management", "Self-managed or Managed Cloud", "Fully hosted — no server ops"],
                  ["Update complexity", "Complex patch process, high risk", "Automatic platform updates"],
                  ["Checkout uptime", "Dependent on your server", "99.99% SLA guaranteed by Shopify"],
                  ["Extension ecosystem", "Thousands, inconsistent quality", "Curated app store, reviewed apps"],
                  ["Developer availability", "Magento devs scarce and expensive", "Large Shopify partner ecosystem"],
                  ["Total cost of ownership", "High — server + dev + patches", "Predictable monthly subscription"],
                  ["Time to market (new features)", "Weeks to months", "Days to weeks"],
                  ["B2B capabilities (Plus)", "Available but complex", "Native B2B features in Shopify Plus"],
                ].map(([factor, magento, shopify], i) => (
                  <tr key={factor} style={{ background: i % 2 === 0 ? "var(--color-white)" : "var(--color-bg-soft)", borderBottom: "1px solid var(--color-border)" }}>
                    <td style={{ padding: "14px 20px", fontSize: 13, fontWeight: 600, color: "var(--color-ink)" }}>{factor}</td>
                    <td style={{ padding: "14px 20px", fontSize: 13, color: "var(--color-muted)" }}>{magento}</td>
                    <td style={{ padding: "14px 20px", fontSize: 13, color: "var(--color-success)", fontWeight: 500 }}>✓ {shopify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ background: "var(--color-white)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel text="Migration Outcomes" />
          <SectionHeading sub="Results from real client migrations — not estimates.">Numbers from real projects</SectionHeading>
          <OutcomeCards color={COLOR} items={[
            { metric: "40+", label: "Migrations completed", desc: "Magento 1, Magento 2, and Adobe Commerce to Shopify" },
            { metric: "0", label: "Data loss incidents", desc: "Across all 40+ migrations we have completed" },
            { metric: "<15min", label: "Avg. launch downtime", desc: "Planned cutover window on launch day" },
            { metric: "98%", label: "SEO ranking retention", desc: "Average organic traffic retained 60 days post-launch" },
          ]} />
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: "var(--color-bg-soft)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <SectionLabel text="Pricing" />
            <SectionHeading>Migration packages</SectionHeading>
          </div>
          <PricingTable color={COLOR} tiers={[
            {
              name: "Migration Roadmap",
              price: "From £499",
              desc: "Expert audit of your Magento store with a written migration plan, timeline, and cost estimate. No commitment required.",
              features: [
                "Full codebase & data complexity review",
                "Custom feature mapping to Shopify",
                "Written migration plan document",
                "Accurate project cost estimate",
                "5 business day turnaround",
              ],
              cta: "Order Roadmap",
            },
            {
              name: "Standard Migration",
              price: "From £5,000",
              desc: "Full migration for Magento 2 stores up to 10,000 SKUs with standard integrations.",
              features: [
                "Full data migration (products, orders, customers)",
                "Shopify theme build included",
                "Core integration reconnection",
                "SEO redirect mapping",
                "6–8 week delivery",
                "30-day post-launch support",
              ],
              cta: "Start Migration",
              highlight: true,
            },
            {
              name: "Enterprise Migration",
              price: "Custom",
              desc: "Complex migrations with 10K+ SKUs, multi-store, ERP integration, or Adobe Commerce Cloud.",
              features: [
                "High-volume data migration (100K+ records)",
                "Custom feature rebuild on Shopify",
                "ERP & CRM reconnection",
                "Multi-store migration",
                "Dedicated project manager",
                "90-day post-launch support",
              ],
              cta: "Let's Scope It",
            },
          ]} />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--color-white)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <SectionLabel text="FAQ" />
            <SectionHeading>Migration questions answered</SectionHeading>
          </div>
          <FAQ items={[
            { q: "Will my SEO rankings drop after migration?", a: "Not if the migration is done correctly. We produce a full redirect map for every URL, transfer all meta data, rebuild structured data, and submit updated sitemaps to Google. Across our migrations, clients retain an average of 98% of their organic traffic within 60 days." },
            { q: "What happens to our order history and customer accounts?", a: "All order history is migrated to Shopify with the original order numbers, status, line items, and timestamps preserved. Customer accounts are transferred with password reset emails sent post-launch, so customers can log in without creating new accounts." },
            { q: "Can you handle multi-store Magento setups?", a: "Yes. Multi-store Magento installations — whether multiple websites or store views — are handled through our Enterprise Migration package. We map each store to the appropriate Shopify structure, including Markets if you're selling internationally." },
            { q: "What about our custom Magento extensions and features?", a: "Custom functionality is reviewed in the Migration Roadmap phase. Features that have a native Shopify equivalent are mapped there. Features that don't are rebuilt using Shopify's Liquid theme system, custom Shopify Functions, or third-party apps. You'll know the plan before we start." },
            { q: "Do you migrate from Magento 1 (now end-of-life)?", a: "Yes. Magento 1 migrations are something we handle regularly. The data structures are older and require more transformation, which we account for in the project scope. If you're still on Magento 1, the security risk alone makes migration urgent." },
          ]} />
        </div>
      </section>
    </ServiceLayout>
  );
}
