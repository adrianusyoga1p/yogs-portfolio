import Card from "@/components/ui/card";
import { PROJECT } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adrians Projects",
  description: "My projects",
};

const ProjectsPage = () => {
  return (
    <>
      <section className="space-y-4">
        <h1 className="text-foreground text-xl font-bold">Projects</h1>
        <p className="text-gray-400">
          Several projects that I have worked on, both private and open source.
        </p>
      </section>
      <hr className="border-cborder" />
      <section className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
        {PROJECT.filter((data) => data.id)
          .sort((a, b) => a.id - b.id)
          .map((data) => (
            <Card className="sm:max-w-full w-full" data={data} key={data.id} />
          ))}
      </section>
    </>
  );
};

export default ProjectsPage;
