"use client";

import Image from "next/image";
import robot_image from "../../../images/robotics.png";
import light_robotics from "../../../images/light_robotics.jpg";
import { useState } from "react";
import coding_programming from "../../../images/coding_programming.png";
import light_coding_programming from "../../../images/light_coding_programming.png";
// import image from "../../../images/image.png"
import ai from "../../../images/ai.png";
import light_ai from "../../../images/light_ai.png";
import light_interactive_programming from "../../../images/light_interactive_programming.png";
import interactive_programming from "../../../images/interactive_programming.png";
import robort from "../../../images/robotic_image5.png";
import robort2 from "../../../images/robot.svg";
import { TbBrandCitymapper } from "react-icons/tb";
import coding_programming_service from "../../../images/coding-programming.jpg";
import robot_arm from "../../../images/coding.png";
import interactive_engineering from "../../../images/interactive-engineering.jpg";
import interactive_engineering1 from "../../../images/interactive_engineering1.png";
import ai1 from "../../../images/artificial_intelence1.png";
import ai2 from "../../../images/ai2.png";
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
      image: ai,
      light_image: light_ai,
      title: "Artificial inteligence / AI",
      alt: "artificial inteligence image",
    },
    {
      image: coding_programming,
      light_image: light_coding_programming,
      title: "coding & programming",
      alt: "coding & programming image",
    },
    {
      image: interactive_programming,
      light_image: light_interactive_programming,
      title: "intercative engineering",
      alt: "intercative engineering image",
    },
  ];
  const services = [
    {
      title: "Robotics",
      description:
        "Robotics is a technology that encompasses the design, building, implementation, and operation of robots. Robotics includes applications designed to conduct a specific task or series of tasks for commercial purposes",
      images: [
        {
          src: robort2,
          alt: "",
          style: "w-[450px] object-cover rounded-e-lg",
          link: "",
        },
        {
          src: robort,
          alt: "",
          style: "w-[280px] h-full rounded-xl",
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
          style: "w-[450px] object-cover rounded-e-lg",
          link: "",
        },
        {
          src: ai2,
          alt: "",
          style: "w-[280px] h-full rounded-xl",
          link: "",
        },
      ],
      description:
        "AI has the potential to revolutionize the way we teach and learn, offering unprecedented opportunities for personalized, efficient, and engaging educational experiences. Through our AI initiative, we aim to harness the power of AI to empower both educators and students alike.",
    },
    {
      title: "Coding & Programming",
      description:
        "Coding is about creating instructions for computers using programming languages. For children, starting with block-based languages like Scratch helps build foundational skills through drag-and-drop code blocks. Programming involves making software and games, taught to kids through languages like Turtle Art and Scratch, fostering web app and game creation.",
      images: [
        {
          src: coding_programming_service,
          alt: "",
          style: "w-[450px] object-cover rounded-e-lg",
          link: "",
        },
        {
          src: robot_arm,
          alt: "",
          style: "w-[280px] h-full rounded-xl",
          link: "",
        },
      ],
    },
    {
      title: "Interactive engineering",
      images: [
        {
          src: interactive_engineering1,
          alt: "",
          style: "w-[450px] object-cover rounded-e-lg",
          link: "",
        },
        {
          src: interactive_engineering,
          alt: "",
          style: "w-[280px] h-full rounded-xl",
          link: "",
        },
      ],
      description:
        "Interactive engineering involves hardware to create projects like robots or circuits. It uses sensors, microcontrollers, e.g., Arduino, for interactive systems. Teaching kids coding, robotics, and engineering should be engaging, using games and collaboration. This fosters 21st-century skills for their future careers.",
    },
  ];
  return (
    <section className="relative h-[100vh] text-black bg-orange-500">
      <h1 className="text-[30px] font-bold flex justify-center pt-12 pb-4">
        Guided courses for every journey
      </h1>
      <div className="flex justify-center">
        {" "}
        <p className="mt-1 text-paragraph text-center max-w-2xl">
          Welcome to a world where coding and robotics ignite young minds and
          shape the future. Our coding and robotics programs inspire young minds
          to think critically and creatively. Join us in shaping the future of
          technology. Let&apos;s code and build together.
        </p>
      </div>
      <div className="flex justify-center m-6">
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
                } w-[300px] p-2 rounded-md m-2`}
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
        <div className="flex justify-center">
          <div className="w-[45%] h-[35vh] border border-black bg-burgundy rounded-lg flex justify-center items-center robot_container">
            <div className="w-[90%] h-[80%] flex justify-between">
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
          <div className="ml-[50px] flex items-center">
            <div>
              <p className="font-bold text-3xl mb-4">
                {services[selected].title}
              </p>
              <p className="max-w-xl">{services[selected].description}</p>
              <button className="bg-burgundy rounded-md px-4 py-2 text-white flex items-center my-6">
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
