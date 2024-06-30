"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Video1 from "./Video1";

import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams<{ id: string }>();
 
  return (
    <div>
        {id == "1" && <Video1 />}
    </div> 
  );
};

export default Page;
