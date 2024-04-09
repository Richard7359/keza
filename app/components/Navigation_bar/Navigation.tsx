import Image from "next/image";
import keza_logo from "../../images/burgundy-logo.webp";
import down_arrow from "../../images/chevron-down.svg";

const Navigation = () => {

   const nav_links = [{name: "Home"}, {name: "About"}, {name: "Services"}, {name: "Courses"}, {name: "Teaching materials"}, {name: "DIY"}, {name: "Blog"}]


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
          <div>
            <ul className="hidden md:flex space-x-4 text-sm">
              {
                nav_links.map((link) => (
                  <li key={link.name}  className="text-gray-700 hover:text-burgundy font-semibold font-sans text-base cursor-pointer">
                      {link.name}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="text-black">
            <button className="bg-burgundy text-white px-4 py-2 rounded-md text-sm font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
