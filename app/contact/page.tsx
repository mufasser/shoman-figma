"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const INPUT_STYLE: React.CSSProperties = {
  width: "100%", padding: "12px 14px",
  border: "1.5px solid #e2e8f0", borderRadius: 8,
  fontSize: 14, color: "#0f172a", background: "#fff",
  outline: "none", transition: "border-color 0.2s",
  fontFamily: "inherit",
};

const LABEL_STYLE: React.CSSProperties = {
  display: "block", fontSize: 13, fontWeight: 600,
  color: "#0f172a", marginBottom: 6,
};

const serviceOptions = [
  { label: "Adobe Commerce / Magento", color: "#FF0000" },
  { label: "Shopify Development", color: "#96BF48" },
  { label: "Migration (Magento → Shopify)", color: "#F46F25" },
  { label: "Technical Audit", color: "#0284C7" },
  { label: "Systems Integration", color: "#6366F1" },
  { label: "White-Label Partnership", color: "#0284C7" },
];

export default function ContactPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", platform: "", stage: "", budget: "", message: "" });

  const toggleService = (s: string) =>
    setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: 72, background: "#fff", borderBottom: "1px solid #e2e8f0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(236,115,35,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "48px 24px 56px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 20 }}>
            <Link href="/" style={{ fontSize: 13, color: "#94a3b8", textDecoration: "none", fontWeight: 500 }}>Home</Link>
            <ChevronRight size={13} color="#cbd5e1" />
            <span style={{ fontSize: 13, color: "#0f172a", fontWeight: 600 }}>Contact</span>
          </div>
          <div style={{ maxWidth: 540 }}>
            <h1 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#0f172a", marginBottom: 16 }}>
              Let&apos;s talk about<br />
              <span style={{ color: "#ec7323" }}>your store.</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#475569" }}>
              No pitch deck. No generic proposal template. Just a direct conversation about what your platform needs — with a senior engineer, not a sales rep.
            </p>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section style={{ background: "#f8fafc", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, alignItems: "start" }} className="contact-grid">

          {/* Form */}
          {!submitted ? (
            <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 20, padding: "40px 36px" }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "#0f172a", marginBottom: 6 }}>Send us an enquiry</h2>
              <p style={{ fontSize: 13, color: "#64748b", marginBottom: 28 }}>We respond within 24 hours on business days.</p>

              <form onSubmit={handleSubmit}>
                {/* Name + Company */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-two-col">
                  <div>
                    <label style={LABEL_STYLE}>Full Name *</label>
                    <input required type="text" placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={INPUT_STYLE}
                    onFocus={e => (e.currentTarget.style.borderColor = "#ec7323")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#e2e8f0")} />
                  </div>
                  <div>
                    <label style={LABEL_STYLE}>Company Name</label>
                    <input type="text" placeholder="Your company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} style={INPUT_STYLE}
                    onFocus={e => (e.currentTarget.style.borderColor = "#ec7323")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#e2e8f0")} />
                  </div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: 16 }}>
                  <label style={LABEL_STYLE}>Email Address *</label>
                  <input required type="email" placeholder="you@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={INPUT_STYLE}
                  onFocus={e => (e.currentTarget.style.borderColor = "#ec7323")}
                  onBlur={e => (e.currentTarget.style.borderColor = "#e2e8f0")} />
                </div>

                {/* Platform + Stage */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-two-col">
                  <div>
                    <label style={LABEL_STYLE}>Current Platform</label>
                    <select value={form.platform} onChange={e => setForm({ ...form, platform: e.target.value })} style={{ ...INPUT_STYLE, color: form.platform ? "#0f172a" : "#94a3b8" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "#ec7323")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#e2e8f0")}>
                      <option value="">Select platform</option>
                      <option>Magento 2</option>
                      <option>Adobe Commerce</option>
                      <option>Shopify</option>
                      <option>Shopify Plus</option>
                      <option>WooCommerce</option>
                      <option>Magento 1</option>
                      <option>No store yet</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={LABEL_STYLE}>Business Stage</label>
                    <select value={form.stage} onChange={e => setForm({ ...form, stage: e.target.value })} style={{ ...INPUT_STYLE, color: form.stage ? "#0f172a" : "#94a3b8" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "#ec7323")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#e2e8f0")}>
                      <option value="">Select stage</option>
                      <option>Startup (pre-launch)</option>
                      <option>Growing (£0–£500K/yr)</option>
                      <option>Established (£500K–£5M/yr)</option>
                      <option>Enterprise (£5M+/yr)</option>
                    </select>
                  </div>
                </div>

                {/* Services */}
                <div style={{ marginBottom: 16 }}>
                  <label style={LABEL_STYLE}>Services Interested In</label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {serviceOptions.map((opt) => {
                      const isSelected = selected.includes(opt.label);
                      return (
                        <button key={opt.label} type="button" onClick={() => toggleService(opt.label)} style={{
                          padding: "7px 14px", borderRadius: 8, cursor: "pointer",
                          fontSize: 12, fontWeight: 600,
                          border: `1.5px solid ${isSelected ? opt.color : "#e2e8f0"}`,
                          background: isSelected ? opt.color + "15" : "#f8fafc",
                          color: isSelected ? opt.color : "#64748b",
                          transition: "all 0.15s",
                          display: "flex", alignItems: "center", gap: 5,
                        }}>
                          {isSelected && <Check size={11} />}
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget */}
                <div style={{ marginBottom: 16 }}>
                  <label style={LABEL_STYLE}>Estimated Budget</label>
                  <select value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} style={{ ...INPUT_STYLE, color: form.budget ? "#0f172a" : "#94a3b8" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "#ec7323")}
                  onBlur={e => (e.currentTarget.style.borderColor = "#e2e8f0")}>
                    <option value="">Select budget range</option>
                    <option>Under £2,000</option>
                    <option>£2,000 – £5,000</option>
                    <option>£5,000 – £15,000</option>
                    <option>£15,000 – £50,000</option>
                    <option>£50,000+</option>
                    <option>Let&apos;s discuss</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 24 }}>
                  <label style={LABEL_STYLE}>Tell Us What You Need</label>
                  <textarea placeholder="Describe your current situation and what you're trying to achieve. The more detail, the better our first call will be..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4} style={{ ...INPUT_STYLE, resize: "vertical", minHeight: 100 }}
                  onFocus={e => (e.currentTarget.style.borderColor = "#ec7323")}
                  onBlur={e => (e.currentTarget.style.borderColor = "#e2e8f0")} />
                </div>

                <button type="submit" style={{
                  width: "100%", padding: "14px 0", borderRadius: 9,
                  background: "#ec7323", color: "#fff", border: "none",
                  fontSize: 15, fontWeight: 700, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#d4621a"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#ec7323"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                  Send Enquiry <ArrowRight size={16} />
                </button>
                <p style={{ textAlign: "center", fontSize: 12, color: "#94a3b8", marginTop: 12 }}>
                  We respond within 24 hours · No commitment required
                </p>
              </form>
            </div>
          ) : (
            <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 20, padding: "64px 36px", textAlign: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#f0fdf4", border: "2px solid #10b981", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <Check size={28} color="#10b981" strokeWidth={2.5} />
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 12 }}>Enquiry received!</h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#64748b", marginBottom: 28, maxWidth: 380, margin: "0 auto 28px" }}>
                Thanks {form.name ? form.name.split(" ")[0] : ""}. We&apos;ll review your enquiry and come back to you within 24 hours with a direct response from a senior engineer.
              </p>
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#ec7323", color: "#fff", padding: "12px 24px", borderRadius: 9, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                Back to Home <ArrowRight size={14} />
              </Link>
            </div>
          )}

          {/* Info panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* What happens next */}
            <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 16, padding: 28 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 20 }}>What happens next?</h3>
              {[
                { num: "1", title: "We review your enquiry", body: "A senior engineer reads your submission and looks at your current platform within 24 hours.", color: "#ec7323" },
                { num: "2", title: "Discovery call booked", body: "We come back with a suggested time for a 30-minute call. No prep required from your side.", color: "#0284C7" },
                { num: "3", title: "Honest proposal sent", body: "After the call, we send a clear written proposal — scope, timeline, and cost. No hidden fees.", color: "#96BF48" },
              ].map((s) => (
                <div key={s.num} style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#fff", flexShrink: 0 }}>{s.num}</div>
                  <div style={{ paddingTop: 4 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 3 }}>{s.title}</div>
                    <div style={{ fontSize: 12, lineHeight: 1.65, color: "#64748b" }}>{s.body}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 16, padding: 24 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 14 }}>Or reach us directly</h3>
              {[
                { icon: "📧", label: "Email", value: "hello@shomansolutions.com", href: "mailto:hello@shomansolutions.com" },
                { icon: "💼", label: "LinkedIn", value: "Shoman Solutions", href: "#" },
                { icon: "📅", label: "Book a call", value: "30-min discovery — Calendly", href: "#" },
              ].map((c) => (
                <a key={c.label} href={c.href} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid #f1f5f9", textDecoration: "none" }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500 }}>{c.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#ec7323" }}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Trust */}
            <div style={{ background: "#0f172a", borderRadius: 16, padding: 24 }}>
              {[
                { icon: "🔒", text: "Your details are never shared with third parties" },
                { icon: "⚡", text: "24-hour response guarantee on business days" },
                { icon: "🇬🇧", text: "UK-based team — no timezone friction" },
                { icon: "📄", text: "NDA available before any project details shared" },
              ].map((t) => (
                <div key={t.text} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid #1e293b" }}>
                  <span style={{ fontSize: 16 }}>{t.icon}</span>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>{t.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style jsx>{`
        @media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}}
        @media(max-width:600px){.form-two-col{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  );
}
