import React from "react";
import Image from "next/image";
import image from "../../images/bootcamp-image-1.jpg";
import Navigation from "@/app/components/Navigation_bar/Navigation";
import Footer from "@/app/components/Footer";
import ProductPage from "./product_page";

const page1 = () => {
  return (
    <div>
      <Navigation />
      <div className="m-2">
        <ProductPage />
      </div>
      <Footer />
    </div>
  );
};

export default page1;
