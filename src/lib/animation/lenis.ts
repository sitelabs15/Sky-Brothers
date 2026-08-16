import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenisInstance: Lenis | null = null;
let tickerAdded = false;

function updateRaf(time: number) {
  if (lenisInstance) {
    lenisInstance.raf(time * 1000);
  }
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function initLenis(): Lenis | null {
  if (typeof window === "undefined") return null;

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (isMobile || prefersReduced) {
    destroyLenis();
    return null;
  }

  if (!lenisInstance) {
    lenisInstance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    lenisInstance.on("scroll", () => {
      ScrollTrigger.update();
    });

    if (!tickerAdded) {
      gsap.ticker.add(updateRaf);
      gsap.ticker.lagSmoothing(0);
      tickerAdded = true;
    }
  }

  return lenisInstance;
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
  if (tickerAdded) {
    gsap.ticker.remove(updateRaf);
    tickerAdded = false;
  }
}

export function setupAnchorScrolling() {
  if (typeof window === "undefined") return () => {};

  const handleAnchorClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    const anchor = target?.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;

    const targetEl = document.querySelector(href);
    if (targetEl) {
      e.preventDefault();
      if (lenisInstance) {
        lenisInstance.scrollTo(targetEl as HTMLElement, { offset: -70 });
      } else {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  document.addEventListener("click", handleAnchorClick);
  return () => {
    document.removeEventListener("click", handleAnchorClick);
  };
}
