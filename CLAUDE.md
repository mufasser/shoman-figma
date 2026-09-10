# Claude / AI Agent Instructions For Shoman Solutions

Use this file as the operating manual for every AI agent working on this project. The goal is to keep the Shoman Solutions website production-ready, visually consistent, responsive, maintainable, and easy for the next developer or agent to continue.

## Primary Mission

You are acting as a senior Next.js frontend engineer, UI/UX designer, and Figma-to-code implementer.

Your job is not only to make a requested change work. Your job is to make it fit the project:

- Preserve the existing Shoman Solutions design language.
- Use the shared theme tokens and reusable components.
- Keep code clean, small, and understandable.
- Avoid duplicate, messy, one-off implementations.
- Maintain responsive behavior across desktop, tablet, and mobile.
- Verify changes before reporting completion.
- Never disturb unrelated design, layout, content, files, or user edits.

## Critical Next.js Rule

This project uses `next@16.2.9` and `react@19.2.4`.

This is not the Next.js you may remember from older training data. Before writing or changing code that depends on Next.js behavior, read the relevant local docs in:

```txt
node_modules/next/dist/docs/
```

At minimum, read the App Router guide for routing/layout/page work:

```txt
node_modules/next/dist/docs/01-app/index.md
```

Respect all deprecation warnings and compiler errors from this local Next version.

## Project Commands

Use these commands from the project root:

```bash
npm run dev
npm run build
npm run lint
```

For focused checks, lint the touched file directly when useful:

```bash
node node_modules/eslint/bin/eslint.js app/services/page.tsx
```

If a dev server is already using port `3000`, use another port:

```bash
npm run dev -- --hostname 127.0.0.1 --port 3001
```

Always run `npm run build` or the local Next build command after meaningful UI/code changes. Build catches Next 16 issues that lint may not catch.

## Current Tech Stack

- Framework: Next.js App Router
- Next version: `16.2.9`
- React version: `19.2.4`
- Language: TypeScript
- Styling: mostly inline styles plus `style jsx` and global tokens
- Global CSS: `app/globals.css`
- Icons: `lucide-react`
- Images: `next/image`
- Package manager: npm

## Important Files And Responsibilities

Routes:

- `app/page.tsx`: homepage composition.
- `app/about/page.tsx`: about page.
- `app/contact-us/page.tsx`: contact page.
- `app/insights/page.tsx`: blog/insights page.
- `app/portfolio/page.tsx`: portfolio page.
- `app/testimonials/page.tsx`: testimonials page.
- `app/services/page.tsx`: all services listing page.
- `app/services/*/page.tsx`: individual service detail pages.
- `app/services/*/layout.tsx`: service metadata/layout wrappers.
- `app/layout.tsx`: root metadata, Inter font preload, global CSS.
- `app/globals.css`: design tokens, global animations, global utility classes.

Shared components:

- `components/Navbar.tsx`: fixed top navigation with services dropdown and mobile menu.
- `components/Footer.tsx`: shared footer with logo, links, and Lucide social/contact icons.
- `components/Hero.tsx`: homepage hero.
- `components/HeroPlatformLogos.tsx`: homepage hero right-side platform/logo section.
- `components/LogoTicker.tsx`: homepage logo ticker using logos from `public/logos`.
- `components/ServicesCarousel.tsx`: homepage service carousel.
- `components/WhyChooseUs.tsx`: homepage trust/value section.
- `components/CaseStudies.tsx`: homepage case studies section.
- `components/Testimonials.tsx`: homepage testimonials section.
- `components/BlogAndCTA.tsx`: homepage blog and community banner components.
- `components/ContactForm.tsx`: reusable, API-ready contact form.
- `components/FinalCTA.tsx`: reusable dark final call-to-action section.
- `components/services/ServiceLayout.tsx`: shared layout for all service detail pages, including hero and compact contact form.
- `components/services/ServiceComponents.tsx`: reusable section labels, headings, grids, pricing, FAQ, checklist, process, etc.

SEO route map:

- Contact: `/contact-us`; legacy `/contact` redirects permanently.
- Adobe Commerce service: `/services/adobe-commerce-development-support`; legacy `/services/adobe-commerce` redirects permanently.
- Shopify service: `/services/shopify-development-support`; legacy `/services/shopify` redirects permanently.
- Migration service: `/services/magento-to-shopify-migration`; legacy `/services/migration` redirects permanently.
- Audits service: `/services/technical-audits`; legacy `/services/audits` redirects permanently.
- Integrations service: `/services/third-party-integrations`; legacy `/services/integrations` redirects permanently.
- White-label service remains `/services/white-label`.

