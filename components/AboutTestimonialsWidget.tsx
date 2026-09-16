"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TestimonialItem } from "@/app/graphql/content";

type AboutTestimonial = Pick<
  TestimonialItem,
  "id" | "platform" | "color" | "bg" | "author" | "role" | "quote" | "initials" | "rating" | "avatar"
>;

const fallbackTestimonials: AboutTestimonial[] = [
  {
    id: "fallback-1",
    platform: "Adobe Commerce",
    color: "#FF0000",
    bg: "#fff5f5",
    author: "Sarah M.",
    role: "Head of Ecommerce · UK Fashion Retailer",
    quote:
      "Shoman fixed in two weeks what our previous agency couldn't solve in six months. Our checkout went from 8 seconds to under 2. The conversion difference was immediate.",
    initials: "S",
    rating: 5,
  },
  {
    id: "fallback-2",
    platform: "Shopify Plus",
    color: "#96BF48",
    bg: "#f5fbee",
    author: "James T.",
    role: "Operations Director · B2B Distributor",
    quote:
      "The Magento to Shopify migration was the smoothest technical project we've run in years. Not a single order was lost, our SEO rankings held, and the launch was genuinely calm.",
    initials: "J",
    rating: 5,
  },
  {
    id: "fallback-3",
    platform: "Technical Audit",
    color: "#0284C7",
    bg: "#f0f9ff",
    author: "Priya K.",
    role: "CTO · DTC Homeware Brand",
    quote:
      "Their audit was the most useful ecommerce spend we've made. We went in thinking we had a checkout problem and came out knowing exactly what needed fixing.",
    initials: "P",
    rating: 5,
  },
];

function normalizeTestimonials(items: TestimonialItem[]) {
  return items
    .filter((item) => item.quote && item.author)
    .slice(0, 3)
    .map((item) => ({
      id: item.id,
      platform: item.platform || "Client Feedback",
      color: item.color || "var(--color-brand)",
      bg: item.bg || "var(--color-brand-soft)",
      author: item.author,
      role: item.role || "Client",
      quote: item.quote,
      initials: item.initials || item.author.charAt(0).toUpperCase(),
      rating: item.rating || 5,
      avatar: item.avatar,
    }));
}

function Stars({ rating }: { rating: number }) {
  const count = Math.max(1, Math.min(5, Math.round(rating || 5)));

  return (
    <div className="about-testimonials__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
}

export default function AboutTestimonialsWidget() {
  const [testimonials, setTestimonials] = useState<AboutTestimonial[]>(fallbackTestimonials);

  useEffect(() => {
    let cancelled = false;

    async function loadTestimonials() {
      try {
        const response = await fetch("/api/content", { cache: "no-store" });
        const data = (await response.json()) as { testimonials?: TestimonialItem[] };
        const normalized = data.testimonials?.length ? normalizeTestimonials(data.testimonials) : [];

        if (!cancelled && normalized.length) {
          setTestimonials(normalized);
        }
      } catch (error) {
        console.warn("Unable to load about page testimonials from GraphQL.", error);
      }
    }

    loadTestimonials();

    return () => {
      cancelled = true;
    };
  }, []);

  const averageRating = useMemo(() => {
    const total = testimonials.reduce((sum, testimonial) => sum + (testimonial.rating || 5), 0);
    return testimonials.length ? (total / testimonials.length).toFixed(1) : "5.0";
  }, [testimonials]);

  return (
    <section id="about-testimonials" className="about-testimonials" aria-labelledby="about-testimonials-title">
      <div className="about-testimonials__inner">
        <div className="about-testimonials__heading">
          <div className="about-testimonials__eyebrow">
            <span />
            Client Voices
            <span />
          </div>
          <h2 id="about-testimonials-title">What our clients say</h2>
        </div>

        <div className="about-testimonials__grid">
          {testimonials.map((testimonial) => (
            <article className="about-testimonials__card" key={testimonial.id}>
              <div className="about-testimonials__topline">
                <Stars rating={testimonial.rating} />
                <span className="about-testimonials__quote-mark" aria-hidden="true">
                  &rdquo;
                </span>
              </div>

              <span
                className="about-testimonials__badge"
                style={{
                  color: testimonial.color,
                  background: testimonial.bg,
                  borderColor: `${testimonial.color}35`,
                }}
              >
                {testimonial.platform}
              </span>

              <blockquote>
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>

              <div className="about-testimonials__author">
                <span
                  className="about-testimonials__avatar"
                  style={{
                    background: testimonial.avatar ? `url(${testimonial.avatar}) center / cover` : testimonial.color,
                  }}
                >
                  {!testimonial.avatar && testimonial.initials}
                </span>
                <span>
                  <strong>{testimonial.author}</strong>
                  <small>{testimonial.role}</small>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="about-testimonials__footer">
          <span>{testimonials.length} featured reviews · {averageRating} average rating</span>
          <Link href="/testimonials">
            View all testimonials
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

    </section>
  );
}
