"use client"
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonBack = () => {
  const router = useRouter();
  return (
    <Link
      href="#"
      onClick={router.back}
      className="flex gap-2 group items-center text-sm w-fit py-2 pr-4 pl-2 rounded-md hover:bg-foreground transition"
    >
      <ArrowLeft className="h-4 w-4 group-hover:text-background" />
      <span className="group-hover:translate-x-1 transition-transform duration-300 text-foreground group-hover:text-background">
        Back
      </span>
    </Link>
  );
};

export default ButtonBack;
