import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

function ProjectsHeader() {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${visible ? "animate-fade-up" : "opacity-0"}`}
    >
      <div>
        <div className="mb-5">
          <span className="rounded-md bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-500">
            PORTFOLIO
          </span>
        </div>

        <h2 className="text-5xl font-black">Featured Projects</h2>

        <p className="mt-5 max-w-2xl text-muted-foreground">
          A selection of my recent work spanning modern web applications,
          booking systems, dashboards, and digital experiences.
        </p>
      </div>

      <Link
        href="/projects"
        className="
          inline-flex
          items-center
          gap-2
          rounded-md
          border
          px-5
          py-3
          font-medium
          transition-all
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        View All Projects
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}

export default ProjectsHeader;
