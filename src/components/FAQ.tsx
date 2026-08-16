import { faqs } from "@/data/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section
      aria-label="Preguntas frecuentes"
      data-section="faq"
      data-faq-section
      className="relative bg-sky-soft py-24 md:py-32 overflow-hidden"
    >
      {/* Ondas de agua decorativas en fondo */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 340"
        className="pointer-events-none absolute -top-8 left-0 h-[340px] w-[115%] text-sky-cyan/25"
        fill="none"
      >
        <path
          d="M-40 170C200 80 380 240 660 140S1040 20 1320 110s240 60 360 20"
          stroke="currentColor"
          strokeWidth="1.8"
          className="flow-line-slow"
          opacity="0.6"
        />
        <path
          d="M-40 230C220 140 400 300 680 200S1060 80 1340 170s220 40 340 0"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.35"
        />
      </svg>

      <div className="shell relative grid gap-10 lg:grid-cols-[38fr_62fr] lg:gap-16">
        <div data-animate="faq-header">
          <p data-animate="faq-eyebrow" className="eyebrow">
            Dudas comunes
          </p>
          <h2 className="h2-display mt-3">
            <span className="line-mask">
              <span data-animate="faq-line" className="block">
                Preguntas
              </span>
            </span>
            <span className="line-mask">
              <span data-animate="faq-line" className="block text-sky-primary">
                frecuentes.
              </span>
            </span>
          </h2>
        </div>

        <div data-animate="faq-list">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                data-animate="faq-item"
                className="border-sky-line"
              >
                <AccordionTrigger className="py-5 text-left text-[1.06rem] font-semibold text-sky-ink hover:no-underline md:text-[1.15rem] group transition-transform duration-200 hover:translate-x-1">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[1rem] leading-[1.65] text-sky-muted">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
