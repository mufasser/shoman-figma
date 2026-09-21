import {
  BadgePoundSterling,
  Boxes,
  Building2,
  Factory,
  Globe2,
  Repeat2,
  Rocket,
  ShoppingCart,
  TrendingUp,
  Zap,
} from "lucide-react";

export const audiences = [
  { Icon: Rocket, title: "Startups & First Stores", body: "Launching your first Shopify store? We'll build it properly from day one — clean code, fast load times, and a foundation you can actually scale without a rebuild in 12 months.", tag: "From £2,000", color: "#96bf48", soft: "rgba(150, 191, 72, .1)" },
  { Icon: TrendingUp, title: "Growing Brands", body: "Hitting platform limits or needing a refresh? We rebuild the right parts — theme, integrations, checkout — to unblock the next stage of growth without burning everything down.", tag: "From £5,000", color: "#ec7323", soft: "#fef3e8" },
  { Icon: Building2, title: "Shopify Plus Upgrade", body: "Moving to Shopify Plus opens checkout extensibility, B2B features, and Shopify Flow automation. We handle the full Plus implementation including custom checkout UI blocks.", tag: "Custom quote", color: "#0284c7", soft: "rgba(2, 132, 199, .08)" },
];

export const buildChecklist = [
  "Bespoke Liquid theme development — no off-the-shelf templates",
  "Custom section & block architecture for flexible CMS editing",
  "Shopify app integrations: Klaviyo, Recharge, Gorgias, Algolia",
  "Stripe, PayPal, Klarna & BNPL payment configuration",
  "Shopify Markets for multi-currency and international selling",
  "Shopify Plus Checkout Extensibility — custom checkout UI blocks",
  "Core Web Vitals optimisation — LCP, CLS, FID targets from day one",
  "Full handover with documentation and CMS training session",
];

export const capabilities = [
  { Icon: ShoppingCart, title: "Shopify Plus Checkout", body: "Custom checkout UI blocks, extensibility features, and checkout branding for Shopify Plus stores." },
  { Icon: Globe2, title: "Shopify Markets", body: "Multi-currency, multi-language, and international pricing for brands selling across multiple regions." },
  { Icon: Factory, title: "B2B & Company Accounts", body: "Shopify Plus B2B — price lists, company accounts, net payment terms, and custom B2B flows." },
  { Icon: Zap, title: "Shopify Functions", body: "Custom discount logic, shipping rules, and payment customisations using Shopify Functions." },
  { Icon: Repeat2, title: "Subscription Commerce", body: "Recharge, Skio, or Shopify-native subscriptions — built and integrated into your existing store." },
  { Icon: Boxes, title: "Headless / Hydrogen", body: "Shopify Hydrogen builds for brands needing a custom frontend with full Shopify commerce backend." },
];

export const integrations = [
  { symbol: "Kl", name: "Klaviyo", type: "Email & SMS", color: "#1c1c1c" },
  { symbol: "St", name: "Stripe", type: "Payments", color: "#635bff" },
  { symbol: "Al", name: "Algolia", type: "Search", color: "#5468ff" },
  { symbol: "Rc", name: "Recharge", type: "Subscriptions", color: "#6366f1" },
  { symbol: "Go", name: "Gorgias", type: "Support", color: "#f59e0b" },
  { symbol: "Yo", name: "Yotpo", type: "Reviews", color: "#ef4444" },
  { symbol: "Lp", name: "Loop Returns", type: "Returns", color: "#10b981" },
  { symbol: "Sb", name: "ShipBob", type: "Fulfilment", color: "#0284c7" },
  { symbol: "Nv", name: "Nosto", type: "Personalisation", color: "#111827" },
  { symbol: "Jg", name: "Judge.me", type: "Reviews", color: "#4a90d9" },
  { symbol: "Pr", name: "Privy", type: "Email Capture", color: "#f97316" },
  { symbol: "Tr", name: "Triple Whale", type: "Analytics", color: "#14b8a6" },
];

