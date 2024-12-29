"use client";

import NotFoundPage from "@/components/not-found";
import BadgeTech from "@/components/ui/badge-tech";
import ButtonBack from "@/components/ui/button-back";
import CarouselCard from "@/components/ui/carousel-card";
import { PROJECT } from "@/lib/data";
import { Code2, Eye, Fullscreen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type pageProps = {
  params: { slug: string };
};

const ProjetDetailPage = ({ params }: pageProps) => {
  const [popupImage, setPopupImage] = useState<null | string>(null);

  const handleFullScreen = (url: string) => {
    setPopupImage(url);
  };

  const closePopup = () => {
    setPopupImage(null);
  };
  const { slug } = params;
  const project = PROJECT.find((data) => data.slug === slug);
  if (!project) return <NotFoundPage />;
  return (
    <>
      <section className="space-y-4">
        <ButtonBack />
        <h1 className="text-xl font-bold text-foreground">{project.title}</h1>
        <p className="text-gray-400">{project.description}</p>
      </section>
      <section className="grid max-sm:grid-cols-1 grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="space-y-4 py-6">
          <div className="flex max-lg:flex-row flex-col lg:flex-row justify-center gap-4">
            <Link
              target="_blank"
              href={project.sourceCodeUrl || "#"}
              className={`text-sm flex items-center justify-center w-full gap-2 p-2 group rounded bg-red-500 text-white ${
                !project.isSourceCode && project.sourceCodeUrl === ""
                  ? "pointer-events-none opacity-70"
                  : ""
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                Source Code
              </span>
            </Link>
            <Link
              target="_blank"
              href={project.demoUrl || ""}
              className={`flex gap-2 group justify-center items-center text-sm w-full p-2 rounded-md hover:bg-foreground transition ${
                !project.isLiveDemo && project.demoUrl === ""
                  ? "pointer-events-none opacity-70"
                  : ""
              }`}
            >
              <Eye className="h-4 w-4 group-hover:text-background" />
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-foreground group-hover:text-background">
                Live Demo
              </span>
            </Link>
          </div>
          <p className="text-gray-400">Tech Stack :</p>
          <div className="flex flex-wrap gap-2">
            {project.stacks.map((item, i) => (
              <BadgeTech data={item} key={i} />
            ))}
          </div>
        </div>
        <div className="sm:col-span-2">
          <CarouselCard data={project.thumbnails}>
            {project.thumbnails.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 card-ticket flex-grow-0 sm:max-w-[300px] w-full h-60 snap-center cursor-pointer relative group"
              >
                <div
                  className="absolute inset-0 w-full h-full group-hover:opacity-100 origin-center opacity-0 z-10 bg-black/50 transition-opacity duration-200 flex items-center justify-center"
                  onClick={() => handleFullScreen(item.url)}
                >
                  <Fullscreen className="w-12 h-12" />
                </div>
                <Image
                  src={item?.url}
                  alt={`thumbanil-${item.id}`}
                  width={1000}
                  height={0}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            ))}
          </CarouselCard>
        </div>
      </section>
      {popupImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-6 !mt-0"
          onClick={closePopup}
        >
          <div
            className={`relative transition-transform duration-150 ${
              popupImage ? "scale-100" : "scale-0"
            }`}
          >
            <Image
              src={popupImage}
              alt="Full Image"
              width={1000}
              height={0}
              className="object-contain max-w-full max-h-full rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                closePopup();
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjetDetailPage;
