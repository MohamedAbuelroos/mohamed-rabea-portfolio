import { Award } from "lucide-react";

interface FloatingBadgeProps {
  title: string;
  subtitle: string;
  className?: string;
}

function FloatingBadge({
  title,
  subtitle,
  className,
}: FloatingBadgeProps) {
  return (
    <div
      className={`
        absolute
        z-10
        rounded-lg
        border
        border-border/50
        bg-card/90
        px-6
        py-4
        shadow-xl
        backdrop-blur-xl
        animate-loader-float
        ${className}
      `}
    >
      <div className="mb-2 flex items-center gap-2">
        <Award size={18} className="text-violet-500" />

        <h4 className="text-lg font-bold">{title}</h4>
      </div>

      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}


export default FloatingBadge