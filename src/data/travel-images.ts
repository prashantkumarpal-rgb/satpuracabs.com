export interface TravelImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const travelImages = {
  hero: {
    src: "/assets/images/pachmarhi-hero.webp",
    width: 1200,
    height: 795,
    alt: "Illustration of Satpura hills, not a photograph of a specific viewpoint",
  },
  road: {
    src: "/assets/images/cab-road.webp",
    width: 1200,
    height: 892,
    alt: "Illustration of a touring vehicle on a forested hill road",
  },
  bee: {
    src: "/assets/images/bee-falls.webp",
    width: 1200,
    height: 1054,
    alt: "Illustration of a waterfall in forest near Pachmarhi",
  },
  tamia: {
    src: "/assets/images/tamia-valley.webp",
    width: 1200,
    height: 1185,
    alt: "Illustration of layered green hills near Tamia",
  },
  dhoopgarh: {
    src: "/assets/images/dhoopgarh.webp",
    width: 1200,
    height: 939,
    alt: "Illustration of a hill viewpoint in the Satpura range",
  },
  jata: {
    src: "/assets/images/jata-shankar.webp",
    width: 1200,
    height: 1163,
    alt: "Illustration of a rock shrine and cave-like formations",
  },
  pandav: {
    src: "/assets/images/pandav-caves.webp",
    width: 1200,
    height: 1174,
    alt: "Illustration of rock caves and a walking path",
  },
  handi: {
    src: "/assets/images/handi-khoh.webp",
    width: 1200,
    height: 1054,
    alt: "Illustration of a rocky gorge and a protected viewpoint path",
  },
  apsara: {
    src: "/assets/images/apsara-vihar.webp",
    width: 1200,
    height: 1120,
    alt: "Illustration of a forest pool and waterfall",
  },
  backwaters: {
    src: "/assets/images/travel/madhai-backwaters.webp",
    width: 1200,
    height: 748,
    alt: "Illustration of forest hills and calm backwaters near Madhai",
  },
  gate: {
    src: "/assets/images/travel/madhai-gate.webp",
    width: 1200,
    height: 879,
    alt: "Illustration of a Satpura reserve entrance and forest road",
  },
  landscape: {
    src: "/assets/images/travel/satpura-landscape.webp",
    width: 1200,
    height: 781,
    alt: "Illustration of green Satpura hills under a clear sky",
  },
} as const satisfies Record<string, TravelImage>;
