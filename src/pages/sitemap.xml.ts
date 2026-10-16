import type { APIRoute } from "astro";
import { site } from "../config/site";
import { publicPaths } from "../data/pages";
import { runtimeEnv } from "../lib/db";

export const prerender = false;

export const GET: APIRoute = async ({ locals }) => {
  const paths = [...publicPaths(), "/blog"];
  const env = runtimeEnv(locals);
  if (env.DB) {
    try {
      const result = await env.DB.prepare("SELECT slug FROM posts WHERE status = 'published'").all<{ slug: string }>();
      for (const row of result.results ?? []) paths.push(`/blog/${row.slug}`);
    } catch {
      // The posts table is applied separately from the enquiry table.
    }
  }
  const urls = paths
    .map((path) => `<url><loc>${path === "/" ? `${site.url}/` : `${site.url}${path}`}</loc></url>`)
    .join("");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
