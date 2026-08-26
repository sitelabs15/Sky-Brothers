import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sofa, BedDouble, Car, Sparkles, ShieldCheck, Droplets, Zap, Award } from "lucide-react";
import { img } from "@/data/site";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    id: "sofa-gris",
    label: "Sofá Gris · Sucio vs Limpio",
    icon: Sofa,
    image: img.sofaGrisSL,
    description: "Eliminación total de manchas profundas y recuperación del tono original.",
  },
  {
    id: "colchon-patron",
    label: "Colchón · Desinfección",
    icon: BedDouble,
    image: img.colchonPatronSL,
    description: "Inyección, succión y extracción profunda de ácaros, suciedad y polvo acumulado en fibras.",
  },
  {
    id: "auto-asientos",
    label: "Interiores de Auto",
    icon: Car,
    image: img.autoAsientosSL,
    description: "Limpieza profunda de tapicería y vestiduras automotrices a domicilio.",
  },
  {
    id: "sofa-marron",
    label: "Sofá Marrón · Antes y Después",
    icon: Sparkles,
    image: img.sofaMarronAD,
    description: "Restauración de tela delicada y eliminación de suciedad por uso diario.",
  },
  {
    id: "colchon-blanco",
    label: "Colchón Blanco · Blanqueado",
    icon: ShieldCheck,
    image: img.colchonBlancoAD,
    description: "Aseo higiénico y desinfección total que renueva la frescura de tu cama.",
  },
  {
    id: "equipo-inyeccion",
    label: "Inyección y Succión",
    icon: Droplets,
    image: img.inyeccionSuccionResultado,
    description:
      "Tecnología profesional que inyecta solución desinfectante y succiona al instante.",
  },
  {
    id: "lavado-vapor",
    label: "Lavado Profundo y Sanitización",
    icon: Zap,
    image: img.lavadoSanitizacionResultado,
    description: "Elimina 99.9% de bacterias, hongos y malos olores sin maltratar tus muebles.",
  },
  {
    id: "cobertura-huatulco",
    label: "Servicio a Domicilio",
    icon: Award,
    image: img.publicacionPromocion,
    description: "Atención directa en Bahías de Huatulco, Pochutla, Copalita y zonas de la costa.",
  },
];

