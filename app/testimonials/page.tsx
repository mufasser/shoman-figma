"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Play,
  Search,
  Settings,
  ShieldCheck,
  Star,
  Store,
} from "lucide-react";

const BRAND = "var(--color-brand)";

const stats = [
  { value: "98%", label: "Client satisfaction", color: "var(--color-brand)" },
  { value: "150+", label: "Projects completed", color: "var(--color-success)" },
  { value: "4.9/5", label: "Average rating", color: "#96BF48" },
  { value: "87%", label: "Refer us to others", color: "#0284C7" },
];

const filters = ["All", "Adobe Commerce", "Shopify", "Migration", "Integration", "Audit", "White-Label"];

const testimonials = [
  {
    id: 1,
    platform: "Adobe Commerce",
    platformSym: "Ac",
    color: "#FF0000",
    bg: "#fff5f5",
    author: "Sarah M.",
    role: "Head of Ecommerce · UK Fashion Retailer",
    quote:
      "Shoman fixed in two weeks what our previous agency couldn't solve in six months. Our checkout went from 8 seconds to under 2. The conversion difference was immediate.",
    result: "53%",
    resultLabel: "faster checkout",
    initials: "S",
  },
  {
    id: 2,
    platform: "Shopify",
    platformSym: "Sh",
    color: "#96BF48",
    bg: "#f5fbee",
    author: "Marcus P.",
    role: "Founder · DTC Wellness Brand",
    quote:
      "The Shopify Plus build was delivered on time and under budget. The team understood the brief immediately. No hand-holding, no going back and forth. Just delivered.",
    result: "21%",
    resultLabel: "conversion rate lift",
    initials: "M",
  },
  {
    id: 3,
    platform: "Migration",
    platformSym: "M",
    color: "#F46F25",
    bg: "#fff8f0",
    author: "James T.",
    role: "Operations Director · B2B Distributor",
    quote:
      "We were migrating 40,000 orders and a decade of customer history. Shoman gave us a calm, documented launch plan and executed it without drama.",
    result: "0 hrs",
    resultLabel: "downtime",
    initials: "J",
  },
  {
    id: 4,
    platform: "Audit",
    platformSym: "Au",
    color: "#0284C7",
    bg: "#f0f9ff",
    author: "Rachel B.",
    role: "Marketing Director · Health & Beauty Brand",
    quote:
      "We knew something was wrong with our Adobe Commerce store before our January campaign. The audit found every issue and prioritised what mattered.",
    result: "3x",
    resultLabel: "campaign confidence",
    initials: "R",
  },
  {
    id: 5,
    platform: "Shopify",
    platformSym: "Sh",
    color: "#96BF48",
    bg: "#f5fbee",
    author: "Aisha K.",
    role: "Founder · UK DTC Startup",
    quote:
      "As a startup, we were worried about affordability, but the fixed-fee store package was exactly what we needed. Clean code, fast handover, and a launch-ready store.",
    result: "£120K",
    resultLabel: "first month revenue",
    initials: "A",
  },
  {
    id: 6,
    platform: "Migration",
    platformSym: "M",
    color: "#F46F25",
    bg: "#fff8f0",
    author: "Claire R.",
    role: "CEO · Homeware Retailer",
    quote:
      "Our Magento 1 store was a liability. Shoman moved us safely, retained our SEO structure, and gave our internal team the confidence to run Shopify after launch.",
    result: "80%",
    resultLabel: "SEO traffic retained",
    initials: "C",
  },
  {
    id: 7,
    platform: "White-Label",
    platformSym: "WL",
    color: "#0369A1",
    bg: "#f0f9ff",
    author: "Nigel F.",
    role: "Agency Director · Digital Studio",
    quote:
      "Shoman worked completely under our brand and the client never saw the join. The code quality was stronger than our internal benchmark and the handover was painless.",
    result: "4",
    resultLabel: "projects delivered",
    initials: "N",
  },
  {
    id: 8,
    platform: "Integration",
    platformSym: "API",
    color: "#6366F1",
    bg: "#f5f3ff",
    author: "David K.",
    role: "CTO · Manufacturing Brand",
    quote:
      "We were manually reconciling over a thousand daily orders. Shoman mapped the edge cases, built a monitored sync process, and removed the admin load entirely.",
    result: "£80K/yr",
    resultLabel: "manual cost removed",
    initials: "D",
  },
  {
    id: 9,
    platform: "Adobe Commerce",
    platformSym: "Ac",
    color: "#FF0000",
    bg: "#fff5f5",
    author: "Tom W.",
    role: "Head of Digital · Consumer Goods",
    quote:
      "Security patches had been sitting undone for two years across a fragile Magento 2 estate. Shoman cleaned it up without breaking our peak trading period.",
    result: "48hrs",
    resultLabel: "fully patched",
    initials: "T",
  },
];

