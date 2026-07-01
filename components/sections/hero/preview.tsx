"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import BrowserFrame from "@/components/ui/browser-frame";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { projectPreviews } from "@/data/projects-preview";

import FloatingCard from "./floating-card";
import { useState } from "react";

function HeroPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative mt-5 flex justify-center lg:justify-end animate-fade-in border-white">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 m-auto h-[400px] w-[520px] bg-violet-500/15 blur-[120px] dark:bg-violet-500/20" />

      <FloatingCard />

      <BrowserFrame
        title={projectPreviews[activeIndex].alt}
        className="group w-full max-w-[510px]"
      >
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          navigation={{ prevEl: ".swiper-prev", nextEl: ".swiper-next" }}
          spaceBetween={0}
          slidesPerView={1}
          speed={600}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="h-full"
        >
          {projectPreviews.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="relative h-[500px] overflow-hidden cursor-grab active:cursor-grabbing">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  priority={project.id === 1}
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </BrowserFrame>
    </div>
  );
}

export default HeroPreview;
