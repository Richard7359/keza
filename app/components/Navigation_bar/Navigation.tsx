'use client';

import {useState} from "react";
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
  const [active, setActive] = useState(false);
  return (
    // <div
    //   className={`w-full static-position py-3 flex justify-around  bg-burgundy
    //    transition-colors duration-300`}
    // >
    //   <Link href="/" legacyBehavior passHref>
    //     <Image
    //       src={Keza_logo}
    //       alt="KEFL Logo image"
    //       className="w-15 md:w-12 object-cover cursor-pointer"
    //     />
    //   </Link>
    //   <div className="flex items-center">
    //     <NavigationMenu>
    //       <NavigationMenuList>
    //         <NavigationMenuItem className="transparent-bg text-white">
    //           <Link href="/" legacyBehavior passHref>
    //             <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-burgundy-light hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
    //              <strong className="mr-[3px]"><TbHome2 /></strong> Home
    //             </NavigationMenuLink>
    //           </Link>
    //         </NavigationMenuItem>
    //         <NavigationMenuItem className="transparent-bg text-white">
    //           <Link href="/services" legacyBehavior passHref>
    //             <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-burgundy-light hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
    //             <strong className="mr-[3px]"><MdOutlineMiscellaneousServices /></strong> Services
    //             </NavigationMenuLink>
    //           </Link>
    //         </NavigationMenuItem>
    //         <NavigationMenuItem className="transparent-bg text-white">
    //           <Link href="/team" legacyBehavior passHref>
    //             <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-burgundy-light hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
    //             <strong className="mr-[3px]"><RiTeamLine /></strong>Team
    //             </NavigationMenuLink>
    //           </Link>
    //         </NavigationMenuItem>
    //         <NavigationMenuItem className="transparent-bg text-white">
    //           <Link href="/Gallery" legacyBehavior passHref>
    //             <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-burgundy-light hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
    //             <strong className="mr-[3px]"><GrGallery /></strong>Gallery
    //             </NavigationMenuLink>
    //           </Link>
    //         </NavigationMenuItem>
    //         <NavigationMenuItem className="transparent-bg text-white">
    //           <Link href="#" legacyBehavior passHref>
    //             <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-burgundy-light hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
    //             <strong className="mr-[3px]"><TbUserPlus /></strong>Sign up
    //             </NavigationMenuLink>
    //           </Link>
    //         </NavigationMenuItem>
    //         <NavigationMenuItem className="transparent-bg text-white">
    //           <Link href="/auth/login" legacyBehavior passHref>
    //             <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-burgundy-light hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
    //             <strong className="mr-[3px]"><LuLogIn /></strong>Login
    //             </NavigationMenuLink>
    //           </Link>
    //         </NavigationMenuItem>
    //         <NavigationMenuItem className="transparent-bg text-white">
    //           <Link href="#" legacyBehavior passHref>
    //             <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-burgundy-light hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
    //             <strong className="mr-[3px]"><MdTipsAndUpdates /></strong>Blog
    //             </NavigationMenuLink>
    //           </Link>
    //         </NavigationMenuItem>
    //       </NavigationMenuList>
    //     </NavigationMenu>
    //     <div>
    //       <button className="bg-white text-burgundy px-8 py-3 rounded-md text-sm font-bold mx-4">
    //         {/* Get in touch */}
    //        TALK TO KFL
    //       </button>
    //     </div>
    //   </div>
    // </div>



<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button onClick={() => setActive(!active)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={`w-full ${active && "hidden"} md:block md:w-auto`} id="navbar-default">
    {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default"> */}
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}
