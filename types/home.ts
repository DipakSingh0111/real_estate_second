export type NavLink = {
  label: string;
  href: string;
  hasDropdown: boolean;
};

export type NavbarData = {
  logoText: string;
  subLogoText: string;
  navLinks: NavLink[];
};

export type HeroBannerData = {
  badgeTag: string;
  badgeLocation: string;
  title: string;
  description: string;
  priceTag: {
    label: string;
    amount: string;
  };
  backgroundImage: string;
};

export type SiteData = {
  navbar: NavbarData;
  heroBanner: HeroBannerData;
};
