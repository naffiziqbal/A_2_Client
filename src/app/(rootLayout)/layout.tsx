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
  const { setUser, setLoading } = useContext(ContextProvider);
  const id = Cookies.get("uid");
  const token = Cookies.get("token");

  useEffect(() => {
    const getSingleUser = async (id: string, token: string) => {
      const data = await getUser(id, token);
      await setUser(data?.user);
    };
    getSingleUser(id!, token!);
  }, [token, id, setUser, setLoading]);

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
