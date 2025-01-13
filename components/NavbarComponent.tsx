"use client";

import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { useState } from "react";

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Inicio", link: "/" },
    { title: "Productos", link: "/productos" },
    { title: "Quiénes Somos", link: "/who" },
    { title: "Dónde Estamos", link: "/where" },
    { title: "Contacto", link: "/contact" },
  ];

  return (
    <Navbar
      className="bg-black"
      classNames={{ wrapper: "px-0" }}
      maxWidth="full"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>

        <NavbarBrand>
          <p className="text-2xl md:text-4xl font-extrabold text-white pl-7 pr-3 py-3 skew-x-[-15deg] ml-[-9px]">
            <Link href="/">POWER<span className="text-pink-700">MIX</span> STATION</Link>
          </p>
        </NavbarBrand>

        <NavbarContent
          className="hidden sm:flex max-w-fit pl-5 gap-0"
          justify="end"
        >
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className="text-white skew-x-[-15deg] mr-[-9px] bg-black px-4 py-5 2xl:px-4 2xl:py-[1.11rem] hover:bg-pink-700 transition-all duration-200 hover:px-7"
            >
              <Link className="text-xl skew-x-[15deg]" href={item.link}>
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarContent>
      </NavbarContent>

      <div className="bg-pink-700 h-full px-5 md:hidden sticky">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
      </div>

      {isMenuOpen && (
        <NavbarMenu className="flex flex-col items-center sm:hidden pt-5 gap-2 bg-pink-900/70">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="text-xl italic text-white" href={item.link}>
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
};
