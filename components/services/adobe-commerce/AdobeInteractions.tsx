"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Plus, AlertTriangle } from "lucide-react";
import { navigation, faqs } from "./data";

export function SectionNavigation() {
  const [active, setActive] = useState("pain");
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-120px 0px -55% 0px" });
    navigation.forEach(item => { const element = document.getElementById(item.id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  return <nav className="ac-section-nav" aria-label="Page sections"><div className="ac-container">{navigation.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} onClick={() => setActive(item.id)}>{item.label}</a>)}</div></nav>;
}

const versions = [
  { name: "Magento 1", title: "Magento 1 — End of Life", badge: "End of Life", risk: "HIGH RISK", description: "Magento 1 reached end of life in June 2020. No official security patches are released, meaning any M1 store is a sitting target. We still maintain and stabilise M1 stores where migration isn't immediately feasible — but we always recommend a migration roadmap.", items: ["No official security patches since June 2020", "PCI DSS compliance increasingly difficult to demonstrate", "Extension ecosystem has all but shut down", "Hosting costs and reliability declining rapidly", "We handle: emergency fixes, security hardening, migration preparation"], cta: "Plan Your Migration", href: "/services/magento-to-shopify-migration" },
  { name: "Magento 2", title: "Magento 2 — Development & Support", badge: "Open Source", risk: "ONGOING SUPPORT", description: "Keep your Magento 2 store secure, fast, and maintainable. We handle patching, performance optimisation, custom extensions, and reliable deployment pipelines while helping you plan your next stage of growth.", items: ["Security patch and version upgrade management", "Custom modules and extension conflict resolution", "Varnish, Redis, and database optimisation", "Staging, automated testing, and deployment support", "Technical roadmap and ongoing senior engineering"], cta: "Discuss Your Magento Store", href: "/contact-us" },
  { name: "Adobe Commerce", title: "Adobe Commerce — Enterprise Engineering", badge: "Enterprise", risk: "CLOUD & ON-PREMISE", description: "Senior engineering for complex Adobe Commerce platforms, including Commerce Cloud. We support enterprise integrations, multi-store architecture, custom development, and controlled releases with clear ownership and SLAs.", items: ["Adobe Commerce Cloud and ECE tooling", "Multi-store architecture and custom modules", "ERP, CRM, and warehouse integrations", "Performance monitoring and security patching", "Release planning, staging, and infrastructure support"], cta: "Talk to an Adobe Commerce Engineer", href: "/contact-us" },
];

export function VersionTabs() {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const version = versions[selected];
  return <><div className="ac-version-tabs" role="tablist" aria-label="Platform versions">{versions.map((item, index) => <button key={item.name} ref={element => { buttons.current[index] = element; }} type="button" role="tab" id={`ac-tab-${index}`} aria-controls="ac-version-panel" aria-selected={selected === index} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % versions.length;
    else if (event.key === "ArrowLeft") next = (index + versions.length - 1) % versions.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = versions.length - 1;
    else return;
    event.preventDefault(); setSelected(next); buttons.current[next]?.focus();
  }}>{item.name}</button>)}</div>
    <div className={`ac-version-panel${selected === 0 ? " ac-version-panel--risk" : ""}`} id="ac-version-panel" role="tabpanel" aria-labelledby={`ac-tab-${selected}`} tabIndex={0}>
      <div><div className="ac-version-status"><span>{version.badge}</span><strong>{selected === 0 && <AlertTriangle size={12} />}{version.risk}</strong></div><h3>{version.title}</h3><p>{version.description}</p><Link className="ac-button ac-button--outline" href={version.href}>{version.cta}<ArrowRight size={14} /></Link></div>
      <div><h4>What we cover</h4><ul className="ac-checklist">{version.items.map(item => <li key={item}><Check size={11} /><span>{item}</span></li>)}</ul></div>
    </div>
  </>;
}

export function AdobeFAQ() {
  return <div className="ac-faq-list">{faqs.map(item => <details key={item.q}><summary>{item.q}<Plus size={16} aria-hidden="true" /></summary><p>{item.a}</p></details>)}</div>;
}
