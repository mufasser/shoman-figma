"use client";

import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import "./site-shell.css";

type FinalCTAProps = {
  eyebrow?: string;
  title?: string;
  highlight?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function FinalCTA({
  eyebrow = "Speak directly with a senior Adobe Commerce engineer",
  title = "Find the right next step for your",
  highlight = "Adobe Commerce platform?",
  description = "Discuss your goals and challenges directly with an experienced engineer, and get a clear view of the options for your store.",
  primaryLabel = "Book a 30-minute Call",
  primaryHref = "https://calendly.com/shoaib-shomansolutions/30min",
  secondaryLabel = "Start with a £499 Technical Audit",
  secondaryHref = "/services/technical-audits",
}: FinalCTAProps) {
  return (
    <section className="final-cta">
      <div className="final-cta__glow" />

      <div className="final-cta__inner">
        <div className="final-cta__eyebrow">
          <Rocket size={13} />
          {eyebrow}
        </div>

        <h2>
          {title}<br />
          <span>{highlight}</span>
        </h2>

        <p>
          {description}
        </p>

        <div className="final-cta__actions">
          <Link className="final-cta__primary" href={primaryHref}>
            {primaryLabel} <ArrowRight size={15} />
          </Link>

          <Link className="final-cta__secondary" href={secondaryHref}>
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
