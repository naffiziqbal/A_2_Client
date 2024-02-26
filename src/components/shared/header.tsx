"use client";
import { ContextProvider } from "@/helper/context";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import Nav from "./Header/Nav";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const { user } = useContext(ContextProvider);

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
              : "flex md:relative md:left-0 absolute -left-[56rem] gap-3 uppercase text-sm font-semibold "
          }`}
        >
          <Nav user={user} />

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
