import { highlightCards } from "@/data/experience";

export default function ExperienceHighlights() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
      {highlightCards.map((card) => {
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
              
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
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
