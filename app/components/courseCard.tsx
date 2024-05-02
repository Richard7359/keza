"use client";

import React, { useState } from "react";

import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import Link from "next/link";

const CourseCard = ({image, level, complexity, description , stared, id} : {image : any, level: number, complexity: number, description : string , stared? : boolean, id: number}) => {

  return (
    <Link href={`/courses/${id}`}>
    <div className="h-[215px] w-full border-custom rounded-2xl">
      <div className="h-[60%] rounded-t-2xl relative">
        <Image
          src={image}
          alt="KEFL Logo image"
          className="w-full h-full object-cover cursor-pointer rounded-t-[16px] border-custom"
        />
        <div className={`absolute inset-0 bg-level${level} opacity-40 rounded-t-2xl`}></div>
      </div>
      <div className="h-[25%] flex justify-between mx-3 py-1">
        <p className="font-serif text-sm">{description}</p>
        {stared ? <IoStar /> : <FaRegStar />}{" "}
      </div>
      <div className="bg-blue-light h-[15%] rounded-b-2xl flex items-center justify-end">
        <div className={`inline-flex border border-custom items-center mx-2 px-2 rounded-full  ${complexity == 1 ? "text-green easy-bg" : complexity == 2 ? "medium medium-bg":  complexity == 3 ? "text-level4 bg-level4 bg-opacity-5":""}`}>
          <GoDotFill />
          <p className="text-[12px] font-bold">{complexity == 1 ? "EASY" : complexity == 2 ? "MEDIUM":  complexity == 3 ? "HARD":"NONE"}</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CourseCard;
