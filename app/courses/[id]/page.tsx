"use client";

import React, { useState } from "react";
import Navigation from "@/app/components/Navigation_bar/Navigation";
import Footer from "@/app/components/Footer";
import image from "@/app/images/ichigojam.jpg";
import Image from "next/image";

const Page = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Navigation />
      <div className="">
        <p className="text-center text-2xl font-bold mt-10">Ichigo Jam</p>
        <p className="text-center mt-2">BY Emma on Feb 6, 2020</p>
        <div>
        <Image
          src={image}
          alt="KEFL Logo image"
          className="w-full h-full object-cover cursor-pointer rounded-t-[16px] border-custom"
        />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Page;
