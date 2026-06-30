import SkillBadge from "./skill-badge";

interface Props {
  group: {
    title: string;
    items: {
      name: string;
      icon: React.ElementType;
    }[];
  };
}

export default function SkillGroup({ group }: Props) {
  return (
    <article
      className="
        rounded-xl
        border
        border-border/50
        bg-card/50
        p-8
      
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <h3 className="mb-6 text-2xl font-bold">{group.title}</h3>

      <div className="flex flex-wrap gap-4">
        {group.items.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </article>
  );
}