const videos = [
  {
    platform: "Adobe Commerce",
    color: "#FF0000",
    title: "How we cut checkout load time from 8s to 1.8s",
    meta: "Adobe Commerce · 4:32",
    body: "Operations lead walks through the before and after with conversion impact.",
    icon: Store,
  },
  {
    platform: "Migration",
    color: "#F46F25",
    title: "Migrating 40,000 orders from Magento to Shopify Plus",
    meta: "Migration · 6:14",
    body: "Operations Director explains why they chose us over three other agencies.",
    icon: ShieldCheck,
  },
  {
    platform: "Integration",
    color: "#6366F1",
    title: "£80K per year saved through SAP integration",
    meta: "Integration · 5:48",
    body: "CTO demonstrates the dashboard and explains the ROI calculation.",
    icon: Settings,
  },
];

const platformStats = [
  { name: "Adobe Commerce", symbol: "Ac", reviews: "24", average: "4.9", color: "#FF0000" },
  { name: "Shopify / Plus", symbol: "Sh", reviews: "38", average: "4.8", color: "#96BF48" },
  { name: "Migration", symbol: "M", reviews: "19", average: "5.0", color: "#F46F25" },
  { name: "Systems Integration", symbol: "API", reviews: "12", average: "4.9", color: "#6366F1" },
  { name: "Technical Audits", symbol: "Au", reviews: "31", average: "4.8", color: "#0284C7" },
  { name: "White-Label", symbol: "WL", reviews: "8", average: "5.0", color: "#0369A1" },
];

