"use client";
import { useState } from "react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

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
      background: "#ffffff",
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
        background: "radial-gradient(circle, rgba(236,115,35,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: -80,
        left: -80,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(236,115,35,0.05) 0%, transparent 70%)",
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
              background: "#fef3e8", border: "1px solid rgba(236,115,35,0.2)",
              borderRadius: 100, padding: "6px 14px", marginBottom: 28,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%", background: "#ec7323",
                display: "inline-block",
                animation: "pulse 2s ease-in-out infinite",
              }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#ec7323", letterSpacing: "0.06em" }}>
                🇬🇧 UK-BASED · STARTUP TO ENTERPRISE
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#0f172a",
              marginBottom: 24,
            }}>
              Grow your business<br />
              with ecommerce<br />
              <span style={{
                color: "#ec7323",
                position: "relative",
                display: "inline-block",
              }}>
                that performs.
                <svg
                  style={{ position: "absolute", bottom: -4, left: 0, width: "100%", height: 6 }}
                  viewBox="0 0 300 8" fill="none" preserveAspectRatio="none">
                  <path d="M0 6 Q75 0 150 5 Q225 10 300 4" stroke="#ec7323" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </h1>

            <p style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "#475569",
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
              background: "#f8fafc",
              border: "1.5px solid #e2e8f0",
              borderRadius: 10,
              overflow: "hidden",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#ec7323")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#e2e8f0")}
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
                  background: "transparent", color: "#0f172a", outline: "none",
                }}
              />
              <button type="submit" style={{
                padding: "14px 20px",
                background: "#ec7323", color: "#fff",
                border: "none", cursor: "pointer",
                fontSize: 14, fontWeight: 600,
                display: "flex", alignItems: "center", gap: 6,
                transition: "background 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#d4621a")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#ec7323")}>
                Get Started <ArrowRight size={14} />
              </button>
            </form>

            {/* Trust signals */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              {["No lock-in contracts", "UK management", "Code ownership guaranteed"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <CheckCircle2 size={15} color="#ec7323" />
                  <span style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual card stack */}
          <div style={{ position: "relative" }} className="animate-fade-up delay-3 hero-visual">

            {/* Main card */}
            <div style={{
              background: "#0f172a",
              borderRadius: 20,
              overflow: "hidden",
              aspectRatio: "4/3",
              position: "relative",
            }}>
              {/* Simulated dashboard */}
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Store Analytics</span>
                  <span style={{ color: "#94a3b8", fontSize: 11 }}>Last 30 days</span>
                </div>
                {/* Fake chart bars */}
                <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 120, marginBottom: 24 }}>
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                    <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                      <div style={{
                        height: `${h}%`,
                        background: i === 11 ? "#ec7323" : i > 8 ? "rgba(236,115,35,0.5)" : "#1e3a5f",
                        borderRadius: "3px 3px 0 0",
                        transition: "height 1s ease",
                      }} />
                    </div>
                  ))}
                </div>
                {/* Metric cards */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[
                    { label: "Conversion Rate", value: "+42%", up: true },
                    { label: "Page Speed", value: "0.8s LCP", up: true },
                    { label: "Revenue", value: "£128K", up: true },
                    { label: "Cart Abandonment", value: "-18%", up: false },
                  ].map((m) => (
                    <div key={m.label} style={{
                      background: "#1e293b", borderRadius: 8, padding: "12px 14px",
                    }}>
                      <div style={{ fontSize: 11, color: "#64748b", marginBottom: 4 }}>{m.label}</div>
                      <div style={{ fontSize: 18, fontWeight: 700, color: m.up ? "#10b981" : "#f97316" }}>{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge — top right */}
            <div style={{
              position: "absolute", top: -16, right: -16,
              background: "#fff", borderRadius: 12,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              padding: "12px 16px",
              display: "flex", alignItems: "center", gap: 10,
              zIndex: 10,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "#fef3e8",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 20 }}>🛍️</span>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500 }}>Active projects</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#0f172a" }}>150+</div>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div style={{
              position: "absolute", bottom: -16, left: -16,
              background: "#fff", borderRadius: 12,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              padding: "12px 16px",
              display: "flex", alignItems: "center", gap: 10,
              zIndex: 10,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "#f0fdf4",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20,
              }}>✅</div>
              <div>
                <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500 }}>Client satisfaction</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#0f172a" }}>98%</div>
              </div>
            </div>

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
