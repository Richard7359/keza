"use client";

import Navigation from "@/app/components/Navigation_bar/Navigation";
import Footer from "@/app/components/Footer";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Product1 from "./Product1";
import Product2 from "./Product2";

const Page = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <Navigation />
      <div className="h-[40vh] md:h-[100vh]">
      {id == "1"  && <Product1 />}
      {id == "2"  && <Product2 />}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
