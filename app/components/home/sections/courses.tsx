"use client";

import Image from "next/image";
import robot_image from "../../../images/robotics.png";
import light_robotics from "../../../images/light_robotics.jpg";
import { useState } from "react";
import coding_programming from "../../../images/coding_programming.png";
import light_coding_programming from "../../../images/light_coding_programming.png";
import ai from "../../../images/ai.png";
import light_ai from "../../../images/light_ai.png";
import light_interactive_programming from "../../../images/light_interactive_programming.png";
import interactive_programming from "../../../images/interactive_programming.png";
import { TbBrandCitymapper } from "react-icons/tb";
import ai1 from "../../../images/artificial_intelence1.png";
import ai2 from "../../../images/ai2.png";
import bootCamp from "../../../images/bootcamp-image-4.jpg";
import bootCamp1 from "../../../images/bootcamp-image-3.jpg";
import robotics from "../../../images/keza_kit1.png";
import keza_child from "../../../images/keza_child.png";
import ichigo from "../../../images/child_ichigo.png";
import bootcamp2 from "../../../images/bootcamp.jpg";
import Title from "../../Title";

export default function Courses() {
  const [selected, setSelected] = useState(0);
  const courses = [
    {
      image: robot_image,
      light_image: light_robotics,
      title: "Robotics",
      alt: "robotics image",
    },
    {
      image: interactive_programming,
      light_image: light_interactive_programming,
      title: "intercative engineering",
      alt: "intercative engineering image",
    },
    {
      image: coding_programming,
      light_image: light_coding_programming,
      title: "coding & programming",
      alt: "coding & programming image",
    },
    {
      image: ai,
      light_image: light_ai,
      title: "Artificial inteligence",
      alt: "artificial inteligence image",
    },
  ];
  const services = [
    {
      title: "Robotics",
      description:
        "Robotics is a technology that encompasses the design, building, implementation, and operation of robots. Robotics includes applications designed to conduct a specific task or series of tasks for commercial purposes",
      images: [
        {
          src: robotics,
          alt: "",
          style: "w-[60%] h-[100%] object-cover rounded-xl bg-white",
          link: "",
        },
        {
          src: keza_child,
          alt: "",
          style: "w-[40%] h-[100%] h-full rounded-xl",
          link: "",
        },
      ],
    },
    {
      title: "Interactive engineering",
      images: [
        {
          src: bootCamp,
          alt: "",
          style: "w-[60%] h-[100%] object-cover rounded-xl",
          link: "",
        },
        {
          src: bootCamp1,
          alt: "",
          style: "w-[40%] h-[100%] h-full rounded-xl",
          link: "",
        },
      ],
      description:
        "Interactive engineering involves hardware to create projects like robots or circuits. It uses sensors, microcontrollers, e.g., Arduino, for interactive systems. Teaching kids coding, robotics, and engineering should be engaging, using games and collaboration. This fosters 21st-century skills for their future careers.",
    },
    {
      title: "Coding & Programming",
      description:
        "Coding is about creating instructions for computers using programming languages. For children, starting with block-based languages like Scratch helps build foundational skills through drag-and-drop code blocks. Programming involves making software and games, taught to kids through languages like Turtle Art and Scratch, fostering web app and game creation.",
      images: [
        {
          src: bootcamp2,
          alt: "",
          style: "w-[60%] h-[100%] object-cover rounded-xl",
          link: "",
        },
        {
          src: ichigo,
          alt: "",
          style: "w-[40%] h-[100%] h-full rounded-xl",
          link: "",
        },
      ],
    },
    {
      title: "Artificial intelligence / AI",
      images: [
        {
          src: ai1,
          alt: "",
          style: "w-[60%] h-[100%] object-cover rounded-xl",
          link: "",
        },
        {
          src: ai2,
          alt: "",
          style: "w-[40%] h-[100%] h-full rounded-xl",
          link: "",
        },
      ],
      description:
        "AI has the potential to revolutionize the way we teach and learn, offering unprecedented opportunities for personalized, efficient, and engaging educational experiences. Through our AI initiative, we aim to harness the power of AI to empower both educators and students alike.",
    },
  ];
  return (
    <section className="relative mb-8 text-black mx-3">
      <div className="flex justify-center pt-12">
        <Title title="courses" />
      </div>
      <h1 className="text-[20px] md:text-[30px] font-bold pb-4 text-center">
        Guided courses for every journey
      </h1>
      <div className="flex justify-center">
        {" "}
        <p className="hidden md:block mt-1 text-gray-500 dark:text-gray-300 text-center max-w-2xl font-serif">
          Welcome to a world where coding and robotics ignite young minds and
          shape the future. Our coding and robotics programs inspire young minds
          to think critically and creatively. Join us in shaping the future of
          technology. Let&apos;s code and build together.
        </p>
      </div>
      <div className="md:m-6 grid grid-cols-2 md:flex md:justify-center">
        {courses.map((course, id) => {
          return (
            <>
              <div
                className={`cursor-pointer font-medium flex items-center border ${
                  id == selected
                    ? "border-burgundy border-[2px]"
                    : "border-black"
                } ${
                  id == selected && "bg-burgundy-light"
                } md:w-[300px] p-2 rounded-md m-2`}
                onClick={() => setSelected(id < services.length ? id : 0)}
              >
                {" "}
                <Image
                  src={id == selected ? course.light_image : course.image}
                  alt={course.alt}
                  className="w-8 mr-2"
                />
                <p>{course.title}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="">
        <div className="md:flex md:justify-center">
        <div className="w-[100%] h-[18vh] md:w-[45%]  md:h-[35vh] border rc rounded-lg flex justify-center items-center robot_container">
        {/* <div className="w-[100%] h-[18vh] md:w-[45%]  md:h-[35vh] border rc bg-gradient-to-r from-sky-200 to-red-100 py-20 rounded-lg flex justify-center items-center robot_container"> */}
            {/* <div className="w-[100%] h-[18vh] md:w-[45%]  md:h-[35vh] border border-black bg-burgundy rounded-lg flex justify-center items-center robot_container"> */}
              <div className="w-[95%] h-[16vh] md:h-[30vh] flex gap-2 md:gap-4">
                {services[selected].images.map((image, id) => {
                  return (
                    <Image
                      key={id}
                      src={image.src}
                      alt={image.alt}
                      className={image.style}
                    />
                  );
                })}{" "}

            </div>
          </div>
          <div className="md:ml-[50px] flex items-center">
            <div>
              <p className="font-bold text-3xl mb-4">
                {services[selected].title}
              </p>
              <p className="max-w-xl ">{services[selected].description}</p>
              <button className="bg-burgundy bg-deepSkyBlue rounded-md px-4 py-2 text-white flex items-center my-6">
                Explore more{" "}
                <TbBrandCitymapper className="font-bold size-6 mx-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
