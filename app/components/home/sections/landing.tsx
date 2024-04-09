"use client";

import Image from "next/image";
import robot_image from "../../../images/robotics.png";
import light_robotics from "../../../images/light_robotics.jpg";
import coding_programming from "../../../images/coding_programming.png";
import light_coding_programming from "../../../images/light_coding_programming.png";
import ai from "../../../images/ai.png";
import light_ai from "../../../images/light_ai.png";
import light_interactive_programming from "../../../images/light_interactive_programming.png";
import interactive_programming from "../../../images/interactive_programming.png";
import Scroling_patners from "./scroling_patners";
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
        <div className="relative w-[95%] h-[70vh] rounded-2xl">
        <video src='/keza_video_original.mp4' autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"/>
        </div>
      </div>
      <Scroling_patners />
      <p className="text-center pt-2"><strong>KEFL</strong> is trusted and partnering with these organizations</p>
    </section>
  );
}
