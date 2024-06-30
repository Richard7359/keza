import React from "react";
import Image from "next/image";
import Boot_camp_image from "../../images/bootcamp copy.jpg";
import Ecd from "../../images/TrafficLight/ECD.jpg";
import Coding from "../../images/coding.jpg";
import Interactive_programming from "../../images/interactive-engineering-for-kids.jpeg";
import Robotics from "../../images/robotics-for-kids.jpg";
import Artiffial_inteligence from "../../images/artificial_intelence1.png";
import Ichigo from "../../images/ichigojam.jpg";
import News_Letter from "../../images/news-letter-img.svg";

const page = () => {
  return (
    <div>
      <section className="container mx-auto px-5 py-10 md:px-0">
        <article className="container mx-auto">
          <div className="flex flex-col items-center px-5 mb-8 md:p-0 md:mb-10">
            <h2 className="font-extrabold text-3xl md:text-4xl md:pr-8">
              Blogs
            </h2>
            <p className="text-sm mt-1 text-paragraph text-center">
              Overview of the articles and news here at KEFL
            </p>
          </div>

          <div className="grid md:grid-cols-3 mb-10 shadow-sm md:hover:shadow-2xl">
            <a
              href="/keza/blogs/1"
              className="inline-block w-full col-span-2 p-4"
            >
              <Image
                src={Boot_camp_image}
                alt="Blog Image"
                className="w-full h-52 md:h-80 object-cover rounded-md"
              />
            </a>
            <div className="p-4">
              <span className="text-xs text-gray-500">
                Coding & programming
              </span>
              <a
                href="/keza/blogs/1"
                className="inline-block text-lg md:text-2xl font-bold mt-2 hover:underline hover:underline-offset-8"
              >
                KEFL Ltd Empower&apos;s Future Innovators Boot Camp: Nurturing
                Young Minds for technology Excellence
              </a>
              <span className="inline-block text-gray-400 text-xs">
                23 August, 2023
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <a href="#" className="inline-block w-full">
                <Image
                  src={Ecd}
                  alt="Blog Image"
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4">
                <span className="text-xs text-gray-500">
                  ICT devices in schools
                </span>
                <a
                  href="#"
                  className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                >
                  KFEL donates 30 teblets to students at ECD Kimihurura to help
                  the learn ICT
                </a>
                <span className="inline-block text-gray-400 text-xs">
                  23 August, 2023
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <a href="#" className="inline-block w-full">
                <Image
                  src={Coding}
                  alt="Blog Image"
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4">
                <span className="text-xs text-gray-500">
                  Coding & programming
                </span>
                <a
                  href=""
                  className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                >
                  Coding and programming for kids
                </a>
                <span className="inline-block text-gray-400 text-xs">
                  23 August, 2023
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <a href="#" className="inline-block w-full">
                <Image
                  src={Artiffial_inteligence}
                  alt="Blog Image"
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4">
                <span className="text-xs text-gray-500">
                  Coding & programming
                </span>
                <a
                  href=""
                  className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                >
                  Coding and programming for kids
                </a>
                <span className="inline-block text-gray-400 text-xs">
                  23 August, 2023
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <a href="#" className="inline-block w-full">
                <Image
                  src={Ichigo}
                  alt="Blog Image"
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4">
                <span className="text-xs text-gray-500">
                  Coding & programming
                </span>
                <a
                  href="#"
                  className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                >
                  Coding and programming for kids
                </a>
                <span className="inline-block text-gray-400 text-xs">
                  23 August, 2023
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <a href="#" className="inline-block w-full">
                <Image
                  src={Coding}
                  alt="Blog Image"
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4">
                <span className="text-xs text-gray-500">
                  Coding & programming
                </span>
                <a
                  href="#"
                  className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                >
                  Coding and programming for kids
                </a>
                <span className="inline-block text-gray-400 text-xs">
                  23 August, 2023
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <a href="#" className="inline-block w-full">
                <Image
                  src={Coding}
                  alt="Blog Image"
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4">
                <span className="text-xs text-gray-500">
                  Coding & programming
                </span>
                <a
                  href="#"
                  className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                >
                  Coding and programming for kids
                </a>
                <span className="inline-block text-gray-400 text-xs">
                  23 August, 2023
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <a href="#" className="inline-block w-full">
                <Image
                  src={Coding}
                  alt="Blog Image"
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4">
                <span className="text-xs text-gray-500">
                  Coding & programming
                </span>
                <a
                  href=""
                  className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                >
                  Coding and programming for kids
                </a>
                <span className="inline-block text-gray-400 text-xs">
                  23 August, 2023
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <a href="#" className="inline-block w-full">
                <Image
                  src={Interactive_programming}
                  alt="Blog Image"
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4">
                <span className="text-xs text-gray-500">
                  Coding & programming
                </span>
                <a
                  href="#"
                  className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                >
                  Coding and programming for kids
                </a>
                <span className="inline-block text-gray-400 text-xs">
                  23 August, 2023
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <a href="#" className="inline-block w-full">
                <Image
                  src={Robotics}
                  alt="Blog Image"
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4">
                <span className="text-xs text-gray-500">
                  Coding & programming
                </span>
                <a
                  href="#"
                  className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                >
                  Coding and programming for kids
                </a>
                <span className="inline-block text-gray-400 text-xs">
                  23 August, 2023
                </span>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="mb-10">
        <article className="container mx-auto bg-deepSkyBlue rounded-md pt-10">
          <div className="px-5 grid md:grid-cols-2 gap-10">
            <div>
              <div className="flex gap-4 justify-center items-center md:justify-start">
                <Image
                  src={News_Letter}
                  alt="news letter"
                  width={30}
                  height={30}
                />
                <h3 className="font-bold text-2xl md:text-3xl text-white text-center md:text-left pt-10 md:pt-0 md:pr-8">
                  Newsletter
                </h3>
              </div>
              <p className="text-white text-center md:text-left my-7">
                Sign up for KEFL news letter to be the first to know the updates
                in thec world of children, and upcomings of KEFL
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Type your email address here"
                className="w-full p-3 rounded-md outline-none focus:border focus:border-darkGrey"
              />
              <button className="w-full py-3 bg-darkGrey hover:bg-black text-white mt-5 rounded-full">
                Send
              </button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default page;
