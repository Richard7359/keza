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

const Page = () => {
  const [selected, setSelected] = useState(0);
  const [stared, setStared] = useState(false);
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

              {/* <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/">Pre-advanced Level</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <CgChevronDoubleRight />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/">Advanced Level</Link>
              </BreadcrumbLink>
            </BreadcrumbItem> */}
            </BreadcrumbList>
          </Breadcrumb>
          <p className="py-2 font-bold">Recent added courses.</p>
          <div className="h-[225px] w-[300px] border-custom rounded-2xl">
            <div className="h-[60%] rounded-t-2xl">
              <Image
                src={Ichigo}
                alt="KEFL Logo image"
                className="w-full h-full object-cover cursor-pointer rounded-t-[16px] border-custom"
              />
            </div>
            <div className="h-[25%] flex justify-between mx-3 py-1">
              <p className="font-serif text-sm">Ichigo Jam</p>
              {stared ? <IoStar /> : <FaRegStar />}{" "}
            </div>
            <div className="bg-blue-light h-[15%] rounded-b-2xl flex items-center justify-end">
              <div className="inline-flex border border-black items-center mx-2 px-2 rounded-full ">
                <GoDotFill />
                <p className="text-[12px] font-bold">EASY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
