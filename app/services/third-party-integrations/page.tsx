"use client";
import ServiceLayout from "@/components/services/ServiceLayout";
import {
  SectionLabel, SectionHeading, PainGrid, Checklist,
  FAQ, ProcessSteps, OutcomeCards, TwoCol,
} from "@/components/services/ServiceComponents";
import { AlertTriangle, CircleDollarSign, DatabaseZap, PackageX, Puzzle, RefreshCw } from "lucide-react";
import type { CSSProperties } from "react";

const COLOR = "#6366F1";
const BG = "#f5f3ff";


export default function IntegrationsPage() {
  return (
    <ServiceLayout
      badge="ERP · CRM · API Development"
      badgeColor={COLOR}
      badgeBg={BG}
      platformSymbol="API"
      platformColor={COLOR}
      heroTitle="Enterprise Systems"
      heroHighlight="Integration."
      heroSub="Connect your ecommerce platform to the tools that run your business. We build robust custom middleware and APIs so your store, ERP, CRM, and warehouse all talk to each other — in real time, without errors."
      ctaText="Describe Your Integration"
      secondaryCta="See How It Works"
      breadcrumb="Systems Integration"
      heroImage="/assets/services/Enterprise-Systems-Integration.webp"
      heroImageAlt="Enterprise ecommerce systems and API integration"
      heroImageWidth={576}
      heroImageHeight={447}
      standardized
    >
      {/* Pain points */}
      <section className="service-content-section service-content-section--soft">
        <div className="service-content-container">
          <SectionLabel text="The Problem With Off-The-Shelf Apps" />
          <SectionHeading sub="Generic integration apps work for simple setups. The moment your business has real complexity, they break down — and you pay for it in manual work, errors, and missed orders.">
            Why businesses come to us for integrations
          </SectionHeading>
          <PainGrid color={COLOR} items={[
            { icon: RefreshCw, title: "Manual data reconciliation every day", body: "Staff spending hours copying orders from Shopify into SAP, re-entering stock levels, manually updating pricing. Expensive, error-prone, and unscalable." },
            { icon: PackageX, title: "Overselling due to stock sync lag", body: "Shopify stock levels updating 15 minutes behind the warehouse. By then, you've sold stock you don't have and need to refund angry customers." },
            { icon: CircleDollarSign, title: "Pricing mismatches between systems", body: "Your ERP updates a price and it takes 24 hours to sync to your store — if it syncs at all. Meanwhile customers are ordering at the wrong price." },
            { icon: AlertTriangle, title: "Integration apps breaking on updates", body: "Your Shopify app stops syncing every time either platform updates. No monitoring. You find out when a customer complains." },
            { icon: Puzzle, title: "Systems that were never designed to connect", body: "Legacy ERP built in 2003. Modern Shopify store. No official integration exists. The only solution is custom middleware." },
            { icon: DatabaseZap, title: "No single source of truth for data", body: "Three systems, three versions of the same order. Finance has one number, the warehouse has another, and Shopify has a third." },
          ]} />
        </div>
      </section>

      {/* Platforms we integrate */}
      <section className="service-content-section">
        <div className="service-content-container">
          <SectionLabel text="Systems We Connect" />
          <SectionHeading sub="We've built integrations across every major enterprise platform. If it has an API — or even if it doesn't — we can connect it.">
            Platforms & systems we integrate daily
          </SectionHeading>
          <div className="integration-platforms-grid">
            {[
              { category: "ERP", color: "#0070F3", items: [
                { name: "SAP Business One", sym: "SAP", color: "#0070F3" },
                { name: "SAP S/4HANA", sym: "SAP", color: "#0070F3" },
                { name: "Microsoft Dynamics 365", sym: "D365", color: "#00BCF2" },
                { name: "NetSuite", sym: "NS", color: "#F26922" },
                { name: "Sage 200", sym: "Sg", color: "#00DC82" },
                { name: "Brightpearl", sym: "Bp", color: "#6366F1" },
              ]},
              { category: "CRM", color: "#00A1E0", items: [
                { name: "Salesforce", sym: "Sf", color: "#00A1E0" },
                { name: "HubSpot", sym: "Hs", color: "#FF7A59" },
                { name: "Microsoft Dynamics CRM", sym: "CRM", color: "#00BCF2" },
                { name: "Zoho CRM", sym: "Zo", color: "#E42527" },
                { name: "Pipedrive", sym: "Pd", color: "#1A1A2E" },
              ]},
              { category: "Warehouse / OMS", color: "var(--color-success)", items: [
                { name: "ShipBob", sym: "Sb", color: "#0284c7" },
                { name: "Linnworks", sym: "Lw", color: "var(--color-success)" },
                { name: "Mintsoft", sym: "Ms", color: "#6366F1" },
                { name: "ChannelAdvisor", sym: "CA", color: "var(--color-brand)" },
                { name: "Custom WMS", sym: "WM", color: "var(--color-muted)" },
              ]},
              { category: "Search & Marketing", color: "#5468FF", items: [
                { name: "Algolia", sym: "Al", color: "#5468FF" },
                { name: "Klaviyo", sym: "Kl", color: "#1C1C1C" },
                { name: "Yotpo", sym: "Yo", color: "var(--color-brand)" },
                { name: "Nosto", sym: "No", color: "#e11d48" },
                { name: "Gorgias", sym: "Go", color: "#F59E0B" },
              ]},
            ].map((cat) => (
              <div className="integration-platform-card" key={cat.category} style={{ "--item-color": cat.color } as CSSProperties}>
                <div className="integration-platform-card__category">{cat.category}</div>
                <div className="integration-platform-card__list">
                  {cat.items.map((item) => (
                    <div className="integration-platform-card__item" key={item.name}>
                      <div className="integration-platform-card__symbol" style={{ "--item-color": item.color } as CSSProperties}>{item.sym}</div>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="integration-platform-callout">
            <strong>Don&apos;t see your system?</strong> If it has an API, a database, or even a CSV export, we&apos;ve almost certainly built an integration for something similar. <a href="/contact-us">Tell us what you&apos;re connecting →</a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="service-content-section service-content-section--soft">
        <div className="service-content-container">
          <TwoCol
            left={
              <>
                <SectionLabel text="Our Approach" />
                <SectionHeading sub="We don't plug in an app and hope for the best. We architect a data flow that's reliable, monitored, and built to handle your specific business logic.">
                  Custom middleware, not off-the-shelf apps
                </SectionHeading>
                <ProcessSteps color={COLOR} steps={[
                  { num: "1", title: "Integration discovery", body: "We map every data point that needs to flow between systems — order status, stock levels, pricing, customer data, fulfilment updates. We identify the master record for each field and document every conflict rule." },
                  { num: "2", title: "Architecture design", body: "We design the middleware architecture: event-driven vs scheduled sync, error handling strategy, retry logic, logging, and monitoring. You approve the design before we write code." },
                  { num: "3", title: "Build & unit testing", body: "Custom integration built in your chosen tech stack. Every data transformation is unit-tested against real data samples from your systems before we connect to production." },
                  { num: "4", title: "Staging validation", body: "End-to-end testing in a staging environment with real data flows. We simulate failure scenarios — API timeouts, malformed records, rate limits — and verify the error handling works correctly." },
                  { num: "5", title: "Production launch & monitoring", body: "Go-live with a monitoring dashboard showing data flow status, error rates, and sync latency. Any failure triggers an alert to our team within 5 minutes." },
                  { num: "6", title: "Ongoing monitoring & maintenance", body: "We maintain the integration on a retainer — handling platform API updates, adding new data fields, and resolving any sync issues before they impact your operations." },
                ]} />
              </>
            }
            right={
              <div>
                <SectionLabel text="What's Included" />
                <div className="integration-included-heading">
                  <h3>
                    Everything in a custom integration
                  </h3>
                </div>
                <Checklist color={COLOR} items={[
                  "Integration discovery & data mapping workshop",
                  "Custom middleware architecture (not off-the-shelf apps)",
                  "Bi-directional data sync with conflict resolution logic",
                  "Real-time or scheduled sync (your choice)",
                  "Error handling, retry logic, and dead-letter queues",
                  "Monitoring dashboard with alerting",
                  "Full integration documentation",
                  "Staging environment testing before production",
                  "Post-launch monitoring period (30 days)",
                  "Optional ongoing maintenance retainer",
                ]} />
                <div className="integration-health-monitor">
                  <div className="integration-health-monitor__title">
                    Integration health monitor
                  </div>
                  {[
                    { label: "Orders synced today", value: "1,247", status: "✓", color: "#10b981" },
                    { label: "Stock updates pushed", value: "8,932", status: "✓", color: "#10b981" },
                    { label: "Pricing sync", value: "Real-time", status: "✓", color: "#10b981" },
                    { label: "Last error", value: "14 days ago", status: "!", color: "#f97316" },
                  ].map((m) => (
                    <div className="integration-health-monitor__row" key={m.label}>
                      <span>{m.label}</span>
                      <div>
                        <strong>{m.value}</strong>
                        <small style={{ "--status-color": m.color } as CSSProperties}>{m.status}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Outcomes */}
      <section className="service-content-section">
        <div className="service-content-container">
          <SectionLabel text="Integration Outcomes" />
          <SectionHeading sub="What businesses gain when their systems actually talk to each other.">
            Results from real integration projects
          </SectionHeading>
          <OutcomeCards color={COLOR} items={[
            { metric: "£80K", label: "Annual savings", desc: "Average manual reconciliation cost eliminated after ERP integration" },
            { metric: "<30s", label: "Stock sync latency", desc: "Real-time stock updates pushed to Shopify from warehouse systems" },
            { metric: "0", label: "Oversell incidents", desc: "Across all clients post-integration, compared to weekly before" },
            { metric: "99.9%", label: "Integration uptime", desc: "Monitored SLA across all production integrations we manage" },
          ]} />
        </div>
      </section>

      {/* FAQ */}
      <section className="service-content-section service-content-section--soft">
        <div className="service-content-container service-content-container--narrow">
          <div className="service-centered-heading">
            <SectionLabel text="FAQ" />
            <SectionHeading>Integration questions answered</SectionHeading>
          </div>
          <FAQ items={[
            { q: "Why not just use a Shopify app like SKULabs or Multiorders?", a: "Off-the-shelf apps work well for straightforward setups. The moment you have complex pricing logic, multi-warehouse routing, custom order status flows, or a non-standard ERP schema, generic apps hit a wall. We build middleware that handles your specific business rules — not the average use case." },
            { q: "Which is better — real-time sync or scheduled sync?", a: "It depends on the data type. Stock levels and order status usually need real-time or near-real-time sync (under 60 seconds). Pricing and product catalogue changes can often run on a scheduled sync every 15–30 minutes. We help you define the right strategy in the discovery phase." },
            { q: "What happens if the integration breaks?", a: "All our production integrations include monitoring that alerts our team within 5 minutes of a failure. We have an SLA for integration failures on maintenance retainers — typically a 2-hour response with a 4-hour resolution target for critical sync failures." },
            { q: "Our ERP is very old and doesn't have a proper API. Can you still integrate it?", a: "Often yes. Legacy systems without APIs can usually be integrated via database-level queries, CSV/flat file exchange, or middleware that reads from the ERP's existing report exports. We've done this with systems from the late 1990s. It requires more engineering, but it's usually possible." },
            { q: "How long does an integration project take?", a: "Simple point-to-point integrations (e.g., Shopify ↔ one ERP, one data type) typically take 4–6 weeks. Complex multi-system integrations with custom business logic take 8–16 weeks. We always provide a detailed timeline in the discovery phase before work begins." },
          ]} />
        </div>
      </section>
    </ServiceLayout>
  );
}
