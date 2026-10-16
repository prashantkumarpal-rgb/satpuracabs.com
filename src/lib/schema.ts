import { site } from "../config/site";
import type { RouteFaq } from "../data/routes";

export function taxiServiceSchema() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: site.name,
    url: site.url,
    areaServed: ["Pachmarhi", "Pipariya", "Tamia", "Madhai", "Matkuli", "Bhopal"].map((name) => ({
      "@type": "Place",
      name,
    })),
  };
  if (!site.usingPlaceholderPhone) data.telephone = site.phoneNumber;
  return data;
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: new URL(path, site.url).href,
    provider: {
      "@type": "TaxiService",
      name: site.name,
      url: site.url,
    },
    areaServed: "Madhya Pradesh",
  };
}

export function breadcrumbSchema(currentName: string, path: string, parent?: { name: string; path: string }) {
  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
  ];
  if (parent) {
    items.push({ "@type": "ListItem", position: 2, name: parent.name, item: new URL(parent.path, site.url).href });
  }
  items.push({ "@type": "ListItem", position: items.length + 1, name: currentName, item: new URL(path, site.url).href });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function faqSchema(faqs: readonly RouteFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
