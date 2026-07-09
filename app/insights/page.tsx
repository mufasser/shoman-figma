"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, ChevronRight, Clock, Inbox, Mail, PenLine, Settings, ShieldCheck, ShoppingBag, Shuffle, Star, Store, TrendingUp } from "lucide-react";
import Link from "next/link";

const posts = [
  { id: 1, tag: "Adobe Commerce", tagColor: "#FF0000", tagBg: "#fff5f5", title: "Why Your Magento Checkout Is Losing You 30% of Conversions", excerpt: "The most common performance bottlenecks on Adobe Commerce stores aren't obvious — and fixing them doesn't require a full rebuild. Here's where to look first.", date: "12 Nov 2024", readTime: "5 min", featured: true, icon: ShoppingBag },
  { id: 2, tag: "Migration", tagColor: "#F46F25", tagBg: "#fff8f0", title: "The Magento to Shopify Migration Checklist We Actually Use", excerpt: "After 40+ platform migrations, we've refined a process that protects your SEO, your data, and your sanity. Here's exactly what it covers and why.", date: "28 Oct 2024", readTime: "8 min", featured: false, icon: Shuffle },
  { id: 3, tag: "Shopify", tagColor: "#96BF48", tagBg: "#f5fbee", title: "Shopify Plus vs Adobe Commerce: A Straight-Talking Guide", excerpt: "We work with both platforms every day. This isn't a sales pitch — it's an honest comparison for technical decision-makers who need the right answer.", date: "15 Oct 2024", readTime: "6 min", featured: false, icon: Store },
  { id: 4, tag: "Integration", tagColor: "#6366F1", tagBg: "#f5f3ff", title: "Why Off-The-Shelf Integration Apps Keep Breaking", excerpt: "Generic Shopify apps work until your business has real complexity. Here's why custom middleware beats app-stack integrations every time.", date: "3 Oct 2024", readTime: "7 min", featured: false, icon: Settings },
  { id: 5, tag: "Adobe Commerce", tagColor: "#FF0000", tagBg: "#fff5f5", title: "Adobe Commerce Security Patches: What They Are and Why They Can't Wait", excerpt: "A plain-English guide to Adobe Commerce security patches — what APSB notices mean, how to read severity ratings, and how to apply patches safely.", date: "20 Sep 2024", readTime: "4 min", featured: false, icon: ShieldCheck },
  { id: 6, tag: "Shopify", tagColor: "#96BF48", tagBg: "#f5fbee", title: "Building a High-Converting Shopify Store: What Actually Moves the Needle", excerpt: "After 80+ Shopify builds, we know which decisions drive conversion and which ones agencies spend time on that buyers don't notice or care about.", date: "5 Sep 2024", readTime: "6 min", featured: false, icon: TrendingUp },
];

const categories = ["All", "Adobe Commerce", "Shopify", "Migration", "Integration"];

