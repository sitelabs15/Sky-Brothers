import sofaAntes from "@/assets/sofa-antes.jpg.asset.json";
import sofaDespues from "@/assets/sofa-despues.jpg.asset.json";
import autoAntes from "@/assets/auto-antes.jpg.asset.json";
import autoDespues from "@/assets/auto-despues.jpg.asset.json";
import colchonAntes from "@/assets/colchon-antes.jpg.asset.json";
import colchonDespues from "@/assets/colchon-despues.jpg.asset.json";
import logoBlancoAsset from "@/assets/logo-blanco.png.asset.json";
import logoAzulAsset from "@/assets/logo-azul.png.asset.json";
import maquinaAsset from "@/assets/maquina.png.asset.json";

// Recursos organizados por Sky Brothers (Logos, Publicaciones, Fotos, Slider)
import logoSinCirculo from "@/assets/recursos/logo-sin-circulo.png";
import logoCyan from "@/assets/recursos/logo-circular-cyan.jpeg";
import logoAzulOscuro from "@/assets/recursos/logo-circular-azul-oscuro.jpeg";
import logoNegro from "@/assets/recursos/logo-circular-negro.jpeg";
import sofaMarronAD from "@/assets/recursos/sofa-marron-antes-despues.jpeg";
import sofaGrisSL from "@/assets/recursos/sofa-gris-sucio-limpio.jpeg";
import autoAsientosSL from "@/assets/recursos/auto-asientos-sucio-limpio.jpeg";
import colchonPatronSL from "@/assets/recursos/colchon-patron-sucio-limpio.jpeg";
import colchonBlancoAD from "@/assets/recursos/colchon-blanco-antes-despues.jpeg";
import bannerMaquina from "@/assets/recursos/banner-maquina-skybrothers.jpeg";
import volanteInfo from "@/assets/recursos/volante-informativo.jpeg";
import publicacionPromocion from "@/assets/Skybrothers-recursos/Publicaciones/WhatsApp Image 2026-08-15 at 12.41.29 AM.jpeg";
import ilustracionBoquilla from "@/assets/recursos/ilustracion-boquilla.jpeg";
import inyeccionSuccionResultado from "@/assets/recursos/inyeccion-succion-resultado.jpeg";
import lavadoSanitizacionResultado from "@/assets/recursos/lavado-sanitizacion-resultado.jpeg";
import sliderLimpio from "@/assets/Skybrothers-recursos/Slider/limpio.png";
import sliderSucio from "@/assets/Skybrothers-recursos/Slider/sucio.png";

// Fotos reales del servicio
import fotoSofaMarron1 from "@/assets/recursos/foto-sofa-marron-1.jpeg";
import fotoSofaMarron2 from "@/assets/recursos/foto-sofa-marron-2.jpeg";
import fotoSofaMarron3 from "@/assets/recursos/foto-sofa-marron-3.jpeg";
import fotoTrabajo1 from "@/assets/recursos/foto-trabajo-1.jpeg";
import fotoTrabajo2 from "@/assets/recursos/foto-trabajo-2.jpeg";
import fotoTrabajo3 from "@/assets/recursos/foto-trabajo-3.jpeg";
import fotoTrabajo4 from "@/assets/recursos/foto-trabajo-4.jpeg";
import fotoTrabajo5 from "@/assets/recursos/foto-trabajo-5.jpeg";
import fotoTrabajo6 from "@/assets/recursos/foto-trabajo-6.jpeg";
import fotoTrabajo7 from "@/assets/recursos/foto-trabajo-7.jpeg";
import fotoTrabajo8 from "@/assets/recursos/foto-trabajo-8.jpeg";
import fotoTrabajo9 from "@/assets/recursos/foto-trabajo-9.jpeg";
import fotoTrabajo10 from "@/assets/recursos/foto-trabajo-10.jpeg";
import fotoTrabajo11 from "@/assets/recursos/foto-trabajo-11.jpeg";
import fotoTrabajo12 from "@/assets/recursos/foto-trabajo-12.jpeg";
import fotoTrabajo13 from "@/assets/recursos/foto-trabajo-13.jpeg";
import fotoTrabajo14 from "@/assets/Skybrothers-recursos/Fotos/WhatsApp Image 2026-08-15 at 12.49.09 AM (1).jpeg";
import fotoTrabajo15 from "@/assets/Skybrothers-recursos/Fotos/WhatsApp Image 2026-08-15 at 12.49.09 AM (2).jpeg";
import fotoTrabajo16 from "@/assets/Skybrothers-recursos/Fotos/WhatsApp Image 2026-08-15 at 12.49.09 AM.jpeg";
import fotoTrabajo17 from "@/assets/Skybrothers-recursos/Fotos/WhatsApp Image 2026-08-15 at 12.49.10 AM.jpeg";

