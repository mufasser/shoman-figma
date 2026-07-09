"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CalendarDays, ChevronRight, Mail } from "lucide-react";
import Link from "next/link";
import { CommunityBanner } from "@/components/BlogAndCTA";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div style={{ background: "var(--color-white)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: 72, background: "var(--color-white)", borderBottom: "1px solid var(--color-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(var(--color-brand-rgb), 0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "48px 24px 56px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 20 }}>
            <Link href="/" style={{ fontSize: 13, color: "var(--color-subtle)", textDecoration: "none", fontWeight: 500 }}>Home</Link>
            <ChevronRight size={13} color="var(--color-border-strong)" />
            <span style={{ fontSize: 13, color: "var(--color-ink)", fontWeight: 600 }}>Contact</span>
          </div>
          <div className="contact-hero-grid">
            <div>
              <h1 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--color-ink)", marginBottom: 16 }}>
                Let&apos;s talk about<br />
                <span style={{ color: "var(--color-brand)" }}>your store.</span>
              </h1>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--color-copy)" }}>
                No pitch deck. No generic proposal template. Just a direct conversation about what your platform needs — with a senior engineer, not a sales rep.
              </p>
            </div>

            <div className="contact-hero-media" aria-hidden="true">
              <Image
                src="/hero/hero-contact.webp"
                alt=""
                width={400}
                height={400}
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 900px) 100vw, 480px"
                style={{
                  display: "block",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section style={{ background: "var(--color-bg-soft)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, alignItems: "start" }} className="contact-grid">

          {/* Form */}
          <ContactForm />

          {/* Info panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* What happens next */}
            <div style={{ background: "var(--color-white)", border: "1.5px solid var(--color-border)", borderRadius: 16, padding: 28 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--color-ink)", marginBottom: 20 }}>What happens next?</h3>
              {[
                { num: "1", title: "We review your enquiry", body: "A senior engineer reads your submission and reviews your current platform within 24 hours of receiving it.", color: "var(--color-brand)" },
                { num: "2", title: "Discovery call booked", body: "We reply with a suggested time for a 30-minute call. No prep required from your side — just turn up.", color: "#0284C7" },
                { num: "3", title: "Honest proposal sent", body: "After the call, we send a clear written proposal — scope, timeline, and fixed cost. No hidden fees, no surprises.", color: "#96BF48" },
              ].map((s) => (
                <div key={s.num} style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "var(--color-white)", flexShrink: 0 }}>{s.num}</div>
                  <div style={{ paddingTop: 4 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-ink)", marginBottom: 3 }}>{s.title}</div>
                    <div style={{ fontSize: 12, lineHeight: 1.65, color: "var(--color-muted)" }}>{s.body}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div style={{ background: "var(--color-white)", border: "1.5px solid var(--color-border)", borderRadius: 16, padding: 24 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-ink)", marginBottom: 14 }}>Or reach us directly</h3>
              {[
                { icon: Mail, label: "Email", value: "hello@shomansolutions.com", href: "mailto:hello@shomansolutions.com" },
                { icon: CalendarDays, label: "Book a call", value: "30-min discovery — Calendly", href: "#" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                <a key={c.label} href={c.href} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid var(--color-bg-muted)", textDecoration: "none" }}>
                  <span style={{
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    background: "var(--color-brand-soft)",
                    color: "var(--color-brand)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={17} strokeWidth={2.2} />
                  </span>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--color-subtle)", fontWeight: 500 }}>{c.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-brand)" }}>{c.value}</div>
                  </div>
                </a>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      <CommunityBanner />
      <Footer />
      <style jsx>{`
        .contact-hero-grid{
          display:grid;
          grid-template-columns:minmax(0,1fr) minmax(320px,420px);
          gap:48px;
          align-items:center;
        }
        .contact-hero-media{
          position:relative;
          overflow:hidden;
          /*
          border-radius:24px;
          border:1px solid var(--color-border);
          background:var(--color-bg-soft);
          box-shadow:0 24px 70px rgba(15,23,42,0.12);
          */
        }
        @media(max-width:900px){
          .contact-hero-grid{grid-template-columns:1fr!important;gap:32px!important}
          .contact-hero-media{max-width:520px}
          .contact-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  );
}
