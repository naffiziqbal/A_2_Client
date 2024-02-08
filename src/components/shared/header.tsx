"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiCross, BiMenu } from "react-icons/bi";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="border-b ">
      <div className="container mx-auto  flex justify-between items-center min-h-16">
        <section className="text-nowrap text-3xl font-extrabold uppercase bg-gradient-to-t from-orange-400 to-red-500 bg-clip-text max-w-fit text-transparent">
          Crowd Fund
        </section>
        <section>
          <nav
            className={`md:w-1/3 flex  gap-3 uppercase text-sm font-semibold hover:*:bg-gradient-to-t hover:*:from-orange-400 hover:*:to-red-500 hover:*:bg-clip-text  hover:*:text-transparent duration-300 absolute ${
              active
                ? " w-3/4 bg-slate-50 shadow-xl h-screen flex flex-col top-0 right-0 *:mt-6 mt-4 p-5 duration-300"
                : " -right-[20rem] flex-col h-screen duration-300"
            }`}
          >
            <Link href={"/"}>Home</Link>
            <Link href={"/donation"}>Donation</Link>
            <Link href={"/statics"}>Statics</Link>
            <div
              className="absolute top-0 right-5 border p-2 rounded-full w-12 h-12 text-xl border-slate-950 flex justify-center items-center"
              onClick={() => setActive(false)}
            >
              X
            </div>
          </nav>
          <BiMenu className="md:hidden mr-6" onClick={() => setActive(true)} />
        </section>
      </div>
    </div>
  );
};

export default Header;
