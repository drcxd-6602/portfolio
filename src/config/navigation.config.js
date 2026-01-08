/**
 * Navigation Configuration
 *
 * Edit this file to customize navigation links.
 */

export const navigationConfig = {
  mainNav: [
    { label: "Home", href: "#hero", type: "anchor" },
    { label: "About", href: "#about", type: "anchor" },
    { label: "Skills", href: "#skills", type: "anchor" },
    { label: "Projects", href: "#projects", type: "anchor" },
    { label: "Experience", href: "#experience", type: "anchor" },
    { label: "Blog", href: "/blog", type: "route" },
    { label: "Contact", href: "#contact", type: "anchor" },
  ],

  ctaButton: {
    label: "Download Resume",
    href: "/resume.pdf",
    download: true,
  },
};
