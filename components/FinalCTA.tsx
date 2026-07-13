"use client";

import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";

type FinalCTAProps = {
  eyebrow?: string;
  title?: string;
  highlight?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function FinalCTA({
  eyebrow = "Free 30-min discovery call",
  title = "Ready to Build your",
  highlight = "Adobe Commerce platform?",
  description = "No jargon. No hard sell. A direct conversation with a senior Adobe Commerce engineer about your specific platform and what it needs.",
  primaryLabel = "Book Free Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Start With a £499 Audit",
  secondaryHref = "/services/audits",
}: FinalCTAProps) {
  return (
    <section style={{
      background: "var(--color-ink)",
      padding: "86px 24px 78px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at center, rgba(var(--color-brand-rgb), 0.08) 0%, rgba(var(--color-brand-rgb), 0) 55%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 620, margin: "0 auto", position: "relative" }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          border: "1px solid rgba(var(--color-brand-rgb), 0.28)",
          background: "rgba(var(--color-brand-rgb), 0.11)",
          color: "var(--color-brand)",
          borderRadius: 100,
          padding: "7px 16px",
          marginBottom: 20,
          fontSize: 12,
          fontWeight: 600,
        }}>
          <Rocket size={13} />
          {eyebrow}
        </div>

        <h2 style={{
          fontSize: "clamp(30px, 4vw, 40px)",
          fontWeight: 800,
          lineHeight: 1.12,
          letterSpacing: "-0.03em",
          color: "var(--color-white)",
          marginBottom: 14,
        }}>
          {title}<br />
          <span style={{ color: "var(--color-brand)" }}>{highlight}</span>
        </h2>

        <p style={{
          fontSize: 15,
          lineHeight: 1.75,
          color: "var(--color-subtle)",
          margin: "0 auto 28px",
          maxWidth: 550,
        }}>
          {description}
        </p>

        <div className="final-cta-actions" style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <Link href={primaryHref} style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            minHeight: 46,
            padding: "0 26px",
            borderRadius: 9,
            background: "var(--color-brand)",
            color: "var(--color-white)",
            fontSize: 14,
            fontWeight: 700,
            textDecoration: "none",
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.background = "var(--color-brand-hover)";
            event.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.background = "var(--color-brand)";
            event.currentTarget.style.transform = "translateY(0)";
          }}>
            {primaryLabel} <ArrowRight size={15} />
          </Link>

          <Link href={secondaryHref} style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 46,
            padding: "0 26px",
            borderRadius: 9,
            border: "1.5px solid rgba(255, 255, 255, 0.18)",
            color: "var(--color-white)",
            background: "transparent",
            fontSize: 14,
            fontWeight: 700,
            textDecoration: "underline",
            textUnderlineOffset: 3,
            transition: "border-color 0.2s, color 0.2s, transform 0.2s",
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.borderColor = "var(--color-brand)";
            event.currentTarget.style.color = "var(--color-brand)";
            event.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
            event.currentTarget.style.color = "var(--color-white)";
            event.currentTarget.style.transform = "translateY(0)";
          }}>
            {secondaryLabel}
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 520px) {
          .final-cta-actions {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </section>
  );
}
