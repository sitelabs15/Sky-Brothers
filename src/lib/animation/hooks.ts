import { useEffect, useState } from "react";
import { initAnimationSystem, refreshScrollTrigger, isReducedMotion } from "./index";

export function useAnimationSystem() {
  useEffect(() => {
    const cleanup = initAnimationSystem({
      enableLenis: true,
      enableScrollTrigger: true,
    });

    const handleResize = () => {
      refreshScrollTrigger();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cleanup();
    };
  }, []);
}

export function useScrollTriggerRefresh(dependencies: unknown[] = []) {
  useEffect(() => {
    const timer = setTimeout(() => {
      refreshScrollTrigger();
    }, 100);

    return () => clearTimeout(timer);
  }, dependencies);
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(isReducedMotion());

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReduced(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}
