'use client';

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

export default function Navigation() {
  return (
    <div
      className={`w-full static-position py-3 flex justify-around  bg-burgundy
       transition-colors duration-300`}
    >
      <Link href="/" legacyBehavior passHref>
        <Image
          src={Keza_logo}
          alt="KEFL Logo image"
          className="w-15 md:w-12 object-cover cursor-pointer"
        />
      </Link>
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger className="transparent-bg text-white">
                Getting started
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">
                          team
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            <NavigationMenuItem className="transparent-bg text-white">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-burgundy-light hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                 <strong className="mr-[3px]"><TbHome2 /></strong> Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="transparent-bg text-white">
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-burgundy-light hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                <strong className="mr-[3px]"><MdOutlineMiscellaneousServices /></strong> Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="transparent-bg text-white">
              <Link href="/team" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-burgundy-light hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                <strong className="mr-[3px]"><RiTeamLine /></strong>Team
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="transparent-bg text-white">
              <Link href="/team" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-burgundy-light hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                <strong className="mr-[3px]"><TbUserPlus /></strong>Sign up
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="transparent-bg text-white">
              <Link href="/auth/login" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-burgundy-light hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                <strong className="mr-[3px]"><LuLogIn /></strong>Login
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="transparent-bg text-white">
              <Link href="/team" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-burgundy-light hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                <strong className="mr-[3px]"><MdTipsAndUpdates /></strong>Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div>
          <button className="bg-white text-burgundy px-8 py-3 rounded-md text-sm font-bold mx-4">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}
