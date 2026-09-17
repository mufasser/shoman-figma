import Image from "next/image";
import { ArrowRight, PackageCheck, RefreshCw, Rocket, Settings, ShieldCheck, ShoppingBag } from "lucide-react";
import type { CSSProperties } from "react";
import type { PortfolioItem } from "@/app/graphql/content";

const icons = { shoppingBag: ShoppingBag, packageCheck: PackageCheck, settings: Settings, shieldCheck: ShieldCheck, rocket: Rocket, refresh: RefreshCw };

export default function ProjectCard({ project, featured = false, wide = false }: { project: PortfolioItem; featured?: boolean; wide?: boolean }) {
  const Icon = icons[project.iconKey] || ShoppingBag;
  const colors = { "--project-color": project.platformColor, "--project-bg": project.bg } as CSSProperties;
  return <article className={`portfolio-project${featured ? " portfolio-project--featured" : ""}${wide ? " portfolio-project--wide" : ""}`} style={colors}>
    <div className="portfolio-project__visual">
      {project.image ? <Image src={project.image} alt={project.imageAlt || project.title} fill sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"} unoptimized /> : <Icon size={featured ? 76 : 48} strokeWidth={1.5} aria-hidden="true" />}
      <span className="portfolio-project__badge">{project.platform}</span><span className="portfolio-project__type">{project.type}</span>
    </div>
    <div className="portfolio-project__body"><span className="portfolio-project__client">{project.client}</span><h3>{project.title}</h3><p>{project.problem}</p>
      <div className="portfolio-project__tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="portfolio-project__footer"><div><strong>{project.result}</strong><small>{project.resultLabel}</small></div>{project.href && project.href !== "#" && <a href={project.href} className="portfolio-project-link">{featured ? "Read Full Case Study" : "Read Case Study"}<ArrowRight size={15} /></a>}</div>
    </div>
  </article>;
}
