"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import Cookies from "js-cookie";

const Nav = ({ user }: any) => {
  const pathname = usePathname();

  const handleLogout = () => {
    location.reload();
    Cookies.remove("token");
    Cookies.remove("uid");
  };

  const isActive = (href: string) => pathname === href;
  return (
    <div className="flex md:justify-between gap-5 font-bold md:items-center md:flex-row flex-col">
      <Link
        className={`${
          isActive("/") && "text-orange-400"
        } hover:text-orange-400 duration-300`}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={`${
          isActive("/campaign") && "text-orange-400"
        } hover:text-orange-400 duration-300`}
        href={"/campaign"}
      >
        Campaigns
      </Link>
      {user?.role === "admin" && (
        <Link
          className={`${isActive("/dashboard") && "text-orange-400"}`}
          href={"/dashboard/all-campaigns"}
        >
          Dashboard
        </Link>
      )}
      {user?._id ? (
        <button onClick={handleLogout}>
          <BiLogOut className="w-6 h-6 hover:text-orange-400 duration-300" />
        </button>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </div>
  );
};

export default Nav;
