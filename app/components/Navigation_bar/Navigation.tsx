"use client";

import Image from "next/image";
import keza_logo from "../../images/burgundy-logo.webp";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const nav_links = [
    { name: "Home" },
    { name: "About" },
    { name: "Services" },
    { name: "Courses" },
    { name: "Teaching materials" },
    { name: "DIY" },
    { name: "Blog" },
  ];

  return (
    <header className="shadow-md p-2 pl-10 pr-10 bg-white">
      <nav className="">
        <div className="flex items-center justify-between">
          <div>
            <Image
              src={keza_logo}
              alt="KEFL Logo image"
              className="w-20 md:w-16 object-cover"
            />
          </div>
          <div className="flex items-center">
            <div>
              <ul className="hidden md:flex space-x-4 text-sm">
                {nav_links.map((link) =>
                  link.name == "" ? (
                    <li
                      key={link.name}
                      className="text-gray-700 hover:text-burgundy font-semibold font-sans text-base cursor-pointer"
                    >
                      {link.name}
                    </li>
                  ) : (
                    <li
                      key={link.name}
                      className="text-gray-700 hover:text-burgundy font-semibold font-sans text-base cursor-pointer"
                    >
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>
                              {link.name}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <NavigationMenuLink>
                                {" "}
                                {link.name}
                              </NavigationMenuLink>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="text-black">
              <button className="bg-burgundy text-white px-8 py-4 rounded-md text-sm font-bold mx-4">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
