"use client";

import React, { useState } from "react";
import Navigation from "../components/Navigation_bar/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
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

import CourseCard from "../components/courseCard";
import Ichigo from "../images/ichigojam.jpg";
import TrafficLight from "../images/keza-traffic-light.png";
import Forklift from "../images/keza-forklift.png";
import Car from "../images/keza-car.png";
import DevelopmentKit from "../images/kezaz-development-kit.png";
import Helicopter from "../images/Helocopter.png";
import HouseInstallation from "../images/House-installation@2x.png";
import Irrigation from "../images/Irrigation.png";
const Page = () => {
  const [selected, setSelected] = useState(0);

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
                    onClick={() => setSelected(0)}
                    className={`cursor-pointer text-all font-bold  px-4 py-1 border border-transparent hover:border-all hover:bg-all ${
                      selected == 0 && "border-all bg-all bg-opacity-5"
                    } hover:bg-opacity-5 rounded-full`}
                  >
                    <BreadcrumbLink>
                      <Link href="">All levels</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <HiOutlineChevronDoubleRight className="text-all" />

                  <BreadcrumbItem
                    onClick={() => setSelected(1)}
                    className={`cursor-pointer text-level1 font-bold  px-4 py-1 border border-transparent hover:border-level1 hover:bg-level1 ${
                      selected == 1 && "border-level1 bg-level1 bg-opacity-5"
                    } hover:bg-opacity-5 rounded-full`}
                  >
                    <BreadcrumbLink>
                      <Link href="">Beginner level</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <HiOutlineChevronDoubleRight className="text-level1" />

                  <BreadcrumbItem
                    onClick={() => setSelected(2)}
                    className={`cursor-pointer text-level2 font-bold  px-4 py-1 border border-transparent hover:border-level2 hover:bg-level2 ${
                      selected == 2 && "border-level2 bg-level2 bg-opacity-5"
                    } hover:bg-opacity-5 rounded-full`}
                  >
                    <BreadcrumbLink>
                      <Link href="">Middle level</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <HiOutlineChevronDoubleRight className="text-level2" />

                  <BreadcrumbItem
                    onClick={() => setSelected(3)}
                    className={`cursor-pointer text-level3 font-bold  px-4 py-1 border border-transparent hover:border-level3 hover:bg-level3 ${
                      selected == 3 && "border-level3 bg-level3 bg-opacity-5"
                    } hover:bg-opacity-5 rounded-full`}
                  >
                    <BreadcrumbLink>Pre-advanced level</BreadcrumbLink>
                  </BreadcrumbItem>
                  <HiOutlineChevronDoubleRight className="text-level3" />

                  <BreadcrumbItem
                    onClick={() => setSelected(4)}
                    className={`cursor-pointer text-level4 font-bold  px-4 py-1 border border-transparent hover:border-level4 hover:bg-level4 ${
                      selected == 4 && "border-level4 bg-level4 bg-opacity-5"
                    } hover:bg-opacity-5 rounded-full`}
                  >
                    <BreadcrumbLink>
                      <Link href="">Advanced level</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="gap-2 mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* <div className="flex flex-wrap gap-2 mt-4"> */}
                <CourseCard
                  description={"Ichigo Jam"}
                  image={Ichigo}
                  level={1}
                  complexity={1}
                  stared={true}
                />
                <CourseCard
                  description={"Traffic Light"}
                  image={TrafficLight}
                  level={2}
                  complexity={2}
                />
                <CourseCard
                  description={"Keza Folk lift"}
                  image={Forklift}
                  level={3}
                  complexity={3}
                />
                <CourseCard
                  description={"House Installation"}
                  image={HouseInstallation}
                  level={1}
                  complexity={1}
                  stared={true}
                />
                <CourseCard
                  description={"Keza Car"}
                  image={Car}
                  level={2}
                  complexity={2}
                />
                <CourseCard
                  description={"Lego Helicopter"}
                  image={Helicopter}
                  level={1}
                  complexity={1}
                />
                <CourseCard
                  description={"Irrigation"}
                  image={Irrigation}
                  level={2}
                  complexity={2}
                />
                <CourseCard
                  description={"Keza Development Kit"}
                  image={DevelopmentKit}
                  level={3}
                  complexity={3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
