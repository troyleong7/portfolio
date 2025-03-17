import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Troy's Portfolio",
  description: "",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/portfolio-logo.png',
        href: '/portfolio-logo.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/portfolio-logo.png',
        href: '/portfolio-logo.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link
          rel="icon"
          href="/portfolio-logo.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/portfolio-logo.png"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
