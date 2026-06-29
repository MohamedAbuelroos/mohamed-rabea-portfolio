"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ProjectScroll() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");

    if (!id) return;

    const element = document.getElementById(id);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }, [searchParams]);

  return null;
}