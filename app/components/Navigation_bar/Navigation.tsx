"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Keza_logo from "../../images/white-logo.webp";
import Image from "next/image";
import { TbHome2 } from "react-icons/tb";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { MdTipsAndUpdates } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { MdOutlineNotificationsActive } from "react-icons/md";
import useGetAllBunners from "@/app/hooks/bunner/useGetBunner";
import { FaBlog } from "react-icons/fa";
import { MdOutlineAccessibilityNew } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";

export default function Navigation() {
  const [active, setActive] = useState(true);
  const { data, refetch } = useGetAllBunners();
  useEffect(() => {
    refetch();
    console.log("bunners : ", data);
  }, [data]);
  return (
    <div className="bg-yellow-300 z-50">
      {data ? (
        data.bunner.length > 0 &&
        data.bunner[data.bunner.length - 1].isActive ? (
          <div className="py-2 flex justify-center items-center text-3xl z-50">
            <MdOutlineNotificationsActive />
            <p className="text-sm font-mono">
              {data.bunner[data.bunner.length - 1].description}{" "}
              <strong className="font-bold cursor-pointer">
                <a
                  href={
                    process.env.NEXT_PUBLIC_IMAGE_URL +
                    data.bunner[data.bunner.length - 1].pdf
                  }
                >
                  {" "}
                  here{" "}
                </a>
              </strong>
            </p>
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <nav className="bg-deepSkyBlue dark:bg-gray-900 ">
        <div className="flex flex-wrap items-center justify-between md:justify-around mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Link href="/" legacyBehavior passHref>
              <Image
                src={Keza_logo}
                alt="KEFL Logo image"
                className="w-8 md:w-12 object-cover cursor-pointer"
              />
            </Link>
          </a>
          <button
            onClick={() => setActive(!active)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-md text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http:/www.w3.org/2000/svg"
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
          <div className={`w-full ${active && "hidden"} md:block md:w-auto`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mx-2  rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-black focus:bg-deepSkyBlue focus:text-white w-[100%] rounded md:bg-transparent md:text-white md:p-0 group inline-flex md:h-10 md:w-max items-center justify-center md:rounded-md md:px-4 md:py-2 md:text-md md:font-medium md:transition-colors md:hover:bg-deepSkyBlue-light md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground md:focus:outline-none md:disabled:pointer-events-none md:disabled:opacity-50 md:data-[active]:bg-accent/50 md:data-[state=open]:bg-accent/50"
                  aria-current="page"
                >
                  <strong className="mr-[3px]">
                    <TbHome2 />
                  </strong>
                  Home
                </a>
                <a
                  href="/keza/services"
                  className="block py-2 px-3 text-black focus:bg-deepSkyBlue focus:text-white w-[100%] rounded md:bg-transparent md:text-white md:p-0 group inline-flex md:h-10 md:w-max items-center justify-center md:rounded-md md:px-4 md:py-2 md:text-md md:font-medium md:transition-colors md:hover:bg-deepSkyBlue-light md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground md:focus:outline-none md:disabled:pointer-events-none md:disabled:opacity-50 md:data-[active]:bg-accent/50 md:data-[state=open]:bg-accent/50"
                  aria-current="page"
                >
                  <strong className="mr-[3px]">
                    <MdOutlineMiscellaneousServices />
                  </strong>{" "}
                  Services
                </a>
                <a
                  href="/keza/product"
                  className="block py-2 px-3 text-black focus:bg-deepSkyBlue focus:text-white w-[100%] rounded md:bg-transparent md:text-white md:p-0 group inline-flex md:h-10 md:w-max items-center justify-center md:rounded-md md:px-4 md:py-2 md:text-md md:font-medium md:transition-colors md:hover:bg-deepSkyBlue-light md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground md:focus:outline-none md:disabled:pointer-events-none md:disabled:opacity-50 md:data-[active]:bg-accent/50 md:data-[state=open]:bg-accent/50"
                  aria-current="page"
                >
                  <strong className="mr-[3px]">
                    <FaBagShopping />
                  </strong>{" "}
                  Products
                </a>
                <a
                  href="/keza/diy"
                  className="block py-2 px-3 text-black focus:bg-deepSkyBlue focus:text-white w-[100%] rounded md:bg-transparent md:text-white md:p-0 group inline-flex md:h-10 md:w-max items-center justify-center md:rounded-md md:px-4 md:py-2 md:text-md md:font-medium md:transition-colors md:hover:bg-deepSkyBlue-light md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground md:focus:outline-none md:disabled:pointer-events-none md:disabled:opacity-50 md:data-[active]:bg-accent/50 md:data-[state=open]:bg-accent/50"
                  aria-current="page"
                >
                  <strong className="mr-[3px]">
                    <MdOutlineAccessibilityNew />{" "}
                  </strong>
                  DIY
                </a>
                {/* <a
                  href="/keza/team"
                  className="block py-2 px-3 text-black focus:bg-deepSkyBlue focus:text-white w-[100%] rounded md:bg-transparent md:text-white md:p-0 group inline-flex md:h-10 md:w-max items-center justify-center md:rounded-md md:px-4 md:py-2 md:text-md md:font-medium md:transition-colors md:hover:bg-deepSkyBlue-light md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground md:focus:outline-none md:disabled:pointer-events-none md:disabled:opacity-50 md:data-[active]:bg-accent/50 md:data-[state=open]:bg-accent/50"
                  aria-current="page"
                >
                  <strong className="mr-[3px]">
                    <RiTeamLine />
                  </strong>
                  Team
                </a> */}
                {/* items are very cogested that's why i've removed Gallery item */}
                {/* <a
                  href="/keza/Gallery"
                  className="block py-2 px-3 text-black focus:bg-deepSkyBlue focus:text-white w-[100%] rounded md:bg-transparent md:text-white md:p-0 group inline-flex md:h-10 md:w-max items-center justify-center md:rounded-md md:px-4 md:py-2 md:text-md md:font-medium md:transition-colors md:hover:bg-deepSkyBlue-light md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground md:focus:outline-none md:disabled:pointer-events-none md:disabled:opacity-50 md:data-[active]:bg-accent/50 md:data-[state=open]:bg-accent/50"
                  aria-current="page"
                >
                  <strong className="mr-[3px]">
                    <GrGallery />
                  </strong>
                  Gallery
                </a> */}

                {/* <a
                href="/keza/#"
                className="block py-2 px-3 text-black focus:bg-deepSkyBlue focus:text-white w-[100%] rounded md:bg-transparent md:text-white md:p-0 group inline-flex md:h-10 md:w-max items-center justify-center md:rounded-md md:px-4 md:py-2 md:text-md md:font-medium md:transition-colors md:hover:bg-deepSkyBlue-light md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground md:focus:outline-none md:disabled:pointer-events-none md:disabled:opacity-50 md:data-[active]:bg-accent/50 md:data-[state=open]:bg-accent/50"
                aria-current="page"
              >
                <strong className="mr-[3px]">
                  <TbUserPlus />
                </strong>
                Sign up
              </a> */}
                {/* <a
                href="/keza/auth/login"
                className="block py-2 px-3 text-black focus:bg-deepSkyBlue focus:text-white w-[100%] rounded md:bg-transparent md:text-white md:p-0 group inline-flex md:h-10 md:w-max items-center justify-center md:rounded-md md:px-4 md:py-2 md:text-md md:font-medium md:transition-colors md:hover:bg-deepSkyBlue-light md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground md:focus:outline-none md:disabled:pointer-events-none md:disabled:opacity-50 md:data-[active]:bg-accent/50 md:data-[state=open]:bg-accent/50"
                aria-current="page"
              >
                <strong className="mr-[3px]">
                  <LuLogIn />
                </strong>
                Login
              </a> */}
                <a
                  href="/keza/blogs"
                  className="block py-2 px-3 text-black focus:bg-deepSkyBlue focus:text-white w-[100%] rounded md:bg-transparent md:text-white md:p-0 group inline-flex md:h-10 md:w-max items-center justify-center md:rounded-md md:px-4 md:py-2 md:text-md md:font-medium md:transition-colors md:hover:bg-deepSkyBlue-light md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground md:focus:outline-none md:disabled:pointer-events-none md:disabled:opacity-50 md:data-[active]:bg-accent/50 md:data-[state=open]:bg-accent/50"
                  aria-current="page"
                >
                  <strong className="mr-[3px]">
                    <FaBlog />
                  </strong>
                  Blogs
                </a>
                <a
                  href="/keza/courses"
                  className="block py-2 px-3 text-black focus:bg-deepSkyBlue focus:text-white w-[100%] rounded md:bg-transparent md:text-white md:p-0 group inline-flex md:h-10 md:w-max items-center justify-center md:rounded-md md:px-4 md:py-2 md:text-md md:font-medium md:transition-colors md:hover:bg-deepSkyBlue-light md:hover:text-accent-foreground md:focus:bg-accent md:focus:text-accent-foreground md:focus:outline-none md:disabled:pointer-events-none md:disabled:opacity-50 md:data-[active]:bg-accent/50 md:data-[state=open]:bg-accent/50"
                  aria-current="page"
                >
                  <strong className="mr-[3px]">
                    <MdTipsAndUpdates />
                  </strong>
                  Courses
                </a>
              </li>
              <a href="mailto:?to=keza.info@gmail.com&subject=Subject Here&body=Body text here">
                <button className="bg-deepSkyBlue mt-2 md:mt-0 text-white md:bg-white md:text-black px-8 py-2 rounded-md text-md font-bold w-full">
                  TALK TO KEFL
                </button>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
