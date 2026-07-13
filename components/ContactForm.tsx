"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Loader2, X } from "lucide-react";

export type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  services: string[];
  stage: string;
  message: string;
};

type ContactFormProps = {
  compact?: boolean;
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  footerNote?: string;
  successTitle?: string;
  successMessage?: (values: ContactFormValues, response?: unknown) => string;
  backHref?: string;
  backLabel?: string;
  defaultValues?: Partial<Omit<ContactFormValues, "services">>;
  defaultServices?: string[];
  apiEndpoint?: string;
  apiMethod?: "POST" | "PUT" | "PATCH";
  requestHeaders?: HeadersInit;
  buildPayload?: (values: ContactFormValues) => unknown;
  onSubmit?: (values: ContactFormValues, payload: unknown) => void | Promise<unknown>;
  onSuccess?: (response: unknown, values: ContactFormValues) => void;
  onError?: (error: Error, values: ContactFormValues) => void;
};

const INPUT_STYLE: CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  border: "1.5px solid var(--color-border)",
  borderRadius: 8,
  fontSize: 14,
  color: "var(--color-ink)",
  background: "var(--color-white)",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
};

const LABEL_STYLE: CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "var(--color-ink)",
  marginBottom: 6,
};

const serviceOptions = [
  { label: "Adobe Commerce / Magento", color: "#FF0000" },
  { label: "Shopify Development", color: "#96BF48" },
  { label: "Migration", color: "#F46F25" },
  { label: "Technical Audit", color: "#0284C7" },
  { label: "Systems Integration", color: "#6366F1" },
  { label: "White-Label Partnership", color: "#0284C7" },
  { label: "Other", color: "#64748B" },
];

const emptyForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  stage: "",
  message: "",
};

function getResponseMessage(response: unknown) {
  if (!response || typeof response !== "object") return "";

  const data = response as Record<string, unknown>;
  for (const key of ["message", "detail", "status", "error"]) {
    const value = data[key];
    if (typeof value === "string" && value.trim()) return value;
  }

  return "";
}

function stringifyResponse(response: unknown) {
  if (!response) return "";
  if (typeof response === "string") return response;

  try {
    return JSON.stringify(response, null, 2);
  } catch {
    return String(response);
  }
}

async function parseApiResponse(response: Response) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

