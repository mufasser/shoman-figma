"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';


const services = [
  { name: "Adobe Commerce & Magento", href: "/services/adobe-commerce" },
  { name: "Shopify Development", href: "/services/shopify" },
  { name: "Magento → Shopify Migration", href: "/services/migration" },
  { name: "Technical Audits", href: "/services/audits" },
  { name: "Systems Integration", href: "/services/integrations" },
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
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "var(--color-white)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0, 0, 0, 0.06)" : "0px 2px 2px rgba(0, 0, 0, 0.06)",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

          {/* Logo */}
            {/* <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: "var(--color-brand)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, color: "var(--color-white)", fontSize: 18, letterSpacing: "-0.5px",
            }}>S</div>
            <span style={{ fontWeight: 700, fontSize: 17, color: "var(--color-ink)", letterSpacing: "-0.3px" }}>
              Shoman<span style={{ color: "var(--color-brand)" }}>.</span>
            </span> */}
            <Link key="Home" href="/"
                className=""
                style={{ paddingBottom: 2 }}>
              <Image src='/logo.png' alt="Shoman Logo" width={120} height={36} loading="eager" />
            </Link>


          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hide-mobile">
            <Link key="Home" href="/"
                className="nav-link"
                style={{ fontSize: 14, fontWeight: 500, color: "var(--color-ink)", textDecoration: "none", paddingBottom: 2 }}>
                Home
              </Link>
              <Link key="About" href="/about"
                className="nav-link"
                style={{ fontSize: 14, fontWeight: 500, color: "var(--color-ink)", textDecoration: "none", paddingBottom: 2 }}>
                About
              </Link>
              {/* Services dropdown */}
            <div
              className="services-menu-trigger"
              style={{ position: "relative" }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="nav-link"
                style={{
                  display: "flex", alignItems: "center", gap: 4,
                  fontSize: 14, fontWeight: 500, color: "var(--color-ink)",
                  background: "none", border: "none", cursor: "pointer", paddingBottom: 2,
                }}>
                Services <ChevronDown size={14} style={{ marginTop: 1 }} />
              </button>
              {servicesOpen && (
                <div style={{
                  position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)",
                  marginTop: 12, background: "var(--color-white)", borderRadius: 12,
                  boxShadow: "0 16px 48px rgba(0, 0, 0, 0.12)", border: "1px solid var(--color-border)",
                  width: 260, padding: "8px 0", zIndex: 200,
                }}>
                  {services.map((s) => (
                    <a key={s.name} href={s.href} style={{
                      display: "block", padding: "10px 20px",
                      fontSize: 13, fontWeight: 500, color: "var(--color-ink-2)",
                      textDecoration: "none", transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-brand-soft)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >{s.name}</a>
                  ))}
                </div>
              )}
            </div>

            {[
              // { label: "Home", href: "/" },
              // { label: "Services", href: "/services" },
              // { label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Blog", href: "/insights" },
            ].map((item) => (
              <Link key={item.label} href={item.href}
                className="nav-link"
                style={{ fontSize: 14, fontWeight: 500, color: "var(--color-ink)", textDecoration: "none", paddingBottom: 2 }}>
                {item.label}
              </Link>
            ))}

            

            {/* <a href="#" style={{ fontSize: 14, fontWeight: 500, color: "var(--color-ink)", textDecoration: "none" }}
              className="nav-link">Pricing</a> */}
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="hide-mobile">
            <a href="/contact" style={{
              display: "inline-flex", alignItems: "center",
              padding: "10px 22px", borderRadius: 8,
              background: "var(--color-brand)", color: "var(--color-white)",
              fontSize: 14, fontWeight: 600, textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--color-brand-hover)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--color-brand)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}>
              Contact Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "none" }}
            className="show-mobile"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: "var(--color-white)", borderTop: "1px solid var(--color-border)",
            padding: "16px 0", display: "flex", flexDirection: "column", gap: 4,
          }}>
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "About", href: "/about" },
              { label: "Insights", href: "/insights" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link key={item.label} href={item.href}
                style={{
                  padding: "12px 0", fontSize: 15, fontWeight: 500,
                  color: "var(--color-ink)", textDecoration: "none", borderBottom: "1px solid var(--color-bg-muted)",
                }}
                onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" style={{
              marginTop: 12, padding: "12px 0", borderRadius: 8,
              background: "var(--color-brand)", color: "var(--color-white)", textAlign: "center",
              fontSize: 15, fontWeight: 600, textDecoration: "none",
            }} onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        .show-mobile { display: none; }
        .services-menu-trigger::after {
          content: "";
          position: absolute;
          top: 100%;
          left: -24px;
          right: -24px;
          height: 16px;
        }
      `}</style>
    </header>
  );
}
