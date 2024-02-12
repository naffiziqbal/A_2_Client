"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import Loading from "@/components/ui/Loading";
import { ContextProvider } from "@/helper/context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" container mx-auto flex flex-row gap-3">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default layout;
