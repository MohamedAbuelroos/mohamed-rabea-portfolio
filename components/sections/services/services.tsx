import { useInView } from "@/hooks/use-in-view";
import ServicesGrid from "./services-grid";
import ServicesHeader from "./services-header";

export default function Services() {
  const { ref, visible } = useInView();
  return (
    <section id="services" className="py-20">
      <div
      ref={ref}
        className={`mx-auto max-w-[1320px] px-6 transition-transform
      ${visible ? "animate-project-fade" : "opacity-0"}
      `}
      >
        <ServicesHeader />

        <ServicesGrid />
      </div>
    </section>
  );
}
