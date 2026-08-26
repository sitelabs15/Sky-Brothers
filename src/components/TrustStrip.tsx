import { Home, Wind, Droplets, MapPin } from "lucide-react";

const items = [
  { icon: Home, label: "A domicilio" },
  { icon: Wind, label: "Inyección y extracción" },
  { icon: Droplets, label: "Limpieza profunda" },
  { icon: MapPin, label: "Huatulco, Oaxaca" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Beneficios del servicio"
      data-section="trust-strip"
      data-animate="trust-strip"
      className="mt-14 bg-sky-soft md:mt-20"
    >
      <div
        data-animate="trust-inner"
        className="shell grid grid-cols-2 gap-y-6 py-8 md:grid-cols-4 md:py-10"
      >
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            data-animate="trust-item"
            className="flex items-center gap-3 md:justify-center md:border-l md:border-sky-line/80 md:first:border-l-0"
          >
            <Icon
              data-animate="trust-icon"
              strokeWidth={1.7}
              className="h-6 w-6 shrink-0 text-sky-primary"
            />
            <span className="text-[0.98rem] font-medium text-sky-ink">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
