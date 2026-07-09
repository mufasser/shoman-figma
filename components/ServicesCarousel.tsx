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
    title: "Adobe Commerce (Magento) Engineering",
    description:
      "Security patching, performance stabilisation, and custom module builds. We keep your platform fast, secure, and future-ready.",
    bullets: [
      "Core security patches & updates",
      "Custom module builds",
      "Performance optimisation",
      "Clear SLA retainers",
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
    title: "Adobe Commerce App Builder",
    description:
      "Full store migration — products, orders, data, SEO, integrations — with zero data loss and no downtime on launch day.",
    bullets: [
      "Full data extraction & transfer",
      "SEO redirect mapping",
      "Third-party re-mapping",
      "Fixed-price Roadmap available",
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
    title: "Shopify Development",
    description:
      "Bespoke Shopify and Shopify Plus builds for startups and growing brands — on time, on budget, conversion-ready from day one.",
    bullets: [
      "Custom theme design & development",
      "App integrations (Klaviyo, Stripe)",
      "Shopify Plus capabilities",
      "Conversion-focused UX design",
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
    title: "Systems Integrations",
    description:
      "Prioritised, expert-written PDF report on your store's security, performance, checkout health, and migration complexity.",
    bullets: [
      "Security & core health check",
      "Checkout path analysis",
      "Migration assessment",
      "From £499 · 5 day turnaround",
    ],
    accentColor: "#0284C7",
    bgAccent: "#f0f9ff",
  },
  {
    id: 5,
    platform: "Integration",
    platformColor: "#6366F1",
    platformSymbol: "API",
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
    <section id="services" style={{ background: "var(--color-bg-soft)", padding: "96px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>

        {/* Section header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "var(--color-brand)",
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 12, display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 24, height: 2, background: "var(--color-brand)", display: "inline-block" }} />
              Our Services
            </div>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800, lineHeight: 1.15,
              letterSpacing: "-0.02em", color: "var(--color-ink)",
              maxWidth: 520,
            }}>
              Engineering services for every stage of your eCommerce journey
            </h2>
          </div>

          {/* Arrow controls */}
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={prev} aria-label="Previous service" style={{
              width: 48, height: 48, borderRadius: "50%",
              border: "1.5px solid var(--color-border)",
              background: "var(--color-white)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "var(--color-ink)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--color-brand)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-white)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-brand)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--color-white)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-ink)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
            }}>
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} aria-label="Next service" style={{
                width: 48, height: 48, borderRadius: "50%",
                border: "1.5px solid var(--color-border)",
                background: "var(--color-white)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "var(--color-ink)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-brand)";
                (e.currentTarget as HTMLElement).style.color = "var(--color-white)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-brand)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-white)";
                (e.currentTarget as HTMLElement).style.color = "var(--color-ink)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
              }}>
              <ChevronRight size={20} />
            </button>
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
                  background: "var(--color-white)",
                  borderRadius: 16,
                  padding: "28px 24px",
                  border: `1px solid ${isFirst ? s.accentColor + "40" : "var(--color-border)"}`,
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
                      fontSize: 8, fontWeight: 800, color: "var(--color-white)",
                    }}>{s.platformSymbol}</div>
                    <span style={{ fontSize: 11, fontWeight: 600, color: s.accentColor }}>{s.label}</span>
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 600, color: "var(--color-subtle)",
                    background: "var(--color-bg-muted)", borderRadius: 4, padding: "2px 8px",
                  }}>
                    0{s.id}
                  </span>
                </div>

                <h3 style={{
                  fontSize: 17, fontWeight: 700, lineHeight: 1.3,
                  color: "var(--color-ink)", marginBottom: 12, letterSpacing: "-0.01em",
                }}>
                  {s.title}
                </h3>

                <p style={{
                  fontSize: 13, lineHeight: 1.65, color: "var(--color-muted)", marginBottom: 20,
                }}>
                  {s.description}
                </p>

                <ul style={{ listStyle: "none", marginBottom: 24 }}>
                  {s.bullets.map((b) => (
                    <li key={b} style={{
                      display: "flex", alignItems: "flex-start", gap: 8,
                      fontSize: 12, color: "var(--color-copy)", marginBottom: 8, lineHeight: 1.5,
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
                background: active === i ? "var(--color-brand)" : "var(--color-border-strong)",
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
