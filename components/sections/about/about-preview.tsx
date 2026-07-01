import Image from "next/image";

import FloatingBadge from "./floating-badge";
import { useInView } from "@/hooks/use-in-view";

function AboutPreview() {
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      className={` relative mx-auto w-fit delay-150 transition-transform
      ${visible ? "animate-fade-up" : "opacity-0"}
    
    `}
    >
      <FloatingBadge
        title="3+"
        subtitle="Years Experience"
        className="left-2 -top-10  md:-left-12 md:top-10"
      />

      <FloatingBadge
        title="10+"
        subtitle="Projects Built"
        className="right-2 -bottom-10  md:-right-12 md:bottom-10  "
      />

      <div
        className="
          relative
          h-[550px]
          w-[370px]
          overflow-hidden
          rounded-lg
          border
          border-border/60
          bg-card
          shadow-2xl
        "
      >
        <Image
          src="/images/Me-1.png"
          alt="Mohamed Rabea"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="
            object-cover
            transition-transform
            duration-500
            hover:scale-105
            
          "
        />
      </div>
    </div>
  );
}

export default AboutPreview;
