import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Star } from "lucide-react";
import { PricingTable } from "@/components/services/ServiceComponents";
import { included, outcomes, painPoints, related, services, steps, tiers } from "./data";
import { AdobeFAQ, VersionTabs } from "./AdobeInteractions";

export function SectionIntro({ eyebrow, title, description, centered = false }: { eyebrow: string; title: string; description?: string; centered?: boolean }) {
  return <div className={`ac-section-intro${centered ? " ac-section-intro--centered" : ""}`}><div className="ac-eyebrow">{eyebrow}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function AdobeHero() {
  return <section className="ac-hero"><Image className="ac-hero__background ac-hero__background--right" src="/assets/adobe-commerce/hero-background-right.png" width={460} height={460} alt="" aria-hidden="true" /><Image className="ac-hero__background ac-hero__background--left" src="/assets/adobe-commerce/hero-background-left.png" width={280} height={280} alt="" aria-hidden="true" />
    <div className="ac-container"><nav className="ac-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={11} /><Link href="/services">Services</Link><ChevronRight size={11} /><span>Adobe Commerce &amp; Magento</span></nav>
      <div className="ac-hero__layout"><div className="ac-hero__content"><div className="ac-platform-badge"><span>Ac</span>Adobe Commerce Experts</div><h1>Adobe Commerce &amp;<br />Magento Development<br /><em>&amp; Support.</em></h1><p>Certified backend engineering for Adobe Commerce and Magento 2. We stabilise platforms other agencies gave up on — security patching, performance, custom modules, and honest SLAs with no surprises.</p>
        <div className="ac-hero__actions"><Link className="ac-button ac-button--primary" href="/contact-us">Book Free Consultation<ArrowRight size={14} /></Link><Link className="ac-button" href="/services/technical-audits">Start With an Audit</Link></div>
        <ul className="ac-hero__trust">{["Adobe Commerce certified", "Magento 1, 2, and AC Cloud", "No retainer lock-in"].map(item => <li key={item}><Check size={12} />{item}</li>)}</ul>
      </div>
      <div className="ac-hero__visual"><Image className="ac-hero__image" src="/hero/adobe-commerce-magento-development.png" alt="Adobe Commerce and Magento development" width={480} height={484} sizes="(max-width: 528px) calc(100vw - 40px), (max-width: 900px) 480px, 440px" loading="eager" /></div></div>
    </div>
  </section>;
}

export function AdobePainPoints() {
  return <section className="ac-section ac-section--soft ac-pain" id="pain"><div className="ac-container"><SectionIntro eyebrow="Common Pain Points" title="Sound familiar?" description="These are the real problems we hear every week from merchants stuck on Magento and Adobe Commerce — and exactly what we're built to fix." /><div className="ac-pain-grid">{painPoints.map(({ Icon, title, body }) => <article key={title}><Icon size={24} strokeWidth={1.8} aria-hidden="true" /><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>;
}

export function AdobeEngagement() {
  return <section className="ac-section ac-included" id="included"><div className="ac-container ac-two-column"><div><SectionIntro eyebrow="What's Included" title="What you get on every engagement" description="Every retainer covers the same core baseline. No surprises, no scope creep — clear deliverables from month one." /><ul className="ac-checklist ac-checklist--included">{included.map(item => <li key={item}><Check size={11} /><span>{item}</span></li>)}</ul></div>
    <div className="ac-outcomes"><div className="ac-eyebrow ac-eyebrow--orange">Project Outcomes</div><h3>Numbers from real client retainers</h3><div className="ac-outcomes__grid">{outcomes.map(item => <article key={item.label}><strong>{item.value}</strong><h4>{item.label}</h4><p>{item.body}</p></article>)}</div>
      <figure className="ac-client-quote"><div className="ac-client-quote__stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" strokeWidth={0} />)}</div><blockquote>“Shoman fixed in two weeks what our previous agency couldn&apos;t solve in six months. Our checkout went from 8 seconds to under 2 — the conversion impact was immediate.”</blockquote><figcaption><span className="ac-avatar">S</span><div><strong>Sarah M.</strong><small>Head of Ecommerce · UK Fashion Retailer</small></div></figcaption></figure>
    </div></div></section>;
}

export function AdobeVersions() {
  return <section className="ac-section ac-section--soft ac-versions" id="versions"><div className="ac-container"><SectionIntro eyebrow="Platform Versions" title="Magento 1, Magento 2, or Adobe Commerce?" description="We work across all versions. Here's what you need to know about each and what we recommend depending on where you are today." /><VersionTabs /></div></section>;
}

export function AdobeProcess() {
  return <section className="ac-section ac-process" id="process"><div className="ac-container ac-two-column"><div><SectionIntro eyebrow="Our Process" title="From first call to first fix" description="How we onboard a new Adobe Commerce or Magento client and start delivering value in week one." /><ol className="ac-process-steps">{steps.map((step, index) => <li key={step.title}><span className="ac-process-steps__number">{index + 1}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}</ol></div>
    <div className="ac-service-breakdown"><div className="ac-eyebrow">Services Breakdown</div><h3>What we can do for your store</h3><div>{services.map(({ Icon, title, body }) => <article key={title}><Icon size={20} strokeWidth={1.8} aria-hidden="true" /><div><h4>{title}</h4><p>{body}</p></div></article>)}</div></div>
  </div></section>;
}

export function AdobePricing() {
  return <section className="ac-section ac-section--soft ac-pricing" id="pricing"><div className="ac-container"><SectionIntro eyebrow="Retainer Packages" title="Choose your support level" description="All plans include code ownership, NDA, staging environment, and a dedicated senior engineer. 30-day notice period — no lock-in." centered /><PricingTable color="#ff0000" tiers={tiers} compact /></div></section>;
}

export function AdobeQuestions() {
  return <section className="ac-section ac-faq" id="faq"><div className="ac-container"><SectionIntro eyebrow="FAQ" title="Questions we hear most" centered /><AdobeFAQ /></div></section>;
}

export function AdobeRelated() {
  return <section className="ac-section ac-section--soft ac-related"><div className="ac-container"><SectionIntro eyebrow="Also Available" title="Related services" /><div className="ac-related__grid">{related.map(item => <article key={item.title} style={{ borderColor: item.color }}><span className="ac-related__symbol" style={{ background: item.color }}>{item.symbol || <item.Icon size={15} />}</span><h3>{item.title}</h3><p>{item.body}</p><Link href={item.href} style={{ color: item.color }}>Explore<ArrowRight size={12} /></Link></article>)}</div></div></section>;
}
