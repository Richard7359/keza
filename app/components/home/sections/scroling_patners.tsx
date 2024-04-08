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
export default function Scroling_patners() {
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
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image
              src={courses[0].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
          <li>
            <Image
              src={courses[0].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
          <li>
            <Image
              src={courses[0].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
          <li>
            <Image
              src={courses[0].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
          <li>
            <Image
              src={courses[0].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
          <li>
            <Image
              src={courses[1].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
          <li>
            <Image
              src={courses[2].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
          <li>
            <Image
              src={courses[3].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <Image
              src={courses[0].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
          <li>
            <Image
              src={courses[0].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
          <li>
            <Image
              src={courses[0].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
          <li>
            <Image
              src={courses[0].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
          <li>
            <Image
              src={courses[0].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
          <li>
            <Image
              src={courses[1].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
          <li>
            <Image
              src={courses[2].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
          <li>
            <Image
              src={courses[3].image}
              alt={courses[0].alt}
              className="w-[100px] mr-2"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
