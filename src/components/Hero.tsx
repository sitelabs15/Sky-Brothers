import { ArrowDown, Check } from "lucide-react";
import { img } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { SkyButton } from "@/components/SkyButton";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

import { HeroSlider } from "@/components/HeroSlider";

export function Hero() {
  return (
    <section
      id="inicio"
      data-section="hero"
      data-animate="hero"
      className="relative overflow-hidden pt-[92px] pb-4 md:pt-[124px]"
    >
      {/* onda de agua decorativa con 4 capas armónicas */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 420"
        className="pointer-events-none absolute -top-10 right-0 h-[420px] w-[120%] text-sky-cyan/45"
        fill="none"
      >
        <path
          d="M-40 300C160 210 320 340 520 250S900 60 1120 150s280 40 400 -10"
          stroke="currentColor"
          strokeWidth="2.2"
          className="flow-line"
          opacity="0.65"
        />
        <path
          d="M-40 360C180 280 340 400 560 310S940 130 1160 210s260 60 380 20"
          stroke="currentColor"
          strokeWidth="1.5"
          className="flow-line-slow"
          opacity="0.5"
        />
        <path
          d="M-40 230C200 140 380 270 600 170S980 10 1200 80s240 70 360 30"
          stroke="currentColor"
          strokeWidth="2.0"
          className="flow-line-fast"
          opacity="0.4"
        />
        <path
          d="M-40 410C220 330 400 460 640 370S1020 190 1240 270s220 30 320 -10"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="6 10"
          opacity="0.3"
        />
      </svg>

      <div className="shell relative grid items-center gap-10 md:gap-14 lg:grid-cols-[52fr_48fr]">
        <div data-hero="text">
          <div className="hero-water-float">
            <p className="eyebrow enter-rise" style={{ ["--reveal-delay" as string]: "120ms" }}>
              Servicio profesional a domicilio
            </p>
            <h1 className="h1-display mt-3">
              <span className="enter-rise block" style={{ ["--reveal-delay" as string]: "220ms" }}>
                Tu sofá puede volver
              </span>
              <span
                className="enter-rise block text-sky-primary"
                style={{ ["--reveal-delay" as string]: "330ms" }}
              >
                a sentirse limpio.
              </span>
            </h1>
            <p
              className="enter-rise mt-6 max-w-[620px] text-[1.06rem] leading-[1.65] text-sky-muted md:text-[1.14rem]"
              style={{ ["--reveal-delay" as string]: "430ms" }}
            >
              Lavado, limpieza y desinfección profunda de muebles, colchones, tapicerías e
              interiores de auto en Bahías de Huatulco y zonas cercanas.
            </p>
            <div
              className="enter-rise mt-8 flex flex-wrap gap-3"
              style={{ ["--reveal-delay" as string]: "520ms" }}
            >
              <SkyButton
                href={createWhatsAppLink()}
                external
                ariaLabel="Agendar por WhatsApp con Sky Brothers"
              >
                <WhatsAppIcon />
                Agendar por WhatsApp
              </SkyButton>
              <SkyButton href="#resultados" variant="secondary">
                Ver resultados
                <ArrowDown strokeWidth={1.8} className="h-[18px] w-[18px]" />
              </SkyButton>
            </div>
            <ul
              className="enter-rise mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-sky-muted"
              style={{ ["--reveal-delay" as string]: "620ms" }}
            >
              {["Servicio a domicilio", "Inyección y extracción profesional"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check strokeWidth={2} className="h-4 w-4 text-sky-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative" data-hero="visual">
          <div
            className="clip-reveal clip-open relative"
            style={{ ["--reveal-delay" as string]: "380ms" }}
          >
            <HeroSlider />
          </div>

          <span
            className="hand enter-tilt absolute -top-4 right-4 z-10 rounded-[14px] border border-sky-line bg-white px-4 py-2 text-lg text-sky-primary shadow-[0_10px_30px_-24px_rgba(16,19,21,0.6)] md:right-8"
            style={{ ["--reveal-delay" as string]: "760ms" }}
          >
            Tu sofá lo agradecerá
          </span>
        </div>
      </div>
    </section>
  );
}
