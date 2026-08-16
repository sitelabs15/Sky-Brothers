import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { gallery } from "@/data/site";
import { cn } from "@/lib/utils";

const tags = ["Todos", "Sofás y Salas", "Colchones", "Proceso de Extracción", "Equipo y Servicio"];

const INITIAL_COUNT = 8; // 2 filas en layout de 4 columnas

export function ResultsGallery() {
  const [selectedTag, setSelectedTag] = useState("Todos");
  const [isExpanded, setIsExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  const filteredGallery =
    selectedTag === "Todos" ? gallery : gallery.filter((g) => g.tag === selectedTag);

  const visibleGallery = isExpanded ? filteredGallery : filteredGallery.slice(0, INITIAL_COUNT);

  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % filteredGallery.length)),
    [filteredGallery.length],
  );
  const prev = useCallback(
    () =>
      setOpen((i) => (i === null ? i : (i - 1 + filteredGallery.length) % filteredGallery.length)),
    [filteredGallery.length],
  );

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, next, prev]);

  const current = open === null ? null : filteredGallery[open];

  return (
    <section
      id="galeria"
      aria-label="Galería de trabajos reales"
      data-section="results-gallery"
      data-results-gallery
      className="scroll-mt-24 pb-24 md:pb-32 transition-colors duration-500"
    >
      <div className="shell-wide">
        <div className="shell flex flex-col justify-between gap-6 !px-0 md:flex-row md:items-end">
          <div data-animate="gallery-header" className="max-w-[640px]">
            <p data-animate="gallery-eyebrow" className="eyebrow">
              Galería de Trabajos
            </p>
            <h2 className="h2-display mt-3">
              <span className="line-mask">
                <span data-animate="gallery-line" className="block">
                  Fotos Reales de
                </span>
              </span>
              <span className="line-mask">
                <span data-animate="gallery-line" className="block text-sky-primary">
                  Nuestro Servicio
                </span>
              </span>
            </h2>
            <p
              data-animate="gallery-para"
              className="mt-3 text-[1.05rem] leading-[1.65] text-sky-muted"
            >
              Explora nuestros trabajos reales realizados en Huatulco y la costa: limpieza de salas
              y sofás, desinfección de colchones, procesos de extracción profunda y equipo
              profesional.
            </p>
          </div>

          {/* Filter Pills */}
          <div data-animate="gallery-pills" className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                data-animate="gallery-pill"
                type="button"
                onClick={() => {
                  setSelectedTag(tag);
                  setOpen(null);
                }}
                className={cn(
                  "min-h-[40px] rounded-full border px-4 text-sm font-medium transition-all duration-300",
                  selectedTag === tag
                    ? "border-sky-primary bg-sky-primary text-white shadow-md"
                    : "border-sky-line bg-white text-sky-ink hover:border-sky-cyan hover:text-sky-primary",
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div
          data-animate="gallery-grid"
          className="mt-8 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-4"
        >
          {visibleGallery.map((g) => {
            const originalIndex = filteredGallery.indexOf(g);
            return (
              <button
                key={g.src}
                data-animate="gallery-item"
                type="button"
                onClick={() => setOpen(originalIndex >= 0 ? originalIndex : 0)}
                aria-label={`Ampliar imagen: ${g.alt}`}
                className="group relative min-w-[78%] shrink-0 snap-start overflow-hidden rounded-[24px] border border-sky-line bg-sky-soft transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-sky-cyan hover:shadow-xl md:min-w-0 will-change-transform"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.045]"
                />
                <span className="hand absolute bottom-3 left-3 rounded-full bg-white/92 px-3.5 py-1 text-[0.88rem] font-semibold text-sky-primary shadow-sm backdrop-blur-sm">
                  {g.tag}
                </span>
              </button>
            );
          })}
        </div>

        {filteredGallery.length > INITIAL_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className="group inline-flex items-center gap-2.5 rounded-full border border-sky-primary/30 bg-white px-7 py-3.5 text-[0.98rem] font-semibold text-sky-primary shadow-md transition-all duration-300 hover:border-sky-primary hover:bg-sky-primary hover:text-white hover:shadow-lg active:scale-95"
            >
              <span>
                {isExpanded
                  ? "Mostrar menos fotos"
                  : `Ver todas las fotos (${filteredGallery.length})`}
              </span>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        )}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-sky-black/94 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw] flex flex-col items-center">
            <img
              src={current.src}
              alt={current.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[82vh] max-w-full rounded-[20px] object-contain shadow-2xl"
            />
            <p className="mt-3 text-center text-sm font-medium text-white/90">{current.alt}</p>
          </div>
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-black/40 text-white transition-colors hover:bg-black/80"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Imagen anterior"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-black/40 text-white transition-colors hover:bg-black/80 md:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Imagen siguiente"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-black/40 text-white transition-colors hover:bg-black/80 md:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
