import { experience } from "@/data/experience";
import ExperienceItem from "./experience-item";



export default function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-[11px] top-0 h-full w-[2px] bg-border" />

      <div className="space-y-14">
        {experience.map((item) => (
          <ExperienceItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
