export const vehicles = [
  { name: "Hatchback", use: "1–3 passengers" },
  { name: "Sedan", use: "Up to 4 passengers" },
  { name: "SUV / Ertiga", use: "Families / extra luggage" },
  { name: "Tempo Traveller", use: "Larger groups" },
] as const;

export const vehicleOptions = [
  "Any suitable vehicle",
  "Hatchback",
  "Sedan",
  "SUV / Ertiga",
  "Tempo Traveller",
] as const;

export const passengerOptions = ["1–3", "4–5", "6–7", "8–12"] as const;

export const tripTypes = [
  "One way",
  "Return",
  "Local sightseeing",
  "Airport transfer",
  "Railway station transfer",
] as const;

export const fareNote =
  "Do not publish a fare until your actual operating price is confirmed. This page intentionally uses enquiry-based pricing.";

export const askForFare = "Ask for current fare";
