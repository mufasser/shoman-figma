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
  { name: "White Label", href: "/services/white-label" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

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
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false);
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") setServicesOpen(false);
              }}
            >
              <button
                type="button"
                className="nav-link"
                aria-expanded={servicesOpen}
                aria-controls="desktop-services-dropdown"
                onClick={() => setServicesOpen(true)}
              >
                Services <ChevronDown size={14} />
              </button>
              {servicesOpen && (
                <div id="desktop-services-dropdown" className="services-dropdown">
                  <Link href="/services">All Services</Link>
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
            onClick={() => {
              setMenuOpen(!menuOpen);
              if (menuOpen) setMobileServicesOpen(false);
            }}
            className="site-navbar__toggle show-mobile"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="site-navbar__mobile-menu" aria-label="Mobile navigation">
            <Link href="/" onClick={closeMobileMenu}>Home</Link>
            <div className="site-navbar__mobile-services">
              <div className="site-navbar__mobile-services-row">
                <Link href="/services" onClick={closeMobileMenu}>Services</Link>
                <button
                  type="button"
                  aria-label={mobileServicesOpen ? "Hide service pages" : "Show service pages"}
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-submenu"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <ChevronDown size={18} className={mobileServicesOpen ? "is-open" : ""} />
                </button>
              </div>
              <div id="mobile-services-submenu" className="site-navbar__mobile-submenu" hidden={!mobileServicesOpen}>
                {services.map((service) => (
                  <Link key={service.href} href={service.href} onClick={closeMobileMenu}>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            {[
              { label: "Portfolio", href: "/portfolio" },
              { label: "Testimonials", href: "/testimonials" },
              { label: "About", href: "/about" },
              { label: "Insights", href: "/insights" },
            ].map((item) => (
              <Link key={item.label} href={item.href} onClick={closeMobileMenu}>
                {item.label}
              </Link>
            ))}
            <Link className="site-navbar__mobile-cta" href="/contact-us" onClick={closeMobileMenu}>Contact Us</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
