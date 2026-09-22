"use client";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "./home-sections.css";

type TestimonialPreview = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initial: string;
  color: string;
  platform: string;
  rating: number;
  avatar?: string;
};

type ApiTestimonial = {
  quote: string;
  author: string;
  role: string;
  initials: string;
  color: string;
  platform: string;
  rating: number;
  avatar?: string;
};

type TestimonialsProps = {
  initialTestimonials?: ApiTestimonial[];
};

const testimonials: TestimonialPreview[] = [
  {
    quote:
      "Working with Shoman Solutions has been a fantastic experience, and I wouldn't hesitate to recommend them. Throughout our engagement, Shoman Solutions consistently delivered high-quality Adobe Commerce (Magento) development...",
    // name: "Matthew Johnson",
    name: "Matthew J***",
    role: "Head of Core Software Services",
    company: "PerfectDraft",
    initial: "MJ",
    color: "#FF0000",
    platform: "Adobe Commerce",
    rating: 5,
  },
  {
    quote:
      "Can't really say anything other than Shoman Solutions Limited is very professional at their work and is my go to for anything Magento related...",
    name: "S*** Joan",
    role: "Operations Director",
    company: "B2B Distributor",
    initial: "SJ",
    color: "#96BF48",
    platform: "Magento",
    rating: 5,
  },
  {
    quote:
      "Great and experienced Developers. They were able to implement a system whereby we streamlined our process and made sure our coding was up to Magento's standards...",
    name: "Priya K.",
    role: "CTO",
    company: "DTC Homeware Brand",
    initial: "P",
    color: "#0284C7",
    platform: "Technical Audit",
    rating: 5,
  },
];

function normalizePreviewTestimonials(items: ApiTestimonial[]) {
  return items.slice(0, 6).map((item) => ({
    quote: item.quote,
    name: item.author,
    role: item.role,
    company: item.platform,
    initial: item.initials,
    color: item.color,
    platform: item.platform,
    rating: item.rating || 5,
    avatar: item.avatar,
  }));
}

export default function Testimonials({ initialTestimonials = [] }: TestimonialsProps) {
  const [active, setActive] = useState(0);
  const [testimonialItems, setTestimonialItems] = useState<TestimonialPreview[]>(
    initialTestimonials.length ? normalizePreviewTestimonials(initialTestimonials) : testimonials
  );

  useEffect(() => {
    let cancelled = false;

    async function loadTestimonials() {
      try {
        const response = await fetch("/api/content", { cache: "no-store" });
        const data = (await response.json()) as { testimonials?: ApiTestimonial[] };

        if (!cancelled && data.testimonials?.length) {
          setTestimonialItems(normalizePreviewTestimonials(data.testimonials));
          setActive(0);
        }
      } catch (error) {
        console.warn("Unable to load homepage testimonials from GraphQL.", error);
      }
    }

    loadTestimonials();

    return () => {
      cancelled = true;
    };
  }, []);

  const prev = () => setActive((a) => (a - 1 + testimonialItems.length) % testimonialItems.length);
  const next = () => setActive((a) => (a + 1) % testimonialItems.length);

  const t = testimonialItems[active];

  return (
    <section className="home-testimonials">
      <div className="home-section-container">

        <div className="home-testimonials__grid">

          {/* Left — decorative */}
          <div>
            <div className="home-section-eyebrow">
              <span />
              Testimonials
            </div>
            <h2 className="home-testimonials__title">
              Hear what our clients say about &nbsp;
              <span>working with us.</span>
            </h2>
            <p className="home-testimonials__intro">
              Every client relationship starts with a technical conversation. These are the outcomes they came back to tell us about.
            </p>

            {/* Avatar cluster */}
            <div className="home-testimonials__avatars">
              {testimonialItems.map((t, i) => (
                <button key={i} type="button" aria-label={`Show testimonial from ${t.name}`} className="home-testimonials__avatar" style={{
                  "--testimonial-color": t.color,
                  "--testimonial-avatar": t.avatar ? `url(${t.avatar})` : "none",
                  "--testimonial-z": testimonialItems.length - i,
                } as CSSProperties}
                onClick={() => setActive(i)}
                >{!t.avatar && t.initial}</button>
              ))}
              <span className="home-testimonials__avatar-note">
                {testimonialItems.length} clients · 5 star average
              </span>
            </div>
          </div>

          {/* Right — testimonial card */}
          <div>
            <div className="home-testimonials__card" style={{
              "--testimonial-color": t.color,
              "--testimonial-avatar": t.avatar ? `url(${t.avatar})` : "none",
            } as CSSProperties}>
              {/* Quote mark */}
              <div className="home-testimonials__quote-mark">&quot;</div>

              {/* Platform badge */}
              <div className="home-testimonials__platform">
                <span />
                <strong>{t.platform}</strong>
              </div>

              {/* Stars */}
              <div className="home-testimonials__stars">
                {Array.from({ length: Math.max(1, Math.min(5, Math.round(t.rating))) }).map((_, i) => (
                  <Star key={i} size={16} color="var(--color-brand)" fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <blockquote className="home-testimonials__quote">
                &quot;{t.quote}&quot;
              </blockquote>

              <div className="home-testimonials__footer">
                <div className="home-testimonials__author">
                  <div className="home-testimonials__author-avatar">{!t.avatar && t.initial}</div>
                  <div>
                    <div className="home-testimonials__author-name">{t.name}</div>
                    <div className="home-testimonials__author-role">{t.role} · {t.company}</div>
                  </div>
                </div>

                {/* Arrows */}
                <div className="home-testimonials__controls">
                  {[{ action: prev, icon: <ChevronLeft size={16} /> }, { action: next, icon: <ChevronRight size={16} /> }].map((btn, i) => (
                    <button key={i} onClick={btn.action} aria-label={i === 0 ? "Previous testimonial" : "Next testimonial"} className="home-carousel-control home-testimonials__control">
                      {btn.icon}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dot indicators */}
              <div className="home-testimonials__dots">
                {testimonialItems.map((_, i) => (
                  <button key={i} aria-label={`Show testimonial ${i + 1}`} aria-current={active === i ? "true" : undefined} onClick={() => setActive(i)} className={`home-testimonials__dot${active === i ? " is-active" : ""}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
