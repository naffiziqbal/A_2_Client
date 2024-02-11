import UserContext, { ContextProvider } from "@/helper/context";
import { AuthProvider } from "./Provider";
import "./globals.css";

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