export default function InsightsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter(p => p.tag === active);
  const [featured, ...rest] = filtered;
  const FeaturedIcon = featured?.icon;

  return (
    <div style={{ background: "var(--color-white)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: 72, background: "var(--color-white)", borderBottom: "1px solid var(--color-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(var(--color-brand-rgb), 0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 24px 64px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
            <Link href="/" style={{ fontSize: 13, color: "var(--color-subtle)", textDecoration: "none", fontWeight: 500 }}>Home</Link>
            <ChevronRight size={13} color="var(--color-border-strong)" />
            <span style={{ fontSize: 13, color: "var(--color-ink)", fontWeight: 600 }}>Insights</span>
          </div>
          <div style={{ maxWidth: 560 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-brand-soft)", border: "1px solid rgba(var(--color-brand-rgb), 0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 20 }}>
              <PenLine size={14} color="var(--color-brand)" strokeWidth={2.2} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-brand)" }}>TECHNICAL INSIGHTS · NO FILLER</span>
            </div>
            <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--color-ink)", marginBottom: 16 }}>
              Ecommerce engineering<br />
              <span style={{ color: "var(--color-brand)" }}>explained plainly.</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--color-copy)" }}>
              Written by the engineers who do the work — not a content team. Practical guides on Adobe Commerce, Shopify, migrations, and integrations.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-bg-soft)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>

          {/* Category filter */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48 }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                padding: "8px 18px", borderRadius: 100,
                fontSize: 13, fontWeight: 600, cursor: "pointer",
                border: `1.5px solid ${active === cat ? "var(--color-brand)" : "var(--color-border)"}`,
                background: active === cat ? "var(--color-brand)" : "var(--color-white)",
                color: active === cat ? "var(--color-white)" : "var(--color-muted)",
                transition: "all 0.2s",
              }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <div style={{ background: "var(--color-white)", border: "1.5px solid var(--color-border)", borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", marginBottom: 24, cursor: "pointer", transition: "box-shadow 0.2s, transform 0.2s" }} className="featured-post"
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0, 0, 0, 0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              <div style={{ height: "100%", minHeight: 280, background: `linear-gradient(135deg, ${featured.tagColor}18, ${featured.tagColor}30)`, display: "flex", alignItems: "center", justifyContent: "center", color: featured.tagColor, position: "relative" }}>
                {FeaturedIcon && <FeaturedIcon size={72} strokeWidth={1.8} />}
                <div style={{ position: "absolute", top: 20, left: 20, background: featured.tagBg, border: `1px solid ${featured.tagColor}30`, borderRadius: 100, padding: "4px 12px" }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: featured.tagColor }}>{featured.tag}</span>
                </div>
                <div style={{ position: "absolute", bottom: 20, left: 20, background: "rgba(var(--color-ink-rgb), 0.7)", borderRadius: 100, padding: "4px 12px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 600, color: "var(--color-white)" }}><Star size={11} fill="currentColor" /> Featured</span>
                </div>
              </div>
              <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: 16, marginBottom: 14 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--color-subtle)" }}><Calendar size={12} /> {featured.date}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--color-subtle)" }}><Clock size={12} /> {featured.readTime} read</span>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--color-ink)", lineHeight: 1.3, marginBottom: 14, letterSpacing: "-0.01em" }}>{featured.title}</h2>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--color-muted)", marginBottom: 24 }}>{featured.excerpt}</p>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-brand)", color: "var(--color-white)", padding: "11px 20px", borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none", width: "fit-content", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-hover)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand)")}>
                  Read Article <ArrowRight size={14} />
                </a>
              </div>
            </div>
          )}

          {/* Post grid */}
          {rest.length > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="posts-grid">
              {rest.map((post) => {
                const Icon = post.icon;
                return (
                <article key={post.id} style={{ background: "var(--color-white)", border: "1px solid var(--color-border)", borderRadius: 16, overflow: "hidden", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(0, 0, 0, 0.07)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                  <div style={{ height: 160, background: `linear-gradient(135deg, ${post.tagColor}15, ${post.tagColor}28)`, display: "flex", alignItems: "center", justifyContent: "center", color: post.tagColor, position: "relative" }}>
                    <Icon size={46} strokeWidth={1.9} />
                    <div style={{ position: "absolute", top: 14, left: 14, background: post.tagBg, border: `1px solid ${post.tagColor}30`, borderRadius: 100, padding: "3px 10px" }}>
                      <span style={{ fontSize: 10, fontWeight: 600, color: post.tagColor }}>{post.tag}</span>
                    </div>
                  </div>
                  <div style={{ padding: "20px 20px 22px" }}>
                    <div style={{ display: "flex", gap: 14, marginBottom: 10 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "var(--color-subtle)" }}><Calendar size={11} /> {post.date}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "var(--color-subtle)" }}><Clock size={11} /> {post.readTime} read</span>
                    </div>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-ink)", lineHeight: 1.4, marginBottom: 9 }}>{post.title}</h3>
                    <p style={{ fontSize: 12, lineHeight: 1.7, color: "var(--color-muted)", marginBottom: 16 }}>{post.excerpt}</p>
                    <a href="#" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 600, color: post.tagColor, textDecoration: "none", transition: "gap 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.gap = "9px")}
                    onMouseLeave={e => (e.currentTarget.style.gap = "5px")}>
                      Read Article <ArrowRight size={12} />
                    </a>
                  </div>
                </article>
                );
              })}
            </div>
          )}

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "64px 0", color: "var(--color-subtle)" }}>
              <Inbox size={36} color="var(--color-subtle)" style={{ marginBottom: 12 }} />
              <p>No articles found for &ldquo;{active}&rdquo;</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ background: "var(--color-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <Mail size={38} color="var(--color-brand)" style={{ marginBottom: 16 }} />
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "var(--color-ink)", marginBottom: 12 }}>New articles, straight to your inbox</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--color-muted)", marginBottom: 24 }}>
            One email when a new article is published. No newsletters. No marketing. Unsubscribe any time.
          </p>
          <div style={{ display: "flex", background: "var(--color-bg-soft)", border: "1.5px solid var(--color-border)", borderRadius: 10, overflow: "hidden" }}
          onFocus={() => {}} onBlur={() => {}}>
            <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: "13px 16px", fontSize: 14, border: "none", background: "transparent", outline: "none", color: "var(--color-ink)" }} />
            <button style={{ padding: "13px 20px", background: "var(--color-brand)", color: "var(--color-white)", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6, transition: "background 0.2s", whiteSpace: "nowrap" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand)")}>
              Subscribe <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <style jsx>{`
        @media(max-width:768px){
          .featured-post{grid-template-columns:1fr!important}
          .posts-grid{grid-template-columns:1fr 1fr!important}
        }
        @media(max-width:600px){.posts-grid{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  );
}
