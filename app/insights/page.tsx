"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

const posts = [
  { id: 1, tag: "Adobe Commerce", tagColor: "#FF0000", tagBg: "#fff5f5", title: "Why Your Magento Checkout Is Losing You 30% of Conversions", excerpt: "The most common performance bottlenecks on Adobe Commerce stores aren't obvious — and fixing them doesn't require a full rebuild. Here's where to look first.", date: "12 Nov 2024", readTime: "5 min", featured: true, icon: "🔴" },
  { id: 2, tag: "Migration", tagColor: "#F46F25", tagBg: "#fff8f0", title: "The Magento to Shopify Migration Checklist We Actually Use", excerpt: "After 40+ platform migrations, we've refined a process that protects your SEO, your data, and your sanity. Here's exactly what it covers and why.", date: "28 Oct 2024", readTime: "8 min", featured: false, icon: "🔀" },
  { id: 3, tag: "Shopify", tagColor: "#96BF48", tagBg: "#f5fbee", title: "Shopify Plus vs Adobe Commerce: A Straight-Talking Guide", excerpt: "We work with both platforms every day. This isn't a sales pitch — it's an honest comparison for technical decision-makers who need the right answer.", date: "15 Oct 2024", readTime: "6 min", featured: false, icon: "🟢" },
  { id: 4, tag: "Integration", tagColor: "#6366F1", tagBg: "#f5f3ff", title: "Why Off-The-Shelf Integration Apps Keep Breaking", excerpt: "Generic Shopify apps work until your business has real complexity. Here's why custom middleware beats app-stack integrations every time.", date: "3 Oct 2024", readTime: "7 min", featured: false, icon: "⚙️" },
  { id: 5, tag: "Adobe Commerce", tagColor: "#FF0000", tagBg: "#fff5f5", title: "Adobe Commerce Security Patches: What They Are and Why They Can't Wait", excerpt: "A plain-English guide to Adobe Commerce security patches — what APSB notices mean, how to read severity ratings, and how to apply patches safely.", date: "20 Sep 2024", readTime: "4 min", featured: false, icon: "🔒" },
  { id: 6, tag: "Shopify", tagColor: "#96BF48", tagBg: "#f5fbee", title: "Building a High-Converting Shopify Store: What Actually Moves the Needle", excerpt: "After 80+ Shopify builds, we know which decisions drive conversion and which ones agencies spend time on that buyers don't notice or care about.", date: "5 Sep 2024", readTime: "6 min", featured: false, icon: "📈" },
];

const categories = ["All", "Adobe Commerce", "Shopify", "Migration", "Integration"];

