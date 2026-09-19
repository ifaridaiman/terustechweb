export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export const announcementBar = {
  text: "First phase live in 30 days.",
  linkText: "See how it works",
  href: "/how-we-work",
};

export const siteConfig = {
  name: "Terus Tech",
  tagline: "Terus Tech. First phase in 30 days. Built to keep going.",
  contact: {
    email: "[EMAIL]",
    whatsappNumber: "[NUMBER]",
    address: "Puncak Alam, Selangor, Malaysia",
  },
  legal: {
    copyright: "© 2026 Terus Tech",
    registration: "[REGISTERED NAME, SSM NUMBER]",
  },
};

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Custom software", href: "/services/custom-software" },
      { label: "Managed services", href: "/services/managed-services" },
      { label: "GIS solutions", href: "/services/gis-solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How we work", href: "/how-we-work" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
    ],
  },
];
