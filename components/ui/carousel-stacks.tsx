"use client"
import { STACKS } from "@/lib/data";
import React, { useEffect, useRef } from "react";
import BadgeTech from "./badge-tech";

interface CarouselProps {
  scrollSpeed?: number;
}

const CarouselStacks = ({ scrollSpeed = 1 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalItems = [...STACKS, ...STACKS];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrameId: number;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += scrollSpeed * 0.5;

      if (scrollPos >= carousel.scrollWidth / 2) {
        scrollPos = 0;
      }

      carousel.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollSpeed]);

  return (
    <div className="mt-6 w-full overflow-hidden relative">
      {/* Overlay Gradients */}
      <div className="absolute left-0 from-background bg-gradient-to-r md:w-60 w-20 h-full z-20 top-0 pointer-events-none"></div>
      <div className="absolute right-0 from-background bg-gradient-to-l md:w-60 w-20 h-full z-20 top-0 pointer-events-none"></div>
      
      <div 
        className="flex overflow-x-hidden whitespace-nowrap space-x-3 py-2" 
        ref={carouselRef}
      >
        {totalItems.map((stack, i) => (
          <div key={i} className="block flex-shrink-0">
            <BadgeTech data={stack} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselStacks;