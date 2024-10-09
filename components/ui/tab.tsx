"use client";
import React, { useState } from "react";

interface TabProps {
  children: React.ReactNode;
}

interface TabsProps {
  headers: (string | TabHeaderProps)[];
  children: React.ReactNode[];
}

interface TabHeaderProps {
  label: string;
  icon?: React.ReactNode;
}

const Tab = ({ children }: TabProps) => {
  return <div>{children}</div>;
};

const TabHeader = ({
  headers,
  activeTab,
  setActiveTab,
}: {
  headers: (string | TabHeaderProps)[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}) => {
  return (
    <div className="flex max-sm:flex-col sm:gap-6 gap-3 p-3 rounded-lg border border-cborder">
      {headers.map((header, index) => {
        const isHeaderIcon = typeof header === 'object';
        const label = isHeaderIcon ? header.label : header;
        const icon = isHeaderIcon ? header.icon : null;
        return (
          <button
            key={index}
            className={`${
              activeTab === index
                ? "bg-foreground text-background"
                : "bg-background text-foreground hover:bg-foreground hover:text-background"
            } p-2 flex-1 flex items-center justify-center gap-3 flex-wrap rounded transition-colors duration-200`}
            onClick={() => setActiveTab(index)}
          >
            {icon || null}
            <span>{label}</span>
          </button>
        )
      })}
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
