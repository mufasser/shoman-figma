"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Shoman Solutions fixed in two weeks what our previous agency couldn't solve in six months. Our Adobe Commerce store went from an embarrassing 8-second load to under 2 seconds. The difference in conversions was immediate.",
    name: "Sarah M.",
    role: "Head of Ecommerce",
    company: "UK Fashion Retailer",
    initial: "S",
    color: "#FF0000",
    platform: "Adobe Commerce",
  },
  {
    quote:
      "The Magento to Shopify migration was the smoothest technical project we've run in years. Not a single order was lost, our SEO rankings held, and the launch was genuinely boring — which is exactly what you want.",
    name: "James T.",
    role: "Operations Director",
    company: "B2B Distributor",
    initial: "J",
    color: "#96BF48",
    platform: "Shopify Plus",
  },
  {
    quote:
      "Their technical audit was the most useful £499 we've spent. We went in thinking we had a checkout problem and came out knowing we had five database issues that were causing it. Clear, actionable, no fluff.",
    name: "Priya K.",
    role: "CTO",
    company: "DTC Homeware Brand",
    initial: "P",
    color: "#0284C7",
    platform: "Technical Audit",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section style={{ background: "#fff", padding: "96px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: 80, alignItems: "center",
        }} className="testi-grid">

          {/* Left — decorative */}
          <div>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "#ec7323",
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 12, display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 24, height: 2, background: "#ec7323", display: "inline-block" }} />
              Testimonials
            </div>
            <h2 style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 800, lineHeight: 1.2,
              letterSpacing: "-0.02em", color: "#0f172a",
              marginBottom: 24,
            }}>
              Hear what our<br />clients say about<br />
              <span style={{ color: "#ec7323" }}>working with us.</span>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#64748b" }}>
              Every client relationship starts with a technical conversation.
              These are the outcomes they came back to tell us about.
            </p>

            {/* Avatar cluster */}
            <div style={{ display: "flex", alignItems: "center", marginTop: 32 }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: t.color,
                  border: "3px solid #fff",
                  marginLeft: i === 0 ? 0 : -12,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, fontWeight: 800, color: "#fff",
                  cursor: "pointer",
                  zIndex: testimonials.length - i,
                  transition: "transform 0.2s",
                }}
                onClick={() => setActive(i)}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >{t.initial}</div>
              ))}
              <span style={{ marginLeft: 16, fontSize: 13, color: "#64748b", fontWeight: 500 }}>
                {testimonials.length} clients · 5★ average
              </span>
            </div>
          </div>

          {/* Right — testimonial card */}
          <div>
            <div style={{
              background: "#f8fafc",
              border: "1.5px solid #e2e8f0",
              borderRadius: 20,
              padding: 40,
              position: "relative",
            }}>
              {/* Quote mark */}
              <div style={{
                position: "absolute", top: 24, right: 32,
                fontSize: 80, fontWeight: 900, color: "#ec7323",
                opacity: 0.12, lineHeight: 1,
                fontFamily: "Georgia, serif",
              }}>"</div>

              {/* Platform badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: t.color + "15",
                border: `1px solid ${t.color}30`,
                borderRadius: 100, padding: "4px 12px",
                marginBottom: 24,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: t.color, display: "inline-block" }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: t.color }}>{t.platform}</span>
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#ec7323", fontSize: 16 }}>★</span>
                ))}
              </div>

              <blockquote style={{
                fontSize: 17, lineHeight: 1.75, color: "#1e293b",
                fontStyle: "italic", marginBottom: 28,
                borderLeft: "3px solid #ec7323",
                paddingLeft: 20,
              }}>
                "{t.quote}"
              </blockquote>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: t.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 800, color: "#fff",
                  }}>{t.initial}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#64748b" }}>{t.role} · {t.company}</div>
                  </div>
                </div>

                {/* Arrows */}
                <div style={{ display: "flex", gap: 8 }}>
                  {[{ action: prev, icon: <ChevronLeft size={16} /> }, { action: next, icon: <ChevronRight size={16} /> }].map((btn, i) => (
                    <button key={i} onClick={btn.action} style={{
                      width: 40, height: 40, borderRadius: "50%",
                      border: "1.5px solid #e2e8f0", background: "#fff",
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

              {/* Dot indicators */}
              <div style={{ display: "flex", gap: 6, marginTop: 20 }}>
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} style={{
                    width: active === i ? 20 : 6, height: 6,
                    borderRadius: 3,
                    background: active === i ? "#ec7323" : "#cbd5e1",
                    border: "none", cursor: "pointer",
                    transition: "all 0.3s",
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .testi-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
