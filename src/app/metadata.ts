import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Troy's Portfolio",
  description: "",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/portfolio-logo.png",
        href: "/portfolio-logo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/portfolio-logo.png",
        href: "/portfolio-logo.png",
      },
    ],
  },
};