import { GetPaginatedPosts } from "@/app/graphql/GetPaginatedPosts";
import { GetOurProjects } from "@/app/graphql/GetProjects";
import { GetSinglePost } from "@/app/graphql/GetSinglePost";
import { GetAllProjectsQuery } from "@/app/graphql/GetTestimonials";

type GraphQLError = {
  message?: string;
};

type GraphQLResponse<T> = {
  data?: T;
  errors?: GraphQLError[];
};

type FetchGraphQLOptions = {
  variables?: Record<string, unknown>;
};

type Palette = {
  platform: string;
  platformSym: string;
  color: string;
  bg: string;
  iconKey: "shoppingBag" | "packageCheck" | "settings" | "shieldCheck" | "rocket" | "refresh";
};

type RawProject = {
  id?: number | string;
  title?: string;
  content?: string | null;
  status?: string | null;
  featuredImage?: {
    node?: {
      featuredImage?: string | null;
    } | null;
  } | null;
  projectFields?: {
    projectLink?: string | null;
  } | null;
};

type RawTestimonial = {
  id?: number | string;
  title?: string;
  status?: string | null;
  testimonialFields?: {
    href?: string | null;
    date?: string | null;
    customer?: string | null;
    testimonial?: string | null;
    service?: string | null;
    rating?: string | number | null;
    designation?: string | null;
    outcome?: string | null;
  } | null;
  featuredImage?: {
    node?: {
      avatar?: string | null;
    } | null;
  } | null;
};

type RawPost = {
  id?: string;
  title?: string;
  slug?: string;
  excerpt?: string | null;
  date?: string | null;
  content?: string | null;
  author?: {
    node?: {
      name?: string | null;
      avatar?: {
        url?: string | null;
      } | null;
    } | null;
  } | null;
  categories?: {
    nodes?: { name?: string | null; slug?: string | null }[];
  } | null;
  tags?: {
    nodes?: { name?: string | null; slug?: string | null }[];
  } | null;
  featuredImage?: {
    node?: {
      altText?: string | null;
      sourceUrl?: string | null;
    } | null;
  } | null;
  seo?: {
    title?: string | null;
    metaDesc?: string | null;
  } | null;
};

export type PortfolioItem = {
  id: string;
  platform: string;
  platformColor: string;
  platformSym: string;
  type: string;
  bg: string;
  iconKey: Palette["iconKey"];
  client: string;
  title: string;
  problem: string;
  result: string;
  resultLabel: string;
  tags: string[];
  href: string;
};

export type TestimonialItem = {
  id: string;
  platform: string;
  platformSym: string;
  color: string;
  bg: string;
  author: string;
  role: string;
  quote: string;
  result: string;
  resultLabel: string;
  initials: string;
  rating: number;
  date: string;
  href: string;
  avatar?: string;
};

export type BlogPostItem = {
  id: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured: boolean;
  iconKey: "shoppingBag" | "shuffle" | "store" | "settings" | "shieldCheck" | "trendingUp";
  slug: string;
  href: string;
  image?: string;
  imageAlt?: string;
};

export type SinglePostItem = BlogPostItem & {
  content: string;
  author: string;
  authorAvatar?: string;
  seoTitle?: string;
  seoDescription?: string;
  tags: string[];
};

export type ContentPayload = {
  projects: PortfolioItem[];
  testimonials: TestimonialItem[];
  posts: BlogPostItem[];
  missing: string[];
  errors: string[];
};

function normalizeGraphQLEndpoint(value: string) {
  if (!value) return "";

  try {
    const url = new URL(value);
    if (url.protocol === "http:" && !["localhost", "127.0.0.1"].includes(url.hostname)) {
      url.protocol = "https:";
    }
    if (url.pathname === "/graphql") {
      url.pathname = "/graphql/";
    }
    return url.toString();
  } catch {
    return value;
  }
}

const endpoint = normalizeGraphQLEndpoint(
  process.env.WORDPRESS_GRAPHQL_ENDPOINT ||
  process.env.WP_GRAPHQL_ENDPOINT ||
  process.env.GRAPHQL_ENDPOINT ||
  process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT ||
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
  "",
);

const palettes: { keywords: string[]; value: Palette }[] = [
  {
    keywords: ["shopify plus", "shopify"],
    value: { platform: "Shopify", platformSym: "Sh", color: "#96BF48", bg: "#f5fbee", iconKey: "rocket" },
  },
  {
    keywords: ["migration", "migrate"],
    value: { platform: "Migration", platformSym: "M", color: "#F46F25", bg: "#fff8f0", iconKey: "packageCheck" },
  },
  {
    keywords: ["integration", "api", "sap", "salesforce", "erp", "crm"],
    value: { platform: "Systems Integration", platformSym: "API", color: "#6366F1", bg: "#f5f3ff", iconKey: "settings" },
  },
  {
    keywords: ["audit", "security", "patch"],
    value: { platform: "Technical Audit", platformSym: "Au", color: "#0284C7", bg: "#f0f9ff", iconKey: "shieldCheck" },
  },
  {
    keywords: ["white-label", "white label", "agency"],
    value: { platform: "White-Label", platformSym: "WL", color: "#0369A1", bg: "#f0f9ff", iconKey: "refresh" },
  },
  {
    keywords: ["adobe", "magento", "commerce"],
    value: { platform: "Adobe Commerce", platformSym: "Ac", color: "#FF0000", bg: "#fff5f5", iconKey: "shoppingBag" },
  },
];

