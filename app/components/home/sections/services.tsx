"use client";

import Image from "next/image";
import keza_logo from "../../images/burgundy-logo.webp";
import down_arrow from "../../images/chevron-down.svg";
import robot_image from "../../../images/robotics.png";
import light_robotics from "../../../images/light_robotics.jpg";
import { useState } from "react";
export default function Service() {
  const [selected, setSelected] = useState(0);
  const courses = [
    {
      image: robot_image,
      light_image: light_robotics,
      title: "Robotics",
    },
    {
      image: robot_image,
      light_image: light_robotics,
      title: "coding & programming",
    },
    {
      image: robot_image,
      light_image: light_robotics,
      title: "intercative engineering",
    },
    {
      image: robot_image,
      light_image: light_robotics,
      title: "Artificial inteligence / AI",
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
                {/* <div className="flex items-center border border-black w-[300px] p-2 rounded-md m-2"> */}
                <Image
                  src={id == selected ? course.light_image : course.image}
                  alt="KEFL Logo image"
                  className="w-8 mr-2"
                />
                <p>{course.title}</p>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