function Stars({ color = "var(--color-ink)" }: { color?: string }) {
  return (
    <div style={{ display: "flex", gap: 2, color }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={14} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sort, setSort] = useState("recent");

  const filteredTestimonials = useMemo(() => {
    const items =
      activeFilter === "All"
        ? testimonials
        : testimonials.filter((testimonial) => testimonial.platform.includes(activeFilter));

    if (sort === "rating") return [...items].sort((a, b) => a.platform.localeCompare(b.platform));
    if (sort === "impact") return [...items].sort((a, b) => a.resultLabel.localeCompare(b.resultLabel));

    return items;
  }, [activeFilter, sort]);

  return (
    <div style={{ background: "var(--color-white)", minHeight: "100vh" }}>
      <Navbar />

      <section style={{ paddingTop: 72, background: "var(--color-white)", borderBottom: "1.5px solid var(--color-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -90, right: -80, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(var(--color-brand-rgb), 0.1), transparent 68%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -70, bottom: -80, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(2, 132, 199, 0.08), transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "52px 24px 56px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
            <Link href="/" style={{ fontSize: 13, color: "var(--color-subtle)", textDecoration: "none", fontWeight: 500 }}>Home</Link>
            <ChevronRight size={13} color="var(--color-border-strong)" />
            <span style={{ fontSize: 13, color: "var(--color-ink)", fontWeight: 600 }}>Testimonials</span>
          </div>

          <div className="testimonials-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(360px, 463px)", gap: 56, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-brand-soft)", border: "1px solid rgba(var(--color-brand-rgb), 0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 20 }}>
                <Star size={13} color={BRAND} fill="currentColor" />
                <span style={{ fontSize: 12, fontWeight: 600, color: BRAND }}>98% client satisfaction rate</span>
              </div>

              <h1 style={{ fontSize: "clamp(34px, 4.6vw, 52px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "var(--color-ink)", marginBottom: 20 }}>
                What our clients say<br />
                <span style={{ color: BRAND }}>about working with us.</span>
              </h1>

              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--color-copy)", maxWidth: 580, marginBottom: 28 }}>
                Every testimonial below is from a real client. No aggregated review platforms, no cherry-picked quotes — just direct feedback from businesses we&apos;ve worked with across Adobe Commerce, Shopify, migration, and integration projects.
              </p>

              <div className="hero-proof-list" style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
                {["Verified client feedback only", "Across all service types", "Startup to enterprise"].map((item) => (
                  <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--color-muted)", fontWeight: 500 }}>
                    <BadgeCheck size={15} color={BRAND} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <Image
                src="/hero/testimonial-hero-image.png"
                alt="Client testimonial messages illustration"
                width={463}
                height={364}
                priority
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-ink)", borderBottom: "1px solid var(--color-ink-2)" }}>
        <div className="stats-grid" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {stats.map((stat, index) => (
            <div key={stat.label} style={{ textAlign: "center", padding: "21px 12px", borderRight: index === stats.length - 1 ? "none" : "1px solid var(--color-ink-2)" }}>
              <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1, color: stat.color, letterSpacing: "-0.03em", marginBottom: 8 }}>{stat.value}</div>
              <div style={{ fontSize: 12, color: "var(--color-muted)", fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--color-white)", borderBottom: "1.5px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-muted)", marginRight: 2 }}>Filter by:</span>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              style={{
                border: `1.5px solid ${activeFilter === filter ? BRAND : "var(--color-border)"}`,
                background: activeFilter === filter ? "var(--color-brand-soft)" : "var(--color-white)",
                color: activeFilter === filter ? BRAND : "var(--color-muted)",
                borderRadius: 100,
                padding: "7px 14px",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.18s",
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--color-bg-soft)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="reviews-heading" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 32 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <span style={{ width: 20, height: 2, background: BRAND }} />
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: BRAND }}>{activeFilter} Reviews</span>
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: "var(--color-ink)", letterSpacing: "-0.02em" }}>
                Showing {filteredTestimonials.length} testimonials
              </h2>
            </div>

            <label style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 12, color: "var(--color-muted)" }}>
              Sort by:
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                style={{ border: "1.5px solid var(--color-border)", borderRadius: 8, background: "var(--color-white)", padding: "8px 12px", fontSize: 12, color: "var(--color-ink)", fontFamily: "inherit" }}
              >
                <option value="recent">Most recent</option>
                <option value="rating">Platform</option>
                <option value="impact">Impact</option>
              </select>
            </label>
          </div>

          {filteredTestimonials.length > 0 ? (
            <div className="testimonial-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {filteredTestimonials.map((testimonial) => (
                <article key={testimonial.id} style={{ background: "var(--color-white)", border: "1.5px solid var(--color-border)", borderRadius: 16, padding: 22, position: "relative", overflow: "hidden", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.transform = "translateY(-4px)";
                    event.currentTarget.style.boxShadow = "0 16px 44px rgba(15, 23, 42, 0.08)";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.transform = "translateY(0)";
                    event.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ position: "absolute", top: 10, right: 16, fontFamily: "Georgia, serif", fontSize: 52, lineHeight: 1, color: BRAND, opacity: 0.7 }}>&quot;</div>

                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: testimonial.bg, borderRadius: 100, padding: "4px 10px", marginBottom: 12, maxWidth: "calc(100% - 30px)" }}>
                    <span style={{ width: 18, height: 18, borderRadius: 4, background: testimonial.color, color: "var(--color-white)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 7, fontWeight: 800 }}>
                      {testimonial.platformSym}
                    </span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: testimonial.color }}>{testimonial.platform}</span>
                  </div>

                  <Stars />

                  <blockquote style={{ borderLeft: `3px solid ${BRAND}`, paddingLeft: 14, margin: "14px 0 18px", minHeight: 112 }}>
                    <p style={{ margin: 0, fontSize: 13, lineHeight: 1.75, color: "var(--color-ink-2)", fontStyle: "italic" }}>&ldquo;{testimonial.quote}&rdquo;</p>
                  </blockquote>

                  <div style={{ height: 1, background: "var(--color-border)", marginBottom: 16 }} />

                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <span style={{ width: 36, height: 36, borderRadius: "50%", background: testimonial.color, color: "var(--color-white)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, flexShrink: 0 }}>
                      {testimonial.initials}
                    </span>
                    <span style={{ minWidth: 0 }}>
                      <strong style={{ display: "block", fontSize: 13, color: "var(--color-ink)", marginBottom: 3 }}>{testimonial.author}</strong>
                      <span style={{ display: "block", fontSize: 11, color: "var(--color-muted)", lineHeight: 1.4 }}>{testimonial.role}</span>
                    </span>
                  </div>

                  <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: 14, display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 36, height: 36, borderRadius: 8, background: testimonial.bg, color: testimonial.color, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      <Star size={15} fill="currentColor" strokeWidth={0} />
                    </span>
                    <span>
                      <strong style={{ display: "block", fontSize: 18, lineHeight: 1, color: testimonial.color, letterSpacing: "-0.02em" }}>{testimonial.result}</strong>
                      <span style={{ display: "block", fontSize: 11, color: "var(--color-muted)", marginTop: 4 }}>{testimonial.resultLabel}</span>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "64px 0", color: "var(--color-subtle)" }}>
              <Search size={36} color="var(--color-subtle)" style={{ marginBottom: 12 }} />
              <p>No testimonials found for &ldquo;{activeFilter}&rdquo;</p>
            </div>
          )}
        </div>
      </section>

      <section style={{ background: "var(--color-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
            <span style={{ width: 20, height: 2, background: BRAND }} />
            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: BRAND }}>Video Stories</span>
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "var(--color-ink)", letterSpacing: "-0.02em", marginBottom: 24 }}>Watch client walkthroughs</h2>

          <div className="video-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {videos.map((video) => {
              const Icon = video.icon;

              return (
                <article key={video.title} style={{ border: "1.5px solid var(--color-border)", borderRadius: 16, overflow: "hidden", background: "var(--color-white)" }}>
                  <div style={{ height: 160, background: `linear-gradient(135deg, ${video.color}28, ${video.color}08)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", color: video.color }}>
                    <Icon size={46} strokeWidth={1.8} opacity={0.35} />
                    <span style={{ position: "absolute", width: 48, height: 48, borderRadius: "50%", background: BRAND, color: "var(--color-white)", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 32px rgba(var(--color-brand-rgb), 0.25)" }}>
                      <Play size={18} fill="currentColor" />
                    </span>
                  </div>
                  <div style={{ padding: 18 }}>
                    <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: video.color, marginBottom: 8 }}>{video.meta}</div>
                    <h3 style={{ fontSize: 14, fontWeight: 800, lineHeight: 1.35, color: "var(--color-ink)", marginBottom: 8 }}>{video.title}</h3>
                    <p style={{ fontSize: 12, lineHeight: 1.65, color: "var(--color-muted)", margin: 0 }}>{video.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-bg-soft)", borderTop: "1.5px solid var(--color-border)", padding: "64px 24px 88px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ width: 20, height: 2, background: BRAND }} />
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: BRAND }}>Platform Coverage</span>
              <span style={{ width: 20, height: 2, background: BRAND }} />
            </div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 30px)", fontWeight: 800, color: "var(--color-ink)", letterSpacing: "-0.02em" }}>Verified feedback across every service</h2>
          </div>

          <div className="platform-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {platformStats.map((platform) => (
              <article key={platform.name} style={{ background: "var(--color-white)", border: `1.5px solid ${platform.color}`, borderTop: `4px solid ${platform.color}`, borderRadius: 14, padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                  <span style={{ width: 32, height: 32, borderRadius: 7, background: platform.color, color: "var(--color-white)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800 }}>
                    {platform.symbol}
                  </span>
                  <strong style={{ fontSize: 13, color: "var(--color-ink)" }}>{platform.name}</strong>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <span>
                    <strong style={{ display: "block", fontSize: 24, lineHeight: 1, color: platform.color, letterSpacing: "-0.02em" }}>{platform.reviews}</strong>
                    <span style={{ display: "block", fontSize: 11, color: "var(--color-muted)", marginTop: 6 }}>reviews</span>
                  </span>
                  <span style={{ textAlign: "right" }}>
                    <strong style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: 18, color: "var(--color-ink)" }}>
                      {platform.average}
                      <Star size={14} fill={platform.color} color={platform.color} />
                    </strong>
                    <span style={{ display: "block", fontSize: 11, color: "var(--color-muted)", marginTop: 4 }}>average</span>
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-brand)", color: "var(--color-white)", borderRadius: 9, padding: "14px 24px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              Start your project <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (max-width: 980px) {
          .testimonials-hero-grid,
          .testimonial-grid,
          .video-grid,
          .platform-grid {
            grid-template-columns: 1fr 1fr !important;
          }

          .testimonials-hero-grid {
            gap: 36px !important;
          }
        }

        @media (max-width: 720px) {
          .testimonials-hero-grid,
          .stats-grid,
          .testimonial-grid,
          .video-grid,
          .platform-grid {
            grid-template-columns: 1fr !important;
          }

          .stats-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--color-ink-2);
          }

          .stats-grid > div:last-child {
            border-bottom: none;
          }

          .reviews-heading {
            align-items: flex-start !important;
            flex-direction: column !important;
          }

          .hero-proof-list {
            flex-direction: column !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </div>
  );
}
