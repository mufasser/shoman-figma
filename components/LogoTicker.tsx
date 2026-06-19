"use client";
export default function LogoTicker() {
  const logos = [
    { name: "Adobe Commerce", color: "#FF0000", symbol: "Ac" },
    { name: "Magento", color: "#F46F25", symbol: "M" },
    { name: "Shopify", color: "#96BF48", symbol: "Sh" },
    { name: "Stripe", color: "#635BFF", symbol: "St" },
    { name: "Klaviyo", color: "#1C1C1C", symbol: "Kl" },
    { name: "SAP", color: "#0070F3", symbol: "SAP" },
    { name: "HubSpot", color: "#FF7A59", symbol: "Hs" },
    { name: "Salesforce", color: "#00A1E0", symbol: "Sf" },
    { name: "Algolia", color: "#5468FF", symbol: "Al" },
    { name: "AWS", color: "#FF9900", symbol: "AWS" },
  ];

  const repeated = [...logos, ...logos];

  return (
    <section style={{ background: "#0f172a", overflow: "hidden", padding: "20px 0" }}>
      <div style={{
        display: "flex", alignItems: "center",
        marginBottom: 4,
        paddingLeft: 24,
      }}>
        <span style={{
          fontSize: 11, fontWeight: 600, color: "#64748b",
          letterSpacing: "0.1em", textTransform: "uppercase",
          marginRight: 32, whiteSpace: "nowrap",
        }}>
          Trusted platforms & integrations
        </span>
      </div>

      <div style={{ overflow: "hidden" }}>
        <div className="ticker-track" style={{ paddingTop: 8 }}>
          {repeated.map((logo, i) => (
            <div key={i} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              marginRight: 48,
              opacity: 0.7,
              transition: "opacity 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: logo.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, fontWeight: 800, color: "#fff",
                letterSpacing: "-0.3px",
                flexShrink: 0,
              }}>{logo.symbol}</div>
              <span style={{
                fontSize: 14, fontWeight: 600, color: "#cbd5e1",
                whiteSpace: "nowrap",
              }}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
