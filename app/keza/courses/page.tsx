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
  const { data , isLoading } = useGetCourse();

  useEffect(() => {
    console.log("all Courses", data);
  });

  return (
    <>
      <div className="bg-[#f7f8fa]">
        <Navigation />
        <div className="md:h-screen">
          <div className="flex justify-center ">
            <div className="my-6 w-[97%] bg-white py-6 px-6 rounded-keza border-custom border-custom">
              <Breadcrumb>
                <BreadcrumbList className="">
                  <BreadcrumbItem
                    onClick={() => setSelected("all")}
                    className={`cursor-pointer text-all font-bold  px-4 py-1 border border-transparent hover:border-all hover:bg-all ${
                      selected == "ALL" && "border-all bg-all bg-opacity-5"
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
                      selected == "Beginner" && "border-level1 bg-level1 bg-opacity-5"
                    } hover:bg-opacity-5 rounded-full`}
                  >
                    <BreadcrumbLink>
                      <Link href="">Beginner level</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <HiOutlineChevronDoubleRight className="text-level1" />

                  <BreadcrumbItem
                    onClick={() => setSelected("Middle")}
                    className={`cursor-pointer text-level2 font-bold  px-4 py-1 border border-transparent hover:border-level2 hover:bg-level2 ${
                      selected == "Middle" && "border-level2 bg-level2 bg-opacity-5"
                    } hover:bg-opacity-5 rounded-full`}
                  >
                    <BreadcrumbLink>
                      <Link href="">Middle level</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <HiOutlineChevronDoubleRight className="text-level2" />

                  <BreadcrumbItem
                    onClick={() => setSelected("Pre-advanced")}
                    className={`cursor-pointer text-level3 font-bold  px-4 py-1 border border-transparent hover:border-level3 hover:bg-level3 ${
                      selected == "Pre-advanced" && "border-level3 bg-level3 bg-opacity-5"
                    } hover:bg-opacity-5 rounded-full`}
                  >
                    <BreadcrumbLink>Pre-advanced level</BreadcrumbLink>
                  </BreadcrumbItem>
                  <HiOutlineChevronDoubleRight className="text-level3" />

                  <BreadcrumbItem
                    onClick={() => setSelected("advanced")}
                    className={`cursor-pointer text-level4 font-bold  px-4 py-1 border border-transparent hover:border-level4 hover:bg-level4 ${
                      selected == "advanced" && "border-level4 bg-level4 bg-opacity-5"
                    } hover:bg-opacity-5 rounded-full`}
                  >
                    <BreadcrumbLink>
                      <Link href="">Advanced level</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              {data && !isLoading ? selected == "all" && data.courses?.length > 0 ? (
                <p
                  onClick={() => setSelected("Middle")}
                  className={`cursor-pointer text-level2 font-bold mt-2 border border-transparent rounded-full flex items-center`}
                >
                  Middle level{" "}
                </p>
              ) : (
                ""
              ) : isLoading ? <div className="skeleton-loader"></div>:""}
              {selected != "all" ? (
                <div className="gap-2 mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {data
                    ? data.courses?.filter(course => course.CourseDetails?.basicInfo?.level === selected).length > 0 && !isLoading
                    // ? data.courses?.length > 0 && !isLoading
                    ?  
                    data.courses?.filter(course => course.CourseDetails?.basicInfo?.level === selected).map((course) => {
                      return (
                        <CourseCard
                          key={course.id}
                          id={course.id}
                          description={course.CourseDetails?.basicInfo?.title}
                          image={course.CourseDetails?.basicInfo?.attachment}
                          level={course.CourseDetails?.basicInfo?.level}
                          complexity={course.CourseDetails?.basicInfo?.complexity}
                        />
                      );
                    })                    
                    // data.courses?.map((course) => {
                    //     return (
                    //       <CourseCard
                    //         key={course.id}
                    //         id={course.id}
                    //         description={course.CourseDetails?.basicInfo?.title}
                    //         image={course.CourseDetails?.basicInfo?.attachment}
                    //         level={course.CourseDetails?.basicInfo?.level}
                    //         complexity={course.CourseDetails?.basicInfo?.complexity}
                    //       />
                    //     );
                    //   }) 
                      : (
                        <div className="flex items-center gap-1">
                          <GiBookshelf /> <p>No courses available</p>
                        </div>
                      )
                    : ""}
                </div>
              ) : (
                <div className="font-medium flex items-center p-3 gap-2">
                  <GiBookshelf /> <p>No courses available for this level</p>
                </div>
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
