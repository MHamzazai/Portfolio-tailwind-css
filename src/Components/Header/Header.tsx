"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  // make a state to used for menu toggling
  const [menuIcon, setMenuIcon] = useState<boolean>(false);

  // function to toggle the menu on click
  const toggleMenuIcon = () => {
    setMenuIcon(!menuIcon); // inverts the previous menuIcon value then assign it to state
  };

  // funciton which close the menu after the click
  const closeMenu = () => {
    setMenuIcon(false); // condition false menu close
  };

  return (
    <div className="w-full h-[84px]">
      <nav
        id="navbar"
        className="bg-red-200 flex justify-between items-center h-full w-full border-b-2 border-black"
      >
        <div className="text-dark2 px-2 text-4xl xl:text-5xl font-semibold tracking-wider w-[60%] md:w-fit md:px-5 md:font-bold md:font-sans">
          PortFolio
        </div>

        {/* Desktop Links */}
        <div className="hidden md:w-fit md:h-full md:flex md:flex-row justify-end items-center space-x-6 xl:space-x-8 mr-4">
          <Link
            href="/"
            className="md:text-xl md:text-black tracking-wide md:font-semibold md:border-l-4 transition-all hover:border-2
                        border-black md:px-2 md:hover:bg-white md:hover:text-black md:hover:px-4 md:hover:scale-105 hover:rounded-[4px]
                        focus:border-white md:hover:py-1 hover:tracking-widest lg:text-2xl"
          >
            Home
          </Link>
          <Link
            href="/Contact"
            className="md:text-xl md:text-black tracking-wide md:font-semibold md:border-l-4 transition-all hover:border-2
                        border-black md:px-3 md:hover:bg-white md:hover:text-black md:hover:px-3 md:hover:scale-110 hover:rounded-[4px]
                        focus:border-white md:hover:py-1 hover:tracking-wider lg:text-2xl"
          >
            Contact us
          </Link>
          <Link
            href="/About"
            className="md:text-xl md:text-black tracking-wide md:font-semibold md:border-l-4 transition-all hover:border-2
                        border-black md:px-2 md:hover:bg-white md:hover:text-black md:hover:px-3 md:hover:scale-110 hover:rounded-[4px]
                        focus:border-white md:hover:py-1 hover:tracking-wider lg:text-2xl"
          >
            About us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="px-1 text-3xl font-bold md:hidden w-1/3 text-end h-full py-5">
          <i
            className={`transform transition-all duration-500 ease-in-out ${
              menuIcon
                ? "ri-close-large-line rotate-180 text-gray-800 scale-125"
                : "ri-menu-3-line rotate-0 text-black scale-100"
            }`}
            onClick={toggleMenuIcon}
          ></i>
        </div>
      </nav>

      {/* Mobile Links */}
      <div
        className={`absolute top-21 left-0 w-full bg-red-50 flex flex-col items-center gap-5 py-4 md:hidden transition-all
                    duration-500 rounded-b-md border-b-2 border-red-800
                    ${
                      menuIcon
                        ? "max-h-screen opacity-100"
                        : "max-h-0 overflow-hidden opacity-0"
                    }
                    `}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl text-black tracking-wide font-semibold lg:hover:bg-gray-400
                    hover:text-black focus:px-5 focus:py-1 rounded-md focus:scale-110 transition-all
                    focus:border-2 focus:border-red-800"
        >
          Home
        </Link>
        <Link
          href="/Contact"
          onClick={closeMenu}
          className="text-2xl text-black tracking-wide font-semibold lg:hover:bg-gray-400
                    hover:text-black focus:px-5 focus:py-1 rounded-md focus:scale-110 transition-all
                    focus:border-2 focus:border-red-800"
        >
          Contact us
        </Link>
        <Link
          href="/About"
          onClick={closeMenu}
          className="text-2xl text-black tracking-wide font-semibold lg:hover:bg-gray-400
                    hover:text-black focus:px-5 focus:py-1 rounded-md focus:scale-110 transition-all
                    focus:border-2 focus:border-red-800"
        >
          About us
        </Link>
      </div>
    </div>
  );
}