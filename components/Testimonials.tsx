"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with Shoman Solutions has been a fantastic experience, and I wouldn't hesitate to recommend them. Throughout our engagement, Shoman Solutions consistently delivered high-quality Adobe Commerce (Magento) development...",
    // name: "Matthew Johnson",
    name: "Matthew J***",
    role: "Head of Core Software Services",
    company: "PerfectDraft",
    initial: "MJ",
    color: "#FF0000",
    platform: "Adobe Commerce",
  },
  {
    quote:
      "Can't really say anything other than Shoman Solutions Limited is very professional at their work and is my go to for anything Magento related...",
    name: "S*** Joan",
    role: "Operations Director",
    company: "B2B Distributor",
    initial: "SJ",
    color: "#96BF48",
    platform: "Magento",
  },
  {
    quote:
      "Great and experienced Developers. They were able to implement a system whereby we streamlined our process and made sure our coding was up to Magento's standards...",
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
    <section style={{ background: "var(--color-white)", padding: "96px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: 80, alignItems: "center",
        }} className="testi-grid">

          {/* Left — decorative */}
          <div>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "var(--color-brand)",
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 12, display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 24, height: 2, background: "var(--color-brand)", display: "inline-block" }} />
              Testimonials
            </div>
            <h2 style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 800, lineHeight: 1.2,
              letterSpacing: "-0.02em", color: "var(--color-ink)",
              marginBottom: 24,
            }}>
              Hear what our clients say about &nbsp;
              <span style={{ color: "var(--color-brand)" }}>working with us.</span>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--color-muted)" }}>
              Every client relationship starts with a technical conversation. These are the outcomes they came back to tell us about.
            </p>

            {/* Avatar cluster */}
            <div style={{ display: "flex", alignItems: "center", marginTop: 32 }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: t.color,
                  border: "3px solid var(--color-white)",
                  marginLeft: i === 0 ? 0 : -12,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, fontWeight: 800, color: "var(--color-white)",
                  cursor: "pointer",
                  zIndex: testimonials.length - i,
                  transition: "transform 0.2s",
                }}
                onClick={() => setActive(i)}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >{t.initial}</div>
              ))}
              <span style={{ marginLeft: 16, fontSize: 13, color: "var(--color-muted)", fontWeight: 500 }}>
                {testimonials.length} clients · 5★ average
              </span>
            </div>
          </div>

          {/* Right — testimonial card */}
          <div>
            <div style={{
              background: "var(--color-bg-soft)",
              border: "1.5px solid var(--color-border)",
              borderRadius: 20,
              padding: 40,
              position: "relative",
            }}>
              {/* Quote mark */}
              <div style={{
                position: "absolute", top: 24, right: 32,
                fontSize: 80, fontWeight: 900, color: "var(--color-brand)",
                opacity: 0.12, lineHeight: 1,
                fontFamily: "var(--font-serif)",
              }}>&quot;</div>

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
                  <span key={i} style={{ color: "var(--color-brand)", fontSize: 16 }}>★</span>
                ))}
              </div>

              <blockquote style={{
                fontSize: 17, lineHeight: 1.75, color: "var(--color-ink-2)",
                fontStyle: "italic", marginBottom: 28,
                borderLeft: "3px solid var(--color-brand)",
                paddingLeft: 20,
              }}>
                &quot;{t.quote}&quot;
              </blockquote>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: t.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 800, color: "var(--color-white)",
                  }}>{t.initial}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-ink)" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "var(--color-muted)" }}>{t.role} · {t.company}</div>
                  </div>
                </div>

                {/* Arrows */}
                <div style={{ display: "flex", gap: 8 }}>
                  {[{ action: prev, icon: <ChevronLeft size={16} /> }, { action: next, icon: <ChevronRight size={16} /> }].map((btn, i) => (
                    <button key={i} onClick={btn.action} style={{
                      width: 40, height: 40, borderRadius: "50%",
                      border: "1.5px solid var(--color-border)", background: "var(--color-white)",
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
                    background: active === i ? "var(--color-brand)" : "var(--color-border-strong)",
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
