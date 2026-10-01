import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import { CookieSettingsButton } from "@/components/CookiePreferences";

export const metadata: Metadata = {
  title: "Cookies Policy | Shoman Solutions",
  description: "Cookie categories and preferences for the Shoman Solutions website.",
};

const sections: LegalSection[] = [
  {
    id: "what-we-use",
    title: "What this site uses",
    content: <p>Cookies and similar browser storage can remember settings or help measure how a site is used. This website uses storage for your cookie choice and, only if you allow it, Google Analytics. We do not currently use advertising cookies through this website.</p>,
  },
  {
    id: "necessary",
    title: "Necessary storage",
    content: <p>We save your choice under <strong>shoman-cookie-preferences-v1</strong> in your browser&apos;s local storage. This lets us remember your decision so we do not ask on every visit. It does not track your activity across other sites. Necessary storage is always active.</p>,
  },
  {
    id: "analytics",
    title: "Optional analytics",
    content: <p>If you accept analytics, we load Google Analytics 4 to understand visits and improve the website. It may set first-party cookies such as <strong>_ga</strong> and <strong>_ga_*</strong> to distinguish visits. We do not load Google Analytics before you opt in. If you later turn analytics off, we stop sending new analytics data and attempt to remove its cookies from this site. Google&apos;s <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a> explains its processing.</p>,
  },
  {
    id: "your-choices",
    title: "Your choices",
    content: <><p>You can accept all optional cookies, reject them, or choose analytics separately. Your saved choice remains in this browser until you change it or clear its storage. If our cookie uses materially change, we may ask you to choose again.</p><p><CookieSettingsButton className="cookie-settings-page-button">Open cookie settings</CookieSettingsButton></p></>,
  },
  {
    id: "external-sites",
    title: "External sites",
    content: <p>Links to Calendly, LinkedIn, and other external websites open services with their own cookie practices. Read their notices before using those services. For more about information you submit to us, see our <Link href="/privacy-policy">Privacy Policy</Link>.</p>,
  },
];

export default function CookiesPage() {
  return <LegalPage title="Cookies Policy" description="What browser storage we use and how to control optional analytics." sections={sections} />;
}
