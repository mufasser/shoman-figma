"use client";

import Image from "next/image";

const logos = [
  { name: "Swyftch", src: "/logos/swyftch.png", width: 165, height: 63 },
  { name: "Bathshark", src: "/logos/bathshark.png", width: 166, height: 63 },
  { name: "Clintons", src: "/logos/clintons.png", width: 165, height: 63 },
  { name: "Black Country Metalworks", src: "/logos/black-country-metalworks.png", width: 167, height: 64 },
  { name: "Tower Health", src: "/logos/tower-health.png", width: 166, height: 64 },
];

export default function LogoTicker() {
  return (
    <section id="client-logos" className="figma-logo-ticker" aria-label="Trusted client logos">
      <div className="figma-logo-ticker__viewport">
        <div className="figma-logo-ticker__track">
          {[0, 1].map((groupIndex) => (
            <div
              className="figma-logo-ticker__group"
              key={groupIndex}
              aria-hidden={groupIndex === 1}
            >
              {logos.map((logo) => (
                <Image
                  key={`${groupIndex}-${logo.name}`}
                  src={logo.src}
                  alt={groupIndex === 0 ? logo.name : ""}
                  width={logo.width}
                  height={logo.height}
                  className="figma-logo-ticker__logo"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .figma-logo-ticker {
          height: 93px;
          background: var(--color-ink);
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .figma-logo-ticker__viewport {
          width: min(100%, 1100px);
          margin: 0 auto;
          overflow: hidden;
        }

        .figma-logo-ticker__track {
          display: flex;
          width: max-content;
          animation: ticker 30s linear infinite;
        }

        .figma-logo-ticker__track:hover {
          animation-play-state: paused;
        }

        .figma-logo-ticker__group {
          min-width: 1100px;
          padding: 0 14px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 60px;
          flex: 0 0 auto;
        }

        :global(.figma-logo-ticker__logo) {
          display: block;
          width: clamp(128px, 30vw, 167px);
          height: auto;
          object-fit: contain;
          flex: 0 0 auto;
        }

        @media (max-width: 900px) {
          .figma-logo-ticker {
            height: 82px;
          }

          .figma-logo-ticker__viewport {
            width: 100%;
          }

          .figma-logo-ticker__group {
            min-width: auto;
            padding: 0 24px;
            gap: 42px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .figma-logo-ticker__track {
            animation-duration: 1ms;
            animation-iteration-count: 1;
          }
        }
      `}</style>
    </section>
  );
}
