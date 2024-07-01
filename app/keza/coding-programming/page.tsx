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
          <article className="grid md:grid-cols-2 md:gap-x-14 my-10 px-3 md:px-0">
            <div>
              <Image
                src={interactive}
                alt=""
                className="rounded-md sticky top-0 overflow-hidden"
              />
            </div>
            <div>
              <h3 className="font-bold text-2xl md:text-3xl mb-4 md:mt-0">
                Robotics for kids
              </h3>
              <p className="text-paragraph">
                Robotics is a technology that encompasses the design, building,
                implementation, and operation of robots. Robotics includes
                applications designed to conduct a specific task or series of
                tasks for commercial purposes
              </p>
              <br />
              <p className="text-paragraph">
                When teaching kids coding, programming, robotics and interactive
                engineering, it is important to make the learning process fun
                and engaging. Teachers can use games, puzzles, and other
                interactive activities to help kids learn these skills.
                Additionally, teachers should encourage kids to collaborate with
                each other, share their ideas, and learn from their mistakes. By
                doing so, kids can develop important 21st-century skills that
                will be valuable in their future careers.
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
            {/* <div className="grid md:grid-cols-3 md:grid-rows-3 gap-2 mb-10">
          <!-- Image 1 -->
          <div className="h-60">
            <Image src="/assets/bootcamp.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <!-- image 2 -->
          <div className="h-60">
            <Image src="/assets/bootcamp-image-4.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <!-- Image 3 -->
          <div className="h-60">
            <Image src="/assets/bootcamp.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <!-- Image 4 -->
          <div className="h-60">
            <Image src="/assets/bootcamp.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <!-- Image 5 -->
          <div className="h-60">
            <Image src="/assets/bootcamp-image-4.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <!-- Image 6 -->
          <div className="h-60">
            <Image src="/assets/bootcamp-image-4.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <!-- Image 7 -->
          <div className="h-60">
            <Image src="/assets/bootcamp.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <!-- Image 8 -->
          <div className="h-60">
            <Image src="/assets/bootcamp.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <!-- Image 9 -->
          <div className="h-60">
            <Image src="/assets/bootcamp.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
        </div> */}
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
