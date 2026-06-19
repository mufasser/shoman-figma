"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionLabel } from "@/components/services/ServiceComponents";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const team = [
  { initial: "S", name: "Shoman", role: "Founder & Lead Engineer", color: "#ec7323", years: "10+ yrs", platforms: "Adobe Commerce · Shopify Plus" },
  { initial: "A", name: "Alex R.", role: "Senior Backend Engineer", color: "#FF0000", years: "8 yrs", platforms: "Magento 2 · Adobe Commerce" },
  { initial: "J", name: "James K.", role: "Shopify Solutions Engineer", color: "#96BF48", years: "6 yrs", platforms: "Shopify · Shopify Plus" },
  { initial: "P", name: "Priya M.", role: "Integration Architect", color: "#6366F1", years: "9 yrs", platforms: "SAP · Salesforce · APIs" },
  { initial: "T", name: "Tom W.", role: "Frontend Engineer", color: "#0284C7", years: "5 yrs", platforms: "Liquid · React · Tailwind" },
  { initial: "R", name: "Rachel S.", role: "Project Lead", color: "#F46F25", years: "7 yrs", platforms: "Delivery · Client Relations" },
];

const values = [
  { icon: "🔍", title: "Transparency", body: "We tell you what we find, not what you want to hear. If your codebase is a mess, we say so — and we show you exactly what it will take to fix it." },
  { icon: "🎯", title: "Precision", body: "Senior engineers only. Every line of code reviewed before it goes live. We don't guess — we test, validate, and document." },
  { icon: "🤝", title: "Partnership", body: "You own the code. Always. No retainer lock-ins, no vendor dependency. We're here to make your team stronger, not dependent on ours." },
];

