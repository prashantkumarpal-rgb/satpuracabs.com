import { destinations } from "./destinations";
import { routes } from "./routes";

export const extraPages = [
  {
    path: "/pachmarhi-local-sightseeing",
    title: "Pachmarhi Local Sightseeing Taxi | Satpura Cabs",
    description:
      "Book a local Pachmarhi sightseeing taxi for waterfalls, viewpoints, caves and other local attractions.",
  },
  {
    path: "/contact",
    title: "Contact Satpura Cabs | Taxi Service",
    description:
      "Contact Satpura Cabs for taxi service in Pachmarhi, Tamia, Madhai, Pipariya, Matkuli and Bhopal.",
  },
] as const;

export function publicPaths(): string[] {
  return [
    "/",
    ...destinations.map((item) => `/${item.slug}`),
    ...routes.map((item) => `/${item.slug}`),
    ...extraPages.map((item) => item.path),
  ];
}