export const img = {
  sliderLimpio,
  sliderSucio,
  sofaAntes: sofaAntes.url,
  sofaDespues: sofaDespues.url,
  sillonGris: sofaGrisSL,
  autoAntes: autoAntes.url,
  autoDespues: autoDespues.url,
  autoInterior: autoAsientosSL,
  autoAsiento: autoAsientosSL,
  colchonAntes: colchonAntes.url,
  colchonDespues: colchonDespues.url,
  colchonComparativa: colchonPatronSL,
  logoBlanco: logoBlancoAsset.url,
  logoAzul: logoSinCirculo,
  logoSinCirculo,
  logoCyan,
  logoAzulOscuro,
  logoNegro,
  maquina: ilustracionBoquilla,
  maquinaIcon: maquinaAsset.url,
  sofaMarronAD,
  sofaGrisSL,
  autoAsientosSL,
  colchonPatronSL,
  colchonBlancoAD,
  bannerMaquina,
  volanteInfo,
  publicacionPromocion,
  ilustracionBoquilla,
  inyeccionSuccionResultado,
  lavadoSanitizacionResultado,
  // Fotos de trabajo
  fotoSofaMarron1,
  fotoSofaMarron2,
  fotoSofaMarron3,
  fotoTrabajo1,
  fotoTrabajo2,
  fotoTrabajo3,
  fotoTrabajo4,
  fotoTrabajo5,
  fotoTrabajo6,
  fotoTrabajo7,
  fotoTrabajo8,
  fotoTrabajo9,
  fotoTrabajo10,
  fotoTrabajo11,
  fotoTrabajo12,
  fotoTrabajo13,
  fotoTrabajo14,
  fotoTrabajo15,
  fotoTrabajo16,
  fotoTrabajo17,
};

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Resultados", href: "#resultados" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Galería", href: "#galeria" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contacto", href: "#contacto" },
];

export type Service = {
  name: string;
  copy: string;
  message: string;
  image?: string;
  alt?: string;
  span: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    name: "Sofás y sillones",
    copy: "Lavado con inyección y extracción profunda de la tapicería que usas todos los días, removiendo polvo, arena, sudor y suciedad acumulada.",
    message: "Hola Sky Brothers, me interesa cotizar la limpieza de un sofá.",
    span: "",
    featured: false,
  },
  {
    name: "Colchones",
    copy: "Inyección, succión y lavado para eliminar bacterias, ácaros, heces de ácaros, sudor, suciedades y alergias acumuladas.",
    message: "Hola Sky Brothers, me interesa cotizar la limpieza de un colchón.",
    span: "",
    featured: false,
  },
  {
    name: "Interiores de auto",
    copy: "Asientos, tapicería y superficies textiles del interior de tu automóvil.",
    message: "Hola Sky Brothers, me interesa cotizar la limpieza del interior de un automóvil.",
    span: "",
    featured: false,
  },
  {
    name: "Sillas y tapicería",
    copy: "Comedor, oficina y sillas tapizadas.",
    message: "Hola Sky Brothers, me interesa cotizar la limpieza de sillas.",
    span: "",
    featured: false,
  },
  {
    name: "Alfombras y tapetes",
    copy: "Lavado de inyección, succión y extracción.",
    message: "Hola Sky Brothers, me interesa cotizar la limpieza de alfombras o tapetes.",
    span: "",
    featured: false,
  },
  {
    name: "Cunas y camastros",
    copy: "Textiles de descanso y exterior.",
    message: "Hola Sky Brothers, me interesa cotizar la limpieza de una cuna o camastro.",
    span: "",
  },
  {
    name: "Almohadas",
    copy: "Lavado profundo y desinfectado.",
    message: "Hola Sky Brothers, me interesa cotizar la limpieza de almohadas.",
    span: "",
  },
  {
    name: "Tapicería en general",
    copy: "Cuéntanos qué mueble necesitas limpiar.",
    message: "Hola Sky Brothers, me interesa cotizar la limpieza de tapicería.",
    span: "",
  },
];

export type Comparison = {
  id: string;
  label: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  caption: string;
  poster?: string;
};

