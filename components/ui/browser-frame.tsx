import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BrowserFrameProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function BrowserFrame({
  title,
  children,
  className,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[20px] border-5 border-border/10 shadow-[0_20px_60px_rgba(15,23,42,.12)] dark:border-violet-900/40 dark:shadow-[0_20px_60px_rgba(0,0,0,.45)]",
        className,
      )}
    >
      {/* Browser Header */}
      <div className="flex py-7 h-12 rounded-sm items-center justify-between border-b border-border/60 bg-card/90 px-5 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>

        {title && (
          <div className="rounded-md bg-muted px-4 py-1 text-sm font-semibold tracking-wide  text-muted-foreground">
            {title}
          </div>
        )}

        {/* Balance the layout */}
        <div className="flex items-center gap-2">
          <button
            title="prev"
            className="swiper-prev cursor-pointer flex h-8 w-8 items-center justify-center 
            rounded-full bg-[#8b5cf6] text-white 
            hover:bg-[#F5993D] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            title="next"
            className="swiper-next cursor-pointer flex h-8 w-8 items-center justify-center 
            rounded-full bg-[#8b5cf6] text-white 
            hover:bg-[#F5993D] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="relative">
        {children}

        <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 w-full">
          <div className="swiper-pagination flex items-center justify-center" />
        </div>
      </div>
    </div>
  );
}
