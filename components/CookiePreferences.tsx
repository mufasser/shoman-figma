"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import { X } from "lucide-react";
import "./cookie-preferences.css";

const STORAGE_KEY = "shoman-cookie-preferences-v1";
const OPEN_EVENT = "shoman:open-cookie-settings";
const GA_ID = "G-XSJH59ZVSR";

type CookieChoice = {
  version: 1;
  analytics: boolean;
  savedAt: string;
};

function clearAnalyticsCookies() {
  const domains = ["", location.hostname, ".shomansolutions.com"];
  for (const part of document.cookie.split(";")) {
    const name = part.split("=")[0]?.trim();
    if (!name || !/^(_ga($|_)|_gid$|_gat($|_))/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/${domain ? `; Domain=${domain}` : ""}`;
    }
  }
}

function updateAnalytics(enabled: boolean) {
  const analyticsWindow = window as Window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = !enabled;
  const consent = {
    analytics_storage: enabled ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  };

  if (!analyticsWindow.gtag) {
    analyticsWindow.dataLayer ??= [];
    analyticsWindow.gtag = (...args: unknown[]) => {
      analyticsWindow.dataLayer?.push(args);
    };
    analyticsWindow.gtag("consent", "default", consent);
  } else {
    analyticsWindow.gtag("consent", "update", consent);
    if (enabled && document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
      analyticsWindow.gtag("config", GA_ID);
    }
  }

  if (!enabled) clearAnalyticsCookies();
}

export function CookieSettingsButton({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
    >
      {children}
    </button>
  );
}

export default function CookiePreferences() {
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<CookieChoice | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analyticsDraft, setAnalyticsDraft] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let analyticsEnabled = false;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed: unknown = stored ? JSON.parse(stored) : null;
      if (parsed && typeof parsed === "object") {
        const saved = parsed as Partial<CookieChoice>;
        if (saved.version === 1 && typeof saved.analytics === "boolean") {
          setChoice(saved as CookieChoice);
          setAnalyticsDraft(saved.analytics);
          analyticsEnabled = saved.analytics;
        }
      }
    } catch {
      // Storage may be unavailable in private browsing; the choice still works for this visit.
    }
    updateAnalytics(analyticsEnabled);
    setReady(true);
  }, []);

  useEffect(() => {
    const openSettings = () => {
      setAnalyticsDraft(choice?.analytics ?? false);
      setSettingsOpen(true);
    };
    window.addEventListener(OPEN_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_EVENT, openSettings);
  }, [choice]);

  useEffect(() => {
    if (!settingsOpen) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSettingsOpen(false);
      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not(:disabled), input:not(:disabled), a[href]'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [settingsOpen]);

  const saveChoice = (analytics: boolean) => {
    const next: CookieChoice = { version: 1, analytics, savedAt: new Date().toISOString() };
    updateAnalytics(analytics);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // The current page still respects the choice when persistent storage is blocked.
    }
    setChoice(next);
    setSettingsOpen(false);
  };

  return (
    <>
      {ready && !choice && !settingsOpen && (
        <div className="cookie-banner" role="region" aria-label="Cookie choices">
          <div className="cookie-banner__copy">
            <h2>Your cookie choices</h2>
            <p>We use necessary storage to remember your choice. With your permission, we also use Google Analytics to understand visits. Read our <Link href="/cookies">Cookies Policy</Link>.</p>
          </div>
          <div className="cookie-banner__actions">
            <button type="button" className="cookie-button cookie-button--outline" onClick={() => saveChoice(false)}>Reject optional</button>
            <button type="button" className="cookie-button cookie-button--primary" onClick={() => saveChoice(true)}>Accept all</button>
            <button type="button" className="cookie-button cookie-button--outline" onClick={() => setSettingsOpen(true)}>Choose cookies</button>
          </div>
        </div>
      )}

      {settingsOpen && (
        <div className="cookie-dialog-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSettingsOpen(false);
        }}>
          <div ref={dialogRef} className="cookie-dialog" role="dialog" aria-modal="true" aria-labelledby="cookie-dialog-title" aria-describedby="cookie-dialog-description">
            <div className="cookie-dialog__header">
              <h2 id="cookie-dialog-title">Cookie settings</h2>
              <button ref={closeButtonRef} type="button" aria-label="Close cookie settings" onClick={() => setSettingsOpen(false)}><X size={20} /></button>
            </div>
            <p id="cookie-dialog-description">Choose whether we may use optional analytics. Necessary storage keeps your selection and cannot be switched off here.</p>
            <div className="cookie-dialog__options">
              <label className="cookie-option">
                <span><strong>Necessary</strong><small>Remembers your cookie choice and keeps the site working.</small></span>
                <input type="checkbox" checked disabled aria-label="Necessary storage is always on" />
              </label>
              <label className="cookie-option">
                <span><strong>Analytics</strong><small>Allows Google Analytics to measure website visits.</small></span>
                <input type="checkbox" checked={analyticsDraft} onChange={(event) => setAnalyticsDraft(event.target.checked)} />
              </label>
            </div>
            <div className="cookie-dialog__actions">
              <button type="button" className="cookie-button cookie-button--outline" onClick={() => saveChoice(false)}>Reject optional</button>
              <button type="button" className="cookie-button cookie-button--primary" onClick={() => saveChoice(analyticsDraft)}>Save choices</button>
            </div>
            <p className="cookie-dialog__footnote">You can change your choice later from the footer. <Link href="/privacy-policy">Privacy Policy</Link></p>
          </div>
        </div>
      )}

      {ready && choice?.analytics && <GoogleAnalytics gaId={GA_ID} />}
    </>
  );
}
