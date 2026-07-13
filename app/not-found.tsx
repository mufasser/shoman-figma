"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-white)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center", fontFamily: "var(--font-sans)" }}>
      <div style={{ maxWidth: 480 }}>
        {/* Logo */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 48 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--color-brand)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "var(--color-white)", fontSize: 18 }}>S</div>
          <span style={{ fontWeight: 700, fontSize: 17, color: "var(--color-ink)" }}>Shoman<span style={{ color: "var(--color-brand)" }}>.</span></span>
        </div>

        <div style={{ fontSize: 80, fontWeight: 900, color: "var(--color-brand)", letterSpacing: "-0.05em", lineHeight: 1, marginBottom: 8 }}>404</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: "var(--color-ink)", marginBottom: 14, letterSpacing: "-0.02em" }}>
          Page not found
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--color-muted)", marginBottom: 36 }}>
          This page doesn&apos;t exist or has moved. Try navigating from the homepage or pick a destination below.
        </p>

        {/* Quick links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {[
            { href: "/", label: "Home", color: "var(--color-brand)" },
            { href: "/services", label: "Our Services", color: "#0284C7" },
            { href: "/portfolio", label: "Portfolio", color: "#96BF48" },
            { href: "/contact", label: "Contact Us", color: "#6366F1" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "12px 18px", background: "var(--color-bg-soft)",
              border: "1.5px solid var(--color-border)", borderRadius: 10,
              fontSize: 14, fontWeight: 600, color: "var(--color-ink)",
              textDecoration: "none", transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = l.color;
              (e.currentTarget as HTMLElement).style.color = l.color;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-ink)";
            }}>
              {l.label} <ArrowRight size={15} />
            </Link>
          ))}
        </div>

        <p style={{ fontSize: 13, color: "var(--color-subtle)" }}>
          Need help? <a href="mailto:hello@shomansolutions.com" style={{ color: "var(--color-brand)", fontWeight: 600, textDecoration: "none" }}>hello@shomansolutions.com</a>
        </p>
      </div>
    </div>
  );
}
