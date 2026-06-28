"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      title="Change Theme"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-sm
        border
        border-border
        bg-background
        transition-transform
transition-opacity
        duration-300
        hover:scale-105
        hover:bg-accent
      "
    >
      <Sun
        className="
          absolute
          h-5
          w-5
          rotate-0
          scale-100
          transition-transform
transition-opacity
          duration-300
          dark:-rotate-90
          dark:scale-0
          text-yellow-500
        "
      />

      <Moon
        className="
          absolute
          h-5
          w-5
          rotate-90
          scale-0
          transition-transform
transition-opacity
          duration-300
          dark:rotate-0
          dark:scale-100
        "
      />
    </button>
  );
}
