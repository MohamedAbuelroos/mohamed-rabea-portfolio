import { Project } from "@/types/project";

import ProjectCard from "./project-card";

interface Props {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: Props) {
  return (
    <div className="space-y-20">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
