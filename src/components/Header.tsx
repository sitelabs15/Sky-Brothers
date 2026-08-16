import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { img, navLinks } from "@/data/site";
import { createWhatsAppLink, PHONE_DISPLAY, PHONE_TEL } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SkyButton } from "@/components/SkyButton";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header data-section="header" className="fixed inset-x-0 top-3 z-50 px-3 sm:px-6 md:top-4">
      <div
        className={cn(
          "mx-auto w-full max-w-6xl lg:w-fit rounded-full border border-sky-line/80 bg-white/90 px-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-300 sm:px-6",
          scrolled && "border-sky-primary/30 bg-white/95 shadow-[0_12px_36px_rgba(16,19,21,0.12)]",
        )}
      >
        <div className="flex h-[60px] items-center justify-between lg:justify-center gap-4 lg:gap-6 md:h-[68px]">
          <a
            href="#inicio"
            className="flex shrink-0 items-center"
            aria-label="Sky Brothers, inicio"
          >
            <img
              src={img.logoAzul}
              alt="Sky Brothers"
              width={140}
              height={56}
              className="h-9 w-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.14)] md:h-11 transition-transform hover:scale-105"
            />
          </a>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-4 xl:gap-5 lg:flex"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative py-1 text-[0.94rem] font-medium text-sky-ink transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-sky-primary after:transition-transform after:duration-300 hover:text-sky-primary hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PHONE_TEL}
              aria-label={`Llamar al ${PHONE_DISPLAY}`}
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-sky-line text-sky-primary transition-colors hover:border-sky-primary md:inline-flex"
            >
              <Phone strokeWidth={1.8} className="h-[18px] w-[18px]" />
            </a>

            <SkyButton
              href={createWhatsAppLink()}
              external
              className="min-h-[40px] !rounded-full px-4 text-sm inline-flex items-center gap-1.5"
              ariaLabel="Agendar por WhatsApp con Sky Brothers"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Agendar
            </SkyButton>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-line text-sky-ink lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-3 top-[76px] z-50 rounded-[28px] border border-sky-line bg-white/98 p-6 shadow-2xl backdrop-blur-xl lg:hidden">
          <nav aria-label="Navegación móvil" className="flex flex-col gap-1">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ ["--reveal-delay" as string]: `${i * 45}ms` }}
                className="enter-rise border-b border-sky-line/70 py-3.5 text-xl font-semibold tracking-tight text-sky-ink"
              >
                {l.label}
              </a>
            ))}
            <a href={PHONE_TEL} className="hand mt-4 text-lg text-sky-primary">
              Llamar al {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
