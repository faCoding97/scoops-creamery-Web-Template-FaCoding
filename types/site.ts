// types/site.ts
export type NavItem = { label: string; href: string };

export type Contact = {
  email: string;
  location: string;
  note?: string; // اختیاری
  phone?: "+27 60 000 0000"; // اختیاری
};

export type Flavor = {
  slug: string;
  name: string;
  category: "dairy" | "sorbet" | "vegan";
  price: string;
  image: string;
  tags: string[];
  shortDescription: string;
  description: string;
  ingredients: string[];
};

export type SiteData = {
  site: { name: string; baseUrl: string; logo: string };
  nav: NavItem[];
  hero: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
    image?: string;
  };
  flavors: Flavor[];
  about: { heading: string; content: string };
  contact: Contact; // ✅ از Contact استفاده کن
  footer: { year: number };
};
