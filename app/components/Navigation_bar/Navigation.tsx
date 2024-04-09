import Image from "next/image";
import keza_logo from "../../images/burgundy-logo.webp";
import down_arrow from "../../images/chevron-down.svg";

const Navigation = () => {

   const nav_links = [{name: "Home"}, {name: "About"}, {name: "Services"}, {name: "Courses"}, {name: "Teaching materials"}, {name: "DIY"}, {name: "Blog"}]


  return (
    <header className="shadow-md p-2 pl-10 pr-10 bg-white">
      <nav className="">
      {/* <nav className="relative container mx-auto py-3 px-3 md:px-0"> */}
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
              {
                nav_links.map((link) => (
                  <li key={link.name}  className="text-gray-700 hover:text-burgundy font-semibold font-sans text-base cursor-pointer">
                      {link.name}
                  </li>
                ))
              }
              {/* <li>
                <a className="flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8">
                  About
                  <span>
                    <Image
                      src={down_arrow}
                      alt="Picture of the author"
                      className="w-6 h-6"
                    />
                  </span>
                </a>
                <ul className="dropdown hidden py-4 border border-paragraph bg-white text-paragraph w-fit rounded-md absolute z-50">
                  <li className="hover:bg-badge hover:text-burgundy">
                    <a
                      href="/about/company-profile.html"
                      className="py-2 px-4 flex w-full"
                    >
                      Company profile
                    </a>
                  </li>
                  <hr />

                  <li className="hover:bg-badge hover:text-burgundy">
                    <a
                      href="/about/company-structure.html"
                      className="py-2 px-4 flex w-full"
                    >
                      Company structure
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a className="flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8">
                  Services
                  <span>
                    {" "}
                    <Image
                      src={down_arrow}
                      alt="Picture of the author"
                      className="w-6 h-6"
                    />
                  </span>
                </a>
                <ul className="dropdown hidden py-4 border border-paragraph hover:block bg-white text-paragraph w-fit rounded-md absolute z-50">
                  <li className="hover:bg-badge hover:text-burgundy">
                    <a
                      href="/services/steam-training.html"
                      className="py-2 px-4 flex w-full"
                    >
                      STEAM training
                    </a>
                  </li>
                  <hr />

                  <li className="hover:bg-badge hover:text-burgundy">
                    <a className="py-2 px-4 flex w-full">Technology gadgets</a>
                  </li>
                  <hr />

                  <li className="hover:bg-badge hover:text-burgundy">
                    <a
                      href="/services/laser-cutter.html"
                      className="py-2 px-4 flex w-full"
                    >
                      Cutting & engraving of designs
                    </a>
                  </li>
                  <hr />

                  <li className="hover:bg-badge hover:text-burgundy">
                    <a
                      href="/services/consultancy.html"
                      className="py-2 px-4 flex w-full"
                    >
                      Consultancy
                    </a>
                  </li>
                  <hr />
                </ul>
              </li>

              <li>
                <a className="flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8">
                  courses
                  <span>
                    {" "}
                    <Image
                      src={down_arrow}
                      alt="Picture of the author"
                      className="w-6 h-6"
                    />
                  </span>
                </a>
                <ul className="dropdown hidden py-4 border border-paragraph bg-white text-paragraph w-fit rounded-md absolute z-50">
                  <li className="hover:bg-badge hover:text-burgundy">
                    <a
                      href="/level/beginner.html"
                      className="py-2 px-4 flex w-full"
                    >
                      Beginner Level
                    </a>
                  </li>
                  <hr />

                  <li className="hover:bg-badge hover:text-burgundy">
                    <a
                      href="/level/middle.html"
                      className="py-2 px-4 flex w-full"
                    >
                      Middle Level
                    </a>
                  </li>
                  <hr />

                  <li className="hover:bg-badge hover:text-burgundy">
                    <a
                      href="/level/pre-advanced.html"
                      className="py-2 px-4 flex w-full"
                    >
                      Pre-Advanced Level
                    </a>
                  </li>
                  <hr />

                  <li className="hover:bg-badge hover:text-burgundy">
                    <a
                      href="/level/advanced.html"
                      className="py-2 px-4 flex w-full"
                    >
                      Advanced Level
                    </a>
                  </li>
                  <hr />
                </ul>
              </li>

              <li>
                <a
                  href="/kefl-kits/all-kefl-kits.html"
                  className="flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8"
                >
                  Teaching materials
                </a>
              </li>

              <li>
                <a
                  href="/DIY/tinkering-making.html"
                  className="flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8"
                >
                  DIY
                </a>
              </li>

              <li>
                <a
                  href="/blog/blogs.html"
                  className="text-gray-700 hover:text-burgundy hover:underline hover:decoration-2 hover:underline-offset-8"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="/contact/contact-us.html"
                  className="text-gray-700 hover:text-burgundy hover:underline hover:decoration-2 hover:underline-offset-8"
                >
                  Contact
                </a>
              </li> */}
              {/* <li>
              <a
                className="text-xs text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8"><span
                  className="lg:hidden">🇬🇧</span> English
              </a>
              <ul
                className="dropdown hidden py-4 mt-[2px] bg-white text-paragraph w-fit border border-paragraph rounded-md absolute z-50">
                <li className="text-xs hover:bg-badge hover:text-burgundy">
                  <a href="#" className="py-2 px-4 flex w-full"><span className="md:hidden">🇷🇼</span> Kinyarwanda</a>
                </li>
                <hr />

                <li className="text-xs hover:bg-badge hover:text-burgundy">
                  <a href="#" className="py-2 px-4 flex w-full"><span className="md:hidden">🇫🇷</span> Français</a>
                </li>
                <hr />
              </ul>
            </li> */}
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
