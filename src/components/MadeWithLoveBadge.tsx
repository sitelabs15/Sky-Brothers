import * as React from "react";
import { cn } from "@/lib/utils";

// -------------------------------------------------------------------------
// ESTILOS (solo lo necesario para este botón: pill de vidrio + latido)
// -------------------------------------------------------------------------
const STYLES = `
.made-with-badge-wrapper {
  --pill-bg-1: rgba(255, 255, 255, 0.12);
  --pill-bg-2: rgba(255, 255, 255, 0.05);
  --pill-shadow: rgba(0, 0, 0, 0.25);
  --pill-highlight: rgba(255, 255, 255, 0.35);
  --pill-inset-shadow: rgba(0, 0, 0, 0.2);
  --pill-border: rgba(255, 255, 255, 0.25);
}

@keyframes badge-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.5)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.8)); }
  30% { transform: scale(1); }
}

.animate-badge-heartbeat {
  animation: badge-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

.made-with-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 30px -10px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
`;

// -------------------------------------------------------------------------
// COMPONENTE
// -------------------------------------------------------------------------
export type MadeWithLoveBadgeProps = {
  name?: string;
  href?: string;
  className?: string;
};

export function MadeWithLoveBadge({
  name = "SiteLabs",
  href = "https://sitelabs.com.mx",
  className,
}: MadeWithLoveBadgeProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "made-with-badge-wrapper made-with-glass-pill px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 no-underline transition-all duration-300 hover:scale-105 hover:bg-white/20",
          className,
        )}
      >
        <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          hecho con
        </span>
        <span className="animate-badge-heartbeat text-sm md:text-base text-red-400">❤️</span>
        <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          por
        </span>
        <span className="text-white font-black text-xs md:text-sm tracking-normal ml-0.5">
          {name}
        </span>
      </a>
    </>
  );
}

export default MadeWithLoveBadge;
