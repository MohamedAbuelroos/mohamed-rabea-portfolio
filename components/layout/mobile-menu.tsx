"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { navigationLinks } from "@/data/navigation";
import Logo from "./logo";

function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Trigger */}
      <button
        title="Menu"
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card transition hover:bg-muted lg:hidden hover:scale-105 hover:rotate-3 active:scale-95"
      >
        <Menu size={20} className="transition-transform duration-300" />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
    fixed inset-0 z-50 bg-black/40 backdrop-blur-sm h-screen w-full top-0 left-0
    transition-opacity duration-500
    ${open ? "opacity-100 visible" : "opacity-0 invisible"}
  `}
      />

      {/* Drawer */}
      <aside
        className={`
  fixed top-0 right-0 z-[60] flex h-screen w-[320px] flex-col
  border-l border-border bg-background p-6 shadow-xl
  transition-all duration-500 ease-in-out
  ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
`}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <Logo />

          <button
            title="Close"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted transition-transform duration-300 hover:rotate-90"
          >
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <nav className="mt-12 flex flex-col gap-2">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                rounded-xl
                px-4
                py-3
                text-lg
                font-medium
                transition
                hover:bg-muted
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto">
          <a
            href="/resume.pdf"
            download
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-md
              bg-primary
              px-5
              py-3
              text-primary-foreground
            "
          >
            <Download size={18} />
            Resume
          </a>
        </div>
      </aside>
    </>
  );
}

export default MobileMenu;
