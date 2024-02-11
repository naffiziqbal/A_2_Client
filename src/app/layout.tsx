import UserContext from "@/helper/context";
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
