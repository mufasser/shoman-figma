import { ArrowRight, Quote } from "lucide-react";
import "./featured-project.css";

const metrics = [
  { value: "53%", label: "Faster checkout speed", comparison: "Before: 8.4s", tone: "red" },
  { value: "LCP Pass", label: "Core Web Vitals", comparison: "Was: Fail", tone: "green" },
  { value: "+28%", label: "Conversion rate improvement", comparison: "Month 1", tone: "orange" },
  { value: "0", label: "Outstanding security patches", comparison: "Was: 6", tone: "blue" },
];

export default function FeaturedProject({ href }: { href?: string }) {
  return <section className="featured-project-section" aria-labelledby="featured-project-title">
    <div className="portfolio-eyebrow">Featured Project</div>
    <article className="featured-project">
      <div className="featured-project__story">
        <div className="featured-project__badge"><span>Ac</span>Adobe Commerce · Performance</div>
        <h2 id="featured-project-title">Checkout Load Cut from 8.4s to 1.1s<br />— UK Fashion Retailer</h2>
        <p>Adobe Commerce store losing 30% of shoppers before payment. Unoptimised queries, missing database indices, and extension conflicts were compounding. We rebuilt the caching layer, rewrote the checkout queries, and resolved all extension conflicts in a single sprint.</p>
        <div className="featured-project__tags">{["Varnish Caching", "DB Optimisation", "Extension Audit", "Core Web Vitals"].map(tag => <span key={tag}>{tag}</span>)}</div>
        <Quote className="featured-project__quote" size={36} fill="currentColor" strokeWidth={0} aria-hidden="true" />
        <div className="featured-project__footer"><span>UK Fashion Retailer · Adobe Commerce 2.4</span>{href ? <a href={href}>Read Full Case Study<ArrowRight size={16} /></a> : <span className="featured-project__link">Read Full Case Study<ArrowRight size={16} /></span>}</div>
      </div>
      <dl className="featured-project__metrics">{metrics.map(metric => <div key={metric.label} className={`featured-project__metric featured-project__metric--${metric.tone}`}><div><dd>{metric.value}</dd><dt>{metric.label}</dt></div><span>{metric.comparison}</span></div>)}</dl>
    </article>
  </section>;
}
