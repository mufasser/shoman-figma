"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import "./site-shell.css";


const services = [
  { name: "Adobe Commerce & Magento", href: "/services/adobe-commerce-development-support" },
  { name: "Shopify Development", href: "/services/shopify-development-support" },
  { name: "Magento → Shopify Migration", href: "/services/magento-to-shopify-migration" },
  { name: "Technical Audits", href: "/services/technical-audits" },
  { name: "Systems Integration", href: "/services/third-party-integrations" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-navbar${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-navbar__container">
        <div className="site-navbar__row">

          {/* Logo */}
            <Link key="Home" href="/" className="site-navbar__logo">
              <Image
                src="/logo.png"
                alt="Shoman Logo"
                width={120}
                height={31}
                loading="eager"
                className="site-navbar__logo-image"
              />
            </Link>


          {/* Desktop Nav */}
          <nav className="site-navbar__nav hide-mobile">
            <Link key="Home" href="/" className="nav-link">
                Home
              </Link>
              <Link key="About" href="/about" className="nav-link">
                About
              </Link>
              
              {/* Services dropdown */}
            <div
              className="services-menu-trigger"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="nav-link"
              >
                Services <ChevronDown size={14} />
              </button>
              {servicesOpen && (
                <div className="services-dropdown">
                  {services.map((s) => (
                    <Link key={s.name} href={s.href}>{s.name}</Link>
                  ))}
                </div>
              )}
            </div>

            {[
              // { label: "Home", href: "/" },
              // { label: "Services", href: "/services" },
              // { label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Testimonials", href: "/testimonials" },
              { label: "Blog", href: "/insights" },
            ].map((item) => (
              <Link key={item.label} href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}

            

          </nav>

          {/* CTA */}
          <div className="site-navbar__actions hide-mobile">
            <a className="site-navbar__cta" href="/contact-us">
              Contact Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="site-navbar__toggle show-mobile"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="site-navbar__mobile-menu">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Testimonials", href: "/testimonials" },
              { label: "About", href: "/about" },
              { label: "Insights", href: "/insights" },
              { label: "Contact", href: "/contact-us" },
            ].map((item) => (
              <Link key={item.label} href={item.href}
                onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link className="site-navbar__mobile-cta" href="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </div>
        )}
      </div>
    </header>
  );
}
