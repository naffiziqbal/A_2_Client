"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import CreateAdmin from "@/components/shared/Modal/CreateAdmin";
import { ContextProvider } from "@/helper/context";
import Link from "next/link";
import React, { useContext } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContext(ContextProvider);

  return (
    <div className=" container mx-auto flex flex-row gap-3">
      {user._id ? (
        <>
          {" "}
          <Sidebar />
          <CreateAdmin />
          <div className="w-full">{children}</div>
        </>
      ) : (
        <div className="h-screen w-screen justify-center items-center flex">
          Please{" "}
          <Link
            className="text-orange-400 underline font-semibold"
            href={"/login"}
          >
            Login
          </Link>{" "}
          to access this page
        </div>
      )}
    </div>
  );
};

export default Layout;
