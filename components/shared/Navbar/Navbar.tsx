"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navMenu } from "@/constants/navMenu";
import { usePathname, useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navMenu";
import HIMASI from "@/public/icon/HIMASI.png";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="sticky z-[99] top-0 w-full bg-[#4B061A]">
      <div className="h-[80px] w-full border-b-2 border-[rgba(0,0,0,0.10)]">
        <div className="container mx-auto flex h-full items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex flex-row items-center space-x-2 md:space-x-0">
            <Image
              src={HIMASI}
              alt="HIMASI Logo"
              width={140}
              height={70}
              className="h-[50px] w-[50px] object-contain md:h-[60px] md:w-[100px]"
            />
            <div className="flex flex-col items-start font-bold text-xl">
                <p>HIMASI</p>
                <p>UNAS</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex mr-8">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-row gap-8">
                {navMenu.map(({ title, path }) => {
                  return (
                    <NavigationMenuItem
                      key={title}
                      className="relative flex items-center"
                    >
                      <Link href={path} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={`
                            relative px-2 py-1 text-white transition-colors duration-150
                            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:bg-white after:w-0 after:transition-all after:duration-300
                            hover:after:w-full
                            ${pathname === path ? "after:w-full after:bg-white after:h-0.5" : ""}
                            font-bold
                          `}
                        >
                          {title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              className="p-2"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <div className="rotate-90 duration-300">
                  <X size={32} color="#fff" />
                </div>
              ) : (
                <div className="duration-300">
                  <Menu size={32} color="#fff" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -32, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden bg-[#4B061A] px-4 pb-4 flex justify-center absolute left-0 right-0 top-20"
            >
              <div className="max-w-xs w-full mx-auto flex flex-col items-center">
                <NavigationMenu>
                  <NavigationMenuList className="flex flex-col gap-4 items-center w-full">
                    {navMenu.map(({ title, path }) => (
                      <NavigationMenuItem
                        key={title}
                        className="w-full flex flex-col items-center"
                      >
                        <button
                          className={`text-white px-2 py-1 font-semibold transition-all duration-150 w-full text-center ${
                            pathname === path
                              ? "border-b-2 border-white"
                              : "opacity-70 hover:opacity-100"
                          }`}
                          onClick={() => {
                            setMenuOpen(false);
                            setTimeout(() => router.push(path), 300);
                          }}
                        >
                          {title}
                        </button>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

interface NestedNav extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  path: string;
  menu: { name: string; href: string; desc?: string }[];
  closeMenu: React.MouseEventHandler;
}

function NestedNav({ title, path, menu, closeMenu }: NestedNav) {
  const pathname = usePathname();

  return (
    <NavigationMenuItem
      className={`z-50 ${pathname.includes(path) ? "nav-active" : "nav"}`}
    >
      <NavigationMenuTrigger className="relative px-2 py-1 text-white font-bold text-base transition-colors duration-150 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full data-[state=open]:after:w-full">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-[300px] text-left">
          {menu.map(({ name, href }, index) => (
            <NavigationMenuLink key={index} onClick={closeMenu}>
              <Link
                href={href}
                className="hover:bg-[#2991E0] block w-[300px] select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:bg-opacity-10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {name}
                </p>
              </Link>
            </NavigationMenuLink>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}