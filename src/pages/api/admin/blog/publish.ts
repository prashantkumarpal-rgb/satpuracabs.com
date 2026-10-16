import type { APIRoute } from "astro";
import { adminCookieMatches, adminCookieName } from "../../../../lib/admin-auth";
import type { BlogBody } from "../../../../lib/blog";
import { runtimeEnv } from "../../../../lib/db";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, locals, redirect }) => {
  const env = runtimeEnv(locals);
  const allowed = await adminCookieMatches(cookies.get(adminCookieName)?.value, env.ADMIN_SECRET);
  if (!allowed || !env.DB) return redirect("/admin/blog");
  const form = await request.formData();
  const id = Number(form.get("id"));
  const action = String(form.get("action") || "publish");
  if (!Number.isInteger(id) || id < 1) return redirect("/admin/blog");
  if (action === "delete") {
    await env.DB.prepare("DELETE FROM posts WHERE id = ? AND status = 'draft'").bind(id).run();
    return redirect("/admin/blog");
  }
  const row = await env.DB.prepare("SELECT body FROM posts WHERE id = ?").bind(id).first<{ body: string }>();
  if (!row) return redirect("/admin/blog");
  const body = JSON.parse(row.body) as BlogBody;
  body.intro = String(form.get("intro") || body.intro).trim().slice(0, 700);
  const title = String(form.get("title") || "").trim().slice(0, 90);
  const description = String(form.get("description") || "").trim().slice(0, 170);
  await env.DB.prepare(
    "UPDATE posts SET title = ?, description = ?, body = ?, status = 'published', published_at = strftime('%Y-%m-%dT%H:%M:%fZ','now') WHERE id = ?",
  )
    .bind(title, description, JSON.stringify(body), id)
    .run();
  return redirect("/admin/blog?published=1");
};
