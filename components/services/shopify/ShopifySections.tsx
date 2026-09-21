import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Star } from "lucide-react";
import { ShopifyFAQ } from "./ShopifyInteractions";
import { audiences, buildChecklist, capabilities, integrations, outcomes, pricingTiers, processSteps, relatedServices } from "./data";

function SectionIntro({ eyebrow, title, description, centered = false }: { eyebrow: string; title: string; description?: string; centered?: boolean }) {
  return <div className={`sh-intro${centered ? " sh-intro--centered" : ""}`}><div className="sh-eyebrow">{eyebrow}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function ShopifyHero() {
  return <section className="sh-hero"><Image className="sh-hero__background sh-hero__background--right" src="/assets/shopify-development/hero-background-right.png" width={460} height={460} alt="" aria-hidden="true" /><Image className="sh-hero__background sh-hero__background--left" src="/assets/shopify-development/hero-background-left.png" width={280} height={280} alt="" aria-hidden="true" />
    <div className="sh-container"><nav className="sh-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={11} /><Link href="/services">Services</Link><ChevronRight size={11} /><span>Shopify Development</span></nav>
      <div className="sh-hero__grid"><div className="sh-hero__content"><div className="sh-platform-badge">Shopify Partner Agency</div><h1><span>Shopify Store Launch</span><br />&amp; Development.<br /><em>Built to Convert.</em></h1><p>Whether you&apos;re launching your first store or stepping up to Shopify Plus — we design and build Shopify stores for startups and growing brands that load fast, look professional, and convert from day one.</p>
        <div className="sh-hero__actions"><Link className="sh-button sh-button--primary" href="/contact-us">Start Your Build<ArrowRight size={14} /></Link><a className="sh-button" href="#process">See Our Process</a></div>
        <ul className="sh-hero__trust">{["No templates — custom builds only", "Shopify Plus certified", "You own all code"].map(item => <li key={item}><Check size={12} />{item}</li>)}</ul>
      </div><div className="sh-hero__visual"><Image src="/hero/shopify-development.png" alt="Shopify ecommerce store development" width={516} height={504} sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 900px) 516px, 516px" loading="eager" /></div></div>
    </div>
  </section>;
}

export function ShopifyWho() {
  return <section className="sh-section sh-section--soft" id="who"><div className="sh-container"><SectionIntro eyebrow="Who It's For" title="Every stage. Every size." description="We don't have a minimum project size. We have a minimum standard. The engineering quality is the same whether you're a founder or an enterprise brand." /><div className="sh-audience-grid">{audiences.map(({ Icon, ...item }) => <article key={item.title} style={{ "--card-accent": item.color, "--card-soft": item.soft } as React.CSSProperties}><Icon size={26} strokeWidth={1.8} /><h3>{item.title}</h3><p>{item.body}</p><span>{item.tag}</span></article>)}</div></div></section>;
}

export function ShopifyBuild() {
  return <section className="sh-section" id="build"><div className="sh-container sh-two-column"><div><SectionIntro eyebrow="What We Build" title="Full-stack Shopify development" description="Every Shopify project we deliver is engineered — not templated. Here's what's always in scope regardless of package size." /><ul className="sh-checklist">{buildChecklist.map(item => <li key={item}><span><Check size={10} /></span>{item}</li>)}</ul></div><div><div className="sh-eyebrow">Specialist Capabilities</div><h3 className="sh-subheading">Beyond the standard build</h3><div className="sh-capability-grid">{capabilities.map(({ Icon, title, body }) => <article key={title}><Icon size={20} strokeWidth={1.8} /><h4>{title}</h4><p>{body}</p></article>)}</div></div></div></section>;
}

export function ShopifyIntegrations() {
  return <section className="sh-section sh-section--soft" id="integrations"><div className="sh-container"><SectionIntro eyebrow="Integrations" title="Apps & platforms we connect daily" description="We've integrated all of these into production Shopify stores. No learning curve on our side — just clean, tested connections from day one." /><div className="sh-integration-grid">{integrations.map(item => <article key={item.name}><span style={{ background: item.color }}>{item.symbol}</span><div><h3>{item.name}</h3><p>{item.type}</p></div></article>)}</div><div className="sh-integration-callout"><strong>Don&apos;t see your app?</strong><span>If it has a Shopify app or a REST/GraphQL API, we can connect it.</span><Link href="/contact-us">Tell us what you need<ArrowRight size={13} /></Link></div></div></section>;
}

export function ShopifyProcess() {
  return <section className="sh-section" id="process"><div className="sh-container sh-two-column"><div><SectionIntro eyebrow="Our Build Process" title="How a Shopify project runs" description="Every build follows the same structured process — no surprises, no scope creep, no going quiet mid-project." /><ol className="sh-process-list">{processSteps.map((step, index) => <li key={step.title}><span>{index + 1}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}</ol></div><div className="sh-outcomes"><div className="sh-eyebrow">Outcomes We Deliver</div><h3 className="sh-subheading">Numbers from real builds</h3><div className="sh-outcome-grid">{outcomes.map(item => <article key={item.label}><strong>{item.value}</strong><h4>{item.label}</h4><p>{item.body}</p></article>)}</div><figure className="sh-quote"><div aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" strokeWidth={0} />)}</div><blockquote>“The Shopify Plus build was delivered on time and under budget. The team understood the brief immediately — no hand-holding, no going back and forth.”</blockquote><figcaption><span>M</span><div><strong>Marcus L.</strong><small>Founder · DTC Wellness Brand</small></div></figcaption></figure></div></div></section>;
}

export function ShopifyPricing() {
  return <section className="sh-section sh-section--soft" id="pricing"><div className="sh-container"><SectionIntro eyebrow="Pricing" title="Transparent project pricing" description="All plans include code ownership, CMS training, and Core Web Vitals optimisation. No hidden costs." centered /><div className="sh-pricing-grid">{pricingTiers.map(tier => <article className={tier.featured ? "is-featured" : ""} key={tier.name}>{tier.featured && <span className="sh-pricing-grid__popular">MOST POPULAR</span>}<h3>{tier.name}</h3><div className="sh-pricing-grid__price"><strong>{tier.price}</strong>{tier.period && <span>{tier.period}</span>}</div><p>{tier.desc}</p><ul>{tier.features.map(feature => <li key={feature}><Check size={10} />{feature}</li>)}</ul><Link href="/contact-us">{tier.cta}<ArrowRight size={13} /></Link></article>)}</div></div></section>;
}

export function ShopifyQuestions() {
  return <section className="sh-section sh-faq" id="faq"><div className="sh-container"><SectionIntro eyebrow="FAQ" title="Shopify questions answered" centered /><ShopifyFAQ /></div></section>;
}

export function ShopifyRelated() {
  return <section className="sh-section sh-section--soft sh-related"><div className="sh-container"><SectionIntro eyebrow="Also Available" title="Related services" /><div className="sh-related-grid">{relatedServices.map(({ Icon, symbol, ...item }) => <Link href={item.href} key={item.title} style={{ "--card-accent": item.color } as React.CSSProperties}><span>{Icon ? <Icon size={17} /> : symbol}</span><h3>{item.title}</h3><p>{item.body}</p><strong>Explore<ArrowRight size={12} /></strong></Link>)}</div></div></section>;
}