Assets:

- `public/logo.png`: main dark logo.
- `public/logo-light.svg`: footer/light logo.
- `public/logos/*`: client logo ticker assets.
- `public/hero/*`: hero/platform/contact/testimonial assets.
- `public/section/*`: page section imagery.
- `public/assets/services/*`: service card placeholder images. These are intentionally named by service so they can be replaced later without changing code.

## Brand And Design System

Always use the CSS variables in `app/globals.css` instead of hardcoded colors when possible.

Core tokens:

- `--font-sans`: Inter/system sans. Primary font for all UI.
- `--font-accent`: 42dot Sans fallback currently mapped to sans.
- `--color-brand`: `#ec7323`, primary orange.
- `--color-brand-hover`: `#d4621a`.
- `--color-brand-soft`: `#fef3e8`.
- `--color-brand-soft-2`: `#fff8f0`.
- `--color-brand-rgb`: `236, 115, 35`.
- `--color-ink`: `#0f172a`, primary dark navy text.
- `--color-ink-2`: `#1e293b`.
- `--color-copy`: `#475569`.
- `--color-muted`: `#64748b`.
- `--color-subtle`: `#94a3b8`.
- `--color-white`: `#ffffff`.
- `--color-bg-soft`: `#f8fafc`.
- `--color-bg-muted`: `#f1f5f9`.
- `--color-border`: `#e2e8f0`.
- `--color-border-strong`: `#cbd5e1`.
- `--color-footer`: `#080f1d`.
- `--color-adobe`: `#ff0000`.
- `--color-magento`: `#f46f25`.
- `--color-shopify`: `#96bf48`.
- `--color-info`: `#0284c7`.
- `--color-indigo`: `#6366f1`.

Visual style:

- Clean, senior, technical, trustworthy.
- White or very light grey page backgrounds.
- Dark navy text, orange highlights.
- Avoid loud gradients and decorative clutter.
- Use restrained shadows: enough depth to feel polished, not SaaS-dribbble heavy.
- Border radius should usually be `8px`, `9px`, `12px`, `16px`, `18px`, or `20px` depending on existing context.
- Cards should have clear borders and subtle hover lift when interactive.
- Buttons should have deliberate hover states.
- Copy should sound direct, practical, and expert. Avoid fluffy marketing filler.

Typography:

- Use Inter via `app/layout.tsx`.
- H1 often uses `fontWeight: 800`, `letterSpacing: "-0.03em"`, `lineHeight: 1.1`.
- Section H2 often uses `clamp(24px, 3vw, 36px)` or similar.
- Body copy usually uses `14px` to `17px`, `lineHeight` from `1.55` to `1.75`.
- Do not use negative letter spacing on small UI labels unless the existing local pattern does so.
- Do not scale body text with viewport width. Use `clamp()` carefully only for headings.

## Layout Rules

Common page structure:

1. `Navbar`
2. Hero section
3. Main page sections
4. Optional `FinalCTA`
5. `Footer`

Container rules:

- Main max width is usually `1240px`.
- Horizontal page padding is usually `24px`.
- Desktop section padding is often `64px`, `72px`, or `80px`.
- Mobile section padding should tighten but not become cramped.
- Most responsive grids collapse at `980px`, `900px`, `768px`, `640px`, `600px`, or `520px` depending on the component.

Responsive rules:

- Every new layout must work at desktop, tablet around `768px`, and mobile around `390px`.
- Text must never overflow, overlap, or get clipped.
- Cards/buttons should have stable dimensions or responsive constraints.
- Do not rely on hover-only interactions for mobile.
- If a desktop design is staggered or absolute-positioned, provide a tablet and mobile layout that remains readable.
- For fixed nav, page heroes should account for the `72px` header height with `paddingTop: 72`.

## Component And Code Organization

Prefer reusable components when:

- A section appears on more than one page.
- A card pattern repeats.
- A form, CTA, hero visual, ticker, or section header might be used again.
- Logic is more than trivial.

Do not create a new abstraction when:

- The change is truly one-off.
- The abstraction hides simple page-specific content.
- It would fight existing project patterns.

Existing reusable components should be used first:

- Use `ContactForm` for contact/enquiry forms.
- Use `FinalCTA` for dark final CTA sections on pages such as About and Testimonials.
- Use service helpers from `components/services/ServiceComponents.tsx` for service detail content.
- Use `ServiceLayout` for service detail pages so hero/contact/footer behavior stays consistent.

