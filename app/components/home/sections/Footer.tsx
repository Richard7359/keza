import React from "react";
import Image from "next/image";
import Keza_logo from "../../../images/white-logo.webp";

const Footer = () => {
  return (
    <footer className="py-10 px-3 m-0 bg-darkGrey">
      <div className="container mx-auto grid md:grid-cols-2">
        <div className="w-fit">
        <div>
              <Image
                src={Keza_logo}
                alt="KEFL Logo image"
                className="w-20 md:w-16 object-cover"
              />
          </div>
          <ul className="text-sm leading-8">
            <li className="flex items-center gap-2 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>

              <a
                href="https://goo.gl/maps/48mqzPAw8vsaeAPHA"
                target="_blank"
                className="hover:text-white"
              >
                Kimironko, Ingeri KG 192 St
              </a>
            </li>

            <li className="flex items-center gap-2 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>

              <a href="tel:+250783313990" className="hover:text-white">
                +250 786 701 376
              </a>
            </li>

            <li className="flex items-center gap-2 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>

              <a href="mailto:keza.info@gmail.com" className="hover:text-white">
                keza.info@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 md:gap-16 w-fit">
          <div>
            <p className="mt-8 mb-3 text-white md:mt-0">Company</p>
            <div className="flex flex-col text-base gap-2">
              <a
                href="/about/company-structure.html"
                className="hover:text-white"
              >
                About
              </a>
              <a href="/blog/blogs.html" className="hover:text-white">
                Blog
              </a>
              <a
                href="/testimonials/testimonies.html"
                className="hover:text-white"
              >
                Testimonials
              </a>
              <a href="#" className="hover:text-white">
                Gallery
              </a>
              <a href="#" className="hover:text-white">
                Collaborate with us
              </a>
              <a href="#" className="hover:text-white">
                Terms & conditions
              </a>
              <a href="/contact/contact-us.html" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <p className="mb-3 text-white">Services</p>
            <div className="flex flex-col text-base gap-2">
              <a href="/course/all-courses.html" className="hover:text-white">
                Courses
              </a>
              <a href="#" className="hover:text-white">
                Cutting & Engraving of Designs
              </a>
              <a href="#" className="hover:text-white">
                STEAM training
              </a>
              <a href="#" className="hover:text-white">
                Technology gadgets in school
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="container mx-auto border-[#3f3e45] mt-20 mb-5" />

      <div className="container mx-auto flex flex-col-reverse justify-between md:flex-row">
        <div>
          <p className="text-[.8rem] text-center">
            Copyright &copy; 2019 - 2023 Keza Education Future Lab. All Rights
            Reserved.
          </p>
        </div>

        <div className="flex gap-3 mb-5">
          <div className="bg-[#333] p-2 w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#555] hover:text-white cursor-pointer">
      
          </div>

          <div className="bg-[#333] p-2 w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#555] hover:text-white cursor-pointer">
         
          </div>

          <div className="bg-[#333] p-2 w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#555] hover:text-white cursor-pointer">
            
          </div>

          <div className="bg-[#333] p-2 w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#555] hover:text-white cursor-pointer">
             
          </div>

          <div className="bg-[#333] p-2 w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#555] hover:text-white cursor-pointer">
              
          </div>

          <div className="bg-[#333] p-2 w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#555] hover:text-white cursor-pointer">

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
