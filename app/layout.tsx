import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { ThemeProvider } from "@/components/theme/theme-provider";

const personSchema = {
  "@context": "https://schema.org",

  "@type": "Person",

  name: "Mohamed Rabea",

  url: "https://mohamed-rabea-portfolio.vercel.app",

  jobTitle: "Frontend Developer & Business Solutions Builder",

  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, business applications, dashboards, booking platforms and workflow automation.",

  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Material UI",
    "Dashboard Development",
    "Business Applications",
    "Booking Systems",
    "Excel VBA",
  ],

  sameAs: [
    "https://github.com/MohamedAbuelroos",
    "https://www.linkedin.com/in/mohamed-rabea255/",
  ],
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Rabea | Frontend Developer & Business Solutions Builder",

  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, business applications, enterprise dashboards, booking systems and workflow automation solutions.",

  keywords: [
    "Mohamed Rabea",
    "Mohamed AbuElrous",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Business Applications",
    "Dashboard Development",
    "Booking Systems",
    "Workflow Automation",
    "Portfolio",
  ],

  authors: [
    {
      name: "Mohamed Rabea",
    },
  ],

  creator: "Mohamed Rabea",

  metadataBase: new URL("https://mohamed-rabea-portfolio.vercel.app"),

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],

    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Mohamed Rabea | Frontend Developer & Business Solutions Builder",

    description:
      "Building modern web applications, dashboards, booking systems and business automation solutions.",

    url: "https://mohamed-rabea-portfolio.vercel.app",

    siteName: "Mohamed Rabea Portfolio",

    images: [
      {
        url: "/og-image-1.png",
        width: 1200,
        height: 640,
        alt: "Mohamed Rabea Portfolio",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Mohamed Rabea | Frontend Developer & Business Solutions Builder",

    description:
      "Building modern web applications, dashboards and business solutions.",

    images: ["/og-image.png"],
  },
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} h-full scroll-smooth`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </body>
    </html>
  );
}

export default RootLayout;
