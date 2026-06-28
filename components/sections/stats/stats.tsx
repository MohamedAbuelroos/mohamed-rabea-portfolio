import { stats } from "@/data/stats";

import StatsCard from "./stats-card";
import { useInView } from "@/hooks/use-in-view";

export default function Stats() {
  const { ref, visible } = useInView();
  const animationDelays = ["delay-150", "delay-300", "delay-500", "delay-700"];
  return (
    <section
      ref={ref}
      id="stats"
      className="
        relative
        py-15
      "
    >
      <div className="mx-auto max-w-[1120px] px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`transition-transform
      ${visible ? "animate-project-fade" : "opacity-0"}
      ${animationDelays[index]}
    `}
            >
              <StatsCard
                number={stat.number}
                label={stat.label}
                icon={stat.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
