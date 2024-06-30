import React from "react";
import Image from "next/image";

import irrigation from "../../../images/Irrigation.png";
import houseInstallation from "../../../images/House-installation@2x.png";
import jumpingRobot from "../../../images/Jumping-robot.png";

const Video3 = () => {
  return (
    <div>
      <main>
        <section className="container mx-auto px-3 md:px-0">
          <div className="flex flex-col items-center text-center my-10 md:mt-20 md:mb-24 px-3 md:p-0">
            <h2 className="font-extrabold text-3xl md:text-5xl md:pr-8">
              A guide on Making a mobile robot using materials you can find
              anywhere
            </h2>
            <p className="text-sm md:text-lg mt-1 text-paragraph">
              By following the below ste-by-step guide, you can make a mobile
              robot on your own using materials you can find anywhere
            </p>
          </div>

          <article className="course grid md:grid-cols-2 md:gap-x-14 md:my-20 px-3 md:px-0">
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/mgBbep7sfXY?si=bKw1QyJlu5Ef11jd"
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

              <br />

              <div className="w-full drop-shadow-md rounded-md border border-badge p-4 text-paragraph">
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 1: Gathering Materials</summary>
                  <p className="py-2">
                    Gathering Materials. For this project you will need
                    <strong>Shaft gear motor</strong>,
                    <strong> 2 plastic wheels with spokes</strong>,
                    <strong>battery holder</strong>, <strong>stick</strong>,
                    <strong>google eye</strong>, <strong>glue gun</strong>,
                    <strong>,and glue stick.</strong>
                  </p>
                </details>
                <hr />

                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 2: Turn the wheel backward</summary>
                  <p className="py-2">
                    Turn the wheel backward, and fit the shaft .
                  </p>
                </details>
                <hr />

                <details className="px-3 py-4 cursor-pointer">
                  <summary>
                    Step 3: Fit the second wheel to the other shaft
                  </summary>
                  <p className="py-2">
                    Fit the second wheel to the other shaft.
                  </p>
                </details>
                <hr />

                <details className="px-3 py-4 cursor-pointer">
                  <summary>
                    Step 4: Apply some hot to connect the motor shaft to the
                    wheel
                  </summary>
                  <p className="py-2">
                    Apply some hot to connect the motor shaft to the wheel.
                  </p>
                </details>
                <hr />

                <details className="px-3 py-4 cursor-pointer">
                  <summary>
                    Step 5: Connect the wires from the battery snap to the
                    terminals
                  </summary>
                  <p className="py-2">
                    Connect the wires from the battery snap to the terminals.
                  </p>
                </details>
                <hr />

                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 6: Adding traction</summary>
                  <p className="py-2">
                    Add traction by squeezing a line of hot glue around only
                    half of the outside of each wheel..
                  </p>
                </details>
                <hr />

                <details className="px-3 py-4 cursor-pointer">
                  <summary>
                    Step 7: Adding a strip of double-sided foam to the tape
                  </summary>
                  <p className="py-2">
                    Put a strip of double-sided foam tape on the top of the
                    gearbox, for sticking on the battery
                  </p>
                </details>
                <hr />

                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 8:Attach the battery to the gearbox</summary>
                  <p className="py-2">
                    Attach the battery to the top of the gearbox.
                  </p>
                </details>
                <hr />

                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 8:Attaching the front legs</summary>
                  <p className="py-2">
                    Attach the front legs by gluing one wooden.
                  </p>
                </details>
                <hr />

                <details className="px-3 py-4 cursor-pointer">
                  <summary>
                    Step 8:Connect battery terminal to the battery
                  </summary>
                  <p className="py-2">
                    Connect one terminal of the battery snap to the battery.
                  </p>
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
                  href="/keza/diy/1"
                  className="inline-block w-full"
                >
                  <Image
                    src={irrigation}
                    alt="Irrigation system example"
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-4">
                  <span className="text-xs text-gray-500">
                    Tinkering & Making
                  </span>
                  <a
                    href="/keza/diy/1"
                    className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                  >
                    A guide on Making and automating water supply irrigation
                    project
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
              href="mailto:?to=keza.info@gmail.com&subject=Subject Here&body=Body text here"
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

export default Video3;
