import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, ChevronRight, Clock, PenLine, UserRound } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { getSinglePostContent } from "@/app/graphql/content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getSinglePostContent(slug);

    if (!post) {
      return {
        title: "Article not found — Shoman Solutions",
      };
    }

    return {
      title: `${post.seoTitle || post.title} — Shoman Solutions`,
      description: post.seoDescription || post.excerpt,
    };
  } catch {
    return {
      title: "Insights — Shoman Solutions",
      description: "Practical ecommerce engineering insights from Shoman Solutions.",
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  let post;

  try {
    post = await getSinglePostContent(slug);
  } catch {
    post = null;
  }

  if (!post) notFound();

  return (
    <div style={{ background: "var(--color-white)", minHeight: "100vh" }}>
      <Navbar />

      <section style={{ paddingTop: 72, background: "var(--color-white)", borderBottom: "1px solid var(--color-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(var(--color-brand-rgb), 0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "56px 24px 64px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>
            <Link href="/" style={{ fontSize: 13, color: "var(--color-subtle)", textDecoration: "none", fontWeight: 500 }}>Home</Link>
            <ChevronRight size={13} color="var(--color-border-strong)" />
            <Link href="/insights" style={{ fontSize: 13, color: "var(--color-subtle)", textDecoration: "none", fontWeight: 500 }}>Insights</Link>
            <ChevronRight size={13} color="var(--color-border-strong)" />
            <span style={{ fontSize: 13, color: "var(--color-ink)", fontWeight: 600 }}>{post.tag}</span>
          </div>

          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: post.tagBg, border: `1px solid ${post.tagColor}30`, borderRadius: 100, padding: "6px 14px", marginBottom: 20 }}>
            <PenLine size={14} color={post.tagColor} strokeWidth={2.2} />
            <span style={{ fontSize: 12, fontWeight: 700, color: post.tagColor, textTransform: "uppercase" }}>{post.tag}</span>
          </div>

          <h1 style={{ fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "var(--color-ink)", marginBottom: 18 }}>
            {post.title}
          </h1>

          <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--color-copy)", maxWidth: 720, marginBottom: 26 }}>
            {post.excerpt}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", color: "var(--color-muted)", fontSize: 13 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <UserRound size={14} />
              {post.author}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Calendar size={14} />
              {post.date}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Clock size={14} />
              {post.readTime} read
            </span>
          </div>
        </div>
      </section>

      <article style={{ background: "var(--color-bg-soft)", padding: "64px 24px 80px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <Link href="/insights" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--color-brand)", fontSize: 14, fontWeight: 700, textDecoration: "none", marginBottom: 24 }}>
            <ArrowLeft size={15} />
            Back to Insights
          </Link>

          <div
            className="post-content"
            style={{ background: "var(--color-white)", border: "1.5px solid var(--color-border)", borderRadius: 18, padding: "clamp(28px, 5vw, 52px)", color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.8 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <FinalCTA />
      <Footer />
    </div>
  );
}
