"use client";
import { useState } from "react";
import { ChevronDown, Check, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ── Section label ── */
export function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 700, color: "var(--color-brand)",
      letterSpacing: "0.1em", textTransform: "uppercase",
      marginBottom: 12, display: "flex", alignItems: "center", gap: 8,
    }}>
      <span style={{ width: 20, height: 2, background: "var(--color-brand)", display: "inline-block" }} />
      {text}
    </div>
  );
}

export function SectionCenteredLabel({ text }: { text: string }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 700, color: "var(--color-brand)",
      letterSpacing: "0.1em", textTransform: "uppercase",
      marginBottom: 12, display: "flex", alignItems: "center", gap: 8, textAlign: "center", justifyContent: "center",
    }}>
      <span style={{ width: 20, height: 2, background: "var(--color-brand)", display: "inline-block" }} />
      {text}
      <span style={{ width: 20, height: 2, background: "var(--color-brand)", display: "inline-block" }} />
    </div>
  );
}

/* ── Section heading ── */
export function SectionHeading({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div style={{ marginBottom: sub ? 8 : 48 }}>
      <h2 style={{
        fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800,
        lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--color-ink)",
      }}>{children}</h2>
      {sub && <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--color-copy)", marginTop: 12, marginBottom: 40, maxWidth: 600 }}>{sub}</p>}
    </div>
  );
}

