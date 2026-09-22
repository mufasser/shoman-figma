"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import HeroPlatformLogos from "./HeroPlatformLogos";
import "./site-shell.css";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks! We'll reach out to ${email} shortly.`);
    setEmail("");
  };

  return (
    <section className="home-hero">
      {/* Background decoration */}
      <div className="home-hero__glow home-hero__glow--right" />
      <div className="home-hero__glow home-hero__glow--left" />

      <div className="home-hero__container">
        <div className="home-hero__grid">

          {/* Left — Content */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="home-hero__badge">
              <span />
              <MapPin size={13} color="var(--color-brand)" strokeWidth={2.3} />
              <strong>
                UK-BASED · STARTUP TO ENTERPRISE
              </strong>
            </div>

            <h1 className="home-hero__title">
              Grow your business<br />
              with ecommerce<br />
              <span>
                that performs.
                <svg
                  className="home-hero__underline"
                  viewBox="0 0 300 8" fill="none" preserveAspectRatio="none">
                  <path d="M0 6 Q75 0 150 5 Q225 10 300 4" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </h1>

            <p className="home-hero__copy">
              From your first Shopify store to a complex Adobe Commerce platform —
              Shoman Solutions engineers ecommerce that converts, scales, and stays fast.
            </p>

            {/* Email CTA form */}
            <form className="home-hero__form" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
              />
              <button type="submit">
                Get Started <ArrowRight size={14} />
              </button>
            </form>

            {/* Trust signals */}
            <div className="home-hero__trust">
              {["No lock-in contracts", "UK management", "Code ownership"].map((item) => (
                <div key={item}>
                  <CheckCircle2 size={15} color="var(--color-brand)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Figma platform logo cluster */}
          <div className="animate-fade-up delay-3 home-hero__visual">
            <HeroPlatformLogos />
          </div>
        </div>
      </div>
    </section>
  );
}
