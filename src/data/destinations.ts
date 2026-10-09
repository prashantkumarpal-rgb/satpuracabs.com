import type { ImageKey } from "./images";
import type { RouteFaq, RouteLink } from "./routes";

export interface DestinationData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  crumb: string;
  lead: string;
  planTitle: string;
  image: ImageKey;
  imageAlt: string;
  pickup: string;
  whatsappMessage: string;
  related: RouteLink[];
  faqs: RouteFaq[];
}

const pipariyaLink: RouteLink = {
  href: "/pipariya-taxi",
  title: "Pipariya taxi",
  text: "Station transfers and onward Satpura trips.",
};
const pachmarhiLink: RouteLink = {
  href: "/pachmarhi-taxi",
  title: "Pachmarhi taxi",
  text: "Local cabs and hill-station transfers.",
};
const tamiaLink: RouteLink = {
  href: "/tamia-taxi",
  title: "Tamia taxi",
  text: "Trips for Tamia and the Patalkot side.",
};
const madhaiLink: RouteLink = {
  href: "/madhai-taxi",
  title: "Madhai taxi",
  text: "Road transfers on the Madhai side.",
};
const servicesLink: RouteLink = {
  href: "/pachmarhi-local-sightseeing",
  title: "Satpura services",
  text: "Pachmarhi sightseeing and other local cab plans.",
};

export const destinations: DestinationData[] = [
  {
    slug: "pachmarhi-taxi",
    title: "Pachmarhi Taxi Service | Satpura Cabs",
    description:
      "Local Pachmarhi taxi service for sightseeing, Pipariya station transfers, Bhopal trips and Satpura travel.",
    h1: "Pachmarhi taxi",
    crumb: "Pachmarhi",
    lead: "Pachmarhi is the main hill-station base for many Satpura trips. Satpura Cabs focuses on local taxi journeys, station transfers, sightseeing and connections to nearby destinations.",
    planTitle: "Plan your Pachmarhi cab",
    image: "pachmarhi",
    imageAlt: "Illustrated Pachmarhi hills for the local taxi service",
    pickup: "Pachmarhi",
    whatsappMessage: "Hello Satpura Cabs, I need a taxi in Pachmarhi.",
    related: [
      { href: "/pipariya-to-pachmarhi-taxi", title: "Pipariya → Pachmarhi", text: "Railway station to the hill station." },
      { href: "/bhopal-to-pachmarhi-taxi", title: "Bhopal → Pachmarhi", text: "City, airport or station pickup." },
      { href: "/pachmarhi-to-madhai-taxi", title: "Pachmarhi → Madhai", text: "Transfer towards the Madhai side." },
      servicesLink,
    ],
    faqs: [
      { question: "What does a Pachmarhi taxi cover?", answer: "Station transfers, hotel drops, Bhopal trips, Madhai or Tamia connections, and local sightseeing when you ask for it." },
      { question: "Do you show cab fares on this page?", answer: "No. Ask for the current fare for your date, vehicle and route." },
    ],
  },
  {
    slug: "pipariya-taxi",
    title: "Pipariya Taxi Service | Satpura Cabs",
    description:
      "Pipariya taxi service including railway station transfers to Pachmarhi, Tamia and nearby destinations.",
    h1: "Pipariya taxi",
    crumb: "Pipariya",
    lead: "Pipariya is a key rail gateway for travellers heading towards Pachmarhi. Use Satpura Cabs for station pickup, hotel drop and onward travel.",
    planTitle: "Plan your Pipariya cab",
    image: "pipariya",
    imageAlt: "Illustrated Pipariya road for railway station taxi pickups",
    pickup: "Pipariya Railway Station",
    whatsappMessage: "Hello Satpura Cabs, I need a taxi in Pipariya.",
    related: [
      { href: "/pipariya-to-pachmarhi-taxi", title: "Pipariya → Pachmarhi", text: "The usual station-to-hill transfer." },
      { href: "/pachmarhi-to-pipariya-taxi", title: "Pachmarhi → Pipariya", text: "A drop back at the railway station." },
      { href: "/pipariya-to-tamia-taxi", title: "Pipariya → Tamia", text: "For Tamia and the Patalkot side." },
    ],
    faqs: [
      { question: "Can you meet a train at Pipariya Railway Station?", answer: "Yes. Send the train number and a phone number." },
      { question: "Is Pipariya only for Pachmarhi?", answer: "Pachmarhi is the common drop, but Tamia and other Satpura points can be quoted too." },
    ],
  },
  {
    slug: "tamia-taxi",
    title: "Tamia Taxi Service | Satpura Cabs",
    description: "Taxi service for Tamia, Patalkot region, Pipariya and nearby Satpura routes.",
    h1: "Tamia taxi",
    crumb: "Tamia",
    lead: "Arrange a local cab for Tamia trips, including journeys from Pipariya and connections with the wider Satpura region. Confirm the exact pickup, destination and fare before travel.",
    planTitle: "Plan your Tamia cab",
    image: "tamia",
    imageAlt: "Illustrated Tamia valley for the local cab service",
    pickup: "Tamia",
    whatsappMessage: "Hello Satpura Cabs, I need a taxi in Tamia.",
    related: [pipariyaLink, pachmarhiLink, madhaiLink],
    faqs: [
      { question: "Can I book Pipariya to Tamia?", answer: "Yes. There is a separate page for that route, and the form on this page can start from Tamia or Pipariya." },
      { question: "Is every Patalkot point open to cars?", answer: "No. Confirm access on the day before you travel." },
    ],
  },
  {
    slug: "madhai-taxi",
    title: "Madhai Taxi Service | Satpura Cabs",
    description: "Taxi service for Madhai and Satpura tourism transfers from Bhopal, Pachmarhi and nearby towns.",
    h1: "Madhai taxi",
    crumb: "Madhai",
    lead: "Madhai is a gateway for Satpura wildlife experiences. Satpura Cabs can arrange road transfers to and from Madhai; safari permits and safari operators are separate from the cab service.",
    planTitle: "Plan your Madhai cab",
    image: "madhai",
    imageAlt: "Illustrated Satpura forest for Madhai taxi transfers",
    pickup: "Madhai",
    whatsappMessage: "Hello Satpura Cabs, I need a taxi in Madhai.",
    related: [pachmarhiLink, tamiaLink, servicesLink],
    faqs: [
      { question: "Does the taxi include a Satpura safari?", answer: "No. The cab is the road transfer. Permits and safari bookings are handled separately." },
      { question: "Which places connect with Madhai?", answer: "Pachmarhi and Tamia are the usual Satpura links. Ask if you are coming from somewhere else." },
    ],
  },
];

export function getDestination(slug: string): DestinationData | undefined {
  return destinations.find((item) => item.slug === slug);
}
