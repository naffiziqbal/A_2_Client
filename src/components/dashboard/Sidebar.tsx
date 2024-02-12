"use client";
import React, { useContext, useState } from "react";
import Nav from "./admin/Nav";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa";

const Sidebar = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="h-screen shadow-lg md:max-w-1/3 md:w-1/3 w-full relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <FaGreaterThan
          className="md:hidden animate-pulse"
          onClick={() => setActive(true)}
        />
      </div>

      <div
        className={` ${
          active
            ? "w-screen z-50 bg-slate-50 shadow-xl h-screen flex flex-col top-0 left-0 *:mt-6 mt-4 p-5 duration-300 absolute "
            : "flex md:relative md:left-0 absolute -left-[56rem] gap-3 uppercase text-sm font-semibold"
        }`}
      >
        <Nav />
        <div
          className="absolute top-0 right-5 border p-2 rounded-full w-8 h-8 border-orange-400 text-orange-400 font-extrabold flex text-sm justify-center items-center md:hidden hover:bg-orange-400 hover:text-white"
          onClick={() => setActive(false)}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