Client components:

- Add `"use client"` only when using hooks, browser APIs, event handlers, or client-only interactivity.
- Keep server components server-renderable when there is no client interactivity.

Styled JSX:

- This project uses `style jsx` inside some components.
- Do not place multiple nested `style jsx` blocks where Next 16 will reject them.
- If a component already has a `style jsx` block, merge new scoped rules into the existing one.

Inline styles:

- The project currently uses inline styles heavily.
- For repeated patterns, prefer reusable components or named classes plus `style jsx`.
- Do not spread the same large inline style block across multiple files.
- When adding or refactoring styles, use global CSS variables for colors and font choices.
- Keep changes scoped; do not do broad style rewrites unless explicitly asked.

## Figma Workflow

Primary Figma file:

```txt
https://www.figma.com/design/ZjM4Dq1HW5iXOyeCYgpK83/shoman
```

Previously referenced Figma nodes/pages include:

- Home page hero/platform logos and logo ticker.
- Testimonials page.
- Blog page hero stats.
- Final CTA section.

When the user provides a Figma link or screenshot:

1. Study the design thoroughly before coding.
2. Identify whether the user wants implementation now or only wants the design mapped for later.
3. If the user says not to implement yet, only document and mentally map the page/section.
4. If implementing, match spacing, hierarchy, content, proportions, and responsive behavior.
5. Split the design into reusable components when appropriate.
6. Use existing theme colors and font patterns; adapt the Figma design to the project brand rather than copying incompatible styles blindly.
7. Use images from project `public` folders when they exist.
8. If assets are missing, place new assets in an obvious public subfolder with descriptive filenames.
9. Never disturb existing components or sections outside the requested scope.

Figma-to-code quality bar:

- The result should feel like the Figma design belongs inside this project.
- Avoid pixel-perfect implementation that breaks responsiveness.
- Preserve typography scale and content hierarchy.
- Preserve enough white space for premium feel.
- Avoid unnecessary explanatory text inside the UI.

## Image Rules

Use `next/image` for project images unless there is a specific reason not to.

Rules:

- For static dimensions, provide `width` and `height`.
- For `fill`, the parent must have `position: "relative"` and stable dimensions such as `aspectRatio`, `height`, or `minHeight`.
- Always provide meaningful `alt` text unless the image is purely decorative.
- Provide `sizes` when using `fill`.
- Use `loading="eager"` or `priority`/fetch priority only for above-the-fold images where appropriate.
- If CSS changes only width or only height on an image, set the other dimension to `"auto"` to preserve aspect ratio.
- Avoid broken paths. Public paths start at `/`, e.g. `/hero/hero-contact.webp`.
- Place new service-card placeholder imagery in `public/assets/services`.
- Place client logos in `public/logos`.
- Place hero/platform assets in `public/hero`.
- Place generic section imagery in `public/section`.

Known image assets:

- `/logo.png`
- `/logo-light.svg`
- `/logos/swyftch.png`
- `/logos/bathshark.png`
- `/logos/clintons.png`
- `/logos/black-country-metalworks.png`
- `/logos/tower-health.png`
- `/hero/adobe-commerce.png`
- `/hero/magento.png`
- `/hero/shopify.png`
- `/hero/adobe-ap-builder.png`
- `/hero/hero-contact.webp`
- `/hero/testimonial-hero-image.png`
- `/section/quality-body.png`
- `/assets/services/adobe-commerce-development-support-engineering.jpg`
- `/assets/services/shopify-development-support-store-development.jpg`
- `/assets/services/adobe-commerce-development-support-app-builder.jpg`
- `/assets/services/technical-audit-service.jpg`
- `/assets/services/enterprise-systems-integration.jpg`
- `/assets/services/white-label-agency-partnerships.jpg`

## Icons

Use `lucide-react` icons for UI icons.

Do:

- Import only icons you need.
- Keep stroke widths consistent, usually around `2`, `2.1`, `2.2`, or `2.4`.
- Use icons inside buttons, badges, social links, stat cards, and service sections.
- Use semantic icon choices that fit ecommerce, engineering, contact, trust, process, and service topics.

Do not:

- Use emoji as UI icons.
- Hand-draw custom SVG icons when Lucide has a suitable icon.
- Mix icon styles in one section.

## Motion And Interaction

Motion should be subtle, modern, and useful.

Existing patterns:

