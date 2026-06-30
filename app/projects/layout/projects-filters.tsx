import { projectCategories } from "@/data/project-categories";

interface Props {
  selected: string;
  onChange: (value: string) => void;
}

export default function ProjectsFilters({ selected, onChange }: Props) {
  return (
    <div className="mb-20 flex flex-wrap justify-center gap-4">
      {projectCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={`
            rounded-sm
            px-8
            cursor-pointer
            py-2
            text-sm
            font-medium
          
            duration-300

            ${
              selected === category.id
                ? "bg-violet-500 text-white shadow-lg"
                : "border border-border bg-card hover:border-violet-500/30"
            }
          `}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
