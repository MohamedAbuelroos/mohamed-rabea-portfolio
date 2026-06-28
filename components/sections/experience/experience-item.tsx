import { CircleCheckBig } from "lucide-react";

interface Props {
  item: {
    year: string;
    title: string;
    description: string;
  };
}

export default function ExperienceItem({ item }: Props) {
  return (
    <div className="relative pl-12">
      {/* dot */}
      <div
        className="
          absolute
          left-0
          top-1
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          bg-violet-500
          text-white
          shadow-lg
        "
      >
        <CircleCheckBig size={14} />
      </div>

      {/* year */}
      <p className="text-sm font-semibold text-violet-500">{item.year}</p>

      {/* title */}
      <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>

      {/* description */}
      <p className="mt-3 leading-8 text-muted-foreground">{item.description}</p>
    </div>
  );
}
