"use client";
import { useState } from "react";
import { ChevronDown, Check, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import "./service-standard.css";

/* ── Section label ── */
export function SectionLabel({ text }: { text: string }) {
  return (
    <div className="service-section-label">
      <span />
      {text}
    </div>
  );
}

export function SectionCenteredLabel({ text }: { text: string }) {
  return (
    <div className="service-section-label service-section-label--centered">
      <span />
      {text}
      <span />
    </div>
  );
}

/* ── Section heading ── */
export function SectionHeading({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className={`service-section-heading${sub ? " service-section-heading--with-copy" : ""}`}>
      <h2 className="service-section-heading__title">{children}</h2>
      {sub && <p className="service-section-heading__copy">{sub}</p>}
    </div>
  );
}

/* ── Pain point grid ── */
export function PainGrid({ items, color }: { items: { icon: LucideIcon; title: string; body: string }[]; color: string }) {
  return (
    <div className="service-pain-grid" style={{ "--component-accent": color } as CSSProperties}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
        <div className="service-pain-card" key={item.title}>
          <div className="service-pain-card__icon">
            <Icon size={19} strokeWidth={2.2} />
          </div>
          <div className="service-pain-card__title">{item.title}</div>
          <div className="service-pain-card__body">{item.body}</div>
        </div>
        );
      })}
    </div>
  );
}

/* ── Checklist block ── */
export function Checklist({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="service-checklist" style={{ "--component-accent": color } as CSSProperties}>
      {items.map((item) => (
        <li key={item}>
          <span className="service-checklist__icon">
            <Check size={11} strokeWidth={2.5} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── 3-tier pricing table ── */
interface PricingTier {
  name: string;
  price: string;
  period?: string;
  desc: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}
export function PricingTable({ tiers, color, compact = false, popularLabel = "MOST POPULAR" }: { tiers: PricingTier[]; color: string; compact?: boolean; popularLabel?: string }) {
  return (
    <div
      className={`pricing-grid price-grid${compact ? " pricing-grid--compact" : ""}`}
      style={{ "--component-accent": color } as CSSProperties}
    >
      {tiers.map((tier) => (
        <div className={`pricing-card${tier.highlight ? " pricing-card--highlighted" : ""}`} key={tier.name}>
          {tier.highlight && (
            <div className="pricing-card__popular">{popularLabel}</div>
          )}
          <div className="pricing-card__name">{tier.name}</div>
          <div className="pricing-card__price">
            <span>{tier.price}</span>
            {tier.period && <small>{tier.period}</small>}
          </div>
          <p className="pricing-card__description">{tier.desc}</p>
          <div className="pricing-card__features">
            <ul>
              {tier.features.map((f) => (
                <li key={f}>
                  <span className="pricing-card__check">
                    <Check size={10} strokeWidth={2.5} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <a href="/contact-us" className="pricing-card__cta">
            {tier.cta} <ArrowRight size={14} />
          </a>
        </div>
      ))}
    </div>
  );
}

/* ── FAQ accordion ── */
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="service-faq-list">
      {items.map((item, i) => (
        <div className={open === i ? "is-open" : undefined} key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{item.q}</span>
            <span className="service-faq-list__icon">
              <ChevronDown size={15} />
            </span>
          </button>
          {open === i && (
            <div className="service-faq-list__answer">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Process steps ── */
export function ProcessSteps({ steps, color }: { steps: { num: string; title: string; body: string }[]; color: string }) {
  return (
    <div className="service-process-steps" style={{ "--component-accent": color } as CSSProperties}>
      <div className="service-process-steps__line" />
      {steps.map((step, i) => (
        <div className="service-process-step" key={i}>
          <div className="service-process-step__number">{step.num}</div>
          <div className="service-process-step__content">
            <div className="service-process-step__title">{step.title}</div>
            <div className="service-process-step__body">{step.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Outcome stat cards ── */
export function OutcomeCards({ items, color }: { items: { metric: string; label: string; desc: string }[]; color: string }) {
  return (
    <div className="service-outcome-grid" style={{ "--component-accent": color } as CSSProperties}>
      {items.map((item) => (
        <div className="service-outcome-card" key={item.label}>
          <div className="service-outcome-card__metric">{item.metric}</div>
          <div className="service-outcome-card__label">{item.label}</div>
          <div className="service-outcome-card__description">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Two-column section ── */
export function TwoCol({ left, right, reverse }: { left: React.ReactNode; right: React.ReactNode; reverse?: boolean }) {
  return (
    <div className={`two-col${reverse ? " two-col--reverse" : ""}`}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
