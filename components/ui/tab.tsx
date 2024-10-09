"use client";
import React, { useState } from "react";

interface TabProps {
  children: React.ReactNode;
}

interface TabsProps {
  headers: string[];
  children: React.ReactNode[];
}

interface TabHeaderProps {
  headers: string[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const Tab = ({ children }: TabProps) => {
  return <div>{children}</div>;
};

const TabHeader = ({ headers, activeTab, setActiveTab }: TabHeaderProps) => {
  return (
    <div className="flex gap-6 p-3 rounded-lg border border-cborder">
      {headers.map((header, index) => (
        <button
          key={index}
          className={`${
            activeTab === index
              ? "bg-foreground text-background"
              : "bg-background text-foreground hover:bg-foreground hover:text-background"
          } p-2 flex-1 flex-wrap rounded transition-colors duration-200`}
          onClick={() => setActiveTab(index)}
        >
          {header}
        </button>
      ))}
    </div>
  );
};

const TabContent = ({ children }: TabProps) => {
  return <div className="mt-6">{children}</div>;
};

const Tabs = ({ headers, children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TabHeader
        headers={headers}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent>{children[activeTab]}</TabContent>
    </div>
  );
};

export { Tab, Tabs };
