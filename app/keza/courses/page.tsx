"use client";

import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation_bar/Navigation";
import Footer from "../../components/Footer";
import Link from "next/link";
import { FiDatabase } from "react-icons/fi";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { GiBookshelf } from "react-icons/gi";
import CourseCard from "../../components/courseCard";
import TrafficLight from "../../images/keza-traffic-light.png";
import useGetCourse from "@/app/hooks/courses/usegGetCourse";
import { Badge } from "@/components/ui/badge";

const Page = () => {
  const [selected, setSelected] = useState("all");
  const { data, isLoading } = useGetCourse();

  useEffect(() => {
    console.log("all Courses", data);
  });

  return (
    <>
      <div className="bg-[#f7f8fa]">
        <Navigation />
        <div className="md:min-h-screen">
          <div className="flex justify-center ">
            <div className="my-6 w-[97%] bg-white py-6 px-6 rounded-keza border-custom border-custom">
              <Breadcrumb>
                <BreadcrumbList className="">
                  <BreadcrumbItem
                    onClick={() => setSelected("all")}
                    className={`cursor-pointer text-all font-bold  px-4 py-1 border border-transparent hover:border-all hover:bg-all ${
                      selected == "all" && "border-all bg-all bg-opacity-5"
                    } hover:bg-opacity-5 rounded-full`}
                  >
                    <BreadcrumbLink>
                      <Link href="">All levels</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <HiOutlineChevronDoubleRight className="text-all" />

                  <BreadcrumbItem
                    onClick={() => setSelected("Beginner")}
                    className={`cursor-pointer text-level1 font-bold  px-4 py-1 border border-transparent hover:border-level1 hover:bg-level1 ${
                      selected == "Beginner" &&
                      "border-level1 bg-level1 bg-opacity-5"
                    } hover:bg-opacity-5 rounded-full`}
                  >
                    <BreadcrumbLink>
                      <Link href="">Beginner (aged 3-6)</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <HiOutlineChevronDoubleRight className="text-level1" />

                  <BreadcrumbItem
                    onClick={() => setSelected("Middle")}
                    className={`cursor-pointer text-level2 font-bold  px-4 py-1 border border-transparent hover:border-level2 hover:bg-level2 ${
                      selected == "Middle" &&
                      "border-level2 bg-level2 bg-opacity-5"
                    } hover:bg-opacity-5 rounded-full`}
                  >
                    <BreadcrumbLink>
                      <Link href="">Middle (aged 7-9)</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <HiOutlineChevronDoubleRight className="text-level2" />

                  <BreadcrumbItem
                    onClick={() => setSelected("Pre-advanced")}
                    className={`cursor-pointer text-level3 font-bold  px-4 py-1 border border-transparent hover:border-level3 hover:bg-level3 ${
                      selected == "Pre-advanced" &&
                      "border-level3 bg-level3 bg-opacity-5"
                    } hover:bg-opacity-5 rounded-full`}
                  >
                    <BreadcrumbLink>Pre-advanced (aged 10-12)</BreadcrumbLink>
                  </BreadcrumbItem>
                  <HiOutlineChevronDoubleRight className="text-level3" />

                  <BreadcrumbItem
                    onClick={() => setSelected("advanced")}
                    className={`cursor-pointer text-level4 font-bold  px-4 py-1 border border-transparent hover:border-level4 hover:bg-level4 ${
                      selected == "advanced" &&
                      "border-level4 bg-level4 bg-opacity-5"
                    } hover:bg-opacity-5 rounded-full`}
                  >
                    <BreadcrumbLink>
                      <Link href="">Level 4: Advanced (Aged 13-15)</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              {data && data.courses?.length > 0 && !isLoading ? (
                <div>
                  
                  {selected != "all" ? (
                    <div>
                      <p className="text-black font-bold py-1 border border-transparent flex items-center">Brief Overview : </p>
                      <p className="text-gray-700 text-sm font-light">
                        {selected === "Beginner"
                          ? "Dive into the world of coding with easy-to-understand block-based programming. Introduce young children to basic programming concepts through interactive and playful activities."
                          : selected === "Middle"
                          ? "This program introduces Pre-advanced (aged 10-12) students, aged 10-12, to coding and robotics through hands-on activities using Scratch, Etoys, and Turtle Art. Focusing on block-based programming, game creation, and tinkering, this course aims to enhance problem-solving skills, creativity, and computational thinking.Develop intermediate programming skills through Scratch, Etoys and Turtle Art"
                          : selected === "Pre-advanced"
                          ? "This program introduces pre-advanced level students, aged 10-12, to coding and robotics through hands-on activities using Scratch, Etoys, and Turtle Art. Focusing on block-based programming, game creation, and tinkering, this course aims to enhance problem-solving skills, creativity, and computational thinking.Develop intermediate programming skills through Scratch, Etoys and Turtle Art"
                          : "This program is designed for students aged 13-15 who are ready to take their coding and robotics skills to the next level. Through engaging projects and hands-on activities, students will delve deeper into the world of programming using advanced and Pictoblox. The curriculum emphasizes creativity, critical thinking, and problem-solving by integrating block-based coding, game development, and tinkering with robotics. Master advanced programming concepts and project management."}
                      {" "}
                      {data.courses?.filter(
                        (course) =>
                          course.CourseDetails?.basicInfo?.level === selected
                      ).length > 0 ? (
                        <div className="gap-2 mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                          {data.courses
                            ?.filter(
                              (course) =>
                                course.CourseDetails?.basicInfo?.level ===
                                selected
                            )
                            .map((course) => {
                              return (
                                <CourseCard
                                  key={course.id}
                                  id={course.id}
                                  description={
                                    course.CourseDetails?.basicInfo?.title
                                  }
                                  image={
                                    course.CourseDetails?.basicInfo?.attachment
                                  }
                                  level={course.CourseDetails?.basicInfo?.level}
                                  complexity={
                                    course.CourseDetails?.basicInfo?.complexity
                                  }
                                />
                              );
                            })}
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <GiBookshelf /> <p>No courses available</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <div>
                        {data.courses?.filter(
                          (course) =>
                            course.CourseDetails?.basicInfo?.level ===
                            "Beginner"
                        ).length > 0 ? (
                          <div>
                            <p
                              onClick={() => setSelected("Beginner")}
                              className={`cursor-pointer text-level1 font-bold py-1 border border-transparent`}
                            >
                              Beginner (aged 3-6)|{" "}
                              <p
                                className={`pl-2 cursor-pointer text-gray-700 text-sm font-light`}
                              >
                                Dive into the world of coding with
                                easy-to-understand block-based programming.
                                Introduce young children to basic programming
                                concepts through interactive and playful
                                activities.
                              </p>
                            </p>
                            <div className="gap-2 mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                              {data.courses
                                ?.filter(
                                  (course) =>
                                    course.CourseDetails?.basicInfo?.level ===
                                    "Beginner"
                                )
                                .map((course) => {
                                  return (
                                    <CourseCard
                                      key={course.id}
                                      id={course.id}
                                      description={
                                        course.CourseDetails?.basicInfo?.title
                                      }
                                      image={
                                        course.CourseDetails?.basicInfo
                                          ?.attachment
                                      }
                                      level={
                                        course.CourseDetails?.basicInfo?.level
                                      }
                                      complexity={
                                        course.CourseDetails?.basicInfo
                                          ?.complexity
                                      }
                                    />
                                  );
                                })}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {data.courses?.filter(
                          (course) =>
                            course.CourseDetails?.basicInfo?.level === "Middle"
                        ).length > 0 ? (
                          <div>
                            <p
                              onClick={() => setSelected("Middle")}
                              className={`cursor-pointer text-level2 font-bold py-1 border border-transparent flex items-center`}
                            >
                              Middle (aged 7-9) |{" "}
                              <p
                                className={`pl-2 cursor-pointer text-gray-700 text-sm font-light`}
                              >
                                This program introduces Pre-advanced (aged
                                10-12) students, aged 10-12, to coding and
                                robotics through hands-on activities using
                                Scratch, Etoys, and Turtle Art. Focusing on
                                block-based programming, game creation, and
                                tinkering, this course aims to enhance
                                problem-solving skills, creativity, and
                                computational thinking.Develop intermediate
                                programming skills through Scratch, Etoys and
                                Turtle Art
                              </p>
                            </p>
                            <div className="gap-2 mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                              {data.courses
                                ?.filter(
                                  (course) =>
                                    course.CourseDetails?.basicInfo?.level ===
                                    "Middle"
                                )
                                .map((course) => {
                                  return (
                                    <CourseCard
                                      key={course.id}
                                      id={course.id}
                                      description={
                                        course.CourseDetails?.basicInfo?.title
                                      }
                                      image={
                                        course.CourseDetails?.basicInfo
                                          ?.attachment
                                      }
                                      level={
                                        course.CourseDetails?.basicInfo?.level
                                      }
                                      complexity={
                                        course.CourseDetails?.basicInfo
                                          ?.complexity
                                      }
                                    />
                                  );
                                })}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {data.courses?.filter(
                          (course) =>
                            course.CourseDetails?.basicInfo?.level ===
                            "Pre-advanced"
                        ).length > 0 ? (
                          <div>
                            <p
                              onClick={() => setSelected("Pre-advanced")}
                              className={`cursor-pointer text-level3 font-bold  py-1 border border-transparent`}
                            >
                              Pre-advanced (aged 10-12)|{" "}
                              <p
                                className={`pl-2 cursor-pointer text-gray-700 text-sm font-light`}
                              >
                                This program introduces pre-advanced level
                                students, aged 10-12, to coding and robotics
                                through hands-on activities using Scratch,
                                Etoys, and Turtle Art. Focusing on block-based
                                programming, game creation, and tinkering, this
                                course aims to enhance problem-solving skills,
                                creativity, and computational thinking.Develop
                                intermediate programming skills through Scratch,
                                Etoys and Turtle Art
                              </p>
                            </p>
                            <div className="gap-2 mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                              {data.courses
                                ?.filter(
                                  (course) =>
                                    course.CourseDetails?.basicInfo?.level ===
                                    "Pre-advanced"
                                )
                                .map((course) => {
                                  return (
                                    <CourseCard
                                      key={course.id}
                                      id={course.id}
                                      description={
                                        course.CourseDetails?.basicInfo?.title
                                      }
                                      image={
                                        course.CourseDetails?.basicInfo
                                          ?.attachment
                                      }
                                      level={
                                        course.CourseDetails?.basicInfo?.level
                                      }
                                      complexity={
                                        course.CourseDetails?.basicInfo
                                          ?.complexity
                                      }
                                    />
                                  );
                                })}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {data.courses?.filter(
                          (course) =>
                            course.CourseDetails?.basicInfo?.level ===
                            "advanced"
                        ).length > 0 ? (
                          <div>
                            <p
                              onClick={() => setSelected("advanced")}
                              className={`cursor-pointer text-level4 font-bold py-1 border border-transparent`}
                            >
                              Advanced (Aged 13-15)|{" "}
                              <p
                                className={`pl-2 cursor-pointer text-gray-700 text-sm font-light`}
                              >
                                This program is designed for students aged 13-15
                                who are ready to take their coding and robotics
                                skills to the next level. Through engaging
                                projects and hands-on activities, students will
                                delve deeper into the world of programming using
                                advanced and Pictoblox. The curriculum
                                emphasizes creativity, critical thinking, and
                                problem-solving by integrating block-based
                                coding, game development, and tinkering with
                                robotics. Master advanced programming concepts
                                and project management.
                              </p>
                            </p>
                            <div className="gap-2 mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                              {data.courses
                                ?.filter(
                                  (course) =>
                                    course.CourseDetails?.basicInfo?.level ===
                                    "advanced"
                                )
                                .map((course) => {
                                  return (
                                    <CourseCard
                                      key={course.id}
                                      id={course.id}
                                      description={
                                        course.CourseDetails?.basicInfo?.title
                                      }
                                      image={
                                        course.CourseDetails?.basicInfo
                                          ?.attachment
                                      }
                                      level={
                                        course.CourseDetails?.basicInfo?.level
                                      }
                                      complexity={
                                        course.CourseDetails?.basicInfo
                                          ?.complexity
                                      }
                                    />
                                  );
                                })}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : isLoading ? (
                <div className="skeleton-loader"></div>
              ) : (
                ""
              )}
              <div className="gap-2 mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