const AUTO_PLAY_INTERVAL = 3400;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function BeforeAfter() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex = ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <section
      id="resultados"
      data-section="before-after"
      data-results-section
      className="relative scroll-mt-24 bg-white py-20 md:py-28 transition-colors duration-500 overflow-hidden"
    >
      {/* Ondas decorativas de agua en el fondo */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 360"
        className="pointer-events-none absolute top-10 right-0 h-[360px] w-[120%] text-sky-cyan/30"
        fill="none"
      >
        <path
          d="M-40 200C220 120 440 280 720 170S1100 40 1380 130s240 60 360 10"
          stroke="currentColor"
          strokeWidth="1.8"
          className="flow-line"
          opacity="0.55"
        />
        <path
          d="M-40 260C240 180 460 340 740 230S1120 100 1400 190s220 40 340 0"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.35"
        />
      </svg>

      <div className="shell relative mb-12">
        <div data-animate="ba-header" className="max-w-[720px]">
          <p data-animate="ba-eyebrow" className="eyebrow">
            Publicaciones y Resultados Reales
          </p>
          <h2 className="h2-display mt-3">
            <span className="line-mask">
              <span data-animate="ba-line" className="block">
                El cambio se nota
              </span>
            </span>
            <span className="line-mask">
              <span data-animate="ba-line" className="block text-sky-primary">
                a simple vista.
              </span>
            </span>
          </h2>
          <p data-animate="ba-para" className="mt-4 text-[1.05rem] leading-[1.65] text-sky-muted">
            Conoce nuestras publicaciones oficiales con comparativas antes vs. después, procesos de
            inyección, succión y tecnología de limpieza profesional en Bahías de Huatulco.
          </p>
        </div>
      </div>

      {/* Interactive 21st Feature Carousel Container */}
      <div data-animate="ba-visual" className="shell-wide">
        <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] flex flex-col lg:flex-row min-h-[580px] lg:h-[620px] border border-sky-line/80 shadow-2xl shadow-sky-primary/10 bg-white">
          {/* Columna Izquierda: Lista de Chips interactiva con gradiente azul */}
          <div className="w-full lg:w-[42%] min-h-[360px] md:min-h-[420px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-6 md:px-12 lg:pl-12 bg-gradient-to-b from-[#0284c7] via-[#0284c7] to-[#0369a1]">
            <div className="absolute inset-x-0 top-0 h-14 md:h-20 bg-gradient-to-b from-[#0284c7] via-[#0284c7]/90 to-transparent z-40 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-14 md:h-20 bg-gradient-to-t from-[#0369a1] via-[#0369a1]/90 to-transparent z-40 pointer-events-none" />

            <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
              {FEATURES.map((feature, index) => {
                const isActive = index === currentIndex;
                const distance = index - currentIndex;
                const wrappedDistance = wrap(-(FEATURES.length / 2), FEATURES.length / 2, distance);
                const IconComponent = feature.icon;

                return (
                  <motion.div
                    key={feature.id}
                    style={{
                      height: ITEM_HEIGHT,
                      width: "fit-content",
                    }}
                    animate={{
                      y: wrappedDistance * ITEM_HEIGHT,
                      opacity: Math.max(0, 1 - Math.abs(wrappedDistance) * 0.28),
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 22,
                      mass: 1,
                    }}
                    className="absolute flex items-center justify-start"
                  >
                    <button
                      type="button"
                      onClick={() => handleChipClick(index)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className={cn(
                        "relative flex items-center gap-3.5 px-5 md:px-7 lg:px-6 py-3 md:py-3.5 rounded-full transition-all duration-500 text-left group border select-none cursor-pointer",
                        isActive
                          ? "bg-white text-[#0284c7] border-white shadow-lg z-10 scale-[1.02]"
                          : "bg-white/10 text-white/75 border-white/20 hover:border-white/50 hover:text-white hover:bg-white/15",
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center justify-center transition-colors duration-300",
                          isActive ? "text-[#0284c7]" : "text-white/60",
                        )}
                      >
                        <IconComponent className="h-4 w-4 shrink-0 stroke-[2.2]" />
                      </div>

                      <span className="font-semibold text-xs md:text-sm tracking-tight whitespace-nowrap uppercase">
                        {feature.label}
                      </span>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Columna Derecha: Tarjetas 3D dinámicas con fotos oficiales de Publicaciones */}
          <div className="flex-1 min-h-[460px] md:min-h-[540px] lg:h-full relative bg-sky-soft/60 flex items-center justify-center py-10 md:py-16 px-4 md:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-sky-line">
            <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
              {FEATURES.map((feature, index) => {
                const status = getCardStatus(index);
                const isActive = status === "active";
                const isPrev = status === "prev";
                const isNext = status === "next";

                return (
                  <motion.div
                    key={feature.id}
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                      scale: isActive ? 1 : isPrev || isNext ? 0.86 : 0.72,
                      opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                      rotate: isPrev ? -3 : isNext ? 3 : 0,
                      zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 24,
                      mass: 0.8,
                    }}
                    className="absolute inset-0 rounded-[2rem] md:rounded-[2.6rem] overflow-hidden border-4 md:border-8 border-white bg-white shadow-2xl origin-center"
                  >
                    <img
                      src={feature.image}
                      alt={feature.label}
                      className={cn(
                        "w-full h-full object-cover transition-all duration-700",
                        isActive ? "grayscale-0 blur-0" : "grayscale blur-[2px] brightness-75",
                      )}
                    />

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="absolute inset-x-0 bottom-0 p-6 md:p-8 pt-24 bg-gradient-to-t from-sky-black/95 via-sky-black/60 to-transparent flex flex-col justify-end pointer-events-none"
                        >
                          <div className="bg-white/95 text-sky-primary px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] w-fit shadow-md mb-2.5 backdrop-blur-sm">
                            {index + 1} de {FEATURES.length} • {feature.label}
                          </div>
                          <p className="text-white font-medium text-base md:text-lg leading-snug drop-shadow-sm">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Badge superior de estado */}
                    <div
                      className={cn(
                        "absolute top-5 left-5 flex items-center gap-2 transition-opacity duration-300 bg-sky-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    >
                      <div className="w-2 h-2 rounded-full bg-sky-cyan shadow-[0_0_8px_#38bdf8] animate-pulse" />
                      <span className="text-white text-[10px] font-semibold uppercase tracking-[0.2em]">
                        Publicación Oficial
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
