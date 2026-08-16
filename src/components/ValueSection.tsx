import { Check } from "lucide-react";
import { img } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { SkyButton } from "@/components/SkyButton";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const benefits = [
  "Succión y extracción profesional",
  "Ayuda a remover polvo y suciedad acumulada",
  "Servicio directamente en tu domicilio",
  "Atención para muebles, colchones y automóviles",
];

export function ValueSection() {
  return (
    <section
      data-section="value"
      data-equipment-section
      className="relative py-24 md:py-32 overflow-hidden bg-sky-soft/40"
    >
      {/* Ondas de agua decorativas en fondo */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 340"
        className="pointer-events-none absolute -bottom-10 left-0 h-[340px] w-[115%] text-sky-cyan/30"
        fill="none"
      >
        <path
          d="M-40 180C200 90 380 250 660 150S1040 30 1320 120s240 60 360 20"
          stroke="currentColor"
          strokeWidth="2"
          className="flow-line-slow"
          opacity="0.6"
        />
        <path
          d="M-40 240C220 150 400 310 680 210S1060 90 1340 180s220 40 340 0"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.35"
        />
      </svg>

      <div className="shell relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ── Image Side ── */}
        <div data-animate="equipment-image-col" className="order-2 lg:order-1">
          <div
            data-animate="equipment-image-wrap"
            className="relative overflow-hidden rounded-[28px] border border-sky-line shadow-lg"
          >
            <img
              data-animate="equipment-img"
              src={img.fotoTrabajo13}
              alt="Servicio profesional de limpieza y extracción de tapicería Sky Brothers"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover will-change-transform"
            />
          </div>
        </div>

        {/* ── Text Content Side ── */}
        <div data-animate="equipment-content-col" className="order-1 lg:order-2">
          <p data-animate="equipment-eyebrow" className="eyebrow">
            Limpieza que va más allá de la superficie
          </p>

          <h2 className="h2-display mt-3">
            <span className="line-mask">
              <span data-animate="equipment-line" className="block">
                Equipo profesional.
              </span>
            </span>
            <span className="line-mask">
              <span data-animate="equipment-line" className="block">
                Limpieza profunda.
              </span>
            </span>
            <span className="line-mask">
              <span data-animate="equipment-line" className="block text-sky-primary">
                Servicio a domicilio.
              </span>
            </span>
          </h2>

          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} data-animate="equipment-bullet" className="flex items-start gap-3">
                <div
                  data-animate="equipment-check"
                  className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sky-soft text-sky-primary"
                >
                  <Check strokeWidth={2.2} className="h-3.5 w-3.5 text-sky-primary" />
                </div>
                <span className="text-[1.02rem] leading-[1.6] text-sky-ink">{b}</span>
              </li>
            ))}
          </ul>

          <div data-animate="equipment-cta" className="mt-9">
            <SkyButton
              href={createWhatsAppLink()}
              external
              ariaLabel="Agendar por WhatsApp con Sky Brothers"
            >
              <WhatsAppIcon />
              Agendar por WhatsApp
            </SkyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