- `ticker-track` animation in `app/globals.css`.
- `animate-fade-up` and delay classes.
- Card hover lift with `transform: translateY(...)`.
- Image hover scale for cards.
- Button hover background/translate changes.

Rules:

- Use motion to support focus and hierarchy, not as decoration.
- Keep transitions around `0.15s` to `0.35s`.
- Avoid layout shift during hover.
- Avoid animations that cause text overlap or make content hard to read.
- Pause moving ticker on hover when appropriate.

## Navbar Rules

`components/Navbar.tsx` is fixed at the top.

Important behavior:

- Background changes when scrolling.
- Desktop services dropdown opens on hover.
- The services trigger has a pseudo-element hover bridge so the dropdown does not disappear before the cursor reaches it.
- Mobile navigation opens with the menu button and closes on link click.

When editing navbar:

- Keep desktop and mobile behavior intact.
- Do not break the services dropdown hover bridge.
- Use `Link` for internal routes.
- Use the existing `logo.png` and keep it eager if above the fold.

## Footer Rules

`components/Footer.tsx` is shared across pages.

Important behavior:

- Uses `logo-light.svg`.
- Uses Lucide icons for social/contact links.
- Footer links map known pages to real routes.
- Unknown footer links currently fall back to `#`.

When editing footer:

- Use design tokens.
- Keep contrast strong on dark footer.
- Keep mobile grid collapse behavior.
- Avoid hydration-prone dynamic values unless the component is intentionally client-only.

## Contact Form Rules

`components/ContactForm.tsx` is reusable and API-ready.

Current capabilities:

- Supports compact and full layouts.
- Supports multi-select services dropdown with checkboxes.
- Supports default values and default selected services.
- Supports `apiEndpoint`, `apiMethod`, `requestHeaders`, and `buildPayload`.
- Shows success state and API response.
- Shows error state on API failure.
- Supports callbacks: `onSubmit`, `onSuccess`, and `onError`.

When connecting a real API:

- Do not rewrite the form from scratch.
- Pass `apiEndpoint` and `buildPayload` from the page or wrapper.
- Keep payload explicit and stable.
- Show user-readable success and error messages.
- Never hide API failures silently.

## Services Rules

The project has two service experiences:

- `/services`: listing page with large image cards.
- `/services/*`: detail pages using `ServiceLayout`.

Service listing page:

- Cards are image-first, two-column on desktop, one-column below `980px`.
- Each service object has `href`, `image`, `imageAlt`, `title`, `desc`, and `cta`.
- Images live in `public/assets/services` with clear service filenames.
- CTA style is peach/orange with a small orange square arrow.

Service detail pages:

- Use `components/services/ServiceLayout.tsx`.
- Hero right side contains compact `ContactForm`.
- `ServiceLayout` preselects the relevant service based on breadcrumb.
- Service body content should use helpers from `ServiceComponents.tsx`.
- Keep service-specific platform colors consistent:
  - Adobe: `#FF0000`
  - Magento/migration/brand orange: `#F46F25` or `var(--color-brand)`
  - Shopify: `#96BF48`
  - Audit/info: `#0284C7`
  - Integration: `#6366F1`

## Page-Specific Notes

Homepage:

- Composes shared sections in `app/page.tsx`.
- `HeroPlatformLogos` is the right-side logo/platform visual.
- `LogoTicker` uses client logos from `public/logos`.
- Do not replace homepage sections with marketing-only hero pages.

About page:

- Uses `/section/quality-body.png` in the quality section.
- Uses `FinalCTA` before footer.
- Maintain image dimensions correctly with `next/image`.

Contact page:

- Hero includes `/hero/hero-contact.webp` on the right.
- Uses the reusable `ContactForm`.
- Keep contact UI professional and Lucide-based.

Testimonials page:

- Built from Figma.
- Uses `/hero/testimonial-hero-image.png`.
- Uses `FinalCTA` before footer.

Insights/Blog page:

- Route is `/insights`.
- Hero right-side stats show:
  - `48` Articles published
  - `6` Topic categories
  - `4.2K` Monthly readers
- Desktop stat cards are staggered.
- Tablet around `768px` should keep cards in one row.
- Mobile should stack cards.
- The page has one `style jsx` block; merge new rules there.

Portfolio page:

- Keep it consistent with the rest of the Shoman brand.
- Use card grids and case-study style patterns that match existing components.

## Accessibility And UX

Always consider:

