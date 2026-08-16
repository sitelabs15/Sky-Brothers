import { Phone } from "lucide-react";
import { createWhatsAppLink, PHONE_DISPLAY, PHONE_TEL } from "@/lib/whatsapp";
import { SkyButton } from "@/components/SkyButton";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function FinalCTA() {
  return (
    <section
      id="contacto"
      data-section="final-cta"
      data-whatsapp-cta
      className="scroll-mt-24 py-24 md:py-32 overflow-hidden"
    >
      <div className="shell">
        <div
          data-animate="final-cta-card"
          className="relative overflow-hidden rounded-[30px] border border-sky-line bg-sky-cyan-soft/70 px-6 py-14 text-center shadow-xl md:px-16 md:py-20 will-change-transform"
        >
          {/* Decorative SVG Wave Line with marine water flow animation */}
          <svg
            aria-hidden="true"
            viewBox="0 0 800 200"
            className="pointer-events-none absolute inset-0 h-full w-full text-sky-cyan/60"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Primary flowing wave line */}
            <path
              data-animate="final-cta-wave"
              d="M-20 150C120 90 240 180 400 135S660 85 820 120"
              stroke="currentColor"
              strokeWidth="2.5"
              className="flow-line"
              opacity="0.85"
            />
            {/* Secondary harmonic wave line */}
            <path
              d="M-20 170C140 110 260 200 420 155S680 105 820 140"
              stroke="currentColor"
              strokeWidth="1.6"
              className="flow-line-slow"
              opacity="0.5"
            />
          </svg>

          <div data-animate="final-cta-content" className="relative">
            <p data-animate="final-cta-eyebrow" className="hand text-[1.2rem] text-sky-primary">
              ¿Le hace falta una limpieza?
            </p>

            <h2 className="h2-display mx-auto mt-3 max-w-[20ch]">
              <span className="line-mask">
                <span data-animate="final-cta-line" className="block">
                  Agenda tu servicio
                </span>
              </span>
              <span className="line-mask">
                <span data-animate="final-cta-line" className="block text-sky-primary">
                  por WhatsApp.
                </span>
              </span>
            </h2>

            <p
              data-animate="final-cta-para"
              className="mx-auto mt-5 max-w-[54ch] text-[1.05rem] leading-[1.65] text-sky-muted"
            >
              Cuéntanos qué necesitas limpiar y solicita información directamente con Sky Brothers.
            </p>

            <div
              data-animate="final-cta-buttons"
              className="mt-9 flex flex-wrap items-center justify-center gap-3"
            >
              <div data-animate="final-cta-main-btn">
                <SkyButton
                  href={createWhatsAppLink()}
                  external
                  className="min-h-[56px] px-8 text-[1.05rem]"
                  ariaLabel="Agendar por WhatsApp con Sky Brothers"
                >
                  <WhatsAppIcon />
                  Agendar ahora
                </SkyButton>
              </div>

              <SkyButton
                href={PHONE_TEL}
                variant="secondary"
                ariaLabel={`Llamar al ${PHONE_DISPLAY}`}
              >
                <Phone strokeWidth={1.8} className="h-[18px] w-[18px]" />
                Llamar
              </SkyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
