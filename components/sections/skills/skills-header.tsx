import { useInView } from "@/hooks/use-in-view";

export default function SkillsHeader() {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`mb-16 text-center ${visible ? "animate-fade-up" : "opacity-0"}`}
    >
      <div className="mb-5">
        <span
          className="
            rounded-md
            bg-violet-500/10
            px-4
            py-2
            text-sm
            font-medium
            text-violet-500
          "
        >
          TECH STACK
        </span>
      </div>

      <h2 className="text-4xl font-black lg:text-5xl">
        Technologies I Work With
      </h2>

      <p className="mx-auto mt-6 max-w-3xl leading-8 text-muted-foreground">
        Modern technologies, frameworks and tools used to build scalable,
        responsive and high-quality digital experiences.
      </p>
    </div>
  );
}
