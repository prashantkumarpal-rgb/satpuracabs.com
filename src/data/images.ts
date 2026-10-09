export const images = {
  pachmarhi: {
    src: "/assets/images/pachmarhi-hero.webp",
    width: 1200,
    height: 795,
  },
  pipariya: {
    src: "/assets/images/pipariya-station.webp",
    width: 1200,
    height: 941,
  },
  tamia: {
    src: "/assets/images/tamia-valley.webp",
    width: 1200,
    height: 1185,
  },
  madhai: {
    src: "/assets/images/madhai-forest.webp",
    width: 1200,
    height: 1139,
  },
  road: {
    src: "/assets/images/cab-road.webp",
    width: 1200,
    height: 892,
  },
  pachmarhiRoad: {
    src: "/assets/images/pachmarhi-road.webp",
    width: 1200,
    height: 789,
  },
  bhopal: {
    src: "/assets/images/bhopal-station.webp",
    width: 1200,
    height: 752,
  },
  airport: {
    src: "/assets/images/bhopal-airport.webp",
    width: 1200,
    height: 706,
  },
  sightseeing: {
    src: "/assets/images/sightseeing.webp",
    width: 1200,
    height: 1065,
  },
  sunset: {
    src: "/assets/images/sunset-satpura.webp",
    width: 1200,
    height: 793,
  },
  beeFalls: {
    src: "/assets/images/bee-falls.webp",
    width: 1200,
    height: 1054,
  },
  dhoopgarh: {
    src: "/assets/images/dhoopgarh.webp",
    width: 1200,
    height: 939,
  },
  jataShankar: {
    src: "/assets/images/jata-shankar.webp",
    width: 1200,
    height: 1163,
  },
  pandavCaves: {
    src: "/assets/images/pandav-caves.webp",
    width: 1200,
    height: 1174,
  },
  handiKhoh: {
    src: "/assets/images/handi-khoh.webp",
    width: 1200,
    height: 1054,
  },
  apsaraVihar: {
    src: "/assets/images/apsara-vihar.webp",
    width: 1200,
    height: 1120,
  },
  fleet: {
    src: "/assets/images/vehicle-fleet.webp",
    width: 1200,
    height: 738,
  },
  tempo: {
    src: "/assets/images/tempo-traveller.webp",
    width: 1200,
    height: 814,
  },
  family: {
    src: "/assets/images/family-travel.webp",
    width: 1200,
    height: 841,
  },
} as const;

export type ImageKey = keyof typeof images;
