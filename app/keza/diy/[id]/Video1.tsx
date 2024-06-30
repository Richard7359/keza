import React from "react";
import Image from "next/image";

const Video1 = () => {
  return (
    <div>
      <main>
        <section className="container mx-auto px-3 md:px-0">
          <div className="flex flex-col items-center text-center my-10 md:mt-20 md:mb-24 px-3 md:p-0">
            <h2 className="font-extrabold text-3xl md:text-5xl md:pr-8">
              A guide on Making and automating water supply irrigation system
            </h2>
            <p className="text-sm md:text-lg mt-1 text-paragraph">
              By following the below ste-by-step guide, you can make your own
              irrigation system using materials you can find anywhere
            </p>
          </div>

          <article className="course grid md:grid-cols-2 md:gap-x-14 md:my-20 px-3 md:px-0">
            <div>
              {/* <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/vv5fhFJeNr8?si=B3rtVyarCfjE48-M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className="rounded-md sticky top-0 mb-4 md:mb-0 w-full"
              ></iframe> */}
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/vv5fhFJeNr8?si=B3rtVyarCfjE48-M"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-md sticky top-0 mb-4 md:mb-0 w-full"
              />
              {/* <iframe
                src="https://www.youtube.com/watch?v=gfU1iZnjRZM"
                frameBorder="0"
                allowFullScreen 
              /> */}
            </div>

            <div className="course_content">
              <h3 className="font-bold text-2xl md:text-3xl mb-4 md:mt-0">
                Steps to follow
              </h3>

              <h4 className="font-bold text-paragraph">
                The need for Irrigation System
              </h4>
              <p className="text-paragraph">
                Discuss why we need irrigation. Explain that sometimes it
                doesn&apos;t rain enough, and plants need water to grow. Show
                pictures or simple diagrams of dry land and healthy plants to
                illustrate the difference.Discuss the benefits of irrigation,
                such as helping plants grow strong and healthy, ensuring a good
                harvest, and providing food for people and animals.
              </p>
              <br />

              <div className="w-full drop-shadow-md rounded-md border border-badge p-4 text-paragraph">
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 1: Gathering Materials</summary>
                  <p className="py-2"></p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 2: Cutting a bottle</summary>
                  <p className="py-2">Cutting a bottle.</p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 3: Connect pipe to the immersible pump</summary>
                  <p className="py-2">Connect pipe to the immersible pump.</p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 4: Put water into cutting bottle</summary>
                  <p className="py-2">Put water into cutting bottle.</p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 5: Pipe to the immersible pump</summary>
                  <p className="py-2">
                    Pipe to the immersible pump put into cutting bottle that
                    contain water.
                  </p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 6: Preparation dry land</summary>
                  <p className="py-2">Preparation dry land.</p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>
                    Step 7: Coonect immersible pump to the battery
                  </summary>
                  <p className="py-2">
                    Battery holder with switch connect immersible pump
                  </p>
                </details>
                <hr />
                <details className="px-3 py-4 cursor-pointer">
                  <summary>Step 8: Start your irrigation process</summary>
                  <p className="py-2">
                    Irrigation process start by switch on .
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
                  href="/DIY/house-installation.html"
                  className="inline-block w-full"
                >
                  <Image
                    src="/assets/House-installation.png"
                    alt="Irrigation project"
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-4">
                  <span className="text-xs text-gray-500">
                    Tinkering & Making
                  </span>
                  <a
                    href="/DIY/house-installation.html"
                    className="inline-block text-lg font-semibold mt-2 hover:underline hover:underline-offset-8"
                  >
                    A guide on how to make a house and its installation
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <a
                  href="/DIY/mobile-robot.html"
                  className="inline-block w-full"
                >
                  <Image
                    src="/assets/Jumping-robot.png"
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

export default Video1;
