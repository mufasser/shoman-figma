"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { SectionLabel } from "@/components/services/ServiceComponents";
import {
  ArrowRight,
  ChevronRight,
  FileText,
  Globe2,
  Handshake,
  KeyRound,
  Microscope,
  Search,
  Target,
} from "lucide-react";
import Link from "next/link";
import LogoTicker from "@/components/LogoTicker";
import Image from "next/image";

const team = [
  { initial: "S", name: "Shoman", role: "Founder & Lead Engineer", color: "#ec7323", years: "10+ yrs", platforms: "Adobe Commerce · Shopify Plus" },
  { initial: "A", name: "Alex R.", role: "Senior Backend Engineer", color: "#FF0000", years: "8 yrs", platforms: "Magento 2 · Adobe Commerce" },
  { initial: "J", name: "James K.", role: "Shopify Solutions Engineer", color: "#96BF48", years: "6 yrs", platforms: "Shopify · Shopify Plus" },
  { initial: "P", name: "Priya M.", role: "Integration Architect", color: "#6366F1", years: "9 yrs", platforms: "SAP · Salesforce · APIs" },
  { initial: "T", name: "Tom W.", role: "Frontend Engineer", color: "#0284C7", years: "5 yrs", platforms: "Liquid · React · Tailwind" },
  { initial: "R", name: "Rachel S.", role: "Project Lead", color: "#F46F25", years: "7 yrs", platforms: "Delivery · Client Relations" },
];

const values = [
  { icon: Search, title: "Transparency", body: "We tell you what we find, not what you want to hear. If your codebase is a mess, we say so — and we show you exactly what it will take to fix it. No sugar-coating, ever." },
  { icon: Target, title: "Precision", body: "Senior engineers only. Every line of code reviewed before it goes live. We don't guess — we test, validate, and document. The quality bar is the same on sprint one and sprint fifty." },
  { icon: Handshake, title: "Partnership", body: "You own the code. Always. No retainer lock-ins, no vendor dependency. We're here to make your team stronger, not dependent on ours. Exit conditions are always clean." },
];

