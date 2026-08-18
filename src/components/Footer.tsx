import { Instagram, Phone, MapPin } from "lucide-react";
import { img, navLinks } from "@/data/site";
import {
  createWhatsAppLink,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { MadeWithLoveBadge } from "@/components/MadeWithLoveBadge";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-section="footer" data-footer className="bg-sky-primary text-white overflow-hidden">
      <div className="shell grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:py-20">
        {/* ── Brand Col ── */}
        <div data-animate="footer-col">
          <div className="inline-flex items-center gap-3">
            <img
              src={img.logoCyan}
              alt="Logotipo de Sky Brothers"
              loading="lazy"
              className="h-14 w-14 rounded-full border-2 border-white/40 object-cover shadow-lg"
            />
            <div>
              <span className="text-xl font-bold tracking-tight text-white block">
                Sky Brothers
              </span>
              <span className="text-xs text-sky-cyan-soft font-medium">
                skybrothers.com.mx
              </span>
            </div>
          </div>
          <p className="hand mt-4 text-[1.1rem] text-sky-cyan-soft">
            lavado · limpieza · desinfección
          </p>
        </div>

        {/* ── Nav Links Col ── */}
        <nav data-animate="footer-col" aria-label="Navegación del pie">
          <h2 className="text-[0.78rem] font-semibold tracking-[0.18em] uppercase text-sky-cyan-soft">
            Navegación
          </h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.slice(0, 5).map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[0.98rem] text-white/90 transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Contact Col ── */}
        <div data-animate="footer-col">
          <h2 className="text-[0.78rem] font-semibold tracking-[0.18em] uppercase text-sky-cyan-soft">
            Contacto
          </h2>
          <ul className="mt-4 space-y-2.5 text-[0.98rem]">
            <li>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 text-white/90 transition-all duration-200 hover:text-white hover:translate-x-1"
              >
                <Phone strokeWidth={1.8} className="h-4 w-4 text-sky-cyan-soft" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 transition-all duration-200 hover:text-white hover:translate-x-1"
              >
                <WhatsAppIcon className="h-4 w-4 text-sky-cyan-soft" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 transition-all duration-200 hover:text-white hover:translate-x-1"
              >
                <Instagram strokeWidth={1.8} className="h-4 w-4 text-sky-cyan-soft" />
                {INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
        </div>

        {/* ── Location Col ── */}
        <div data-animate="footer-col">
          <h2 className="text-[0.78rem] font-semibold tracking-[0.18em] uppercase text-sky-cyan-soft">
            Ubicación
          </h2>
          <p className="mt-4 inline-flex items-start gap-2 text-[0.98rem] text-white/90">
            <MapPin strokeWidth={1.8} className="mt-0.5 h-4 w-4 shrink-0 text-sky-cyan-soft" />
            Bahías de Huatulco, Oaxaca
          </p>
        </div>
      </div>

      {/* ── Copyright Row ── */}
      <div data-animate="footer-bottom" className="border-t border-white/20">
        <div className="shell flex flex-col items-center justify-center gap-4 py-8 text-center text-[0.88rem] text-white/80">
          <MadeWithLoveBadge />
          <span>© {year} Sky Brothers. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
