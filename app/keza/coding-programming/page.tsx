import React from "react";
import Image from "next/image";
import Robotics_gallery from "../services/engraving/Robotics_gallery";
import coding from "../../images/coding.jpg";
import interactive from "../../images/interactive-engineering-for-kids.jpeg";
import interactive_enginnering from "../../images/interactive_engineering1.png";
import ai from "../../images/ai2.png";

const page = () => {
  return (
    <div>
      <main>
        <section className="container mx-auto">
          <div className="flex flex-col items-center text-center md:p-0 md:mb-24">
            <h2 className="font-extrabold text-3xl md:text-4xl md:pr-8">
              Coding and programming
            </h2>
            <p className="text-sm mt-3 text-paragraph">
              KEFL offers comprehensive training programs for both teachers and
              students in the use of Scratch, Turtle Art, and Etoys as
              programming languages. Below are short description of each
            </p>
          </div>

          <article className="grid md:grid-cols-2 md:gap-x-14 my-10 px-3 md:px-0 mb-10">
            <figure>
              {/* <iframe
                className="rounded-md w-full"
                height="315"
                src="https://www.youtube.com/embed/m_iqCFUkCqM?si=29X0p9AVYiW_SY7O"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe> */}
              <iframe
                src="https://www.youtube.com/embed/m_iqCFUkCqM?si=29X0p9AVYiW_SY7O"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-md w-full"
                height="315"
              />
              <figcaption className="text-sm text-center italic mt-1">
                Scratch programming example of two people having conversion
              </figcaption>
            </figure>

            <div>
              <h3 className="font-bold text-2xl mb-4 mt-4 md:mt-0">
                Scracth programming
              </h3>
              <p className="text-paragraph">
                Scratch is a beginner-friendly programming language that allows
                students to create interactive stories, animations, and games by
                snapping together visual code blocks. KEFL&apos;s Scratch
                training equips teachers with the skills to teach coding
                concepts effectively and engage students in creative coding
                projects. For students, Scratch fosters creativity,
                problem-solving, and logical thinking while making coding
                accessible and enjoyable.
              </p>
            </div>
          </article>

          <article className="grid md:grid-cols-2 md:gap-x-14 my-10 px-3 md:px-0">
            <div>
              <h3 className="font-bold text-2xl mb-4 mt-4 md:mt-0">
                Turtle art
              </h3>
              <p className="text-paragraph">
                Turtle Art is a unique programming language that uses a
                graphical interface where students command a turtle to create
                art and designs through simple commands. KEFL&apos;s Turtle Art
                training empowers teachers to guide students in exploring math
                and geometry concepts through artistic expression. Students can
                use Turtle Art to visualize abstract ideas and develop
                algorithmic thinking.
              </p>
            </div>

            <figure>
              {/* <iframe className="rounded-md w-full" height="315"
            src="https://www.youtube.com/embed/NjFuB9TLTaw?si=OpvHddaT1LcicIIX" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe> */}
              <iframe
                src="https://www.youtube.com/embed/NjFuB9TLTaw?si=OpvHddaT1LcicIIX"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-md w-full"
                height="315"
              />
              <figcaption className="text-sm text-center italic mt-1">
                Turtle Art programming example of building a house
              </figcaption>
            </figure>
          </article>

          <article className="grid md:grid-cols-2 md:gap-x-14 my-10 px-3 md:px-0">
            <figure>
              {/* <iframe
                className="rounded-md w-full"
                height="315"
                src="https://www.youtube.com/embed/p-37NB9uCeI?si=udhbwiXDy3VoHIf2"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe> */}
              <iframe
                src="https://www.youtube.com/embed/p-37NB9uCeI?si=udhbwiXDy3VoHIf2"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-md w-full"
                height="315"
              />
              <figcaption className="text-sm text-center italic mt-1">
                Etoys programming example of making a car move in the road
              </figcaption>
            </figure>

            <div>
              <h3 className="font-bold text-2xl mb-4 mt-4 md:mt-0">Etoys</h3>
              <p className="text-paragraph">
                Etoys is an educational programming environment that enables
                students to create interactive simulations, games, and
                multimedia projects. KEFL&apos;s Etoys training equips teachers
                with the tools to incorporate multimedia and interactive content
                into their curriculum. Etoys encourages students to experiment,
                collaborate, and learn through hands-on digital creation.
              </p>
            </div>
          </article>
        </section>

        <section>
          <article className="container mx-auto px-3  md:px-0">
            <div className="flex flex-col items-center text-center my-10 md:mt-16 md:mb-14 md:p-0">
              <h2 className="font-extrabold text-3xl md:text-5xl md:pr-8">
                Robotics garelly
              </h2>
              <p className="text-sm mt-1 text-paragraph text-center">
                Young leaners at in the robotics className practicing making of
                robots
              </p>
            </div>
            <Robotics_gallery />
          </article>
        </section>

        <section className="my-10">
          <article className="container mx-auto px-3 md:px-0">
            <div className="mt-20">
              <h4 className="mb-3 font-bold text-xl md:text-2xl">
                Other courses you might like
              </h4>
              <hr className="border-[#3f3e45] mb-10" />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <a
                href="./coding-and-programming.html"
                className="flex flex-col gap-5 shadow-2xl px-3 py-5"
              >
                <Image
                  src={coding}
                  alt=""
                  className="rounded-md w-full md:h-[154px] object-cover"
                />
                <h3 className="font-semibold">Coding & Programming</h3>
                <p className="font-normal text-paragraph text-xs">
                  Coding and programming, a great course for kids to improve
                  their logical and critical thinking that absolutely help them
                  to understand Math and other critical courses easily.
                </p>
              </a>

              <a
                href="./interactive-engineering.html"
                className="flex flex-col gap-5 shadow-2xl px-3 py-5"
              >
                <Image
                  src={interactive_enginnering}
                  alt=""
                  className="rounded-md w-full md:h-[154px] object-cover"
                />
                <h3 className="font-semibold">Interactive Engineering</h3>
                <p className="font-normal text-paragraph text-xs">
                  Interactive engineering, a great course for kids that helps
                  them build and control their own robot.
                </p>
              </a>

              <a
                href="./artificial-intelligence.html"
                className="flex flex-col gap-5 shadow-2xl px-3 py-5"
              >
                <Image
                  src={ai}
                  alt=""
                  className="rounded-md w-full md:h-[154px] object-cover"
                />
                <h3 className="font-semibold">Artificial Intelligence</h3>
                <p className="font-normal text-paragraph text-xs">
                  Artificial Intelligence or AI in short is a great course for
                  kids that helps them build and let a robot control itsefl.
                </p>
              </a>
            </div>
          </article>
          {/* 
      <div className="flex justify-center my-10">
        <a href="./all-courses.html"
          className="border border-burgundy rounded-md px-28 py-3 text-burgundy hover:bg-burgundy hover:bg-opacity-10 transition duration-300">View
          more courses</a>
      </div> */}
        </section>
      </main>
    </div>
  );
};

export default page;
