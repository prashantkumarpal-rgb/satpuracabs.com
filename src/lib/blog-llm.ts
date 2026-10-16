import { linkAllowlist, parseBlogDraft, type BlogDraft } from "./blog";

interface ChatBinding {
  run: (model: string, input: { messages: { role: string; content: string }[] }) => Promise<{ response?: string }>;
}

export async function draftBlog(options: {
  topic: string;
  details: string;
  apiKey?: string;
  baseUrl?: string;
  model?: string;
  ai?: ChatBinding;
}): Promise<BlogDraft> {
  const allow = linkAllowlist().join(", ");
  const system = [
    "You write short local guides for Satpura Cabs, a taxi enquiry service in Madhya Pradesh.",
    "Use Indian English. Sound like a person who knows these roads.",
    "Answer the topic in the intro. Do not invent fares, reviews, ratings, awards, statistics, or driver names.",
    "Never say best taxi, cheapest taxi, or No.1 taxi.",
    "If price comes up, say to ask Satpura Cabs for the current fare.",
    "Related links must be copied exactly from the allowlist.",
    "Return only JSON with title, description, slug, intro, sections, faqs, related.",
    "Use 3 to 5 sections. Each section has a heading and one or two plain-text paragraphs.",
    "Use 3 FAQs. Headings can be questions a traveller would ask.",
    `Allowlist: ${allow}`,
  ].join(" ");
  const user = `Topic: ${options.topic}\nExtra details, if any: ${options.details || "None."}`;
  const content = options.apiKey
    ? await openAi(options.apiKey, options.baseUrl || "https://api.openai.com/v1", options.model || "gpt-4o-mini", system, user)
    : await workersAi(options.ai, options.model || "@cf/meta/llama-3.1-8b-instruct", system, user);
  return parseBlogDraft(content);
}

async function openAi(apiKey: string, baseUrl: string, model: string, system: string, user: string): Promise<string> {
  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      temperature: 0.4,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    }),
  });
  if (!response.ok) throw new Error(`The writing model returned ${response.status}.`);
  const payload = (await response.json()) as { choices?: { message?: { content?: string } }[] };
  const content = payload.choices?.[0]?.message?.content;
  if (!content) throw new Error("The writing model returned an empty draft.");
  return content;
}

async function workersAi(ai: ChatBinding | undefined, model: string, system: string, user: string): Promise<string> {
  if (!ai) throw new Error("Add LLM_API_KEY or a Cloudflare Workers AI binding before generating a guide.");
  const result = await ai.run(model, {
    messages: [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
  });
  if (!result.response) throw new Error("The writing model returned an empty draft.");
  return result.response;
}
