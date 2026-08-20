import { site, type PropertyDeal } from "@/data";

export function propertySlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function findPropertyBySlug(deals: PropertyDeal[], slug: string) {
  return deals.find(
    (deal) => deal.slug === slug || propertySlug(deal.title) === slug,
  );
}

type FeaturedProperty =
  (typeof site.ServicesOverview.variants.RealEstateServicesOverview1.featured.properties)[number];

/** Loose shape covering listings + featured properties */
type PropertyInput = {
  title: string;
  image?: string;
  price?: string;
  slug?: string;
  location?: string;
  builder?: string;
  bedrooms?: number | string;
  bathrooms?: number | string;
  sqft?: number | string;
  parking?: number | string;
  statusText?: string;
  yearBuilt?: number | string;
  propertyType?: string;
  type?: string;
  category?: string;
  features?: Array<{ label: string; value: string } | string>;
  [key: string]: unknown;
};

function hasLabeledFeatures(
  features: PropertyInput["features"],
): features is Array<{ label: string; value: string }> {
  return (
    Array.isArray(features) &&
    features.length > 0 &&
    typeof features[0] === "object" &&
    features[0] !== null &&
    "label" in features[0]
  );
}

export function normalizeProperty(
  property: PropertyDeal | FeaturedProperty | PropertyInput,
): PropertyDeal {
  const input = property as PropertyInput;

  if (hasLabeledFeatures(input.features)) {
    return {
      ...(property as PropertyDeal),
      slug: input.slug || propertySlug(input.title),
      features: input.features,
    };
  }

  return {
    ...(property as object),
    title: input.title,
    image: (input.image as string) || "",
    price: (input.price as string) || "",
    slug: input.slug || propertySlug(input.title),
    location: input.location || input.builder || "",
    description: (input.description as string) || "",
    features: [
      { label: "Bedrooms", value: String(input.bedrooms ?? "-") },
      { label: "Bathrooms", value: String(input.bathrooms ?? "-") },
      {
        label: "Area",
        value: input.sqft ? `${input.sqft} sq.ft` : "-",
      },
      { label: "Parking", value: String(input.parking ?? "1") },
    ],
    statusText: input.statusText || `Built ${input.yearBuilt ?? 2024}`,
    propertyType: input.propertyType || input.type || "Villa",
    category: input.category || "For Sale",
  } as PropertyDeal;
}

export function getAllProperties(): PropertyDeal[] {
  const listings = site.Properties.variants.RealEstateProperties1.listings;
  const featured =
    site.ServicesOverview.variants.RealEstateServicesOverview1.featured
      .properties;

  const merged = [
    ...listings.map((item) => normalizeProperty(item)),
    ...featured.map((item) => normalizeProperty(item)),
  ];

  const seen = new Set<string>();
  return merged.filter((item) => {
    const key = item.slug || propertySlug(item.title);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function findAnyPropertyBySlug(slug: string) {
  const all = getAllProperties();
  return (
    all.find((item) => item.slug === slug) ||
    all.find((item) => propertySlug(item.title) === slug)
  );
}
