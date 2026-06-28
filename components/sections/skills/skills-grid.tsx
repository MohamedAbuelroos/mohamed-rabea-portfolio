import { skillGroups } from "@/data/skills";
import SkillGroup from "./skill-group";
import { useInView } from "@/hooks/use-in-view";

export default function SkillsGrid() {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={`grid gap-6 lg:grid-cols-2 `}>
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className={`${visible ? "animate-fade-in delay-500" : "opacity-0"}`}
        >
          <SkillGroup group={group} />
        </div>
      ))}
    </div>
  );
}
