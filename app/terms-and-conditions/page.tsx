import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Shoman Solutions",
  description: "Terms for using the Shoman Solutions website and contacting our team.",
};

const sections: LegalSection[] = [
  {
    id: "about-these-terms",
    title: "About these terms",
    content: <p>These terms apply to your use of the Shoman Solutions website. The site is operated by Shoman Solutions Ltd. By using it, you agree to use it lawfully and not interfere with its operation or security. If you do not agree, please do not use the site.</p>,
  },
  {
    id: "website-content",
    title: "Website content",
    content: <><p>We provide this site to explain our ecommerce engineering services and share general information. We aim to keep it accurate, but content may change and is not a guarantee of a particular result, delivery date, or price.</p><p>Examples, case studies, and articles are for general information. You should assess whether any technical approach is suitable for your own systems before relying on it.</p></>,
  },
  {
    id: "services-and-proposals",
    title: "Services and proposals",
    content: <><p>Submitting an enquiry or booking a call does not create a client relationship or a contract for services. Any paid work will be governed by a separate written proposal or agreement accepted by both parties. If that agreement conflicts with this website page, the separate agreement controls the services.</p><p>Prices or timeframes shown on the site are indicative unless confirmed in a written proposal.</p></>,
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: <p>Unless stated otherwise, the text, design, branding, and original materials on this website belong to Shoman Solutions Ltd or are used with permission. You may view and share links to the site for personal or business evaluation, but may not reproduce or republish its content commercially without permission. Ownership of client deliverables is addressed in the relevant services agreement.</p>,
  },
  {
    id: "external-links",
    title: "External websites",
    content: <p>Some links take you to services we do not control, such as Calendly or LinkedIn. Their own terms and privacy notices apply when you visit them. We are not responsible for their content or availability.</p>,
  },
  {
    id: "responsibility",
    title: "Availability and responsibility",
    content: <p>We may update, suspend, or remove parts of this website. We do not promise uninterrupted access. Nothing in these terms excludes or limits any responsibility that cannot legally be excluded or limits your statutory rights. Any dispute about a paid service is governed by the agreement for that service.</p>,
  },
  {
    id: "contact",
    title: "Contact and changes",
    content: <p>Questions about these terms can be sent to <a href="mailto:hello@shomansolutions.com">hello@shomansolutions.com</a>. We may update this page as our website changes; the date above shows the current version. For information about personal data and cookies, read our <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/cookies">Cookies Policy</Link>.</p>,
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" description="The terms for using our website and getting in touch about our services." sections={sections} />;
}
