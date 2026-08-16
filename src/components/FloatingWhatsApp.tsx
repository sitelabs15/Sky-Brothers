import { useEffect, useState } from "react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { cn } from "@/lib/utils";

export function FloatingWhatsApp() {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHighlight(true), 6000);
    const t2 = setTimeout(() => setHighlight(false), 8200);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  return (
    <a
      data-component="floating-whatsapp"
      href={createWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar por WhatsApp con Sky Brothers"
      className={cn(
        "fixed right-4 bottom-[18px] z-40 inline-flex min-h-[52px] items-center gap-2 rounded-[14px] bg-sky-primary px-5 text-[0.95rem] font-semibold text-white shadow-[0_16px_36px_-18px_rgba(8,10,11,0.7)] transition-all duration-500 hover:bg-sky-deep md:right-8",
        highlight && "ring-4 ring-sky-cyan/40",
      )}
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#25D366] text-white">
        <WhatsAppIcon className="h-4 w-4" />
      </span>
      <span className="md:hidden">Agendar</span>
      <span className="hidden md:inline">Agendar por WhatsApp</span>
    </a>
  );
}
