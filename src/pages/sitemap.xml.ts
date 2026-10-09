import type { APIRoute } from "astro";
import { site } from "../config/site";
import { publicPaths } from "../data/pages";

export const prerender = true;

export const GET: APIRoute = () => {
  const urls = publicPaths()
    .map((path) => {
      const loc = path === "/" ? `${site.url}/` : `${site.url}${path}`;
      return `<url><loc>${loc}</loc></url>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
