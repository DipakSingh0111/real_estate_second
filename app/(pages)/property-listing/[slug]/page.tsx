import { notFound } from "next/navigation";
import siteData from "@/data/property.json";
import { findPropertyBySlug } from "@/lib/property";
import PropertyDetail from "@/components/PropertyDetail";

export default async function PropertyDetailPage(
  props: PageProps<"/property-listing/[slug]">,
) {
  const { slug } = await props.params;

  // Combine all properties so we can find any property by slug
  const deals = siteData.topDealsSection.deals;
  const serviceProperties = siteData.servicesPage.properties;

  const property =
    findPropertyBySlug(deals, slug) ||
    serviceProperties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const galleryImages = deals
    .filter((deal) => deal.id !== property.id)
    .map((deal) => deal.image)
    .slice(0, 4);

  return (
    <PropertyDetail
      property={property}
      galleryImages={galleryImages}
      banner={siteData.pageBanners.propertyListing}
    />
  );
}
