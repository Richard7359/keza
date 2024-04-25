"use client";

import React, { useState } from "react";
import Navigation from "../components/Navigation_bar/Navigation";
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

import Ichigo from "../images/ichigojam.jpg";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import CourseCard from "../components/courseCard";

const Page = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="bg-[#f7f8fa] h-screen">
      <Navigation />
      <div className="flex justify-center">
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
          <p className="py-2 font-bold">Recent added courses.</p>
          <div>
            <CourseCard image={Ichigo} level={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
