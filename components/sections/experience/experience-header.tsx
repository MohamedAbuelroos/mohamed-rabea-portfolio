import { useInView } from "@/hooks/use-in-view";

export default function ExperienceHeader() {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`text-center ${visible ? "animate-fade-up" : "opacity-0"}`}
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
          EXPERIENCE
        </span>
      </div>

      <h2 className="text-4xl font-black lg:text-5xl">
        My Journey in Technology
      </h2>

      <p className="mx-auto mt-6 max-w-3xl leading-8 text-muted-foreground">
        From computer maintenance to business platforms and modern web
        applications, every step of my journey has been shaped by curiosity and
        a passion for solving problems.
      </p>
    </div>
  );
}
