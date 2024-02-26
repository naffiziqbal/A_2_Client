import UserContext from "@/helper/context";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crowd Found",
  description: "A Global Helping Hand Community",
  keywords: "crowd found, helping hand, community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-200">
        <UserContext>{children}</UserContext>
      </body>
    </html>
  );
}
