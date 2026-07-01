import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, CircleCheckBig, Star, Lock } from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article
      id={project.slug}
      className="
        overflow-hidden
        rounded-xl
        border
        border-violet-500/20
        bg-card/50
      "
    >
      <div className="grid lg:grid-cols-[50%_50%]">
        {/* LEFT SIDE */}
        <div>
          <Link
            href={project.demo || "#"}
            target="_blank"
            className="group block"
          >
            <div
              className="
                relative
                overflow-hidden
                border
                border-border/50
              "
            >
              {project.featured && (
                <div
                  className="
                absolute
                left-5
                top-5
                z-20
                flex
                items-center
                gap-2
                rounded-full
                bg-violet-500
                px-4
                py-2
                text-sm
                font-semibold
                text-white
              "
                >
                  <Star size={14} />
                  Featured
                </div>
              )}
              <div className="relative h-[800px] md:h-[550px]">
                <Image
                  title="Visit Project"
                  src={project.image}
                  alt={project.title}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  fill
                  priority={project.id <= 2}
                  className="
                    object-cover
                    object-top
                    transition-transform
                    duration-400
                    group-hover:scale-[1.02]
                  "
                />
              </div>
            </div>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col px-8 py-6 h-[800px] md:h-[550px] ">
          {/* CATEGORY */}
          <div className="mb-5">
            <span
              className="
                rounded-full
                border
                border-violet-500/30
                bg-violet-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-violet-500
              "
            >
              {project.category}
            </span>
          </div>

          {/* TITLE */}
          <Link
            href={project.demo || "#"}
            target="_blank"
            className="
              flex
              items-center
              gap-3
              transition-colors
              hover:text-violet-500
            "
          >
            <h2 className="text-4xl font-black py-2">{project.title}</h2>

            <ArrowUpRight size={20} />
          </Link>
          <div
            className="
    flex-1
    overflow-y-auto
    scroll-smooth
    scrollbar-thin
    scrollbar-thumb-violet-500/20
    scrollbar-track-transparent
  "
          >
            {/* DESCRIPTION */}
            <p
              className="
              mt-4
              leading-8
              text-muted-foreground
            "
            >
              {project.description}
            </p>

            {/* FEATURES */}
            {project.features && (
              <div
                className="
                mt-8
                grid
                gap-y-3
                gap-x-4
                md:grid-cols-2
              "
              >
                {project.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <CircleCheckBig
                      size={18}
                      className="
                      mt-1
                      shrink-0
                      text-emerald-500
                    "
                    />

                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {/* DIVIDER */}
            <div className="my-8 h-px bg-border/50" />

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                  rounded-lg
                  border
                  border-border/50
                  bg-card
                  px-3
                  py-2
                  text-xs
                  font-medium
                "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {/* BUTTONS */}
          <div className="mt-auto flex gap-4 pt-10">
            <Link
              href={project.private ? "#" : project.demo || "#"}
              target={project.private ? undefined : "_blank"}
              className="
    inline-flex
    items-center
    gap-2
    rounded-md
    bg-gradient-to-r
    from-violet-500
    to-cyan-500
    px-4
    py-4
    md:px-7
    font-medium
    text-white
    transition-transform
    hover:-translate-y-1
  "
            >
              {project.private ? (
                <>
                  <Lock size={16} />
                  Internal Project
                </>
              ) : (
                <>
                  Live Demo
                  <ArrowUpRight size={18} />
                </>
              )}
            </Link>

            <Link
              href={project.github || "#"}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-2
                rounded-md
                border
                px-7
                py-4
                font-medium
                transition-transform
                hover:-translate-y-1
              "
            >
              <FaGithub />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
