"use client";

import { ArrowUp } from "lucide-react";

import Logo from "@/components/layout/logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-[1320px] px-6 py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 m-auto h-32 w-32 rounded-full bg-violet-500/10 blur-[70px]" />

            <Logo />
          </div>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-xl
              leading-8
              text-muted-foreground
            "
          >
            Frontend developer passionate about building modern, responsive and
            business-focused web experiences.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="
              mt-8
              group
              flex
              items-center
              gap-2
              rounded-full
              border
              border-border/50
              bg-card/50
              px-5
              py-3
              font-medium
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-violet-500/30
              hover:bg-violet-500/5
              hover:shadow-lg
            "
          >
            Back to Top
            <ArrowUp
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
            />
          </button>

          {/* Divider */}
          <div className="my-10 h-px w-full max-w-2xl bg-border" />

          {/* Copyright */}
          <div
            className="
              flex
              flex-col
              items-center
              gap-2
              text-sm
              text-muted-foreground
              md:flex-row
              md:gap-6
            "
          >
            <p>© {new Date().getFullYear()} Mohamed Rabea</p>

            <span className="hidden md:block">•</span>

            <p>Built with Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
