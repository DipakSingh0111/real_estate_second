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

export type HeroBannerData = {
  badgeTag: string;
  badgeLocation: string;
  title: string;
  highlightedTitleText: string;
  description: string;
  priceTag: HeroPriceTag;
  backgroundImage: string;
};

export type AboutService = {
  iconName: string;
  title: string;
  text: string;
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
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
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
  role: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
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
  navbar: NavbarData;
  heroBanner: HeroBannerData;
  aboutSection: AboutSectionData;
  ctaSection: CtaSectionData;
  topDealsSection: TopDealsSectionData;
  bestRealEstateSection: BestRealEstateSectionData;
  teamPage: TeamPageData;
  supportBanner: SupportBannerData;
  pageBanners: Record<string, PageBannerData>;
  footer: FooterData;
};
