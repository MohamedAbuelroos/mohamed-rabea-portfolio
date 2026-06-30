import { CircleCheckBig } from "lucide-react";

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  featured?: boolean;
}

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  const Icon = service.icon;

  return (
    <article
      className="
      flex
      flex-col
      justify-between
        group
        rounded-lg
        border
        border-border/50
        bg-card/50
        
        p-6
        relative
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Featured Badge */}
      {service.featured && (
        <div
          className="
            absolute
            right-5
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
          Popular
        </div>
      )}

      {/* icon */}
      <div
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-violet-500/10
          transition-colors
          duration-300
          group-hover:bg-violet-500
        "
      >
        <Icon
          className="
            h-8
            w-8
            text-violet-500
            transition-colors
            duration-300
            group-hover:text-white
          "
        />
      </div>

      {/* title */}
      <h3 className="text-[30px] font-bold">{service.title}</h3>

      {/* description */}
      <p className="mt-4 leading-7 text-muted-foreground">
        {service.description}
      </p>

      {/* features */}
      <div className="mt-6 space-y-3">
        {service.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <CircleCheckBig size={16} className="text-violet-500" />

            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
