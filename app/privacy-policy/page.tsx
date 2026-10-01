import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Shoman Solutions",
  description: "How Shoman Solutions handles information submitted through this website.",
};

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    content: <p>Shoman Solutions Ltd is responsible for personal information collected through this website. For privacy questions or requests, email <a href="mailto:hello@shomansolutions.com">hello@shomansolutions.com</a>.</p>,
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: <><p>When you submit an enquiry, we receive the details you enter: your name, company, email address, phone number if supplied, service interests, business stage, and message. Our email-only forms collect the email address you provide. We also receive ordinary technical information needed to deliver and secure the website, such as request and error logs.</p><p>If you opt in to analytics cookies, Google Analytics may collect information about how you use the site, including pages visited and device or browser information. Analytics is not loaded by this site until you give that choice.</p></>,
  },
  {
    id: "how-we-use-information",
    title: "How we use your information",
    content: <ul><li>To read and respond to enquiries and discuss potential work with you.</li><li>To operate, maintain, and protect the website and its forms.</li><li>To understand website usage through Google Analytics, but only if you choose analytics cookies.</li></ul>,
  },
  {
    id: "legal-bases",
    title: "Our legal bases",
    content: <p>We use enquiry information to take steps you request before a potential contract and, where appropriate, for our legitimate interest in responding to business enquiries. We use operational logs for our legitimate interest in keeping the site secure and working. We rely on your choice for optional analytics. You can change that choice at any time through <Link href="/cookies">Cookie settings</Link>.</p>,
  },
  {
    id: "sharing",
    title: "Who receives information",
    content: <><p>Enquiries and email-only submissions are sent to our WordPress and Gravity Forms system at admin.shomansolutions.com so our team can review them. Our website hosting and technical service providers may process information as needed to run the site. If you enable analytics, Google receives analytics information under its own service terms and privacy practices.</p><p>Calendly and LinkedIn are external sites. We do not send them your form submission merely because you visit our site, but they may collect information if you follow their links.</p></>,
  },
  {
    id: "retention-and-transfers",
    title: "Retention and international transfers",
    content: <p>We keep enquiry records only while needed to respond, manage a possible or ongoing business relationship, and meet applicable record-keeping obligations. Operational logs are kept only as needed for security and troubleshooting. Providers such as Google may process information outside the UK; their applicable safeguards and terms govern those transfers. Contact us for details about a particular record or provider.</p>,
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: <p>Depending on the circumstances, you may ask to access, correct, erase, restrict, or receive your personal information, or object to some uses of it. You can also withdraw optional analytics consent without affecting earlier processing. Send requests to <a href="mailto:hello@shomansolutions.com">hello@shomansolutions.com</a>. You can raise a concern with the UK Information Commissioner&apos;s Office at <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>,
  },
  {
    id: "cookies-and-updates",
    title: "Cookies and updates",
    content: <p>Our <Link href="/cookies">Cookies Policy</Link> explains the storage and analytics choices available on this site. We may update this notice when our practices change; the date above shows when this version was published.</p>,
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" description="A plain-language explanation of what we collect, why we use it, and how you can contact us about your data." sections={sections} />;
}
