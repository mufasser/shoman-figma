"use client";
import { ArrowRight, PackageCheck, Settings, ShoppingBag } from "lucide-react";

const cases = [
  {
    tag: "Performance",
    platform: "Adobe Commerce",
    platformColor: "#FF0000",
    title: "Checkout Page Load Cut by 53%",
    description: "A UK fashion retailer was losing shoppers due to a slow Adobe Commerce checkout. We rebuilt the database indices and caching layer entirely.",
    metric: "53% faster",
    metricLabel: "faster checkout",
    image: ShoppingBag,
    bg: "#fff5f5",
  },
  {
    tag: "Migration",
    platform: "Magento → Shopify",
    platformColor: "#F46F25",
    title: "40K Orders Migrated, Zero Downtime",
    description: "Moved B2B distributor from Magento 1 to Shopify Plus. All data intact. SEO preserved.",
    metric: "0 hrs",
    metricLabel: "downtime on launch",
    image: PackageCheck,
    bg: "#fff8f0",
  },
  {
    tag: "Integration",
    platform: "Systems & ERP",
    platformColor: "#6366F1",
    title: "£80K Saved Annually via ERP Sync",
    description: "Custom Shopify–SAP middleware eliminated daily manual reconciliation for a manufacturing brand.",
    metric: "£80K/yr",
    metricLabel: "manual cost removed",
    image: Settings,
    bg: "#f5f3ff",
  },
];

export default function CaseStudies() {
  const FeaturedIcon = cases[0].image;

  return (
    <section style={{ background: "var(--color-bg-soft)", padding: "96px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 56, alignItems: "flex-end" }} className="case-header">
          <div>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "var(--color-brand)",
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 12, display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 24, height: 2, background: "var(--color-brand)", display: "inline-block" }} />
              Our Portfolio
            </div>
            <h2 style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 800, lineHeight: 1.15,
              letterSpacing: "-0.02em", color: "var(--color-ink)",
            }}>
              Proof in the numbers — not the proposal
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--color-muted)", maxWidth: 400 }}>
              Every case study shows the exact problem, what we built, and the measurable outcome.
              No vague &quot;improved performance&quot; — real metrics from real projects.
            </p>
          </div>
        </div>

        {/* Case study grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="case-grid">

          {/* Large featured card */}
          <div style={{
            background: cases[0].bg,
            border: `1.5px solid ${cases[0].platformColor}20`,
            borderRadius: 20,
            padding: 36,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            gridRow: "1 / 3",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${cases[0].platformColor}20`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: cases[0].platformColor,
                  background: cases[0].platformColor + "15",
                  padding: "4px 10px", borderRadius: 100,
                }}>{cases[0].tag}</span>
                <span style={{ fontSize: 11, color: "var(--color-subtle)", fontWeight: 500 }}>{cases[0].platform}</span>
              </div>

              <div style={{
                width: 72, height: 72, borderRadius: 16,
                background: cases[0].platformColor + "14", color: cases[0].platformColor,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}><FeaturedIcon size={34} strokeWidth={2.2} /></div>

              <h3 style={{
                fontSize: 24, fontWeight: 800, color: "var(--color-ink)",
                lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: 16,
              }}>{cases[0].title}</h3>

              <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--color-copy)", marginBottom: 28 }}>
                {cases[0].description}
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 40, fontWeight: 800, color: cases[0].platformColor, letterSpacing: "-0.03em" }}>
                  {cases[0].metric}
                </div>
                <div style={{ fontSize: 12, color: "var(--color-muted)", fontWeight: 500 }}>{cases[0].metricLabel}</div>
              </div>
              <a href="#" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 13, fontWeight: 600, color: cases[0].platformColor,
                textDecoration: "none",
              }}>
                Read story <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Two smaller cards */}
          {cases.slice(1).map((c) => {
            const Icon = c.image;
            return (
            <div key={c.title} style={{
              background: c.bg,
              border: `1.5px solid ${c.platformColor}20`,
              borderRadius: 20,
              padding: 28,
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${c.platformColor}20`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: c.platformColor,
                    background: c.platformColor + "15",
                    padding: "4px 10px", borderRadius: 100,
                  }}>{c.tag}</span>
                  <span style={{ fontSize: 11, color: "var(--color-subtle)", fontWeight: 500 }}>{c.platform}</span>
                </div>

                <div style={{
                  width: 52, height: 52, borderRadius: 13,
                  background: c.platformColor + "14", color: c.platformColor,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 12,
                }}><Icon size={25} strokeWidth={2.2} /></div>

                <h3 style={{
                  fontSize: 18, fontWeight: 700, color: "var(--color-ink)",
                  lineHeight: 1.3, letterSpacing: "-0.01em", marginBottom: 10,
                }}>{c.title}</h3>

                <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--color-muted)" }}>
                  {c.description}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 20 }}>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: c.platformColor, letterSpacing: "-0.02em" }}>
                    {c.metric}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--color-muted)", fontWeight: 500 }}>{c.metricLabel}</div>
                </div>
                <a href="#" style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  fontSize: 12, fontWeight: 600, color: c.platformColor,
                  textDecoration: "none",
                }}>
                  Read <ArrowRight size={12} />
                </a>
              </div>
            </div>
            );
          })}
        </div>

        {/* View all */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: "1.5px solid var(--color-border)", borderRadius: 10,
            padding: "12px 24px",
            fontSize: 14, fontWeight: 600, color: "var(--color-ink)",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--color-brand)";
            (e.currentTarget as HTMLElement).style.color = "var(--color-brand)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
            (e.currentTarget as HTMLElement).style.color = "var(--color-ink)";
          }}>
            View Portfolio <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .case-header { grid-template-columns: 1fr !important; }
          .case-grid { grid-template-columns: 1fr !important; }
          .case-grid > div:first-child { grid-row: auto !important; }
        }
      `}</style>
    </section>
  );
}
