import { travelImages, type TravelImage } from "./travel-images";

export interface GuideLink {
  href: string;
  label: string;
}

export interface GuideCard {
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
  image?: TravelImage;
  tag?: string;
  note?: string;
}

export interface GuideSection {
  id?: string;
  heading: string;
  lead?: string;
  paragraphs?: string[];
  items?: string[];
  cards?: GuideCard[];
  days?: { label: string; text: string }[];
  table?: { headers: string[]; rows: string[][] };
  links?: GuideLink[];
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuidePageData {
  slug: string;
  title: string;
  description: string;
  crumb: string;
  eyebrow: string;
  h1: string;
  lead: string;
  image: TravelImage;
  destinationName?: string;
  sections: GuideSection[];
  faqs?: GuideFaq[];
  enquiry: string;
  related: GuideLink[];
}

const reserve = { href: "https://www.satpuratigerreserve.org/", label: "Satpura Tiger Reserve" };
const forest = { href: "https://forest.mponline.gov.in/", label: "MP Forest tourism portal" };
const mpTourism = { href: "https://www.mptourism.com/", label: "Madhya Pradesh Tourism" };
const incredible = { href: "https://www.incredibleindia.gov.in/en/madhya-pradesh/pachmarhi", label: "Incredible India: Pachmarhi" };
const chhindwara = { href: "https://chhindwara.nic.in/en/tourist-place/tamia/", label: "Chhindwara district: Tamia" };

export const travelGuides: GuidePageData[] = [
  {
    slug: "",
    title: "Satpura Travel Guide: Madhai, Pachmarhi, Tamia and Churna | Satpura Cabs",
    description: "Plan Satpura, Madhai, Pachmarhi, Tamia, Patalkot and Churna with itineraries, trek notes and cab trip planning. Confirm permits and trail access before travel.",
    crumb: "Travel guide",
    eyebrow: "Satpura region",
    h1: "Explore the wild and serene Satpura region",
    lead: "Plan a wildlife break, a Pachmarhi waterfall holiday, a Tamia and Patalkot road trip, or a longer circuit. These pages collect destinations, trek ideas and cab-planning notes.",
    image: travelImages.hero,
    sections: [
      {
        heading: "Explore Satpura your way",
        lead: "Choose a destination first. Exact routing depends on where you arrive, the season, where you stay, and whether a permit is available.",
        cards: [
          { title: "Madhai", text: "Plan around a permitted safari, the Denwa backwaters and a relaxed forest stay.", href: "/travel-guide/madhai", linkLabel: "Explore Madhai", image: travelImages.backwaters, tag: "Wildlife and river" },
          { title: "Pachmarhi", text: "Waterfalls, caves, ravines, temples, viewpoints and a day-wise sightseeing outline.", href: "/travel-guide/pachmarhi", linkLabel: "Explore Pachmarhi", image: travelImages.bee, tag: "Waterfalls and viewpoints" },
          { title: "Tamia and Patalkot", text: "A slower road trip around valley viewpoints and a locally guided walk.", href: "/travel-guide/tamia-patalkot", linkLabel: "Explore Tamia", image: travelImages.tamia, tag: "Offbeat hills" },
          { title: "Churna / Bheemkund", text: "A separate forest excursion. Confirm access and permits before you treat it as a fixed stop.", href: "/travel-guide/churna", linkLabel: "Read the Churna guide", image: travelImages.gate, tag: "Specialist wildlife" },
          { title: "Treks and waterfalls", text: "Compare trail difficulty, time and the season before you commit a day to a walk.", href: "/travel-guide/treks", linkLabel: "Explore trekking ideas", image: travelImages.dhoopgarh, tag: "Adventure" },
          { title: "Other places", text: "Tawa, Bori and nearby stops, only where access is confirmed.", href: "/travel-guide/other-places", linkLabel: "Discover more places", image: travelImages.landscape, tag: "Beyond the main circuit" },
        ],
      },
      {
        heading: "Suggested Satpura itineraries",
        lead: "These are frameworks, not fixed packages. Arrival point, season, stay and permits change the route.",
        cards: [
          { title: "Madhai wildlife weekend", text: "Arrival, a permitted wildlife experience, the river landscape and a relaxed departure.", href: "/travel-guide/itineraries#madhai-weekend", linkLabel: "View itinerary", image: travelImages.backwaters, tag: "2 nights / 3 days" },
          { title: "Pachmarhi sightseeing", text: "Waterfalls, caves, ravines, temples and Dhoopgarh if it is open.", href: "/travel-guide/itineraries#pachmarhi-4-days", linkLabel: "View itinerary", image: travelImages.hero, tag: "3 nights / 4 days" },
          { title: "Tamia and Patalkot escape", text: "Viewpoints, a locally guided valley outing and a scenic return.", href: "/travel-guide/itineraries#tamia-patalkot", linkLabel: "View itinerary", image: travelImages.tamia, tag: "2 nights / 3 days" },
        ],
        links: [{ href: "/travel-guide/itineraries", label: "See all itineraries" }],
      },
      {
        heading: "One cab, a route tailored to your trip",
        lead: "Trips can mix a station pickup, a long drive, local sightseeing and an early safari reporting time. Share the dates, the group size and what you want to do.",
        items: [
          "Railway-station and city pickups by arrangement",
          "Point-to-point transfers and multi-day cab journeys",
          "Family, couple, photographer and small-group trips",
          "Safari permits and forest vehicles are confirmed separately",
        ],
      },
      {
        heading: "Before you travel",
        lead: "Gates, safari slots, waterfall trails, boating, guides and road conditions change. Confirm the current notice before you travel.",
        cards: [
          { title: "Wildlife access", text: "Core-area safari access is controlled. Book through the official channel and follow the permit." },
          { title: "Monsoon and trails", text: "Waterfalls and forest trails can close. Do not assume every stop is open all year." },
          { title: "Travel time", text: "Leave a buffer for hill roads, walks and meals. Do not stack a long drive and several treks on one day." },
        ],
        links: [reserve, forest],
      },
    ],
    faqs: [
      { question: "What is a comfortable time to visit Satpura, Madhai, Pachmarhi and Tamia?", answer: "October to March is generally comfortable for hill sightseeing. Wildlife tourism follows official dates and seasonal restrictions, so check the reserve notice before you book. Summer can be hot, and the monsoon can affect trails and roads." },
      { question: "How many days are enough for a Satpura trip?", answer: "Allow 2–3 days for a focused Madhai or Tamia break, 3–4 days for Pachmarhi, and about 6–7 days for a broader circuit. Add time if you want more than one wildlife outing or distant destinations on the same trip." },
      { question: "Can I visit Madhai and Churna in one trip?", answer: "Sometimes, but they have different access rules. Confirm permits, the authorised vehicle, the entry point and where you will stay before you treat them as one package." },
      { question: "Can a regular cab enter the tiger reserve?", answer: "Do not assume it can. Safaris follow designated rules and permits. A cab can handle the eligible transfer. The safari booking confirms the permitted vehicle and guide." },
      { question: "Can I customise a cab itinerary?", answer: "Yes. Start with the pickup, the drop, the dates, the group size and the pace you want. Check driving time and what is actually open before the route is fixed." },
    ],
    enquiry: "Hello Satpura Cabs, I want a cab for a Satpura trip. Please share vehicle options and the current fare.",
    related: [
      { href: "/madhai-taxi", label: "Madhai taxi" },
      { href: "/pachmarhi-taxi", label: "Pachmarhi taxi" },
      { href: "/tamia-taxi", label: "Tamia taxi" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    slug: "madhai",
    title: "Madhai Travel Guide: Wildlife, River and Forest Stays | Satpura Cabs",
    description: "Plan Madhai near Satpura Tiger Reserve with a 3-day outline, safari permit notes, Denwa backwaters and cab transfers. Confirm the current safari rules before travel.",
    crumb: "Madhai",
    eyebrow: "Wildlife and river",
    h1: "Madhai travel guide",
    lead: "Madhai is a common access area for Satpura Tiger Reserve tourism, with the Denwa River, forest stays and wildlife outings arranged through permitted operators.",
    image: travelImages.backwaters,
    destinationName: "Madhai",
    sections: [
      {
        heading: "What is Madhai known for?",
        paragraphs: [
          "It works well as a two-night nature break. Plan the day around the safari slot you have confirmed, rather than a fixed list of activities. Boat rides, stays and safari options change by operator and season.",
        ],
        items: [
          "A pre-booked wildlife safari in the permitted zone",
          "A Denwa backwater or boat experience when it is operating",
          "Birdwatching and nature interpretation through local operators",
          "Quiet time for photography at the forest edge",
        ],
      },
      {
        heading: "Suggested 3-day Madhai itinerary",
        days: [
          { label: "Day 1", text: "Arrive from the agreed pickup, check in and confirm the safari reporting instructions. If a boat or short nature activity is operating, add it before sunset. Keep the evening flexible." },
          { label: "Day 2", text: "Take the pre-booked morning safari, then rest. A second safari, a boat outing or a guided activity depends on availability. A cab booking does not promise a tiger or any other sighting." },
          { label: "Day 3", text: "Leave time for breakfast, check-out and the drive to the next stop or the railhead. If you have a same-day train or flight, add a buffer." },
        ],
      },
      {
        heading: "Planning your Madhai visit",
        cards: [
          { title: "Safari permits", text: "Book through the official channel or an authorised operator. Confirm the zone, the reporting point, the ID you need, and the vehicle and guide." },
          { title: "Where to stay", text: "Compare stays by distance to the confirmed gate, meal times, early-safari arrangements and the cancellation terms." },
          { title: "Cab transfers", text: "Decide the pickup and drop first. Share the luggage and the number of passengers so the vehicle and the route can be planned." },
        ],
        paragraphs: ["Madhai is not an unrestricted self-drive wildlife area. Follow the reserve rules and the conditions on your permit."],
        links: [reserve, forest],
      },
    ],
    enquiry: "Hello Satpura Cabs, I want a cab transfer for a Madhai trip. Safari permits are separate. Please share the current fare.",
    related: [
      { href: "/madhai-taxi", label: "Madhai taxi" },
      { href: "/pachmarhi-to-madhai-taxi", label: "Pachmarhi to Madhai" },
      { href: "/travel-guide/churna", label: "Churna guide" },
      { href: "/travel-guide/itineraries#madhai-weekend", label: "Madhai weekend itinerary" },
    ],
  },
  {
    slug: "churna",
    title: "Churna and Bheemkund Forest Excursion | Satpura Cabs",
    description: "How to plan a Churna or Bheemkund forest excursion near Satpura Tiger Reserve, including permits, access checks and cab logistics.",
    crumb: "Churna",
    eyebrow: "Specialist wildlife",
    h1: "Churna and Bheemkund",
    lead: "Churna, often discussed with Bheemkund access, is a specialist forest excursion. It is not a casual stop that every visitor can reach independently.",
    image: travelImages.gate,
    destinationName: "Churna",
    sections: [
      {
        heading: "Understand Churna before you book",
        paragraphs: [
          "Access arrangements change. Confirm the entry point, the operating dates, permit availability, the authorised vehicle, the guide and where you will stay before you treat this as a fixed day. A standard cab may not enter the core forest, and a direct Madhai to Churna transfer is not always possible.",
        ],
        items: [
          "Confirm current access and booking conditions with the reserve",
          "Check whether the outing needs a designated safari vehicle",
          "Allow buffer time for reporting, checks and forest travel",
          "Keep a fallback plan if the permit or the route is unavailable",
        ],
      },
      {
        heading: "Suggested excursion framework",
        days: [
          { label: "Arrival", text: "Transfer to the pre-arranged stay. Confirm the next day's reporting time, permit documents, guide and vehicle." },
          { label: "Excursion", text: "Take the permitted outing as the operator or the forest staff instruct. Stay on the designated route. Follow the rules on walking, photography, litter, noise and distance from wildlife." },
          { label: "Return", text: "Leave from the confirmed access point. Add Madhai or Pachmarhi only after you have checked the transfer time and the next stay." },
        ],
        paragraphs: ["This page does not state a fixed entry route, safari duration, vehicle rule or daily opening time. Check the official notice for your travel date."],
        links: [reserve, forest],
      },
    ],
    enquiry: "Hello Satpura Cabs, I want to ask about a cab for a Churna or Bheemkund plan. Please confirm what the cab can cover and the current fare.",
    related: [
      { href: "/travel-guide/madhai", label: "Madhai guide" },
      { href: "/madhai-taxi", label: "Madhai taxi" },
      { href: "/travel-guide/itineraries#wildlife-circuit", label: "Madhai and Churna circuit" },
    ],
  },
  {
    slug: "pachmarhi",
    title: "Pachmarhi Travel Guide: Waterfalls, Caves and Treks | Satpura Cabs",
    description: "A 4-day Pachmarhi outline covering Bee Falls, Apsara Vihar, Dhoopgarh, Jata Shankar, Handi Khoh and Chauragarh. Confirm trail access on the day.",
    crumb: "Pachmarhi",
    eyebrow: "Hill station",
    h1: "Pachmarhi travel guide",
    lead: "Pachmarhi is a hill-station base for waterfall walks, caves, ravines, viewpoints and forest scenery in the Satpura hills.",
    image: travelImages.bee,
    destinationName: "Pachmarhi",
    sections: [
      {
        heading: "Why visit Pachmarhi?",
        paragraphs: ["For most first visits, three nights leaves room for a local circuit and one more active day. Some trails need a local guide, an approved vehicle or an entry permission. Waterfall access changes with rain and safety notices."],
        items: [
          "Bee Falls, also called Jamuna Prapat",
          "Apsara Vihar and Rajat Prapat, when they are accessible",
          "Jata Shankar and Gupt Mahadev",
          "Handi Khoh and Priyadarshini Point",
          "Dhoopgarh at sunset, subject to access hours",
          "Pandav Caves and Bison Lodge Museum, subject to opening hours",
        ],
      },
      {
        heading: "A 4-day Pachmarhi outline",
        days: [
          { label: "Day 1", text: "Arrive, check in and keep the first day light. Pandav Caves and the town area fit if they are open. Ask the hotel or an authorised operator about local sightseeing vehicle rules." },
          { label: "Day 2", text: "Start early for Bee Falls and allow for the descent and the climb back. Add Apsara Vihar or Rajat Prapat only if the trail is open and the group has the time and fitness. Do not stack several hard walks into one day." },
          { label: "Day 3", text: "Order Jata Shankar, Gupt Mahadev, Handi Khoh and Dhoopgarh with a local driver or guide. Check cave and sunset access. Carry water and shoes that grip." },
          { label: "Day 4", text: "Add Chauragarh only if the group is prepared and the route is open. It can be a demanding climb. Otherwise take a shorter walk and a comfortable departure." },
        ],
      },
      {
        heading: "Pachmarhi stops at a glance",
        cards: [
          { title: "Bee Falls", text: "A waterfall reached by a trail with steps and an uphill return. Allow extra time for children and less experienced walkers.", image: travelImages.bee },
          { title: "Apsara Vihar", text: "A nature stop often paired with nearby waterfalls. Check the water and the trail on the day.", image: travelImages.apsara },
          { title: "Dhoopgarh", text: "A high viewpoint. Confirm access and the return time, especially near sunset.", image: travelImages.dhoopgarh },
          { title: "Jata Shankar", text: "A cave shrine and rock formation. Expect steps and uneven ground.", image: travelImages.jata },
          { title: "Handi Khoh", text: "A ravine viewpoint for travellers who want the scenery without a long trek.", image: travelImages.handi },
          { title: "Pandav Caves", text: "A heritage and rock-cave stop that fits an arrival or departure day.", image: travelImages.pandav },
        ],
      },
      {
        heading: "Travel tips for Pachmarhi",
        items: [
          "Carry drinking water, sun protection and footwear with grip.",
          "Check waterfall and cave access on the day of the visit.",
          "Do not swim or climb barriers where it is prohibited.",
          "For Chauragarh, judge fitness and the local conditions before you commit.",
          "A private cab may not be allowed up to every attraction. Confirm the sightseeing vehicle and guide rules.",
        ],
        links: [mpTourism, incredible],
      },
    ],
    enquiry: "Hello Satpura Cabs, I want a Pachmarhi sightseeing cab. Please share vehicle options and the current fare.",
    related: [
      { href: "/pachmarhi-taxi", label: "Pachmarhi taxi" },
      { href: "/pachmarhi-local-sightseeing", label: "Local sightseeing" },
      { href: "/pipariya-to-pachmarhi-taxi", label: "Pipariya to Pachmarhi" },
      { href: "/travel-guide/treks", label: "Treks and waterfalls" },
    ],
  },
  {
    slug: "tamia-patalkot",
    title: "Tamia and Patalkot: Valley Views and Offbeat Trails | Satpura Cabs",
    description: "Plan a slower Tamia and Patalkot trip with valley viewpoints, a locally guided walk and cab transfers. Confirm the route with a local guide.",
    crumb: "Tamia and Patalkot",
    eyebrow: "Offbeat hills",
    h1: "Tamia and Patalkot",
    lead: "Tamia is known for hill and valley scenery. Patalkot lies below the surrounding plateau and is associated with forested slopes and Indigenous communities.",
    image: travelImages.tamia,
    destinationName: "Tamia",
    sections: [
      {
        heading: "A slower, offbeat journey",
        paragraphs: ["Plan this trip around viewpoints, a locally guided valley outing and unhurried time outside. Walking options vary. Do not treat a generic trail as a marked or universally accessible trek unless a local guide has confirmed it."],
        items: [
          "Tamia Valley View Point",
          "Chimtipur viewpoint and other locally confirmed stops",
          "Patalkot viewpoints and approved guided walks",
          "Community-led experiences arranged with consent",
          "Photography and quiet time outdoors",
        ],
      },
      {
        heading: "Suggested 3-day itinerary",
        days: [
          { label: "Day 1", text: "Arrive from Chhindwara or another agreed origin. Check in, visit the main valley viewpoint and add Chimtipur or other confirmed scenic stops. Plan sunset around the weather and local access." },
          { label: "Day 2", text: "Meet a local guide and follow an approved route. Ask about the terrain, the climb, the expected duration and the return time before you start. Do not assume you may photograph residents or enter homes." },
          { label: "Day 3", text: "Take a short walk or revisit a viewpoint, then leave for Chhindwara or continue only if the next drive is realistic." },
        ],
      },
      {
        heading: "Responsible travel in Patalkot",
        items: [
          "Use local guides who know the route and the current conditions.",
          "Ask before photographing people, homes or community activities.",
          "Do not collect plants, disturb wildlife or leave litter.",
          "Carry water and expect limited mobile signal on some routes.",
          "Do not start a steep descent late in the day without a confirmed return.",
        ],
        links: [chhindwara, mpTourism],
      },
    ],
    enquiry: "Hello Satpura Cabs, I want a cab for Tamia and Patalkot. Please share the current fare and a realistic driving plan.",
    related: [
      { href: "/tamia-taxi", label: "Tamia taxi" },
      { href: "/pipariya-to-tamia-taxi", label: "Pipariya to Tamia" },
      { href: "/pachmarhi-to-tamia-taxi", label: "Pachmarhi to Tamia" },
      { href: "/travel-guide/itineraries#tamia-patalkot", label: "Tamia itinerary" },
    ],
  },
  {
    slug: "itineraries",
    title: "Satpura Itineraries: Plan 2 to 7 Days | Satpura Cabs",
    description: "Compare planning outlines for Madhai, Pachmarhi, Tamia and Patalkot, a Churna circuit and a longer Satpura route. These are frameworks, not fixed packages.",
    crumb: "Itineraries",
    eyebrow: "Trip length",
    h1: "Satpura itineraries",
    lead: "The plans below are frameworks, not fixed tour products. Finalise the route only after the dates, the arrival point, the hotel, the trail access and the permits are known.",
    image: travelImages.landscape,
    sections: [
      {
        heading: "Choose a starting point",
        links: [
          { href: "#madhai-weekend", label: "Madhai wildlife weekend" },
          { href: "#pachmarhi-4-days", label: "Pachmarhi in 4 days" },
          { href: "#tamia-patalkot", label: "Tamia and Patalkot" },
          { href: "#wildlife-circuit", label: "Madhai and Churna" },
          { href: "#grand-circuit", label: "Satpura grand circuit" },
        ],
      },
      {
        id: "madhai-weekend",
        heading: "Madhai wildlife weekend",
        days: [
          { label: "Day 1", text: "Pickup from the agreed station or city. Transfer to the Madhai-area stay, check in, confirm the safari reporting point and add a permitted river activity if it is operating." },
          { label: "Day 2", text: "Take the pre-booked morning safari. Rest at midday and add another confirmed nature activity if one is available. No wildlife sighting is guaranteed." },
          { label: "Day 3", text: "Breakfast, check-out and the transfer onward. Keep a buffer before a train or a flight." },
        ],
        links: [{ href: "/travel-guide/madhai", label: "Read the Madhai guide" }],
      },
      {
        id: "pachmarhi-4-days",
        heading: "Pachmarhi waterfalls and viewpoints",
        days: [
          { label: "Day 1", text: "Arrival, check-in, and Pandav Caves or the town if time allows." },
          { label: "Day 2", text: "Bee Falls, and Apsara Vihar or Rajat Prapat if the trail is open and the group is ready." },
          { label: "Day 3", text: "Jata Shankar, Gupt Mahadev, Handi Khoh, Priyadarshini Point and Dhoopgarh where they are open." },
          { label: "Day 4", text: "Chauragarh only for prepared travellers, or a relaxed morning before departure." },
        ],
        links: [{ href: "/travel-guide/pachmarhi", label: "Read the Pachmarhi guide" }],
      },
      {
        id: "tamia-patalkot",
        heading: "Tamia and Patalkot",
        days: [
          { label: "Day 1", text: "Transfer to Tamia, check in and visit the viewpoints that are confirmed open." },
          { label: "Day 2", text: "A locally guided Patalkot walk on an approved route. Confirm the terrain, the return time and any community visit before you start." },
          { label: "Day 3", text: "A morning viewpoint or a short walk, then the transfer to Chhindwara or the next stop." },
        ],
        links: [{ href: "/travel-guide/tamia-patalkot", label: "Read the Tamia guide" }],
      },
      {
        id: "wildlife-circuit",
        heading: "Madhai and Churna",
        days: [
          { label: "Arrival", text: "Arrive at Madhai and check in near the confirmed access point." },
          { label: "Madhai day", text: "Take a pre-booked Madhai-zone safari and an optional second confirmed activity." },
          { label: "Churna day", text: "Move to the confirmed Churna or Bheemkund arrangement only if the permit and the authorised vehicle are in place." },
          { label: "Return", text: "Leave from the relevant access point. Do not assume the road between the two areas is a simple unrestricted drive." },
        ],
        links: [{ href: "/travel-guide/churna", label: "Read the Churna guide" }],
      },
      {
        id: "grand-circuit",
        heading: "Satpura grand circuit",
        lead: "If you want both Tamia and a full Pachmarhi sightseeing day, consider an eighth day so a long drive is not stacked on a full day of stops.",
        table: {
          headers: ["Day", "Base", "Plan"],
          rows: [
            ["1", "Madhai", "Arrive, check in, and a permitted river activity if it is available."],
            ["2", "Madhai", "Booked wildlife safari and rest."],
            ["3", "Madhai or an approved Churna stay", "Churna only if access, permits and the stay line up. Otherwise add a second Madhai experience."],
            ["4", "Pachmarhi", "Transfer, Pandav Caves and the town if they are open."],
            ["5", "Pachmarhi", "Waterfall and forest-trail circuit, depending on access."],
            ["6", "Pachmarhi or Tamia", "Viewpoints and caves. Continue to Tamia only if the drive is practical."],
            ["7", "Departure", "An optional Tamia stop if you stayed there, then the transfer to the agreed endpoint."],
          ],
        },
      },
      {
        heading: "What to send for a fare",
        items: [
          "Travel dates and the number of passengers",
          "Pickup and drop locations",
          "Nights and the kind of stay you prefer",
          "Interests: wildlife, walking, waterfalls, photography or a slower pace",
          "Any safari permit you have already booked, and its reporting time",
        ],
      },
    ],
    enquiry: "Hello Satpura Cabs, I want a fare for a multi-day Satpura cab plan. Safari permits and stays are separate.",
    related: [
      { href: "/travel-guide/plan-your-trip", label: "Plan your trip" },
      { href: "/bhopal-to-pachmarhi-taxi", label: "Bhopal to Pachmarhi" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    slug: "treks",
    title: "Satpura Treks, Waterfalls and Nature Walks | Satpura Cabs",
    description: "Planning ranges for Dhoopgarh, Bee Falls, Apsara Vihar, Handi Khoh, Pandav Caves, Patalkot, Chauragarh and Madhai. Confirm access locally before you go.",
    crumb: "Treks",
    eyebrow: "Walks and waterfalls",
    h1: "Treks, waterfalls and nature walks",
    lead: "Difficulty and duration depend on the weather, the route, your pace and whether the trail is open. The times below are broad planning ranges, not official trail timings.",
    image: travelImages.dhoopgarh,
    sections: [
      {
        heading: "Outings to compare",
        cards: [
          { title: "Dhoopgarh", text: "A viewpoint visit rather than a defined trek for most people. Confirm transport access, entry hours and the sunset return.", note: "Plan for 30–90 minutes at the viewpoint, plus the drive and any approach walk.", image: travelImages.dhoopgarh },
          { title: "Bee Falls / Jamuna Prapat", text: "A popular waterfall outing with a descent and a climb back. The return can be tiring in the heat.", note: "Plan for roughly 2–4 hours including the approach and return, if the trail is open.", image: travelImages.bee },
          { title: "Apsara Vihar", text: "Often paired with nearby waterfalls. Follow the local rules around water, rocks and swimming.", note: "Plan for about 1–2 hours, depending on access and the other stops.", image: travelImages.apsara },
          { title: "Handi Khoh", text: "A ravine viewpoint for travellers who want the landscape without a full-day trek.", note: "Plan for around 30–60 minutes at the viewpoint, plus the drive.", image: travelImages.handi },
          { title: "Pandav Caves", text: "A heritage and rock-cave visit. Expect uneven ground and steps. Check the opening hours.", note: "Plan for about 45–90 minutes, subject to access.", image: travelImages.pandav },
          { title: "Patalkot guided walk", text: "Use a local guide to choose the route. Ask about steep sections, the descent, the duration and the return.", note: "Treat it as a half day or a full day only after the route is confirmed.", image: travelImages.tamia },
          { title: "Chauragarh", text: "A demanding uphill route to a hilltop shrine. It is not a casual walk. Consider fitness, heat, footwear and local advice.", note: "Plan for a substantial part of the day. Duration depends on the route and the pace.", image: travelImages.landscape },
          { title: "Madhai guided nature time", text: "Ask an authorised operator what nature interpretation or birdwatching is available. Do not walk into a restricted forest without permission.", note: "Plan according to the operator's current offering.", image: travelImages.backwaters },
        ],
      },
      {
        heading: "What to carry",
        items: [
          "Closed shoes with grip, and socks",
          "Water, light snacks and a small daypack",
          "Sun protection and a layer for the weather",
          "Personal medicine and a basic first-aid kit",
          "Offline directions and the guide's phone number",
          "Cash, where the network may not work",
        ],
        paragraphs: ["Do not cross a barrier, approach wildlife, enter a closed trail, or start a steep descent without a confirmed route and return time. Waterfall conditions can change quickly after rain."],
      },
    ],
    enquiry: "Hello Satpura Cabs, I want a cab for a Pachmarhi or Tamia walking day. Please share the current fare.",
    related: [
      { href: "/pachmarhi-local-sightseeing", label: "Pachmarhi sightseeing taxi" },
      { href: "/travel-guide/pachmarhi", label: "Pachmarhi guide" },
      { href: "/travel-guide/tamia-patalkot", label: "Tamia and Patalkot" },
    ],
  },
  {
    slug: "other-places",
    title: "More Places to Explore Around Satpura | Satpura Cabs",
    description: "Notes on Tawa Dam, Bori Wildlife Sanctuary, Pachmarhi cave shrines and viewpoints. Confirm hours and access before you add them to a cab day.",
    crumb: "Other places",
    eyebrow: "Nearby stops",
    h1: "More places around Satpura",
    lead: "These stops can add variety to a Madhai, Pachmarhi or Tamia holiday. Confirm the hours, the access and whether the drive is realistic before you add them to a paid day.",
    image: travelImages.landscape,
    sections: [
      {
        heading: "Places people ask about",
        cards: [
          { title: "Tawa Dam and reservoir", text: "Reservoir scenery, and boating or a cruise only when an operator is running it. Check the timing, the weather and the departure point.", note: "Often combined with Madhai, if the stay and the route work.", image: travelImages.backwaters },
          { title: "Bori Wildlife Sanctuary", text: "A forest area for specialist nature trips. Do not advertise independent entry or trekking without the current rules and an authorised arrangement.", note: "For nature-focused itineraries with a verified local plan.", image: travelImages.landscape },
          { title: "Chhota Mahadeo and cave shrines", text: "Spiritual and scenic stops in the Pachmarhi hills. Combine them only after the access and the road order are confirmed.", note: "Fits a Pachmarhi local sightseeing day.", image: travelImages.jata },
          { title: "Jata Shankar", text: "A cave shrine among rock formations. Expect steps and uneven ground. Follow the site rules and the opening hours.", note: "Often paired with Gupt Mahadev and nearby sightseeing.", image: travelImages.jata },
          { title: "Priyadarshini Point", text: "A valley viewpoint for a relaxed stop and landscape photography.", note: "Can sit with Handi Khoh and Dhoopgarh if the timing works.", image: travelImages.dhoopgarh },
          { title: "Rock-art and heritage outings", text: "Look for guided visits with conservation-sensitive access. Verify the exact site, the permission and the photography rules before you list it.", note: "For travellers who want a specialist heritage stop.", image: travelImages.pandav },
        ],
      },
      {
        heading: "How to choose what to add",
        table: {
          headers: ["Trip style", "Suggested additions", "Planning note"],
          rows: [
            ["Wildlife-focused", "Madhai, a permitted safari, Tawa backwaters", "Safari permits and boating must be confirmed separately."],
            ["Hill-station holiday", "Pachmarhi waterfalls, caves, ravines and viewpoints", "Group the stops by area and check trail closures."],
            ["Offbeat road trip", "Tamia, Patalkot viewpoints and guided walks", "Arrange a local guide and confirm how hard the route is."],
            ["Specialist nature trip", "Churna or Bori, where it is authorised", "Verify the current entry, the permit and the operator."],
          ],
        },
      },
    ],
    enquiry: "Hello Satpura Cabs, I want to add extra Satpura stops to a cab day. Please tell me if the route is realistic and share the current fare.",
    related: [
      { href: "/pachmarhi-local-sightseeing", label: "Pachmarhi sightseeing" },
      { href: "/travel-guide/madhai", label: "Madhai guide" },
      { href: "/travel-guide/itineraries", label: "Itineraries" },
    ],
  },
  {
    slug: "plan-your-trip",
    title: "Plan a Custom Satpura Cab Journey | Satpura Cabs",
    description: "Send your dates, pickup, group size and destinations for a Satpura cab fare. Safari permits, stays and forest entry are not included in the cab quote.",
    crumb: "Plan your trip",
    eyebrow: "Cab enquiry",
    h1: "Plan a custom Satpura cab journey",
    lead: "Send the details below and ask for the current fare. A cab quote covers the vehicle and the agreed route. It does not include safari permits, stays, forest entry or boating.",
    image: travelImages.road,
    sections: [
      {
        heading: "Details that make a fare accurate",
        items: [
          "Travel date and the number of days",
          "Pickup and drop, for example Pipariya, Bhopal or Chhindwara",
          "Number of adults and children",
          "Destinations: Madhai, Churna, Pachmarhi, Tamia or Patalkot",
          "Interests: wildlife, walks, waterfalls, viewpoints or a slower pace",
          "Where you are staying, and any safari you have already booked",
        ],
        paragraphs: ["Safari permits, accommodation and entry to restricted areas are confirmed separately."],
        links: [reserve],
      },
    ],
    enquiry: "Hello Satpura Cabs, I want a custom Satpura cab itinerary. Please share vehicle options and the current fare.",
    related: [
      { href: "/travel-guide/itineraries", label: "Itineraries" },
      { href: "/contact", label: "Contact" },
      { href: "/pipariya-to-pachmarhi-taxi", label: "Pipariya to Pachmarhi" },
      { href: "/bhopal-to-pachmarhi-taxi", label: "Bhopal to Pachmarhi" },
    ],
  },
];

export function travelGuidePaths(): string[] {
  return travelGuides.map((page) => (page.slug ? `/travel-guide/${page.slug}` : "/travel-guide"));
}

export function getTravelGuide(slug: string): GuidePageData | undefined {
  return travelGuides.find((page) => page.slug === slug);
}
