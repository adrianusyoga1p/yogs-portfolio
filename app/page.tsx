import Card from "@/components/ui/card";
import CarouselCard from "@/components/ui/carousel-card";
import CarouselStacks from "@/components/ui/carousel-stacks";
import { PROJECT } from "@/lib/data";
import { PROFILE } from "@/lib/data/profile";
import { Laptop, MapPin } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="space-y-4">
        <h1 className="text-foreground text-xl font-bold">
          Hi, I am {PROFILE.name} as a Frontend Developer
        </h1>
        <div className="flex max-sm:flex-col sm:items-center sm:gap-6 gap-2 text-gray-400">
          <div className="flex gap-2 items-center">
            <MapPin className="w-4 h-4" />
            <p className="text-sm">Based in {PROFILE.address}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Laptop className="w-4 h-4" />
            <p className="text-sm">{PROFILE.statusTwo}</p>
          </div>
        </div>
        <p className="text-foreground leading-relaxed">{PROFILE.description}</p>
      </section>
      <section>
        <h1 className="text-foreground text-lg font-semibold">
          Technology I&apos;ve Used
        </h1>
        <CarouselStacks />
      </section>
      <section>
        <CarouselCard title="My Projects" data={PROJECT}>
          {PROJECT.filter((data) => data.id)
            .sort((a, b) => a.id - b.id)
            .map((data) => (
              <Card data={data} key={data.id} />
            ))}
        </CarouselCard>
      </section>
    </>
  );
}
