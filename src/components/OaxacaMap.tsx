import { useState } from "react";
import { cn } from "@/lib/utils";

type Location = {
  id: string;
  name: string;
  sub: string;
  x: number; // percentage from left
  y: number; // percentage from top
  isMain?: boolean;
};

const locations: Location[] = [
  {
    id: "puerto-escondido",
    name: "Puerto Escondido",
    sub: "Costa Occidental",
    x: 18,
    y: 52,
  },
  {
    id: "pochutla",
    name: "Pochutla",
    sub: "Zona Urbana y Enlace",
    x: 48,
    y: 38,
  },
  {
    id: "sm-huatulco",
    name: "Santa María Huatulco",
    sub: "Cabecera Municipal",
    x: 62,
    y: 28,
  },
  {
    id: "bahias-huatulco",
    name: "Bahías de Huatulco",
    sub: "Base Principal Sky Brothers",
    x: 74,
    y: 62,
    isMain: true,
  },
  {
    id: "copalita",
    name: "Copalita",
    sub: "Bocana y Río Copalita",
    x: 88,
    y: 68,
  },
];

export function OaxacaMap() {
  const [activeLoc, setActiveLoc] = useState<string | null>("bahias-huatulco");

  return (
    <div
      data-animate="coverage-map"
      className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] border border-sky-line bg-[#e8f4fa] shadow-sm select-none"
    >
      {/* ── Background Map Vector Illustration ── */}
      <svg
        viewBox="0 0 800 500"
        className="absolute inset-0 h-full w-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Land Gradient */}
          <linearGradient id="land-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3f9fc" />
            <stop offset="60%" stopColor="#e4f1f8" />
            <stop offset="100%" stopColor="#d5eaf5" />
          </linearGradient>

          {/* Ocean Gradient */}
          <linearGradient id="ocean-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#cae6f5" />
            <stop offset="50%" stopColor="#b3dcf1" />
            <stop offset="100%" stopColor="#99ceeb" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="pin-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Land Area (Northern Oaxaca mountains/coast) */}
        <path d="M0,0 L800,0 L800,500 L0,500 Z" fill="url(#land-grad)" />

        {/* Mountain contours (Subtle topography) */}
        <path d="M0,120 Q200,80 400,110 T800,90 L800,0 L0,0 Z" fill="#e2eff6" opacity="0.6" />
        <path d="M0,200 Q220,150 480,180 T800,160 L800,0 L0,0 Z" fill="#d8eaf3" opacity="0.5" />

        {/* 2. Pacific Ocean Area (Coastline curve of Oaxaca) */}
        <path
          d="M-20,320 
             C120,310 180,335 280,370 
             C360,395 440,390 520,380 
             C620,365 700,430 820,440 
             L820,520 L-20,520 Z"
          fill="url(#ocean-grad)"
        />

        {/* Ocean Wave Shoreline Foam Lines */}
        <path
          d="M-20,320 C120,310 180,335 280,370 C360,395 440,390 520,380 C620,365 700,430 820,440"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M-20,332 C120,322 180,347 280,382 C360,407 440,402 520,392 C620,377 700,442 820,452"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeDasharray="8 6"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />

        {/* Gentle ocean water ripple lines */}
        <path
          d="M100,420 Q200,410 300,430 T500,420"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M400,460 Q550,450 700,470"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* 3. Highway 200 Route (Federal Costera connection) */}
        <path
          d="M144,260 
             Q260,240 384,190 
             Q440,165 496,140 
             Q550,220 592,310 
             Q650,330 704,340"
          stroke="#0879ba"
          strokeWidth="3"
          strokeDasharray="6 6"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />

        {/* Ocean Label */}
        <text
          x="340"
          y="460"
          fill="#0879ba"
          fontSize="13"
          fontWeight="600"
          letterSpacing="4"
          opacity="0.55"
        >
          OCÉANO PACÍFICO
        </text>

        {/* Coast Label */}
        <text
          x="40"
          y="60"
          fill="#66737b"
          fontSize="11"
          fontWeight="700"
          letterSpacing="2"
          opacity="0.5"
        >
          COSTA DE OAXACA · COBERTURA SKY BROTHERS
        </text>
      </svg>

      {/* ── Interactive Location Pins ── */}
      {locations.map((loc) => {
        const isSelected = activeLoc === loc.id;
        return (
          <div
            key={loc.id}
            onClick={() => setActiveLoc(loc.id)}
            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
          >
            {/* Pulsing Beacon Ring */}
            <span
              className={cn(
                "absolute -inset-2.5 rounded-full animate-ping pointer-events-none opacity-40",
                loc.isMain ? "bg-sky-primary" : "bg-sky-cyan",
              )}
            />

            {/* Pin Badge Marker */}
            <div
              className={cn(
                "relative flex items-center justify-center rounded-full border-2 transition-all duration-300 shadow-md",
                loc.isMain
                  ? "h-9 w-9 bg-sky-primary border-white text-white scale-110 shadow-[0_6px_20px_rgba(8,121,186,0.5)]"
                  : "h-7 w-7 bg-white border-sky-primary text-sky-primary hover:scale-110 hover:bg-sky-cyan-soft",
                isSelected && "ring-4 ring-sky-cyan/40 scale-125",
              )}
            >
              {loc.isMain ? (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ) : (
                <div className="h-2 w-2 rounded-full bg-sky-primary" />
              )}
            </div>

            {/* Permanent / Hover Pin Label Pill */}
            <div
              className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap rounded-lg border px-2.5 py-1 text-center shadow-md transition-all duration-200 pointer-events-none",
                loc.isMain
                  ? "border-sky-primary/30 bg-sky-primary text-white font-semibold text-[0.78rem]"
                  : "border-sky-line bg-white/95 text-sky-ink font-medium text-[0.74rem] group-hover:scale-105",
                isSelected && !loc.isMain && "border-sky-primary bg-sky-primary text-white",
              )}
            >
              <p className="leading-tight">{loc.name}</p>
              {loc.isMain && (
                <span className="block text-[0.65rem] text-sky-cyan-soft font-normal">
                  ★ Base Principal
                </span>
              )}
            </div>
          </div>
        );
      })}

      {/* Floating Bottom Badge */}
      <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 rounded-full bg-white/95 border border-sky-line px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[0.8rem] font-semibold text-sky-ink">
          Servicio a domicilio en toda la zona
        </span>
      </div>
    </div>
  );
}
