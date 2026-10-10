"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ClientLogo } from "@/app/graphql/content";

export default function LogoTicker({ initialLogos = [] }: { initialLogos?: ClientLogo[] }) {
  const [logos, setLogos] = useState(initialLogos);

  useEffect(() => {
    if (logos.length) return;

    const controller = new AbortController();
    async function loadLogos() {
      try {
        const response = await fetch("/api/clients", { signal: controller.signal });
        if (!response.ok) return;
        const data = await response.json() as { clients?: ClientLogo[] };
        if (!controller.signal.aborted && Array.isArray(data.clients)) setLogos(data.clients);
      } catch {
        // Keep the ticker's dimensions stable if the CMS is unavailable.
      }
    }

    loadLogos();
    return () => controller.abort();
  }, [logos.length]);

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
                  key={`${groupIndex}-${logo.id}`}
                  src={logo.src}
                  alt={groupIndex === 0 ? logo.name : ""}
                  width={166}
                  height={64}
                  sizes="167px"
                  loading={groupIndex === 0 ? "eager" : "lazy"}
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
