"use client";

import { ContextProvider } from "@/helper/context";
import { useContext, useEffect } from "react";
import { getUser } from "@/utils/getUser";
import Cookies from "js-cookie";

import Header from "@/components/shared/header";
import "../globals.css";
import Footer from "@/components/shared/Footer";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setUser, setLoading, user } = useContext(ContextProvider);
  const id = Cookies.get("uid");
  const token = Cookies.get("token");

  useEffect(() => {
    setLoading(true);
    const getSingleUser = async (id: string, token: string) => {
      try {
        const data = await getUser(id, token);
        await setUser(data.user);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    getSingleUser(id!, token!);
  }, [token, id, setUser, setLoading, user._id]);

  return (
    <>
      <div className={`bgImage`}></div>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