export default function InsightsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter(p => p.tag === active);
  const [featured, ...rest] = filtered;

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: 72, background: "#fff", borderBottom: "1px solid #e2e8f0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(236,115,35,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 24px 64px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
            <Link href="/" style={{ fontSize: 13, color: "#94a3b8", textDecoration: "none", fontWeight: 500 }}>Home</Link>
            <ChevronRight size={13} color="#cbd5e1" />
            <span style={{ fontSize: 13, color: "#0f172a", fontWeight: 600 }}>Insights</span>
          </div>
          <div style={{ maxWidth: 560 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fef3e8", border: "1px solid rgba(236,115,35,0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 20 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#ec7323" }}>✍️ TECHNICAL INSIGHTS · NO FILLER</span>
            </div>
            <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#0f172a", marginBottom: 16 }}>
              Ecommerce engineering<br />
              <span style={{ color: "#ec7323" }}>explained plainly.</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#475569" }}>
              Written by the engineers who do the work — not a content team. Practical guides on Adobe Commerce, Shopify, migrations, and integrations.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#f8fafc", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>

          {/* Category filter */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48 }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                padding: "8px 18px", borderRadius: 100,
                fontSize: 13, fontWeight: 600, cursor: "pointer",
                border: `1.5px solid ${active === cat ? "#ec7323" : "#e2e8f0"}`,
                background: active === cat ? "#ec7323" : "#fff",
                color: active === cat ? "#fff" : "#64748b",
                transition: "all 0.2s",
              }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", marginBottom: 24, cursor: "pointer", transition: "box-shadow 0.2s, transform 0.2s" }} className="featured-post"
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              <div style={{ height: "100%", minHeight: 280, background: `linear-gradient(135deg, ${featured.tagColor}18, ${featured.tagColor}30)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80, position: "relative" }}>
                {featured.icon}
                <div style={{ position: "absolute", top: 20, left: 20, background: featured.tagBg, border: `1px solid ${featured.tagColor}30`, borderRadius: 100, padding: "4px 12px" }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: featured.tagColor }}>{featured.tag}</span>
                </div>
                <div style={{ position: "absolute", bottom: 20, left: 20, background: "rgba(15,23,42,0.7)", borderRadius: 100, padding: "4px 12px" }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#fff" }}>⭐ Featured</span>
                </div>
              </div>
              <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: 16, marginBottom: 14 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#94a3b8" }}><Calendar size={12} /> {featured.date}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#94a3b8" }}><Clock size={12} /> {featured.readTime} read</span>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", lineHeight: 1.3, marginBottom: 14, letterSpacing: "-0.01em" }}>{featured.title}</h2>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "#64748b", marginBottom: 24 }}>{featured.excerpt}</p>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#ec7323", color: "#fff", padding: "11px 20px", borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none", width: "fit-content", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#d4621a")}
                onMouseLeave={e => (e.currentTarget.style.background = "#ec7323")}>
                  Read Article <ArrowRight size={14} />
                </a>
              </div>
            </div>
          )}

          {/* Post grid */}
          {rest.length > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="posts-grid">
              {rest.map((post) => (
                <article key={post.id} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, overflow: "hidden", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(0,0,0,0.07)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                  <div style={{ height: 160, background: `linear-gradient(135deg, ${post.tagColor}15, ${post.tagColor}28)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52, position: "relative" }}>
                    {post.icon}
                    <div style={{ position: "absolute", top: 14, left: 14, background: post.tagBg, border: `1px solid ${post.tagColor}30`, borderRadius: 100, padding: "3px 10px" }}>
                      <span style={{ fontSize: 10, fontWeight: 600, color: post.tagColor }}>{post.tag}</span>
                    </div>
                  </div>
                  <div style={{ padding: "20px 20px 22px" }}>
                    <div style={{ display: "flex", gap: 14, marginBottom: 10 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#94a3b8" }}><Calendar size={11} /> {post.date}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#94a3b8" }}><Clock size={11} /> {post.readTime} read</span>
                    </div>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", lineHeight: 1.4, marginBottom: 9 }}>{post.title}</h3>
                    <p style={{ fontSize: 12, lineHeight: 1.7, color: "#64748b", marginBottom: 16 }}>{post.excerpt}</p>
                    <a href="#" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 600, color: post.tagColor, textDecoration: "none", transition: "gap 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.gap = "9px")}
                    onMouseLeave={e => (e.currentTarget.style.gap = "5px")}>
                      Read Article <ArrowRight size={12} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "64px 0", color: "#94a3b8" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>📭</div>
              <p>No articles found for &ldquo;{active}&rdquo;</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ background: "#fff", padding: "64px 24px" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 36, marginBottom: 16 }}>📬</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 12 }}>New articles, straight to your inbox</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: "#64748b", marginBottom: 24 }}>
            One email when a new article is published. No newsletters. No marketing. Unsubscribe any time.
          </p>
          <div style={{ display: "flex", background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: 10, overflow: "hidden" }}
          onFocus={() => {}} onBlur={() => {}}>
            <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: "13px 16px", fontSize: 14, border: "none", background: "transparent", outline: "none", color: "#0f172a" }} />
            <button style={{ padding: "13px 20px", background: "#ec7323", color: "#fff", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6, transition: "background 0.2s", whiteSpace: "nowrap" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#d4621a")}
            onMouseLeave={e => (e.currentTarget.style.background = "#ec7323")}>
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