const postPalettes = [
  { keywords: ["shopify"], iconKey: "store" as const, tagColor: "#96BF48", tagBg: "#f5fbee" },
  { keywords: ["migration", "migrate"], iconKey: "shuffle" as const, tagColor: "#F46F25", tagBg: "#fff8f0" },
  { keywords: ["integration", "api", "erp", "crm"], iconKey: "settings" as const, tagColor: "#6366F1", tagBg: "#f5f3ff" },
  { keywords: ["security", "patch", "audit"], iconKey: "shieldCheck" as const, tagColor: "#0284C7", tagBg: "#f0f9ff" },
  { keywords: ["growth", "conversion", "performance"], iconKey: "trendingUp" as const, tagColor: "var(--color-brand)", tagBg: "var(--color-brand-soft)" },
  { keywords: ["adobe", "magento", "commerce"], iconKey: "shoppingBag" as const, tagColor: "#FF0000", tagBg: "#fff5f5" },
];

function stripHtml(value?: string | null) {
  if (!value) return "";

  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&hellip;/g, "...")
    .replace(/\s+/g, " ")
    .trim();
}

function trimWords(value: string, maxWords: number) {
  const words = value.split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return value;
  return `${words.slice(0, maxWords).join(" ")}...`;
}

function formatDate(value?: string | null) {
  if (!value) return "Recently";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return stripHtml(value);

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function getInitials(value: string) {
  const words = value.split(/\s+/).filter(Boolean);
  const initials = words.slice(0, 2).map((word) => word[0]).join("");
  return initials.toUpperCase() || "S";
}

function inferPalette(value: string) {
  const normalized = value.toLowerCase();
  return palettes.find((item) => item.keywords.some((keyword) => normalized.includes(keyword)))?.value || palettes[5].value;
}

function inferPostPalette(value: string) {
  const normalized = value.toLowerCase();
  return postPalettes.find((item) => item.keywords.some((keyword) => normalized.includes(keyword))) || postPalettes[5];
}

function splitOutcome(value?: string | null) {
  const cleaned = stripHtml(value);
  if (!cleaned) {
    return { result: "5.0", resultLabel: "client rating" };
  }

  const [result, ...rest] = cleaned.split(/\s+/);
  return {
    result,
    resultLabel: rest.join(" ") || "project outcome",
  };
}

function normalizeRating(value?: string | number | null, fallback?: string) {
  const directValue = typeof value === "string" ? value.trim() : value;
  const parsed = Number(directValue || fallback);

  if (!Number.isFinite(parsed) || parsed <= 0) return 5;

  return Math.max(1, Math.min(5, Math.round(parsed)));
}

function getReadTime(content?: string | null) {
  const words = stripHtml(content).split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min`;
}

async function fetchGraphQL<T>(query: string, { variables }: FetchGraphQLOptions = {}) {
  if (!endpoint) {
    throw new Error("GraphQL endpoint is not configured. Set WORDPRESS_GRAPHQL_ENDPOINT or GRAPHQL_ENDPOINT.");
  }

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  if (process.env.WORDPRESS_GRAPHQL_TOKEN) {
    headers.set("Authorization", `Bearer ${process.env.WORDPRESS_GRAPHQL_TOKEN}`);
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  const payload = (await response.json()) as GraphQLResponse<T>;

  if (!response.ok || payload.errors?.length) {
    const message = payload.errors?.map((error) => error.message).filter(Boolean).join("; ");
    throw new Error(message || `GraphQL request failed with status ${response.status}`);
  }

  return payload.data as T;
}

function normalizeProject(project: RawProject, index: number): PortfolioItem {
  const title = stripHtml(project.title) || `Project ${index + 1}`;
  const content = stripHtml(project.content);
  const palette = inferPalette(`${title} ${content}`);
  const type = palette.platform.includes("Integration")
    ? "Integration"
    : palette.platform.includes("Audit")
      ? "Audit"
      : palette.platform.includes("Migration")
        ? "Migration"
        : palette.platform.includes("Shopify")
          ? "Build"
          : "Performance";

  return {
    id: String(project.id || index + 1),
    platform: palette.platform,
    platformColor: palette.color,
    platformSym: palette.platformSym,
    type,
    bg: palette.bg,
    iconKey: palette.iconKey,
    client: "Project case study",
    title,
    problem: trimWords(content || "Project details are being prepared in the CMS.", 20),
    result: project.status === "publish" ? "Live" : "CMS",
    resultLabel: "project status",
    tags: Array.from(new Set([palette.platform, type])),
    href: project.projectFields?.projectLink || "#",
  };
}

function normalizeTestimonial(testimonial: RawTestimonial, index: number): TestimonialItem {
  const fields = testimonial.testimonialFields;
  const title = stripHtml(testimonial.title);
  const service = stripHtml(fields?.service) || "Client Feedback";
  const palette = inferPalette(service);
  const author = stripHtml(fields?.customer) || title || `Client ${index + 1}`;
  const outcome = splitOutcome(fields?.outcome);

  return {
    id: String(testimonial.id || index + 1),
    platform: service,
    platformSym: palette.platformSym,
    color: palette.color,
    bg: palette.bg,
    author,
    role: stripHtml(fields?.designation) || "Client",
    quote: stripHtml(fields?.testimonial) || "Testimonial copy is being prepared in the CMS.",
    result: outcome.result,
    resultLabel: outcome.resultLabel,
    initials: getInitials(author),
    rating: normalizeRating(fields?.rating, outcome.result),
    date: fields?.date || "",
    href: fields?.href || "#",
    avatar: testimonial.featuredImage?.node?.avatar || undefined,
  };
}

function normalizePost(post: RawPost, index: number): BlogPostItem {
  const title = stripHtml(post.title) || `Article ${index + 1}`;
  const firstCategory = stripHtml(post.categories?.nodes?.[0]?.name) || "Adobe Commerce";
  const content = stripHtml(post.content);
  const palette = inferPostPalette(`${firstCategory} ${title} ${content}`);
  const slug = post.slug || "";

  return {
    id: post.id || slug || String(index + 1),
    tag: firstCategory,
    tagColor: palette.tagColor,
    tagBg: palette.tagBg,
    title,
    excerpt: trimWords(stripHtml(post.excerpt) || content || "Article excerpt is being prepared in the CMS.", 26),
    date: formatDate(post.date),
    readTime: getReadTime(post.content),
    featured: index === 0,
    iconKey: palette.iconKey,
    slug,
    href: slug ? `/insights/${slug}` : "#",
    image: post.featuredImage?.node?.sourceUrl || undefined,
    imageAlt: stripHtml(post.featuredImage?.node?.altText) || title,
  };
}

export async function getContentPayload(): Promise<ContentPayload> {
  const missing: string[] = [];
  const errors: string[] = [];

  const [projectsResult, testimonialsResult, postsResult] = await Promise.allSettled([
    fetchGraphQL<{ projects?: { nodes?: RawProject[] } }>(GetOurProjects),
    fetchGraphQL<{ testimonials?: { nodes?: RawTestimonial[] } }>(GetAllProjectsQuery),
    fetchGraphQL<{ posts?: { nodes?: RawPost[] } }>(GetPaginatedPosts, {
      variables: { first: 24, after: null, search: null },
    }),
  ]);

  if (projectsResult.status === "rejected") errors.push(`Projects: ${projectsResult.reason.message}`);
  if (testimonialsResult.status === "rejected") errors.push(`Testimonials: ${testimonialsResult.reason.message}`);
  if (postsResult.status === "rejected") errors.push(`Posts: ${postsResult.reason.message}`);

  const projects =
    projectsResult.status === "fulfilled"
      ? (projectsResult.value.projects?.nodes || []).map(normalizeProject)
      : [];
  const testimonials =
    testimonialsResult.status === "fulfilled"
      ? (testimonialsResult.value.testimonials?.nodes || []).map(normalizeTestimonial)
      : [];
  const posts =
    postsResult.status === "fulfilled"
      ? (postsResult.value.posts?.nodes || []).map(normalizePost)
      : [];

  if (!endpoint) missing.push("GraphQL endpoint env var: WORDPRESS_GRAPHQL_ENDPOINT or GRAPHQL_ENDPOINT");
  if (projects.length === 0) missing.push("GraphQL projects returned no usable nodes");
  if (testimonials.length === 0) missing.push("GraphQL testimonials returned no usable nodes");
  if (posts.length === 0) missing.push("GraphQL posts returned no usable nodes");

  return { projects, testimonials, posts, missing, errors };
}

export async function getSinglePostContent(slug: string) {
  const data = await fetchGraphQL<{ post?: RawPost }>(GetSinglePost, {
    variables: { id: slug, idType: "SLUG" },
  });

  if (!data.post) return null;

  const normalized = normalizePost(data.post, 0);
  const author = stripHtml(data.post.author?.node?.name) || "Shoman Solutions";

  return {
    ...normalized,
    content: data.post.content || "",
    author,
    authorAvatar: data.post.author?.node?.avatar?.url || undefined,
    seoTitle: stripHtml(data.post.seo?.title) || normalized.title,
    seoDescription: stripHtml(data.post.seo?.metaDesc) || normalized.excerpt,
    tags: (data.post.tags?.nodes || []).map((tag) => stripHtml(tag.name)).filter(Boolean),
  } satisfies SinglePostItem;
}