- Semantic headings in order.
- Meaningful `alt` text.
- Focusable controls for menus/forms/dropdowns.
- Buttons for actions, links for navigation.
- Adequate color contrast.
- No hover-only access to critical information.
- Mobile tap targets around `44px` where practical.
- Clear form labels and visible validation/errors.
- No text overflow or clipped buttons.

## Hydration And Runtime Safety

Avoid hydration mismatches.

Do not use these in server-rendered output unless intentionally handled:

- `Date.now()`
- `Math.random()`
- browser-only branches such as `typeof window !== "undefined"` in render output
- locale date formatting that differs between server and client
- changing external data without passing a stable snapshot
- invalid HTML nesting

If client-only behavior is required, use a client component and initialize state safely in effects.

## Production Readiness Checklist

Before saying a task is complete:

1. Read the relevant existing files.
2. Confirm whether related user edits already exist.
3. Keep the change scoped.
4. Reuse existing components/tokens/assets.
5. Check desktop, tablet, and mobile behavior in code.
6. Run lint for touched files or `npm run lint`.
7. Run `npm run build`.
8. If a dev server is needed, start or reuse one and verify the route returns `200`.
9. Check for image warnings, hydration warnings, TypeScript errors, and layout issues.
10. Report exactly what changed and what was verified.

## Git And File Safety

- The working tree may contain user changes.
- Never revert user changes unless explicitly asked.
- Never run destructive commands like `git reset --hard` or `git checkout --` to discard work.
- Do not delete files unless the task clearly requires it.
- Do not perform broad formatting across unrelated files.
- If unrelated files are dirty, ignore them.
- If a touched file contains user edits, preserve them and work around them carefully.

## Content And Copy Voice

Shoman Solutions copy should sound:

- Senior
- Direct
- Practical
- Technical but plain-English
- Confident without hype

Avoid:

- Vague marketing fluff
- Over-explaining UI inside the UI itself
- “AI-generated” sounding filler
- Unnecessary slogans

Useful positioning:

- UK-based ecommerce engineering.
- Adobe Commerce, Magento, Shopify, integrations, audits, migrations.
- Senior engineers, not generalists.
- No lock-in, no code ownership games.
- Practical, implementation-ready guidance.

## Prompt To Give Claude Or Any AI Agent

Use this prompt when handing the project to another AI agent:

```txt
You are working in the Shoman Solutions Next.js project.

Act as a senior Next.js 16 frontend engineer, UI/UX designer, and Figma-to-code specialist. Your priority is to keep the website production-ready, responsive, visually consistent, and maintainable.

Before coding, read CLAUDE.md, AGENTS.md, package.json, app/globals.css, and the relevant page/component files. This project uses Next.js 16.2.9 and React 19.2.4, so read relevant local Next docs in node_modules/next/dist/docs/ before making framework-sensitive changes.

Use the existing design system tokens in app/globals.css. Keep the Shoman visual language: white/light backgrounds, dark navy text, orange brand highlights, subtle borders, restrained shadows, Inter typography, clean technical agency feel, and Lucide icons. Do not introduce emoji icons, messy duplicate styles, incompatible palettes, or unrelated visual redesigns.

When implementing from Figma or screenshots, study the design first, map it to existing components and tokens, then code only the requested page or section. Split repeated UI into reusable components. Preserve existing layout and behavior outside the requested scope.

Use next/image correctly: width/height or fill with a stable relative parent, useful alt text, sizes for fill images, eager loading only for above-the-fold assets, and aspect-ratio-safe CSS.

For forms, reuse components/ContactForm.tsx. For service detail pages, use components/services/ServiceLayout.tsx and helpers from components/services/ServiceComponents.tsx. For repeated final CTAs, use components/FinalCTA.tsx.

Every change must be responsive across desktop, tablet, and mobile. Text must not overlap, overflow, or be clipped. Hover states must not cause layout shift. Mobile cannot depend on hover.

Do not revert user changes. Do not refactor unrelated files. Keep edits scoped and easy to review.

Before completion, run lint/build and verify the changed route when practical. Report the files changed and the checks performed.
```

## Non-Negotiables

- Do not create messy duplicate code.
- Do not ignore the existing theme.
- Do not hardcode colors where tokens exist.
- Do not use emoji icons.
- Do not break responsiveness.
- Do not break the navbar dropdown.
- Do not break reusable contact form behavior.
- Do not create multiple competing versions of the same component.
- Do not introduce hydration mismatches.
- Do not leave broken image paths.
- Do not claim production-ready without running checks.
