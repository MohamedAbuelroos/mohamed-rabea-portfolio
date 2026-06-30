"use client";

import { useState } from "react";

import { projects } from "@/data/projects";

import ProjectsFilters from "./projects-filters";
import ProjectsHeader from "@/components/sections/projects/projects-header";
import ProjectsGrid from "./projects-grid";

export default function ProjectsPage() {
  const [category, setCategory] = useState("all");

  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <section className="py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <ProjectsHeader
          title="All Projects"
          description="
Explore my complete portfolio of business
applications, workflow automation tools,
enterprise dashboards, booking systems
and modern web experiences.
"
        />

        <ProjectsFilters selected={category} onChange={setCategory} />

        <ProjectsGrid projects={filteredProjects} />
      </div>
    </section>
  );
}
