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
import Link from "next/link";

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

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
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
                  link.name == "About" ? (
                    <li
                      key={link.name}
                      className="cursor-pointer"
                      // className="text-gray-700 hover:text-burgundy font-semibold font-sans text-base cursor-pointer"
                    >
                      <NavigationMenu>
                        <NavigationMenuList>
                          {/* <NavigationMenuItem>
                            <NavigationMenuTrigger>
                              {link.name}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <NavigationMenuLink>
                                {" "}
                                {link.name}
                              </NavigationMenuLink>
                            </NavigationMenuContent>
                          </NavigationMenuItem> */}
                          <NavigationMenuItem className="m-0 p-0">
                            <NavigationMenuTrigger>
                              Components
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {components.map((component) => (
                                  <Link
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                  >
                                    {component.description}
                                  </Link>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    </li>
                  ) : (
                    <li key={link.name} className="cursor-pointer">
                      {link.name}
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