export const processSteps = [
  { title: "Discovery & scoping", body: "We review your products, brand assets, integrations needed, and goals. You get a written scope with a fixed cost before work begins." },
  { title: "Design system & wireframes", body: "Component-level Figma design — typography, colours, spacing, all key pages. You approve before we write a single line of code." },
  { title: "Theme development", body: "Clean, performant Liquid with a flexible section architecture. Every component is documented and editable from the Shopify admin." },
  { title: "Integrations & data", body: "All apps connected, tested, and configured. Products, collections, metafields, and content migrated or built from scratch." },
  { title: "UAT, optimisation & launch", body: "User acceptance testing, Core Web Vitals optimisation, and a staged launch. We monitor live for 48 hours post-launch." },
];

export const outcomes = [
  { value: "2.1s", label: "Average LCP", body: "Core Web Vitals performance across all Shopify stores we build" },
  { value: "+34%", label: "Conversion lift", body: "Average improvement vs their previous store or theme" },
  { value: "100%", label: "On-time launches", body: "We set realistic timelines and we hit them, every time" },
  { value: "80+", label: "Shopify builds", body: "Stores launched across startups, SMEs and enterprise clients" },
];

export const pricingTiers = [
  { name: "Starter Store", price: "From £2,000", period: "per project", desc: "For founders launching a first Shopify store. Clean, fast, conversion-ready.", features: ["Bespoke theme setup (Dawn/OS2 base)", "Up to 3 page templates", "Payment & shipping setup", "Core apps installed", "Core Web Vitals passed", "2 weeks delivery"], cta: "Get Started" },
  { name: "Growth Build", price: "From £5,000", period: "per project", featured: true, desc: "For growing brands needing a fully custom theme and integrations.", features: ["Fully custom Liquid theme", "Full integration suite", "Custom section architecture", "Shopify Markets (multi-currency)", "4–6 week delivery", "CMS training & handover docs"], cta: "Most Popular Choice" },
  { name: "Shopify Plus", price: "Custom", desc: "Enterprise-level Plus builds with custom checkout, B2B, and automation.", features: ["Shopify Plus Checkout Extensibility", "B2B & Company accounts", "Shopify Flow automation", "ERP / 3PL integration", "Custom Shopify Functions", "Dedicated engineer throughout"], cta: "Let's Talk" },
];

export const faqs = [
  { q: "Do you use templates or build fully custom?", a: "Starter projects can use Shopify's Dawn or OS2 foundation where that is the most sensible route. Growth and Plus builds use fully custom Liquid themes, and every implementation is adapted to your brand, content, and conversion goals." },
  { q: "Can you migrate us from WooCommerce or Squarespace?", a: "Yes. We migrate products, customers, orders, content, and SEO data from WooCommerce, Squarespace, BigCommerce, and other platforms, with redirects and validation included." },
  { q: "What do we own after the project?", a: "Everything we create for the project belongs to you: theme code, custom apps and scripts, Figma files, and handover documentation. There are no licensing conditions tied to us." },
  { q: "Can we edit the store ourselves after handover?", a: "Yes. We build flexible sections and blocks so your team can manage content, products, and common layout changes in Shopify without touching code. CMS training is included." },
  { q: "How long does a Shopify build take?", a: "Starter stores typically take around two weeks, Growth builds four to six weeks, and Plus projects six to twelve weeks depending on integrations and migration scope." },
  { q: "Do you offer post-launch support?", a: "Yes. We can provide ongoing development, monitoring, optimisation, and integration support after launch, with a support arrangement sized to your store and roadmap." },
];

export const relatedServices = [
  { symbol: "→", title: "Magento → Shopify Migration", body: "Zero data loss migration with full SEO protection.", color: "#f46f25", href: "/services/magento-to-shopify-migration" },
  { symbol: "Ac", title: "Adobe Commerce Support", body: "Certified Magento engineering and retainer support.", color: "#ff0000", href: "/services/adobe-commerce-development-support" },
  { symbol: "Au", title: "Technical Audit", body: "Expert store audit from £499 fixed fee.", color: "#0284c7", href: "/services/technical-audits" },
  { Icon: BadgePoundSterling, title: "Systems Integration", body: "ERP, CRM & custom API connections.", color: "#6366f1", href: "/services/third-party-integrations" },
];
