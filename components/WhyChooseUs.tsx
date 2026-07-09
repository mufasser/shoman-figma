"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const years = useCountUp(10, 1500, started);
  const projects = useCountUp(50, 1800, started);
  const speed = useCountUp(40, 1600, started);
  const satisfaction = useCountUp(100, 1400, started);

  return (
    <section ref={sectionRef} style={{ background: "var(--color-white)", padding: "96px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }} className="why-grid">

          {/* Left */}
          <div>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "var(--color-brand)",
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 12, display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 24, height: 2, background: "var(--color-brand)", display: "inline-block" }} />
              Why Choose Us
            </div>

            <h2 style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 800, lineHeight: 1.15,
              letterSpacing: "-0.02em", color: "var(--color-ink)",
              marginBottom: 20,
            }}>
              Our team gives you<br />
              <span style={{ color: "var(--color-brand)" }}>ecommerce solutions</span><br />
              that actually work.
            </h2>

            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--color-copy)", marginBottom: 36, maxWidth: 460 }}>
              Senior engineers only. UK-managed. You own every line of code we write. No hand-offs to juniors, no template shortcuts.
            </p>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 36 }}>
              {[
                { value: years, suffix: "+", label: "Years experience", color: "var(--color-brand)" },
                { value: projects, suffix: "+", label: "Projects delivered", color: "#0284c7" },
                { value: "Enterprise", suffix: "", label: "Adobe Commerce App Builder Specialists", color: "#96BF48" },
                { value: satisfaction, suffix: "%", label: "Client satisfaction", color: "#6366F1" },
              ].map((stat) => (
                <div key={stat.label} style={{
                  background: "var(--color-bg-soft)",
                  borderRadius: 12,
                  padding: "20px",
                  border: "1px solid var(--color-border)",
                }}>
                  <div style={{
                    fontSize: 36, fontWeight: 800,
                    color: stat.color, letterSpacing: "-0.03em", lineHeight: 1,
                    marginBottom: 6,
                  }}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--color-muted)", fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--color-brand)", color: "var(--color-white)",
              padding: "14px 24px", borderRadius: 10,
              fontSize: 14, fontWeight: 600, textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--color-brand-hover)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--color-brand)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}>
              See Our Team <ArrowRight size={16} />
            </a>
          </div>

          {/* Right — Visual */}
          <div style={{ position: "relative" }} className="why-visual">
            <ContactForm />
            {/* Main card */}
            
            {/* <div style={{
              background: "var(--color-ink)",
              borderRadius: 20,
              padding: 32,
              position: "relative",
              overflow: "hidden",
            }}> */}
              {/* Decorative circle */}
              {/* <div style={{
                position: "absolute", top: -60, right: -60,
                width: 200, height: 200, borderRadius: "50%",
                background: "rgba(var(--color-brand-rgb), 0.1)",
                pointerEvents: "none",
              }} />

              <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-muted)", marginBottom: 24, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Project Health Monitor
              </div> */}

              {/* Service items */}
              {/* {[
                { name: "Adobe Commerce Retainer", status: "Active", color: "#FF0000", progress: 85 },
                { name: "Shopify Store Build", status: "In Progress", color: "#96BF48", progress: 62 },
                { name: "ERP Integration", status: "Testing", color: "#6366F1", progress: 94 },
                { name: "Technical Audit", status: "Delivered", color: "#10b981", progress: 100 },
              ].map((item) => (
                <div key={item.name} style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-border)" }}>{item.name}</span>
                    <span style={{
                      fontSize: 10, fontWeight: 600, color: item.color,
                      background: item.color + "20",
                      padding: "2px 8px", borderRadius: 100,
                    }}>{item.status}</span>
                  </div>
                  <div style={{ height: 6, background: "var(--color-ink-2)", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{
                      height: "100%", width: `${item.progress}%`,
                      background: item.color,
                      borderRadius: 3,
                      transition: "width 1.5s ease",
                    }} />
                  </div>
                </div>
              ))} */}

              {/* Bottom bar */}
              {/* <div style={{
                marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--color-ink-2)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontSize: 12, color: "var(--color-muted)" }}>All projects on track</span>
                <span style={{
                  fontSize: 12, fontWeight: 600, color: "var(--color-success)",
                  background: "rgba(16, 185, 129, 0.13)", padding: "4px 10px", borderRadius: 100,
                }}>✓ 100% NDA</span>
              </div>
            </div> */}

            {/* Floating certification badge */}
            {/* <div style={{
              position: "absolute", top: -20, right: -20,
              background: "var(--color-white)", borderRadius: 14,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
              padding: "14px 18px",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "var(--color-brand-soft)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22,
              }}>Certified</div>
              <div>
                <div style={{ fontSize: 11, color: "var(--color-subtle)", fontWeight: 500 }}>Certified Partner</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-ink)" }}>Adobe Commerce</div>
              </div>
            </div> */}
          </div>

        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .why-visual { display: none; }
        }
      `}</style>
    </section>
  );
}
