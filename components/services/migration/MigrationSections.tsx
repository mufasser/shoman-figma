import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  DatabaseZap,
  ShieldCheck,
} from "lucide-react";
import { assurances, coverage, onboarding, pricing, workflow } from "./data";
import MigrationEstimator from "./MigrationEstimator";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="mg-eyebrow"><span />{children}</div>;
}

function PlatformCard({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div className="mg-platform-card">
      <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 600px) 26vw, 140px" />
    </div>
  );
}

export function MigrationHero() {
  return (
    <section className="mg-hero">
      <div className="mg-container">
        <nav className="mg-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><ChevronRight size={13} /><Link href="/services">Services</Link><ChevronRight size={13} /><span>Magento to Shopify</span>
        </nav>
        <div className="mg-hero__grid">
          <div className="mg-hero__content">
            <Eyebrow>Migration System</Eyebrow>
            <h1>Magento to Shopify migration <span>without the mess.</span></h1>
            <p>A migration application and engineering workflow for moving products, customers, orders, media, redirects and custom data from Magento or Adobe Commerce into Shopify at serious scale.</p>
            <div className="mg-actions">
              <Link className="mg-button mg-button--primary" href="/contact-us">Start onboarding <ArrowRight size={16} /></Link>
              <a className="mg-button" href="#pricing">View pricing</a>
            </div>
            <div className="mg-hero__stats" aria-label="Migration system statistics">
              <div><strong>10M+</strong><span>records per pipeline</span></div>
              <div><strong>0</strong><span>manual spreadsheet handoffs</span></div>
              <div><strong>24/7</strong><span>resumable queue monitoring</span></div>
              <div><strong>100%</strong><span>client-owned data and code</span></div>
            </div>
          </div>

          <div className="mg-hero__visual" aria-label="Live migration dashboard preview">
            <div className="mg-platforms">
              <PlatformCard src="/hero/adobe-commerce.png" alt="Adobe Commerce" width={197} height={60} />
              <PlatformCard src="/hero/magento.png" alt="Magento" width={197} height={54} />
              <PlatformCard src="/hero/shopify.png" alt="Shopify" width={189} height={59} />
            </div>
            <div className="mg-dashboard">
              <div className="mg-dashboard__head">
                <div><span>Live migration run</span><strong>Magento to Shopify</strong></div>
                <span className="mg-status"><i /> Syncing</span>
              </div>
              <div className="mg-dashboard__metrics">
                <div><span>Products</span><strong>2.4M</strong></div>
                <div><span>Customers</span><strong>840K</strong></div>
                <div><span>Orders</span><strong>6.8M</strong></div>
                <div><span>Redirects</span><strong>180K</strong></div>
              </div>
              <div className="mg-progress-list">
                {[["Extract catalog media", "100%", 100], ["Transform custom attributes", "87%", 87], ["Import historical orders", "64%", 64]].map(([label, value, progress]) => (
                  <div className="mg-progress" key={String(label)}>
                    <div><span>{label}</span><strong>{value}</strong></div>
                    <span className="mg-progress__track"><i style={{ width: `${progress}%` }} /></span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mg-validation">
              <div><ShieldCheck size={18} /><strong>Validation</strong></div>
              <span><Check size={14} /> No duplicate SKUs</span>
              <span><Check size={14} /> Order totals reconciled</span>
              <span><Check size={14} /> Redirect map healthy</span>
            </div>
            <div className="mg-cutover">
              <Clock3 size={18} />
              <div><span>Next cutover window</span><strong>02:00 UK</strong><p>Delta sync keeps Magento live while Shopify is prepared for launch.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MigrationAssurance() {
  return (
    <section className="mg-assurance" aria-label="Migration assurances">
      <div className="mg-container mg-assurance__grid">
        {assurances.map(({ icon: Icon, title, description }) => (
          <article key={title}><span><Icon size={20} /></span><div><h2>{title}</h2><p>{description}</p></div></article>
        ))}
      </div>
    </section>
  );
}

export function MigrationCoverage() {
  return (
    <section className="mg-section mg-section--soft" id="coverage">
      <div className="mg-container">
        <div className="mg-intro mg-intro--split">
          <div><Eyebrow>What migrates</Eyebrow><h2>Built for the awkward parts normal import tools avoid.</h2></div>
          <p>The system handles the core commerce data and the messy surrounding objects that make launch day risky.</p>
        </div>
        <div className="mg-coverage-grid">
          {coverage.map(({ icon: Icon, title, description }) => (
            <article key={title}><span><Icon size={19} /></span><div><h3>{title}</h3><p>{description}</p></div><CheckCircle2 size={17} /></article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MigrationOnboarding() {
  return (
    <section className="mg-section" id="onboarding">
      <div className="mg-container">
        <div className="mg-intro mg-intro--split">
          <div><Eyebrow>Onboarding options</Eyebrow><h2>Choose how much of the migration you want us to run.</h2></div>
          <p>Select an onboarding path to preview the recommended setup. Each route uses the same recoverable migration system and validation layer.</p>
        </div>
        <div className="mg-onboarding-grid">
          {onboarding.map(({ eyebrow, title, description, features, icon: Icon, featured }) => (
            <article key={title} className={featured ? "is-featured" : undefined}>
              <div className="mg-card-label"><Icon size={16} /><span>{eyebrow}</span></div>
              <h3>{title}</h3><p>{description}</p>
              <ul>{features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
              <Link href="/contact-us">Choose this setup <ArrowRight size={15} /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MigrationWorkflow() {
  return (
    <section className="mg-section mg-workflow" id="workflow">
      <div className="mg-container">
        <div className="mg-intro mg-intro--center"><Eyebrow>Migration workflow</Eyebrow><h2>From first scan to final Shopify launch.</h2><p>Every run is repeatable. Every failure is recoverable. Every record can be traced.</p></div>
        <div className="mg-workflow-grid">
          {workflow.map(({ number, icon: Icon, title, description }) => (
            <article key={title}><span className="mg-workflow__number">{number}</span><span className="mg-workflow__icon"><Icon size={21} /></span><div><h3>{title}</h3><p>{description}</p></div></article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MigrationPricing() {
  return (
    <section className="mg-section mg-section--soft" id="pricing">
      <div className="mg-container">
        <div className="mg-intro mg-intro--center"><Eyebrow>Pricing</Eyebrow><h2>Pricing that scales with record volume and risk.</h2><p>Start with the route that matches your dataset. We confirm scope after the automated data scan.</p></div>
        <div className="mg-pricing-grid">
          {pricing.map((plan) => (
            <article key={plan.name} className={plan.featured ? "is-featured" : undefined}>
              {plan.featured && <span className="mg-pricing__popular">Most popular</span>}
              <span className="mg-pricing__name">{plan.name}</span><h3>{plan.price}</h3><strong>{plan.volume}</strong><p>{plan.description}</p>
              <ul>{plan.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
              <Link href="/contact-us">{plan.cta} <ArrowRight size={15} /></Link>
            </article>
          ))}
        </div>
        <MigrationEstimator />
      </div>
    </section>
  );
}

export function MigrationProofStrip() {
  return (
    <section className="mg-proof">
      <div className="mg-container"><DatabaseZap size={22} /><p><strong>Not sure how many records you have?</strong> We can run a read-only scan and return the migration volume, data risks and recommended setup.</p><Link href="/contact-us">Request a data scan <ArrowRight size={15} /></Link></div>
    </section>
  );
}
