export interface D1Prepared {
  bind(...values: unknown[]): D1Prepared;
  first<T>(): Promise<T | null>;
  all<T>(): Promise<{ results: T[] }>;
  run(): Promise<unknown>;
}

export interface EnquiryDatabase {
  prepare(sql: string): D1Prepared;
}

export interface WorkerEnv {
  DB?: EnquiryDatabase;
  TURNSTILE_SECRET_KEY?: string;
  RESEND_API_KEY?: string;
  ENQUIRY_TO_EMAIL?: string;
  ENQUIRY_FROM_EMAIL?: string;
  ADMIN_SECRET?: string;
  PHONE_NUMBER?: string;
  WHATSAPP_NUMBER?: string;
}

export function runtimeEnv(locals: { runtime?: { env?: WorkerEnv } }): WorkerEnv {
  return locals.runtime?.env ?? {};
}
