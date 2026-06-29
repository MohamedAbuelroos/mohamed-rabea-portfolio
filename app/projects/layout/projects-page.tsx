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
    A collection of projects built throughout
    my journey as a frontend developer,
    including web applications, dashboards,
    booking platforms and digital experiences."
        />

        <ProjectsFilters selected={category} onChange={setCategory} />

        <ProjectsGrid projects={filteredProjects} />
      </div>
    </section>
  );
}
