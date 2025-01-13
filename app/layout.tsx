import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { fontSans } from "@/config/fonts";
import Footer from "@/components/Footer/Footer";
import { NavbarComponent } from "@/components/NavbarComponent";

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
          "min-h-screen bg-background font-sans md:overflow-x-hidden",
          fontSans.variable,
        )}
      >
        <NavbarComponent />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
