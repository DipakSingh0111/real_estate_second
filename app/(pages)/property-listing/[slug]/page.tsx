import { site } from "@/data";
import { notFound } from "next/navigation";
import { findAnyPropertyBySlug, getAllProperties } from "@/lib/property";
import PropertyDetail from "@/components/PropertyDetail";

export default async function PropertyDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const property = findAnyPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const galleryImages = getAllProperties()
    .filter((deal) => deal.slug !== property.slug)
    .map((deal) => deal.image)
    .slice(0, 4);

  return (
    <PropertyDetail
      data={{
        property,
        galleryImages,
        banner: site.PageBanner.variants.RealEstateInnerBanner1
          .propertyListing as any,
      }}
    />
  );
}
