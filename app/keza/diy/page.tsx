import React from "react";
import Image from "next/image";
import Navigation from "@/app/components/Navigation_bar/Navigation";
import Footer from "@/app/components/Footer";
import Boot_camp_image from "../../images/bootcamp copy.jpg";
import Ecd from "../../images/TrafficLight/ECD.jpg";
import Coding from "../../images/coding.jpg";
import Interactive_programming from "../../images/interactive-engineering-for-kids.jpeg";
import Robotics from "../../images/robotics-for-kids.jpg";
import Artiffial_inteligence from "../../images/artificial_intelence1.png";
import Ichigo from "../../images/ichigojam.jpg";
import irrigation from "../../images/Irrigation.png";
import houseInstallation from "../../images/House-installation@2x.png";
import jumpingRobot from "../../images/Jumping-robot.png";
import News_Letter from "../../images/news-letter-img.svg";

const page = () => {
  return (
    <div >
      <main>
        <section>
          <article className="container mx-auto px-3 md:px-0">
            <div className="flex flex-col items-center text-center my-10 md:mt-20 md:mb-24 px-3 md:p-0">
              <h2 className="font-extrabold text-3xl md:text-4xl xl:text-5xl md:pr-8">
                A Do It Yourself / DIY tutorials by
                <strong className="text-burgundy">KEFL</strong>
              </h2>
              <p className="text-sm md:text-lg mt-1 text-paragraph">
                By following each steps without missing any step you can make
                any project listed below by yourself
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <a
                  href="/keza/diy/2"
                  className="inline-block w-full"
                >
                  <Image
                    src={irrigation}
                    alt="Irrigation project"
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-4">
                  <span className="text-xs text-gray-500">
                    Tinkering & Making
                  </span>
                  <a
                    href="/keza/diy/2"
                    className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                  >
                    A guide on Making and automating water supply irrigation
                    system
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <a
                  href="/keza/diy/2"
                  className="inline-block w-full"
                >
                  <Image
                    src={houseInstallation}
                    alt="A thumbnail of a house and its installation for kids"
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-4">
                  <span className="text-xs text-gray-500">
                    Tinkering & Making
                  </span>
                  <a
                    href="/keza/diy/2"
                    className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                  >
                    A guide on how to make a house and its installation
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <a
                  href="/keza/diy/3"
                  className="inline-block w-full"
                >
                  <Image
                    src={jumpingRobot}
                    alt="A simple jumping robot thumbnail"
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-4">
                  <span className="text-xs text-gray-500">
                    Tinkering & Making
                  </span>
                  <a
                    href="/keza/diy/3"
                    className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                  >
                    A guide on making a Mobile robot using materials you can
                    find anywhere by yourself
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center my-10 md:mt-20 md:mb-24 px-3 md:p-0">
              <h2 className="font-extrabold text-3xl md:text-4xl xl:text-5xl md:pr-8">
                Want to be the first to recieve new project released?
              </h2>
              <p className="text-sm md:text-lg mt-1 text-paragraph">
                By subscribing to our mailing list, you will be able to recieve
                the new project released on different courses first.
              </p>
            </div>

            <section className="mb-10">
              <article className="container mx-auto bg-deepSkyBlue rounded-md pt-5">
                <div className="p-5 grid md:grid-cols-2 md:gap-8">
                  <div>
                    <div className="flex gap-4 justify-center items-center md:justify-start">
                      <Image
                        src={News_Letter}
                        alt="news letter"
                        width={40}
                        height={40}
                      />
                      <h3 className="font-bold text-4xl md:text-5xl text-white text-center md:text-left pt-10 md:pt-0 md:pr-8">
                        Newsletter
                      </h3>
                    </div>
                    <p className="text-white text-center md:text-left my-7">
                      Subscribe to our robitcs, coding & programming, and
                      thinkering & making newsletter where we share tech related
                      tips for children, news, and DIY to learn.
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center">
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
          </article>
        </section>
      </main>
    </div>
  );
};

export default page;