export default function ContactForm({
  compact = false,
  title = "Send us an enquiry",
  subtitle = "Tell us a little about your store, your goals and any challenges you're facing. We'll review everything before our first conversation so we can make the call as useful as possible.",
  submitLabel = "Let's Talk",
  footerNote = "Guaranteed response within one business day.",
  successTitle = "Enquiry received!",
  successMessage = (values, response) =>
    getResponseMessage(response) ||
    `Thanks ${values.name ? values.name.split(" ")[0] : ""}. We'll review your enquiry and come back to you within 24 hours with a direct response from a senior engineer.`,
  backHref = "/",
  backLabel = "Back to Home",
  defaultValues,
  defaultServices = [],
  apiEndpoint,
  apiMethod = "POST",
  requestHeaders,
  buildPayload = (values) => values,
  onSubmit,
  onSuccess,
  onError,
}: ContactFormProps) {
  const servicesId = useId();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>(defaultServices);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitResponse, setSubmitResponse] = useState<unknown>(null);
  const [form, setForm] = useState({ ...emptyForm, ...defaultValues });

  const values: ContactFormValues = {
    ...form,
    services: selectedServices,
  };

  const responseOutput = stringifyResponse(submitResponse);
  const serviceSummary =
    selectedServices.length === 0
      ? "Select services"
      : selectedServices.length === 1
        ? selectedServices[0]
        : `${selectedServices.length} services selected`;

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service) ? current.filter((item) => item !== service) : [...current, service],
    );
  };

  const sendToApi = async (payload: unknown) => {
    if (!apiEndpoint) return null;

    const headers = new Headers(requestHeaders);
    if (!headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }

    const response = await fetch(apiEndpoint, {
      method: apiMethod,
      headers,
      body: JSON.stringify(payload),
    });
    const data = await parseApiResponse(response);

    if (!response.ok) {
      throw new Error(getResponseMessage(data) || `Request failed with status ${response.status}`);
    }

    return data;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setSubmitting(true);

    const payload = buildPayload(values);

    try {
      const response = onSubmit ? await onSubmit(values, payload) : await sendToApi(payload);

      setSubmitResponse(response);
      setSubmitted(true);
      onSuccess?.(response, values);
    } catch (error) {
      const normalizedError = error instanceof Error ? error : new Error("Something went wrong. Please try again.");

      setSubmitError(normalizedError.message);
      onError?.(normalizedError, values);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{
        background: "var(--color-white)",
        border: "1.5px solid var(--color-border)",
        borderRadius: compact ? 16 : 20,
        padding: compact ? "36px 24px" : "64px 36px",
        textAlign: "center",
        boxShadow: compact ? "0 24px 70px rgba(15, 23, 42, 0.08)" : undefined,
      }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--color-success-soft)", border: "2px solid var(--color-success)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
          <Check size={28} color="var(--color-success)" strokeWidth={2.5} />
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: "var(--color-ink)", marginBottom: 12 }}>{successTitle}</h2>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--color-muted)", marginBottom: 28, maxWidth: 430, margin: "0 auto 28px" }}>
          {successMessage(values, submitResponse)}
        </p>
        {responseOutput && (
          <div style={{ textAlign: "left", background: "var(--color-bg-soft)", border: "1px solid var(--color-border)", borderRadius: 12, padding: 14, margin: "0 auto 24px", maxWidth: 460 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-subtle)", marginBottom: 8, textTransform: "uppercase" }}>API response</div>
            <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word", color: "var(--color-muted)", fontSize: 12, lineHeight: 1.5, maxHeight: 180, overflow: "auto" }}>
              {responseOutput}
            </pre>
          </div>
        )}
        <Link href={backHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-brand)", color: "var(--color-white)", padding: "12px 24px", borderRadius: 9, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
          {backLabel} <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  return (
    <div style={{
      background: "var(--color-white)",
      border: "1.5px solid var(--color-border)",
      borderRadius: compact ? 16 : 20,
      padding: compact ? "24px" : "40px 36px",
      boxShadow: compact ? "0 24px 70px rgba(15, 23, 42, 0.08)" : undefined,
    }}>
      <h2 style={{ fontSize: compact ? 18 : 20, fontWeight: 800, color: "var(--color-ink)", marginBottom: 6 }}>{title}</h2>
      <p style={{ fontSize: compact ? 12 : 13, color: "var(--color-muted)", marginBottom: compact ? 20 : 28, lineHeight: 1.65 }}>{subtitle}</p>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: compact ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 16 }} className="contact-form-two-col">
          <div>
            <label style={LABEL_STYLE}>Full Name *</label>
            <input
              required
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              style={INPUT_STYLE}
              onFocus={(event) => (event.currentTarget.style.borderColor = "var(--color-brand)")}
              onBlur={(event) => (event.currentTarget.style.borderColor = "var(--color-border)")}
            />
          </div>
          {!compact && (
            <div>
              <label style={LABEL_STYLE}>Company Name</label>
              <input
                name="company"
                type="text"
                placeholder="Your company"
                value={form.company}
                onChange={(event) => updateField("company", event.target.value)}
                style={INPUT_STYLE}
                onFocus={(event) => (event.currentTarget.style.borderColor = "var(--color-brand)")}
                onBlur={(event) => (event.currentTarget.style.borderColor = "var(--color-border)")}
              />
            </div>
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: compact ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 16 }} className="contact-form-two-col">
          <div>
            <label style={LABEL_STYLE}>Email Address *</label>
            <input
              required
              name="email"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              style={INPUT_STYLE}
              onFocus={(event) => (event.currentTarget.style.borderColor = "var(--color-brand)")}
              onBlur={(event) => (event.currentTarget.style.borderColor = "var(--color-border)")}
            />
          </div>
          {!compact && (
            <div>
              <label style={LABEL_STYLE}>Phone Number</label>
              <input
                name="phone"
                type="tel"
                placeholder="123-456-7890"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                style={INPUT_STYLE}
                onFocus={(event) => (event.currentTarget.style.borderColor = "var(--color-brand)")}
                onBlur={(event) => (event.currentTarget.style.borderColor = "var(--color-border)")}
              />
            </div>
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: compact ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 16 }} className="contact-form-two-col">
          <div ref={dropdownRef} style={{ position: "relative" }}>
            <label id={`${servicesId}-label`} style={LABEL_STYLE}>Services interested in</label>
            <button
              type="button"
              className="services-trigger"
              aria-haspopup="listbox"
              aria-expanded={servicesOpen}
              aria-labelledby={`${servicesId}-label ${servicesId}-summary`}
              onClick={() => setServicesOpen((current) => !current)}
            >
              <span id={`${servicesId}-summary`} className={selectedServices.length ? "services-summary is-selected" : "services-summary"}>
                {serviceSummary}
              </span>
              <ChevronDown size={16} className={servicesOpen ? "services-chevron is-open" : "services-chevron"} />
            </button>

            {selectedServices.length > 0 && (
              <div className="service-chips" aria-label="Selected services">
                {selectedServices.map((service) => (
                  <button key={service} type="button" className="service-chip" onClick={() => toggleService(service)}>
                    {service}
                    <X size={12} />
                  </button>
                ))}
              </div>
            )}

            {servicesOpen && (
              <div className="services-menu" role="listbox" aria-multiselectable="true" aria-labelledby={`${servicesId}-label`}>
                <div className="services-menu__top">
                  <span>{selectedServices.length} selected</span>
                  {selectedServices.length > 0 && (
                    <button type="button" onClick={() => setSelectedServices([])}>
                      Clear
                    </button>
                  )}
                </div>
                {serviceOptions.map((option) => {
                  const checked = selectedServices.includes(option.label);

                  return (
                    <label key={option.label} className={checked ? "service-option is-checked" : "service-option"} role="option" aria-selected={checked}>
                      <input
                        type="checkbox"
                        name="services"
                        value={option.label}
                        checked={checked}
                        onChange={() => toggleService(option.label)}
                      />
                      <span className="service-option__box" style={{ "--service-color": option.color } as CSSProperties}>
                        {checked && <Check size={13} />}
                      </span>
                      <span>{option.label}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

          {!compact && (
            <div>
              <label style={LABEL_STYLE}>Business Stage</label>
              <select
                name="stage"
                value={form.stage}
                onChange={(event) => updateField("stage", event.target.value)}
                style={{ ...INPUT_STYLE, color: form.stage ? "var(--color-ink)" : "var(--color-subtle)" }}
                onFocus={(event) => (event.currentTarget.style.borderColor = "var(--color-brand)")}
                onBlur={(event) => (event.currentTarget.style.borderColor = "var(--color-border)")}
              >
                <option value="">Select stage</option>
                <option>Startup (pre-launch)</option>
                <option>Growing (£0-£500K/yr)</option>
                <option>Established (£500K-£5M/yr)</option>
                <option>Enterprise (£5M+/yr)</option>
              </select>
            </div>
          )}
        </div>

        <div style={{ marginBottom: compact ? 18 : 24 }}>
          <label style={LABEL_STYLE}>Tell Us What You Need</label>
          <textarea
            name="message"
            placeholder="Describe your current situation and what you're trying to achieve. The more detail, the better our first call will be..."
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            rows={compact ? 3 : 4}
            style={{ ...INPUT_STYLE, resize: "vertical", minHeight: compact ? 86 : 100 }}
            onFocus={(event) => (event.currentTarget.style.borderColor = "var(--color-brand)")}
            onBlur={(event) => (event.currentTarget.style.borderColor = "var(--color-border)")}
          />
        </div>

        {submitError && (
          <p role="alert" style={{ background: "#fef2f2", border: "1px solid #fecaca", color: "#b91c1c", borderRadius: 10, padding: "10px 12px", fontSize: 13, lineHeight: 1.5, marginBottom: 14 }}>
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          style={{
            width: "100%",
            padding: "14px 0",
            borderRadius: 9,
            background: submitting ? "var(--color-brand-hover)" : "var(--color-brand)",
            color: "var(--color-white)",
            border: "none",
            fontSize: 15,
            fontWeight: 700,
            cursor: submitting ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            transition: "all 0.2s",
            opacity: submitting ? 0.78 : 1,
          }}
          onMouseEnter={(event) => {
            if (submitting) return;
            event.currentTarget.style.background = "var(--color-brand-hover)";
            event.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(event) => {
            if (submitting) return;
            event.currentTarget.style.background = "var(--color-brand)";
            event.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {submitting ? (
            <>
              <Loader2 size={16} className="submit-spinner" />
              Sending...
            </>
          ) : (
            <>
              {submitLabel} <ArrowRight size={16} />
            </>
          )}
        </button>
        <p style={{ textAlign: "center", fontSize: 12, color: "var(--color-subtle)", marginTop: 12, marginBottom: 0 }}>
          {apiEndpoint ? "Your enquiry will be sent securely to our team." : footerNote}
        </p>
      </form>

      <style jsx>{`
        .services-trigger {
          width: 100%;
          min-height: 47px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 14px;
          border: 1.5px solid var(--color-border);
          border-radius: 8px;
          background: var(--color-white);
          color: var(--color-ink);
          cursor: pointer;
          font-family: inherit;
          font-size: 14px;
          text-align: left;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .services-trigger:hover,
        .services-trigger:focus {
          border-color: var(--color-brand);
          box-shadow: 0 0 0 3px rgba(var(--color-brand-rgb), 0.08);
          outline: none;
        }

        .services-summary {
          color: var(--color-subtle);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .services-summary.is-selected {
          color: var(--color-ink);
          font-weight: 600;
        }

        .services-chevron {
          color: var(--color-muted);
          flex-shrink: 0;
          transition: transform 0.2s;
        }

        .services-chevron.is-open {
          transform: rotate(180deg);
        }

        .service-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 8px;
        }

        .service-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          max-width: 100%;
          padding: 5px 8px;
          border: 1px solid var(--color-border);
          border-radius: 999px;
          background: var(--color-bg-soft);
          color: var(--color-muted);
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
          font-family: inherit;
        }

        .services-menu {
          position: absolute;
          z-index: 30;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          padding: 8px;
          border: 1.5px solid var(--color-border);
          border-radius: 14px;
          background: var(--color-white);
          box-shadow: 0 18px 60px rgba(15, 23, 42, 0.16);
        }

        .services-menu__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4px 6px 8px;
          color: var(--color-subtle);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .services-menu__top button {
          border: 0;
          background: transparent;
          color: var(--color-brand);
          cursor: pointer;
          font: inherit;
          padding: 0;
        }

        .service-option {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          border-radius: 10px;
          color: var(--color-muted);
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          transition: background 0.16s, color 0.16s;
        }

        .service-option:hover,
        .service-option.is-checked {
          background: var(--color-bg-soft);
          color: var(--color-ink);
        }

        .service-option input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .service-option__box {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          border: 1.5px solid var(--color-border);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white);
          background: var(--color-white);
          flex-shrink: 0;
        }

        .service-option.is-checked .service-option__box {
          border-color: var(--service-color);
          background: var(--service-color);
        }

        .submit-spinner {
          animation: contactSpin 0.8s linear infinite;
        }

        @keyframes contactSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @media(max-width:600px) {
          .contact-form-two-col {
            grid-template-columns: 1fr !important;
          }

          .services-menu {
            position: static;
            margin-top: 8px;
          }
        }
      `}</style>
    </div>
  );
}
