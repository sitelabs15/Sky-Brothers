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

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─── MOTION TOKENS ────────────────────────────────────────────────────────────

const TOKENS = {
  easeReveal: "power4.out",
  easeCard: "power3.out",
  easeUI: "power2.out",
  easeSpring: "back.out(1.4)",
  durFast: 0.45,
  durNormal: 0.7,
  durLong: 0.95,
  staggerFast: 0.06,
  staggerNormal: 0.09,
} as const;

// ─── DOM SELECTOR HELPERS ─────────────────────────────────────────────────────

function q(selector: string, scope?: Element | null): Element[] {
  const root = scope ?? document;
  return Array.from(root.querySelectorAll<Element>(selector));
}

function qs(selector: string, scope?: Element | null): Element | null {
  const root = scope ?? document;
  return root.querySelector<Element>(selector);
}

// ─── 1. NAVIGATION & SCROLL COMPACT ───────────────────────────────────────────

function animateNav() {
  const header = qs("[data-section='header']");
  if (!header) return;

  gsap.from(header, {
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

      if (dir === 1) {
        gsap.to(header, {
          y: -8,
          opacity: 0.92,
          duration: TOKENS.durFast,
          ease: TOKENS.easeUI,
        });
      } else {
        gsap.to(header, {
          y: 0,
          opacity: 1,
          duration: TOKENS.durFast,
          ease: TOKENS.easeUI,
        });
      }
    },
  });
}

// ─── 2. HERO PARALLAX EXIT (DESKTOP) ─────────────────────────────────────────

