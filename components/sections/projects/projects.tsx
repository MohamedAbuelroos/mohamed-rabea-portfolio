import ProjectsGrid from "./projects-grid";
import ProjectsHeader from "./projects-header";

function Projects() {
  return (
    <section id="projects" className="py-18">
      <div className="mx-auto max-w-[1320px] px-6">
        <ProjectsHeader
          title="Featured Projects"
          description="
    A selection of my recent work spanning
    modern web applications, booking systems,
    dashboards and digital experiences.
  "
          showButton
        />

        <ProjectsGrid />
      </div>
    </section>
  );
}

export default Projects;
