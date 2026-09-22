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
  eyebrow = "Free 30-min discovery call",
  title = "Ready to Build your",
  highlight = "Adobe Commerce platform?",
  description = "No jargon. No hard sell. A direct conversation with a senior Adobe Commerce engineer about your specific platform and what it needs.",
  primaryLabel = "Book Free Consultation",
  primaryHref = "/contact-us",
  secondaryLabel = "Start With a £499 Audit",
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
