import ProjectsGrid from "./projects-grid";
import ProjectsHeader from "./projects-header";

function Projects() {
  return (
    <section id="projects" className="py-18">
      <div className="mx-auto max-w-[1320px] px-6">
        <ProjectsHeader />

        <ProjectsGrid />
      </div>
    </section>
  );
}

export default Projects;
