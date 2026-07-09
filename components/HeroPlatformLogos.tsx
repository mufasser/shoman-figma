"use client";

import Image from "next/image";

const platformLogos = [
  {
    name: "Adobe Commerce",
    src: "/hero/adobe-commerce.png",
    width: 197,
    height: 60,
    className: "platform-logo-card--adobe",
  },
  {
    name: "Magento",
    src: "/hero/magento.png",
    width: 197,
    height: 54,
    className: "platform-logo-card--magento",
  },
  {
    name: "Shopify",
    src: "/hero/shopify.png",
    width: 189,
    height: 59,
    className: "platform-logo-card--shopify",
  },
  {
    name: "Adobe Commerce App Builder",
    src: "/hero/adobe-ap-builder.png",
    width: 202,
    height: 52,
    className: "platform-logo-card--app-builder",
  },
];

export default function HeroPlatformLogos() {
  return (
    <div className="hero-platform-logos" aria-label="Supported ecommerce platforms">
      {platformLogos.map((logo) => (
        <div className={`platform-logo-card ${logo.className}`} key={logo.name}>
          <Image
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            loading="eager"
            className="platform-logo-card__image"
          />
        </div>
      ))}

      <style jsx>{`
        .hero-platform-logos {
          position: relative;
          width: min(100%, 435px);
          aspect-ratio: 435 / 366;
          margin: 0 auto;
          animation: platformStageDrift 12s ease-in-out infinite;
          transform-origin: center;
        }

        .platform-logo-card {
          position: absolute;
          width: 48.28%;
          height: 25.94%;
          border-radius: 6px;
          background: var(--color-white);
          border: 1px solid rgba(var(--color-ink-rgb), 0.08);
          box-shadow:
            0 12px 28px rgba(var(--color-ink-rgb), 0.08),
            0 2px 8px rgba(var(--color-ink-rgb), 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px 8px;
          box-sizing: border-box;
          will-change: transform, box-shadow;
          animation: platformCardFloat var(--float-duration, 7s) ease-in-out infinite;
          animation-delay: var(--float-delay, 0s);
          transition:
            box-shadow 0.25s ease,
            border-color 0.25s ease,
            filter 0.25s ease;
        }

        :global(.platform-logo-card__image) {
          /* width intentionally follows the image intrinsic size so logos stay larger. */
          height: auto;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
        }

        .platform-logo-card--adobe {
          left: 9.2%;
          top: 0;
          --float-x: 8px;
          --float-y: -10px;
          --float-rotate: -0.8deg;
          --float-duration: 7.5s;
        }

        .platform-logo-card--magento {
          right: 0;
          top: 28.2%;
          --float-x: -9px;
          --float-y: 8px;
          --float-rotate: 0.9deg;
          --float-duration: 8.2s;
          --float-delay: -1.4s;
        }

        .platform-logo-card--shopify {
          left: 0;
          top: 42.86%;
          --float-x: 7px;
          --float-y: 9px;
          --float-rotate: 1deg;
          --float-duration: 7.8s;
          --float-delay: -2.2s;
        }

        .platform-logo-card--app-builder {
          left: 39.08%;
          bottom: 3%;
          --float-x: -7px;
          --float-y: -8px;
          --float-rotate: -1deg;
          --float-duration: 8.6s;
          --float-delay: -3s;
        }

        .platform-logo-card:hover {
          animation-play-state: paused;
          border-color: rgba(var(--color-brand-rgb), 0.24);
          box-shadow:
            0 18px 38px rgba(var(--color-ink-rgb), 0.12),
            0 5px 14px rgba(var(--color-brand-rgb), 0.1);
          filter: saturate(1.04);
        }

        @keyframes platformStageDrift {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -6px, 0);
          }
        }

        @keyframes platformCardFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(var(--float-x), var(--float-y), 0) rotate(var(--float-rotate));
          }
        }

        @media (max-width: 1024px) {
          .hero-platform-logos {
            width: min(100%, 390px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-platform-logos,
          .platform-logo-card {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
