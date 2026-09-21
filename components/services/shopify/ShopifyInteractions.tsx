"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "./data";

const links = [
  ["Who It's For", "who"],
  ["What We Build", "build"],
  ["Integrations", "integrations"],
  ["Our Process", "process"],
  ["Pricing", "pricing"],
  ["FAQ", "faq"],
];

export function ShopifySectionNavigation() {
  return <nav className="sh-section-nav" aria-label="Page sections"><div className="sh-container"><div className="sh-section-nav__track">{links.map(([label, id], index) => <a className={index === 0 ? "is-active" : ""} href={`#${id}`} key={id}>{label}</a>)}</div></div></nav>;
}

export function ShopifyFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return <div className="sh-faq-list">{faqs.map((item, index) => <article className={open === index ? "is-open" : ""} key={item.q}><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}><span>{item.q}</span><span className="sh-faq-list__icon"><ChevronDown size={15} /></span></button>{open === index && <p>{item.a}</p>}</article>)}</div>;
}