const timeline = [
  { year: "2014", title: "Started specialising in Magento", body: "Degan Dubotog Magenta ocorunerco platforos and delvering custom solutiona for UK retalers." },
  { year: "2016", title: "Built a global reputation", body: "Surted ecruing otn aponcies and merchants worldelde trough Uwat,  detvering 50+ succesets projects" },
  { year: "2019", title: "Enterprice intogrations & API innovation", body: "Deleernd compler tRP, COM and Doo-perty integratione including one of the cersest Am-driven Trustatos Integrationa for Megeno." },
  { year: "2021", title: "Earty Magento 2 Certifiod Engincer", body: "Achieves Mapento 2 corufication chanty ener launch, heiging businesses migrade frown Magento 1 to Magendo 2 win coefidence." },
  { year: "2024", title: "Adobe Commerce App Bullder", body: "Adroted Aditbe Commerca Apo Quidor to bula evert-olion, sorverlece trtegrations ubing Adube U Events and AFt Mesh," },
  { year: "2026+", title: "150+ ecommoreo projects delivered", body: "Over a decade ef engineering acroes Altbe Cornerce, Shopty and lvegretiona nich recalers, agencies and emerprise brands." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "var(--color-white)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        paddingTop: 72, background: "var(--color-white)",
        borderBottom: "1px solid var(--color-border)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -100, right: -100,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(var(--color-brand-rgb), 0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 24px 72px", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
            <Link href="/" style={{ fontSize: 13, color: "var(--color-subtle)", textDecoration: "none", fontWeight: 500 }}>Home</Link>
            <ChevronRight size={13} color="var(--color-border-strong)" />
            <span style={{ fontSize: 13, color: "var(--color-ink)", fontWeight: 600 }}>About</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="about-hero-grid">
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--color-brand-soft)", border: "1px solid rgba(var(--color-brand-rgb), 0.2)",
                borderRadius: 100, padding: "6px 14px", marginBottom: 20,
              }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-brand)" }}>eCommerce experts</span>
              </div>
              <h1 style={{
                fontSize: "clamp(32px, 4vw, 54px)",
                fontWeight: 800, lineHeight: 1.1,
                letterSpacing: "-0.03em", color: "var(--color-ink)", marginBottom: 20,
              }}>
                10+ Years Engineering<br />
                <span style={{ color: "var(--color-brand)" }}>What Others Can&apos;t Fix.</span>
              </h1>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--color-copy)", marginBottom: 32, maxWidth: 500 }}>
                We started because too many UK merchants were stuck with agencies that sold them platforms they couldn&apos;t maintain. We built the team that fixes those platforms — and builds ones that don&apos;t break.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "var(--color-brand)", color: "var(--color-white)",
                  padding: "13px 24px", borderRadius: 9,
                  fontSize: 14, fontWeight: 600, textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--color-brand-hover)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--color-brand)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}>
                  Work With Us <ArrowRight size={15} />
                </Link>
                <Link href="/services" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  border: "1.5px solid var(--color-border)", color: "var(--color-ink)",
                  padding: "13px 24px", borderRadius: 9,
                  fontSize: 14, fontWeight: 600, textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-brand)";
                  (e.currentTarget as HTMLElement).style.color = "var(--color-brand)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--color-ink)";
                }}>
                  View Our Services
                </Link>
              </div>
            </div>

            {/* Stats panel */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { value: "10+", label: "Years active", sub: "Founded 2014", color: "var(--color-brand)" },
                { value: "50+", label: "Projects delivered", sub: "Across all platforms", color: "#0284C7" },
                { value: "100%", label: "Senior Engineers", sub: "No juniors, ever", color: "#96BF48" },
                { value: "25+", label: "Agency partners", sub: "White-label programme", color: "#6366F1" },
                { value: "98%", label: "Client retention", sub: "Year-on-year", color: "#F46F25" },
                { value: "100%", label: "Code ownership", sub: "Always yours", color: "#FF0000" },
              ].map((s) => (
                <div key={s.label} style={{
                  background: "var(--color-bg-soft)",
                  border: "1px solid var(--color-border)",
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
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-ink)", marginTop: 6 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: "var(--color-subtle)", marginTop: 2 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`@media(max-width:768px){.about-hero-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
      </section>

      <LogoTicker />

      {/* Our story / timeline */}
      <section style={{ background: "var(--color-bg-soft)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }} className="story-grid">
            <div>
              <SectionLabel text="Our Story" />
              <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--color-ink)", marginBottom: 16 }}>
                Built out of frustration<br />with bad ecommerce agencies.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--color-copy)", marginBottom: 16 }}>
                We&apos;ve been called in to rescue slow stores, failed migrations, abandoned Magento projects and integrations held together with duct tape. Shopify builds that barely worked on mobile. Integrations bodged together with Zapier.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--color-copy)", marginBottom: 16 }}>
                So we built the team we wished those merchants had hired in the first place. Senior engineers who own platforms at depth — not generalists who&apos;ve watched a few tutorials.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--color-copy)" }}>
                A decade later, that&apos;s still the standard. Same team, same values, same stubbornness about doing it properly.
              </p>
            </div>

            {/* Timeline */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", left: 19, top: 24, bottom: 24,
                width: 2, background: "linear-gradient(to bottom, var(--color-brand), rgba(var(--color-brand-rgb), 0.2))",
              }} />
              {timeline.map((item, i) => (
                <div key={item.year} style={{
                  display: "flex", gap: 24, marginBottom: i < timeline.length - 1 ? 32 : 0,
                  position: "relative", zIndex: 1,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "var(--color-brand)", color: "var(--color-white)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 800, flexShrink: 0,
                    boxShadow: "0 0 0 4px rgba(var(--color-brand-rgb), 0.15)",
                  }}>{item.year.slice(2)}</div>
                  <div style={{ paddingTop: 8 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-brand)", letterSpacing: "0.06em", marginBottom: 4 }}>{item.year}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-ink)", marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.7, color: "var(--color-muted)" }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`@media(max-width:768px){.story-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: "var(--color-white)", display: "none", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionLabel text="The Team" />
            <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--color-ink)" }}>
              Senior engineers.<br />No exceptions.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--color-copy)", marginTop: 14, maxWidth: 500, margin: "14px auto 0" }}>
              Every engineer on our team has worked at senior level for 5+ years on their specialist platforms. No juniors, no offshore hand-offs, no surprises.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="team-grid">
            {team.map((m) => (
              <div key={m.name} style={{
                background: "var(--color-bg-soft)",
                border: "1px solid var(--color-border)",
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
                    fontSize: 20, fontWeight: 800, color: "var(--color-white)", flexShrink: 0,
                  }}>{m.initial}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-ink)" }}>{m.name}</div>
                    <div style={{ fontSize: 12, color: "var(--color-muted)" }}>{m.role}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{
                    fontSize: 11, fontWeight: 600, color: m.color,
                    background: m.color + "15", padding: "3px 10px", borderRadius: 100,
                  }}>{m.years}</span>
                  <span style={{
                    fontSize: 11, fontWeight: 500, color: "var(--color-copy)",
                    background: "var(--color-bg-muted)", padding: "3px 10px", borderRadius: 100,
                    border: "1px solid var(--color-border)",
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
      <section style={{ background: "var(--color-bg-soft)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <SectionLabel text="Our Values" />
            <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--color-ink)" }}>
              Three principles. Non-negotiable.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="values-grid">
            {values.map((v, i) => {
              const Icon = v.icon;

              return (
              <div key={v.title} style={{
                background: "var(--color-white)",
                border: "1.5px solid var(--color-border)",
                borderRadius: 16, padding: "36px 28px",
                position: "relative", overflow: "hidden",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(var(--color-brand-rgb), 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}>
                <div style={{
                  position: "absolute", top: -10, right: -10,
                  fontSize: 80, opacity: 0.04, lineHeight: 1,
                }}>{["0" + (i + 1), ""][0]}</div>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "var(--color-brand-soft)",
                  color: "var(--color-brand)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}>
                  <Icon size={24} strokeWidth={2.1} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--color-ink)", marginBottom: 12, letterSpacing: "-0.01em" }}>{v.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--color-muted)" }}>{v.body}</p>
              </div>
              );
            })}
          </div>
          <style jsx>{`@media(max-width:768px){.values-grid{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* Quality promise */}
      <section style={{ background: "var(--color-white)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="quality-grid">
            <div>
              <SectionLabel text="Our Quality Standards" />
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--color-ink)", marginBottom: 16 }}>
                How we make sure it&apos;s right before it goes live
              </h2>
              <p>Four rules we apply on every project, every sprint, every time — without exception.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: Microscope, title: "Senior code review on every PR", body: "No code goes to staging without review by a second senior engineer. We catch problems before your customers do." },
                  { icon: Globe2, title: "Staging-first, always", body: "Every change is tested in a mirrored staging environment. We never push directly to live — no exceptions, even for small fixes." },
                  { icon: FileText, title: "Full documentation on handover", body: "Architecture decisions, deployment process, custom features — all documented and handed over at the end of every project or sprint." },
                  { icon: KeyRound, title: "Code ownership from day one", body: "Your code belongs to you the moment we write it. No licensing, no dependencies on us to deploy it, no conditions attached." },
                ].map((q) => {
                  const Icon = q.icon;

                  return (
                  <div key={q.title} style={{ display: "flex", gap: 14, padding: "16px 18px", background: "var(--color-bg-soft)", border: "1px solid var(--color-border)", borderRadius: 10 }}>
                    <span style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: "var(--color-white)",
                      color: "var(--color-brand)",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}>
                      <Icon size={17} strokeWidth={2.2} />
                    </span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-ink)", marginBottom: 4 }}>{q.title}</div>
                      <div style={{ fontSize: 13, lineHeight: 1.65, color: "var(--color-muted)" }}>{q.body}</div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>

            {/* Dark card */}
            <div style={{ borderRadius: 20, padding: 32, position: 'relative', height: '400px', overflow: 'hidden', top: '80px' }}>
            <Image 
              src="/section/quality-body.png" 
              alt="Quality standards" 
              fill // 2. Replaces explicit width and height props
              style={{ objectFit: 'cover' }} // 3. Now works perfectly as intended
            />
          </div>
          </div>
          <style jsx>{`@media(max-width:768px){.quality-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
        </div>
      </section>

      <FinalCTA />

      <Footer />
    </div>
  );
}
