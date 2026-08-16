import { MessageCircle, Truck, Wind } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Agenda",
    copy: "Cuéntanos qué necesitas limpiar y envíanos fotografías por WhatsApp para solicitar información.",
    icon: MessageCircle,
  },
  {
    n: "02",
    title: "Vamos a tu domicilio",
    copy: "Realizamos el servicio directamente en tu hogar o ubicación dentro de nuestra zona de cobertura.",
    icon: Truck,
  },
  {
    n: "03",
    title: "Lavamos y extraemos",
    copy: "Utilizamos maquinaria profesional de succión y extracción para realizar una limpieza profunda de la tapicería.",
    icon: Wind,
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      data-section="process"
      data-process-section
      className="scroll-mt-24 bg-sky-soft py-24 md:py-32 overflow-hidden"
    >
      <div className="shell">
        {/* ── Section Intro ── */}
        <div data-animate="process-header" className="max-w-[720px]">
          <p data-animate="process-eyebrow" className="eyebrow">
            Así trabajamos
          </p>
          <h2 className="h2-display mt-3">
            <span className="line-mask">
              <span data-animate="process-line-text" className="block">
                Nosotros llevamos la limpieza
              </span>
            </span>
            <span className="line-mask">
              <span data-animate="process-line-text" className="block text-sky-primary">
                hasta tu puerta.
              </span>
            </span>
          </h2>
        </div>

        {/* ── Process Line & 3 Steps ── */}
        <div data-animate="process-container" className="relative mt-14">
          {/* Animated Wave SVG Line (Desktop) */}
          <div
            data-animate="process-wave-wrap"
            className="absolute top-7 right-0 left-0 hidden h-[60px] w-full md:block pointer-events-none ocean-wave-body"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 1200 60"
              className="h-full w-full overflow-visible"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="process-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0879ba" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#30a8d8" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0879ba" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="process-wave-stream" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#30a8d8" stopOpacity="0" />
                  <stop offset="50%" stopColor="#d5f2fc" stopOpacity="1" />
                  <stop offset="100%" stopColor="#30a8d8" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Background Guide Line (Subtle) */}
              <path
                d="M40 30C260 -10 420 66 620 30S980 -6 1160 34"
                stroke="#d0e5ef"
                strokeWidth="2"
                strokeDasharray="4 8"
                strokeLinecap="round"
                opacity="0.6"
              />

              {/* Main Wave Line that Draws Across */}
              <path
                data-animate="process-line"
                d="M40 30C260 -10 420 66 620 30S980 -6 1160 34"
                stroke="url(#process-wave-grad)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Continuous Flowing Ocean Wave Stream (Flows constantly along the wave) */}
              <path
                data-animate="process-wave-stream"
                d="M40 30C260 -10 420 66 620 30S980 -6 1160 34"
                stroke="url(#process-wave-stream)"
                strokeWidth="4.5"
                strokeLinecap="round"
                className="ocean-wave-stream opacity-0 transition-opacity duration-1000"
              />
            </svg>
          </div>

          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map(({ n, title, copy, icon: Icon }) => (
              <li key={n} data-animate="process-step" className="relative flex flex-col">
                {/* Step Marker Badge */}
                <div
                  data-animate="process-marker"
                  className="grid h-14 w-14 place-items-center rounded-full border-2 border-sky-line bg-white text-sky-primary shadow-sm transition-[border-color,box-shadow,transform] duration-300 will-change-transform"
                >
                  <Icon strokeWidth={1.8} className="h-6 w-6" />
                </div>

                {/* Step Number */}
                <span
                  data-animate="process-num"
                  className="hand mt-5 block text-[1.15rem] font-semibold text-sky-cyan"
                >
                  Paso {n}
                </span>

                {/* Step Title (with line mask) */}
                <div className="line-mask mt-1">
                  <h3
                    data-animate="process-title"
                    className="text-[1.45rem] font-semibold tracking-tight text-sky-ink"
                  >
                    {title}
                  </h3>
                </div>

                {/* Step Description */}
                <p
                  data-animate="process-desc"
                  className="mt-3 max-w-[46ch] text-[1rem] leading-[1.65] text-sky-muted"
                >
                  {copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
