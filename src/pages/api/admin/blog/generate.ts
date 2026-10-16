import type { APIRoute } from "astro";
import { adminCookieMatches, adminCookieName } from "../../../../lib/admin-auth";
import { draftBlog } from "../../../../lib/blog-llm";
import { runtimeEnv } from "../../../../lib/db";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, locals, redirect }) => {
  const env = runtimeEnv(locals);
  const allowed = await adminCookieMatches(cookies.get(adminCookieName)?.value, env.ADMIN_SECRET);
  if (!allowed) return redirect("/admin");
  if (!env.DB) return redirect("/admin/blog?error=database");
  const form = await request.formData();
  const topic = String(form.get("topic") || "").trim().slice(0, 180);
  const details = String(form.get("details") || "").trim().slice(0, 1200);
  if (topic.length < 8) return redirect("/admin/blog?error=topic");
  try {
    const draft = await draftBlog({
      topic,
      details,
      apiKey: env.LLM_API_KEY,
      baseUrl: env.LLM_BASE_URL,
      model: env.LLM_MODEL,
      ai: env.AI,
    });
    const existing = await env.DB.prepare("SELECT id FROM posts WHERE slug = ?").bind(draft.slug).first<{ id: number }>();
    const slug = existing ? `${draft.slug}-${Date.now().toString().slice(-4)}` : draft.slug;
    const result = await env.DB.prepare(
      "INSERT INTO posts (slug, title, description, topic, body, status) VALUES (?, ?, ?, ?, ?, 'draft') RETURNING id",
    )
      .bind(slug, draft.title, draft.description, topic, JSON.stringify(draft.body))
      .first<{ id: number }>();
    return redirect(`/admin/blog?id=${result?.id ?? ""}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : "The draft could not be written.";
    return redirect(`/admin/blog?error=${encodeURIComponent(message)}`);
  }
};
