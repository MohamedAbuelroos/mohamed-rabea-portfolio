import { CircleCheckBig } from "lucide-react";

const features = ["Fast", "Responsive", "Accessible"];

function FloatingCard() {
  return (
    <div
      className="
        absolute
        -left-10
        bottom-18
        z-20
        rounded-lg
        border
        border-white/40
        bg-card/95
        py-4
        px-8
        shadow-[0_20px_40px_rgba(0,0,0,.12)]
        backdrop-blur-xl
        hidden
        lg:block
        animate-[float_5s_ease-in-out_infinite]
        dark:border-violet-900/40
      "
    >
      <div className="space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <CircleCheckBig size={18} className="text-emerald-500" />

            <span className="text-sm font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FloatingCard;
