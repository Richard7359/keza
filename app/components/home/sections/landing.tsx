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
export default function Landing() {
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
  return (
    <section className="w-[100%]">
      <div className="flex justify-center mt-2">
        <div className="relative w-[95%] h-[70vh] bg-lime-300 rounded-2xl">
        <video src='/keza_video_original.mp4' autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"/>
        </div>
      </div>
      {/* <div className="m-4 flex">
        {courses.map((course, index) => {
          return (
            <Image
              key={index}
              src={course.image}
              alt={course.alt}
              className="w-[300px] mr-2"
            />
          );
        })}
      </div> */}
    </section>
  );
}
