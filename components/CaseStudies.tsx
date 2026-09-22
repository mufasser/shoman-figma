"use client";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowRight, PackageCheck, Settings, ShoppingBag } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./home-sections.css";

type CaseStudyPreview = {
  tag: string;
  platform: string;
  platformColor: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  image: LucideIcon;
  bg: string;
  href: string;
};

type ApiCaseStudy = {
  platform: string;
  platformColor: string;
  type: string;
  title: string;
  problem: string;
  result: string;
  resultLabel: string;
  bg: string;
  href?: string;
  iconKey?: "shoppingBag" | "packageCheck" | "settings" | "shieldCheck" | "rocket" | "refresh";
};

const previewIconMap = {
  shoppingBag: ShoppingBag,
  packageCheck: PackageCheck,
  settings: Settings,
  shieldCheck: ShoppingBag,
  rocket: PackageCheck,
  refresh: Settings,
};

const cases: CaseStudyPreview[] = [
  {
    tag: "Performance",
    platform: "Adobe Commerce",
    platformColor: "#FF0000",
    title: "Checkout Page Load Cut by 53%",
    description: "A UK fashion retailer was losing shoppers due to a slow Adobe Commerce checkout. We rebuilt the database indices and caching layer entirely.",
    metric: "53% faster",
    metricLabel: "faster checkout",
    image: ShoppingBag,
    bg: "#fff5f5",
    href: "#",
  },
  {
    tag: "Migration",
    platform: "Magento → Shopify",
    platformColor: "#F46F25",
    title: "40K Orders Migrated, Zero Downtime",
    description: "Moved B2B distributor from Magento 1 to Shopify Plus. All data intact. SEO preserved.",
    metric: "0 hrs",
    metricLabel: "downtime on launch",
    image: PackageCheck,
    bg: "#fff8f0",
    href: "#",
  },
  {
    tag: "Integration",
    platform: "Systems & ERP",
    platformColor: "#6366F1",
    title: "£80K Saved Annually via ERP Sync",
    description: "Custom Shopify–SAP middleware eliminated daily manual reconciliation for a manufacturing brand.",
    metric: "£80K/yr",
    metricLabel: "manual cost removed",
    image: Settings,
    bg: "#f5f3ff",
    href: "#",
  },
];

function normalizePreviewCases(items: ApiCaseStudy[]) {
  return items.slice(0, 3).map((item) => ({
    tag: item.type,
    platform: item.platform,
    platformColor: item.platformColor,
    title: item.title,
    description: item.problem,
    metric: item.result,
    metricLabel: item.resultLabel,
    image: previewIconMap[item.iconKey || "shoppingBag"] || ShoppingBag,
    bg: item.bg,
    href: item.href || "#",
  }));
}

export default function CaseStudies() {
  const [caseItems, setCaseItems] = useState(cases);
  const FeaturedIcon = caseItems[0].image;

  useEffect(() => {
    let cancelled = false;

    async function loadCases() {
      try {
        const response = await fetch("/api/content", { cache: "no-store" });
        const data = (await response.json()) as { projects?: ApiCaseStudy[] };

        if (!cancelled && data.projects?.length) {
          setCaseItems(normalizePreviewCases(data.projects));
        }
      } catch (error) {
        console.warn("Unable to load portfolio previews from GraphQL.", error);
      }
    }

    loadCases();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="home-cases">
      <div className="home-section-container">

        {/* Header */}
        <div className="home-cases__header">
          <div>
            <div className="home-section-eyebrow">
              <span />
              Our Portfolio
            </div>
            <h2 className="home-cases__title">
              Proof in the numbers — not the proposal
            </h2>
          </div>
          <div>
            <p className="home-cases__intro">
              Every case study shows the exact problem, what we built, and the measurable outcome.
              No vague &quot;improved performance&quot; — real metrics from real projects.
            </p>
          </div>
        </div>

        {/* Case study grid */}
        <div className="home-cases__grid">

          {/* Large featured card */}
          <div className="home-case-card home-case-card--featured" style={{
            "--case-color": caseItems[0].platformColor,
            "--case-bg": caseItems[0].bg,
          } as CSSProperties}>
            <div>
              <div className="home-case-card__meta home-case-card__meta--featured">
                <span className="home-case-card__tag">{caseItems[0].tag}</span>
                <span className="home-case-card__platform">{caseItems[0].platform}</span>
              </div>

              <div className="home-case-card__icon home-case-card__icon--featured"><FeaturedIcon size={34} strokeWidth={2.2} /></div>

              <h3 className="home-case-card__title home-case-card__title--featured">{caseItems[0].title}</h3>

              <p className="home-case-card__description home-case-card__description--featured">
                {caseItems[0].description}
              </p>
            </div>

            <div className="home-case-card__footer">
              <div>
                <div className="home-case-card__metric home-case-card__metric--featured">
                  {caseItems[0].metric}
                </div>
                <div className="home-case-card__metric-label">{caseItems[0].metricLabel}</div>
              </div>
              <a href={caseItems[0].href} className="home-case-card__link home-case-card__link--featured">
                Read story <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Two smaller cards */}
          {caseItems.slice(1).map((c) => {
            const Icon = c.image;
            return (
            <div key={c.title} className="home-case-card" style={{
              "--case-color": c.platformColor,
              "--case-bg": c.bg,
            } as CSSProperties}>
              <div>
                <div className="home-case-card__meta">
                  <span className="home-case-card__tag">{c.tag}</span>
                  <span className="home-case-card__platform">{c.platform}</span>
                </div>

                <div className="home-case-card__icon"><Icon size={25} strokeWidth={2.2} /></div>

                <h3 className="home-case-card__title">{c.title}</h3>

                <p className="home-case-card__description">
                  {c.description}
                </p>
              </div>

              <div className="home-case-card__footer home-case-card__footer--small">
                <div>
                  <div className="home-case-card__metric">
                    {c.metric}
                  </div>
                  <div className="home-case-card__metric-label home-case-card__metric-label--small">{c.metricLabel}</div>
                </div>
                <a href={c.href} className="home-case-card__link">
                  Read <ArrowRight size={12} />
                </a>
              </div>
            </div>
            );
          })}
        </div>

        {/* View all */}
        <div className="home-cases__all">
          <a href="/portfolio" className="home-cases__all-link">
            View Portfolio <ArrowRight size={16} />
          </a>
        </div>
      </div>

    </section>
  );
}
