"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import HeroPlatformLogos from "./HeroPlatformLogos";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks! We'll reach out to ${email} shortly.`);
    setEmail("");
  };

  return (
    <section style={{
      minHeight: "100vh",
      background: "var(--color-white)",
      display: "flex",
      alignItems: "center",
      paddingTop: 72,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        top: -120,
        right: -120,
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(var(--color-brand-rgb), 0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: -80,
        left: -80,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(var(--color-brand-rgb), 0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "80px 24px", width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }} className="hero-grid">

          {/* Left — Content */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--color-brand-soft)", border: "1px solid rgba(var(--color-brand-rgb), 0.2)",
              borderRadius: 100, padding: "6px 14px", marginBottom: 28,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%", background: "var(--color-brand)",
                display: "inline-block",
                animation: "pulse 2s ease-in-out infinite",
              }} />
              <MapPin size={13} color="var(--color-brand)" strokeWidth={2.3} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-brand)", letterSpacing: "0.06em" }}>
                UK-BASED · STARTUP TO ENTERPRISE
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "var(--color-ink)",
              marginBottom: 24,
            }}>
              Grow your business<br />
              with ecommerce<br />
              <span style={{
                color: "var(--color-brand)",
                position: "relative",
                display: "inline-block",
              }}>
                that performs.
                <svg
                  style={{ position: "absolute", bottom: -4, left: 0, width: "100%", height: 6 }}
                  viewBox="0 0 300 8" fill="none" preserveAspectRatio="none">
                  <path d="M0 6 Q75 0 150 5 Q225 10 300 4" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </h1>

            <p style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--color-copy)",
              marginBottom: 36,
              maxWidth: 480,
            }}>
              From your first Shopify store to a complex Adobe Commerce platform —
              Shoman Solutions engineers ecommerce that converts, scales, and stays fast.
            </p>

            {/* Email CTA form */}
            <form onSubmit={handleSubmit} style={{
              display: "flex",
              gap: 0,
              marginBottom: 28,
              maxWidth: 440,
              background: "var(--color-bg-soft)",
              border: "1.5px solid var(--color-border)",
              borderRadius: 10,
              overflow: "hidden",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-brand)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                style={{
                  flex: 1, padding: "14px 18px",
                  fontSize: 14, border: "none",
                  background: "transparent", color: "var(--color-ink)", outline: "none",
                }}
              />
              <button type="submit" style={{
                padding: "14px 20px",
                background: "var(--color-brand)", color: "var(--color-white)",
                border: "none", cursor: "pointer",
                fontSize: 14, fontWeight: 600,
                display: "flex", alignItems: "center", gap: 6,
                transition: "background 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-brand-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-brand)")}>
                Get Started <ArrowRight size={14} />
              </button>
            </form>

            {/* Trust signals */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              {["No lock-in contracts", "UK management", "Code ownership"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <CheckCircle2 size={15} color="var(--color-brand)" />
                  <span style={{ fontSize: 13, color: "var(--color-muted)", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Figma platform logo cluster */}
          <div
            style={{
              position: "relative",
              minHeight: 280,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="animate-fade-up delay-3 hero-visual"
          >
            <HeroPlatformLogos />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-visual { display: none; }
        }
      `}</style>
    </section>
  );
}
