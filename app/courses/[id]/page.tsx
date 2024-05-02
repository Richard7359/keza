"use client";

import React, { useState } from "react";
import Navigation from "@/app/components/Navigation_bar/Navigation";
import Footer from "@/app/components/Footer";
import image from "../../images/ichigojam.jpg";
import Image from "next/image";
import ViewMaterials from "@/app/components/courses/Dialog";

const Page = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Navigation />
      <div className="">
        <div className="mb-4">
          <p className="text-center text-2xl font-bold mt-10">Ichigo Jam</p>
          <p className="text-center mt-1">BY Emma on Feb 6, 2020</p>
        </div>
        <div className="flex justify-center">
          <Image
            src={image}
            alt="KEFL Logo image"
            className="w-[500px] h-[300px] object-cover cursor-pointer rounded-[5px] border-custom"
          />
        </div>
        <div className="flex justify-center mt-4">
          <div className="w-[40%]">
            {/* <p className="text-2xl font-bold mt-10">Description</p>
            <p className="mt-1">
              IchigoJam is a simple computer that you can start easily. It has
              BASIC language and you can enjoy programming with it. IchigoJam is
              very small and easy to use. It is good for beginners who want to
              learn programming.
            </p> */}
            <ViewMaterials />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Page;
