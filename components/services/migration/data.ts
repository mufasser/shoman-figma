import {
  Boxes,
  ClipboardCheck,
  CloudCog,
  Database,
  FileSearch,
  Gauge,
  GitMerge,
  Headphones,
  History,
  KeyRound,
  ListChecks,
  PackageCheck,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

export type IconItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const assurances: IconItem[] = [
  {
    icon: Database,
    title: "Full data coverage",
    description: "Catalog, customers, orders, content and custom attributes.",
  },
  {
    icon: Gauge,
    title: "High-volume queues",
    description: "Designed for thousands to millions of records.",
  },
  {
    icon: ClipboardCheck,
    title: "Validation reports",
    description: "Record-level logs before the launch window.",
  },
  {
    icon: KeyRound,
    title: "Secure handover",
    description: "Credentials, exports and code stay client-owned.",
  },
];

export const coverage: IconItem[] = [
  { icon: Boxes, title: "Catalog", description: "Products, variants, options and media galleries" },
  { icon: Database, title: "Customers", description: "Customers, addresses, groups and consent fields" },
  { icon: History, title: "Orders", description: "Orders, invoices, refunds and transaction history" },
  { icon: PackageCheck, title: "Content", description: "Categories, collections, pages and blog content" },
  { icon: CloudCog, title: "Commerce settings", description: "Inventory, warehouses, pricing rules and tax classes" },
  { icon: SearchCheck, title: "SEO history", description: "Redirects, handles, metadata and legacy URLs" },
  { icon: GitMerge, title: "Extended data", description: "Reviews, wishlists, coupons and custom attributes" },
  { icon: RefreshCw, title: "Delta syncs", description: "Records created in Magento during launch week" },
  { icon: ShieldCheck, title: "Verification", description: "Totals, relationships and record-level integrity checks" },
];

export const onboarding = [
  {
    eyebrow: "For clean Magento stores",
    title: "Guided self-serve",
    description: "Use the migration console, field mapper and validation reports with support on standby.",
    features: ["Connection checklist", "Automated data scan", "Launch readiness report"],
    icon: FileSearch,
  },
  {
    eyebrow: "Most popular",
    title: "Managed migration",
    description: "A senior engineer plans, maps, validates and runs the complete migration with your team.",
    features: ["Engineer-led setup", "Custom attribute mapping", "Cutover plan included"],
    icon: Waypoints,
    featured: true,
  },
  {
    eyebrow: "For millions of records",
    title: "Enterprise command room",
    description: "Dedicated specialists and parallel queues for complex, high-volume commerce estates.",
    features: ["Parallel workers", "SLA launch support", "Executive dashboard"],
    icon: Headphones,
  },
];

export const workflow = [
  {
    number: "01",
    icon: Database,
    title: "Connect Magento",
    description: "Read the database, APIs, media storage and storefront URLs without interrupting trade.",
  },
  {
    number: "02",
    icon: GitMerge,
    title: "Map and transform",
    description: "Normalize SKUs, custom attributes, customer records and order relationships for Shopify.",
  },
  {
    number: "03",
    icon: ListChecks,
    title: "Dry-run at scale",
    description: "Rehearse the full migration with resumable jobs, validation reports and exception logs.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Launch with delta sync",
    description: "Keep Magento live while Shopify is prepared, verified and switched over in a planned window.",
  },
];

export const pricing = [
  {
    name: "Starter",
    price: "From £1,499",
    volume: "Up to 50K records",
    description: "A guided migration for clean catalogs and standard Shopify configurations.",
    features: ["Products, customers and orders", "SEO redirect import", "One complete dry run", "Email support"],
    cta: "Start guided setup",
  },
  {
    name: "Growth",
    price: "From £3,999",
    volume: "Up to 500K records",
    description: "An engineer-led migration for established stores with custom data and integrations.",
    features: ["Full catalog and order history", "Custom field mapping", "Two dry runs and validation", "Engineer-led cutover"],
    cta: "Start managed migration",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    volume: "Millions of records",
    description: "A dedicated command room for complex estates, strict launch windows and large datasets.",
    features: ["Dedicated migration specialists", "Parallel job orchestration", "SLA support and recovery", "Custom integrations"],
    cta: "Book enterprise review",
  },
];
