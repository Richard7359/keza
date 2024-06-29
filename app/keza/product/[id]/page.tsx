"use client";

import React from "react";
import { useParams } from "next/navigation";
import Product1 from "./Product1";
import Product2 from "./Product2";

const Page = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="">
      <div className="">
        {id == "1" && <Product1 />}
        {id == "2" && <Product2 />}
      </div>
    </div>
  );
};

export default Page;
