import { Briefcase, Code2, Laptop, Plane } from "lucide-react";

const cards = [
  {
    title: "Tech Background",
    icon: Laptop,
    text: "Hardware & software expertise",
  },
  {
    title: "Travel Industry",
    icon: Plane,
    text: "HOPPA, KOI, Mozio, Elife",
  },
  {
    title: "Frontend Developer",
    icon: Code2,
    text: "React, Next.js, TypeScript",
  },
  {
    title: "Problem Solver",
    icon: Briefcase,
    text: "Building real business solutions",
  },
];

export default function ExperienceHighlights() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              rounded-2xl
              border
              border-border/50
              bg-card/50
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div
              className="
                mb-4
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-violet-500/10
              "
            >
              <Icon size={22} className="text-violet-500" />
            </div>

            <h3 className="font-bold">{card.title}</h3>

            <p className="mt-2 text-sm text-muted-foreground">{card.text}</p>
          </div>
        );
      })}
    </div>
  );
}
