import React from "react";
import Image from "next/image";
// import image from "../../images/bootcamp-image-1.jpg";
import Navigation from "@/app/components/Navigation_bar/Navigation";
import Footer from "@/app/components/Footer";
import ProductCard from "./ProductCard";
import KezaDEvelopmentKit from "../../images/products/keza_development_kit_1.jpg";
import KezaPiano from "../../images/products/piano_1.jpg";

const page1 = () => {
  return (
    <div>
      <Navigation />
      <div className="m-2 min-h-[40vh] flex gap-2">
        <ProductCard image={KezaDEvelopmentKit} name="Keza Development Kit" price={20} category="Keza Kit" id={1}/>
        <ProductCard image={KezaPiano} name="Keza Piano" price={20} category="Keza Kit" id={2}/>
      </div>
      <Footer />
    </div>
  );
};

export default page1;
