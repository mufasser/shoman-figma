"use client";
import { ArrowRight, Calendar, Clock, Rocket, ShoppingBag, Shuffle, Store } from "lucide-react";

const posts = [
  {
    tag: "Adobe Commerce",
    tagColor: "#FF0000",
    title: "Why Your Magento Checkout Is Losing You 30% of Conversions",
    excerpt:
      "The most common performance bottlenecks on Adobe Commerce stores aren't always obvious — and fixing them doesn't require a rebuild. Here's where to look first.",
    date: "12 Nov 2024",
    readTime: "5 min read",
    num: "01",
    icon: ShoppingBag,
  },
  {
    tag: "Migration",
    tagColor: "#F46F25",
    title: "The Magento to Shopify Migration Checklist We Actually Use",
    excerpt:
      "After 40+ platform migrations, we've refined a process that protects your SEO, your data, and your sanity. Here's exactly what it covers and why.",
    date: "28 Oct 2024",
    readTime: "8 min read",
    num: "02",
    icon: Shuffle,
  },
  {
    tag: "Shopify",
    tagColor: "#96BF48",
    title: "Shopify Plus vs Custom Adobe Commerce: A Straight-Talking Guide",
    excerpt:
      "We work with both platforms every day. This isn't a sales pitch — it's an honest comparison for technical decision-makers who need the right answer, not a pretty one.",
    date: "15 Oct 2024",
    readTime: "6 min read",
    num: "03",
    icon: Store,
  },
];

export function Blog() {
  return (
    <section style={{ background: "var(--color-bg-soft)", padding: "96px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "var(--color-brand)",
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 12, display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 24, height: 2, background: "var(--color-brand)", display: "inline-block" }} />
              Our Blog
            </div>
            <h2 style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 800, lineHeight: 1.2,
              letterSpacing: "-0.02em", color: "var(--color-ink)",
            }}>
              Technical insights,<br />no filler.
            </h2>
          </div>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: "1.5px solid var(--color-border)", borderRadius: 10,
            padding: "11px 20px",
            fontSize: 13, fontWeight: 600, color: "var(--color-ink)",
            textDecoration: "none",
            transition: "all 0.2s",
            background: "var(--color-white)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--color-brand)";
            (e.currentTarget as HTMLElement).style.color = "var(--color-brand)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
            (e.currentTarget as HTMLElement).style.color = "var(--color-ink)";
          }}>
            View All <ArrowRight size={14} />
          </a>
        </div>

        {/* Blog cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="blog-grid">
          {posts.map((post) => {
            const Icon = post.icon;
            return (
            <article key={post.title} className="blog-card" style={{
              background: "var(--color-white)",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid var(--color-border)",
              transition: "box-shadow 0.25s, transform 0.25s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.08)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}>

              {/* Image placeholder */}
              <div style={{
                height: 180, background: `linear-gradient(135deg, ${post.tagColor}15 0%, ${post.tagColor}30 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
              }}>
                <Icon size={58} color={post.tagColor} strokeWidth={1.8} opacity={0.3} />
                <div style={{
                  position: "absolute", top: 16, left: 16,
                  background: post.tagColor + "15",
                  border: `1px solid ${post.tagColor}30`,
                  borderRadius: 100, padding: "4px 12px",
                }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: post.tagColor }}>{post.tag}</span>
                </div>
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  fontSize: 32, fontWeight: 900, color: post.tagColor, opacity: 0.15,
                  fontFamily: "var(--font-serif)",
                }}>{post.num}</div>
              </div>

              <div style={{ padding: 24 }}>
                <h3 style={{
                  fontSize: 15, fontWeight: 700, lineHeight: 1.4,
                  color: "var(--color-ink)", marginBottom: 10, letterSpacing: "-0.01em",
                }}>{post.title}</h3>

                <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--color-muted)", marginBottom: 20 }}>
                  {post.excerpt}
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: 14 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "var(--color-subtle)" }}>
                      <Calendar size={11} /> {post.date}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "var(--color-subtle)" }}>
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                  <a href="#" style={{
                    display: "flex", alignItems: "center", gap: 4,
                    fontSize: 12, fontWeight: 600, color: "var(--color-brand)",
                    textDecoration: "none",
                  }}>
                    Read <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export function CommunityBanner() {
  return (
    <section style={{ background: "var(--color-ink)", padding: "80px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800, height: 400,
        background: "radial-gradient(ellipse, rgba(var(--color-brand-rgb), 0.1) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(var(--color-brand-rgb), 0.1)",
          border: "1px solid rgba(var(--color-brand-rgb), 0.2)",
          borderRadius: 100, padding: "6px 16px", marginBottom: 24,
        }}>
          <Rocket size={14} color="var(--color-brand)" strokeWidth={2.2} />
          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-brand)" }}>Free discovery call — no commitment</span>
        </div>

        <h2 style={{
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 800, lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: "var(--color-white)", marginBottom: 16,
        }}>
          Ready to build ecommerce<br />
          <span style={{ color: "var(--color-brand)" }}>that actually performs?</span>
        </h2>

        <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-subtle)", marginBottom: 36 }}>
          Tell us where your store is today and where it needs to be. No jargon, no hard sell — just a direct conversation with a senior engineer.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <div style={{
            display: "flex", background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 10, overflow: "hidden",
          }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                padding: "14px 20px", fontSize: 14, background: "transparent",
                border: "none", outline: "none", color: "var(--color-white)", width: 260,
              }}
            />
            <button style={{
              padding: "14px 20px", background: "var(--color-brand)", border: "none",
              cursor: "pointer", fontSize: 14, fontWeight: 600, color: "var(--color-white)",
              display: "flex", alignItems: "center", gap: 6,
              transition: "background 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-brand-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-brand)")}>
              Get Started <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <p style={{ marginTop: 16, fontSize: 12, color: "var(--color-copy)" }}>
          Or <a href="#" style={{ color: "var(--color-brand)", textDecoration: "none", fontWeight: 600 }}>book a 30-min call directly →</a>
        </p>
      </div>
    </section>
  );
}
