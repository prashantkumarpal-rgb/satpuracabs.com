import type { APIRoute } from "astro";
import { adminCookieName, adminToken } from "../../../lib/admin-auth";
import { runtimeEnv } from "../../../lib/db";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, locals, redirect }) => {
  const form = await request.formData();
  const password = String(form.get("password") || "");
  const secret = runtimeEnv(locals).ADMIN_SECRET?.trim();
  if (!secret || password !== secret) return redirect("/admin?error=1");
  cookies.set(adminCookieName, await adminToken(secret), {
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return redirect("/admin");
};
