import { AlertTriangle, Ban, Gauge, PhoneOff, Puzzle, ShieldAlert, ShieldCheck, Zap, RefreshCw, Rocket, PackageCheck, ShoppingBag, Search, Settings } from "lucide-react";

export const navigation = [
  { id: "pain", label: "Pain Points" }, { id: "included", label: "What's Included" },
  { id: "versions", label: "M1 vs M2 vs AC" }, { id: "process", label: "Our Process" },
  { id: "pricing", label: "Pricing" }, { id: "faq", label: "FAQ" },
];

export const painPoints = [
  { Icon: Gauge, title: "Slow checkout losing conversions", body: "Unoptimised queries, missing indices, and bloated extensions drag checkout to 6–12 seconds. Every second costs you sales at the point of highest intent." },
  { Icon: ShieldAlert, title: "Security patches falling behind", body: "Adobe releases patches regularly. Missing them leaves your store vulnerable to exploit and non-compliant with PCI DSS — a risk no merchant can afford." },
  { Icon: AlertTriangle, title: "Extension conflicts breaking pages", body: "Third-party extensions fighting each other cause cart errors, admin crashes, and broken product pages — always at the worst possible time." },
  { Icon: Ban, title: "No staging or deployment pipeline", body: "Changes pushed directly to live. No rollback plan. One bad deploy brings the whole store down with no clean path back." },
  { Icon: PhoneOff, title: "Your agency went silent", body: "Mid-project handoffs, undocumented code, and zero knowledge transfer. The next team starts from scratch and you pay for it twice." },
  { Icon: Puzzle, title: "Custom module technical debt", body: "Modules written by multiple developers with no standards, no tests, and no documentation. Nobody knows what they actually do anymore." },
];

export const included = [
  "Adobe Security & Core Patch management — every release applied", "Custom module development and extension builds",
  "Database query optimisation and index rebuilding", "Varnish / Redis / FPC caching layer setup and tuning",
  "Staging environment management and deployment pipeline", "Monthly performance report with Core Web Vitals tracking",
  "24-hour response SLA with escalation to senior engineer", "Senior code review on all custom work before it goes live",
  "Full documentation of every change made during the sprint",
];

export const outcomes = [
  { value: "53%", label: "Faster checkout", body: "Average page speed improvement after first sprint" },
  { value: "0", label: "Security gaps", body: "All retainer clients have zero outstanding patches" },
  { value: "40+", label: "Active clients", body: "Adobe Commerce & Magento retainer clients currently" },
  { value: "24h", label: "Response SLA", body: "Maximum ticket response time, guaranteed" },
];

export const steps = [
  { title: "Discovery & codebase audit", body: "We review your stack, identify the highest-risk issues, and produce a prioritised fix list before the retainer even starts." },
  { title: "Staging environment setup", body: "If you don't have one, we set it up. No changes ever go live without being tested in a mirrored environment first — no exceptions." },
  { title: "Security & performance baseline", body: "We patch all outstanding security vulnerabilities and fix the top three performance issues in the first sprint." },
  { title: "Ongoing sprint delivery", body: "2-week sprints with a defined scope, a delivery report, and a review call. You always know what's in progress and what's next." },
  { title: "Monthly performance review", body: "Core Web Vitals, uptime, patch status, and a clear backlog for the next period — delivered as a written report every month." },
];

export const services = [
  { Icon: ShieldCheck, title: "Security & Patching", body: "All Adobe security patches applied, tested in staging first, deployed with zero downtime and full rollback plans." },
  { Icon: Zap, title: "Performance Optimisation", body: "Database indexing, Varnish/Redis tuning, image optimisation, and frontend performance — Core Web Vitals targets set from day one." },
  { Icon: Puzzle, title: "Custom Module Development", body: "Custom extensions built to Adobe standards — fully documented, tested, and reviewed before they go anywhere near production." },
  { Icon: RefreshCw, title: "Third-Party Integrations", body: "ERP, CRM, payment gateway, warehouse, and marketing platform connections — custom or via certified extensions." },
  { Icon: Rocket, title: "Performance Audits", body: "Full technical audit of your codebase, database, and infrastructure — delivered as a prioritised fix list within 5 days." },
  { Icon: PackageCheck, title: "Migration Support", body: "Planning a move from M1 to M2, or M2 to Adobe Commerce Cloud? We handle the architecture, data migration, and cutover." },
];

export const tiers = [
  { name: "Essential Support", price: "£1,200", period: "/month", desc: "Core security and stability for SME stores needing reliable uptime and patching.", features: ["8 hours development per month", "Security patch management", "Monthly performance report", "48-hour ticket response SLA", "Staging environment access"], cta: "Get Started" },
  { name: "Growth Engineering", price: "£2,800", period: "/month", desc: "Active development alongside support for stores investing in new features and growth.", features: ["20 hours development per month", "Custom module builds included", "Core Web Vitals monitoring", "24-hour response SLA", "Dedicated senior engineer", "Sprint planning calls included"], cta: "Most Popular Choice", highlight: true },
  { name: "Enterprise Scale", price: "Custom", desc: "High-volume stores with complex requirements, strict SLAs, and dedicated team allocation.", features: ["Dedicated engineer allocation", "4-hour critical response SLA", "Multi-store support", "Full CI/CD pipeline management", "Architecture consulting included", "Quarterly roadmap sessions"], cta: "Let's Talk" },
];

export const faqs = [
  { q: "Do we own the code your team writes?", a: "Yes, always. Every line of custom code written during your engagement belongs to you, with no licensing restrictions. We document it fully and hand it over as part of every sprint." },
  { q: "What happens if we need to cancel the retainer?", a: "There is a 30-day notice period on all retainer plans. We produce a full handover document covering everything we've worked on, so your next team can pick it up without confusion." },
  { q: "Can you work with our existing internal developer?", a: "Absolutely. We work alongside your in-house team, handle code reviews, and focus our time on complex backend tasks." },
  { q: "How quickly can you start?", a: "Typically within 5–7 working days of signing. We run a codebase discovery call in the first week and start the first sprint in week two. Security patches are often applied in the first 48 hours." },
  { q: "Do you work with Adobe Commerce Cloud (Commerce ECE)?", a: "Yes. We work with both self-hosted Magento 2 and Adobe Commerce Cloud, including ECE tooling, environment management, and Commerce Cloud architecture." },
  { q: "What's included in a 'sprint review call'?", a: "We walk through the completed work, demonstrate changes, review testing and deployment, and agree the priorities for the next sprint. You also receive a written delivery report." },
];

export const related = [
  { Icon: RefreshCw, title: "Magento → Shopify Migration", body: "Zero data loss migration with full SEO protection.", href: "/services/magento-to-shopify-migration", color: "var(--color-magento)", symbol: "→" },
  { Icon: ShoppingBag, title: "Shopify Development", body: "Bespoke Shopify and Plus builds for all sizes.", href: "/services/shopify-development-support", color: "var(--color-shopify)", symbol: "Sh" },
  { Icon: Search, title: "Technical Audit", body: "Expert store audit from £499 fixed fee.", href: "/services/technical-audits", color: "var(--color-info)", symbol: "Au" },
  { Icon: Settings, title: "Systems Integration", body: "ERP, CRM & custom API connections.", href: "/services/third-party-integrations", color: "var(--color-indigo)", symbol: "" },
];
