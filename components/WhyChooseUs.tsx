"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

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
  const projects = useCountUp(150, 1800, started);
  const speed = useCountUp(40, 1600, started);
  const satisfaction = useCountUp(98, 1400, started);

  return (
    <section ref={sectionRef} style={{ background: "#fff", padding: "96px 0" }}>
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
              fontSize: 12, fontWeight: 700, color: "#ec7323",
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 12, display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 24, height: 2, background: "#ec7323", display: "inline-block" }} />
              Why Choose Us
            </div>

            <h2 style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 800, lineHeight: 1.15,
              letterSpacing: "-0.02em", color: "#0f172a",
              marginBottom: 20,
            }}>
              Our team gives you<br />
              <span style={{ color: "#ec7323" }}>ecommerce solutions</span><br />
              that actually work.
            </h2>

            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#475569", marginBottom: 36, maxWidth: 460 }}>
              We don't hand you a junior developer and a template. Every project is led by a senior engineer
              with real platform experience — Adobe Commerce certified, Shopify Partner, and technically honest
              about what your store actually needs.
            </p>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 36 }}>
              {[
                { value: years, suffix: "+", label: "Years experience", color: "#ec7323" },
                { value: projects, suffix: "+", label: "Projects delivered", color: "#0284c7" },
                { value: speed, suffix: "%", label: "Avg speed improvement", color: "#96BF48" },
                { value: satisfaction, suffix: "%", label: "Client satisfaction", color: "#6366F1" },
              ].map((stat) => (
                <div key={stat.label} style={{
                  background: "#f8fafc",
                  borderRadius: 12,
                  padding: "20px",
                  border: "1px solid #e2e8f0",
                }}>
                  <div style={{
                    fontSize: 36, fontWeight: 800,
                    color: stat.color, letterSpacing: "-0.03em", lineHeight: 1,
                    marginBottom: 6,
                  }}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b", fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#ec7323", color: "#fff",
              padding: "14px 24px", borderRadius: 10,
              fontSize: 14, fontWeight: 600, textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#d4621a";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#ec7323";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}>
              See Our Team <ArrowRight size={16} />
            </a>
          </div>

          {/* Right — Visual */}
          <div style={{ position: "relative" }} className="why-visual">
            {/* Main card */}
            <div style={{
              background: "#0f172a",
              borderRadius: 20,
              padding: 32,
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Decorative circle */}
              <div style={{
                position: "absolute", top: -60, right: -60,
                width: 200, height: 200, borderRadius: "50%",
                background: "rgba(236,115,35,0.1)",
                pointerEvents: "none",
              }} />

              <div style={{ fontSize: 12, fontWeight: 600, color: "#64748b", marginBottom: 24, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Project Health Monitor
              </div>

              {/* Service items */}
              {[
                { name: "Adobe Commerce Retainer", status: "Active", color: "#FF0000", progress: 85 },
                { name: "Shopify Store Build", status: "In Progress", color: "#96BF48", progress: 62 },
                { name: "ERP Integration", status: "Testing", color: "#6366F1", progress: 94 },
                { name: "Technical Audit", status: "Delivered", color: "#10b981", progress: 100 },
              ].map((item) => (
                <div key={item.name} style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0" }}>{item.name}</span>
                    <span style={{
                      fontSize: 10, fontWeight: 600, color: item.color,
                      background: item.color + "20",
                      padding: "2px 8px", borderRadius: 100,
                    }}>{item.status}</span>
                  </div>
                  <div style={{ height: 6, background: "#1e293b", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{
                      height: "100%", width: `${item.progress}%`,
                      background: item.color,
                      borderRadius: 3,
                      transition: "width 1.5s ease",
                    }} />
                  </div>
                </div>
              ))}

              {/* Bottom bar */}
              <div style={{
                marginTop: 24, paddingTop: 20, borderTop: "1px solid #1e293b",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontSize: 12, color: "#64748b" }}>All projects on track</span>
                <span style={{
                  fontSize: 12, fontWeight: 600, color: "#10b981",
                  background: "#10b98120", padding: "4px 10px", borderRadius: 100,
                }}>✓ 100% NDA</span>
              </div>
            </div>

            {/* Floating certification badge */}
            <div style={{
              position: "absolute", top: -20, right: -20,
              background: "#fff", borderRadius: 14,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              padding: "14px 18px",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "#fef3e8",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22,
              }}>🏆</div>
              <div>
                <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500 }}>Certified Partner</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>Adobe Commerce</div>
              </div>
            </div>
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
