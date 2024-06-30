import React from "react";
import Image from "next/image";
import houseInstallation from "../../../images/House-installation@2x.png";
import irrigation from "../../../images/Irrigation.png";
import irrigations from "../../../images/Irrigation.png";

const Video2 = () => {
  return (
    <div>
      <main>
        <section className="container mx-auto px-3 md:px-0">
          <div className="flex flex-col items-center text-center my-10 md:mt-20 md:mb-24 px-3 md:p-0">
            <h2 className="font-extrabold text-3xl md:text-5xl md:pr-8">
              A guide on how to make a house and its installation
            </h2>
            <p className="text-sm md:text-lg mt-1 text-paragraph">
              By following the below ste-by-step guide, you can make your own
              house and its installation using materials you can find anywhere
            </p>
          </div>

          <article className="course grid md:grid-cols-2 md:gap-x-14 md:my-20 px-3 md:px-0">
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Id2K_MMQ1Oo?si=3mOqRzZ6ALr3mLVj"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-md sticky top-0 mb-4 md:mb-0 w-full"
              />
            </div>
            <div className="course_content">
              <h3 className="font-bold text-2xl md:text-3xl mb-4 md:mt-0">
                Steps to follow
              </h3>
              <p className="text-paragraph">
                The approach of tinkering and making electricity will help the
                learner to manage electricity in SET P5 (Unit 15). Click on a
                step to open it.
              </p>
              <br />
              <div className="w-full drop-shadow-md rounded-md border border-badge p-4 text-paragraph">
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 1: Gathering Materials</summary>
                  <p className="py-2">
                    Gathering Materials. For this project you will need
                    <strong>cardboard</strong>, <strong>scissor</strong>,
                    <strong>cutter</strong>, <strong>glue gun</strong>,
                    <strong>glue stick</strong>, <strong>maker</strong>,
                    <strong>ruler</strong>, <strong>battery/dry cells</strong>,
                    <strong>LED</strong>, <strong>wires</strong>,
                    <strong>battery holder</strong>,
                    <strong>,and switch.</strong>
                  </p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 2: Sketching & Planning</summary>
                  <p className="py-2">Sketching & Planning.</p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 3: Measuring Out the Pieces</summary>
                  <p className="py-2">Measuring Out the Pieces.</p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 4: Cut Out Space for the Roof</summary>
                  <p className="py-2">Cut Out Space for the Roof.</p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 5: Assembling the Pieces</summary>
                  <p className="py-2">Assembling the Pieces.</p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 6: Making a Base</summary>
                  <p className="py-2">Making a Base.</p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 7: Measuring Out the Roof</summary>
                  <p className="py-2">Measuring Out the Roof.</p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 8: Making Doors and Windows</summary>
                  <p className="py-2">Making Doors and Windows.</p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 9: Assembling materials</summary>
                  <p className="py-2">
                    Assembling the materials of making a house.
                  </p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 10: Connect the wires to the LED</summary>
                  <p className="py-2">
                    Connect the wires to the LED respectively positive and
                    negative position
                  </p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 11: Connect wires to the switch</summary>
                  <p className="py-2">Connect wires to the switch</p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>
                    Step 12: Connect switch with source of energy
                  </summary>
                  <p className="py-2">Connect switch with source of energy</p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 13: Final product</summary>
                  <p className="py-2">Final product (House) with electricity</p>
                </details>
              </div>
            </div>
          </article>
        </section>
        <section>
          <article className="container mx-auto px-3 mt-20 md:mb-24 md:px-0">
            <div className="text-center md:items-start md:text-left my-10 md:mt-36 md:mb-24 md:p-0">
              <h2 className="font-extrabold text-xl md:text-2xl md:pr-8">
                Other step-by-step guide you might like
              </h2>
              <hr />
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
                    className="w-full h-48 object-cover bg-green"
                  />
                </a>
                <div className="p-4">
                  <span className="text-xs text-gray-500">
                    Tinkering & Making
                  </span>
                  <a
                    href="/DIY/irrigation-system.html"
                    className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                  >
                    A guide on Making and automating water supply irrigation
                    project
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <a
                  href="/DIY/mobile-robot.html"
                  className="inline-block w-full"
                >
                  <Image
                    src={houseInstallation}
                    alt="A simple jumping robot thumbnail"
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-4">
                  <span className="text-xs text-gray-500">
                    Tinkering & Making
                  </span>
                  <a
                    href="/DIY/mobile-robot.html"
                    className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                  >
                    A guide on making a Mobile robot using materials you can
                    find anywhere by yourself
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="container mx-auto my-10 px-3 md:px-0 flex flex-col justify-center items-center">
            <h3 className="font-extrabold text-3xl text-darkGrey text-center md:text-left pt-10 md:pt-0 md:text-4xl md:pr-8">
              Want to be trained?
            </h3>
            <p className="text-paragraph text-center">
              Need more information on how we can train your teachers or
              students
            </p>
            <p className="text-4xl mt-8 animate-bounce">&#128071;&#127998;</p>
            <a
              href="/contact/contact-us.html"
              className="px-10 py-3 bg-deepSkyBlue hover:opacity-80 mt-8 rounded-md text-white"
            >
              Send us a message
            </a>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Video2;
