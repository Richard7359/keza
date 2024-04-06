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
export default function Service() {
  const [selected, setSelected] = useState(0);
  const courses = [
    {
      image: robot_image,
      light_image: light_robotics,
      title: "Robotics",
      alt: "robotics image",
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
    {
      image: ai,
      light_image: light_ai,
      title: "Artificial inteligence / AI",
      alt: "artificial inteligence image",
    },
  ];
  return (
    <section className="relative h-[100vh] text-black">
      <h1 className="text-[30px] font-bold flex justify-center m-2">
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
      <div className="flex justify-center">
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
                onClick={() => setSelected(id)}
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
        {/* <div className="flex justify-center"> */}
        {/* <div className="w-[70%] border border-black grid grid-cols-2">
          <Image src={robort} alt="KEFL Logo image" className="w-[500px] mr-2" />
          <div>
            <p>Robotics</p>
            <p>
            Robotics is a technology that encompasses the design, building,
            implementation, and operation of robots. Robotics includes
            applications designed to conduct a specific task or series of
            tasks for commercial purposes
            </p>
            <button>Read more</button>
          </div>
        </div> */}
        <div className="flex justify-center">
          <div className="w-[40%] h-[35vh] border border-black bg-burgundy rounded-lg flex justify-center items-center">
            <div className="w-[90%] h-[80%] flex justify-between">
              <Image
                src={robort2}
                alt="KEFL Logo image"
                className="w-[395px] object-cover rounded-e-lg"
              />
              <Image
                src={robort}
                alt="KEFL Logo image"
                className="w-[260px] h-full rounded-xl"
              />{" "}
            </div>
          </div>
          <div className="ml-[50px] flex items-center">
            <div>
              <p className="font-bold text-3xl mb-4">Robotics</p>
              <p className="max-w-xl">
                Robotics is a technology that encompasses the design, building,
                implementation, and operation of robots. Robotics includes
                applications designed to conduct a specific task or series of
                tasks for commercial purposes
              </p>
              <button className="bg-burgundy rounded-md px-4 py-2 text-white flex items-center my-6">
                Explore more <TbBrandCitymapper className="font-bold size-6 mx-2"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
