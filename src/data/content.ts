export const routeOverview =
  "For an accurate quote, tell us your pickup point, travel date, time, number of passengers and whether you need one-way or return travel.";

export const planningNotes = [
  {
    title: "Pickup details",
    text: "Tell us the hotel, railway station, airport or landmark where the driver should arrive.",
  },
  {
    title: "Return journey",
    text: "If you need a return cab, mention the return date and approximate time in the notes.",
  },
  {
    title: "Local plans",
    text: "For sightseeing or multi-stop trips, tell us your itinerary so we can quote appropriately.",
  },
] as const;

export const routeFaqs = [
  {
    question: "How do I request this taxi?",
    answer:
      "Use the enquiry form or WhatsApp button. A person can then confirm vehicle availability and the fare.",
  },
  {
    question: "Can I book a return trip?",
    answer: "Yes. Mention the return date and time when requesting the quote.",
  },
  {
    question: "Can you pick me up from a railway station?",
    answer:
      "Yes, where station pickup is practical for the route. Give the train number if useful.",
  },
] as const;

export const commonRequests =
  "Station pickup • Hotel transfer • One-way taxi • Return trip • Local sightseeing • Intercity transfer";

export const destinationPlan =
  "Share your travel date, time, pickup point and destination. We will confirm vehicle availability and fare before the journey.";

export interface RelatedLink {
  href: string;
  title: string;
  text: string;
}

export const destinationRelated: RelatedLink[] = [
  {
    href: "/pipariya-to-pachmarhi-taxi",
    title: "Pipariya → Pachmarhi",
    text: "Railway station to hill station transfer.",
  },
  {
    href: "/bhopal-to-pachmarhi-taxi",
    title: "Bhopal → Pachmarhi",
    text: "Intercity taxi service.",
  },
  {
    href: "/pachmarhi-to-madhai-taxi",
    title: "Pachmarhi → Madhai",
    text: "Satpura region transfer.",
  },
];
