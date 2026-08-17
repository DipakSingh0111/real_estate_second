export type BrandLogo = {
  src: string;
  alt: string;
};

export type NavDropdownItem = {
  label: string;
  href: string;
  children?: NavDropdownItem[];
};

export type NavLink = {
  label: string;
  href: string;
  hasDropdown: boolean;
  active?: boolean;
  dropdown?: NavDropdownItem[];
};

export type TopBarData = {
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  address: string;
};

export type NavbarData = {
  logo: BrandLogo;
  navLinks: NavLink[];
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type PageBannerData = {
  title: string;
  description: string;
  breadcrumb: BreadcrumbItem[];
  backgroundImage: string;
  backgroundImageAlt: string;
};

export type HeroPriceTag = {
  label: string;
  amount: string;
};

export type HeroSlide = {
  image: string;
  title: string;
  priceLabel: string;
  price: string;
};

export type HeroBannerData = {
  badgeTag: string;
  badgeLocation: string;
  title: string;
  highlightedTitleText: string;
  description: string;
  slides: HeroSlide[];
};

export type AboutService = {
  iconName: string;
  title: string;
  text: string;
  fullDescription?: string;
  buttonText: string;
  accent: boolean;
};

export type AboutSectionData = {
  badge: string;
  heading: string;
  description: string;
  buttonLabel: string;
  imageUrl: string;
  imageAlt: string;
  services: AboutService[];
};

export type CtaSectionData = {
  eyebrow: string;
  headingLines: string[];
  highlightedWord: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  imageUrl: string;
  imageAlt: string;
  stat: {
    value: string;
    label: string;
  };
};

export type PropertyDeal = {
  id: number;
  slug: string;
  title: string;
  builder?: string;
  location: string;
  price: string;
  pricePerMonth: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  type: string;
  yearBuilt: number;
  parking: number;
  description: string;
  features: string[];
};

export type TopDealsSectionData = {
  eyebrow: string;
  heading: string;
  propertyLabels: {
    bedrooms: string;
    bathrooms: string;
    squareFeet: string;
  };
  deals: PropertyDeal[];
};

export type SectionImage = {
  src: string;
  alt: string;
};

export type BestRealEstateSectionData = {
  eyebrow: string;
  headingLines: string[];
  description: string;
  images: SectionImage[];
  learnMoreLabel: string;
  learnMoreLink: string;
  playButtonLabel: string;
};

export type TeamStat = {
  value: string;
  label: string;
};

export type TeamMember = {
  id: number;
  slug: string;
  role: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  email: string;
  phone: string;
  specialization: string;
  bio: string;
  stats: TeamStat[];
};

export type TeamPageData = {
  hero: {
    title: string;
    backgroundImage: string;
    subtitle: string;
  };
  members: TeamMember[];
};

export type SupportBannerData = {
  title: string;
  description: string;
  callLabel: string;
  phoneNumber: string;
  phoneHref: string;
  imageUrl: string;
  imageAlt: string;
};

export type HowItWorkStep = {
  number: string;
  title: string;
  desc: string;
  iconName: string;
};

export type HowItWorkCtaCard = {
  title: string;
  description: string;
  buttonText: string;
};

export type HowItWorkSectionData = {
  pageBanner: PageBannerData;
  eyebrow: string;
  heading: string;
  description: string;
  steps: HowItWorkStep[];
  ctaCard: HowItWorkCtaCard;
};

export type Service = {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  image: string;
  benefits: string[];
  features: string[];
  isActive?: boolean;
};

export type ServicesSectionData = {
  eyebrow: string;
  heading: string;
  description: string;
  services: Service[];
};

export type BlogPostType = "video" | "slider" | "standard";

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  category: string;
  type?: BlogPostType | string;
};

export type BlogCategoryCard = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type BlogsSidebarSearch = {
  title: string;
  placeholder: string;
};

export type BlogsSidebarRecentPosts = {
  title: string;
};

export type BlogsSidebarNewsletter = {
  title: string;
  description: string;
  placeholder: string;
  buttonText: string;
};

export type BlogsSidebarData = {
  search: BlogsSidebarSearch;
  recentPosts: BlogsSidebarRecentPosts;
  newsletter: BlogsSidebarNewsletter;
};

export type BlogsPageData = {
  pageBanner: PageBannerData;
  posts: BlogPost[];
  categoryCards: BlogCategoryCard[];
  categories: string[];
  sidebar: BlogsSidebarData;
};

export type ServicePageItem = {
  id: number;
  title: string;
  description: string;
  iconName: string;
  isActive?: boolean;
};

export type ServicesPageData = {
  eyebrow: string;
  heading: string;
  description: string;
  featuredEyebrow: string;
  featuredHeading: string;
  featuredDescription: string;
  saleLabel: string;
  helpTitle: string;
  helpText: string;
  helpButton: string;
  items: ServicePageItem[];
  properties: PropertyDeal[];
};

