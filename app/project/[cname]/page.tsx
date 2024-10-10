import NotFoundPage from "@/components/not-found";
import BadgeTech from "@/components/ui/badge-tech";
import CarouselCard from "@/components/ui/carousel-card";
import { PROJECT } from "@/lib/data";
import { ArrowLeft, Code2, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type pageProps = {
  params: { cname: string };
};

const ProjetDetailPage = ({ params }: pageProps) => {
  const { cname } = params;
  const project = PROJECT.find((data) => data.cname === cname);
  if (!project) return <NotFoundPage />;
  return (
    <>
      <section className="space-y-4">
        <Link
          href="#"
          onClick={() => window.history.back()}
          className="flex gap-2 group items-center text-sm w-fit py-2 pr-4 pl-2 rounded-md hover:bg-foreground transition"
        >
          <ArrowLeft className="h-4 w-4 group-hover:text-background" />
          <span className="group-hover:translate-x-1 transition-transform duration-300 text-foreground group-hover:text-background">
            Back
          </span>
        </Link>
        <h1 className="text-xl font-bold text-foreground">{project.title}</h1>
        <p className="text-gray-400">{project.description}</p>
      </section>
      <section className="grid max-sm:grid-cols-1 grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="space-y-4 py-6">
          <div className="flex max-lg:flex-row flex-col lg:flex-row justify-center gap-4">
            <Link
              target="_blank"
              href={project.sourceCodeUrl || '#'}
              className={`text-sm flex items-center justify-center w-full gap-2 p-2 group rounded bg-red-500 text-white ${
                !project.isSourceCode && project.sourceCodeUrl === '' ? "pointer-events-none opacity-70" : ""
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                Source Code
              </span>
            </Link>
            <Link
              target="_blank"
              href={project.demoUrl || ''}
              className={`flex gap-2 group justify-center items-center text-sm w-full p-2 rounded-md hover:bg-foreground transition ${!project.isLiveDemo && project.demoUrl === '' ? "pointer-events-none opacity-70" : ""}`}
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
                className="flex-shrink-0 card-ticket flex-grow-0 sm:max-w-[300px] h-60 snap-center"
              >
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
    </>
  );
};

export default ProjetDetailPage;
