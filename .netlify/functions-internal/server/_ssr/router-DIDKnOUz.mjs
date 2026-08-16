import { i as __toESM } from "../_runtime.mjs";
import {
  c as require_react,
  s as require_jsx_runtime,
} from "../_libs/@radix-ui/react-accordion+[...].mjs";
import {
  c as HeadContent,
  d as Outlet,
  f as lazyRouteComponent,
  g as useRouter,
  h as Link,
  m as createRootRouteWithContext,
  p as createFileRoute,
  s as Scripts,
  u as createRouter,
} from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DIDKnOUz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CaFPAPwN.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  const stack = error instanceof Error ? error.stack : void 0;
  window.__lovableReportRuntimeError?.({
    message,
    ...(stack !== void 0 && { stack }),
    filename: window.location.pathname,
  });
}
var lenisInstance = null;
var tickerAdded = false;
function updateRaf(time) {
  if (lenisInstance) lenisInstance.raf(time * 1e3);
}
function initLenis() {
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
      gsapWithCSS.ticker.add(updateRaf);
      gsapWithCSS.ticker.lagSmoothing(0);
      tickerAdded = true;
    }
  }
  return lenisInstance;
}
function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
  if (tickerAdded) {
    gsapWithCSS.ticker.remove(updateRaf);
    tickerAdded = false;
  }
}
function setupAnchorScrolling() {
  if (typeof window === "undefined") return () => {};
  const handleAnchorClick = (e) => {
    const anchor = e.target?.closest('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const targetEl = document.querySelector(href);
    if (targetEl) {
      e.preventDefault();
      if (lenisInstance) lenisInstance.scrollTo(targetEl, { offset: -70 });
      else targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };
  document.addEventListener("click", handleAnchorClick);
  return () => {
    document.removeEventListener("click", handleAnchorClick);
  };
}
if (typeof window !== "undefined") gsapWithCSS.registerPlugin(ScrollTrigger);
function initAnimationSystem(config = {}) {
  if (typeof window === "undefined") return () => {};
  const { enableLenis = true, enableScrollTrigger = true } = config;
  if (enableScrollTrigger) {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    });
  }
  const mm = gsapWithCSS.matchMedia();
  mm.add(
    {
      isDesktop: "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
      isMobile: "(max-width: 768px) and (prefers-reduced-motion: no-preference)",
      reduceMotion: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      const { isDesktop, reduceMotion } = context.conditions || {};
      if (isDesktop && enableLenis && !reduceMotion) initLenis();
      else destroyLenis();
    },
  );
  const cleanupAnchors = setupAnchorScrolling();
  return () => {
    cleanupAnchors();
    destroyLenis();
    mm.revert();
    if (enableScrollTrigger) ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}
function refreshScrollTrigger() {
  if (typeof window !== "undefined") ScrollTrigger.refresh();
}
function useAnimationSystem() {
  (0, import_react.useEffect)(() => {
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
/**
 * scrollAnimations.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Sky Brothers — Master Motion Suite & Scroll System
 *
 * Full Hierarchy:
 *   Level 1 (Major WOW Moments):
 *     - Results Showcase (Before/After Expansion & Ambient Transition)
 *     - Cinematic Blue Brand Statement (Overlap Transition & Emblem Pop)
 *   Level 2 (Strong Supporting Moments):
 *     - Process Wave Line Drawing & Checkpoint Step Activation
 *     - Final WhatsApp Booking CTA (Card scrub & single attention pulse)
 *   Level 3 (Moderate Spatial Depth):
 *     - Services Editorial Cards Entrance
 *     - Equipment / Value Section (Opposing cross-drift & photo depth)
 *     - Coverage / Huatulco Service (Zone pills & opposing drift)
 *   Level 4 (Restrained & Functional):
 *     - Header & Nav Directional Compact
 *     - Hero Parallax Exit
 *     - TrustStrip Entrance & Subtle Drift
 *     - Clean Accessible FAQ Arrival & Accordion Nudge
 *     - Calm, Stable Footer Staged Reveal
 */
var TOKENS = {
  easeReveal: "power4.out",
  easeCard: "power3.out",
  easeUI: "power2.out",
  easeSpring: "back.out(1.4)",
  durFast: 0.45,
  durNormal: 0.7,
  durLong: 0.95,
  staggerFast: 0.06,
  staggerNormal: 0.09,
};
function q(selector, scope) {
  const root = scope ?? document;
  return Array.from(root.querySelectorAll(selector));
}
function qs(selector, scope) {
  return (scope ?? document).querySelector(selector);
}
function animateNav() {
  const header = qs("[data-section='header']");
  if (!header) return;
  gsapWithCSS.from(header, {
    y: -20,
    opacity: 0,
    duration: TOKENS.durNormal,
    ease: TOKENS.easeCard,
    clearProps: "opacity,transform",
  });
}
function animateNavScroll() {
  const header = qs("[data-section='header']");
  if (!header) return;
  let lastDir = 1;
  ScrollTrigger.create({
    start: "top -60",
    end: "max",
    onUpdate(self) {
      const dir = self.direction;
      if (dir === lastDir) return;
      lastDir = dir;
      if (dir === 1)
        gsapWithCSS.to(header, {
          y: -8,
          opacity: 0.92,
          duration: TOKENS.durFast,
          ease: TOKENS.easeUI,
        });
      else
        gsapWithCSS.to(header, {
          y: 0,
          opacity: 1,
          duration: TOKENS.durFast,
          ease: TOKENS.easeUI,
        });
    },
  });
}
function animateHeroParallax() {
  const hero = qs("[data-section='hero']");
  if (!hero) return;
  const textGroup = qs("[data-hero='text']", hero);
  const visual = qs("[data-hero='visual']", hero);
  if (textGroup)
    gsapWithCSS.to(textGroup, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  if (visual)
    gsapWithCSS.to(visual, {
      y: 18,
      scale: 0.985,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 1.4,
      },
    });
}
function animateTrustStrip() {
  const strip = qs("[data-section='trust-strip']");
  if (!strip) return;
  const items = q("[data-animate='trust-item']", strip);
  const icons = q("[data-animate='trust-icon']", strip);
  if (!items.length) return;
  gsapWithCSS.set(items, {
    opacity: 0,
    y: 15,
    scale: 0.96,
  });
  gsapWithCSS.set(icons, {
    scale: 0.85,
    rotation: -6,
  });
  const tl = gsapWithCSS.timeline({
    scrollTrigger: {
      trigger: strip,
      start: "top 82%",
      once: true,
    },
  });
  tl.to(items, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: TOKENS.durNormal,
    ease: TOKENS.easeCard,
    stagger: TOKENS.staggerNormal,
  });
  tl.to(
    icons,
    {
      scale: 1,
      rotation: 0,
      duration: 0.5,
      ease: TOKENS.easeSpring,
      stagger: TOKENS.staggerNormal,
    },
    "<0.05",
  );
}
function animateTrustStripDrift() {
  const strip = qs("[data-section='trust-strip']");
  if (!strip) return;
  const inner = qs("[data-animate='trust-inner']", strip);
  if (!inner) return;
  gsapWithCSS.to(inner, {
    xPercent: -1.5,
    ease: "none",
    scrollTrigger: {
      trigger: strip,
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    },
  });
}
function animateServicesHeading() {
  const section = qs("[data-section='services']");
  if (!section) return;
  const eyebrow = qs("[data-animate='services-eyebrow']", section);
  const headingLines = q("[data-animate='services-line']", section);
  const paragraph = qs("[data-animate='services-para']", section);
  if (!headingLines.length) return;
  if (eyebrow)
    gsapWithCSS.set(eyebrow, {
      opacity: 0,
      y: 10,
    });
  gsapWithCSS.set(headingLines, { yPercent: 105 });
  if (paragraph)
    gsapWithCSS.set(paragraph, {
      opacity: 0,
      y: 18,
    });
  const tl = gsapWithCSS.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 78%",
      once: true,
    },
  });
  if (eyebrow)
    tl.to(eyebrow, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: TOKENS.easeCard,
    });
  tl.to(
    headingLines,
    {
      yPercent: 0,
      duration: TOKENS.durLong,
      ease: TOKENS.easeReveal,
      stagger: TOKENS.staggerNormal,
    },
    eyebrow ? "-=0.3" : "0",
  );
  if (paragraph)
    tl.to(
      paragraph,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: TOKENS.easeCard,
      },
      "-=0.4",
    );
}
var SERVICE_CARD_VARIANTS = [
  {
    y: 55,
    rotation: -1.5,
    scale: 0.96,
  },
  {
    y: 35,
    rotation: 1,
    scale: 0.95,
  },
  {
    y: 65,
    rotation: -0.8,
    scale: 0.97,
  },
];
function animateServiceCards(isDesktop) {
  const section = qs("[data-section='services']");
  if (!section) return;
  const cards = q("[data-animate='service-card']", section);
  if (!cards.length) return;
  if (isDesktop) {
    cards.forEach((card, i) => {
      const v = SERVICE_CARD_VARIANTS[i % SERVICE_CARD_VARIANTS.length];
      gsapWithCSS.set(card, {
        opacity: 0,
        y: v.y,
        rotation: v.rotation,
        scale: v.scale,
        transformOrigin: "center bottom",
      });
    });
    gsapWithCSS.to(cards, {
      opacity: 1,
      y: 0,
      rotation: 0,
      scale: 1,
      duration: 0.9,
      ease: TOKENS.easeCard,
      stagger: 0.09,
      scrollTrigger: {
        trigger: section,
        start: "top 78%",
        once: true,
      },
      onStart() {
        section.style.overflow = "hidden";
      },
      onComplete() {
        section.style.overflow = "";
      },
    });
  } else {
    gsapWithCSS.set(cards, {
      opacity: 0,
      y: 25,
      scale: 0.98,
    });
    gsapWithCSS.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: TOKENS.easeCard,
      stagger: 0.07,
      scrollTrigger: {
        trigger: section,
        start: "top 82%",
        once: true,
      },
    });
  }
}
function animateResultsShowcase(isDesktop) {
  const baSection = qs("[data-section='before-after']");
  const gallerySection = qs("[data-section='results-gallery']");
  if (!baSection) return;
  if (isDesktop)
    ScrollTrigger.create({
      trigger: baSection,
      start: "top 80%",
      endTrigger: gallerySection ?? baSection,
      end: "bottom 30%",
      onEnter: () => {
        gsapWithCSS.to([baSection, gallerySection].filter(Boolean), {
          backgroundColor: "#f4f8fa",
          duration: 0.8,
          ease: TOKENS.easeUI,
        });
      },
      onLeave: () => {
        gsapWithCSS.to([baSection, gallerySection].filter(Boolean), {
          backgroundColor: "#ffffff",
          duration: 0.7,
          ease: TOKENS.easeUI,
        });
      },
      onEnterBack: () => {
        gsapWithCSS.to([baSection, gallerySection].filter(Boolean), {
          backgroundColor: "#f4f8fa",
          duration: 0.7,
          ease: TOKENS.easeUI,
        });
      },
      onLeaveBack: () => {
        gsapWithCSS.to([baSection, gallerySection].filter(Boolean), {
          backgroundColor: "#ffffff",
          duration: 0.7,
          ease: TOKENS.easeUI,
        });
      },
    });
  const baEyebrow = qs("[data-animate='ba-eyebrow']", baSection);
  const baLines = q("[data-animate='ba-line']", baSection);
  const baPara = qs("[data-animate='ba-para']", baSection);
  const baTabs = q("[data-animate='ba-tab']", baSection);
  const baModeGroup = qs("[data-animate='ba-mode-group']", baSection);
  const introTl = gsapWithCSS.timeline({
    scrollTrigger: {
      trigger: baSection,
      start: "top 78%",
      once: true,
    },
  });
  if (baEyebrow) {
    gsapWithCSS.set(baEyebrow, {
      opacity: 0,
      y: 12,
    });
    introTl.to(baEyebrow, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: TOKENS.easeCard,
    });
  }
  if (baLines.length) {
    gsapWithCSS.set(baLines, { yPercent: 110 });
    introTl.to(
      baLines,
      {
        yPercent: 0,
        duration: TOKENS.durLong,
        ease: TOKENS.easeReveal,
        stagger: TOKENS.staggerNormal,
      },
      baEyebrow ? "-=0.3" : "0",
    );
  }
  if (baPara) {
    gsapWithCSS.set(baPara, {
      opacity: 0,
      y: 18,
    });
    introTl.to(
      baPara,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: TOKENS.easeCard,
      },
      "-=0.4",
    );
  }
  if (baModeGroup) {
    gsapWithCSS.set(baModeGroup, {
      opacity: 0,
      y: 12,
    });
    introTl.to(
      baModeGroup,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: TOKENS.easeCard,
      },
      "-=0.35",
    );
  }
  if (baTabs.length) {
    gsapWithCSS.set(baTabs, {
      opacity: 0,
      scale: 0.94,
      y: 8,
    });
    introTl.to(
      baTabs,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.45,
        ease: TOKENS.easeUI,
        stagger: 0.04,
      },
      "-=0.3",
    );
  }
  const mainVisual = qs("[data-animate='ba-visual']", baSection);
  const parallaxImgs = q("[data-animate='ba-parallax-img']", baSection);
  if (mainVisual) {
    if (isDesktop) {
      gsapWithCSS.fromTo(
        mainVisual,
        {
          scale: 0.92,
          opacity: 0.92,
          y: 30,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          ease: TOKENS.easeUI,
          scrollTrigger: {
            trigger: mainVisual,
            start: "top 90%",
            end: "center 48%",
            scrub: 0.9,
          },
        },
      );
      if (parallaxImgs.length)
        gsapWithCSS.fromTo(
          parallaxImgs,
          {
            scale: 1.05,
            yPercent: -3,
          },
          {
            yPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: mainVisual,
              start: "top 90%",
              end: "bottom 10%",
              scrub: 1.1,
            },
          },
        );
    } else
      gsapWithCSS.from(mainVisual, {
        opacity: 0,
        y: 25,
        scale: 0.98,
        duration: 0.8,
        ease: TOKENS.easeCard,
        scrollTrigger: {
          trigger: mainVisual,
          start: "top 82%",
          once: true,
        },
      });
  }
  if (!gallerySection) return;
  const galEyebrow = qs("[data-animate='gallery-eyebrow']", gallerySection);
  const galLines = q("[data-animate='gallery-line']", gallerySection);
  const galPara = qs("[data-animate='gallery-para']", gallerySection);
  const galPills = q("[data-animate='gallery-pill']", gallerySection);
  const galItems = q("[data-animate='gallery-item']", gallerySection);
  const galIntroTl = gsapWithCSS.timeline({
    scrollTrigger: {
      trigger: gallerySection,
      start: "top 78%",
      once: true,
    },
  });
  if (galEyebrow) {
    gsapWithCSS.set(galEyebrow, {
      opacity: 0,
      y: 12,
    });
    galIntroTl.to(galEyebrow, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: TOKENS.easeCard,
    });
  }
  if (galLines.length) {
    gsapWithCSS.set(galLines, { yPercent: 110 });
    galIntroTl.to(
      galLines,
      {
        yPercent: 0,
        duration: TOKENS.durLong,
        ease: TOKENS.easeReveal,
        stagger: TOKENS.staggerNormal,
      },
      galEyebrow ? "-=0.3" : "0",
    );
  }
  if (galPara) {
    gsapWithCSS.set(galPara, {
      opacity: 0,
      y: 18,
    });
    galIntroTl.to(
      galPara,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: TOKENS.easeCard,
      },
      "-=0.4",
    );
  }
  if (galPills.length) {
    gsapWithCSS.set(galPills, {
      opacity: 0,
      scale: 0.94,
      y: 8,
    });
    galIntroTl.to(
      galPills,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.45,
        ease: TOKENS.easeUI,
        stagger: 0.04,
      },
      "-=0.3",
    );
  }
  const GALLERY_VARIANTS = [
    {
      y: 45,
      x: -10,
      rotation: -1,
      scale: 0.96,
    },
    {
      y: 60,
      x: 6,
      rotation: 0.8,
      scale: 0.95,
    },
    {
      y: 35,
      x: 4,
      rotation: -0.5,
      scale: 0.97,
    },
  ];
  if (galItems.length) {
    if (isDesktop) {
      galItems.forEach((item, i) => {
        const v = GALLERY_VARIANTS[i % GALLERY_VARIANTS.length];
        gsapWithCSS.set(item, {
          opacity: 0,
          y: v.y,
          x: v.x,
          rotation: v.rotation,
          scale: v.scale,
          transformOrigin: "center bottom",
        });
      });
      gsapWithCSS.to(galItems, {
        opacity: 1,
        y: 0,
        x: 0,
        rotation: 0,
        scale: 1,
        duration: 0.9,
        ease: TOKENS.easeCard,
        stagger: 0.07,
        scrollTrigger: {
          trigger: gallerySection,
          start: "top 74%",
          once: true,
        },
      });
      galItems.forEach((item, i) => {
        const drift = (i % 2 === 0 ? 1 : -1) * 18;
        gsapWithCSS.to(item, {
          y: drift,
          ease: "none",
          scrollTrigger: {
            trigger: gallerySection,
            start: "top center",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      });
    } else {
      gsapWithCSS.set(galItems, {
        opacity: 0,
        y: 22,
        scale: 0.98,
      });
      gsapWithCSS.to(galItems, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: TOKENS.easeCard,
        stagger: 0.06,
        scrollTrigger: {
          trigger: gallerySection,
          start: "top 80%",
          once: true,
        },
      });
    }
  }
}
function animateProcessStory(isDesktop) {
  const section = qs("[data-section='process']");
  if (!section) return;
  const eyebrow = qs("[data-animate='process-eyebrow']", section);
  const headingLines = q("[data-animate='process-line-text']", section);
  const container = qs("[data-animate='process-container']", section);
  const line = qs("[data-animate='process-line']", section);
  const steps = q("[data-animate='process-step']", section);
  const introTl = gsapWithCSS.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 78%",
      once: true,
    },
  });
  if (eyebrow) {
    gsapWithCSS.set(eyebrow, {
      opacity: 0,
      y: 12,
    });
    introTl.to(eyebrow, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: TOKENS.easeCard,
    });
  }
  if (headingLines.length) {
    gsapWithCSS.set(headingLines, { yPercent: 110 });
    introTl.to(
      headingLines,
      {
        yPercent: 0,
        duration: TOKENS.durLong,
        ease: TOKENS.easeReveal,
        stagger: TOKENS.staggerNormal,
      },
      eyebrow ? "-=0.3" : "0",
    );
  }
  if (!steps.length) return;
  if (isDesktop) {
    if (line)
      gsapWithCSS.set(line, {
        strokeDasharray: 1,
        strokeDashoffset: 1,
      });
    steps.forEach((step) => {
      const marker = qs("[data-animate='process-marker']", step);
      const num = qs("[data-animate='process-num']", step);
      const title = qs("[data-animate='process-title']", step);
      const desc = qs("[data-animate='process-desc']", step);
      if (marker)
        gsapWithCSS.set(marker, {
          scale: 0.72,
          opacity: 0.5,
        });
      if (num)
        gsapWithCSS.set(num, {
          opacity: 0,
          y: 12,
          scale: 0.92,
        });
      if (title)
        gsapWithCSS.set(title, {
          yPercent: 105,
          opacity: 0,
        });
      if (desc)
        gsapWithCSS.set(desc, {
          opacity: 0,
          y: 10,
        });
    });
    const processTl = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: container ?? section,
        start: "top 70%",
        end: "bottom 50%",
        scrub: 0.85,
      },
    });
    if (container)
      processTl.fromTo(
        container,
        { y: 10 },
        {
          y: -8,
          ease: "none",
          duration: 1,
        },
        0,
      );
    if (line)
      processTl.fromTo(
        line,
        { strokeDashoffset: 1 },
        {
          strokeDashoffset: 0,
          ease: "none",
          duration: 1,
        },
        0,
      );
    const stepTimings = [0.12, 0.46, 0.78];
    steps.forEach((step, i) => {
      const startTime = stepTimings[i] ?? i * 0.35;
      const marker = qs("[data-animate='process-marker']", step);
      const num = qs("[data-animate='process-num']", step);
      const title = qs("[data-animate='process-title']", step);
      const desc = qs("[data-animate='process-desc']", step);
      if (marker)
        processTl.to(
          marker,
          {
            scale: 1,
            opacity: 1,
            borderColor: "#0879ba",
            boxShadow: "0 10px 28px -6px rgba(8,121,186,0.35)",
            duration: 0.16,
            ease: TOKENS.easeSpring,
          },
          startTime,
        );
      if (num)
        processTl.to(
          num,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.14,
            ease: TOKENS.easeCard,
          },
          startTime + 0.02,
        );
      if (title)
        processTl.to(
          title,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.18,
            ease: TOKENS.easeReveal,
          },
          startTime + 0.04,
        );
      if (desc)
        processTl.to(
          desc,
          {
            opacity: 1,
            y: 0,
            duration: 0.16,
            ease: TOKENS.easeCard,
          },
          startTime + 0.06,
        );
    });
  } else
    steps.forEach((step) => {
      const marker = qs("[data-animate='process-marker']", step);
      const num = qs("[data-animate='process-num']", step);
      const title = qs("[data-animate='process-title']", step);
      const desc = qs("[data-animate='process-desc']", step);
      const stepTl = gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: step,
          start: "top 82%",
          once: true,
        },
      });
      if (marker) {
        gsapWithCSS.set(marker, {
          scale: 0.78,
          opacity: 0,
        });
        stepTl.to(marker, {
          scale: 1,
          opacity: 1,
          borderColor: "#0879ba",
          duration: 0.5,
          ease: TOKENS.easeSpring,
        });
      }
      if (num) {
        gsapWithCSS.set(num, {
          opacity: 0,
          y: 10,
        });
        stepTl.to(
          num,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: TOKENS.easeCard,
          },
          "-=0.3",
        );
      }
      if (title) {
        gsapWithCSS.set(title, {
          yPercent: 100,
          opacity: 0,
        });
        stepTl.to(
          title,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
            ease: TOKENS.easeCard,
          },
          "-=0.35",
        );
      }
      if (desc) {
        gsapWithCSS.set(desc, {
          opacity: 0,
          y: 8,
        });
        stepTl.to(
          desc,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: TOKENS.easeCard,
          },
          "-=0.35",
        );
      }
    });
}
function animateEquipmentAndBlue(isDesktop) {
  const equipSection = qs("[data-section='value']");
  const blueSection = qs("[data-section='brand-break']");
  if (!equipSection) return;
  const imgWrap = qs("[data-animate='equipment-image-wrap']", equipSection);
  const internalImg = qs("[data-animate='equipment-img']", equipSection);
  const subbadge = qs("[data-animate='equipment-subbadge']", equipSection);
  const eyebrow = qs("[data-animate='equipment-eyebrow']", equipSection);
  const lines = q("[data-animate='equipment-line']", equipSection);
  const bullets = q("[data-animate='equipment-bullet']", equipSection);
  const checks = q("[data-animate='equipment-check']", equipSection);
  const cta = qs("[data-animate='equipment-cta']", equipSection);
  const imgCol = qs("[data-animate='equipment-image-col']", equipSection);
  const contentCol = qs("[data-animate='equipment-content-col']", equipSection);
  const equipTl = gsapWithCSS.timeline({
    scrollTrigger: {
      trigger: equipSection,
      start: "top 78%",
      once: true,
    },
  });
  if (isDesktop) {
    if (imgWrap) {
      gsapWithCSS.set(imgWrap, {
        opacity: 0,
        x: -35,
        y: 18,
        rotation: -1.2,
        scale: 0.96,
      });
      equipTl.to(imgWrap, {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 1,
        ease: TOKENS.easeCard,
      });
    }
    if (subbadge) {
      gsapWithCSS.set(subbadge, {
        opacity: 0,
        y: 12,
      });
      equipTl.to(
        subbadge,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: TOKENS.easeCard,
        },
        "-=0.6",
      );
    }
  } else if (imgWrap) {
    gsapWithCSS.set(imgWrap, {
      opacity: 0,
      y: 22,
      scale: 0.98,
    });
    equipTl.to(imgWrap, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.75,
      ease: TOKENS.easeCard,
    });
  }
  if (eyebrow) {
    gsapWithCSS.set(eyebrow, {
      opacity: 0,
      y: 12,
    });
    equipTl.to(
      eyebrow,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: TOKENS.easeCard,
      },
      isDesktop ? "-=0.7" : "-=0.4",
    );
  }
  if (lines.length) {
    gsapWithCSS.set(lines, { yPercent: 110 });
    equipTl.to(
      lines,
      {
        yPercent: 0,
        duration: TOKENS.durLong,
        ease: TOKENS.easeReveal,
        stagger: TOKENS.staggerNormal,
      },
      "-=0.4",
    );
  }
  if (bullets.length) {
    gsapWithCSS.set(bullets, {
      opacity: 0,
      x: 12,
      y: 6,
    });
    if (checks.length)
      gsapWithCSS.set(checks, {
        scale: 0.82,
        rotation: -4,
      });
    equipTl.to(
      bullets,
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: TOKENS.easeUI,
        stagger: 0.08,
      },
      "-=0.5",
    );
    if (checks.length)
      equipTl.to(
        checks,
        {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: TOKENS.easeSpring,
          stagger: 0.08,
        },
        "<",
      );
  }
  if (cta) {
    gsapWithCSS.set(cta, {
      opacity: 0,
      y: 10,
      scale: 0.97,
    });
    equipTl.to(
      cta,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        ease: TOKENS.easeCard,
      },
      "-=0.3",
    );
  }
  if (isDesktop && imgCol && contentCol) {
    if (internalImg)
      gsapWithCSS.fromTo(
        internalImg,
        {
          scale: 1.04,
          yPercent: -2.5,
        },
        {
          yPercent: 2.5,
          ease: "none",
          scrollTrigger: {
            trigger: equipSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        },
      );
    gsapWithCSS.fromTo(
      imgCol,
      { y: 12 },
      {
        y: -16,
        ease: "none",
        scrollTrigger: {
          trigger: equipSection,
          start: "top 70%",
          end: "bottom top",
          scrub: 1.1,
        },
      },
    );
    gsapWithCSS.fromTo(
      contentCol,
      { y: -4 },
      {
        y: 12,
        ease: "none",
        scrollTrigger: {
          trigger: equipSection,
          start: "top 70%",
          end: "bottom top",
          scrub: 1.1,
        },
      },
    );
  }
  if (!blueSection) return;
  const logo = qs("[data-animate='blue-logo']", blueSection);
  const subheading = qs("[data-animate='blue-subheading']", blueSection);
  const blueLines = q("[data-animate='blue-line']", blueSection);
  const ctaRow = qs("[data-animate='blue-cta-row']", blueSection);
  const wave = qs("[data-animate='blue-wave']", blueSection);
  const contentGroup = qs("[data-animate='blue-content-group']", blueSection);
  if (isDesktop) {
    gsapWithCSS.fromTo(
      equipSection,
      {
        y: 0,
        scale: 1,
      },
      {
        y: -25,
        scale: 0.988,
        ease: "none",
        scrollTrigger: {
          trigger: blueSection,
          start: "top 95%",
          end: "top 20%",
          scrub: 0.9,
        },
      },
    );
    gsapWithCSS.fromTo(
      blueSection,
      {
        yPercent: 8,
        scale: 0.975,
      },
      {
        yPercent: 0,
        scale: 1,
        ease: TOKENS.easeUI,
        scrollTrigger: {
          trigger: blueSection,
          start: "top 95%",
          end: "top 20%",
          scrub: 0.9,
        },
      },
    );
    if (wave)
      gsapWithCSS.fromTo(
        wave,
        {
          xPercent: -2,
          yPercent: -2,
        },
        {
          xPercent: 2,
          yPercent: 2,
          ease: "none",
          scrollTrigger: {
            trigger: blueSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        },
      );
    const blueTl = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: blueSection,
        start: "top 62%",
        once: true,
      },
    });
    if (logo) {
      gsapWithCSS.set(logo, {
        opacity: 0,
        scale: 0.7,
        rotation: -10,
      });
      blueTl.to(logo, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.85,
        ease: TOKENS.easeSpring,
      });
    }
    if (subheading) {
      gsapWithCSS.set(subheading, {
        opacity: 0,
        y: 12,
      });
      blueTl.to(
        subheading,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: TOKENS.easeCard,
        },
        "-=0.6",
      );
    }
    if (blueLines.length) {
      gsapWithCSS.set(blueLines, {
        yPercent: 115,
        skewY: 1.5,
      });
      blueTl.to(
        blueLines,
        {
          yPercent: 0,
          skewY: 0,
          duration: TOKENS.durLong,
          ease: TOKENS.easeReveal,
          stagger: 0.11,
        },
        "-=0.4",
      );
    }
    if (ctaRow) {
      gsapWithCSS.set(ctaRow, {
        opacity: 0,
        y: 12,
        scale: 0.97,
      });
      blueTl.to(
        ctaRow,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: TOKENS.easeCard,
        },
        "-=0.4",
      );
    }
    if (contentGroup)
      gsapWithCSS.to(contentGroup, {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: blueSection,
          start: "bottom 85%",
          end: "bottom 20%",
          scrub: 1.1,
        },
      });
  } else {
    gsapWithCSS.from(blueSection, {
      y: 25,
      scale: 0.98,
      duration: 0.75,
      ease: TOKENS.easeCard,
      scrollTrigger: {
        trigger: blueSection,
        start: "top 82%",
        once: true,
      },
    });
    const blueMobTl = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: blueSection,
        start: "top 76%",
        once: true,
      },
    });
    if (logo) {
      gsapWithCSS.set(logo, {
        opacity: 0,
        scale: 0.85,
        rotation: -3,
      });
      blueMobTl.to(logo, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.65,
        ease: TOKENS.easeSpring,
      });
    }
    if (subheading) {
      gsapWithCSS.set(subheading, {
        opacity: 0,
        y: 10,
      });
      blueMobTl.to(
        subheading,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: TOKENS.easeCard,
        },
        "-=0.4",
      );
    }
    if (blueLines.length) {
      gsapWithCSS.set(blueLines, { yPercent: 110 });
      blueMobTl.to(
        blueLines,
        {
          yPercent: 0,
          duration: 0.8,
          ease: TOKENS.easeReveal,
          stagger: 0.09,
        },
        "-=0.3",
      );
    }
    if (ctaRow) {
      gsapWithCSS.set(ctaRow, {
        opacity: 0,
        y: 10,
      });
      blueMobTl.to(
        ctaRow,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: TOKENS.easeCard,
        },
        "-=0.3",
      );
    }
  }
}
function animateFinalSections(isDesktop) {
  const coverageSection = qs("[data-section='coverage']");
  if (coverageSection) {
    const textCol = qs("[data-animate='coverage-text-col']", coverageSection);
    const visualCol = qs("[data-animate='coverage-visual-col']", coverageSection);
    const eyebrow = qs("[data-animate='coverage-eyebrow']", coverageSection);
    const lines = q("[data-animate='coverage-line']", coverageSection);
    const para = qs("[data-animate='coverage-para']", coverageSection);
    const cta = qs("[data-animate='coverage-cta']", coverageSection);
    const card = qs("[data-animate='coverage-card']", coverageSection);
    const pills = q("[data-animate='coverage-pill']", coverageSection);
    const img = qs("[data-animate='coverage-img']", coverageSection);
    if (isDesktop)
      gsapWithCSS.fromTo(
        coverageSection,
        {
          yPercent: 4,
          scale: 0.988,
        },
        {
          yPercent: 0,
          scale: 1,
          ease: TOKENS.easeUI,
          scrollTrigger: {
            trigger: coverageSection,
            start: "top 95%",
            end: "top 35%",
            scrub: 0.9,
          },
        },
      );
    const covTl = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: coverageSection,
        start: "top 78%",
        once: true,
      },
    });
    if (eyebrow) {
      gsapWithCSS.set(eyebrow, {
        opacity: 0,
        y: 10,
      });
      covTl.to(eyebrow, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: TOKENS.easeCard,
      });
    }
    if (lines.length) {
      gsapWithCSS.set(lines, { yPercent: 105 });
      covTl.to(
        lines,
        {
          yPercent: 0,
          duration: TOKENS.durLong,
          ease: TOKENS.easeReveal,
          stagger: 0.08,
        },
        eyebrow ? "-=0.35" : "0",
      );
    }
    if (para) {
      gsapWithCSS.set(para, {
        opacity: 0,
        y: 15,
      });
      covTl.to(
        para,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: TOKENS.easeCard,
        },
        "-=0.45",
      );
    }
    if (cta) {
      gsapWithCSS.set(cta, {
        opacity: 0,
        y: 10,
        scale: 0.97,
      });
      covTl.to(
        cta,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: TOKENS.easeCard,
        },
        "-=0.35",
      );
    }
    if (card) {
      if (isDesktop) {
        gsapWithCSS.set(card, {
          opacity: 0,
          y: 35,
          x: 15,
          scale: 0.96,
        });
        covTl.to(
          card,
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 1,
            ease: TOKENS.easeCard,
          },
          "-=0.7",
        );
      } else {
        gsapWithCSS.set(card, {
          opacity: 0,
          y: 20,
          scale: 0.98,
        });
        covTl.to(
          card,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: TOKENS.easeCard,
          },
          "-=0.4",
        );
      }
    }
    if (pills.length) {
      gsapWithCSS.set(pills, {
        opacity: 0,
        scale: 0.92,
        y: 6,
      });
      covTl.to(
        pills,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: TOKENS.easeUI,
          stagger: 0.05,
        },
        "-=0.5",
      );
    }
    if (isDesktop && textCol && visualCol) {
      if (img)
        gsapWithCSS.fromTo(
          img,
          {
            scale: 1.04,
            yPercent: -2.5,
          },
          {
            yPercent: 2.5,
            ease: "none",
            scrollTrigger: {
              trigger: coverageSection,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
      gsapWithCSS.fromTo(
        textCol,
        { y: 8 },
        {
          y: -12,
          ease: "none",
          scrollTrigger: {
            trigger: coverageSection,
            start: "top 70%",
            end: "bottom top",
            scrub: 1.1,
          },
        },
      );
      gsapWithCSS.fromTo(
        visualCol,
        { y: -8 },
        {
          y: 16,
          ease: "none",
          scrollTrigger: {
            trigger: coverageSection,
            start: "top 70%",
            end: "bottom top",
            scrub: 1.1,
          },
        },
      );
    }
  }
  const faqSection = qs("[data-section='faq']");
  if (faqSection) {
    const eyebrow = qs("[data-animate='faq-eyebrow']", faqSection);
    const lines = q("[data-animate='faq-line']", faqSection);
    const items = q("[data-animate='faq-item']", faqSection);
    const faqTl = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: faqSection,
        start: "top 80%",
        once: true,
      },
    });
    if (eyebrow) {
      gsapWithCSS.set(eyebrow, {
        opacity: 0,
        y: 10,
      });
      faqTl.to(eyebrow, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: TOKENS.easeCard,
      });
    }
    if (lines.length) {
      gsapWithCSS.set(lines, { yPercent: 105 });
      faqTl.to(
        lines,
        {
          yPercent: 0,
          duration: 0.85,
          ease: TOKENS.easeReveal,
          stagger: 0.09,
        },
        eyebrow ? "-=0.35" : "0",
      );
    }
    if (items.length) {
      gsapWithCSS.set(items, {
        opacity: 0,
        y: 18,
        scale: 0.99,
      });
      faqTl.to(
        items,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: TOKENS.easeCard,
          stagger: 0.06,
        },
        "-=0.4",
      );
    }
  }
  const ctaSection = qs("[data-section='final-cta']");
  if (ctaSection) {
    const card = qs("[data-animate='final-cta-card']", ctaSection);
    const eyebrow = qs("[data-animate='final-cta-eyebrow']", ctaSection);
    const lines = q("[data-animate='final-cta-line']", ctaSection);
    const para = qs("[data-animate='final-cta-para']", ctaSection);
    const buttons = qs("[data-animate='final-cta-buttons']", ctaSection);
    const mainBtn = qs("[data-animate='final-cta-main-btn']", ctaSection);
    const phone = qs("[data-animate='final-cta-phone']", ctaSection);
    const wave = qs("[data-animate='final-cta-wave']", ctaSection);
    if (isDesktop && card) {
      gsapWithCSS.fromTo(
        card,
        {
          opacity: 0.88,
          scale: 0.95,
          y: 30,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: TOKENS.easeUI,
          scrollTrigger: {
            trigger: ctaSection,
            start: "top 90%",
            end: "top 50%",
            scrub: 0.65,
          },
        },
      );
      if (wave)
        gsapWithCSS.fromTo(
          wave,
          { xPercent: -2 },
          {
            xPercent: 2,
            ease: "none",
            scrollTrigger: {
              trigger: ctaSection,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          },
        );
    } else if (card)
      gsapWithCSS.from(card, {
        opacity: 0,
        y: 20,
        scale: 0.98,
        duration: 0.75,
        ease: TOKENS.easeCard,
        scrollTrigger: {
          trigger: ctaSection,
          start: "top 84%",
          once: true,
        },
      });
    const ctaContentTl = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: ctaSection,
        start: "top 76%",
        once: true,
      },
    });
    if (eyebrow) {
      gsapWithCSS.set(eyebrow, {
        opacity: 0,
        y: 10,
      });
      ctaContentTl.to(eyebrow, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: TOKENS.easeCard,
      });
    }
    if (lines.length) {
      gsapWithCSS.set(lines, { yPercent: 110 });
      ctaContentTl.to(
        lines,
        {
          yPercent: 0,
          duration: 0.85,
          ease: TOKENS.easeReveal,
          stagger: 0.09,
        },
        "-=0.3",
      );
    }
    if (para) {
      gsapWithCSS.set(para, {
        opacity: 0,
        y: 12,
      });
      ctaContentTl.to(
        para,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: TOKENS.easeCard,
        },
        "-=0.4",
      );
    }
    if (buttons) {
      gsapWithCSS.set(buttons, {
        opacity: 0,
        y: 8,
        scale: 0.97,
      });
      ctaContentTl.to(
        buttons,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: TOKENS.easeCard,
        },
        "-=0.3",
      );
    }
    if (phone) {
      gsapWithCSS.set(phone, {
        opacity: 0,
        y: 8,
      });
      ctaContentTl.to(
        phone,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: TOKENS.easeCard,
        },
        "-=0.3",
      );
    }
    if (mainBtn)
      ctaContentTl.to(
        mainBtn,
        {
          scale: 1.03,
          duration: 0.22,
          ease: TOKENS.easeUI,
          yoyo: true,
          repeat: 1,
        },
        "+=0.1",
      );
  }
  const footerSection = qs("[data-section='footer']");
  if (footerSection) {
    const cols = q("[data-animate='footer-col']", footerSection);
    const bottom = qs("[data-animate='footer-bottom']", footerSection);
    const footerTl = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: footerSection,
        start: "top 86%",
        once: true,
      },
    });
    if (cols.length) {
      gsapWithCSS.set(cols, {
        opacity: 0,
        y: 12,
      });
      footerTl.to(cols, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: TOKENS.easeCard,
        stagger: 0.07,
      });
    }
    if (bottom) {
      gsapWithCSS.set(bottom, {
        opacity: 0,
        y: 6,
      });
      footerTl.to(
        bottom,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: TOKENS.easeUI,
        },
        "-=0.3",
      );
    }
  }
}
var magneticCleanups = /* @__PURE__ */ new Map();
function initMagneticButtons() {
  q(".btn-magnetic").forEach((btn) => {
    const el = btn;
    const inner = el.querySelector(".btn-magnetic-inner");
    const MAX = 4;
    const INNER_RATIO = 0.55;
    const onMove = (e) => {
      const ev = e;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = ((ev.clientX - cx) / (rect.width / 2)) * MAX;
      const dy = ((ev.clientY - cy) / (rect.height / 2)) * MAX;
      gsapWithCSS.to(el, {
        x: dx,
        y: dy,
        duration: 0.3,
        ease: TOKENS.easeUI,
      });
      if (inner)
        gsapWithCSS.to(inner, {
          x: dx * INNER_RATIO,
          y: dy * INNER_RATIO,
          duration: 0.3,
          ease: TOKENS.easeUI,
        });
    };
    const onLeave = () => {
      gsapWithCSS.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.6)",
      });
      if (inner)
        gsapWithCSS.to(inner, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.6)",
        });
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    magneticCleanups.set(el, () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    });
  });
}
function destroyMagneticButtons() {
  magneticCleanups.forEach((cleanup) => cleanup());
  magneticCleanups.clear();
}
function initScrollAnimations(conditions) {
  const isDesktop = conditions?.isDesktop ?? false;
  conditions?.isMobile;
  if (conditions?.reduceMotion ?? false) {
    q(
      "[data-animate], [data-hero], [data-section='header'], [data-results-hero], [data-results-gallery], [data-process-section], [data-equipment-section], [data-blue-section], [data-home-service], [data-faq-section], [data-whatsapp-cta], [data-footer]",
    ).forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    const line = qs("[data-animate='process-line']");
    if (line) gsapWithCSS.set(line, { strokeDashoffset: 0 });
    return;
  }
  animateNav();
  animateTrustStrip();
  animateServicesHeading();
  animateServiceCards(isDesktop);
  animateResultsShowcase(isDesktop);
  animateProcessStory(isDesktop);
  animateEquipmentAndBlue(isDesktop);
  animateFinalSections(isDesktop);
  if (isDesktop) {
    animateNavScroll();
    animateHeroParallax();
    animateTrustStripDrift();
    initMagneticButtons();
  }
  return () => {
    destroyMagneticButtons();
  };
}
function AnimationProvider({ children }) {
  useAnimationSystem();
  (0, import_react.useEffect)(() => {
    if (typeof window === "undefined") return;
    const timer = setTimeout(() => {
      const mm = gsapWithCSS.matchMedia();
      let extraCleanup;
      mm.add(
        {
          isDesktop: "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
          isMobile: "(max-width: 768px) and (prefers-reduced-motion: no-preference)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          extraCleanup = initScrollAnimations(context.conditions) ?? void 0;
          return () => {
            extraCleanup?.();
          };
        },
      );
      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      return () => {
        window.removeEventListener("load", onLoad);
        mm.revert();
      };
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function NotFoundComponent() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-7xl font-bold text-foreground",
          children: "404",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Page not found",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "The page you're looking for doesn't exist or has been moved.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-6",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Go home",
          }),
        }),
      ],
    }),
  });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  (0, import_react.useEffect)(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-xl font-semibold tracking-tight text-foreground",
          children: "This page didn't load",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "Something went wrong on our end. You can try refreshing or head back home.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mt-6 flex flex-wrap justify-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              onClick: () => {
                router.invalidate();
                reset();
              },
              className:
                "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
              children: "Try again",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: "/",
              className:
                "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
              children: "Go home",
            }),
          ],
        }),
      ],
    }),
  });
}
var Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Sky Brothers | Limpieza Profesional en Huatulco" },
      {
        name: "description",
        content:
          "Limpieza, lavado y desinfección profunda de sofás, colchones y tapicería a domicilio en Bahías de Huatulco, Oaxaca.",
      },
      {
        name: "author",
        content: "Sky Brothers",
      },
      {
        property: "og:title",
        content: "Sky Brothers | Limpieza Profesional en Huatulco",
      },
      {
        property: "og:description",
        content:
          "Limpieza, lavado y desinfección profunda de sofás, colchones y tapicería a domicilio en Bahías de Huatulco, Oaxaca.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles_default,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootShell({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})],
      }),
    ],
  });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
    client: queryClient,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimationProvider, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
    }),
  });
}
var $$splitComponentImporter = () => import("./routes-DHXBayjL.mjs");
var TITLE = "Sky Brothers | Limpieza de Sofás, Colchones y Tapicería en Huatulco";
var DESCRIPTION =
  "Limpieza, lavado y desinfección profunda de sofás, colchones, sillones, tapicería e interiores de auto a domicilio en Bahías de Huatulco, Oaxaca. Agenda por WhatsApp.";
var schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CleaningService"],
  name: "Sky Brothers",
  description: DESCRIPTION,
  telephone: "+52 958 131 8297",
  url: "https://www.limpiezaskybrothers.com.mx/",
  areaServed: [
    "Bahías de Huatulco, Oaxaca",
    "Copalita, Oaxaca",
    "Santa María Huatulco, Oaxaca",
    "Pochutla, Oaxaca",
    "Puerto Escondido, Oaxaca",
  ],
  sameAs: ["https://www.instagram.com/limpieza.skybrothers/"],
};
var rootRouteChildren = {
  IndexRoute: createFileRoute("/")({
    head: () => ({
      meta: [
        { title: TITLE },
        {
          name: "description",
          content: DESCRIPTION,
        },
        {
          property: "og:title",
          content: TITLE,
        },
        {
          property: "og:description",
          content: DESCRIPTION,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      links: [
        {
          rel: "canonical",
          href: "/",
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(schema),
        },
      ],
    }),
    component: lazyRouteComponent($$splitComponentImporter, "component"),
  }).update({
    id: "/",
    path: "/",
    getParentRoute: () => Route$1,
  }),
};
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
  const queryClient = new QueryClient();
  return createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
};
//#endregion
export { getRouter };
