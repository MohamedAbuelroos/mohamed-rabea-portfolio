import { services } from "@/data/services";
import ServiceCard from "./service-card";
import { useInView } from "@/hooks/use-in-view";

export default function ServicesGrid() {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`grid gap-6 md:grid-cols-2 xl:grid-cols-4 ${visible ? "animate-fade-in" : "opacity-0"}`}
    >
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}
