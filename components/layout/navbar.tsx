"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "./mobile-menu";
import ThemeToggle from "@/components/theme/theme-toggle";
import Logo from "./logo";
import { navigationLinks } from "@/data/navigation";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/60 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 w-full max-w-[1320px] items-center justify-between px-8 lg:px-10">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-10 lg:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <ThemeToggle />

          <a
            title="Download CV"
            href="/resume/Mohamed-Rabea-CV.pdf"
            className=" hidden lg:inline-flex  h-10 items-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-medium  duration-200 hover:-translate-y-0.5 hover:shadow-lg "
          >
            <Download size={16} />

            <span>Resume</span>
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
