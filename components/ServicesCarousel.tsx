"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    platform: "Adobe Commerce",
    platformColor: "#FF0000",
    platformSymbol: "Ac",
    label: "Platform Engineering",
    title: "Adobe Commerce & Magento Support",
    description:
      "From security patching and performance stabilisation to custom module builds — we keep your Adobe Commerce and Magento 2 store fast, secure, and future-ready.",
    bullets: [
      "Core security patches & updates",
      "Custom module & extension builds",
      "Performance audits & speed optimisation",
      "Ongoing retainer support with clear SLAs",
    ],
    accentColor: "#FF0000",
    bgAccent: "#fff5f5",
  },
  {
    id: 2,
    platform: "Migration",
    platformColor: "#F46F25",
    platformSymbol: "M→",
    label: "Platform Migration",
    title: "Magento to Shopify Migration",
    description:
      "Escape technical debt and infrastructure overhead. We migrate your entire store — products, orders, customer data, SEO, and integrations — with zero data loss.",
    bullets: [
      "Full data extraction & clean transfer",
      "SEO redirect mapping & rank protection",
      "Third-party integration re-mapping",
      "Fixed-price Migration Roadmap available",
    ],
    accentColor: "#F46F25",
    bgAccent: "#fff8f0",
  },
  {
    id: 3,
    platform: "Shopify",
    platformColor: "#96BF48",
    platformSymbol: "Sh",
    label: "Store Development",
    title: "Shopify Store Launch & Development",
    description:
      "Starting fresh or stepping up to Shopify Plus? We design and build high-converting Shopify stores for startups and growing brands — on time, on budget.",
    bullets: [
      "Bespoke theme design & custom development",
      "App integrations: Klaviyo, Stripe, Algolia",
      "Shopify Plus enterprise capabilities",
      "Conversion-focused UX from day one",
    ],
    accentColor: "#96BF48",
    bgAccent: "#f5fbee",
  },
  {
    id: 4,
    platform: "Audit",
    platformColor: "#0284C7",
    platformSymbol: "Au",
    label: "Fixed-Fee Service",
    title: "Technical Audit Service",
    description:
      "Get a clear, prioritised picture of your store's health before investing in new features. Expert-written, actionable PDF report — not an automated tool export.",
    bullets: [
      "Security & core health check",
      "Checkout & payment path analysis",
      "Migration complexity assessment",
      "5 business day turnaround from £499",
    ],
    accentColor: "#0284C7",
    bgAccent: "#f0f9ff",
  },
  {
    id: 5,
    platform: "Integration",
    platformColor: "#6366F1",
    platformSymbol: "⚙",
    label: "Systems & API",
    title: "Enterprise Systems Integration",
    description:
      "Connect your ecommerce platform to the tools that run your business. We build robust custom middleware that eliminates manual sync and data errors permanently.",
    bullets: [
      "ERP sync: SAP, Microsoft Dynamics 365",
      "CRM loops: Salesforce, HubSpot",
      "Custom API & middleware development",
      "Real-time data flows with error monitoring",
    ],
    accentColor: "#6366F1",
    bgAccent: "#f5f3ff",
  },
];

export default function ServicesCarousel() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(4);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 900) setVisible(2);
      else if (window.innerWidth < 1100) setVisible(3);
      else setVisible(4);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const prev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActive((prev) => (prev - 1 + services.length) % services.length);
  };

  const next = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActive((prev) => (prev + 1) % services.length);
  };

  // Build visible indices (circular)
  const visibleIndices: number[] = [];
  for (let i = 0; i < visible; i++) {
    visibleIndices.push((active + i) % services.length);
  }

  return (
    <section id="services" style={{ background: "#f8fafc", padding: "96px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>

        {/* Section header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "#ec7323",
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 12, display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 24, height: 2, background: "#ec7323", display: "inline-block" }} />
              Our Services
            </div>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800, lineHeight: 1.15,
              letterSpacing: "-0.02em", color: "#0f172a",
              maxWidth: 520,
            }}>
              Engineering services for every stage of your ecommerce journey
            </h2>
          </div>

          {/* Arrow controls */}
          <div style={{ display: "flex", gap: 12 }}>
            {[{ action: prev, icon: <ChevronLeft size={20} /> }, { action: next, icon: <ChevronRight size={20} /> }].map((btn, i) => (
              <button key={i} onClick={btn.action} style={{
                width: 48, height: 48, borderRadius: "50%",
                border: "1.5px solid #e2e8f0",
                background: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "#0f172a",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#ec7323";
                (e.currentTarget as HTMLElement).style.color = "#fff";
                (e.currentTarget as HTMLElement).style.borderColor = "#ec7323";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fff";
                (e.currentTarget as HTMLElement).style.color = "#0f172a";
                (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
              }}>
                {btn.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${visible}, 1fr)`,
          gap: 20,
        }}>
          {visibleIndices.map((idx, pos) => {
            const s = services[idx];
            const isFirst = pos === 0;
            return (
              <div
                key={`${idx}-${pos}`}
                className="service-card"
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "28px 24px",
                  border: `1px solid ${isFirst ? s.accentColor + "40" : "#e2e8f0"}`,
                  borderTop: `4px solid ${s.accentColor}`,
                  opacity: isFirst ? 1 : 0.85,
                  transform: isFirst ? "scale(1)" : "scale(0.98)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1) translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = isFirst ? "1" : "0.85";
                  (e.currentTarget as HTMLElement).style.transform = isFirst ? "scale(1)" : "scale(0.98)";
                }}
              >
                {/* Platform badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: s.bgAccent, borderRadius: 100,
                    padding: "4px 12px",
                  }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: 4,
                      background: s.platformColor,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 8, fontWeight: 800, color: "#fff",
                    }}>{s.platformSymbol}</div>
                    <span style={{ fontSize: 11, fontWeight: 600, color: s.accentColor }}>{s.label}</span>
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 600, color: "#94a3b8",
                    background: "#f1f5f9", borderRadius: 4, padding: "2px 8px",
                  }}>
                    0{s.id}
                  </span>
                </div>

                <h3 style={{
                  fontSize: 17, fontWeight: 700, lineHeight: 1.3,
                  color: "#0f172a", marginBottom: 12, letterSpacing: "-0.01em",
                }}>
                  {s.title}
                </h3>

                <p style={{
                  fontSize: 13, lineHeight: 1.65, color: "#64748b", marginBottom: 20,
                }}>
                  {s.description}
                </p>

                <ul style={{ listStyle: "none", marginBottom: 24 }}>
                  {s.bullets.map((b) => (
                    <li key={b} style={{
                      display: "flex", alignItems: "flex-start", gap: 8,
                      fontSize: 12, color: "#475569", marginBottom: 8, lineHeight: 1.5,
                    }}>
                      <span style={{
                        width: 16, height: 16, borderRadius: "50%",
                        background: s.bgAccent, border: `1.5px solid ${s.accentColor}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, marginTop: 1,
                        fontSize: 9, color: s.accentColor, fontWeight: 700,
                      }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <a href="#contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 13, fontWeight: 600, color: s.accentColor,
                  textDecoration: "none",
                  transition: "gap 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}>
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 36 }}>
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); if (intervalRef.current) clearInterval(intervalRef.current); }}
              style={{
                width: active === i ? 24 : 8,
                height: 8, borderRadius: 4,
                background: active === i ? "#ec7323" : "#cbd5e1",
                border: "none", cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
