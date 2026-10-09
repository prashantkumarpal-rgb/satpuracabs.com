import type { ImageKey } from "./images";

export interface RouteLink {
  href: string;
  title: string;
  text: string;
}

export interface RouteNote {
  title: string;
  text: string;
}

export interface RouteFaq {
  question: string;
  answer: string;
}

export interface RouteData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  overviewTitle: string;
  overview: string;
  pickups: string[];
  drops: string[];
  tripNote: string;
  planning: RouteNote[];
  faqs: RouteFaq[];
  related: RouteLink[];
  image: ImageKey;
  imageAlt: string;
  pickup: string;
  drop: string;
  whatsappMessage: string;
}

const pachmarhi: RouteLink = {
  href: "/pachmarhi-taxi",
  title: "Pachmarhi taxi",
  text: "Local journeys, station transfers and sightseeing from Pachmarhi.",
};
const pipariya: RouteLink = {
  href: "/pipariya-taxi",
  title: "Pipariya taxi",
  text: "Railway station pickup and onward trips from Pipariya.",
};
const tamia: RouteLink = {
  href: "/tamia-taxi",
  title: "Tamia taxi",
  text: "Cabs for Tamia and the Patalkot side.",
};
const madhai: RouteLink = {
  href: "/madhai-taxi",
  title: "Madhai taxi",
  text: "Road transfers for the Satpura and Madhai side.",
};
const sightseeing: RouteLink = {
  href: "/pachmarhi-local-sightseeing",
  title: "Pachmarhi sightseeing",
  text: "A local car and driver for Pachmarhi stops.",
};
const reversePipariya: RouteLink = {
  href: "/pachmarhi-to-pipariya-taxi",
  title: "Pachmarhi to Pipariya",
  text: "Drop at Pipariya Railway Station for your train.",
};
const reverseBhopal: RouteLink = {
  href: "/pachmarhi-to-bhopal-taxi",
  title: "Pachmarhi to Bhopal",
  text: "Return towards the city, airport or railway station.",
};
const matkuli: RouteLink = {
  href: "/bhopal-to-matkuli-taxi",
  title: "Bhopal to Matkuli",
  text: "Ask if Matkuli is a better pickup or halt on your Bhopal trip.",
};

function message(from: string, to: string): string {
  return `Hello Satpura Cabs, I need a taxi from ${from} to ${to}. Please share the current fare and vehicle options.`;
}

function notes(items: RouteNote[]): RouteNote[] {
  return items;
}

