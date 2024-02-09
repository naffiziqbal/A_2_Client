import type { Metadata } from "next";
import Header from "@/components/shared/header";
import "../globals.css";
export const metadata: Metadata = {
  title: "Crowd Fund",
  description: "A Global Helping Hand Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
