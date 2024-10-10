import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const CardAbout = ({ children }: CardProps) => {
  return (
    <div className="p-6 rounded-lg border border-cborder">
      <div className="flex max-sm:flex-col gap-10 sm:items-center">{children}</div>
    </div>
  );
};

const CardImage = ({ children }: CardProps) => {
  return <div className="max-w-24">{children}</div>;
};

const CardDetail = ({ children }: CardProps) => {
  return <div className="space-y-4">{children}</div>;
};

export { CardAbout, CardImage, CardDetail };