export const comparisons: Comparison[] = [
  {
    id: "sofas-marron",
    label: "Sofás (Marrón)",
    before: img.fotoSofaMarron1,
    after: img.fotoSofaMarron3,
    beforeAlt: "Sofá marrón sucio antes del lavado",
    afterAlt: "Sofá marrón impecable secándose al sol tras inyección, succión y extracción",
    caption: "Sofá de sala marrón · Trabajo real de lavado y secado al sol en Huatulco",
    poster: img.sofaMarronAD,
  },
  {
    id: "sofas-gris",
    label: "Sofás (Gris)",
    before: img.sofaAntes,
    after: img.sofaDespues,
    beforeAlt: "Sofá gris antes de la limpieza",
    afterAlt: "Sofá gris completamente limpio tras inyección, succión y extracción",
    caption: "Sofá de sala · Lavado profundo con inyección, succión y extracción",
    poster: img.sofaGrisSL,
  },
  {
    id: "colchones-patron",
    label: "Colchones",
    before: img.colchonAntes,
    after: img.colchonDespues,
    beforeAlt: "Colchón antes de remover ácaros y manchas",
    afterAlt: "Colchón desinfectado y libre de suciedad acumulada",
    caption: "Colchón matrimonial · Desinfección y succión profunda",
    poster: img.colchonPatronSL,
  },
  {
    id: "autos",
    label: "Interiores de Auto",
    before: img.autoAntes,
    after: img.autoDespues,
    beforeAlt: "Asiento de automóvil manchado antes del servicio",
    afterAlt: "Asiento de automóvil como nuevo tras lavado de tapicería",
    caption: "Asientos e interior de auto · Limpieza automotriz completa",
    poster: img.autoAsientosSL,
  },
  {
    id: "colchones-blanco",
    label: "Colchones (Blanco)",
    before: img.colchonAntes,
    after: img.colchonDespues,
    beforeAlt: "Colchón blanco con suciedad acumulada",
    afterAlt: "Colchón blanco reluciente y desinfectado",
    caption: "Colchón blanco · Remoción de polvo y ácaros",
    poster: img.colchonBlancoAD,
  },
];

export const gallery = [
  {
    src: img.fotoSofaMarron1,
    alt: "Sofá marrón de dos plazas antes del lavado profundo",
    tag: "Sofás y Salas",
  },
  {
    src: img.fotoSofaMarron2,
    alt: "Inyección y succión en cojín de sofá marrón",
    tag: "Proceso de Inyección y Extracción",
  },
  {
    src: img.fotoSofaMarron3,
    alt: "Sofá marrón impecable secándose al sol tras el servicio",
    tag: "Sofás y Salas",
  },
  {
    src: img.fotoTrabajo1,
    alt: "Sofá de tela aterciopelada antes de la limpieza",
    tag: "Sofás y Salas",
  },
  {
    src: img.fotoTrabajo2,
    alt: "Detalle de suciedad en asientos de sofá antes del lavado",
    tag: "Sofás y Salas",
  },
  {
    src: img.fotoTrabajo3,
    alt: "Sofá aterciopelado terminado e impecable",
    tag: "Sofás y Salas",
  },
  {
    src: img.fotoTrabajo4,
    alt: "Sofá de sala restaurado secándose en el exterior",
    tag: "Sofás y Salas",
  },
  {
    src: img.fotoTrabajo5,
    alt: "Sofá modular naranja con manchas antes de lavar",
    tag: "Sofás y Salas",
  },
  {
    src: img.fotoTrabajo6,
    alt: "Módulo esquinero naranja con suciedad visible antes de lavar",
    tag: "Sofás y Salas",
  },
  {
    src: img.fotoTrabajo7,
    alt: "Sofá modular naranja limpio y desinfectado",
    tag: "Sofás y Salas",
  },
  {
    src: img.fotoTrabajo8,
    alt: "Proceso de extracción de espuma y suciedad en sofá",
    tag: "Proceso de Inyección y Extracción",
  },
  {
    src: img.fotoTrabajo9,
    alt: "Colchón matrimonial con manchas y suciedad acumulada antes",
    tag: "Colchones",
  },
  {
    src: img.fotoTrabajo10,
    alt: "Colchón matrimonial completamente blanco, limpio y desinfectado",
    tag: "Colchones",
  },
  {
    src: img.fotoTrabajo11,
    alt: "Módulo de sofá naranja terminado y libre de manchas",
    tag: "Sofás y Salas",
  },
  {
    src: img.fotoTrabajo12,
    alt: "Técnico operando boquilla de extracción profesional en sofá",
    tag: "Proceso de Inyección y Extracción",
  },
  {
    src: img.fotoTrabajo13,
    alt: "Técnico Sky Brothers en moto llegando con equipo profesional",
    tag: "Equipo y Servicio",
  },
  {
    src: img.fotoTrabajo14,
    alt: "Sofá-cama rojo con manchas profundas antes de limpieza",
    tag: "Sofás y Salas",
  },
  {
    src: img.fotoTrabajo15,
    alt: "Agua oscura y suciedad extraída de las fibras del mueble",
    tag: "Proceso de Inyección y Extracción",
  },
  {
    src: img.fotoTrabajo16,
    alt: "Sofá-cama rojo completamente renovado, libre de manchas y limpio",
    tag: "Sofás y Salas",
  },
  {
    src: img.fotoTrabajo17,
    alt: "Residuos y polvo atrapado succionados por la máquina",
    tag: "Proceso de Inyección y Extracción",
  },
];

