export interface SocialLink {
  /** Persian label shown on the page */
  label: string;
  /** Handle shown as secondary text, without the @ */
  handle: string;
  href: string;
}

// Single source of truth for social links — edit this list to add,
// remove, or reorder links. Nothing else in the project needs to change.
export const socialLinks: SocialLink[] = [
  {
    label: "اینستاگرام",
    handle: "Themojh",
    href: "https://instagram.com/Themojh",
  },
  {
    label: "یوتیوب",
    handle: "Themojh",
    href: "https://youtube.com/@Themojh",
  },
  {
    label: "تلگرام",
    handle: "Themojh",
    href: "https://t.me/Themojh",
  },
];
