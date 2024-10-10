import React from "react";

const ResumeContent = () => {
  return (
    <div className="m-0 p-0 h-screen w-full">
      <iframe
        src={process.env.RESUME_LINK}
        className="w-full h-dvh border-none"
        loading="lazy"
        title="Resume PDF"
      />
    </div>
  );
};

export default ResumeContent;
