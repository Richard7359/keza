const Navigation = () => {
  return (
    <header className="shadow-md">
    <nav className="relative container mx-auto py-3 px-3 md:px-0">
      <div className="flex items-center justify-between">
        <div>
          <a href="/index.html">
            <img src="/assets/burgundy-logo.webp" alt="KEFL Logo image" className="w-20 md:w-16 object-cover" />
          </a>
        </div>
        <div>
          <ul className="hidden md:flex space-x-4 text-sm">
            <li>
              <a href="/index.html"
                className="text-gray-700 hover:text-burgundy hover:underline hover:decoration-2 hover:underline-offset-8">Home</a>
            </li>

            <li>
              <a
                className="flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8">About
                <span><img src="/assets/chevron-down.svg" alt="" className="w-6 h-6" /></span>
              </a>
              <ul
                className="dropdown hidden py-4 border border-paragraph bg-white text-paragraph w-fit rounded-md absolute z-50">
                <li className="hover:bg-badge hover:text-burgundy">
                  <a href="/about/company-profile.html" className="py-2 px-4 flex w-full">Company profile</a>
                </li>
                <hr />

                <li className="hover:bg-badge hover:text-burgundy">
                  <a href="/about/company-structure.html" className="py-2 px-4 flex w-full">Company structure</a>
                </li>
              </ul>
            </li>

            <li>
              <a
                className="flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8">Services
                <span><img src="/assets/chevron-down.svg" alt="" className="w-6 h-6" /></span>
              </a>
              <ul
                className="dropdown hidden py-4 border border-paragraph hover:block bg-white text-paragraph w-fit rounded-md absolute z-50">
                <li className="hover:bg-badge hover:text-burgundy">
                  <a href="/services/steam-training.html" className="py-2 px-4 flex w-full">STEAM training</a>
                </li>
                <hr />

                <li className="hover:bg-badge hover:text-burgundy">
                  <a className="py-2 px-4 flex w-full">Technology gadgets</a>
                </li>
                <hr />

                <li className="hover:bg-badge hover:text-burgundy">
                  <a href="/services/laser-cutter.html" className="py-2 px-4 flex w-full">Cutting & engraving of designs</a>
                </li>
                <hr />

                <li className="hover:bg-badge hover:text-burgundy">
                  <a href="/services/consultancy.html" className="py-2 px-4 flex w-full">Consultancy</a>
                </li>
                <hr />
              </ul>
            </li>

            <li>
              <a
                className="flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8">courses
                <span><img src="/assets/chevron-down.svg" alt="" className="w-6 h-6" /></span>
              </a>
              <ul
                className="dropdown hidden py-4 border border-paragraph bg-white text-paragraph w-fit rounded-md absolute z-50">
                <li className="hover:bg-badge hover:text-burgundy">
                  <a href="/level/beginner.html" className="py-2 px-4 flex w-full">Beginner Level</a>
                </li>
                <hr />

                <li className="hover:bg-badge hover:text-burgundy">
                  <a href="/level/middle.html" className="py-2 px-4 flex w-full">Middle Level</a>
                </li>
                <hr />

                <li className="hover:bg-badge hover:text-burgundy">
                  <a href="/level/pre-advanced.html" className="py-2 px-4 flex w-full">Pre-Advanced Level</a>
                </li>
                <hr />

                <li className="hover:bg-badge hover:text-burgundy">
                  <a href="/level/advanced.html" className="py-2 px-4 flex w-full">Advanced Level</a>
                </li>
                <hr />
              </ul>
            </li>

            <li>
              <a href="/kefl-kits/all-kefl-kits.html"
                className="flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8">Teaching
                materials
              </a>
            </li>

            <li>
              <a href="/DIY/tinkering-making.html"
                className="flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8">DIY
              </a>
            </li>

            <li>
              <a href="/blog/blogs.html"
                className="text-gray-700 hover:text-burgundy hover:underline hover:decoration-2 hover:underline-offset-8">Blog
              </a>
            </li>

            <li>
              <a href="/contact/contact-us.html"
                className="text-gray-700 hover:text-burgundy hover:underline hover:decoration-2 hover:underline-offset-8">Contact
              </a>
            </li>
            <li>
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
            </li>
          </ul>
        </div>
        <div
          className="md:hidden border-4 outline-none border-badge rounded-md px-3 pt-3 pb-2 flex items-center justify-center">
          <button id="menu-btn" className="block hamburger md:hidden outline-none focus:outline-none">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <div id="menu"
          className="hidden text-darkGrey absolute flex-col px-3 self-end py-8 mt-2 w-screen space-y-6 font-bold bg-white z-50 sm:w-auto sm:self-center drop-shadow-md">
          <ul className="space-y-4 font-normal w-screen">
            <li>
              <a href="/index.html"
                className="flex text-gray-700 w-full hover:text-burgundy hover:underline hover:decoration-2 hover:underline-offset-8">Home</a>
            </li>
            <hr />
            <li>
              <a
                className="flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8">About
                <span><img src="/assets/chevron-down.svg" alt="" className="w-6 h-6" /></span>
              </a>
              <ul className="dropdown hidden bg-white text-paragraph w-full rounded-md p-3 z-0">
                <li className="hover:bg-badge p-2 rounded-md hover:text-burgundy">
                  <a href="/about/company-profile.html" className="flex">Company profile</a>
                </li>
                <hr />
                <li className="hover:bg-badge p-2 rounded-md hover:text-burgundy">
                  <a href="/about/company-structure.html" className="flex">Company structure</a>
                </li>
              </ul>
            </li>
            <hr />

            <li>
              <a
                className="flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8">Services
                <span><img src="/assets/chevron-down.svg" alt="" className="w-6 h-6" /></span>
              </a>
              <ul className="dropdown hidden bg-white text-paragraph w-full rounded-md p-3 z-0">
                <li className="hover:bg-badge p-2 rounded-md hover:text-burgundy">
                  <a href="/services/steam-training.html" className="flex">STEAM training</a>
                </li>
                <hr />
                <li className="hover:bg-badge p-2 rounded-md hover:text-burgundy">
                  <a className="flex">Technology gadgets</a>
                </li>
                <hr />
                <li className="hover:bg-badge p-2 rounded-md hover:text-burgundy">
                  <a href="/services/laser-cutter.html" className="flex">Cutting & Engraving of designs</a>
                </li>
                <hr />
                <li className="hover:bg-badge p-2 rounded-md hover:text-burgundy">
                  <a href="/services/consultancy.html" className="flex">Consultancy</a>
                </li>
              </ul>
            </li>
            <hr />

            <li>
              <a
                className="flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8">courses
                <span><img src="/assets/chevron-down.svg" alt="" className="w-6 h-6" /></span>
              </a>
              <ul className="dropdown hidden bg-white text-paragraph w-full rounded-md p-3 z-0">
                <li className="hover:bg-badge p-2 rounded-md hover:text-burgundy">
                  <a href="/level/beginner.html" className="flex gap-2 w-full">Beginner Level</a>
                </li>
                <hr />
                <li className="hover:bg-badge p-2 rounded-md hover:text-burgundy">
                  <a href="/level/middle.html" className="flex gap-2">Middle Level</a>
                </li>
                <hr />
                <li className="hover:bg-badge p-2 rounded-md hover:text-burgundy">
                  <a href="/level/pre-advanced.html" className="flex gap-2">Pre-advanced Level</a>
                </li>
                <hr />
                <li className="hover:bg-badge p-2 rounded-md hover:text-burgundy">
                  <a href="/level/advanced.html" className="flex gap-2">Advanced Level</a>
                </li>
              </ul>
            </li>
            <hr />

            <li>
              <a href="/kefl-kits/all-kefl-kits.html"
                className="flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8">Teaching
                materials
              </a>
            </li>
            <hr />

            <li>
              <a href="/DIY/tinkering-making.html"
                className="flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8">DIY
              </a>
            </li>
            <hr />

            <li>
              <a href="/blog/blogs.html"
                className="flex text-gray-700 hover:text-burgundy hover:underline hover:decoration-2 hover:underline-offset-8">Blog
              </a>
            </li>
            <hr />

            <li>
              <a href="/contact/contact-us.html"
                className="flex text-gray-700 hover:text-burgundy hover:underline hover:decoration-2 hover:underline-offset-8">Contact
              </a>
            </li>
            <hr />
            <li>
              <a
                className="text-xs flex text-gray-700 hover:text-burgundy hover:underline cursor-pointer hover:decoration-2 hover:underline-offset-8">English
              </a>
              <ul className="text-xs dropdown hidden bg-white text-paragraph w-full rounded-md p-3 z-0">
                <li className="hover:bg-badge p-2 rounded-md hover:text-burgundy">
                  <a className="flex">Kinyarwanda</a>
                </li>
                <hr />
                <li className="hover:bg-badge p-2 rounded-md hover:text-burgundy">
                  <a href="/about/company-structure.html" className="flex">Français</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Navigation
