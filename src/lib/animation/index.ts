import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initLenis, destroyLenis, setupAnchorScrolling, getLenis } from "./lenis";

// Register plugins safely on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface AnimationConfig {
  enableLenis?: boolean;
  enableScrollTrigger?: boolean;
}

export function isReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isMobileViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
}

export function initAnimationSystem(config: AnimationConfig = {}) {
  if (typeof window === "undefined") return () => {};

  const { enableLenis = true, enableScrollTrigger = true } = config;

  if (enableScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    });
  }

  // Setup GSAP MatchMedia for responsive animations
  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
      isMobile: "(max-width: 768px) and (prefers-reduced-motion: no-preference)",
      reduceMotion: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      const { isDesktop, reduceMotion } = context.conditions || {};

      if (isDesktop && enableLenis && !reduceMotion) {
        initLenis();
      } else {
        destroyLenis();
      }
    },
  );

  const cleanupAnchors = setupAnchorScrolling();

  // Return master cleanup function
  return () => {
    cleanupAnchors();
    destroyLenis();
    mm.revert();
    if (enableScrollTrigger) {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    }
  };
}

export function refreshScrollTrigger() {
  if (typeof window !== "undefined") {
    ScrollTrigger.refresh();
  }
}

export { gsap, ScrollTrigger, initLenis, destroyLenis, getLenis };
