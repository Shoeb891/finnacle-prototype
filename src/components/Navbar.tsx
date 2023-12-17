"use client";

import Link from "next/link";
import React from "react";
// import { ThemeToggle } from "./ThemeToggle";
// import UserAccountNav from "./UserAccountNav";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import UserAccNav from "./UserAccNav";

const Navbar = () => {
  const pathname = usePathname();

  let isLoggedIn = true;

  console.log(pathname);

  let isUser = true;

  if (pathname == "/" || pathname == "/signin" || pathname == "/signup") {
    isUser = false;
  }

  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex flex-row">
          <>
            <Link href={"/"} className="flex items-center gap-2">
              <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
                Finnacle
              </p>
            </Link>
          </>
        </div>
        <div className="flex items-center justify-center">
          {/* <ThemeToggle className="mr-4" /> */}
          {isLoggedIn ? (
            <UserAccNav />
          ) : (
            <div className="flex flex-row">
              <ThemeToggle className="mr-4 bg-white" />
              <Link href={"/signin"}>
                <button className="mr-2">Log In</button>
              </Link>
              <Link href={"/signup"}>
                <button>Sign Up</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
