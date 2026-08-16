import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { img } from "@/data/site";

export function Preloader() {
  const [complete, setComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const ringRef = useRef<SVGCircleElement | null>(null);
  const waveRef = useRef<SVGPathElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setComplete(true);
      return;
    }

    // Measure SVG stroke lengths
    const ringLen = ringRef.current?.getTotalLength() ?? 880;
    const waveLen = waveRef.current?.getTotalLength() ?? 600;

    if (ringRef.current) {
      gsap.set(ringRef.current, {
        strokeDasharray: ringLen,
        strokeDashoffset: ringLen,
      });
    }

    if (waveRef.current) {
      gsap.set(waveRef.current, {
        strokeDasharray: waveLen,
        strokeDashoffset: waveLen,
      });
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setComplete(true);
      },
    });

    // 1. Initial setup
    tl.set(containerRef.current, { opacity: 1 });
    if (logoRef.current)
      gsap.set(logoRef.current, { opacity: 0, scale: 0.82, filter: "blur(4px)" });
    if (textRef.current) gsap.set(textRef.current, { opacity: 0, y: 8 });

    // 2. Draw circular border ring and wave stroke
    if (ringRef.current) {
      tl.to(ringRef.current, {
        strokeDashoffset: 0,
        duration: 1.1,
        ease: "power2.inOut",
      });
    }

    if (waveRef.current) {
      tl.to(
        waveRef.current,
        {
          strokeDashoffset: 0,
          duration: 0.9,
          ease: "power2.inOut",
        },
        "-=0.7",
      );
    }

    // 3. Logo blooms and reveals smoothly in sync
    if (logoRef.current) {
      tl.to(
        logoRef.current,
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "back.out(1.4)",
        },
        "-=0.4",
      );
    }

    // 4. Subtitle tag fades in
    if (textRef.current) {
      tl.to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
        },
        "-=0.3",
      );
    }

    // Brief pause to appreciate the logo
    tl.to({}, { duration: 0.35 });

    // 5. Smooth curtain slide-up exit
    if (containerRef.current) {
      tl.to(containerRef.current, {
        yPercent: -100,
        opacity: 0.95,
        duration: 0.75,
        ease: "power3.inOut",
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  if (complete) return null;

  return (
    <div
      ref={containerRef}
      aria-label="Cargando Sky Brothers"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f8fbfe] overflow-hidden"
    >
      {/* Background ambient water glow */}
      <div className="absolute h-[380px] w-[380px] rounded-full bg-sky-cyan/15 blur-[80px] pointer-events-none" />

      <div className="relative flex flex-col items-center">
        {/* Animated SVG drawing canvas */}
        <div className="relative h-[190px] w-[190px] md:h-[220px] md:w-[220px] grid place-items-center">
          <svg
            viewBox="0 0 240 240"
            className="absolute inset-0 h-full w-full pointer-events-none"
            fill="none"
          >
            <defs>
              <linearGradient id="preloader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0879ba" />
                <stop offset="60%" stopColor="#30a8d8" />
                <stop offset="100%" stopColor="#0879ba" />
              </linearGradient>
            </defs>

            {/* Circular Drawing Ring */}
            <circle
              ref={ringRef}
              cx="120"
              cy="120"
              r="104"
              stroke="url(#preloader-grad)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Wave Drawing Underneath */}
            <path
              ref={waveRef}
              d="M36,130 C65,115 95,145 120,130 C145,115 175,145 204,130"
              stroke="#30a8d8"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.8"
            />
          </svg>

          {/* Real Hand-Drawn Logo Image that fills into the ring */}
          <img
            ref={logoRef}
            src={img.logoAzul}
            alt="Sky Brothers"
            width={160}
            height={80}
            className="relative z-10 w-[140px] md:w-[160px] object-contain drop-shadow-[0_8px_20px_rgba(8,121,186,0.18)]"
          />
        </div>

        {/* Brand Tagline */}
        <div ref={textRef} className="mt-4 flex flex-col items-center gap-1.5">
          <p className="hand text-[1.15rem] font-semibold tracking-wider text-sky-primary">
            Limpieza y Desinfección Profunda
          </p>
          <span className="text-[0.8rem] font-medium tracking-[0.2em] text-sky-muted uppercase">
            Huatulco, Oaxaca
          </span>
        </div>
      </div>
    </div>
  );
}
