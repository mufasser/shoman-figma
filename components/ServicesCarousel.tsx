"use client";
import { useState, useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import "./home-sections.css";

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
    <section id="services" className="services-carousel">
      <div className="home-section-container">

        {/* Section header */}
        <div className="services-carousel__header">
          <div>
            <div className="home-section-eyebrow">
              <span />
              Our Services
            </div>
            <h2 className="services-carousel__title">
              Engineering services for every stage of your eCommerce journey
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="home-carousel-controls">
            <button onClick={prev} aria-label="Previous service" className="home-carousel-control">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} aria-label="Next service" className="home-carousel-control">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="services-carousel__grid" style={{ "--visible-services": visible } as CSSProperties}>
          {visibleIndices.map((idx, pos) => {
            const s = services[idx];
            const isFirst = pos === 0;
            return (
              <div
                key={`${idx}-${pos}`}
                className={`services-carousel__card${isFirst ? " is-active" : ""}`}
                style={{
                  "--service-accent": s.accentColor,
                  "--service-accent-soft": s.bgAccent,
                  "--service-border": isFirst ? `${s.accentColor}40` : "var(--color-border)",
                } as CSSProperties}
              >
                {/* Platform badge */}
                <div className="services-carousel__card-meta">
                  <div className="services-carousel__card-badge">
                    <div className="services-carousel__card-symbol">{s.platformSymbol}</div>
                    <span>{s.label}</span>
                  </div>
                  <span className="services-carousel__card-number">
                    0{s.id}
                  </span>
                </div>

                <h3 className="services-carousel__card-title">
                  {s.title}
                </h3>

                <p className="services-carousel__card-description">
                  {s.description}
                </p>

                <ul className="services-carousel__card-list">
                  {s.bullets.map((b) => (
                    <li key={b}>
                      <span>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="services-carousel__card-link">
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="home-carousel-dots">
          {services.map((_, i) => (
            <button
              key={i}
              aria-label={`Show service ${i + 1}`}
              aria-current={active === i ? "true" : undefined}
              onClick={() => { setActive(i); if (intervalRef.current) clearInterval(intervalRef.current); }}
              className={`home-carousel-dot${active === i ? " is-active" : ""}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
