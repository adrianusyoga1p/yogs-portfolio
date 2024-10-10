import { BriefcaseBusiness, Link, School } from "lucide-react";
import React from "react";
import { Tabs } from "@/components/ui/tab";
import EducationContent from "./_components/education-content";
import WorkContent from "./_components/work-content";
import ResumeContent from "./_components/resume-content";

const AboutPage = () => {
  return (
    <>
      <section className="space-y-4">
        <h1 className="font-bold text-xl">About</h1>
        <p className="text-gray-400">
          An insightful glimpse into who I am - because every detail adds depth to
          the canvas of life.
        </p>
      </section>
      <hr className="border-cborder" />
      <section>
        <Tabs
          headers={[
            { label: "Resume", icon: <Link size={16} /> },
            { label: "Education", icon: <School size={16} /> },
            { label: "Works Experience", icon: <BriefcaseBusiness size={16} /> },
          ]}
        >
          <ResumeContent />
          <EducationContent />
          <WorkContent />
        </Tabs>
      </section>
    </>
  );
};

export default AboutPage;
