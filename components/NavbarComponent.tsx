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
    "Inicio",
    "Quiénes Somos",
    "Donde Estamos",
    "Que Hacemos",
    "Contacto",
  ];

  return (
    <Navbar
      className="bg-transparent"
      classNames={{ wrapper: "px-0" }}
      maxWidth="full"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <p className="text-2xl md:text-4xl font-extrabold bg-black text-white pl-7 pr-3 py-3 skew-x-[-15deg] ml-[-9px]">
            POWER<span className="text-pink-700">MIX</span> STATION
          </p>
        </NavbarBrand>

        <NavbarContent
          className="hidden sm:flex max-w-fit pl-5 gap-0"
          justify="end"
        >
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className="text-white skew-x-[-15deg] mr-[-9px] bg-black px-4 py-5 2xl:p-5 hover:bg-pink-700 transition-all duration-200 hover:px-7"
            >
              <Link className="text-lg skew-x-[15deg]" href="#">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarContent>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden mr-6 text-white"
      />

      {isMenuOpen && (
        <NavbarMenu className="flex flex-col items-center sm:hidden gap-2 mt-2">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="text-medium hover:text-pink-700" href="#">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
};
