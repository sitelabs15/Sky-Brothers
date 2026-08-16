import React from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { SofaPenDrawingSvg } from "@/components/SofaPenDrawingSvg";
import { MattressPenDrawingSvg } from "@/components/MattressPenDrawingSvg";
import { CarSeatPenDrawingSvg } from "@/components/CarSeatPenDrawingSvg";
import { ChairPenDrawingSvg } from "@/components/ChairPenDrawingSvg";
import { CarpetPenDrawingSvg } from "@/components/CarpetPenDrawingSvg";
import { CribPenDrawingSvg } from "@/components/CribPenDrawingSvg";
import { PillowsPenDrawingSvg } from "@/components/PillowsPenDrawingSvg";
import { UpholsteryPenDrawingSvg } from "@/components/UpholsteryPenDrawingSvg";

const serviceDrawingComponents = [
  <SofaPenDrawingSvg key="sofa" />,
  <MattressPenDrawingSvg key="mattress" />,
  <CarSeatPenDrawingSvg key="carseat" />,
  <ChairPenDrawingSvg key="chair" />,
  <CarpetPenDrawingSvg key="carpet" />,
  <CribPenDrawingSvg key="crib" />,
  <PillowsPenDrawingSvg key="pillows" />,
  <UpholsteryPenDrawingSvg key="upholstery" />,
];

export function Services() {
  return (
    <section
      id="servicios"
      data-section="services"
      data-animate="services"
      className="relative scroll-mt-24 py-24 md:py-32 overflow-hidden"
    >
      {/* Ondas de agua decorativas en fondo */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 380"
        className="pointer-events-none absolute -top-12 left-0 h-[380px] w-[115%] text-sky-cyan/30"
        fill="none"
      >
        <path
          d="M-50 160C220 70 400 230 680 130S1060 20 1340 100s240 60 350 20"
          stroke="currentColor"
          strokeWidth="2"
          className="flow-line-slow"
          opacity="0.6"
        />
        <path
          d="M-50 230C240 130 420 290 700 190S1080 80 1360 160s220 40 330 0"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.35"
        />
      </svg>

      <div className="shell relative">
        {/* ── Section heading — GSAP masked line reveal ── */}
        <div className="max-w-[700px]">
          <p data-animate="services-eyebrow" className="eyebrow">
            ¿Qué limpiamos?
          </p>

          {/* h2 lines wrapped in .line-mask for yPercent masking */}
          <h2 className="h2-display mt-3">
            <span className="line-mask">
              <span data-animate="services-line" className="block">
                Limpieza profunda para los
              </span>
            </span>
            <span className="line-mask">
              <span data-animate="services-line" className="block">
                espacios que más usas.
              </span>
            </span>
          </h2>

          <p
            data-animate="services-para"
            className="mt-5 max-w-[62ch] text-[1.05rem] leading-[1.65] text-sky-muted"
          >
            Trabajamos muebles, textiles y tapicerías con equipos profesionales de succión y
            extracción para ayudar a remover suciedad acumulada, polvo, arena y manchas.
          </p>
        </div>

        {/* ── Service cards — GSAP editorial entrance ── */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div key={s.name} className="group relative flex h-full">
              <a
                data-animate="service-card"
                href={createWhatsAppLink(s.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full flex-col overflow-hidden rounded-[22px] border border-sky-line bg-white transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-[3px] hover:border-sky-cyan hover:shadow-[0_24px_50px_-40px_rgba(8,121,186,0.8)] active:translate-y-0"
              >
                {/* SVG Pen Line Drawing Animation */}
                <div className="flex h-[180px] w-full items-center justify-center overflow-hidden bg-sky-soft/30 p-2 transition-colors duration-300 group-hover:bg-sky-soft/60">
                  {serviceDrawingComponents[i % serviceDrawingComponents.length]}
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <span className="hand text-sm text-sky-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-[1.2rem] font-semibold tracking-tight text-sky-ink md:text-[1.3rem]">
                    {s.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.94rem] leading-[1.6] text-sky-muted">
                    {s.copy}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[0.94rem] font-semibold text-sky-primary">
                    Cotizar
                    <ArrowUpRight
                      strokeWidth={1.9}
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
