export function digits(value: string): string {
  return value.replace(/\D/g, "");
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function whatsappHref(phone: string, message: string): string {
  return `https://wa.me/${digits(phone)}?text=${encodeURIComponent(message)}`;
}

export function phoneHref(configured: boolean, phone: string): string {
  return configured ? telHref(phone) : "/contact";
}

export function quoteHref(configured: boolean, phone: string, message: string): string {
  return configured ? whatsappHref(phone, message) : "/#quote";
}
