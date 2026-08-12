import type { PropertyDeal } from "@/types/home";

export function propertySlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function findPropertyBySlug(deals: PropertyDeal[], slug: string) {
  return deals.find((deal) => propertySlug(deal.title) === slug);
}