/* ── Pain point grid ── */
export function PainGrid({ items, color }: { items: { icon: LucideIcon; title: string; body: string }[]; color: string }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 16,
    }}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
        <div key={item.title} style={{
          background: "var(--color-bg-soft)",
          border: "1px solid var(--color-border)",
          borderLeft: `4px solid ${color}`,
          borderRadius: 12, padding: "22px 20px",
          transition: "box-shadow 0.2s, transform 0.2s",
          cursor: "default",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 28px ${color}18`;
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}>
          <div style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: color + "12",
            color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 12,
          }}>
            <Icon size={19} strokeWidth={2.2} />
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-ink)", marginBottom: 6 }}>{item.title}</div>
          <div style={{ fontSize: 13, lineHeight: 1.65, color: "var(--color-muted)" }}>{item.body}</div>
        </div>
        );
      })}
    </div>
  );
}

/* ── Checklist block ── */
export function Checklist({ items, color }: { items: string[]; color: string }) {
  return (
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((item) => (
        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <span style={{
            width: 20, height: 20, borderRadius: "50%",
            background: color + "15", border: `1.5px solid ${color}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, marginTop: 2,
          }}>
            <Check size={11} color={color} strokeWidth={2.5} />
          </span>
          <span style={{ fontSize: 14, lineHeight: 1.65, color: "var(--color-ink-2)" }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── 3-tier pricing table ── */
interface PricingTier {
  name: string;
  price: string;
  period?: string;
  desc: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}
export function PricingTable({ tiers, color }: { tiers: PricingTier[]; color: string }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
    }} className="pricing-grid">
      {tiers.map((tier) => (
        <div key={tier.name} style={{
          background: tier.highlight ? "var(--color-ink)" : "var(--color-white)",
          border: tier.highlight ? `2px solid ${color}` : "1.5px solid var(--color-border)",
          borderRadius: 16, padding: "28px 24px",
          position: "relative",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
          (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${color}20`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}>
          {tier.highlight && (
            <div style={{
              position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
              background: color, color: "var(--color-white)",
              fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 100,
              letterSpacing: "0.06em",
            }}>MOST POPULAR</div>
          )}
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
            color: tier.highlight ? color : "var(--color-subtle)", marginBottom: 10,
          }}>{tier.name}</div>
          <div style={{ marginBottom: 6 }}>
            <span style={{
              fontSize: 36, fontWeight: 800, color: tier.highlight ? "var(--color-white)" : "var(--color-ink)",
              letterSpacing: "-0.03em",
            }}>{tier.price}</span>
            {tier.period && <span style={{ fontSize: 13, color: tier.highlight ? "var(--color-subtle)" : "var(--color-muted)", marginLeft: 4 }}>{tier.period}</span>}
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.65, color: tier.highlight ? "var(--color-subtle)" : "var(--color-muted)", marginBottom: 24, minHeight: 48 }}>{tier.desc}</p>
          <div style={{ borderTop: `1px solid ${tier.highlight ? "var(--color-ink-2)" : "var(--color-bg-muted)"}`, paddingTop: 20, marginBottom: 24 }}>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {tier.features.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <span style={{
                    width: 18, height: 18, borderRadius: "50%",
                    background: color + "20", border: `1.5px solid ${color}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 1,
                  }}>
                    <Check size={10} color={color} strokeWidth={2.5} />
                  </span>
                  <span style={{ fontSize: 13, color: tier.highlight ? "var(--color-border-strong)" : "var(--color-copy)", lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <a href="/contact" style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            width: "100%", padding: "12px 0", borderRadius: 9,
            fontSize: 14, fontWeight: 600, textDecoration: "none",
            background: tier.highlight ? color : "transparent",
            color: tier.highlight ? "var(--color-white)" : color,
            border: `1.5px solid ${color}`,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            if (!tier.highlight) {
              (e.currentTarget as HTMLElement).style.background = color;
              (e.currentTarget as HTMLElement).style.color = "var(--color-white)";
            }
          }}
          onMouseLeave={(e) => {
            if (!tier.highlight) {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = color;
            }
          }}>
            {tier.cta} <ArrowRight size={14} />
          </a>
        </div>
      ))}
      <style jsx>{`
        @media (max-width: 768px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

/* ── FAQ accordion ── */
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid var(--color-border)" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%", display: "flex", alignItems: "center",
              justifyContent: "space-between", gap: 16,
              padding: "20px 0", background: "none", border: "none",
              cursor: "pointer", textAlign: "left",
            }}>
            <span style={{ fontSize: 15, fontWeight: 600, color: "var(--color-ink)", lineHeight: 1.4 }}>{item.q}</span>
            <span style={{
              width: 28, height: 28, borderRadius: "50%",
              background: open === i ? "var(--color-brand)" : "var(--color-bg-muted)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, transition: "all 0.2s",
            }}>
              <ChevronDown
                size={15}
                color={open === i ? "var(--color-white)" : "var(--color-muted)"}
                style={{ transform: open === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.25s" }}
              />
            </span>
          </button>
          {open === i && (
            <div style={{
              fontSize: 14, lineHeight: 1.75, color: "var(--color-copy)",
              paddingBottom: 20, maxWidth: 700,
            }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Process steps ── */
export function ProcessSteps({ steps, color }: { steps: { num: string; title: string; body: string }[]; color: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
      {/* Vertical line */}
      <div style={{
        position: "absolute", left: 19, top: 40, bottom: 40,
        width: 2, background: `linear-gradient(to bottom, ${color}, ${color}30)`,
        zIndex: 0,
      }} />
      {steps.map((step, i) => (
        <div key={i} style={{
          display: "flex", gap: 24, alignItems: "flex-start",
          paddingBottom: i < steps.length - 1 ? 36 : 0,
          position: "relative", zIndex: 1,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: color, color: "var(--color-white)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 800, flexShrink: 0,
            boxShadow: `0 0 0 4px ${color}20`,
          }}>{step.num}</div>
          <div style={{ paddingTop: 8 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-ink)", marginBottom: 6 }}>{step.title}</div>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--color-muted)" }}>{step.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Outcome stat cards ── */
export function OutcomeCards({ items, color }: { items: { metric: string; label: string; desc: string }[]; color: string }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: 16,
    }}>
      {items.map((item) => (
        <div key={item.label} style={{
          background: "var(--color-white)",
          border: "1.5px solid var(--color-border)",
          borderTop: `4px solid ${color}`,
          borderRadius: 12, padding: "24px 20px",
          textAlign: "center",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
          (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 32px ${color}18`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}>
          <div style={{ fontSize: 36, fontWeight: 800, color, letterSpacing: "-0.03em", marginBottom: 4 }}>{item.metric}</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-ink)", marginBottom: 6 }}>{item.label}</div>
          <div style={{ fontSize: 12, lineHeight: 1.6, color: "var(--color-muted)" }}>{item.desc}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Two-column section ── */
export function TwoCol({ left, right, reverse }: { left: React.ReactNode; right: React.ReactNode; reverse?: boolean }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64, alignItems: "start",
      direction: reverse ? "rtl" : "ltr",
    }} className="two-col">
      <div style={{ direction: "ltr" }}>{left}</div>
      <div style={{ direction: "ltr" }}>{right}</div>
      <style jsx>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; direction: ltr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}
