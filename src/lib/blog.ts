export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogBody {
  intro: string;
  sections: BlogSection[];
  faqs: BlogFaq[];
  related: string[];
}

export interface BlogDraft {
  title: string;
  description: string;
  slug: string;
  body: BlogBody;
}

const blocked = /₹\s?\d|\brs\.?\s?\d|\b(?:best|cheapest|no\.?\s?1|number one)\s+taxi\b/i;

export function linkAllowlist(): string[] {
  const pages = [
    "/",
    "/pachmarhi-taxi",
    "/pipariya-taxi",
    "/tamia-taxi",
    "/madhai-taxi",
    "/pipariya-to-pachmarhi-taxi",
    "/pachmarhi-to-pipariya-taxi",
    "/bhopal-to-pachmarhi-taxi",
    "/pachmarhi-to-bhopal-taxi",
    "/pipariya-to-tamia-taxi",
    "/tamia-to-pipariya-taxi",
    "/pachmarhi-to-tamia-taxi",
    "/tamia-to-pachmarhi-taxi",
    "/pachmarhi-to-madhai-taxi",
    "/madhai-to-pachmarhi-taxi",
    "/tamia-to-madhai-taxi",
    "/madhai-to-tamia-taxi",
    "/matkuli-to-bhopal-taxi",
    "/bhopal-to-matkuli-taxi",
    "/pachmarhi-local-sightseeing",
    "/contact",
    "/blog",
  ];
  return pages;
}

export function slugify(value: string): string {
  const slug = value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 70)
    .replace(/^-|-$/g, "");
  return slug || "satpura-guide";
}

export function parseBlogDraft(raw: string): BlogDraft {
  const jsonText = raw.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  const parsed = JSON.parse(jsonText) as Record<string, unknown>;
  const title = text(parsed.title, 90);
  const description = text(parsed.description, 170);
  const intro = text(parsed.intro, 700);
  if (title.length < 8 || description.length < 40 || intro.length < 40) {
    throw new Error("The draft was too short to publish.");
  }
  const sections = Array.isArray(parsed.sections) ? parsed.sections : [];
  const faqs = Array.isArray(parsed.faqs) ? parsed.faqs : [];
  const body: BlogBody = {
    intro,
    sections: sections.slice(0, 6).flatMap((section) => {
      if (!section || typeof section !== "object") return [];
      const item = section as Record<string, unknown>;
      const heading = text(item.heading, 120);
      const paragraphs = Array.isArray(item.paragraphs)
        ? item.paragraphs.map((paragraph) => text(paragraph, 700)).filter((paragraph) => paragraph.length > 20)
        : [];
      return heading && paragraphs.length ? [{ heading, paragraphs }] : [];
    }),
    faqs: faqs.slice(0, 5).flatMap((faq) => {
      if (!faq || typeof faq !== "object") return [];
      const item = faq as Record<string, unknown>;
      const question = text(item.question, 160);
      const answer = text(item.answer, 500);
      return question && answer ? [{ question, answer }] : [];
    }),
    related: uniqueLinks(parsed.related),
  };
  if (body.sections.length < 2 || body.faqs.length < 2) {
    throw new Error("The draft needs at least two sections and two FAQs.");
  }
  const joined = [title, description, intro, ...body.sections.flatMap((section) => [section.heading, ...section.paragraphs]), ...body.faqs.flatMap((faq) => [faq.question, faq.answer])].join(" ");
  if (blocked.test(joined)) {
    throw new Error("The draft included a fare or a claim such as best or cheapest taxi. Generate it again.");
  }
  return { title, description, slug: slugify(text(parsed.slug, 80) || title), body };
}

function uniqueLinks(value: unknown): string[] {
  const allowed = new Set(linkAllowlist());
  if (!Array.isArray(value)) return [];
  const links: string[] = [];
  for (const item of value) {
    if (typeof item !== "string" || !allowed.has(item) || links.includes(item)) continue;
    links.push(item);
    if (links.length === 4) break;
  }
  return links;
}

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, max) : "";
}
