"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowDown, ChevronRight, Search, Settings, ShoppingBag } from "lucide-react";
import type { PortfolioItem, TestimonialItem } from "@/app/graphql/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoTicker from "@/components/LogoTicker";
import FinalCTA from "@/components/FinalCTA";
import AboutTestimonialsWidget from "@/components/AboutTestimonialsWidget";
import ProjectCard from "./ProjectCard";
import FeaturedProject from "./FeaturedProject";
import "./portfolio.css";

const expertise = [
  { name: "Adobe Commerce projects", count: "40+", color: "var(--color-adobe)", Icon: ShoppingBag, description: "From performance retainers to full multi-store rebuilds and cloud migrations.", tags: ["Security & Patching", "Custom Modules", "Performance", "Multi-store", "Cloud ECE"] },
  { name: "Shopify & Plus projects", count: "80+", color: "var(--color-shopify)", Icon: ShoppingBag, description: "Starter stores, growth builds, Shopify Plus migrations, B2B, and Checkout Extensibility.", tags: ["Custom Theme", "Shopify Plus", "B2B", "Subscriptions", "Checkout"] },
  { name: "Integration projects", count: "28", color: "var(--color-indigo)", Icon: Settings, description: "SAP, Salesforce, Dynamics, HubSpot, and custom warehouse connections.", tags: ["SAP", "Salesforce", "Custom API", "Middleware", "Real-time"] },
];

function FilterGroup({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (value: string) => void }) {
  return <div className="portfolio-filter-group" role="group" aria-label={`${label} filters`}><span>{label}:</span>{options.map(option => <button key={option} type="button" aria-pressed={value === option} onClick={() => onChange(option)}>{option}</button>)}</div>;
}

export default function PortfolioView({ initialProjects, initialTestimonials }: { initialProjects: PortfolioItem[]; initialTestimonials: TestimonialItem[] }) {
  const [projects, setProjects] = useState(initialProjects);
  const [platform, setPlatform] = useState("All");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("recent");
  const [limit, setLimit] = useState(8);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/content", { cache: "no-store", signal: controller.signal }).then(async response => {
      if (!response.ok) throw new Error("Unable to load projects");
      const data = await response.json() as { projects?: PortfolioItem[]; errors?: string[] };
      if (data.projects?.length || !data.errors?.some(error => error.startsWith("Projects:"))) setProjects(data.projects || []);
      setFailed(Boolean(data.errors?.some(error => error.startsWith("Projects:"))));
    }).catch(error => { if (error.name !== "AbortError") setFailed(true); });
    return () => controller.abort();
  }, []);
  const platforms = useMemo(() => ["All", ...new Set(projects.map(project => project.platform))], [projects]);
  const types = useMemo(() => ["All", ...new Set(projects.map(project => project.type))], [projects]);
  const filtered = useMemo(() => {
    const result = projects.filter(project => (platform === "All" || project.platform === platform) && (type === "All" || project.type === type));
    if (sort === "az") result.sort((a, b) => a.title.localeCompare(b.title));
    return result;
  }, [projects, platform, type, sort]);
  const visible = filtered.slice(0, limit);
  return <main className="portfolio-page"><Navbar />
    <section className="portfolio-hero"><div className="portfolio-container"><nav className="portfolio-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={12} /><span>Portfolio</span></nav>
      <div className="portfolio-hero__layout"><div><span className="portfolio-hero__badge">150+ projects · Real results · No agency fluff</span><h1>Work that proves<br /><em>what we say we can do.</em></h1><p>Every project below includes the actual problem, what we built, and the measurable outcome. No vague &ldquo;improved performance&rdquo; — real numbers from real clients across Adobe Commerce, Shopify, and integration projects.</p></div>
        <div className="portfolio-hero__stats" aria-label="Company statistics">{[{ value: "150+", label: "Projects delivered" }, { value: "10+", label: "Years experience" }, { value: "98%", label: "Client retention" }].map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
      </div></div></section><LogoTicker />
    <section className="portfolio-filters"><div className="portfolio-container"><FilterGroup label="Platform" options={platforms} value={platform} onChange={value => { setPlatform(value); setLimit(8); }} /><FilterGroup label="Type" options={types} value={type} onChange={value => { setType(value); setLimit(8); }} /><span className="portfolio-count" aria-live="polite">Showing {filtered.length} {filtered.length === 1 ? "project" : "projects"}</span></div></section>
    <section className="portfolio-projects"><div className="portfolio-container"><FeaturedProject />
      {visible.length > 0 && <><div className="portfolio-projects__heading"><div className="portfolio-eyebrow">All Projects</div><select aria-label="Sort projects" value={sort} onChange={event => setSort(event.target.value)}><option value="recent">Most recent</option><option value="az">Name: A–Z</option></select></div><div className="portfolio-project-grid">{visible.map((project, index) => <ProjectCard key={project.id} project={project} wide={index >= 6} />)}</div></>}
      {!filtered.length && <div className="portfolio-empty"><Search size={32} /><p>{failed ? "Projects are temporarily unavailable. Please try again later." : projects.length ? "No projects match these filters." : "New projects will be published here soon."}</p>{projects.length > 0 && <button onClick={() => { setPlatform("All"); setType("All"); }}>Clear filters</button>}</div>}
      {filtered.length > limit && <button className="portfolio-load-more" onClick={() => setLimit(value => value + 6)}>Load More Projects<ArrowDown size={14} /></button>}
    </div></section>
    <section className="portfolio-depth"><div className="portfolio-container"><div className="portfolio-section-heading"><div className="portfolio-eyebrow">By Platform</div><h2>Our platform depth</h2><p>We specialise — not generalise. Deep expertise across three platforms means every project is handled by someone who knows it at architecture level.</p></div><div className="portfolio-depth__grid">{expertise.map(item => <article key={item.name} style={{ borderColor: item.color }}><item.Icon size={24} color={item.color} /><strong style={{ color: item.color }}>{item.count}</strong><h3>{item.name}</h3><p>{item.description}</p><div className="portfolio-project__tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></div></section>
    <div className="portfolio-reviews"><AboutTestimonialsWidget initialTestimonials={initialTestimonials} eyebrow="What Clients Say" title="Heard directly from the people we've worked with" /></div><FinalCTA /><Footer />
  </main>;
}
