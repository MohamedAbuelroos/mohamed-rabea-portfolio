import { useInView } from "@/hooks/use-in-view";
import ExperienceHeader from "./experience-header";
import ExperienceHighlights from "./experience-highlights";
import ExperienceTimeline from "./experience-timeline";

export default function Experience() {
  const { ref, visible } = useInView();
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <ExperienceHeader />

        <div
          ref={ref}
          className={`mt-20 grid gap-16 lg:grid-cols-[1.3fr_.7fr] ${visible ? "animate-fade-in" : "opacity-0"}`}
        >
          <ExperienceTimeline />

          <ExperienceHighlights />
        </div>
      </div>
    </section>
  );
}
