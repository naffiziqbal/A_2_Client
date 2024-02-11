"use client";

import UserContext, { ContextProvider } from "@/helper/context";
import { useContext, useEffect } from "react";
import { getUser } from "@/utils/getUser";
import Cookies from "js-cookie";

import Header from "@/components/shared/header";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setUser, setLoading, user } = useContext(ContextProvider);
  const id = Cookies.get("uid");
  const token = Cookies.get("token");

  useEffect(() => {
    const getSingleUser = async (id: string, token: string) => {
      try {
        const data = await getUser(id, token);
        await setUser(data?.user);
      } catch (err) {}
    };
    getSingleUser(id!, token!);
  }, [token, id, setUser]);

  return (
    <html>
      <body>
        <div className={`bgImage`}></div>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
