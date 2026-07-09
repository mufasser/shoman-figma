"use client";
import Link from "next/link";
import Image from 'next/image';
// import LogoLight from '@/public/logo-light.svg';
// import LogoLight from '@/public/logo-light.svg'

const links = {
  Pages: ["Home", "About", "Services", "Portfolio", "Blog"],
  Company: ["Terms & Conditions", "Privacy Policy", "Cookies", "Careers"],
  Community: ["Help Centre", "Contact Us", "Support", "FAQs"],
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-footer)", padding: "64px 24px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
          gap: 48,
          paddingBottom: 56,
          borderBottom: "1px solid var(--color-ink-2)",
        }} className="footer-grid">

          {/* Brand column */}
          <div>
            
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <Link key="Home" href="/"
                style={{ paddingBottom: 2 }}>
                <Image src="/logo-light.svg" alt="Shoman Logo" width={120} height={36} />
              </Link>
            </div>

            <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--color-muted)", marginBottom: 28, maxWidth: 280 }}>
              UK-based ecommerce engineering. We build, fix, and scale Adobe Commerce, Magento, and Shopify platforms for businesses of every size.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { label: "Li", href: "#", color: "#0077B5" },
                { label: "Gh", href: "#", color: "#333" },
                { label: "X", href: "#", color: "#000" },
                { label: "Em", href: "#", color: "var(--color-brand)" },
              ].map((s) => (
                <a key={s.label} href={s.href} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: "var(--color-ink)",
                  border: "1px solid var(--color-ink-2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700, color: "var(--color-muted)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-brand)";
                  (e.currentTarget as HTMLElement).style.color = "var(--color-brand)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-ink-2)";
                  (e.currentTarget as HTMLElement).style.color = "var(--color-muted)";
                }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 style={{
                fontSize: 12, fontWeight: 700, color: "var(--color-white)",
                letterSpacing: "0.08em", textTransform: "uppercase",
                marginBottom: 20,
              }}>{title}</h4>
              <ul style={{ listStyle: "none" }}>
                {items.map((item) => (
                  <li key={item} style={{ marginBottom: 12 }}>
                    <a href="#" style={{
                      fontSize: 14, color: "var(--color-muted)", textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-brand)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "24px 0", flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: 13, color: "var(--color-footer-muted)" }}>
            © {new Date().getFullYear()} Shoman Solutions Ltd · Built in the UK
          </p>
          <p style={{ fontSize: 13, color: "var(--color-footer-muted)" }}>
            Designed and Developed by <a href="https://www.shomansolutions.com" style={{ color: "var(--color-brand)", textDecoration: "none" }}>Shoman Solutions</a>.
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