export const zones = [
  "Bahías de Huatulco",
  "Copalita",
  "Santa María Huatulco",
  "Pochutla",
  "Puerto Escondido",
  "Áreas cercanas",
];

export const faqs = [
  {
    q: "¿El servicio es a domicilio?",
    a: "Sí. Sky Brothers realiza servicios de limpieza de muebles y tapicerías a domicilio dentro de su zona de cobertura.",
  },
  {
    q: "¿Qué pueden limpiar?",
    a: "Trabajamos sofás, sillones, colchones, sillas, cunas, camastros, alfombras, tapetes, almohadas, tapicería e interiores de automóvil, entre otros.",
  },
  {
    q: "¿En qué zonas trabajan?",
    a: "El servicio se ofrece en Bahías de Huatulco y distintas zonas cercanas. Consulta disponibilidad para Copalita, Santa María Huatulco, Pochutla, Puerto Escondido y alrededores.",
  },
  {
    q: "¿Cómo puedo solicitar una cotización?",
    a: "Puedes contactar directamente por WhatsApp al 958 131 8297 y explicar qué necesitas limpiar.",
  },
  {
    q: "¿Qué tipo de equipo utilizan?",
    a: "Sky Brothers utiliza máquinas profesionales de inyección, succión y extracción para realizar la limpieza de las superficies trabajadas.",
  },
];

export type CleaningFrequencyItem = {
  id: string;
  item: string;
  frequency: string;
  idealFor: string;
  reason: string;
  message: string;
};

export const cleaningFrequencies: CleaningFrequencyItem[] = [
  {
    id: "sofas",
    item: "Sofás y Salas de uso diario",
    frequency: "Cada 6 meses",
    idealFor: "Salas principales, sillones y sofás familiares",
    reason: "Elimina sudor corporal, polvo acumulado, células muertas y ácaros antes de que dañen el tejido.",
    message: "Hola Sky Brothers, me gustaría cotizar la limpieza de mi sala/sofá.",
  },
  {
    id: "colchones",
    item: "Colchones y Almohadas",
    frequency: "Cada 6 a 12 meses",
    idealFor: "Colchones matrimoniales, individuales y almohadas",
    reason: "Previene alergias respiratorias, erradica ácaros y elimina manchas de sudor y humedad de la costa.",
    message: "Hola Sky Brothers, me gustaría cotizar la desinfección de mis colchones.",
  },
  {
    id: "autos",
    item: "Interiores y Asientos de Auto",
    frequency: "Cada 3 a 6 meses",
    idealFor: "Autos particulares, camionetas y transporte",
    reason: "Remueve arena de playa, manchas de bebidas, polvo de carretera y bacterias del calor.",
    message: "Hola Sky Brothers, me gustaría cotizar el lavado de interiores de mi auto.",
  },
  {
    id: "sillas",
    item: "Sillas de Comedor y Oficina",
    frequency: "Cada 6 a 12 meses",
    idealFor: "Sillas tapizadas, comedores y despachos",
    reason: "Mantiene la higiene contra derrames de comida, grasa y suciedad por contacto constante.",
    message: "Hola Sky Brothers, me gustaría cotizar la limpieza de sillas.",
  },
  {
    id: "alfombras",
    item: "Alfombras y Tapetes",
    frequency: "Cada 6 meses",
    idealFor: "Tapetes de sala, recámaras y pasillos",
    reason: "Extrae suciedad atrapada en las fibras profundas y evita malos olores por humedad.",
    message: "Hola Sky Brothers, me gustaría cotizar la limpieza de tapetes/alfombras.",
  },
  {
    id: "cunas",
    item: "Cunas y Carriolas de Bebé",
    frequency: "Cada 3 a 4 meses",
    idealFor: "Cunas, carriolas y áreas de descanso infantil",
    reason: "Sanitización profunda libre de residuos agresivos para proteger la piel y salud del bebé.",
    message: "Hola Sky Brothers, me gustaría cotizar la limpieza y sanitización de cuna/carriola.",
  },
];
