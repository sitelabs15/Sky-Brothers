import React from "react";
import {
  Sofa,
  BedDouble,
  Car,
  Armchair,
  Footprints,
  Baby,
  CalendarClock,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
} from "lucide-react";
import { cleaningFrequencies } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { SkyButton } from "@/components/SkyButton";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const ICONS_MAP: Record<string, React.ElementType> = {
  sofas: Sofa,
  colchones: BedDouble,
  autos: Car,
  sillas: Armchair,
  alfombras: Footprints,
  cunas: Baby,
};

export function FrequencyGuide() {
  return (
    <section
      id="frecuencia"
      data-section="frequency"
      className="relative scroll-mt-24 py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Ondas sutiles decorativas */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 320"
        className="pointer-events-none absolute -top-16 left-0 h-[320px] w-full text-sky-cyan/20"
        fill="none"
      >
        <path
          d="M-50 140C240 60 440 220 720 120S1100 30 1380 90s200 40 300 10"
          stroke="currentColor"
          strokeWidth="1.5"
          className="flow-line"
          opacity="0.6"
        />
      </svg>

      <div className="shell relative">
        {/* ── Section Header ── */}
        <div className="max-w-[760px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-cyan/40 bg-sky-soft px-4 py-1.5 text-xs sm:text-sm font-semibold text-sky-primary mb-3 shadow-sm">
            <CalendarClock className="h-4 w-4 text-sky-cyan" />
            <span>Guía de Mantenimiento & Salud</span>
          </div>

          <h2 className="h2-display mt-2">
            <span className="line-mask">
              <span className="block">
                ¿Cada cuánto tiempo debes
              </span>
            </span>
            <span className="line-mask">
              <span className="block text-sky-primary">
                lavar y desinfectar tus muebles?
              </span>
            </span>
          </h2>

          <p className="mt-4 text-[1.05rem] leading-[1.65] text-sky-muted max-w-[66ch]">
            En el clima cálido y costero de Huatulco, la acumulación de sudor, humedad, polvo y
            ácaros ocurre mucho más rápido. Mantén tus espacios saludables con estas recomendaciones:
          </p>
        </div>

        {/* ── Grid of Frequency Cards ── */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cleaningFrequencies.map((f) => {
            const IconComponent = ICONS_MAP[f.id] || Sparkles;

            return (
              <div
                key={f.id}
                className="group relative flex flex-col justify-between rounded-[24px] border border-sky-line bg-sky-soft/40 p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-cyan hover:bg-white hover:shadow-[0_20px_40px_-20px_rgba(8,121,186,0.25)]"
              >
                <div>
                  {/* Top Bar: Icon & Frequency Pill */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white border border-sky-line/80 text-sky-primary shadow-sm transition-colors duration-300 group-hover:border-sky-cyan group-hover:bg-sky-primary group-hover:text-white">
                      <IconComponent strokeWidth={1.8} className="h-6 w-6" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-primary/10 px-3.5 py-1 text-xs sm:text-sm font-bold text-sky-primary border border-sky-primary/20">
                      <CalendarClock className="h-3.5 w-3.5" />
                      {f.frequency}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-[1.2rem] font-bold tracking-tight text-sky-ink md:text-[1.25rem]">
                    {f.item}
                  </h3>

                  {/* Ideal For */}
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-sky-cyan">
                    {f.idealFor}
                  </p>

                  {/* Reason / Benefits */}
                  <p className="mt-3 text-[0.93rem] leading-[1.6] text-sky-muted">
                    {f.reason}
                  </p>
                </div>

                {/* Bottom WhatsApp Link */}
                <div className="mt-6 pt-4 border-t border-sky-line/60">
                  <a
                    href={createWhatsAppLink(f.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs sm:text-sm font-semibold text-sky-primary transition-colors hover:text-sky-cyan"
                  >
                    <span>Cotizar este servicio</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Tip Banner ── */}
        <div className="mt-10 rounded-[24px] border border-sky-line bg-gradient-to-r from-sky-soft via-white to-sky-soft/60 p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="hidden sm:grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-cyan/15 text-sky-primary border border-sky-cyan/30">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-sky-ink">
                ¿Tienes mascotas o personas con alergias en casa?
              </h4>
              <p className="mt-1 text-sm text-sky-muted max-w-[60ch]">
                Te sugerimos programar tu servicio cada <strong>3 a 4 meses</strong> para mantener
                las fibras 100% libres de caspa, pelo, bacterias y ácaros acumulados.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <SkyButton
              href={createWhatsAppLink("Hola Sky Brothers, me gustaría agendar un paquete de mantenimiento para mis muebles.")}
              external
              className="w-full md:w-auto"
            >
              <WhatsAppIcon />
              Agendar mantenimiento
            </SkyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
