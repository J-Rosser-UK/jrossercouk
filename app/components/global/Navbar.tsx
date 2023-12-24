"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
// import Theme from "./Theme";
import UnmountStudio from "./Unmount";
import MobileMenu from "./MobileMenu";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import SunIcon from "../../icons/SunIcon";
import MoonIcon from "../../icons/MoonIcon";

export default function Navbar() {

  const { systemTheme, theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(systemTheme, theme, currentTheme)
  function toggleTheme() {
    console.log(systemTheme, theme, currentTheme)
    return currentTheme === "light" ? setTheme("dark") : setTheme("light");
  }
  useEffect(() => setHasMounted(true), []);

  if (!hasMounted)
    return (
      <span className="animate-pulse min-w-[28px] min-h-[28px] p-2 rounded-full dark:bg-zinc-800 bg-zinc-200 border dark:border-zinc-700 border-zinc-300"></span>
    );

  const data = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    // {
    //   title: "Blog",
    //   href: "/blog",
    // },
    // {
    //   title: "Photos",
    //   href: "/photos",
    // },
  ];

  return (
    <UnmountStudio>
      <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src={Logo} width={35} height={35} alt="logo" style={{filter: currentTheme !== "dark" ? "invert(100%)" : "none"}}/>
          </Link>

          <nav className="md:block hidden">
            <ul className="flex items-center gap-x-8">
              {data.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-x-4">
            <button
                onClick={toggleTheme}
                className={`dark:bg-primary-bg bg-zinc-100 dark:text-primary-color text-zinc-500 border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-300 transition-transform group: ${
                  currentTheme === "light" ? "-rotate-180" : "rotate-0"
                }`}
                aria-label="Toggle Theme"
              >
                {currentTheme === "light" ? <SunIcon /> : <MoonIcon />}
            </button>
            <MobileMenu />
          </div>
        </div>
      </header>
    </UnmountStudio>
  );
}
