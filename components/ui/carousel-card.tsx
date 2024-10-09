"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

type carouselProps<T> = {
  title?: string;
  children: React.ReactNode;
  data?: T[];
};

const CarouselCard = <T,>({ title, children, data }: carouselProps<T>) => {
  const carouselContainer = useRef<HTMLDivElement | null>(null);
  const [disableScrollLeft, setDisableScrollLeft] = useState(true);
  const [disableScrollRight, setDisableScrollRight] = useState(false);

  const [currentTicket, setCurrentTicket] = useState<number>(1);

  const scroll = (n: number) => {
    if (carouselContainer.current) {
      carouselContainer.current.scrollBy({
        top: 0,
        left: 416 * n,
        behavior: "smooth",
      });
    }
  };

  const checkScrolling = () => {
    if (carouselContainer.current) {
      const position = carouselContainer.current.scrollLeft;
      const scrollWidth = carouselContainer.current.scrollWidth;
      const clientWidth = carouselContainer.current.clientWidth;

      setDisableScrollLeft(position === 0);
      setDisableScrollRight(Math.round(position) === scrollWidth - clientWidth);

      const cardTickets =
        carouselContainer.current.querySelectorAll<HTMLElement>(".card-ticket");
      if (cardTickets.length > 0) {
        const firstItemWidth = cardTickets[0].clientWidth;
        setCurrentTicket(Math.round(position / firstItemWidth) + 1);
      }
    }
  };

  useEffect(() => {
    checkScrolling();
  }, [currentTicket]);

  return (
    <div className="relative">
      {title && title ? (
        <div className="flex justify-between items-center">
          <h1 className="text-foreground text-lg font-semibold">{title}</h1>
          <Link
            href="/project"
            className="inline-block gap-3 items-center text-sm w-fit p-3 rounded-md hover:bg-foreground hover:text-background font-medium transition"
          >
            View All
          </Link>
        </div>
      ) : null}
      <div className={`flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-20 ${title ? '-mt-10' : 'max-sm:-mt-3'}`}>
        <button
          className="p-2 bg-background group hover:bg-foreground rounded-full border-cborder border disabled:opacity-0"
          onClick={() => scroll(-1)}
          disabled={disableScrollLeft}
        >
          <ArrowLeft className="w-5 h-5 group-hover:text-background text-foreground" />
        </button>
        <button
          className="p-2 bg-background group hover:bg-foreground rounded-full border-cborder border disabled:opacity-0"
          onClick={() => scroll(1)}
          disabled={disableScrollRight}
        >
          <ArrowRight className="w-5 h-5 group-hover:text-background text-foreground" />
        </button>
      </div>
      <div
        ref={carouselContainer}
        className={`overflow-x-scroll gap-4 overflow-y-hidden flex scroll-hide py-6 max-md:snap-x max-md:snap-mandatory ${title ? 'max-md:snap-x max-md:snap-mandatory' : 'snap-x snap-mandatory'}`}
        onScroll={checkScrolling}
      >
        {children}
      </div>
      <div className="flex justify-center items-center sm:hidden text-foreground">
        {currentTicket} of {data?.length}
      </div>
    </div>
  );
};

export default CarouselCard;
