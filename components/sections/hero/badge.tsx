import { heroData } from "@/data/hero";

function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />

        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
      </span>

      <span className="text-sm font-medium">{heroData.badge}</span>
    </div>
  );
}

export default HeroBadge;
