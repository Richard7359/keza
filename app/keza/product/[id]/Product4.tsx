"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TfiMinus } from "react-icons/tfi";
import { LiaPlusSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import keza_development_kit_12 from "../../../images/products/TRAFFIC1.jpg";
import keza_development_kit_13 from "../../../images/products/TRAFFIC2.jpg";
import keza_development_kit_14 from "../../../images/products/TRAFFIC3.jpg";
import keza_development_kit_15 from "../../../images/products/TRAFFIC4.jpg";
import keza_kit4 from "../../../images/keza-traffic-light.png";
import { CarouselSize } from "../carousel";
import Link from "next/link";
import { TbGardenCart } from "react-icons/tb";
import { ProductCategorySideBar } from "../ProductCategorySide";
import Other_kefl_kit from "./Other_kefl_kit";

const Product4 = () => {
  const SelectedProductData = {
    id: 1,
    name: "Tshirt",
    price: "$10",
    discount: "$5",
    image: "/tshirt.jpg",
    images: [
      keza_kit4,
      keza_development_kit_12,
      keza_development_kit_13,
      keza_development_kit_14,
      keza_development_kit_15,
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
    <div className="">
      <main>
        <section className="container mx-auto">
          <article className="grid md:grid-cols-2 md:gap-x-14 my-10 px-3 md:px-0">
            {/* <div>
          <Image src={keza_kit4} alt=""
            className="rounded-md sticky top-0 mb-10 md:pt-10 overflow-hidden" />
        </div> */}
            <div>
              <div className="">
                <Image
                  src={image}
                  alt=""
                  className="rounded-md sticky top-0 mb-10 md:pt-10 overflow-hidden"
                />
              </div>
              <div className="flex justify-center">
                <CarouselSize
                  image={image}
                  setImage={setImage}
                  SelectedProductData={SelectedProductData}
                />
              </div>
            </div>
            <div className="text-paragraph">
              <h3 className="font-bold text-2xl mb-4 text-darkGrey">
                Keza Traffic Light
              </h3>
              <p>
                <strong>Keza Traffic Light</strong> serves as an educational
                resource created by Keza Education Future Lab (KEFL). KEFL
                introduces the concepts of programming and robotics to children
                within the 8 to 11 age group, aiming to foster proficiencies in
                key scientific areas encompassing physical sciences, life
                sciences, earth sciences, and engineering.
              </p>
              <br />
              <p>
                The KEFL engineering team conceived the idea of developing the
                Keza Traffic Light kit as an educational tool with the intention
                of illustrating the connections between the functions of traffic
                lights and their influence on daily life. This traffic light kit
                is utilized to teach various primary-level subjects, including:
              </p>
              <br />
              <ul className="list pl-5">
                <li>Energy</li>
                <li>Light, and</li>
                <li>Electricity</li>
              </ul>
              <br />
              <p>
                through an engaging approach centered around play-based
                learning.
              </p>
            </div>
          </article>
        </section>
        <Other_kefl_kit />
      </main>
    </div>
  );
};

export default Product4;
