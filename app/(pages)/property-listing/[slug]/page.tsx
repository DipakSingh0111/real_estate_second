import { site } from "@/data";
import { notFound } from "next/navigation";
import { findPropertyBySlug } from "@/lib/property";
import PropertyDetail from "@/components/PropertyDetail";

export default async function PropertyDetailPage(
  props: any
) {
  const { slug } = await props.params;

  const deals = site.topDealsSection.deals;
  const serviceProperties = site.servicesPage.properties;

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
      data={{
        property,
        galleryImages,
        banner: site.pageBanners['property-listing'],
      }}
    />
  );
}
