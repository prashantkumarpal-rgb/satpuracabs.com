import type { EnquiryRecord } from "./enquiry";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function sendEnquiryEmail(options: {
  apiKey: string;
  from: string;
  to: string;
  enquiry: EnquiryRecord;
  phoneHref: string;
  whatsappHref: string;
}): Promise<void> {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#5f6f65">${escapeHtml(label)}</td><td>${escapeHtml(value || "—")}</td></tr>`;
  const enquiry = options.enquiry;
  const html = `
    <p>New Satpura Cabs enquiry.</p>
    <table>${row("Customer", enquiry.name)}${row("Phone", enquiry.phone)}${row("Pickup", enquiry.pickup)}${row("Destination", enquiry.destination)}${row("Date", enquiry.travelDate)}${row("Time", enquiry.travelTime)}${row("Passengers", enquiry.passengers)}${row("Vehicle", enquiry.vehicle)}${row("Trip type", enquiry.tripType)}${row("Notes", enquiry.notes)}${row("Source page", enquiry.sourcePage)}${row("Landing page", enquiry.landingPage)}${row("Referrer", enquiry.referrer)}${row("UTM source", enquiry.utmSource)}${row("UTM medium", enquiry.utmMedium)}${row("UTM campaign", enquiry.utmCampaign)}</table>
    <p><a href="${escapeHtml(options.phoneHref)}">Call</a> · <a href="${escapeHtml(options.whatsappHref)}">WhatsApp</a></p>
  `;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${options.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: options.from,
      to: [options.to],
      subject: `Taxi enquiry: ${enquiry.pickup} to ${enquiry.destination}`,
      html,
    }),
  });
  if (!response.ok) {
    throw new Error(`Resend responded with ${response.status}`);
  }
}
