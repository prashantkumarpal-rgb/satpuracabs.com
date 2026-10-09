import type { APIRoute } from "astro";
import { adminCookieMatches, adminCookieName } from "../../../lib/admin-auth";
import { runtimeEnv } from "../../../lib/db";
import { isEnquiryStatus } from "../../../lib/enquiry";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, locals, redirect }) => {
  const env = runtimeEnv(locals);
  const allowed = await adminCookieMatches(cookies.get(adminCookieName)?.value, env.ADMIN_SECRET);
  if (!allowed || !env.DB) return redirect("/admin");
  const form = await request.formData();
  const id = Number(form.get("id"));
  const status = String(form.get("status") || "");
  const quotedFare = String(form.get("quoted_fare") || "").trim().slice(0, 40);
  if (!Number.isInteger(id) || id < 1 || !isEnquiryStatus(status)) return redirect("/admin");
  await env.DB.prepare("UPDATE enquiries SET status = ?, quoted_fare = ? WHERE id = ?").bind(status, quotedFare, id).run();
  return redirect(`/admin?status=${status}`);
};
