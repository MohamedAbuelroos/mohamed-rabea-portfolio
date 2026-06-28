import { Check } from "lucide-react";

import { aboutFeatures } from "@/data/about";
import { useInView } from "@/hooks/use-in-view";

export default function AboutContent() {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`max-w-2xl delay-200 transition-transform
      ${visible ? "animate-fade-in" : "opacity-0"}
    `}
    >
      <div className="my-5">
        <span
          className="
            rounded-md
            bg-violet-500/10
            px-4
            py-2
            text-sm
            font-medium
            text-violet-500
          "
        >
          ABOUT ME
        </span>
      </div>

      <h2
        className="
          max-w-[700px]
          text-5xl
          font-black
          leading-[1.05]
          xl:text-6xl
          "
      >
        From Computer Technician to Frontend Engineering
      </h2>

      <p
        className="
          mt-6
          max-w-[700px]
          leading-8
          text-muted-foreground
          "
      >
        My journey in technology began with computer hardware and software
        maintenance, where I discovered a passion for understanding how systems
        work and solving real‑world problems.
        <br />
        Today, I specialize in building modern, responsive, user‑focused web
        applications with React, Next.js, TypeScript, and cutting‑edge frontend
        technologies.
      </p>

      <div className="mt-5 grid gap-6 md:grid-cols-2">
        {aboutFeatures.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <div
              className="
                rounded-full
                bg-violet-500/10
                p-1
              "
            >
              <Check size={16} className="text-violet-500" />
            </div>

            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
