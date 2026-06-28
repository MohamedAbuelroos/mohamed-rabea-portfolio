import { projects } from "@/data/projects";

import ProjectCard from "./project-card";
import { useInView } from "@/hooks/use-in-view";

function ProjectsGrid() {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={`grid gap-4 md:grid-cols-2 xl:grid-cols-3 `}>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={` transition-transform sm:opacity-100 md:opacity-0
        ${visible ? "animate-project-fade" : ""}
        ${index === 0 ? "delay-100" : index === 1 ? "delay-500" : "delay-800"}
      `}
        >
          <ProjectCard key={project.id} project={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectsGrid;
