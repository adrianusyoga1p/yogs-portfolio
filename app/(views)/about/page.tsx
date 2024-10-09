import { EDUCATION } from "@/lib/data";
import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CardAbout, CardImage } from "./_components/card-about";
import { Tabs } from "./_components/tab";

const AboutPage = () => {
  return (
    <section className="space-y-4">
      <h1 className="font-bold text-xl">About</h1>
      <Tabs headers={['Education', 'Works Experience']}>
        <div className="grid sm:grid-cols-2 gap-6">
          {EDUCATION.sort((a, b) => b.fromYear - a.endYear).map((data, i) => (
            <CardAbout key={i}>
              <CardImage>
                <Image src={data.logoUrl} width={60} height={60} alt="logo" />
              </CardImage>
              <div className="space-y-2">
                <h1 className="text-lg font-semibold">
                  {data.schoolFullName}
                  <span className="text-gray-400 text-sm w-fit ml-2">
                    ({data.schoolLabel})
                  </span>
                </h1>
                <div className="space-y-1 max-sm:-ml-2">
                  <div className="flex max-sm:flex-col sm:items-center text-gray-400">
                    <p className="text-sm flex items-center">
                      <Dot className="sm:hidden" /> {data.level || '-'}
                    </p>
                    <p className="text-sm flex items-center">
                      <Dot /> {data.major || '-'}
                    </p>
                  </div>
                  <div className="flex max-sm:flex-col sm:items-center text-gray-400">
                    <p className="text-sm flex items-center">
                      <Dot className="sm:hidden" /> {data.fromYear} - {data.endYear}
                    </p>
                    <p className="text-sm flex items-center">
                      <Dot /> {data.address}
                    </p>
                  </div>
                  <div className="flex sm:items-center text-gray-400">
                    <p className="text-sm flex items-center">
                      <Dot className="sm:hidden" /> GPA
                    </p>
                    <p className="text-sm flex items-center">
                      <Dot /> {data.score.toFixed(2)}/{data.scoreMax.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </CardAbout>
          ))}
        </div>
        <div>This is content for Tab 2</div>
      </Tabs>
    </section>
  );
};

export default AboutPage;
