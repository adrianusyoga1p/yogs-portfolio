import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type cardProps = {
  data: Project;
  className?: string;
};

const Card = ({ data, className }: cardProps) => {
  return (
    <Link
      href={`/project/${data.slug}`}
      className={cn(
        "sm:max-w-[300px] block flex-grow-0 flex-shrink-0 w-full h-full group",
        className
      )}
    >
      <div className="card-ticket bg-background rounded-xl hover:-translate-y-4 transition-transform duration-500 border overflow-clip border-cborder max-md:snap-always max-md:snap-center relative">
        <div className="relative overflow-hidden">
          <Image
            src={data?.thumbnailUrl}
            alt={`thumbnail-${data.slug}`}
            width={700}
            className="w-full min-h-56 object-cover"
            height={0}
          />
          <div className="absolute z-10 inset-0 bg-black/60 flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity duration-200">
            <div className="p-2 text-sm text-white flex items-center justify-center gap-2 font-semibold">
              <span className="group-hover:translate-x-0 -translate-x-4 transition-transform duration-200">
                View Project
              </span>{" "}
              <Eye className="w-4 h-4 group-hover:translate-x-0 translate-x-4 transition-transform duration-200" />
            </div>
          </div>
        </div>
        <div className="p-4 space-y-4">
          <h3 className="text-lg font-semibold truncate" title={data?.title}>
            {data?.title}
          </h3>
          <p className="text-gray-400 line-clamp-3">{data?.description}</p>
          <p>{data.stacks.length} stack is used</p>
          <div className="space-x-4 whitespace-nowrap overflow-x-scroll scroll-hide">
            {data.stacks.map((stack, i) => (
              <Image
                title={stack.label}
                src={stack.imageUrl}
                alt={`stack-${i}`}
                width={24}
                height={24}
                key={i}
                className="inline-block whitespace-normal"
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
