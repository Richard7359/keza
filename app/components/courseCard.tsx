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
const CourseCard = ({image, level, complexity} : {image : any, level: number, complexity: number}) => {
  const [stared, setStared] = useState(false);
  return (
    <div className="h-[225px] w-[300px] border-custom rounded-2xl">
      <div className="h-[60%] rounded-t-2xl relative">
        <Image
          src={image}
          alt="KEFL Logo image"
          className="w-full h-full object-cover cursor-pointer rounded-t-[16px] border-custom"
        />
        <div className={`absolute inset-0 bg-level${level} opacity-40 rounded-t-2xl`}></div>
      </div>
      <div className="h-[25%] flex justify-between mx-3 py-1">
        <p className="font-serif text-sm">Ichigo Jam</p>
        {stared ? <IoStar /> : <FaRegStar />}{" "}
      </div>
      <div className="bg-blue-light h-[15%] rounded-b-2xl flex items-center justify-end">
        <div className={`inline-flex border border-custom  bg-opacity-5 items-center mx-2 px-2 rounded-full  ${complexity == 1 ? "text-green bg-green" : ""}`}>
          <GoDotFill />
          <p className="text-[12px] font-bold">EASY</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
