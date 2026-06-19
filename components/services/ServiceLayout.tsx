"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ServiceLayoutProps {
  children: React.ReactNode;
  // Hero
  badge: string;
  badgeColor: string;
  badgeBg: string;
  platformSymbol: string;
  platformColor: string;
  heroTitle: string;
  heroHighlight: string;
  heroSub: string;
  ctaText: string;
  ctaHref?: string;
  secondaryCta?: string;
  breadcrumb: string;
}

export default function ServiceLayout({
  children,
  badge,
  badgeColor,
  badgeBg,
  platformSymbol,
  platformColor,
  heroTitle,
  heroHighlight,
  heroSub,
  ctaText,
  secondaryCta,
  breadcrumb,
}: ServiceLayoutProps) {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        paddingTop: 72,
        background: "#fff",
        borderBottom: "1px solid #e2e8f0",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background blobs */}
        <div style={{
          position: "absolute", top: -100, right: -100,
          width: 500, height: 500, borderRadius: "50%",
          background: `radial-gradient(circle, ${platformColor}10 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -60, left: -60,
          width: 300, height: 300, borderRadius: "50%",
          background: `radial-gradient(circle, ${platformColor}07 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 24px 64px", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
            <Link href="/" style={{ fontSize: 13, color: "#94a3b8", textDecoration: "none", fontWeight: 500 }}>Home</Link>
            <ChevronRight size={13} color="#cbd5e1" />
            <Link href="/services" style={{ fontSize: 13, color: "#94a3b8", textDecoration: "none", fontWeight: 500 }}>Services</Link>
            <ChevronRight size={13} color="#cbd5e1" />
            <span style={{ fontSize: 13, color: "#0f172a", fontWeight: 600 }}>{breadcrumb}</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }} className="hero-service-grid">
            <div>
              {/* Platform badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: badgeBg,
                border: `1px solid ${badgeColor}30`,
                borderRadius: 100, padding: "6px 14px", marginBottom: 20,
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 5,
                  background: platformColor,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 9, fontWeight: 800, color: "#fff", flexShrink: 0,
                }}>{platformSymbol}</div>
                <span style={{ fontSize: 12, fontWeight: 600, color: badgeColor, letterSpacing: "0.04em" }}>{badge}</span>
              </div>

              <h1 style={{
                fontSize: "clamp(32px, 4vw, 54px)",
                fontWeight: 800, lineHeight: 1.1,
                letterSpacing: "-0.03em", color: "#0f172a",
                marginBottom: 20,
              }}>
                {heroTitle}
                <span style={{ color: platformColor, display: "block" }}>{heroHighlight}</span>
              </h1>

              <p style={{
                fontSize: 17, lineHeight: 1.75, color: "#475569",
                marginBottom: 32, maxWidth: 560,
              }}>{heroSub}</p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/services/audits" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#ec7323", color: "#fff",
                  padding: "13px 24px", borderRadius: 9,
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
                  {ctaText} <ArrowRight size={15} />
                </a>
                {secondaryCta && (
                  <a href="#overview" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    border: "1.5px solid #e2e8f0", color: "#0f172a",
                    padding: "13px 24px", borderRadius: 9,
                    fontSize: 14, fontWeight: 600, textDecoration: "none",
                    transition: "all 0.2s",
                    background: "#fff",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#ec7323";
                    (e.currentTarget as HTMLElement).style.color = "#ec7323";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                    (e.currentTarget as HTMLElement).style.color = "#0f172a";
                  }}>
                    {secondaryCta}
                  </a>
                )}
              </div>
            </div>

            {/* Right: trust pill cluster */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 200 }} className="hero-trust-pills">
              {[
                { icon: "🇬🇧", text: "UK-managed delivery" },
                { icon: "🔒", text: "NDA on every project" },
                { icon: "📄", text: "You own all code" },
                { icon: "⚡", text: "Senior engineers only" },
              ].map((p) => (
                <div key={p.text} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "#f8fafc", border: "1px solid #e2e8f0",
                  borderRadius: 10, padding: "10px 14px",
                  fontSize: 13, fontWeight: 500, color: "#1e293b",
                }}>
                  <span style={{ fontSize: 16 }}>{p.icon}</span>
                  {p.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .hero-service-grid { grid-template-columns: 1fr !important; }
            .hero-trust-pills { display: none !important; }
          }
        `}</style>
      </section>

      {/* Page body */}
      <div id="overview">{children}</div>

      {/* Bottom CTA */}
      <section style={{ background: "#0f172a", padding: "80px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600, height: 300,
          background: `radial-gradient(ellipse, ${platformColor}15 0%, transparent 65%)`,
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 540, margin: "0 auto", position: "relative" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(236,115,35,0.1)", border: "1px solid rgba(236,115,35,0.2)",
            borderRadius: 100, padding: "6px 16px", marginBottom: 20,
          }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#ec7323" }}>🚀 Free 30-min discovery call</span>
          </div>
          <h2 style={{
            fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 800,
            lineHeight: 1.15, color: "#fff", marginBottom: 14,
            letterSpacing: "-0.02em",
          }}>
            Ready to discuss your<br />
            <span style={{ color: "#ec7323" }}>{breadcrumb} project?</span>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#94a3b8", marginBottom: 32 }}>
            No jargon. No hard sell. A direct conversation with a senior engineer who understands your platform.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#ec7323", color: "#fff",
              padding: "14px 28px", borderRadius: 9,
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
              Book Free Consultation <ArrowRight size={15} />
            </a>
            <a href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1.5px solid rgba(255,255,255,0.15)",
              color: "#fff",
              padding: "14px 28px", borderRadius: 9,
              fontSize: 14, fontWeight: 600, textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#ec7323";
              (e.currentTarget as HTMLElement).style.color = "#ec7323";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}>
              View All Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
