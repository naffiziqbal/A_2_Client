"use client";
import { ContextProvider } from "@/helper/context";
import Link from "next/link";
import React, { useContext } from "react";

const Nav = () => {
  const { user } = useContext(ContextProvider);
  return (
    <>
      {user?.role === "admin" && (
        <div className="h-full mt-12 w-fit">
          <ul
            className="font-semibold p-3 flex flex-col h-full  gap-4 *:text-nowrap
          hover:*:bg-gradient-to-t hover:*:from-orange-400 hover:*:to-red-500 hover:*:bg-clip-text  hover:*:text-transparent duration-300
          "
          >
            <li>
              <Link href={"/all-campaigns"}>All Campaigns</Link>
            </li>
            <li>
              <button onClick={() => alert("Create New Campaign")}>
                Create Admin
              </button>
            </li>
            <li>
              <button onClick={() => alert("Create New Admin")}>
                Create Admin
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