export const routes: RouteData[] = [
  {
    slug: "pipariya-to-pachmarhi-taxi",
    title: "Pipariya to Pachmarhi Taxi | Satpura Cabs",
    description:
      "Pipariya to Pachmarhi taxi service with railway station pickup. Ask Satpura Cabs for a vehicle and fare.",
    h1: "Pipariya to Pachmarhi Taxi",
    intro:
      "Need a taxi from Pipariya Railway Station to Pachmarhi? Satpura Cabs focuses on local Satpura routes and can arrange a vehicle based on your travel date, time and group size.",
    overviewTitle: "Taxi from Pipariya Railway Station to Pachmarhi",
    overview:
      "Pipariya is the usual rail stop for Pachmarhi. Share your train number if you have it, and say whether the drop is a hotel, a bus stand or another point in Pachmarhi. The fare depends on the vehicle, luggage and whether the driver has to return empty, so ask for the current fare before you travel.",
    pickups: ["Pipariya Railway Station", "Pipariya town or a hotel", "A point you name on the Pipariya road"],
    drops: ["Pachmarhi hotel or homestay", "Pachmarhi bus stand", "A named locality in Pachmarhi"],
    tripNote:
      "One-way and return can both be arranged. For a return, send the date you need to be back at Pipariya station so the timing can be checked against your train.",
    planning: notes([
      { title: "Train timing", text: "A late or early train changes the pickup. Mention the train number and expected arrival." },
      { title: "Hill road", text: "The drive is a ghat section. Keep a little extra time if you have an evening check-in." },
      { title: "Group size", text: "Say how many people and how much luggage so the vehicle is not too small." },
    ]),
    faqs: [
      { question: "Can the cab meet me at Pipariya Railway Station?", answer: "Yes. Share the train number and a phone number the driver can call when the train arrives." },
      { question: "Is the fare fixed on this page?", answer: "No. Ask for the current fare. It changes with the vehicle, date and whether you need a return." },
      { question: "Can I continue for Pachmarhi sightseeing the same day?", answer: "Mention it in the notes. Same-day sightseeing depends on your arrival time and local access." },
    ],
    related: [pachmarhi, reversePipariya, sightseeing, pipariya],
    image: "pipariya",
    imageAlt: "Illustrated road from Pipariya towards the Pachmarhi hills",
    pickup: "Pipariya Railway Station",
    drop: "Pachmarhi",
    whatsappMessage: message("Pipariya Railway Station", "Pachmarhi"),
  },
  {
    slug: "pachmarhi-to-pipariya-taxi",
    title: "Pachmarhi to Pipariya Taxi | Satpura Cabs",
    description: "Pachmarhi to Pipariya taxi service and railway station transfer. Get a local cab quote.",
    h1: "Pachmarhi to Pipariya Taxi",
    intro:
      "Leaving Pachmarhi for a train at Pipariya? Satpura Cabs can arrange a drop at Pipariya Railway Station, or at a hotel in Pipariya if you are not travelling the same day.",
    overviewTitle: "Taxi from Pachmarhi to Pipariya Railway Station",
    overview:
      "Tell us your train departure time, not only the pickup time. The drive down from Pachmarhi needs a buffer, especially if you are starting from a hotel away from the main road.",
    pickups: ["Pachmarhi hotel or homestay", "A market or bus-stand point in Pachmarhi", "Another address you share"],
    drops: ["Pipariya Railway Station", "Pipariya town", "A hotel in Pipariya before your train"],
    tripNote: "This is often booked as a one-way station drop. A return cab on another date should be requested separately, with that date in the notes.",
    planning: notes([
      { title: "Train buffer", text: "Ask to reach the station with time to spare. Do not plan the pickup at the exact departure minute." },
      { title: "Luggage", text: "Hill-station luggage is often more than one suitcase. Mention it so the boot space is right." },
      { title: "Early trains", text: "For an early morning train, confirm the pickup the evening before." },
    ]),
    faqs: [
      { question: "Will the cab drop me at the station entrance?", answer: "The drop is at Pipariya Railway Station unless you name another point." },
      { question: "Can you wait if my checkout is delayed?", answer: "A short wait can be discussed. A long wait should be agreed when you take the quote." },
      { question: "Do you publish a station-drop fare?", answer: "No. Ask for the current fare for your date and vehicle." },
    ],
    related: [pipariya, pachmarhi, sightseeing, { href: "/pipariya-to-pachmarhi-taxi", title: "Pipariya to Pachmarhi", text: "The reverse station-to-hill trip." }],
    image: "pipariya",
    imageAlt: "Illustrated approach road used for the Pachmarhi to Pipariya taxi",
    pickup: "Pachmarhi",
    drop: "Pipariya Railway Station",
    whatsappMessage: message("Pachmarhi", "Pipariya Railway Station"),
  },
  {
    slug: "bhopal-to-pachmarhi-taxi",
    title: "Bhopal to Pachmarhi Taxi | Satpura Cabs",
    description: "Bhopal to Pachmarhi taxi service for city, airport and railway station pickups. Request a fare by WhatsApp.",
    h1: "Bhopal to Pachmarhi Taxi",
    intro:
      "Travelling from Bhopal to Pachmarhi by cab? Share whether the pickup is in the city, at Raja Bhoj Airport, or at a Bhopal railway station, and ask for the current fare.",
    overviewTitle: "Taxi from Bhopal to Pachmarhi",
    overview:
      "This is a longer intercity drive, not a short station hop. The quote needs your pickup area in Bhopal, the Pachmarhi drop, the date and how many people are travelling. Matkuli is on the way for some travellers; say if you need a halt there.",
    pickups: ["Bhopal city or a hotel", "Raja Bhoj Airport", "Bhopal Junction or another Bhopal station"],
    drops: ["Pachmarhi hotel", "Pachmarhi bus stand", "A halt at Matkuli if you ask for it"],
    tripNote: "One-way and return are both possible. A return on a later date is a separate plan, so include that date if you already know it.",
    planning: notes([
      { title: "Airport or train", text: "Flight and train arrivals move. Send the number so the pickup can be adjusted." },
      { title: "Matkuli", text: "If Matkuli is your real stop, use the Matkuli page instead of booking a full Pachmarhi drop." },
      { title: "Daylight", text: "A daytime start is easier on the ghat section. Mention if you expect to arrive after dark." },
    ]),
    faqs: [
      { question: "Can you pick me up from Bhopal airport?", answer: "Yes. Share the flight number and terminal timing when you ask for the quote." },
      { question: "Is Matkuli on this route?", answer: "It can be a halt or the actual drop. Say which one you need." },
      { question: "Why is there no fare listed?", answer: "The fare depends on the pickup in Bhopal, the vehicle and whether the trip is one-way or return." },
    ],
    related: [pachmarhi, reverseBhopal, matkuli, pipariya],
    image: "pachmarhi",
    imageAlt: "Illustrated Satpura hills for the Bhopal to Pachmarhi taxi",
    pickup: "Bhopal",
    drop: "Pachmarhi",
    whatsappMessage: message("Bhopal", "Pachmarhi"),
  },
  {
    slug: "pachmarhi-to-bhopal-taxi",
    title: "Pachmarhi to Bhopal Taxi | Satpura Cabs",
    description: "Pachmarhi to Bhopal taxi service for city, airport and railway station drop-offs.",
    h1: "Pachmarhi to Bhopal Taxi",
    intro:
      "Going back from Pachmarhi to Bhopal? Satpura Cabs can drop you in the city, at the airport, or at a railway station. Tell us which one, and the time you need to reach.",
    overviewTitle: "Taxi from Pachmarhi to Bhopal",
    overview:
      "Work backwards from your flight or train. The hill road plus the drive into Bhopal takes longer than a city cab, so the pickup time should leave a buffer.",
    pickups: ["Pachmarhi hotel", "A named point in Pachmarhi", "Matkuli, if that is where you actually are"],
    drops: ["Bhopal city address", "Raja Bhoj Airport", "Bhopal railway station"],
    tripNote: "Most of these trips are one-way drops. If you also need the onward cab from Bhopal later, mention that as a separate date.",
    planning: notes([
      { title: "Flight buffer", text: "For the airport, share the flight time. Do not cut the pickup so fine that a slow ghat section makes you late." },
      { title: "City drop", text: "A locality name is enough for the quote. The exact lane can be confirmed on the day." },
      { title: "Matkuli start", text: "If you are starting from Matkuli rather than Pachmarhi, say so. There is a separate Matkuli to Bhopal page." },
    ]),
    faqs: [
      { question: "Can the drop be Bhopal airport?", answer: "Yes. Mark the trip as an airport transfer and share the flight time." },
      { question: "Can I stop at Matkuli on the way?", answer: "A short halt can be discussed. If Matkuli is the pickup, book that route instead." },
      { question: "Will you confirm the fare before I travel?", answer: "Yes. The website does not show a fixed fare. Ask, and a person will confirm." },
    ],
    related: [pachmarhi, { href: "/bhopal-to-pachmarhi-taxi", title: "Bhopal to Pachmarhi", text: "The reverse city-to-hill trip." }, { href: "/matkuli-to-bhopal-taxi", title: "Matkuli to Bhopal", text: "Use this if the pickup is Matkuli." }, pipariya],
    image: "bhopal",
    imageAlt: "Illustration of a Bhopal station pickup for a Pachmarhi cab",
    pickup: "Pachmarhi",
    drop: "Bhopal",
    whatsappMessage: message("Pachmarhi", "Bhopal"),
  },
  {
    slug: "pipariya-to-tamia-taxi",
    title: "Pipariya to Tamia Taxi | Satpura Cabs",
    description: "Pipariya to Tamia taxi service for Tamia and the Patalkot region. Request a local cab quote.",
    h1: "Pipariya to Tamia Taxi",
    intro:
      "Pipariya to Tamia is a local Satpura trip, often for the valley and the Patalkot side. Share your date, group size and whether Tamia town or a viewpoint is the drop.",
    overviewTitle: "Taxi from Pipariya to Tamia",
    overview:
      "The road is winding. A quote based only on the town names can miss a remote drop, so name the hotel, village or viewpoint if you know it.",
    pickups: ["Pipariya Railway Station", "Pipariya town", "A hotel on the Pipariya side"],
    drops: ["Tamia village or hotel", "A Tamia viewpoint you name", "A Patalkot-side point, if the road is open"],
    tripNote: "One-way and same-day return are both common. A same-day return should include how long you want at Tamia.",
    planning: notes([
      { title: "Patalkot access", text: "Do not assume every viewpoint or path is open. Ask on the day of travel." },
      { title: "Day trip", text: "If you are returning to Pipariya the same day, say so in the trip type and notes." },
      { title: "Pachmarhi link", text: "Some travellers continue to Pachmarhi. That is a different route and a different quote." },
    ]),
    faqs: [
      { question: "Is this the same cab as Pipariya to Pachmarhi?", answer: "No. Tamia and Pachmarhi are different drives. Book the route you actually need." },
      { question: "Can the driver wait at Tamia?", answer: "Waiting time should be part of the quote. Mention how long you expect to stay." },
      { question: "Are Patalkot roads always open?", answer: "No. Confirm local access before you travel." },
    ],
    related: [pipariya, pachmarhi, madhai],
    image: "tamia",
    imageAlt: "Illustrated Tamia valley for a Pipariya to Tamia taxi",
    pickup: "Pipariya",
    drop: "Tamia",
    whatsappMessage: message("Pipariya", "Tamia"),
  },
  {
    slug: "tamia-to-pipariya-taxi",
    title: "Tamia to Pipariya Taxi | Satpura Cabs",
    description: "Tamia to Pipariya taxi service for railway station transfers and onward journeys.",
    h1: "Tamia to Pipariya Taxi",
    intro:
      "Need a cab from Tamia back to Pipariya, usually for a train? Send the station time and your pickup point in Tamia.",
    overviewTitle: "Taxi from Tamia to Pipariya",
    overview:
      "The useful detail is the train departure, not a round hour. If you are going to a Pipariya hotel rather than the station, say that too.",
    pickups: ["Tamia hotel or village", "A viewpoint, if the car can reach it", "Another Satpura point you name"],
    drops: ["Pipariya Railway Station", "Pipariya town", "A hotel in Pipariya"],
    tripNote: "This is usually one-way. A later return to Tamia needs its own date and time.",
    planning: notes([
      { title: "Station drop", text: "Choose railway station transfer as the trip type when the train is the reason for the trip." },
      { title: "Road time", text: "Leave a buffer. The Tamia road is not a straight highway." },
      { title: "Onward plans", text: "If Pachmarhi is the real destination, look at the Pachmarhi routes instead." },
    ]),
    faqs: [
      { question: "Can you drop me for a specific train?", answer: "Yes. Share the train number and departure time." },
      { question: "Can the pickup be a Tamia viewpoint?", answer: "Only if a car can reach that point on the day. Name it when you enquire." },
      { question: "Is a fare shown here?", answer: "No. Ask for the current fare." },
    ],
    related: [pipariya, pachmarhi, madhai],
    image: "pipariya",
    imageAlt: "Illustrated road towards Pipariya for a Tamia return cab",
    pickup: "Tamia",
    drop: "Pipariya",
    whatsappMessage: message("Tamia", "Pipariya"),
  },
  {
    slug: "pachmarhi-to-tamia-taxi",
    title: "Pachmarhi to Tamia Taxi | Satpura Cabs",
    description: "Pachmarhi to Tamia taxi service for Satpura-region journeys.",
    h1: "Pachmarhi to Tamia Taxi",
    intro:
      "Pachmarhi to Tamia connects two Satpura stops. It is not a local sightseeing loop inside Pachmarhi. Share the date and whether you need a one-way drop or a return.",
    overviewTitle: "Taxi from Pachmarhi to Tamia",
    overview:
      "Tell us the Tamia drop as clearly as you can. A hotel, a village and a viewpoint are not the same quote.",
    pickups: ["Pachmarhi hotel", "Pachmarhi market or bus stand", "Another Pachmarhi address"],
    drops: ["Tamia village or hotel", "A named Tamia viewpoint", "A Patalkot-side point if access allows"],
    tripNote: "Return trips should include the return date or, for the same day, how many hours you want the car.",
    planning: notes([
      { title: "Not a town tour", text: "Bee Falls and Dhoopgarh are Pachmarhi sightseeing. This page is the drive to Tamia." },
      { title: "Access", text: "Confirm that your Tamia stop is reachable by car that day." },
      { title: "Madhai later", text: "A further hop to Madhai is a separate route." },
    ]),
    faqs: [
      { question: "Can this include Pachmarhi sightseeing first?", answer: "It can, if you describe the stops and the time. Otherwise book sightseeing on its own page." },
      { question: "Is the drive suitable for a day trip?", answer: "Often yes. Ask with your start time so the return can be judged properly." },
      { question: "How is the fare decided?", answer: "By date, vehicle, one-way or return, and the exact drop. Ask for the current fare." },
    ],
    related: [pipariya, pachmarhi, madhai],
    image: "tamia",
    imageAlt: "Illustrated Tamia valley for a Pachmarhi to Tamia cab",
    pickup: "Pachmarhi",
    drop: "Tamia",
    whatsappMessage: message("Pachmarhi", "Tamia"),
  },
  {
    slug: "tamia-to-pachmarhi-taxi",
    title: "Tamia to Pachmarhi Taxi | Satpura Cabs",
    description: "Tamia to Pachmarhi taxi service connecting two Satpura destinations.",
    h1: "Tamia to Pachmarhi Taxi",
    intro:
      "Coming from Tamia into Pachmarhi? Send the pickup point in Tamia and the hotel or area in Pachmarhi where you need to be dropped.",
    overviewTitle: "Taxi from Tamia to Pachmarhi",
    overview:
      "This quote is for the transfer between the two places. If you want the car to stay for Pachmarhi sightseeing after the drop, say that in the notes.",
    pickups: ["Tamia hotel or village", "A named Tamia stop", "A nearby point the car can reach"],
    drops: ["Pachmarhi hotel", "Pachmarhi bus stand", "A locality you name"],
    tripNote: "One-way is the usual request. A return to Tamia needs a second time.",
    planning: notes([
      { title: "Hotel name", text: "The hotel name helps the drop more than the word Pachmarhi alone." },
      { title: "Sightseeing", text: "Add it only if you want the same car to continue. It changes the quote." },
      { title: "Pipariya train", text: "If you actually need Pipariya station, use the Tamia to Pipariya page." },
    ]),
    faqs: [
      { question: "Can I be dropped at a Pachmarhi hotel?", answer: "Yes. Put the hotel name in the destination or notes." },
      { question: "Do you cover Patalkot on the way?", answer: "Only when you ask and when the road is usable. It is not included by default." },
      { question: "Is there a listed price?", answer: "No. Ask for the current fare." },
    ],
    related: [pipariya, pachmarhi, madhai],
    image: "tamia",
    imageAlt: "Illustrated valley road for a Tamia to Pachmarhi taxi",
    pickup: "Tamia",
    drop: "Pachmarhi",
    whatsappMessage: message("Tamia", "Pachmarhi"),
  },
  {
    slug: "pachmarhi-to-madhai-taxi",
    title: "Pachmarhi to Madhai Taxi | Satpura Cabs",
    description: "Pachmarhi to Madhai taxi service for Satpura-region transfers. Confirm route, vehicle and fare before travel.",
    h1: "Pachmarhi to Madhai Taxi",
    intro:
      "Pachmarhi to Madhai is a Satpura transfer for travellers heading towards the Madhai side. The cab is the road transfer. Safari permits and safari operators are separate.",
    overviewTitle: "Taxi from Pachmarhi to Madhai",
    overview:
      "Share the Madhai gate, lodge or village you are going to. A vague drop makes the quote and the driving time unreliable.",
    pickups: ["Pachmarhi hotel", "Pachmarhi bus stand", "Another Pachmarhi pickup you name"],
    drops: ["Madhai gate or lodge", "A village on the Madhai side", "Another point you confirm is reachable"],
    tripNote: "One-way is common for lodge check-ins. A return to Pachmarhi should include that date.",
    planning: notes([
      { title: "Safari is separate", text: "Satpura Cabs arranges the taxi. Park entry and safari booking are not part of the cab." },
      { title: "Lodge timing", text: "Send the time the lodge expects you, not only the time you want to leave Pachmarhi." },
      { title: "Forest roads", text: "Confirm the approach is open for a private car on your date." },
    ]),
    faqs: [
      { question: "Does the cab include a safari?", answer: "No. Ask the lodge or the safari operator for permits. The cab is the transfer." },
      { question: "Can you pick up from a Pachmarhi hotel?", answer: "Yes. Name the hotel." },
      { question: "Why ask for the fare again?", answer: "Vehicle, date and the exact Madhai drop all change it." },
    ],
    related: [pachmarhi, tamia, sightseeing],
    image: "madhai",
    imageAlt: "Illustrated Satpura forest for a Pachmarhi to Madhai taxi",
    pickup: "Pachmarhi",
    drop: "Madhai",
    whatsappMessage: message("Pachmarhi", "Madhai"),
  },
  {
    slug: "madhai-to-pachmarhi-taxi",
    title: "Madhai to Pachmarhi Taxi | Satpura Cabs",
    description: "Madhai to Pachmarhi taxi service for travellers connecting Satpura wildlife areas with Pachmarhi.",
    h1: "Madhai to Pachmarhi Taxi",
    intro:
      "Leaving Madhai for Pachmarhi? Share the lodge or gate where the car should arrive, and the Pachmarhi hotel for the drop.",
    overviewTitle: "Taxi from Madhai to Pachmarhi",
    overview:
      "Lodge check-out times are often fixed. Send that time so the cab is not planned for a pickup you cannot make.",
    pickups: ["Madhai lodge", "Madhai gate", "A nearby village you name"],
    drops: ["Pachmarhi hotel", "Pachmarhi bus stand", "A locality in Pachmarhi"],
    tripNote: "Treat this as one-way unless you already know the return date to Madhai.",
    planning: notes([
      { title: "Checkout", text: "Match the pickup to the lodge checkout, with a few minutes of buffer." },
      { title: "No safari in the fare", text: "The quote is for the road transfer only." },
      { title: "Tamia", text: "If Tamia is the destination, use the Madhai to Tamia page." },
    ]),
    faqs: [
      { question: "Can the car come to the lodge?", answer: "Yes, when the approach road allows it. Name the lodge." },
      { question: "Can I go to Pipariya station instead?", answer: "That is a different trip. Say so and we will quote the station drop." },
      { question: "Is the price listed?", answer: "No. Ask for the current fare." },
    ],
    related: [pachmarhi, tamia, sightseeing],
    image: "madhai",
    imageAlt: "Illustrated forest approach for a Madhai to Pachmarhi taxi",
    pickup: "Madhai",
    drop: "Pachmarhi",
    whatsappMessage: message("Madhai", "Pachmarhi"),
  },
  {
    slug: "tamia-to-madhai-taxi",
    title: "Tamia to Madhai Taxi | Satpura Cabs",
    description: "Tamia to Madhai taxi service. Confirm the route and fare before travel.",
    h1: "Tamia to Madhai Taxi",
    intro:
      "Tamia to Madhai is a less common Satpura link. It is still a real trip when you need it. Confirm the exact ends of the journey and ask for the current fare before you commit.",
    overviewTitle: "Taxi from Tamia to Madhai",
    overview:
      "Because this is not a daily shuttle, availability depends on the date and the vehicle. Name both points clearly. Do not assume a same-day connection with a safari.",
    pickups: ["Tamia village or hotel", "A Tamia stop the car can reach"],
    drops: ["Madhai lodge or gate", "A Madhai-side village you name"],
    tripNote: "Plan it as one-way unless a return is already fixed. Same-day return makes a long day on these roads.",
    planning: notes([
      { title: "Check both ends", text: "Confirm the Tamia pickup and the Madhai approach are open for a car." },
      { title: "Safari timing", text: "Do not book this so tightly that a lodge or safari slot depends on a perfect drive." },
      { title: "Search demand", text: "This page is here so the trip can be requested. It is not a promise of a fixed departure." },
    ]),
    faqs: [
      { question: "Is this a scheduled bus?", answer: "No. It is a taxi enquiry. A person confirms if a vehicle is free." },
      { question: "Does the cab enter the tiger reserve?", answer: "The cab goes to the agreed road point. Reserve entry is a separate permission." },
      { question: "Should I compare Pachmarhi routes?", answer: "Yes, if Pachmarhi is part of the trip. The direct Tamia–Madhai quote is only for those two ends." },
    ],
    related: [pipariya, pachmarhi, madhai],
    image: "madhai",
    imageAlt: "Illustrated Satpura forest for a Tamia to Madhai taxi",
    pickup: "Tamia",
    drop: "Madhai",
    whatsappMessage: message("Tamia", "Madhai"),
  },
  {
    slug: "madhai-to-tamia-taxi",
    title: "Madhai to Tamia Taxi | Satpura Cabs",
    description: "Madhai to Tamia taxi service connecting Satpura destinations.",
    h1: "Madhai to Tamia Taxi",
    intro:
      "From Madhai towards Tamia, share the lodge pickup time and the Tamia drop. This route is arranged on request, not as a fixed daily car.",
    overviewTitle: "Taxi from Madhai to Tamia",
    overview:
      "Ask early enough for the date. A vehicle that has done a Madhai drop may not be sitting there for an immediate return to Tamia.",
    pickups: ["Madhai lodge", "Madhai gate", "A nearby point you name"],
    drops: ["Tamia hotel or village", "A Tamia viewpoint if cars are allowed there"],
    tripNote: "One-way is the normal request. Add a return only if the date is known.",
    planning: notes([
      { title: "Lodge pickup", text: "The lodge name and checkout time matter more than the word Madhai." },
      { title: "Valley roads", text: "Tamia roads are winding. Build in extra time if you have an evening plan." },
      { title: "Pachmarhi option", text: "If Pachmarhi is the real stop, the Madhai to Pachmarhi page is the closer match." },
    ]),
    faqs: [
      { question: "Can I book this a few hours before?", answer: "Sometimes, but do not rely on it. Send the date as soon as you know it." },
      { question: "Are safari tickets included?", answer: "No." },
      { question: "How do I get the fare?", answer: "Ask. The page does not invent one." },
    ],
    related: [pachmarhi, tamia, sightseeing],
    image: "tamia",
    imageAlt: "Illustrated Tamia valley for a Madhai to Tamia taxi",
    pickup: "Madhai",
    drop: "Tamia",
    whatsappMessage: message("Madhai", "Tamia"),
  },
  {
    slug: "matkuli-to-bhopal-taxi",
    title: "Matkuli to Bhopal Taxi | Satpura Cabs",
    description: "Matkuli to Bhopal taxi service. Request a vehicle and route-specific fare.",
    h1: "Matkuli to Bhopal Taxi",
    intro:
      "Matkuli to Bhopal is the trip to use when you are starting at Matkuli, not up in Pachmarhi. Share the Matkuli pickup and whether Bhopal means the city, the airport or a station.",
    overviewTitle: "Taxi from Matkuli to Bhopal",
    overview:
      "Matkuli sits on the Bhopal–Pachmarhi side. A Pachmarhi fare is the wrong quote if the car does not need to climb to Pachmarhi.",
    pickups: ["Matkuli village or a hotel", "A highway point at Matkuli you describe", "Another nearby pickup you name"],
    drops: ["Bhopal city", "Raja Bhoj Airport", "A Bhopal railway station"],
    tripNote: "One-way is typical. If you came from Bhopal and this is the return, say that so the timing matches your onward flight or train.",
    planning: notes([
      { title: "Do not use the Pachmarhi fare", text: "Say Matkuli clearly. The distance is not the same as a Pachmarhi pickup." },
      { title: "Airport", text: "Choose airport transfer and send the flight time." },
      { title: "Pachmarhi add-on", text: "If the car must come from Pachmarhi first, say so. That changes the booking." },
    ]),
    faqs: [
      { question: "Is Matkuli the same as Pachmarhi?", answer: "No. Use this page when the pickup is Matkuli." },
      { question: "Can the drop be the airport?", answer: "Yes. Share the flight time." },
      { question: "Where is the fare?", answer: "Ask for the current fare. It is not printed here." },
    ],
    related: [pachmarhi, { href: "/bhopal-to-matkuli-taxi", title: "Bhopal to Matkuli", text: "The reverse trip." }, { href: "/pachmarhi-to-bhopal-taxi", title: "Pachmarhi to Bhopal", text: "Use this if the pickup is Pachmarhi itself." }, pipariya],
    image: "bhopal",
    imageAlt: "Illustration of a Bhopal drop for a Matkuli taxi",
    pickup: "Matkuli",
    drop: "Bhopal",
    whatsappMessage: message("Matkuli", "Bhopal"),
  },
  {
    slug: "bhopal-to-matkuli-taxi",
    title: "Bhopal to Matkuli Taxi | Satpura Cabs",
    description: "Bhopal to Matkuli taxi service for local and Satpura-region travel.",
    h1: "Bhopal to Matkuli Taxi",
    intro:
      "Booking a cab from Bhopal to Matkuli? This is the right page when Matkuli is the destination, including a halt before Pachmarhi or a stay near the road.",
    overviewTitle: "Taxi from Bhopal to Matkuli",
    overview:
      "City, airport and station pickups in Bhopal can all be quoted. If Pachmarhi is the final stop, use the Bhopal to Pachmarhi page instead of stopping the quote at Matkuli.",
    pickups: ["Bhopal city or hotel", "Raja Bhoj Airport", "A Bhopal railway station"],
    drops: ["Matkuli village", "A hotel or roadside point at Matkuli", "A nearby place you name"],
    tripNote: "One-way and return both work. A return should include the date you need to be back in Bhopal.",
    planning: notes([
      { title: "Final stop", text: "If you continue to Pachmarhi the same day, say that. Otherwise the driver plans only as far as Matkuli." },
      { title: "Pickup type", text: "Airport, station and city hotel are different start times. Name which one." },
      { title: "Pipariya", text: "Pipariya is a different rail head. Use the Pipariya pages if that is your station." },
    ]),
    faqs: [
      { question: "Can I go on to Pachmarhi after Matkuli?", answer: "Yes, if you include it in the request. It is then closer to a Bhopal–Pachmarhi trip with a halt." },
      { question: "Do you pick up from Bhopal airport?", answer: "Yes. Share the flight details." },
      { question: "Is a fare printed on this page?", answer: "No. Ask for the current fare." },
    ],
    related: [pachmarhi, { href: "/bhopal-to-pachmarhi-taxi", title: "Bhopal to Pachmarhi", text: "Use this when Pachmarhi is the final drop." }, { href: "/matkuli-to-bhopal-taxi", title: "Matkuli to Bhopal", text: "The return from Matkuli." }, pipariya],
    image: "pachmarhiRoad",
    imageAlt: "Illustration of the road from Bhopal towards Matkuli",
    pickup: "Bhopal",
    drop: "Matkuli",
    whatsappMessage: message("Bhopal", "Matkuli"),
  },
];

export function getRoute(slug: string): RouteData | undefined {
  return routes.find((item) => item.slug === slug);
}
