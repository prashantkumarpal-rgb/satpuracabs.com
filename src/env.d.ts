/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_PHONE_NUMBER?: string;
  readonly PUBLIC_WHATSAPP_NUMBER?: string;
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
  readonly PUBLIC_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type Runtime = import("@astrojs/cloudflare").Runtime<import("./lib/db").WorkerEnv>;

declare namespace App {
  interface Locals extends Runtime {}
}
