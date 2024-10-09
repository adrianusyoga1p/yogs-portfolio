import { Stack } from "@/lib/types";
import Image from "next/image";
import React from "react";

const BadgeTech = ({ data }: { data: Stack }) => {
  return (
    <div className="inline-block rounded-full w-fit whitespace-normal border border-cborder py-2 px-3">
      <div className="flex gap-3 items-center text-sm">
        <Image width={20} height={20} src={data.imageUrl} alt="icon" />
        {data.label}
      </div>
    </div>
  );
};

export default BadgeTech;
