import siteData from "./site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type RealEstateSchema = typeof siteData.categories.Realestate;
export type RealEstateSections = RealEstateSchema["sections"];
export type RealEstateTemplateComponents = RealEstateSchema["templateComponents"];

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type RealEstateTopbarData = RealEstateSections["Topbar"]["variants"]["RealEstateTopbar1"];
export type RealEstateHeaderData = RealEstateSections["Header"]["variants"]["RealEstateHeader1"];
export type RealEstateBannerData = RealEstateSections["Banner"]["variants"]["RealEstateBanner1"];
export type RealEstateAboutData = RealEstateSections["About"]["variants"]["RealEstateAbout1"];
export type RealEstateWhyChooseUsData = RealEstateSections["WhyChooseUs"]["variants"]["RealEstateWhyChooseUs1"];
export type RealEstateHighlightData = RealEstateSections["Highlight"]["variants"]["RealEstateHighlight1"];
export type RealEstatePropertiesData = RealEstateSections["Properties"]["variants"]["RealEstateProperties1"];
export type RealEstateCitiesWeServeData = RealEstateSections["CitiesWeServe"]["variants"]["RealEstateCitiesWeServe1"];
export type RealEstateServicePageData = RealEstateSections["Service"]["variants"]["RealEstateServicePage1"];
export type RealEstateServicesOverviewData = RealEstateSections["ServicesOverview"]["variants"]["RealEstateServicesOverview1"];
export type RealEstateTeamData = RealEstateSections["Team"]["variants"]["RealEstateTeam1"];
export type RealEstateSupportBannerData = RealEstateSections["SupportBanner"]["variants"]["RealEstateSupportBanner1"];
export type RealEstatePropertyProcessData = RealEstateSections["PropertyProcess"]["variants"]["RealEstatePropertyProcess1"];
export type RealEstateBlogData = RealEstateSections["Blog"]["variants"]["RealEstateBlog1"];
export type RealEstateFooterData = RealEstateSections["Footer"]["variants"]["RealEstateFooter1"];
export type RealEstatePartnersData = RealEstateSections["Partners"]["variants"]["RealEstatePartners1"];
export type RealEstatePricingData = RealEstateSections["Pricing"]["variants"]["RealEstatePricing1"];
export type RealEstateFAQData = RealEstateSections["FAQ"]["variants"]["RealEstateFAQ1"];
export type RealEstateTestimonialData = RealEstateSections["Testimonial"]["variants"]["RealEstateTestimonial1"];
export type RealEstatePrivacyContentData = RealEstateSections["PrivacyPage"]["variants"]["RealEstatePrivacyContent1"];
export type RealEstateTermsContentData = RealEstateSections["TermsPage"]["variants"]["RealEstateTermsContent1"];
export type RealEstateGalleryCollectionData = RealEstateSections["GalleryPage"]["variants"]["RealEstateGalleryCollection1"];
export type RealEstateAwardsData = RealEstateSections["Awards"]["variants"]["RealEstateAwards1"];
export type RealEstateCareerPageData = RealEstateSections["CareerPage"]["variants"]["RealEstateCareerPage1"];
export type RealEstateBrochureData = RealEstateSections["Brochure"]["variants"]["RealEstateBrochure1"];
export type RealEstateIndustriesData = RealEstateSections["Industries"]["variants"]["RealEstateIndustries1"];
export type RealEstateSitemapLinksData = RealEstateSections["SitemapPage"]["variants"]["RealEstateSitemapLinks1"];
export type RealEstateAboutPageData = RealEstateSections["AboutPage"]["variants"]["RealEstateAboutPage1"];
export type RealEstatePropertyDetailData = RealEstateSections["PropertyDetail"]["variants"]["RealEstatePropertyDetail1"];
export type RealEstateContactData = RealEstateSections["Contact"]["variants"]["RealEstateContact1"];
export type RealEstateEnquiryPageData = RealEstateSections["EnquiryPage"]["variants"]["RealEstateEnquiryPage1"];
export type RealEstateGetQuotePageData = RealEstateSections["GetQuotePage"]["variants"]["RealEstateGetQuotePage1"];
export type RealEstateFormOptionsData = RealEstateSections["FormOptions"]["variants"]["RealEstateFormOptions1"];
export type RealEstateInnerBannerData = RealEstateSections["PageBanner"]["variants"]["RealEstateInnerBanner1"];

export const site = siteData.categories.Realestate.sections;

// ── Aliases for existing components ──
export type TopBarData = RealEstateTopbarData;
export type NavbarData = RealEstateHeaderData;
export type HeroBannerData = RealEstateBannerData;
export type AboutSectionData = RealEstateAboutData;
export type CtaSectionData = RealEstateHighlightData;
export type TopDealsSectionData = RealEstatePropertiesData;
export type BestRealEstateSectionData = RealEstateCitiesWeServeData;
export type ServicesSectionData = RealEstateServicesOverviewData;
export type TeamPageData = RealEstateTeamData;
export type SupportBannerData = RealEstateSupportBannerData;
export type HowItWorkSectionData = RealEstatePropertyProcessData;
export type BlogsPageData = RealEstateBlogData;
export type PageBannerData = RealEstateInnerBannerData;
export type FooterData = RealEstateFooterData;
export type ServicesPageData = RealEstateServicePageData;
export type PartnersPageData = RealEstatePartnersData;
export type PricingPageData = RealEstatePricingData;
export type FaqPageData = RealEstateFAQData;
export type TestimonialPageData = RealEstateTestimonialData;
export type PrivacyPolicyPageData = RealEstatePrivacyContentData;
export type TermsPageData = RealEstateTermsContentData;
export type GalleryPageData = RealEstateGalleryCollectionData;
export type AwardsPageData = RealEstateAwardsData;
export type CareersPageData = RealEstateCareerPageData;
export type BrochurePageData = RealEstateBrochureData;
export type IndustriesPageData = RealEstateIndustriesData;
export type SitemapPageData = RealEstateSitemapLinksData;
export type AboutPageData = RealEstateAboutPageData;

export type PropertyDeal = RealEstatePropertiesData["listings"][0];
export type BlogPost = RealEstateBlogData["blogItems"][0];
export type TeamMember = RealEstateTeamData["teamItems"][0];

export type SiteData = typeof site;
export default siteData;