function animateHeroParallax() {
  const hero = qs("[data-section='hero']");
  if (!hero) return;

  const textGroup = qs("[data-hero='text']", hero);
  const visual = qs("[data-hero='visual']", hero);

  if (textGroup) {
    gsap.to(textGroup, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  }

  if (visual) {
    gsap.to(visual, {
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
}

// ─── 3. TRUST STRIP ───────────────────────────────────────────────────────────

function animateTrustStrip() {
  const strip = qs("[data-section='trust-strip']");
  if (!strip) return;

  const items = q("[data-animate='trust-item']", strip);
  const icons = q("[data-animate='trust-icon']", strip);
  if (!items.length) return;

  gsap.set(items, { opacity: 0, y: 15, scale: 0.96 });
  gsap.set(icons, { scale: 0.85, rotation: -6 });

  const tl = gsap.timeline({
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

  gsap.to(inner, {
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

// ─── 4. SERVICES SECTION ──────────────────────────────────────────────────────

function animateServicesHeading() {
  const section = qs("[data-section='services']");
  if (!section) return;

  const eyebrow = qs("[data-animate='services-eyebrow']", section);
  const headingLines = q("[data-animate='services-line']", section);
  const paragraph = qs("[data-animate='services-para']", section);

  if (!headingLines.length) return;

  if (eyebrow) gsap.set(eyebrow, { opacity: 0, y: 10 });
  gsap.set(headingLines, { yPercent: 105 });
  if (paragraph) gsap.set(paragraph, { opacity: 0, y: 18 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 78%",
      once: true,
    },
  });

  if (eyebrow) {
    tl.to(eyebrow, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: TOKENS.easeCard,
    });
  }

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

  if (paragraph) {
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
}

const SERVICE_CARD_VARIANTS = [
  { y: 55, rotation: -1.5, scale: 0.96 },
  { y: 35, rotation: 1.0, scale: 0.95 },
  { y: 65, rotation: -0.8, scale: 0.97 },
] as const;

function animateServiceCards(isDesktop: boolean) {
  const section = qs("[data-section='services']");
  if (!section) return;

  const cards = q("[data-animate='service-card']", section);
  if (!cards.length) return;

  if (isDesktop) {
    cards.forEach((card, i) => {
      const v = SERVICE_CARD_VARIANTS[i % SERVICE_CARD_VARIANTS.length];
      gsap.set(card, {
        opacity: 0,
        y: v.y,
        rotation: v.rotation,
        scale: v.scale,
        transformOrigin: "center bottom",
      });
    });

    gsap.to(cards, {
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
        (section as HTMLElement).style.overflow = "hidden";
      },
      onComplete() {
        (section as HTMLElement).style.overflow = "";
      },
    });
  } else {
    gsap.set(cards, { opacity: 0, y: 25, scale: 0.98 });
    gsap.to(cards, {
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

// ─── 5. RESULTS SHOWCASE (WOW MOMENT 1) ────────────────────────────────────────

function animateResultsShowcase(isDesktop: boolean) {
  const baSection = qs("[data-section='before-after']");
  const gallerySection = qs("[data-section='results-gallery']");

  if (!baSection) return;

  // 5a. Ambient Background Tint Transition
  if (isDesktop) {
    ScrollTrigger.create({
      trigger: baSection,
      start: "top 80%",
      endTrigger: gallerySection ?? baSection,
      end: "bottom 30%",
      onEnter: () => {
        gsap.to([baSection, gallerySection].filter(Boolean), {
          backgroundColor: "#f4f8fa",
          duration: 0.8,
          ease: TOKENS.easeUI,
        });
      },
      onLeave: () => {
        gsap.to([baSection, gallerySection].filter(Boolean), {
          backgroundColor: "#ffffff",
          duration: 0.7,
          ease: TOKENS.easeUI,
        });
      },
      onEnterBack: () => {
        gsap.to([baSection, gallerySection].filter(Boolean), {
          backgroundColor: "#f4f8fa",
          duration: 0.7,
          ease: TOKENS.easeUI,
        });
      },
      onLeaveBack: () => {
        gsap.to([baSection, gallerySection].filter(Boolean), {
          backgroundColor: "#ffffff",
          duration: 0.7,
          ease: TOKENS.easeUI,
        });
      },
    });
  }

  // 5b. Before/After Intro Masked Reveal
  const baEyebrow = qs("[data-animate='ba-eyebrow']", baSection);
  const baLines = q("[data-animate='ba-line']", baSection);
  const baPara = qs("[data-animate='ba-para']", baSection);
  const baTabs = q("[data-animate='ba-tab']", baSection);
  const baModeGroup = qs("[data-animate='ba-mode-group']", baSection);

  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: baSection,
      start: "top 78%",
      once: true,
    },
  });

  if (baEyebrow) {
    gsap.set(baEyebrow, { opacity: 0, y: 12 });
    introTl.to(baEyebrow, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: TOKENS.easeCard,
    });
  }

  if (baLines.length) {
    gsap.set(baLines, { yPercent: 110 });
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
    gsap.set(baPara, { opacity: 0, y: 18 });
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
    gsap.set(baModeGroup, { opacity: 0, y: 12 });
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
    gsap.set(baTabs, { opacity: 0, scale: 0.94, y: 8 });
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

  // 5c. Main Results Visual Scale & Parallax Expansion
  const mainVisual = qs("[data-animate='ba-visual']", baSection);
  const parallaxImgs = q("[data-animate='ba-parallax-img']", baSection);

  if (mainVisual) {
    if (isDesktop) {
      gsap.fromTo(
        mainVisual,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: TOKENS.easeCard,
          scrollTrigger: {
            trigger: mainVisual,
            start: "top 85%",
            once: true,
          },
        },
      );

      if (parallaxImgs.length) {
        gsap.fromTo(
          parallaxImgs,
          { scale: 1.05, yPercent: -3 },
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
      }
    } else {
      gsap.from(mainVisual, {
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
  }

  // 5d. Results Gallery Section
  if (!gallerySection) return;

  const galEyebrow = qs("[data-animate='gallery-eyebrow']", gallerySection);
  const galLines = q("[data-animate='gallery-line']", gallerySection);
  const galPara = qs("[data-animate='gallery-para']", gallerySection);
  const galPills = q("[data-animate='gallery-pill']", gallerySection);
  const galItems = q("[data-animate='gallery-item']", gallerySection);

  const galIntroTl = gsap.timeline({
    scrollTrigger: {
      trigger: gallerySection,
      start: "top 78%",
      once: true,
    },
  });

  if (galEyebrow) {
    gsap.set(galEyebrow, { opacity: 0, y: 12 });
    galIntroTl.to(galEyebrow, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: TOKENS.easeCard,
    });
  }

  if (galLines.length) {
    gsap.set(galLines, { yPercent: 110 });
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
    gsap.set(galPara, { opacity: 0, y: 18 });
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
    gsap.set(galPills, { opacity: 0, scale: 0.94, y: 8 });
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
    { y: 45, x: -10, rotation: -1.0, scale: 0.96 },
    { y: 60, x: 6, rotation: 0.8, scale: 0.95 },
    { y: 35, x: 4, rotation: -0.5, scale: 0.97 },
  ] as const;

  if (galItems.length) {
    if (isDesktop) {
      galItems.forEach((item, i) => {
        const v = GALLERY_VARIANTS[i % GALLERY_VARIANTS.length];
        gsap.set(item, {
          opacity: 0,
          y: v.y,
          x: v.x,
          rotation: v.rotation,
          scale: v.scale,
          transformOrigin: "center bottom",
        });
      });

      gsap.to(galItems, {
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
        gsap.to(item, {
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
      gsap.set(galItems, { opacity: 0, y: 22, scale: 0.98 });
      gsap.to(galItems, {
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

// ─── 6. PROCESS STORY (AUTOMATIC SEQUENTIAL ACTIVATION ON ENTER) ──────────────

function animateProcessStory(isDesktop: boolean) {
  const section = qs("[data-section='process']");
  if (!section) return;

  const eyebrow = qs("[data-animate='process-eyebrow']", section);
  const headingLines = q("[data-animate='process-line-text']", section);
  const container = qs("[data-animate='process-container']", section);
  const line = qs("[data-animate='process-line']", section);
  const steps = q("[data-animate='process-step']", section);

  if (!steps.length) return;

  // Master timeline triggered ONCE when reaching the section
  const masterTl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 74%",
      once: true,
    },
  });

  // 1. Header entrance
  if (eyebrow) {
    gsap.set(eyebrow, { opacity: 0, y: 12 });
    masterTl.to(eyebrow, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: TOKENS.easeCard,
    });
  }

  if (headingLines.length) {
    gsap.set(headingLines, { yPercent: 110 });
    masterTl.to(
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

  if (isDesktop) {
    // Initial states for desktop
    const linePath = line as SVGPathElement | null;
    let pathLen = 1200;
    if (linePath && typeof linePath.getTotalLength === "function") {
      try {
        pathLen = Math.ceil(linePath.getTotalLength()) || 1200;
      } catch {
        pathLen = 1200;
      }
    }

    if (line) {
      gsap.set(line, {
        strokeDasharray: pathLen + 10,
        strokeDashoffset: pathLen + 10,
        opacity: 1,
      });
    }

    const stream = qs("[data-animate='process-wave-stream']", section);
    if (stream) {
      gsap.set(stream, { opacity: 0 });
    }

    steps.forEach((step) => {
      const marker = qs("[data-animate='process-marker']", step);
      const num = qs("[data-animate='process-num']", step);
      const title = qs("[data-animate='process-title']", step);
      const desc = qs("[data-animate='process-desc']", step);

      if (marker) gsap.set(marker, { scale: 0.72, opacity: 0.4 });
      if (num) gsap.set(num, { opacity: 0, y: 12, scale: 0.92 });
      if (title) gsap.set(title, { yPercent: 105, opacity: 0 });
      if (desc) gsap.set(desc, { opacity: 0, y: 10 });
    });

    if (container) {
      gsap.set(container, { opacity: 0, y: 16 });
      masterTl.to(
        container,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: TOKENS.easeCard,
        },
        "-=0.4",
      );
    }

    // 2. Smooth, visible line drawing from start to finish
    const lineDrawDuration = 2.0;

    if (line) {
      masterTl.to(
        line,
        {
          strokeDashoffset: 0,
          duration: lineDrawDuration,
          ease: "power1.inOut",
        },
        "-=0.1",
      );
    }

    // Timestamp when the line started drawing
    const lineStartTime = masterTl.duration() - lineDrawDuration;

    // Automatic step activation checkpoints aligned with line travel
    const stepDelays = [0.15, 0.95, 1.7];

    steps.forEach((step, i) => {
      const activationTime = lineStartTime + (stepDelays[i] ?? i * 0.7);
      const marker = qs("[data-animate='process-marker']", step);
      const num = qs("[data-animate='process-num']", step);
      const title = qs("[data-animate='process-title']", step);
      const desc = qs("[data-animate='process-desc']", step);

      if (marker) {
        masterTl.to(
          marker,
          {
            scale: 1,
            opacity: 1,
            borderColor: "#0879ba",
            boxShadow: "0 10px 28px -6px rgba(8,121,186,0.35)",
            duration: 0.45,
            ease: TOKENS.easeSpring,
          },
          activationTime,
        );
      }

      if (num) {
        masterTl.to(
          num,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.35,
            ease: TOKENS.easeCard,
          },
          activationTime + 0.05,
        );
      }

      if (title) {
        masterTl.to(
          title,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.45,
            ease: TOKENS.easeReveal,
          },
          activationTime + 0.08,
        );
      }

      if (desc) {
        masterTl.to(
          desc,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: TOKENS.easeCard,
          },
          activationTime + 0.12,
        );
      }
    });

    if (stream) {
      masterTl.to(
        stream,
        {
          opacity: 0.95,
          duration: 0.8,
          ease: "power1.in",
        },
        lineStartTime + lineDrawDuration - 0.2,
      );
    }
  } else {
    // Mobile: sequential auto reveal upon entering section
    steps.forEach((step, i) => {
      const marker = qs("[data-animate='process-marker']", step);
      const num = qs("[data-animate='process-num']", step);
      const title = qs("[data-animate='process-title']", step);
      const desc = qs("[data-animate='process-desc']", step);

      const stepTime = masterTl.duration() + (i === 0 ? -0.2 : 0.08);

      if (marker) {
        gsap.set(marker, { scale: 0.78, opacity: 0 });
        masterTl.to(
          marker,
          {
            scale: 1,
            opacity: 1,
            borderColor: "#0879ba",
            duration: 0.45,
            ease: TOKENS.easeSpring,
          },
          stepTime,
        );
      }

      if (num) {
        gsap.set(num, { opacity: 0, y: 10 });
        masterTl.to(
          num,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: TOKENS.easeCard,
          },
          stepTime + 0.05,
        );
      }

      if (title) {
        gsap.set(title, { yPercent: 100, opacity: 0 });
        masterTl.to(
          title,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.4,
            ease: TOKENS.easeCard,
          },
          stepTime + 0.08,
        );
      }

      if (desc) {
        gsap.set(desc, { opacity: 0, y: 8 });
        masterTl.to(
          desc,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: TOKENS.easeCard,
          },
          stepTime + 0.12,
        );
      }
    });
  }
}

// ─── 7. EQUIPMENT & BLUE SECTION (WOW MOMENT 2) ───────────────────────────────

function animateEquipmentAndBlue(isDesktop: boolean) {
  const equipSection = qs("[data-section='value']");
  const blueSection = qs("[data-section='brand-break']");

  if (!equipSection) return;

  const imgWrap = qs("[data-animate='equipment-image-wrap']", equipSection);
  const internalImg = qs("[data-animate='equipment-img']", equipSection);
  const eyebrow = qs("[data-animate='equipment-eyebrow']", equipSection);
  const lines = q("[data-animate='equipment-line']", equipSection);
  const equipPara = qs("[data-animate='equipment-para']", equipSection);
  const bullets = q("[data-animate='equipment-bullet']", equipSection);
  const checks = q("[data-animate='equipment-check']", equipSection);
  const cta = qs("[data-animate='equipment-cta']", equipSection);
  const imgCol = qs("[data-animate='equipment-image-col']", equipSection);
  const contentCol = qs("[data-animate='equipment-content-col']", equipSection);

  const equipTl = gsap.timeline({
    scrollTrigger: {
      trigger: equipSection,
      start: "top 78%",
      once: true,
    },
  });

  if (isDesktop) {
    if (imgWrap) {
      gsap.set(imgWrap, { opacity: 0, x: -35, y: 18, rotation: -1.2, scale: 0.96 });
      equipTl.to(imgWrap, {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 1.0,
        ease: TOKENS.easeCard,
      });
    }
  } else {
    if (imgWrap) {
      gsap.set(imgWrap, { opacity: 0, y: 22, scale: 0.98 });
      equipTl.to(imgWrap, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.75,
        ease: TOKENS.easeCard,
      });
    }
  }

  if (eyebrow) {
    gsap.set(eyebrow, { opacity: 0, y: 12 });
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
    gsap.set(lines, { yPercent: 110 });
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

  if (equipPara) {
    gsap.set(equipPara, { opacity: 0, y: 16 });
    equipTl.to(
      equipPara,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: TOKENS.easeCard,
      },
      "-=0.4",
    );
  }

  if (bullets.length) {
    gsap.set(bullets, { opacity: 0, x: 12, y: 6 });
    if (checks.length) {
      gsap.set(checks, { scale: 0.82, rotation: -4 });
    }

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

    if (checks.length) {
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
  }

  if (cta) {
    gsap.set(cta, { opacity: 0, y: 10, scale: 0.97 });
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

  // Equipment Depth & Opposing Cross-Movement
  if (isDesktop && imgCol && contentCol) {
    if (internalImg) {
      gsap.fromTo(
        internalImg,
        { scale: 1.04, yPercent: -2.5 },
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
    }

    gsap.fromTo(
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

    gsap.fromTo(
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

  // Blue Section Transition & Overlap Effect
  if (!blueSection) return;

  const logo = qs("[data-animate='blue-logo']", blueSection);
  const subheading = qs("[data-animate='blue-subheading']", blueSection);
  const blueLines = q("[data-animate='blue-line']", blueSection);
  const ctaRow = qs("[data-animate='blue-cta-row']", blueSection);
  const wave = qs("[data-animate='blue-wave']", blueSection);
  const contentGroup = qs("[data-animate='blue-content-group']", blueSection);

  if (isDesktop) {
    const blueTl = gsap.timeline({
      scrollTrigger: {
        trigger: blueSection,
        start: "top 72%",
        once: true,
      },
    });

    if (logo) {
      gsap.set(logo, { opacity: 0, scale: 0.7, rotation: -10 });
      blueTl.to(logo, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.85,
        ease: TOKENS.easeSpring,
      });
    }

    if (subheading) {
      gsap.set(subheading, { opacity: 0, y: 12 });
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
      gsap.set(blueLines, { yPercent: 115, skewY: 1.5 });
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
      gsap.set(ctaRow, { opacity: 0, y: 12, scale: 0.97 });
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

    if (contentGroup) {
      gsap.to(contentGroup, {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: blueSection,
          start: "bottom 85%",
          end: "bottom 20%",
          scrub: 1.1,
        },
      });
    }
  } else {
    gsap.from(blueSection, {
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

    const blueMobTl = gsap.timeline({
      scrollTrigger: {
        trigger: blueSection,
        start: "top 76%",
        once: true,
      },
    });

    if (logo) {
      gsap.set(logo, { opacity: 0, scale: 0.85, rotation: -3 });
      blueMobTl.to(logo, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.65,
        ease: TOKENS.easeSpring,
      });
    }

    if (subheading) {
      gsap.set(subheading, { opacity: 0, y: 10 });
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
      gsap.set(blueLines, { yPercent: 110 });
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
      gsap.set(ctaRow, { opacity: 0, y: 10 });
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

// ─── 8. FINAL PASS: COVERAGE, FAQ, WHATSAPP CTA & FOOTER ──────────────────────

function animateFinalSections(isDesktop: boolean) {
  // ── 8a. Home Service / Coverage Section ──
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
    const mapEl = qs("[data-animate='coverage-map']", coverageSection);

    if (isDesktop) {
      gsap.fromTo(
        coverageSection,
        { yPercent: 4, scale: 0.988 },
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
    }

    const covTl = gsap.timeline({
      scrollTrigger: {
        trigger: coverageSection,
        start: "top 78%",
        once: true,
      },
    });

    if (eyebrow) {
      gsap.set(eyebrow, { opacity: 0, y: 10 });
      covTl.to(eyebrow, { opacity: 1, y: 0, duration: 0.55, ease: TOKENS.easeCard });
    }

    if (lines.length) {
      gsap.set(lines, { yPercent: 105 });
      covTl.to(
        lines,
        {
          yPercent: 0,
          duration: 0.65,
          ease: TOKENS.easeText,
          stagger: 0.08,
        },
        "-=0.35",
      );
    }

    if (para) {
      gsap.set(para, { opacity: 0, y: 12 });
      covTl.to(para, { opacity: 1, y: 0, duration: 0.6, ease: TOKENS.easeCard }, "-=0.45");
    }

    if (cta) {
      gsap.set(cta, { opacity: 0, y: 10, scale: 0.97 });
      covTl.to(cta, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: TOKENS.easeCard }, "-=0.35");
    }

    if (card) {
      if (isDesktop) {
        gsap.set(card, { opacity: 0, y: 35, x: 15, scale: 0.96 });
        covTl.to(
          card,
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 1.0,
            ease: TOKENS.easeCard,
          },
          "-=0.7",
        );
      } else {
        gsap.set(card, { opacity: 0, y: 20, scale: 0.98 });
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
      gsap.set(pills, { opacity: 0, scale: 0.92, y: 6 });
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
      if (mapEl) {
        gsap.fromTo(
          mapEl,
          { scale: 1.02, yPercent: -1.5 },
          {
            yPercent: 1.5,
            ease: "none",
            scrollTrigger: {
              trigger: coverageSection,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
      }

      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.04, yPercent: -2.5 },
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
      }

      gsap.fromTo(
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

      gsap.fromTo(
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

  // ── 8b. FAQ Section ──
  const faqSection = qs("[data-section='faq']");
  if (faqSection) {
    const eyebrow = qs("[data-animate='faq-eyebrow']", faqSection);
    const lines = q("[data-animate='faq-line']", faqSection);
    const items = q("[data-animate='faq-item']", faqSection);

    const faqTl = gsap.timeline({
      scrollTrigger: {
        trigger: faqSection,
        start: "top 80%",
        once: true,
      },
    });

    if (eyebrow) {
      gsap.set(eyebrow, { opacity: 0, y: 10 });
      faqTl.to(eyebrow, { opacity: 1, y: 0, duration: 0.55, ease: TOKENS.easeCard });
    }

    if (lines.length) {
      gsap.set(lines, { yPercent: 105 });
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
      gsap.set(items, { opacity: 0, y: 18, scale: 0.99 });
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

  // ── 8c. Final WhatsApp Booking CTA ──
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
      gsap.fromTo(
        card,
        { opacity: 0.88, scale: 0.95, y: 30 },
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

      if (wave) {
        gsap.fromTo(
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
      }
    } else if (card) {
      gsap.from(card, {
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
    }

    const ctaContentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaSection,
        start: "top 76%",
        once: true,
      },
    });

    if (eyebrow) {
      gsap.set(eyebrow, { opacity: 0, y: 10 });
      ctaContentTl.to(eyebrow, { opacity: 1, y: 0, duration: 0.5, ease: TOKENS.easeCard });
    }

    if (lines.length) {
      gsap.set(lines, { yPercent: 110 });
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
      gsap.set(para, { opacity: 0, y: 12 });
      ctaContentTl.to(para, { opacity: 1, y: 0, duration: 0.55, ease: TOKENS.easeCard }, "-=0.4");
    }

    if (buttons) {
      gsap.set(buttons, { opacity: 0, y: 8, scale: 0.97 });
      ctaContentTl.to(
        buttons,
        { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: TOKENS.easeCard },
        "-=0.3",
      );
    }

    // Single attention pulse on main WhatsApp button
    if (mainBtn) {
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
  }

  // ── 8d. Footer Section ──
  const footerSection = qs("[data-section='footer']");
  if (footerSection) {
    const cols = q("[data-animate='footer-col']", footerSection);
    const bottom = qs("[data-animate='footer-bottom']", footerSection);

    const footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: footerSection,
        start: "top 86%",
        once: true,
      },
    });

    if (cols.length) {
      gsap.set(cols, { opacity: 0, y: 12 });
      footerTl.to(cols, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: TOKENS.easeCard,
        stagger: 0.07,
      });
    }

    if (bottom) {
      gsap.set(bottom, { opacity: 0, y: 6 });
      footerTl.to(bottom, { opacity: 1, y: 0, duration: 0.45, ease: TOKENS.easeUI }, "-=0.3");
    }
  }
}

// ─── 9. MAGNETIC BUTTONS (DESKTOP) ────────────────────────────────────────────

const magneticCleanups = new Map<HTMLElement, () => void>();

function initMagneticButtons() {
  const buttons = q(".btn-magnetic");

  buttons.forEach((btn) => {
    const el = btn as HTMLElement;
    const inner = el.querySelector(".btn-magnetic-inner") as HTMLElement | null;

    const MAX = 4;
    const INNER_RATIO = 0.55;

    const onMove = (e: Event) => {
      const ev = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = ((ev.clientX - cx) / (rect.width / 2)) * MAX;
      const dy = ((ev.clientY - cy) / (rect.height / 2)) * MAX;

      gsap.to(el, { x: dx, y: dy, duration: 0.3, ease: TOKENS.easeUI });
      if (inner) {
        gsap.to(inner, {
          x: dx * INNER_RATIO,
          y: dy * INNER_RATIO,
          duration: 0.3,
          ease: TOKENS.easeUI,
        });
      }
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.6)" });
      if (inner) {
        gsap.to(inner, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.6)",
        });
      }
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

// ─── PUBLIC ENTRY POINT ───────────────────────────────────────────────────────

export function initScrollAnimations(conditions: Record<string, boolean> | undefined) {
  const isDesktop = conditions?.isDesktop ?? false;
  const isMobile = conditions?.isMobile ?? false;
  const reduceMotion = conditions?.reduceMotion ?? false;

  if (reduceMotion) {
    q(
      "[data-animate], [data-hero], [data-section='header'], [data-results-hero], [data-results-gallery], [data-process-section], [data-equipment-section], [data-blue-section], [data-home-service], [data-faq-section], [data-whatsapp-cta], [data-footer]",
    ).forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
      (el as HTMLElement).style.transform = "none";
    });
    const line = qs("[data-animate='process-line']");
    if (line) {
      gsap.set(line, { strokeDashoffset: 0 });
    }
    const stream = qs("[data-animate='process-wave-stream']");
    if (stream) {
      gsap.set(stream, { opacity: 0.9 });
    }
    return;
  }

  // 1. Navigation & Hero (Phase 1)
  animateNav();

  // 2. Trust Strip & Services (Phase 1)
  animateTrustStrip();
  animateServicesHeading();
  animateServiceCards(isDesktop);

  // 3. Results Showcase WOW Sequence (Phase 3)
  animateResultsShowcase(isDesktop);

  // 4. Animated Process Line & Steps (Phase 4)
  animateProcessStory(isDesktop);

  // 5. Professional Equipment & Blue Section Transition (Phase 5)
  animateEquipmentAndBlue(isDesktop);

  // 6. Final Sections: Coverage, FAQ, WhatsApp CTA & Footer (Phase 6)
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
