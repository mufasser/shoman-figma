"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ maxWidth: 480 }}>
        {/* Logo */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 48 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: "#ec7323", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#fff", fontSize: 18 }}>S</div>
          <span style={{ fontWeight: 700, fontSize: 17, color: "#0f172a" }}>Shoman<span style={{ color: "#ec7323" }}>.</span></span>
        </div>

        <div style={{ fontSize: 80, fontWeight: 900, color: "#ec7323", letterSpacing: "-0.05em", lineHeight: 1, marginBottom: 8 }}>404</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", marginBottom: 14, letterSpacing: "-0.02em" }}>
          Page not found
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: "#64748b", marginBottom: 36 }}>
          This page doesn&apos;t exist or has moved. Try navigating from the homepage or pick a destination below.
        </p>

        {/* Quick links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {[
            { href: "/", label: "Home", color: "#ec7323" },
            { href: "/services", label: "Our Services", color: "#0284C7" },
            { href: "/case-studies", label: "Case Studies", color: "#96BF48" },
            { href: "/contact", label: "Contact Us", color: "#6366F1" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "12px 18px", background: "#f8fafc",
              border: "1.5px solid #e2e8f0", borderRadius: 10,
              fontSize: 14, fontWeight: 600, color: "#0f172a",
              textDecoration: "none", transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = l.color;
              (e.currentTarget as HTMLElement).style.color = l.color;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
              (e.currentTarget as HTMLElement).style.color = "#0f172a";
            }}>
              {l.label} <ArrowRight size={15} />
            </Link>
          ))}
        </div>

        <p style={{ fontSize: 13, color: "#94a3b8" }}>
          Need help? <a href="mailto:hello@shomansolutions.com" style={{ color: "#ec7323", fontWeight: 600, textDecoration: "none" }}>hello@shomansolutions.com</a>
        </p>
      </div>
    </div>
  );
}
