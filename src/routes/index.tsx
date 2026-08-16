import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ResultsGallery } from "@/components/ResultsGallery";
import { Process } from "@/components/Process";
import { ValueSection } from "@/components/ValueSection";
import { BrandBreak } from "@/components/BrandBreak";
import { Coverage } from "@/components/Coverage";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Preloader } from "@/components/Preloader";

const TITLE = "Sky Brothers | Limpieza de Sofás, Colchones y Tapicería en Huatulco";
const DESCRIPTION =
  "Limpieza, lavado y desinfección profunda de sofás, colchones, sillones, tapicería e interiores de auto a domicilio en Bahías de Huatulco, Oaxaca. Agenda por WhatsApp.";

const schema = {
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <BeforeAfter />
        <ResultsGallery />
        <Process />
        <ValueSection />
        <BrandBreak />
        <Coverage />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
