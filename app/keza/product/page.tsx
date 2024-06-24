"use client";

import Navigation from "@/app/components/Navigation_bar/Navigation";
import Footer from "@/app/components/Footer";
import React, { useState } from "react";
import Image from "next/image";
import { TfiMinus } from "react-icons/tfi";
import { LiaPlusSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import keza_development_kit_1 from "../../images/products/keza_development_kit_1.jpg";
import keza_development_kit_2 from "../../images/products/keza_development_kit_2.jpg";
import keza_development_kit_3 from "../../images/products/keza_development_kit_3.jpg";
import keza_development_kit_4 from "../../images/products/keza_development_kit_4.jpg";
import { CarouselSize } from "./carousel";
import Link from "next/link";

const Page = () => {
  const SelectedProductData = {
    id: 1,
    name: "Tshirt",
    price: "$10",
    discount: "$5",
    image: "/tshirt.jpg",
    images: [
      keza_development_kit_1,
      keza_development_kit_2,
      keza_development_kit_3,
      keza_development_kit_4,
    ],
    stock: 320,
    description: "This is the keza development kit 1",
  };
  const [countProduct, setCountProduct] = useState(1);
  const HandleCount = () => {
    setCountProduct(countProduct + 1);
  };
  const HandleRemoveCount = () => {
    setCountProduct(countProduct - 1);
  };
  const [image, setImage] = React.useState(SelectedProductData.images[0]);
  return (
    <div>
      <Navigation />
      <div className="w-full">
        <div className="w-[80%] m-auto flex gap-5 mt-2">
          <div className="w-[20%] border border-gray-300 h-full p-4 rounded-md mt-5">
            <h1 className="text-[#030229] font-medium text-base py-1 text-center">
              Categories
            </h1>
            {/* <ProductCategorySideBar /> */}
          </div>
          <div className="flex gap-3 w-[80%]">
            <div className="w-[40%] h-[22rem]">
              <div className="w-full h-full p-2 border border-gray-300 m-5 rounded-sm">
                <Image
                  src={image}
                  width={300}
                  height={400}
                  alt="Picture of the Logo"
                  className="m-auto w-full h-full object-cover"
                />
              </div>
              <div className="h-64 ml-10">
                <CarouselSize image={image} setImage={setImage} />
              </div>
            </div>
            <div className="ml-10  w-[60%] mt-5">
              <h1 className="text-[#030229] font-bold text-xl">
                Keza Development Kit
              </h1>
             
              
              <p className="text-[#030229B2] text-sm pt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip. Excepteur sint occaecat cupida...
              </p>

              <div className="mt-10 flex gap-3">
                <div className="flex gap-2 border w-32 border-gray-300 px-5 py-1 rounded-sm">
                  <button
                    disabled={countProduct <= 1}
                    onClick={HandleRemoveCount}
                    className="mr-3"
                  >
                    <TfiMinus size={18} className="mt-[2phx]" />
                  </button>{" "}
                  <span className="mt-1">{countProduct}</span>
                  <button onClick={HandleCount}>
                    <LiaPlusSolid className="ml-3" size={18} />
                  </button>
                </div>
                <div>
                  <Link href={"/viewCart"}>
                    {" "}
                    <Button className="hover:bg-orange-500 w-32">
                      Add to Cart
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="rounded-md w-[80%] m-auto">
          <div className="mt-32">
            <h1 className="text-[#030229] font-medium text-base py-3 text-center">
              RELATED PRODUCTS
            </h1>
            <RelatedProductsSection />
          </div>
        </div> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Page;
