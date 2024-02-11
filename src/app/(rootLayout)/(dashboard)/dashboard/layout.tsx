import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" container mx-auto flex flex-row gap-3">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default layout;
