import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { ThemeProvider } from "@/components/theme/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Rabea | Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, and modern web applications.",
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
      </body>
    </html>
  );
}

export default RootLayout;
