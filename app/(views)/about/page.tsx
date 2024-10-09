"use client";

import { BriefcaseBusiness, School } from "lucide-react";
import React from "react";
import { Tabs } from "@/components/ui/tab";
import EducationContent from "./_components/education-content";
import WorkContent from "./_components/work-content";

const AboutPage = () => {
  return (
    <section className="space-y-4">
      <h1 className="font-bold text-xl">About</h1>
      <Tabs
        headers={[
          { label: "Education", icon: <School size={16} /> },
          { label: "Works Experience", icon: <BriefcaseBusiness size={16} /> },
        ]}
      >
        <EducationContent/>
        <WorkContent/>
      </Tabs>
    </section>
  );
};

export default AboutPage;
