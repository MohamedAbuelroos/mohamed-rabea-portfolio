import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  number: string;
  label: string;
  icon: LucideIcon;
}

function StatsCard({ number, label, icon: Icon }: StatsCardProps) {
  return (
    <div
      className="
        group
        flex
        flex-col
        items-center
        rounded-xl
        border
        border-border/60
        bg-card/50
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div
        className="
          mb-4
          rounded-xl
          bg-muted
          p-2
        "
      >
        <Icon
          className="
            h-5
            w-5
            text-violet-500
          "
        />
      </div>

      <h3
        className="
          text-2xl
          font-bold
          tracking-tight
        "
      >
        {number}
      </h3>

      <p
        className="
          mt-2
          text-center
          text-xs
          uppercase
          tracking-[0.2em]
          text-muted-foreground
        "
      >
        {label}
      </p>
    </div>
  );
}

export default StatsCard;
