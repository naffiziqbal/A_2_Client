"use client";

import CreateAdmin from "@/components/shared/Modal/CreateAdmin";
import { ContextProvider } from "@/helper/context";
import Link from "next/link";
import React, { useContext } from "react";

const Nav = () => {
  const { user, setAdminModal } = useContext(ContextProvider);
  return (
    <>
      {user?.role === "admin" && (
        <div className="h-full mt-12 md:w-1/3 w-full">
          <ul
            className="font-semibold p-3 flex flex-col h-full  gap-4 *:text-nowrap hover:*:text-orange-400 duration-300
          "
          >
            <li>
              <Link href={"/dashboard/all-campaigns"}>All Campaigns</Link>
            </li>
            <li>
              <button onClick={() => alert("Create New Campaign")}>
                Create Campaign
              </button>
            </li>
            <li>
              <button onClick={() => setAdminModal(true)}>Create Admin</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
