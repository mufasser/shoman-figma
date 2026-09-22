"use client";

import { useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import "./email-capture-form.css";

type EmailCaptureFormProps = {
  variant: "hero" | "banner";
};

export default function EmailCaptureForm({ variant }: EmailCaptureFormProps) {
  const inputId = useId();
  const submittingRef = useRef(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;

    submittingRef.current = true;
    setSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/email-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "We couldn't save your email address. Please try again.");
      }

      setEmail("");
      setFeedback({ type: "success", message: result.message || "Thanks! We'll be in touch shortly." });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error instanceof Error ? error.message : "We couldn't save your email address. Please try again.",
      });
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  return (
    <div className={`email-capture email-capture--${variant}`}>
      <form
        className={variant === "hero" ? "home-hero__form" : "email-capture__banner-form"}
        onSubmit={handleSubmit}
        aria-busy={submitting}
      >
        <input
          id={inputId}
          type="email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (feedback) setFeedback(null);
          }}
          placeholder="Enter your email address"
          aria-label="Email address"
          autoComplete="email"
          maxLength={254}
          required
          disabled={submitting}
        />
        <button type="submit" disabled={submitting}>
          {submitting ? (
            <>Sending <Loader2 size={14} className="email-capture__spinner" aria-hidden="true" /></>
          ) : (
            <>Get Started <ArrowRight size={14} aria-hidden="true" /></>
          )}
        </button>
      </form>
      {feedback && (
        <p
          className={`email-capture__feedback email-capture__feedback--${feedback.type}`}
          role={feedback.type === "error" ? "alert" : "status"}
        >
          {feedback.message}
        </p>
      )}
    </div>
  );
}
