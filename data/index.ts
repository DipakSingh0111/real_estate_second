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

// ── Legacy Standalone Types ──
export type TopBarData = typeof siteData.topBar;
export type NavbarData = typeof siteData.navbar;
export type HeroBannerData = typeof siteData.heroBanner;
export type AboutSectionData = typeof siteData.aboutSection;
export type CtaSectionData = typeof siteData.ctaSection;
export type TopDealsSectionData = typeof siteData.topDealsSection;
export type BestRealEstateSectionData = typeof siteData.bestRealEstateSection;
export type ServicesSectionData = typeof siteData.servicesSection;
export type TeamPageData = typeof siteData.teamPage;
export type SupportBannerData = typeof siteData.supportBanner;
export type HowItWorkSectionData = typeof siteData.howItWork;
export type BlogsPageData = typeof siteData.blogs;
export type PageBannerData = typeof siteData.pageBanners[keyof typeof siteData.pageBanners];
export type FooterData = typeof siteData.footer;
export type ServicesPageData = typeof siteData.servicesPage;
export type PartnersPageData = typeof siteData.partnersPage;
export type PricingPageData = typeof siteData.pricingPage;
export type FaqPageData = typeof siteData.faqPage;
export type TestimonialPageData = typeof siteData.testimonialPage;
export type PrivacyPolicyPageData = typeof siteData.privacyPolicyPage;
export type TermsPageData = typeof siteData.termsPage;
export type GalleryPageData = typeof siteData.galleryPage;
export type AwardsPageData = typeof siteData.awardsPage;
export type CareersPageData = typeof siteData.careersPage;
export type BrochurePageData = typeof siteData.brochurePage;
export type IndustriesPageData = typeof siteData.industriesPage;
export type SitemapPageData = typeof siteData.sitemapPage;
export type AboutPageData = typeof siteData.aboutPage;

export type PropertyDeal = typeof siteData.topDealsSection.deals[0];
export type BlogPost = typeof siteData.blogs.posts[0];
export type TeamMember = typeof siteData.teamPage.members[0];

// ── Legacy Site Map for Standalone Real Estate Site ──
const legacySiteMap = {
  topBar: siteData.topBar,
  navbar: siteData.navbar,
  heroBanner: siteData.heroBanner,
  aboutSection: siteData.aboutSection,
  ctaSection: siteData.ctaSection,
  topDealsSection: siteData.topDealsSection,
  bestRealEstateSection: siteData.bestRealEstateSection,
  servicesSection: siteData.servicesSection,
  teamPage: siteData.teamPage,
  supportBanner: siteData.supportBanner,
  howItWork: siteData.howItWork,
  blogs: siteData.blogs,
  pageBanners: siteData.pageBanners,
  footer: siteData.footer,
  servicesPage: siteData.servicesPage,
  partnersPage: siteData.partnersPage,
  pricingPage: siteData.pricingPage,
  faqPage: siteData.faqPage,
  testimonialPage: siteData.testimonialPage,
  privacyPolicyPage: siteData.privacyPolicyPage,
  termsPage: siteData.termsPage,
  galleryPage: siteData.galleryPage,
  awardsPage: siteData.awardsPage,
  careersPage: siteData.careersPage,
  brochurePage: siteData.brochurePage,
  industriesPage: siteData.industriesPage,
  sitemapPage: siteData.sitemapPage,
  aboutPage: siteData.aboutPage,
  propertyDetail: siteData.propertyDetail,
  contactPage: siteData.contactPage,
  enquiryPage: siteData.enquiryPage,
  getQuotePage: siteData.getQuotePage,
  formOptions: siteData.formOptions,
  servicesDetails: siteData.servicesDetails,
  Realestate: siteData.categories.Realestate
};

export type SiteData = typeof legacySiteMap;
export const site = legacySiteMap;
export default siteData;
