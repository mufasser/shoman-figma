"use client";
import Link from "next/link";
import Image from 'next/image';
import { BriefcaseBusiness, Code2, Mail, Phone, FolderGit } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./site-shell.css";
// import LogoLight from '@/public/logo-light.svg';
// import LogoLight from '@/public/logo-light.svg'

const links = {
  Pages: ["Home", "About", "Services", "Portfolio", "Testimonials", "Blog"],
  Company: ["Terms & Conditions", "Privacy Policy", "Cookies", "Careers"],
  Community: ["Help Centre", "Contact Us", "Support", "FAQs"],
};

const footerHrefs: Record<string, string> = {
  Home: "/",
  About: "/about",
  Services: "/services",
  Portfolio: "/portfolio",
  Testimonials: "/testimonials",
  Blog: "/insights",
  "Contact Us": "/contact-us",
};

const socialLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/shoman-solutions", icon: BriefcaseBusiness },
  { label: "Phone", href: "tel:+447412215015", icon: Phone },
  // { label: "Code", href: "#", icon: FolderGit },
  { label: "Email", href: "mailto:hello@shomansolutions.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">

        <div className="site-footer__grid">

          {/* Brand column */}
          <div>
            
            <div className="site-footer__brand-logo">
              <Link key="Home" href="/">
                <Image
                  src="/logo-light.svg"
                  alt="Shoman Logo"
                  width={120}
                  height={31}
                  className="site-footer__logo-image"
                />
              </Link>
            </div>

            <p className="site-footer__description">
              UK-based ecommerce engineering. We build, fix, and scale Adobe Commerce, Magento, and Shopify platforms for businesses of every size.
            </p>

            {/* Social icons */}
            <div className="site-footer__socials">
              {socialLinks.map((s) => {
                const Icon = s.icon;

                return (
                <a key={s.label} href={s.href} aria-label={s.label} title={s.label}>
                  <Icon size={16} strokeWidth={2.1} />
                </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4>{title}</h4>
              <ul>
	                {items.map((item) => (
	                  <li key={item}>
	                    <Link href={footerHrefs[item] || "#"}>
	                      {item}
	                    </Link>
	                  </li>
	                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="site-footer__bottom">
          <p>
            © {new Date().getFullYear()} Shoman Solutions Ltd · Built in the UK
          </p>
          <p>
            Designed and Developed by <a href="https://www.shomansolutions.com">Shoman Solutions</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
