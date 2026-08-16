import { MapPin } from "lucide-react";
import { img, zones } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { SkyButton } from "@/components/SkyButton";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { OaxacaMap } from "@/components/OaxacaMap";

export function Coverage() {
  return (
    <section
      id="cobertura"
      data-section="coverage"
      data-home-service
      className="relative scroll-mt-24 py-24 md:py-32 overflow-hidden"
    >
      {/* Ondas de agua decorativas en fondo */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 360"
        className="pointer-events-none absolute -top-10 right-0 h-[360px] w-[120%] text-sky-cyan/30"
        fill="none"
      >
        <path
          d="M-40 220C220 130 420 290 700 180S1080 50 1360 140s240 60 360 20"
          stroke="currentColor"
          strokeWidth="1.8"
          className="flow-line"
          opacity="0.6"
        />
        <path
          d="M-40 280C240 190 440 350 720 240S1100 110 1380 200s220 40 340 0"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.35"
        />
      </svg>

      <div className="shell relative grid gap-12 lg:grid-cols-[46fr_54fr] lg:gap-16 items-center">
        {/* ── Text Side ── */}
        <div data-animate="coverage-text-col">
          <p data-animate="coverage-eyebrow" className="eyebrow">
            Vamos hasta ti
          </p>

          <h2 className="h2-display mt-3">
            <span className="line-mask">
              <span data-animate="coverage-line" className="block">
                Servicio a domicilio
              </span>
            </span>
            <span className="line-mask">
              <span data-animate="coverage-line" className="block">
                en Huatulco y
              </span>
            </span>
            <span className="line-mask">
              <span data-animate="coverage-line" className="block text-sky-primary">
                zonas cercanas.
              </span>
            </span>
          </h2>

          <p
            data-animate="coverage-para"
            className="mt-5 max-w-[54ch] text-[1.05rem] leading-[1.65] text-sky-muted"
          >
            Cubrimos Bahías de Huatulco y localidades de la costa de Oaxaca. Si no ves tu zona en la
            lista, escríbenos y te confirmamos disponibilidad.
          </p>

          <div data-animate="coverage-cta" className="mt-8">
            <SkyButton
              href={createWhatsAppLink(
                "Hola Sky Brothers, quiero saber si tienen cobertura en mi zona.",
              )}
              external
              ariaLabel="Preguntar por WhatsApp si hay cobertura en mi zona"
            >
              <WhatsAppIcon />
              Preguntar si llegamos a mi zona
            </SkyButton>
          </div>
        </div>

        {/* ── Visual Card Side ── */}
        <div data-animate="coverage-visual-col">
          <div
            data-animate="coverage-card"
            className="relative overflow-hidden rounded-[28px] border border-sky-line bg-sky-soft p-6 shadow-lg md:p-9 will-change-transform"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 400 120"
              className="absolute inset-x-0 bottom-0 h-[120px] w-full text-sky-cyan/40 pointer-events-none"
              fill="none"
            >
              <path
                data-animate="coverage-wave"
                d="M-10 70C60 40 120 92 200 66S330 26 410 52"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M-10 96C70 68 130 112 210 88S340 54 410 78"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>

            <ul className="relative grid gap-3 sm:grid-cols-2">
              {zones.map((z) => (
                <li
                  key={z}
                  data-animate="coverage-pill"
                  className="flex items-center gap-2.5 rounded-[16px] border border-sky-line bg-white px-4 py-3.5 text-[0.98rem] font-medium text-sky-ink shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                >
                  <MapPin
                    strokeWidth={1.7}
                    className="h-[18px] w-[18px] shrink-0 text-sky-primary"
                  />
                  {z}
                </li>
              ))}
            </ul>

            {/* Interactive Oaxaca Coast Map */}
            <div className="relative mt-6">
              <OaxacaMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
