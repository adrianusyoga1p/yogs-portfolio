"use client"
import { STACKS } from "@/lib/data";
import React, { useEffect, useRef } from "react";
import BadgeTech from "./badge-tech";

interface CarouselProps {
  scrollSpeed?: number;
}

const CarouselStacks: React.FC<CarouselProps> = ({ scrollSpeed = 50 }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalItems = [...STACKS, ...STACKS];

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      let scrollAmount = 0;

      const scroll = () => {
        scrollAmount += 1;
        carousel.scrollLeft = scrollAmount;

        if (scrollAmount >= carousel.scrollWidth / 2) {
          scrollAmount = 0;
        }
      };

      const scrollInterval = setInterval(scroll, scrollSpeed);

      return () => clearInterval(scrollInterval);
    }
  }, [scrollSpeed]);

  return (
    <div className="mt-6 w-full overflow-hidden relative pointer-events-none">
      <div className="absolute left-0 from-background bg-gradient-to-r md:w-60 w-32 h-full z-20 top-0"></div>
      <div className="absolute right-0 from-background bg-gradient-to-l md:w-60 w-32 h-full z-20 top-0"></div>
      <div className="transition-transform duration-500 scroll-smooth overflow-x-scroll whitespace-nowrap space-x-3 scroll-hide" ref={carouselRef}>
        {totalItems.map((stack, i) => (
          <BadgeTech data={stack} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CarouselStacks;
