interface Props {
  skill: {
    name: string;
    icon: React.ElementType;
  };
}

export default function SkillBadge({ skill }: Props) {
  const Icon = skill.icon;

  return (
    <div
      className="
        group
        flex
        items-center
        gap-3
        rounded-lg
        border
        border-border/50
        bg-background/50
        px-4
        py-3
        transition-all
        duration-300
        hover:border-violet-500/30
        hover:bg-violet-500/5
      "
    >
      <Icon
        className="
          h-5
          w-5
          text-violet-500
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      <span className="font-medium">{skill.name}</span>
    </div>
  );
}
