"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Video1 from "./Video1";
import Video2 from "./video2";
import Video3 from "./video3";

import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      {id == "1" && <Video1 />}
      {id == "2" && <Video2 />}
      {id == "3" && <Video3 />}
    </div>
  );
};

export default Page;
