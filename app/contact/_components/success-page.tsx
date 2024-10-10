import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <div className="p-12 w-fit rounded-lg bg-white shadow-md border border-cborder gap-2 flex items-center justify-center flex-col">
      <CircleCheckBig size={80} className="text-green-400" />
      <h3 className="text-green-400 text-2xl text-center">
        Form submitted success
      </h3>
      <p className="text-gray-400 text-center text-sm">
        Thank You! The form has been submitted successfully. <br />
        We will reply to you soon!
      </p>
      <Link href="#" onClick={() => window.location.reload()} className="text-blue-500">Go back</Link>
    </div>
  );
};

export default SuccessPage;
