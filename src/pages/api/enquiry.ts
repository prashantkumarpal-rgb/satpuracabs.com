import type { APIRoute } from "astro";
import { site } from "../../config/site";
import { validateEnquiry } from "../../lib/enquiry";
import { runtimeEnv } from "../../lib/db";
import { sendEnquiryEmail } from "../../lib/email";
import { isRateLimited } from "../../lib/rate-limit";
import { digits, telHref, whatsappHref } from "../../lib/links";
import { turnstilePasses } from "../../lib/turnstile";

export const prerender = false;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request, locals }) => {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "Send the enquiry as JSON." }, 400);
  }

  const parsed = validateEnquiry(payload);
  if (!parsed.ok) return json({ ok: false, error: parsed.error }, 400);
  if (parsed.silent) return json({ ok: true });

  const env = runtimeEnv(locals);
  if (!env.DB) return json({ ok: false, error: "Enquiry storage is not connected yet." }, 503);

  const secret = env.TURNSTILE_SECRET_KEY?.trim();
  if (secret) {
    const ip = request.headers.get("cf-connecting-ip") || "";
    const passed = await turnstilePasses(secret, parsed.value.turnstileToken, ip);
    if (!passed) return json({ ok: false, error: "Complete the security check and try again." }, 400);
  }

  const ip = request.headers.get("cf-connecting-ip") || "local";
  const ipLimited = await isRateLimited(env.DB, `ip:${ip}`, 8);
  const phoneLimited = await isRateLimited(env.DB, `phone:${parsed.value.phone}`, 5);
  if (ipLimited || phoneLimited) {
    return json({ ok: false, error: "Too many enquiries just now. Please call or try again later." }, 429);
  }

  const enquiry = parsed.value;
  await env.DB.prepare(
    `INSERT INTO enquiries (
      name, phone, pickup, destination, travel_date, travel_time, passengers, vehicle, trip_type, notes,
      source_page, landing_page, referrer, utm_source, utm_medium, utm_campaign, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new')`,
  )
    .bind(
      enquiry.name,
      enquiry.phone,
      enquiry.pickup,
      enquiry.destination,
      enquiry.travelDate,
      enquiry.travelTime,
      enquiry.passengers,
      enquiry.vehicle,
      enquiry.tripType,
      enquiry.notes,
      enquiry.sourcePage,
      enquiry.landingPage,
      enquiry.referrer,
      enquiry.utmSource,
      enquiry.utmMedium,
      enquiry.utmCampaign,
    )
    .run();

  let email: "sent" | "skipped" | "failed" = "skipped";
  if (env.RESEND_API_KEY && env.ENQUIRY_TO_EMAIL && env.ENQUIRY_FROM_EMAIL) {
    const phone = env.PHONE_NUMBER || site.phoneNumber;
    const whatsapp = env.WHATSAPP_NUMBER || site.whatsappNumber;
    try {
      await sendEnquiryEmail({
        apiKey: env.RESEND_API_KEY,
        from: env.ENQUIRY_FROM_EMAIL,
        to: env.ENQUIRY_TO_EMAIL,
        enquiry,
        phoneHref: telHref(phone),
        whatsappHref: whatsappHref(whatsapp, `Hello, this is Satpura Cabs returning your enquiry from ${enquiry.pickup} to ${enquiry.destination}.`),
      });
      email = "sent";
    } catch {
      email = "failed";
    }
  }

  return json({ ok: true, email, whatsapp: digits(env.WHATSAPP_NUMBER || site.whatsappNumber) });
};
