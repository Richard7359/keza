import React from "react";
import Image from "next/image";
import Robotics_gallery from "../services/engraving/Robotics_gallery";
import coding from "../../images/coding.jpg";
import interactive from "../../images/interactive-engineering-for-kids.jpeg";
import interactive_enginnering from "../../images/interactive_engineering1.png";
import ai from "../../images/AI copy.png";

const page = () => {
  return (
    <div>
      <main>
      <section className="container mx-auto">
      <article className="grid md:grid-cols-2 md:gap-x-14 my-10 px-3 md:px-0">

        <div>
          <Image src={ai} alt="" className="rounded-md sticky top-0 overflow-hidden mb-4 md:mb-0" />
        </div>
        <div>
          <h3 className="font-bold text-2xl md:text-3xl mb-4 md:mt-0">
            Artificial Intelligence for kids
          </h3>
          <p className="text-paragraph">
            At Keza Education Future Lab Ltd, we are dedicated to shaping the
            future of education through innovation and technology. As part of
            our commitment to providing cutting-edge educational solutions, we
            are excited to announce our latest endeavor: the introduction of
            Artificial Intelligence (AI) into the realm of education.
          </p>
          <br />
          <p className="text-paragraph">
            AI has the potential to revolutionize the way we teach and learn,
            offering unprecedented opportunities for personalized, efficient,
            and engaging educational experiences. Through our AI initiative,
            we aim to harness the power of AI to empower both educators and
            students alike.
          </p>
          <br />
          <p className="text-paragraph">
            Here&apos;s what you can expect from our AI-driven education solutions:
          </p>
          <br />
          <ul className="list pl-5 text-paragraph flex flex-col gap-y-4">
            <li>
              <strong>Personalized Learning:</strong> AI algorithms analyze
              individual learning styles and adapt content to meet the unique
              needs of each student, ensuring that learning is tailored to
              maximize understanding and retention.
            </li>

            <li>
              <strong>Intelligent Tutoring:</strong> Our AI-powered virtual
              tutors provide instant feedback, guidance, and support to
              students, fostering a deeper understanding of subjects and
              boosting academic performance.
            </li>

            <li>
              <strong>Data-Driven Insights:</strong> We leverage AI to gather
              and analyze vast amounts of data, enabling educators to make
              informed decisions and tailor their teaching strategies for
              better outcomes.
            </li>

            <li>
              <strong>Gamified Learning:</strong> Engage students through
              interactive and gamified experiences that make learning
              enjoyable while promoting skill development and knowledge
              retention.
            </li>

            <li>
              <strong>Accessibility and Inclusivity:</strong> AI helps us
              create accessible learning materials for all, breaking down
              barriers and ensuring that education is available to everyone,
              regardless of their abilities or circumstances.
            </li>
          </ul>
          <br />
          <p className="text-paragraph">
            Our vision is to create a future where education is not only
            effective but also enjoyable and accessible to all. Join us on
            this exciting journey as we explore the boundless possibilities of
            Artificial Intelligence in education. Together, we will unlock new
            horizons in learning, nurturing the next generation of thinkers,
            innovators, and leaders.
          </p>
        </div>
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
