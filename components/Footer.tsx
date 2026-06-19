"use client";
import { ArrowRight } from "lucide-react";

const links = {
  Pages: ["Home", "About", "Services", "Case Studies", "Blog", "Pricing"],
  Company: ["Terms & Conditions", "Privacy Policy", "Cookies", "Careers"],
  Community: ["Help Centre", "Forum", "Webinars", "Professionals"],
};

export default function Footer() {
  return (
    <footer style={{ background: "#080f1d", padding: "64px 24px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
          gap: 48,
          paddingBottom: 56,
          borderBottom: "1px solid #1e293b",
        }} className="footer-grid">

          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: "#ec7323",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 800, color: "#fff", fontSize: 18,
              }}>S</div>
              <span style={{ fontWeight: 700, fontSize: 17, color: "#fff", letterSpacing: "-0.3px" }}>
                Shoman<span style={{ color: "#ec7323" }}>.</span>
              </span>
            </div>

            <p style={{ fontSize: 14, lineHeight: 1.75, color: "#64748b", marginBottom: 28, maxWidth: 280 }}>
              UK-based ecommerce engineering. We build, fix, and scale Adobe Commerce, Magento, and Shopify platforms for businesses of every size.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { label: "Li", href: "#", color: "#0077B5" },
                { label: "Gh", href: "#", color: "#333" },
                { label: "X", href: "#", color: "#000" },
                { label: "Em", href: "#", color: "#ec7323" },
              ].map((s) => (
                <a key={s.label} href={s.href} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: "#0f172a",
                  border: "1px solid #1e293b",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700, color: "#64748b",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#ec7323";
                  (e.currentTarget as HTMLElement).style.color = "#ec7323";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1e293b";
                  (e.currentTarget as HTMLElement).style.color = "#64748b";
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
                fontSize: 12, fontWeight: 700, color: "#fff",
                letterSpacing: "0.08em", textTransform: "uppercase",
                marginBottom: 20,
              }}>{title}</h4>
              <ul style={{ listStyle: "none" }}>
                {items.map((item) => (
                  <li key={item} style={{ marginBottom: 12 }}>
                    <a href="#" style={{
                      fontSize: 14, color: "#64748b", textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ec7323")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}>
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
          <p style={{ fontSize: 13, color: "#334155" }}>
            © {new Date().getFullYear()} Shoman Solutions Ltd · Built in the 🇬🇧 UK
          </p>
          <p style={{ fontSize: 13, color: "#334155" }}>
            Designed for performance. Engineered with precision.
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
