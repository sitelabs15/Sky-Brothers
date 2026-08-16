export const PHONE_DISPLAY = "958 131 8297";
export const PHONE_TEL = "tel:+529581318297";
export const INSTAGRAM_URL = "https://www.instagram.com/limpieza.skybrothers/";
export const INSTAGRAM_HANDLE = "@limpieza.skybrothers";
const WA_BASE = "https://wa.me/529581318297";

export const DEFAULT_WA_MESSAGE =
  "Hola Sky Brothers, me interesa cotizar una limpieza a domicilio. ¿Me pueden dar información?";

export function createWhatsAppLink(message: string = DEFAULT_WA_MESSAGE): string {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}
