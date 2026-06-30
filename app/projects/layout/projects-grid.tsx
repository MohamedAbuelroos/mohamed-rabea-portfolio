import { Project } from "@/types/project";
import { useInView } from "@/hooks/use-in-view";
import ProjectCard from "./project-card";

interface Props {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: Props) {
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      className={`space-y-20  animate-fade-in`}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
