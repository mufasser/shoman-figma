"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Loader2, X } from "lucide-react";
import "./contact-form.css";

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
  showResponseDetails?: boolean;
  buildPayload?: (values: ContactFormValues) => unknown;
  onSubmit?: (values: ContactFormValues, payload: unknown) => void | Promise<unknown>;
  onSuccess?: (response: unknown, values: ContactFormValues) => void;
  onError?: (error: Error, values: ContactFormValues) => void;
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
  apiEndpoint = "/api/contact",
  apiMethod = "POST",
  requestHeaders,
  showResponseDetails = false,
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
      <div className={`contact-form-card contact-form-success${compact ? " is-compact" : ""}`}>
        <div className="contact-form-success__icon">
          <Check size={28} color="var(--color-success)" strokeWidth={2.5} />
        </div>
        <h2 className="contact-form-success__title">{successTitle}</h2>
        <p className="contact-form-success__message">
          {successMessage(values, submitResponse)}
        </p>
        {showResponseDetails && responseOutput && (
          <div className="contact-form-response">
            <div className="contact-form-response__label">API response</div>
            <pre className="contact-form-response__output">
              {responseOutput}
            </pre>
          </div>
        )}
        <Link href={backHref} className="contact-form-back">
          {backLabel} <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  return (
    <div className={`contact-form-card${compact ? " is-compact" : ""}`}>
      <h2 className="contact-form-card__title">{title}</h2>
      <p className="contact-form-card__subtitle">{subtitle}</p>

      <form onSubmit={handleSubmit}>
        <div className="contact-form-two-col">
          <div>
            <label className="contact-form-label">Full Name *</label>
            <input
              required
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              className="contact-form-control"
            />
          </div>
          {!compact && (
            <div>
              <label className="contact-form-label">Company Name</label>
              <input
                name="company"
                type="text"
                placeholder="Your company"
                value={form.company}
                onChange={(event) => updateField("company", event.target.value)}
                className="contact-form-control"
              />
            </div>
          )}
        </div>

        <div className="contact-form-two-col">
          <div>
            <label className="contact-form-label">Email Address *</label>
            <input
              required
              name="email"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="contact-form-control"
            />
          </div>
          {!compact && (
            <div>
              <label className="contact-form-label">Phone Number</label>
              <input
                name="phone"
                type="tel"
                placeholder="123-456-7890"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="contact-form-control"
              />
            </div>
          )}
        </div>

        <div className="contact-form-two-col">
          <div ref={dropdownRef} className="contact-form-services">
            <label id={`${servicesId}-label`} className="contact-form-label">Services interested in</label>
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
              <label className="contact-form-label">Business Stage</label>
              <select
                name="stage"
                value={form.stage}
                onChange={(event) => updateField("stage", event.target.value)}
                className={`contact-form-control${form.stage ? "" : " is-placeholder"}`}
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

        <div className="contact-form-message">
          <label className="contact-form-label">Tell Us What You Need</label>
          <textarea
            name="message"
            placeholder="Describe your current situation and what you're trying to achieve. The more detail, the better our first call will be..."
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            rows={compact ? 3 : 4}
            className="contact-form-control contact-form-textarea"
          />
        </div>

        {submitError && (
          <p role="alert" className="contact-form-error">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="contact-form-submit"
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
        <p className="contact-form-note">
          {apiEndpoint ? "Your enquiry will be sent securely to our team." : footerNote}
        </p>
      </form>

    </div>
  );
}
