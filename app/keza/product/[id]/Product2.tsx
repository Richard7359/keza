"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TfiMinus } from "react-icons/tfi";
import { LiaPlusSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import keza_piano_1 from "../../../images/products/piano_1.jpg";
import keza_piano_2 from "../../../images/products/piano_2.jpg";
import keza_piano_3 from "../../../images/products/piano_3.jpg";
import keza_piano_4 from "../../../images/products/piano_4.jpg";
import { CarouselSize } from "../carousel";
import Link from "next/link";
import { TbGardenCart } from "react-icons/tb";
import { ProductCategorySideBar } from "../ProductCategorySide";

const Product2 = () => {
  const SelectedProductData = {
    id: 1,
    name: "Tshirt",
    price: "$10",
    discount: "$5",
    image: "/tshirt.jpg",
    images: [keza_piano_1, keza_piano_2, keza_piano_3, keza_piano_4],
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
    <div className="min-h-[60vh] pb-8">
      <div className="w-full">
        <div className="w-[80%] m-auto flex gap-5 mt-2">
          <div className="w-[20%] border border-gray-300  h-full p-4 rounded-md mt-5">
            <h1 className="text-[#030229] font-bold text-base py-1 text-center">
              Categories
            </h1>
            <ProductCategorySideBar />
          </div>
          <div className="flex gap-3 w-[80%]">
            <div className="w-[40%] h-[22rem]">
              <div className="w-full  p-2 border border-gray-300 m-5 rounded-sm">
                <Image
                  src={image}
                  alt="Picture of the Logo"
                  className="m-auto w-full  object-cover"
                />
              </div>
              <div className="h-64 ml-10">
                <CarouselSize
                  image={image}
                  setImage={setImage}
                  SelectedProductData={SelectedProductData}
                />
              </div>
            </div>
            <div className="ml-10  w-[60%] mt-5 h-[22rem] flex flex-col justify-between">
              <div className="">
                <h1 className="text-[#030229] font-bold text-xl">Keza Piano</h1>
                <p className="text-[#030229B2] text-sm pt-2">
                  This comprehensive Keza Piano kit is designed to introduce
                  children to the captivating worlds of music, technology, and
                  creativity. Tailored for both beginners and advanced learners,
                  this kit is perfect for young enthusiasts aged 3 to 14 years.
                  It offers a hands-on, interactive learning experience that
                  fosters creativity and critical thinking. Through engaging
                  projects and step-by-step instructions, children will develop
                  a solid foundation in music and technology, preparing them for
                  future academic and career opportunities. The kit includes
                  user-friendly components and resources to ensure a fun and
                  educational journey for every child, regardless of their prior
                  knowledge or skill level.
                </p>
              </div>
              <div className="flex gap-3">
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
                    <Button className="hover:bg-orange-500 w-32 gap-1">
                      <TbGardenCart className="" size={24} /> Add to Cart
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
    </div>
  );
};

export default Product2;
