import { img } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { SkyButton } from "@/components/SkyButton";

export function BrandBreak() {
  return (
    <section
      aria-label="Sky Brothers"
      data-section="brand-break"
      data-blue-section
      className="relative bg-sky-primary text-white overflow-hidden will-change-transform"
    >
      {/* Top decorative animated wave divider */}
      <div className="absolute -top-2 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className="relative block w-full h-[45px] md:h-[65px] text-white"
        >
          {/* Layer 1: Translucent secondary wave (undulates with offset timing) */}
          <path
            d="M0,-2 C360,52 700,8 1020,44 C1240,62 1380,16 1440,28 L1440,-2 L0,-2 Z"
            fill="currentColor"
            opacity="0.45"
            className="blue-wave-layer-1"
          />

          {/* Layer 2: Main crisp white wave divider */}
          <path
            d="M0,-2 C300,42 620,6 940,36 C1180,54 1340,14 1440,24 L1440,-2 L0,-2 Z"
            fill="currentColor"
            className="blue-wave-layer-2"
          />
        </svg>
      </div>

      <div
        data-animate="blue-content-group"
        className="shell grid items-center gap-10 pt-24 pb-20 md:grid-cols-[auto_1fr] md:gap-16 md:pt-32 md:pb-28"
      >
        {/* ── Brand Emblem / Circular Logo ── */}
        <div data-animate="blue-logo-wrap" className="flex justify-center">
          <div
            data-animate="blue-logo"
            className="relative overflow-hidden rounded-full border-4 border-white/30 shadow-2xl will-change-transform"
          >
            <img
              src={img.logoCyan}
              alt="Logotipo oficial de Sky Brothers"
              loading="lazy"
              className="w-[180px] h-[180px] object-cover md:w-[220px] md:h-[220px]"
            />
          </div>
        </div>

        {/* ── Text Content ── */}
        <div data-animate="blue-text-wrap">
          <p
            data-animate="blue-subheading"
            className="hand text-[1.25rem] tracking-wide text-sky-cyan-soft"
          >
            limpieza · lavado · desinfección
          </p>

          <h2 className="h2-display mt-3 max-w-[22ch]">
            <span className="line-mask">
              <span data-animate="blue-line" className="block">
                Tu casa se siente diferente
              </span>
            </span>
            <span className="line-mask">
              <span data-animate="blue-line" className="block">
                cuando tus muebles
              </span>
            </span>
            <span className="line-mask">
              <span data-animate="blue-line" className="block text-sky-cyan-soft">
                están limpios.
              </span>
            </span>
          </h2>

          <div data-animate="blue-cta-row" className="mt-8 flex flex-wrap items-center gap-6">
            <SkyButton href={createWhatsAppLink()} external variant="onBlue">
              Quiero cotizar mi servicio
            </SkyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
