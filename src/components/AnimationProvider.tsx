import { useEffect, type ReactNode } from "react";
import { useAnimationSystem } from "@/lib/animation/hooks";
import { gsap } from "@/lib/animation/index";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initScrollAnimations } from "@/lib/animation/scrollAnimations";

interface AnimationProviderProps {
  children: ReactNode;
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  // Initializes Lenis + base ScrollTrigger config
  useAnimationSystem();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Small delay so DOM is fully painted before measuring
    const timer = setTimeout(() => {
      const mm = gsap.matchMedia();
      let extraCleanup: (() => void) | undefined;

      mm.add(
        {
          isDesktop: "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
          isMobile: "(max-width: 768px) and (prefers-reduced-motion: no-preference)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          extraCleanup =
            initScrollAnimations(context.conditions as Record<string, boolean> | undefined) ??
            undefined;

          return () => {
            extraCleanup?.();
          };
        },
      );

      // Refresh after fonts/images load
      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);

      return () => {
        window.removeEventListener("load", onLoad);
        mm.revert();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
}
