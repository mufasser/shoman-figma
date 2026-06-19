"use client";
import ServiceLayout from "@/components/services/ServiceLayout";
import {
  SectionLabel, SectionHeading, PainGrid, Checklist,
  PricingTable, FAQ, ProcessSteps, OutcomeCards, TwoCol,
} from "@/components/services/ServiceComponents";

const COLOR = "#96BF48";
const BG = "#f5fbee";


export default function ShopifyPage() {
  return (
    <ServiceLayout
      badge="Shopify Partner"
      badgeColor={COLOR}
      badgeBg={BG}
      platformSymbol="Sh"
      platformColor={COLOR}
      heroTitle="Shopify Store Launch"
      heroHighlight="& Development."
      heroSub="Whether you're launching your first store or moving up to Shopify Plus — we build Shopify stores that convert, load fast, and scale with your business from day one."
      ctaText="Start Your Build"
      secondaryCta="See Our Process"
      breadcrumb="Shopify Development"
    >
      {/* Who it's for */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel text="Who We Build For" />
          <SectionHeading sub="We don't have a minimum project size. We have a minimum standard. Whether you're a founder with an idea or a brand doing £5M/year, the engineering quality is the same.">
            Every stage, every size
          </SectionHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="three-col">
            {[
              {
                icon: "🚀",
                title: "Startups & First Stores",
                body: "Just starting out? We build your first Shopify store properly — clean code, fast load times, and a structure you can actually scale. No shortcuts that you'll have to undo in 12 months.",
                tag: "From £2,000",
              },
              {
                icon: "📈",
                title: "Growing Brands",
                body: "Doing £50K–£5M/year and hitting limits? We rebuild the right parts of your store — theme, integrations, checkout — to unblock the next stage of growth.",
                tag: "From £5,000",
              },
              {
                icon: "🏢",
                title: "Shopify Plus Upgrade",
                body: "Moving to Shopify Plus opens checkout extensibility, B2B features, automation, and more. We handle the full Plus migration and implementation — including custom checkout flows.",
                tag: "Custom quote",
              },
            ].map((c) => (
              <div key={c.title} style={{
                background: "#fff",
                border: "1.5px solid #e2e8f0",
                borderTop: `4px solid ${COLOR}`,
                borderRadius: 14, padding: "28px 24px",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 36px ${COLOR}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{c.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>{c.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: "#64748b", marginBottom: 16 }}>{c.body}</div>
                <div style={{
                  display: "inline-block", fontSize: 12, fontWeight: 600,
                  color: COLOR, background: BG,
                  padding: "4px 12px", borderRadius: 100,
                }}>{c.tag}</div>
              </div>
            ))}
            <style jsx>{`@media(max-width:768px){.three-col{grid-template-columns:1fr!important}}`}</style>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <TwoCol
            left={
              <>
                <SectionLabel text="What We Build" />
                <SectionHeading sub="Every Shopify project we deliver is engineered — not templated. Here's what's always in scope.">
                  Full-stack Shopify development
                </SectionHeading>
                <Checklist color={COLOR} items={[
                  "Bespoke Liquid theme development (no off-the-shelf templates)",
                  "Custom section & block architecture for flexible CMS editing",
                  "Shopify app integrations: Klaviyo, Recharge, Gorgias, Algolia",
                  "Stripe, PayPal, Klarna & BNPL payment configuration",
                  "Shopify Markets for multi-currency and international selling",
                  "Shopify B2B (Plus only) — price lists, company accounts, net terms",
                  "Core Web Vitals optimisation — LCP, CLS, FID targets from day one",
                  "Shopify Plus Checkout Extensibility — custom checkout UI blocks",
                  "Full handover with documentation and CMS training",
                ]} />
              </>
            }
            right={
              <div>
                <SectionLabel text="Tech Stack" />
                <div style={{ marginBottom: 20 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>Integrations we work with daily</h3>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { name: "Klaviyo", color: "#1C1C1C", sym: "Kl", desc: "Email & SMS" },
                    { name: "Stripe", color: "#635BFF", sym: "St", desc: "Payments" },
                    { name: "Algolia", color: "#5468FF", sym: "Al", desc: "Search" },
                    { name: "Recharge", color: "#6366F1", sym: "Rc", desc: "Subscriptions" },
                    { name: "Gorgias", color: "#F59E0B", sym: "Go", desc: "Support" },
                    { name: "Yotpo", color: "#ec7323", sym: "Yo", desc: "Reviews" },
                    { name: "Loop Returns", color: "#10b981", sym: "Lp", desc: "Returns" },
                    { name: "ShipBob", color: "#0284c7", sym: "Sb", desc: "Fulfilment" },
                  ].map((app) => (
                    <div key={app.name} style={{
                      display: "flex", alignItems: "center", gap: 10,
                      background: "#f8fafc", border: "1px solid #e2e8f0",
                      borderRadius: 10, padding: "12px 14px",
                    }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: 8,
                        background: app.color,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 9, fontWeight: 800, color: "#fff", flexShrink: 0,
                      }}>{app.sym}</div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>{app.name}</div>
                        <div style={{ fontSize: 11, color: "#94a3b8" }}>{app.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <TwoCol
            left={
              <div>
                <SectionLabel text="Outcomes" />
                <SectionHeading sub="What our Shopify clients see after launch.">Results that matter</SectionHeading>
                <OutcomeCards color={COLOR} items={[
                  { metric: "2.1s", label: "Average LCP", desc: "Core Web Vitals performance across all stores we build" },
                  { metric: "34%", label: "Avg. conversion lift", desc: "Compared to their previous store or theme" },
                  { metric: "100%", label: "On-time launches", desc: "We set realistic timelines and hit them" },
                  { metric: "80+", label: "Shopify builds", desc: "Stores launched across all business sizes" },
                ]} />
              </div>
            }
            right={
              <>
                <SectionLabel text="Our Build Process" />
                <SectionHeading sub="Every build follows the same structured process — no surprises.">
                  How a Shopify project runs
                </SectionHeading>
                <ProcessSteps color={COLOR} steps={[
                  { num: "1", title: "Discovery & scoping", body: "We review your product range, existing brand assets, required integrations, and technical requirements. You get a written scope before work begins." },
                  { num: "2", title: "Design system & wireframes", body: "We create a component-level design system in Figma — typography, colours, spacing, and all key page layouts. You approve before we write a line of code." },
                  { num: "3", title: "Theme development", body: "Clean, performant Liquid with a flexible section architecture. Every component is documented and editable from the Shopify admin." },
                  { num: "4", title: "Integrations & data", body: "All apps connected, tested, and configured. Products, collections, metafields, and content migrated or built from scratch." },
                  { num: "5", title: "UAT, optimisation & launch", body: "Two weeks of user acceptance testing, Core Web Vitals optimisation, and a staged launch. We monitor live for 48 hours post-launch." },
                ]} />
              </>
            }
            reverse
          />
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <SectionLabel text="Project Packages" />
            <SectionHeading>Transparent project pricing</SectionHeading>
          </div>
          <PricingTable color={COLOR} tiers={[
            {
              name: "Starter Store",
              price: "From £2,000",
              desc: "For founders launching a first Shopify store. Clean, fast, conversion-ready.",
              features: [
                "Bespoke theme setup (based on Dawn or OS2)",
                "Up to 3 page templates",
                "Payment & shipping configuration",
                "Core apps installed & configured",
                "Mobile-optimised & Core Web Vitals passed",
                "2 weeks delivery",
              ],
              cta: "Get Started",
            },
            {
              name: "Growth Build",
              price: "From £5,000",
              desc: "For growing brands needing a custom theme, integrations, and performance optimisation.",
              features: [
                "Fully custom Liquid theme — no templates",
                "Full integration suite (Klaviyo, Stripe, etc.)",
                "Custom section & block architecture",
                "Shopify Markets (multi-currency)",
                "4-6 week delivery",
                "CMS training & handover docs",
              ],
              cta: "Most Popular",
              highlight: true,
            },
            {
              name: "Shopify Plus",
              price: "Custom",
              desc: "Enterprise-level Plus builds with custom checkout, B2B, and advanced automation.",
              features: [
                "Shopify Plus Checkout Extensibility",
                "B2B & Company accounts",
                "Shopify Flow automation setup",
                "ERP / 3PL integration",
                "Custom Shopify Functions",
                "Dedicated engineer throughout",
              ],
              cta: "Let's Talk",
            },
          ]} />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <SectionLabel text="FAQ" />
            <SectionHeading>Common questions</SectionHeading>
          </div>
          <FAQ items={[
            { q: "Do you use templates or build custom?", a: "It depends on the package. Starter Store projects use a premium Shopify theme as a base, customised to match your brand. Growth and Plus builds are fully custom Liquid themes built from scratch with no template shortcuts." },
            { q: "Can you migrate us from WooCommerce or Squarespace?", a: "Yes. We handle product, order, and customer data migration from WooCommerce, BigCommerce, Squarespace, and most other platforms. SEO redirects are always included." },
            { q: "What do we own after the project?", a: "Everything. The theme code, any custom apps or scripts we write, and all documentation belong to you. There are no ongoing licensing fees for the code we deliver." },
            { q: "Can we edit the store ourselves after handover?", a: "Yes — that's a core part of how we build. The section and block architecture is designed so your team can update content, add products, and make layout changes without touching code." },
            { q: "How long does a Shopify build take?", a: "Starter Store: 2 weeks. Growth Build: 4–6 weeks. Plus projects: 6–12 weeks depending on scope. We set timelines in the scoping call and don't miss them." },
          ]} />
        </div>
      </section>
    </ServiceLayout>
  );
}