const timeline = [
  { year: "2014", title: "Founded in the UK", body: "Shoman Solutions started as a specialist Magento consultancy. First clients were mid-market UK retailers needing platform expertise their agencies couldn't provide." },
  { year: "2017", title: "Expanded to Shopify", body: "As Shopify gained enterprise traction, we added Shopify and Shopify Plus to our practice — first for migrations, then for full builds and Plus-specific development." },
  { year: "2019", title: "Systems integration practice", body: "Growing demand for ERP and CRM connections led us to build a dedicated integration engineering team. First SAP and Salesforce projects delivered." },
  { year: "2021", title: "White-label partnerships", body: "Launched a formal white-label programme for UK agencies, adding overflow development capacity to 15+ agency partners without the hire risk." },
  { year: "2024", title: "150+ projects delivered", body: "Over a decade of ecommerce engineering. 150+ projects across Adobe Commerce, Shopify, and integration work. Same founding team. Same standards." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        paddingTop: 72, background: "#fff",
        borderBottom: "1px solid #e2e8f0",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -100, right: -100,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236,115,35,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 24px 72px", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
            <Link href="/" style={{ fontSize: 13, color: "#94a3b8", textDecoration: "none", fontWeight: 500 }}>Home</Link>
            <ChevronRight size={13} color="#cbd5e1" />
            <span style={{ fontSize: 13, color: "#0f172a", fontWeight: 600 }}>About</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="about-hero-grid">
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#fef3e8", border: "1px solid rgba(236,115,35,0.2)",
                borderRadius: 100, padding: "6px 14px", marginBottom: 20,
              }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#ec7323" }}>🇬🇧 UK-Based Since 2014</span>
              </div>
              <h1 style={{
                fontSize: "clamp(32px, 4vw, 54px)",
                fontWeight: 800, lineHeight: 1.1,
                letterSpacing: "-0.03em", color: "#0f172a", marginBottom: 20,
              }}>
                10+ Years Engineering<br />
                <span style={{ color: "#ec7323" }}>What Others Can't Fix.</span>
              </h1>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#475569", marginBottom: 32, maxWidth: 500 }}>
                We started because too many UK merchants were stuck with agencies that sold them platforms they couldn't maintain. We built the team that fixes those platforms — and builds ones that don't break.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact" style={{
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
                  Work With Us <ArrowRight size={15} />
                </Link>
                <Link href="/services" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  border: "1.5px solid #e2e8f0", color: "#0f172a",
                  padding: "13px 24px", borderRadius: 9,
                  fontSize: 14, fontWeight: 600, textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#ec7323";
                  (e.currentTarget as HTMLElement).style.color = "#ec7323";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                  (e.currentTarget as HTMLElement).style.color = "#0f172a";
                }}>
                  Our Services
                </Link>
              </div>
            </div>

            {/* Stats panel */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { value: "10+", label: "Years active", sub: "Founded 2014", color: "#ec7323" },
                { value: "150+", label: "Projects delivered", sub: "Across all platforms", color: "#0284C7" },
                { value: "6", label: "Engineers", sub: "Senior only, no juniors", color: "#96BF48" },
                { value: "25+", label: "Agency partners", sub: "White-label programme", color: "#6366F1" },
                { value: "98%", label: "Client retention", sub: "Year-on-year", color: "#F46F25" },
                { value: "100%", label: "Code ownership", sub: "Always yours, always", color: "#FF0000" },
              ].map((s) => (
                <div key={s.label} style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderTop: `3px solid ${s.color}`,
                  borderRadius: 12, padding: "20px 18px",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${s.color}18`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}>
                  <div style={{ fontSize: 30, fontWeight: 800, color: s.color, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#0f172a", marginTop: 6 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`@media(max-width:768px){.about-hero-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
      </section>

      {/* Our story / timeline */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }} className="story-grid">
            <div>
              <SectionLabel text="Our Story" />
              <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#0f172a", marginBottom: 16 }}>
                Built out of frustration<br />with bad ecommerce agencies.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#475569", marginBottom: 16 }}>
                Shoman Solutions started when our founder kept being called in to rescue projects that agencies had walked away from. Magento stores running on three-year-old patches. Shopify builds that barely worked on mobile. Integrations that someone had bodged together with Zapier.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#475569", marginBottom: 16 }}>
                So we built the team we wished those merchants had hired in the first place. Senior engineers who own platforms at depth — not generalists who've watched a few tutorials. People who can read a database slow query log, write a custom Shopify Function, or architect a SAP middleware from scratch.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#475569" }}>
                A decade later, that's still the standard. Same team, same values, same stubbornness about doing it properly.
              </p>
            </div>

            {/* Timeline */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", left: 19, top: 24, bottom: 24,
                width: 2, background: "linear-gradient(to bottom, #ec7323, rgba(236,115,35,0.2))",
              }} />
              {timeline.map((item, i) => (
                <div key={item.year} style={{
                  display: "flex", gap: 24, marginBottom: i < timeline.length - 1 ? 32 : 0,
                  position: "relative", zIndex: 1,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "#ec7323", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 800, flexShrink: 0,
                    boxShadow: "0 0 0 4px rgba(236,115,35,0.15)",
                  }}>{item.year.slice(2)}</div>
                  <div style={{ paddingTop: 8 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#ec7323", letterSpacing: "0.06em", marginBottom: 4 }}>{item.year}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.7, color: "#64748b" }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`@media(max-width:768px){.story-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionLabel text="The Team" />
            <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#0f172a" }}>
              Senior engineers.<br />No exceptions.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#475569", marginTop: 14, maxWidth: 500, margin: "14px auto 0" }}>
              Every engineer on our team has worked at senior level for 5+ years on their specialist platforms. No juniors, no offshore hand-offs, no surprises.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="team-grid">
            {team.map((m) => (
              <div key={m.name} style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: 16, padding: "28px 24px",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 36px ${m.color}18`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: m.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, fontWeight: 800, color: "#fff", flexShrink: 0,
                  }}>{m.initial}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>{m.name}</div>
                    <div style={{ fontSize: 12, color: "#64748b" }}>{m.role}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{
                    fontSize: 11, fontWeight: 600, color: m.color,
                    background: m.color + "15", padding: "3px 10px", borderRadius: 100,
                  }}>{m.years}</span>
                  <span style={{
                    fontSize: 11, fontWeight: 500, color: "#475569",
                    background: "#f1f5f9", padding: "3px 10px", borderRadius: 100,
                    border: "1px solid #e2e8f0",
                  }}>{m.platforms}</span>
                </div>
              </div>
            ))}
          </div>
          <style jsx>{`
            @media(max-width:900px){.team-grid{grid-template-columns:1fr 1fr!important}}
            @media(max-width:600px){.team-grid{grid-template-columns:1fr!important}}
          `}</style>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <SectionLabel text="Our Values" />
            <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#0f172a" }}>
              Three principles. Non-negotiable.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="values-grid">
            {values.map((v, i) => (
              <div key={v.title} style={{
                background: "#fff",
                border: "1.5px solid #e2e8f0",
                borderRadius: 16, padding: "36px 28px",
                position: "relative", overflow: "hidden",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(236,115,35,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}>
                <div style={{
                  position: "absolute", top: -10, right: -10,
                  fontSize: 80, opacity: 0.04, lineHeight: 1,
                }}>{["0" + (i + 1), ""][0]}</div>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0f172a", marginBottom: 12, letterSpacing: "-0.01em" }}>{v.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "#64748b" }}>{v.body}</p>
              </div>
            ))}
          </div>
          <style jsx>{`@media(max-width:768px){.values-grid{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* Quality promise */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="quality-grid">
            <div>
              <SectionLabel text="Our Quality Standards" />
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#0f172a", marginBottom: 16 }}>
                How we make sure it's right before it goes live
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "🔬", title: "Senior code review on every PR", body: "No code goes to staging without a review by a second senior engineer. We catch problems before your customers do." },
                  { icon: "🌐", title: "Staging-first, always", body: "Every change is tested in a mirrored staging environment. We never push directly to live." },
                  { icon: "📄", title: "Full documentation on handover", body: "Architecture decisions, deployment process, custom features, third-party integrations — all documented and handed over at the end of every project or sprint." },
                  { icon: "🔑", title: "Code ownership from day one", body: "Your code belongs to you the moment we write it. No licensing, no dependencies on us to deploy it, no conditions." },
                ].map((q) => (
                  <div key={q.title} style={{ display: "flex", gap: 14, padding: "16px 18px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10 }}>
                    <span style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>{q.icon}</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>{q.title}</div>
                      <div style={{ fontSize: 13, lineHeight: 1.65, color: "#64748b" }}>{q.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark card */}
            <div style={{ background: "#0f172a", borderRadius: 20, padding: 32 }}>
              <div style={{ fontSize: 11, color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
                Our engineering standards
              </div>
              {[
                { label: "Security patches current", value: "100%", color: "#10b981" },
                { label: "Code review coverage", value: "100%", color: "#10b981" },
                { label: "Staging before live", value: "100%", color: "#10b981" },
                { label: "Documentation delivered", value: "100%", color: "#10b981" },
                { label: "Client code ownership", value: "100%", color: "#10b981" },
                { label: "NDA compliance", value: "100%", color: "#10b981" },
              ].map((s) => (
                <div key={s.label} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "12px 0", borderBottom: "1px solid #1e293b",
                }}>
                  <span style={{ fontSize: 13, color: "#94a3b8" }}>{s.label}</span>
                  <span style={{
                    fontSize: 13, fontWeight: 700, color: s.color,
                    background: s.color + "20", padding: "3px 12px", borderRadius: 100,
                  }}>{s.value}</span>
                </div>
              ))}
              <div style={{ marginTop: 24, fontSize: 12, color: "#475569", textAlign: "center" }}>
                Standards we apply to every engagement, every time
              </div>
            </div>
          </div>
          <style jsx>{`@media(max-width:768px){.quality-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "#0f172a", padding: "80px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 300, background: "radial-gradient(ellipse, rgba(236,115,35,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 540, margin: "0 auto", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 800, lineHeight: 1.15, color: "#fff", marginBottom: 14, letterSpacing: "-0.02em" }}>
            Ready to work with a team<br />
            <span style={{ color: "#ec7323" }}>that actually delivers?</span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#94a3b8", marginBottom: 32 }}>
            Start with a free discovery call. No pitch deck. Just a conversation with a senior engineer about your store.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#ec7323", color: "#fff",
              padding: "14px 28px", borderRadius: 9,
              fontSize: 14, fontWeight: 600, textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#d4621a"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#ec7323"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              Book Free Discovery Call <ArrowRight size={15} />
            </Link>
            <Link href="/services" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1.5px solid rgba(255,255,255,0.15)", color: "#fff",
              padding: "14px 28px", borderRadius: 9,
              fontSize: 14, fontWeight: 600, textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#ec7323"; (e.currentTarget as HTMLElement).style.color = "#ec7323"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}>
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
