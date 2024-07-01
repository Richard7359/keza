import React from "react";
import Image from "next/image";
import Robotics_gallery from "../services/engraving/Robotics_gallery";
import coding from "../../images/coding.jpg";
import interactive from "../../images/interactive-engineering-for-kids.jpeg";
import interactive_enginnering from "../../images/bootcamp-image-4.jpg";
import ai from "../../images/ai2.png";

const page = () => {
  return (
    <div>
      <main>
        <section className="container mx-auto">
          <article className="grid md:grid-cols-2 md:gap-x-14 my-10">
            <div>
              <Image
                src={interactive_enginnering}
                alt=""
                className="w-full md:h-3/5 object-cover rounded-md sticky top-0 overflow-hidden"
              />
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-4">
                Interative Engineering
              </h3>
              <p className="text-paragraph">
                Interactive engineering involves the use of hardware components
                to create interactive projects, such as robots or electronic
                circuits. Interactive Engineering: Interactive engineering
                involves creating interactive systems, devices, and environments
                using sensors, actuators, and microcontrollers. Teachers can
                introduce kids to interactive engineering by using programmable
                electronic devices like Arduino which can be used to create a
                wide range of interactive projects such as robots, smart home
                systems, and wearable devices To teach kids aged 3 to 14 about
                coding, programming, robotics and interactive engineering,
                it&apos;s important to make the learning experience fun and
                engaging.
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

          <article className="grid md:grid-cols-2 md:gap-x-14 my-10">
            <div>
              <h3 className="font-bold text-2xl mb-4">Tinkering and making</h3>
              <p className="text-paragraph">
                KEFL is a pioneering educational program that empowers both
                teachers and children with the skills and knowledge needed to
                excel in the fields of robotics and interactive engineering. At
                its core, KEFL is built upon the innovative approach of Making
                and Tinkering as the primary methodology for fostering learning.
              </p>
              <br />
              <p className="text-paragraph">
                In this program, teachers are equipped with the tools and
                training necessary to guide young learners through a hands-on,
                experiential journey. Through play-based learning, children are
                encouraged to explore, experiment, and create, all while
                developing a deep understanding of robotics and interactive
                engineering concepts. KEFL&apos;s approach fosters creativity,
                problem-solving abilities, and a strong foundation in STEM
                (Science, Technology, Engineering, and Mathematics) education.
              </p>
              <br />
              <p className="text-paragraph">
                By embracing Making and Tinkering, KEFL not only makes learning
                enjoyable but also prepares children for a future where
                technology and engineering play increasingly significant roles.
                This program ignites a passion for learning and innovation,
                ensuring that the next generation is well-prepared to tackle the
                challenges of tomorrow&apos;s world.
              </p>
              <br />
              <p className="text-paragraph">
                At KEFL, we offer comprehensive training programs for both
                teachers and children in the exciting fields of robotics and
                interactive engineering. Our unique approach centers around the
                use of &apos;Making&apos; and &apos;Tinkering&apos; as
                methodologies within Play-Based Learning. Through hands-on
                activities and creative exploration, we empower educators to
                effectively teach these subjects while fostering a sense of
                curiosity and innovation in young minds. Our programs not only
                equip teachers with the necessary skills but also engage
                children in fun and educational experiences that inspire a
                lifelong passion for STEM (Science, Technology, Engineering, and
                Mathematics) subjects
              </p>
            </div>
            <div>
              <Image
                src={interactive_enginnering}
                alt=""
                className="w-full md:h-3/5 object-cover rounded-md sticky top-0 overflow-hidden"
              />
            </div>
          </article>

          <p className="text-paragraph">
            KEFL&apos;s training programs aim to enhance educators&apos;
            capabilities and inspire students to embrace coding as a means of
            expression and problem-solving. By mastering these programming
            languages, both teachers and students can unlock a world of creative
            and educational possibilities in the digital realm.
          </p>
        </section>

        <section>
          <article className="container mx-auto px-3  md:px-0">
            <div className="flex flex-col items-center text-center my-10 md:mt-16 md:mb-14 md:p-0">
              <h2 className="font-extrabold text-3xl md:text-4xl md:pr-8">
                Young learners in tinkering and making
              </h2>
              <p className="text-sm mt-1 text-paragraph">
                Testimonials of the kids actively practicing interactive
                engineering
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
