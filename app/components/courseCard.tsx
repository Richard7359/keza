"use client";

import React, { useState } from "react";

import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import Complexity from "./dashboard/Complexity";

const CourseCard = ({image, level, complexity, description , stared, id} : {image : any, level: number, complexity: number, description : string , stared? : boolean, id: number}) => {

  return (
    <Link href={`/keza/courses/${id}`}>
    <div className="h-[215px] w-full border-custom rounded-2xl">
      <div className="h-[60%] rounded-t-2xl relative">
        <Image
          src={process.env.NEXT_PUBLIC_IMAGE_URL + image}
          // src={image}
          width={500}
          height={500}
          alt="KEFL Logo image"
          className="w-full h-full object-cover cursor-pointer rounded-t-[16px] border-custom"
        />
        <div className={`absolute inset-0 opacity-40 rounded-t-2xl`}></div>
        {/* <div className={`absolute inset-0 bg-level${level} opacity-40 rounded-t-2xl`}></div> */}
      </div>
      <div className="h-[25%] flex justify-between mx-3 py-1">
        <p className="font-serif text-sm">{description}</p>
        {stared ? <IoStar /> : <FaRegStar />}{" "}
      </div>
      <div className="bg-blue-light h-[15%] rounded-b-2xl flex items-center justify-end">
        <Complexity complexity={complexity} />
      </div>
    </div>
    </Link>
  );
};

export default CourseCard;
