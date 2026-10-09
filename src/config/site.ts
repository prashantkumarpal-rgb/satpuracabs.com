const PLACEHOLDER_DISPLAY = "+91 XXXXX XXXXX";
const PLACEHOLDER_NUMBER = "+91XXXXXXXXXX";

function configured(value: string | undefined): string {
  const trimmed = value?.trim() ?? "";
  return trimmed;
}

const phoneConfigured = configured(import.meta.env.PUBLIC_PHONE_NUMBER);
const whatsappConfigured = configured(import.meta.env.PUBLIC_WHATSAPP_NUMBER);

export const site = {
  name: "Satpura Cabs",
  url: "https://satpuracabs.com",
  areas: "Pachmarhi • Tamia • Madhai • Pipariya • Bhopal",
  phoneDisplay: phoneConfigured || PLACEHOLDER_DISPLAY,
  phoneNumber: phoneConfigured || PLACEHOLDER_NUMBER,
  whatsappNumber: whatsappConfigured || PLACEHOLDER_NUMBER,
  usingPlaceholderPhone: !phoneConfigured,
  usingPlaceholderWhatsapp: !whatsappConfigured,
  quoteMessage: "Hello Satpura Cabs, I want a taxi quote.",
  quickMessage: "Hello Satpura Cabs, I need a taxi quote.",
  turnstileSiteKey: configured(import.meta.env.PUBLIC_TURNSTILE_SITE_KEY),
  gaMeasurementId: configured(import.meta.env.PUBLIC_GA_MEASUREMENT_ID),
} as const;