export type PartnerLogo = {
  id: number;
  name: string;
  logo: string;
};

export type PartnersPageData = {
  heading: string;
  description: string;
  items: PartnerLogo[];
};

export type PricingFeature = {
  text: string;
  available: boolean;
};

export type PricingPlan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  billing: string;
  iconName: string;
  isPopular: boolean;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant: string;
};

export type PricingPageData = {
  eyebrow: string;
  heading: string;
  description: string;
  popularLabel: string;
  plans: PricingPlan[];
};

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export type FaqStat = {
  value: string;
  label: string;
  iconName: string;
};

export type FaqPageData = {
  eyebrow: string;
  heading: string;
  headingHighlight: string;
  description: string;
  sideImage: string;
  sideImageAlt: string;
  stats: FaqStat[];
  items: FaqItem[];
};

export type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  comment: string;
  image: string;
  imagePosition: "left" | "right" | string;
};

export type TestimonialPageData = {
  eyebrow: string;
  heading: string;
  description: string;
  items: TestimonialItem[];
};

export type LegalSection = {
  id: string | number;
  title: string;
  content: string;
};

export type PrivacyPolicyPageData = {
  lastUpdated: string;
  intro: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  sections: LegalSection[];
};

export type TermsPageData = {
  lastUpdated: string;
  intro: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  sections: LegalSection[];
};

export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

export type GalleryPageData = {
  eyebrow: string;
  heading: string;
  description: string;
  images: GalleryImage[];
};

export type AwardItem = {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  icon: string;
};

export type AwardsPageData = {
  heading: string;
  description: string;
  items: AwardItem[];
};

export type CareerFeature = {
  id: number;
  title: string;
  description: string;
  details: string;
  iconName: string;
};

export type CareersPageData = {
  heroImage: string;
  heroImageAlt: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  contactTitle: string;
  contactText: string;
  email: string;
  phone: string;
  phoneHref: string;
  whatsappHref: string;
  addressLines: string[];
  features: CareerFeature[];
};

export type BrochureItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  year: string;
  bgImage: string;
  pdfUrl: string;
};

export type BrochurePageData = {
  heading: string;
  description: string;
  items: BrochureItem[];
};

export type IndustryItem = {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  iconName: string;
};

export type IndustriesPageData = {
  heading: string;
  description: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  items: IndustryItem[];
};

export type SitemapLink = {
  name: string;
  href: string;
};

export type SitemapSectionItem = {
  id: number;
  title: string;
  iconName: string;
  links: SitemapLink[];
};

export type SitemapPageData = {
  heading: string;
  description: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  sections: SitemapSectionItem[];
};

export type WhyFeature = {
  title: string;
  text: string;
  iconName: string;
};

export type AboutPageData = {
  mainImage: string;
  mainImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  badgeValue: string;
  badgeLabel: string;
  eyebrow: string;
  heading: string;
  headingHighlight: string;
  paragraphs: string[];
  visionTitle: string;
  visionText: string;
  missionTitle: string;
  missionText: string;
  whyEyebrow: string;
  whyHeading: string;
  whyHeadingHighlight: string;
  whyDescription: string;
  whyImage: string;
  whyImageAlt: string;
  whyStatValue: string;
  whyStatLabel: string;
  whyFeatures: WhyFeature[];
};

export type SocialLink = {
  platform: string;
  label: string;
  href: string;
};

export type FooterLinkItem = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: FooterLinkItem[];
};

export type FooterData = {
  logo: BrandLogo;
  title: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contact: {
    heading: string;
    address: string[];
    phoneNumber: string;
  };
  copyright: string;
};

export type SiteData = {
  topBar: TopBarData;
  navbar: NavbarData;
  heroBanner: HeroBannerData;
  aboutSection: AboutSectionData;
  ctaSection: CtaSectionData;
  topDealsSection: TopDealsSectionData;
  bestRealEstateSection: BestRealEstateSectionData;
  servicesSection: ServicesSectionData;
  teamPage: TeamPageData;
  supportBanner: SupportBannerData;
  howItWork: HowItWorkSectionData;
  blogs: BlogsPageData;
  pageBanners: Record<string, PageBannerData>;
  footer: FooterData;
  servicesPage: ServicesPageData;
  partnersPage: PartnersPageData;
  pricingPage: PricingPageData;
  faqPage: FaqPageData;
  testimonialPage: TestimonialPageData;
  privacyPolicyPage: PrivacyPolicyPageData;
  termsPage: TermsPageData;
  galleryPage: GalleryPageData;
  awardsPage: AwardsPageData;
  careersPage: CareersPageData;
  brochurePage: BrochurePageData;
  industriesPage: IndustriesPageData;
  sitemapPage: SitemapPageData;
  aboutPage: AboutPageData;
};
