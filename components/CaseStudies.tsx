"use client";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    tag: "Performance",
    platform: "Adobe Commerce",
    platformColor: "#FF0000",
    title: "Checkout Page Load Cut by 53%",
    description: "A UK fashion retailer's Adobe Commerce store was losing 30% of shoppers due to slow load times. We rebuilt the database indices, switched to a Varnish caching layer, and rewrote the checkout module.",
    metric: "53% faster",
    metricLabel: "checkout speed",
    image: "🛍️",
    bg: "#fff5f5",
  },
  {
    tag: "Migration",
    platform: "Magento → Shopify",
    platformColor: "#F46F25",
    title: "40K Orders Migrated With Zero Downtime",
    description: "A B2B distributor needed to move off Magento 1 before end-of-life. We transferred all orders, customer accounts, and product data to Shopify Plus while preserving their entire SEO structure.",
    metric: "0 hrs",
    metricLabel: "downtime on launch",
    image: "📦",
    bg: "#fff8f0",
  },
  {
    tag: "Integration",
    platform: "Systems & ERP",
    platformColor: "#6366F1",
    title: "£80K Saved Annually via ERP Sync",
    description: "A manufacturing brand had staff manually reconciling orders between their Shopify store and SAP ERP daily. Our custom middleware eliminated that entirely with real-time bidirectional sync.",
    metric: "£80K/yr",
    metricLabel: "manual cost eliminated",
    image: "⚙️",
    bg: "#f5f3ff",
  },
];

export default function CaseStudies() {
  return (
    <section style={{ background: "#f8fafc", padding: "96px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 56, alignItems: "flex-end" }} className="case-header">
          <div>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "#ec7323",
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 12, display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 24, height: 2, background: "#ec7323", display: "inline-block" }} />
              Our Case Studies
            </div>
            <h2 style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 800, lineHeight: 1.15,
              letterSpacing: "-0.02em", color: "#0f172a",
            }}>
              Proof in the numbers — not the proposal
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "#64748b", maxWidth: 400 }}>
              Every case study shows the exact problem, what we built, and the measurable outcome.
              No vague "improved performance" — real metrics from real projects.
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
                <span style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500 }}>{cases[0].platform}</span>
              </div>

              <div style={{ fontSize: 56, marginBottom: 20 }}>{cases[0].image}</div>

              <h3 style={{
                fontSize: 24, fontWeight: 800, color: "#0f172a",
                lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: 16,
              }}>{cases[0].title}</h3>

              <p style={{ fontSize: 14, lineHeight: 1.75, color: "#475569", marginBottom: 28 }}>
                {cases[0].description}
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 40, fontWeight: 800, color: cases[0].platformColor, letterSpacing: "-0.03em" }}>
                  {cases[0].metric}
                </div>
                <div style={{ fontSize: 12, color: "#64748b", fontWeight: 500 }}>{cases[0].metricLabel}</div>
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
          {cases.slice(1).map((c) => (
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
                  <span style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500 }}>{c.platform}</span>
                </div>

                <div style={{ fontSize: 36, marginBottom: 12 }}>{c.image}</div>

                <h3 style={{
                  fontSize: 18, fontWeight: 700, color: "#0f172a",
                  lineHeight: 1.3, letterSpacing: "-0.01em", marginBottom: 10,
                }}>{c.title}</h3>

                <p style={{ fontSize: 13, lineHeight: 1.7, color: "#64748b" }}>
                  {c.description}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 20 }}>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: c.platformColor, letterSpacing: "-0.02em" }}>
                    {c.metric}
                  </div>
                  <div style={{ fontSize: 11, color: "#64748b", fontWeight: 500 }}>{c.metricLabel}</div>
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
          ))}
        </div>

        {/* View all */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: "1.5px solid #e2e8f0", borderRadius: 10,
            padding: "12px 24px",
            fontSize: 14, fontWeight: 600, color: "#0f172a",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#ec7323";
            (e.currentTarget as HTMLElement).style.color = "#ec7323";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
            (e.currentTarget as HTMLElement).style.color = "#0f172a";
          }}>
            View all case studies <ArrowRight size={16} />
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
