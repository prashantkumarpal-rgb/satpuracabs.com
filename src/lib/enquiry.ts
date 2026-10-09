const passengerOptions = ["1–3", "4–5", "6–7", "8–12"];
const vehicleOptions = ["Any suitable vehicle", "Hatchback", "Sedan", "SUV / Ertiga", "Tempo Traveller"];
const tripTypes = ["One way", "Return", "Local sightseeing", "Airport transfer", "Railway station transfer"];

export const enquiryStatuses = [
  "new",
  "called",
  "quoted",
  "confirmed",
  "completed",
  "cancelled",
] as const;

export type EnquiryStatus = (typeof enquiryStatuses)[number];

export interface EnquiryRecord {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  travelDate: string;
  travelTime: string;
  passengers: string;
  vehicle: string;
  tripType: string;
  notes: string;
  sourcePage: string;
  landingPage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  turnstileToken: string;
}

export type EnquiryResult =
  | { ok: true; silent?: boolean; value: EnquiryRecord }
  | { ok: false; error: string };

const limit = (value: string, max: number) => value.trim().slice(0, max);

function text(body: Record<string, unknown>, key: string): string {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

export function validateEnquiry(input: unknown): EnquiryResult {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Send the enquiry as JSON." };
  }
  const body = input as Record<string, unknown>;
  if (text(body, "company")) {
    return {
      ok: true,
      silent: true,
      value: emptyRecord(),
    };
  }

  const name = limit(text(body, "name"), 80);
  const phoneRaw = text(body, "phone");
  const phoneDigits = phoneRaw.replace(/\D/g, "");
  const pickup = limit(text(body, "pickup"), 120);
  const destination = limit(text(body, "destination"), 120);
  const travelDate = text(body, "date");
  const travelTime = text(body, "time");
  const passengers = text(body, "passengers");
  const vehicle = text(body, "vehicle");
  const tripType = text(body, "tripType") || text(body, "trip_type");
  const notes = limit(text(body, "notes"), 1000);

  if (name.length < 2) return { ok: false, error: "Enter your name." };
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return { ok: false, error: "Enter a valid mobile number." };
  }
  if (pickup.length < 2) return { ok: false, error: "Enter a pickup point." };
  if (destination.length < 2) return { ok: false, error: "Enter a destination." };
  if (!/^\d{4}-\d{2}-\d{2}$/.test(travelDate)) {
    return { ok: false, error: "Enter a travel date." };
  }
  if (!/^\d{2}:\d{2}$/.test(travelTime)) {
    return { ok: false, error: "Enter a travel time." };
  }
  if (passengers && !passengerOptions.includes(passengers)) {
    return { ok: false, error: "Choose a passenger group." };
  }
  if (vehicle && !vehicleOptions.includes(vehicle)) {
    return { ok: false, error: "Choose a vehicle." };
  }
  if (tripType && !tripTypes.includes(tripType)) {
    return { ok: false, error: "Choose a trip type." };
  }

  return {
    ok: true,
    value: {
      name,
      phone: phoneDigits,
      pickup,
      destination,
      travelDate,
      travelTime,
      passengers,
      vehicle: vehicle || "Any suitable vehicle",
      tripType: tripType || "One way",
      notes,
      sourcePage: limit(text(body, "source_page"), 300),
      landingPage: limit(text(body, "landing_page"), 300),
      referrer: limit(text(body, "referrer"), 500),
      utmSource: limit(text(body, "utm_source"), 120),
      utmMedium: limit(text(body, "utm_medium"), 120),
      utmCampaign: limit(text(body, "utm_campaign"), 120),
      turnstileToken: limit(text(body, "turnstileToken") || text(body, "cf-turnstile-response"), 2048),
    },
  };
}

function emptyRecord(): EnquiryRecord {
  return {
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    travelDate: "",
    travelTime: "",
    passengers: "",
    vehicle: "",
    tripType: "",
    notes: "",
    sourcePage: "",
    landingPage: "",
    referrer: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    turnstileToken: "",
  };
}

export function isEnquiryStatus(value: string): value is EnquiryStatus {
  return enquiryStatuses.includes(value as EnquiryStatus);
}
