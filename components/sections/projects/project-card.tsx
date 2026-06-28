import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GitMerge } from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-lg
        border
        border-border/50
        bg-card
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Featured Badge */}
      {project.featured && (
        <div
          className="
            absolute
            left-5
            top-5
            z-30
            rounded-xl
            bg-violet-500
            px-2
            py-1
            text-xs
            font-semibold
            text-white
            shadow-lg
          "
        >
          Featured
        </div>
      )}

      {/* Screenshot */}
      <div className="relative h-[580px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
            object-cover
            object-top
            transition-transform
            duration-700
            group-hover:scale-[1.03]
          "
        />

        {/* Hover Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/20
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Bottom Panel */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-20
            translate-y-0
            md:translate-y-[75%]
            bg-background/80
            backdrop-blur-xl
            p-6
            transition-all
            duration-400
            group-hover:translate-y-0
          "
        >
          {/* Title */}
          <h3 className="text-2xl font-bold">{project.title}</h3>

          {/* Description */}
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-md
                  bg-violet-500/10
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-violet-500
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <Link
              href={project.demo || "#"}
              target="_blank"
              className="
                flex
                items-center
                gap-2
                rounded-md
                bg-foreground
                px-5
                py-3
              
                text-background
                transition-transform
                hover:scale-105
              "
            >
              Demo
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href={project.github || "#"}
              target="_blank"
              className="
                flex
                items-center
                gap-2
                rounded-md
                border
                
                px-5
                py-3
                transition-transform
                hover:scale-105
              "
            >
              <GitMerge size={16} />
              Code
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
