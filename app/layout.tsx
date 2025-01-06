import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { fontSans } from "@/config/fonts";


export const metadata: Metadata = {
  title: "POWER MIX STATION",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <body
        className={clsx(
          "min-h-screen bg-background font-sans overflow-x-hidden",
          fontSans.variable,
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
