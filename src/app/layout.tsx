"use client";

import UserContext, { ContextProvider } from "@/helper/context";
import "./globals.css";
import { useContext, useEffect } from "react";
import { getUser } from "@/utils/getUser";
import Cookies from "js-cookie";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserContext>{children}</UserContext>
      </body>
    </html>
  );
}
