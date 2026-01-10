/**
 * Navigation Configuration
 *
 * Edit this file to customize navigation links.
 */

export const navigationConfig = {
  mainNav: [
    { label: "Home", href: "#hero", type: "anchor" },
    { label: "Skills", href: "#skills", type: "anchor" },
    { label: "Projects", href: "#projects", type: "anchor" },
    { label: "Experience", href: "#experience", type: "anchor" },
    {
      label: "Blogs",
      href: "https://medium.com/@darshan.chaudhari.6602",
      type: "external",
    },
  ],

  ctaButton: {
    label: "Download Resume",
    href: "/resume.pdf",
    download: true,
  },
};
