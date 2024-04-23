"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Keza_logo from "../../images/white-logo.webp";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { TbHome2 } from "react-icons/tb";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { TbUserPlus } from "react-icons/tb";
import { LuLogIn } from "react-icons/lu";
import { MdTipsAndUpdates } from "react-icons/md";
import { GrGallery } from "react-icons/gr";

export default function Navigation() {
  const [active, setActive] = useState(true);

  return (
    <nav className="bg-burgundy static-position border-gray-200 dark:bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Link href="/" legacyBehavior passHref>
            <Image
              src={Keza_logo}
              alt="KEFL Logo image"
              className="w-8 sm:w-12 object-cover cursor-pointer"
            />
          </Link>
        </a>
        <button
          onClick={() => setActive(!active)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full ${active && "hidden"} sm:block sm:w-auto`}
          id="navbar-default"
        >
          {/* <div className="hidden w-full sm:block sm:w-auto" id="navbar-default"> */}
          <ul className="font-medium flex flex-col p-4 sm:p-0 mt-4 border sm:mx-2 border-gray-100 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 rtl:space-x-reverse sm:mt-0 sm:border-0 sm:bg-transparent dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-black focus:bg-burgundy focus:text-white w-[100%] rounded sm:bg-transparent sm:text-white sm:p-0 group inline-flex sm:h-10 sm:w-max items-center justify-center sm:rounded-sm sm:px-4 sm:py-2 sm:text-sm sm:font-medium sm:transition-colors sm:hover:bg-burgundy-light sm:hover:text-accent-foreground sm:focus:bg-accent sm:focus:text-accent-foreground sm:focus:outline-none sm:disabled:pointer-events-none sm:disabled:opacity-50 sm:data-[active]:bg-accent/50 sm:data-[state=open]:bg-accent/50"
                aria-current="page"
              >
                <strong className="mr-[3px]">
                  <TbHome2 />
                </strong>
                Home
              </a>
              <a
                href="/services"
                className="block py-2 px-3 text-black focus:bg-burgundy focus:text-white w-[100%] rounded sm:bg-transparent sm:text-white sm:p-0 group inline-flex sm:h-10 sm:w-max items-center justify-center sm:rounded-sm sm:px-4 sm:py-2 sm:text-sm sm:font-medium sm:transition-colors sm:hover:bg-burgundy-light sm:hover:text-accent-foreground sm:focus:bg-accent sm:focus:text-accent-foreground sm:focus:outline-none sm:disabled:pointer-events-none sm:disabled:opacity-50 sm:data-[active]:bg-accent/50 sm:data-[state=open]:bg-accent/50"
                aria-current="page"
              >
                <strong className="mr-[3px]">
                  <MdOutlineMiscellaneousServices />
                </strong>{" "}
                Services
              </a>
              <a
                href="/team"
                className="block py-2 px-3 text-black focus:bg-burgundy focus:text-white w-[100%] rounded sm:bg-transparent sm:text-white sm:p-0 group inline-flex sm:h-10 sm:w-max items-center justify-center sm:rounded-sm sm:px-4 sm:py-2 sm:text-sm sm:font-medium sm:transition-colors sm:hover:bg-burgundy-light sm:hover:text-accent-foreground sm:focus:bg-accent sm:focus:text-accent-foreground sm:focus:outline-none sm:disabled:pointer-events-none sm:disabled:opacity-50 sm:data-[active]:bg-accent/50 sm:data-[state=open]:bg-accent/50"
                aria-current="page"
              >
                <strong className="mr-[3px]">
                  <RiTeamLine />
                </strong>
                Team
              </a>
              <a
                href="/Gallery"
                className="block py-2 px-3 text-black focus:bg-burgundy focus:text-white w-[100%] rounded sm:bg-transparent sm:text-white sm:p-0 group inline-flex sm:h-10 sm:w-max items-center justify-center sm:rounded-sm sm:px-4 sm:py-2 sm:text-sm sm:font-medium sm:transition-colors sm:hover:bg-burgundy-light sm:hover:text-accent-foreground sm:focus:bg-accent sm:focus:text-accent-foreground sm:focus:outline-none sm:disabled:pointer-events-none sm:disabled:opacity-50 sm:data-[active]:bg-accent/50 sm:data-[state=open]:bg-accent/50"
                aria-current="page"
              >
                <strong className="mr-[3px]">
                  <GrGallery />
                </strong>
                Gallery
              </a>
              <a
                href="#"
                className="block py-2 px-3 text-black focus:bg-burgundy focus:text-white w-[100%] rounded sm:bg-transparent sm:text-white sm:p-0 group inline-flex sm:h-10 sm:w-max items-center justify-center sm:rounded-sm sm:px-4 sm:py-2 sm:text-sm sm:font-medium sm:transition-colors sm:hover:bg-burgundy-light sm:hover:text-accent-foreground sm:focus:bg-accent sm:focus:text-accent-foreground sm:focus:outline-none sm:disabled:pointer-events-none sm:disabled:opacity-50 sm:data-[active]:bg-accent/50 sm:data-[state=open]:bg-accent/50"
                aria-current="page"
              >
                <strong className="mr-[3px]">
                  <TbUserPlus />
                </strong>
                Sign up
              </a>
              {/* <a
                href="/auth/login"
                className="block py-2 px-3 text-black focus:bg-burgundy focus:text-white w-[100%] rounded sm:bg-transparent sm:text-white sm:p-0 group inline-flex sm:h-10 sm:w-max items-center justify-center sm:rounded-sm sm:px-4 sm:py-2 sm:text-sm sm:font-medium sm:transition-colors sm:hover:bg-burgundy-light sm:hover:text-accent-foreground sm:focus:bg-accent sm:focus:text-accent-foreground sm:focus:outline-none sm:disabled:pointer-events-none sm:disabled:opacity-50 sm:data-[active]:bg-accent/50 sm:data-[state=open]:bg-accent/50"
                aria-current="page"
              >
                <strong className="mr-[3px]">
                  <LuLogIn />
                </strong>
                Login
              </a> */}
              <a
                href="#"
                className="block py-2 px-3 text-black focus:bg-burgundy focus:text-white w-[100%] rounded sm:bg-transparent sm:text-white sm:p-0 group inline-flex sm:h-10 sm:w-max items-center justify-center sm:rounded-sm sm:px-4 sm:py-2 sm:text-sm sm:font-medium sm:transition-colors sm:hover:bg-burgundy-light sm:hover:text-accent-foreground sm:focus:bg-accent sm:focus:text-accent-foreground sm:focus:outline-none sm:disabled:pointer-events-none sm:disabled:opacity-50 sm:data-[active]:bg-accent/50 sm:data-[state=open]:bg-accent/50"
                aria-current="page"
              >
                <strong className="mr-[3px]"><MdTipsAndUpdates /></strong>Blog
              </a>
            </li>

            <button className="bg-burgundy mt-2 sm:mt-0 text-white sm:bg-white sm:text-burgundy px-8 py-3 rounded-sm text-sm font-bold">
              {/* Get in touch */}
              TALK TO KFL
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
