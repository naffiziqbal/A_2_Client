"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiCross, BiMenu } from "react-icons/bi";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="md:border-b z-50 bg-transparent  w-full ">
      <div className="container mx-auto w-full  flex justify-between items-center md:min-h-16 min-h-10 px-6 z-50 ">
        <section className="text-nowrap md:text-3xl font-extrabold uppercase bg-gradient-to-t from-orange-400 to-red-500 bg-clip-text max-w-fit text-transparent">
          <Link href={"/"}>Crowd Fund</Link>
        </section>
        <nav
          className={` ${
            active
              ? "w-full z-50 bg-slate-50 shadow-xl h-screen flex flex-col top-0 left-0 *:mt-6 mt-4 p-5 duration-300 absolute "
              : "flex md:relative md:left-0 absolute -left-56 gap-3 uppercase text-sm font-semibold hover:*:bg-gradient-to-t hover:*:from-orange-400 hover:*:to-red-500 hover:*:bg-clip-text  hover:*:text-transparent duration-300"
          }`}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/campaign"}>Campaigns</Link>
          <Link href={"/statics"}>Statics</Link>
          <div
            className="absolute top-0 right-5 border p-2 rounded-full w-8 h-8 border-orange-400 text-orange-400 font-extrabold flex text-sm justify-center items-center md:hidden hover:bg-orange-400 hover:text-white"
            onClick={() => setActive(false)}
          >
            X
          </div>
        </nav>
        <BiMenu className="md:hidden mr-6" onClick={() => setActive(true)} />
      </div>
    </div>
  );
};

export default Header;
