import { useState, useRef, useEffect } from "react";
import { Check, Play, Pause, Volume2, VolumeX, Maximize2, X, Sparkles, Film } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { SkyButton } from "@/components/SkyButton";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { cn } from "@/lib/utils";

import video1 from "@/assets/Skybrothers-recursos/Videos/1.mp4";
import video2 from "@/assets/Skybrothers-recursos/Videos/2.mp4";
import video3 from "@/assets/Skybrothers-recursos/Videos/3.mp4";
import video4 from "@/assets/Skybrothers-recursos/Videos/4.mp4";
import video5 from "@/assets/Skybrothers-recursos/Videos/5.mp4";
import video6 from "@/assets/Skybrothers-recursos/Videos/6.mp4";

const VIDEOS = [
  {
    id: "vid-1",
    src: video1,
    title: "Extracción con Boquilla Transparente",
    subtitle: "Succión instantánea de mugre acumulada en las fibras",
    badge: "Extracción",
  },
  {
    id: "vid-2",
    src: video2,
    title: "Inyección y Remoción Profunda",
    subtitle: "Solución sanitizante desprendiendo manchas difíciles",
    badge: "Lavado",
  },
  {
    id: "vid-3",
    src: video3,
    title: "Tratamiento en Tapicería de Sala",
    subtitle: "Limpieza intensiva que renueva el tejido",
    badge: "Restauración",
  },
  {
    id: "vid-4",
    src: video4,
    title: "Desinfección y Eliminación de Ácaros",
    subtitle: "Aseo higiénico sin maltratar las telas",
    badge: "Sanitización",
  },
  {
    id: "vid-5",
    src: video5,
    title: "Servicio Directo a Domicilio",
    subtitle: "Atención profesional en tu hogar en Huatulco",
    badge: "A Domicilio",
  },
  {
    id: "vid-6",
    src: video6,
    title: "Potencia de Succión Sky Brothers",
    subtitle: "Equipo profesional para un secado rápido",
    badge: "Equipo",
  },
];

const benefits = [
  "Extracción en vivo: observa cómo se elimina la suciedad atrapada",
  "Fórmulas desinfectantes que protegen las fibras y colores",
  "Servicio 100% a domicilio en Bahías de Huatulco y la costa",
  "Ideal para sofás, sillones, colchones y vestiduras de auto",
];

export function ValueSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const currentVideo = VIDEOS[activeIndex] ?? VIDEOS[0]!;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [activeIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section
      data-section="value"
      data-equipment-section
      className="relative py-20 md:py-28 overflow-hidden bg-sky-soft/40 transition-colors duration-500"
    >
      {/* Ondas decorativas de fondo */}
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

      <div className="shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ── Columna Izquierda: Galería de Videos en Vivo ── */}
          <div data-animate="equipment-image-col" className="lg:col-span-7 order-2 lg:order-1">
            {/* Reproductor Principal */}
            <div
              data-animate="equipment-image-wrap"
              className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-sky-line bg-sky-black shadow-2xl group"
            >
              <video
                ref={videoRef}
                src={currentVideo.src}
                playsInline
                autoPlay
                loop
                muted={isMuted}
                className="aspect-[4/3] sm:aspect-[16/10] w-full object-cover cursor-pointer"
                onClick={togglePlay}
              />

              {/* Overlay superior de información */}
              <div className="pointer-events-none absolute inset-x-0 top-0 p-4 sm:p-6 bg-gradient-to-b from-black/80 via-black/30 to-transparent flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-2 rounded-full bg-sky-primary/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    Video en Vivo
                  </div>
                  <span className="hidden sm:inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md">
                    {currentVideo.badge}
                  </span>
                </div>
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-mono text-white/80 backdrop-blur-md border border-white/15">
                  {activeIndex + 1} / {VIDEOS.length}
                </span>
              </div>

              {/* Overlay inferior de controles y subtítulo */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 pt-16 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end text-white">
                <div className="flex items-end justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white drop-shadow-sm truncate">
                      {currentVideo.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 line-clamp-1 mt-0.5">
                      {currentVideo.subtitle}
                    </p>
                  </div>

                  {/* Controles multimedia */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                      className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-white/25 text-white backdrop-blur-md transition-transform hover:scale-110 hover:bg-white/40 active:scale-95 border border-white/20"
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4 fill-white" />
                      ) : (
                        <Play className="h-4 w-4 fill-white translate-x-0.5" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? "Activar sonido" : "Silenciar video"}
                      className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-white/25 text-white backdrop-blur-md transition-transform hover:scale-110 hover:bg-white/40 active:scale-95 border border-white/20"
                    >
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      aria-label="Ver video en pantalla completa"
                      className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-white/25 text-white backdrop-blur-md transition-transform hover:scale-110 hover:bg-white/40 active:scale-95 border border-white/20"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pista de Miniaturas de los 6 Videos */}
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
              {VIDEOS.map((vid, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={vid.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Ver clip: ${vid.title}`}
                    className={cn(
                      "group relative aspect-video overflow-hidden rounded-xl sm:rounded-2xl border transition-all duration-300 text-left bg-sky-black/90",
                      isActive
                        ? "border-sky-primary ring-2 ring-sky-primary/50 shadow-md scale-[1.03]"
                        : "border-sky-line hover:border-sky-cyan/80 opacity-75 hover:opacity-100",
                    )}
                  >
                    <video
                      src={vid.src}
                      muted
                      playsInline
                      className="h-full w-full object-cover pointer-events-none"
                    />
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-1.5",
                        isActive && "ring-inset",
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-[11px] font-bold text-white leading-none">
                          #{idx + 1}
                        </span>
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-sky-cyan animate-ping" />
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Columna Derecha: Texto y Beneficios ── */}
          <div data-animate="equipment-content-col" className="lg:col-span-5 order-1 lg:order-2">
            <p
              data-animate="equipment-eyebrow"
              className="eyebrow inline-flex items-center gap-1.5"
            >
              <Film className="h-3.5 w-3.5 text-sky-primary" />
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

            <p
              data-animate="equipment-para"
              className="mt-4 text-[1.02rem] leading-[1.65] text-sky-muted"
            >
              Mira en tiempo real la potencia de nuestras máquinas de inyección y extracción
              succionando impurezas, sudor y polvo acumulado desde lo más profundo de tus muebles.
            </p>

            <ul className="mt-6 space-y-3.5">
              {benefits.map((b) => (
                <li key={b} data-animate="equipment-bullet" className="flex items-start gap-3">
                  <div
                    data-animate="equipment-check"
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sky-soft text-sky-primary border border-sky-line"
                  >
                    <Check strokeWidth={2.4} className="h-3.5 w-3.5 text-sky-primary" />
                  </div>
                  <span className="text-[0.98rem] leading-[1.55] text-sky-ink font-medium">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div data-animate="equipment-cta" className="mt-8 flex items-center gap-4">
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
      </div>

      {/* Modal / Lightbox de Video Ampliado */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video en pantalla completa"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 p-4 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-[92vw] md:max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-[24px] bg-black shadow-2xl border border-white/20">
              <video
                ref={modalVideoRef}
                src={currentVideo.src}
                controls
                autoPlay
                playsInline
                className="max-h-[78vh] w-full object-contain"
              />
              <div className="p-4 bg-sky-black/90 text-white flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-base md:text-lg">{currentVideo.title}</h4>
                  <p className="text-xs text-white/70">{currentVideo.subtitle}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Cerrar video"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
