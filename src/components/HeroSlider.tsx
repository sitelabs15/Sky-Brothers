import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { img } from "@/data/site";

interface HeroSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function HeroSlider({
  beforeImage = img.sliderSucio,
  afterImage = img.sliderLimpio,
  beforeLabel = "Sucio",
  afterLabel = "Limpio",
}: HeroSliderProps) {
  const [pos, setPos] = useState(50);
  const wrap = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => dragging.current && setFromClientX(e.clientX);
    const up = () => (dragging.current = false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <div
      ref={wrap}
      className="group relative touch-pan-y overflow-hidden rounded-[28px] border border-sky-line bg-sky-soft select-none shadow-[0_20px_50px_-20px_rgba(8,121,186,0.3)]"
      onPointerDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
    >
      {/* Imagen Después (Limpio) */}
      <img
        src={afterImage}
        alt="Sillón limpio después del lavado profundo con succión y extracción"
        width={690}
        height={676}
        className="aspect-[5/4] w-full object-cover md:aspect-[4/4.4]"
      />

      {/* Imagen Antes (Sucio) con clip-path dinámico */}
      <img
        src={beforeImage}
        alt="Sillón sucio antes de la limpieza profunda"
        width={690}
        height={676}
        className="absolute inset-0 aspect-[5/4] w-full object-cover md:aspect-[4/4.4]"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      {/* Etiquetas Sucio / Limpio */}
      <span className="hand absolute top-4 left-4 rounded-full border border-white/20 bg-sky-black/75 px-3.5 py-1 text-sm font-semibold tracking-wide text-white backdrop-blur-md shadow-md">
        {beforeLabel}
      </span>
      <span className="hand absolute top-4 right-4 rounded-full border border-white/30 bg-sky-primary/90 px-3.5 py-1 text-sm font-semibold tracking-wide text-white backdrop-blur-md shadow-md">
        {afterLabel}
      </span>

      {/* Línea divisora */}
      <div
        className="pointer-events-none absolute inset-y-0 w-[3px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]"
        style={{ left: `${pos}%` }}
      />

      {/* Botón / Manija deslizable */}
      <div
        className="pointer-events-none absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-sky-primary text-white shadow-[0_8px_24px_-6px_rgba(8,10,11,0.6)] transition-transform group-hover:scale-110"
        style={{ left: `${pos}%` }}
        aria-hidden="true"
      >
        <MoveHorizontal className="h-5 w-5" />
      </div>

      {/* Input nativo para interacción por teclado/accesibilidad */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Comparar antes (sucio) y después (limpio) del sillón"
        className="absolute inset-x-0 bottom-0 h-full w-full cursor-ew-resize opacity-0"
      />

      {/* Overlay inferior con gradiente sutil y pista de interacción */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-sky-black/50 to-transparent" />
      <span className="hand pointer-events-none absolute bottom-3.5 left-1/2 -translate-x-1/2 text-xs font-medium text-white/90 drop-shadow md:text-sm">
        Desliza para ver el cambio
      </span>
    </div>
  );
}
