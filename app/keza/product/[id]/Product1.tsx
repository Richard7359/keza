"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TfiMinus } from "react-icons/tfi";
import { LiaPlusSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import keza_development_kit_1 from "../../../images/products/keza_development_kit_1.jpg";
import keza_development_kit_2 from "../../../images/products/keza_development_kit_2.jpg";
import keza_development_kit_3 from "../../../images/products/keza_development_kit_3.jpg";
import keza_development_kit_4 from "../../../images/products/keza_development_kit_4.jpg";
import { CarouselSize } from "../carousel";
import Link from "next/link";
import { TbGardenCart } from "react-icons/tb";
import { ProductCategorySideBar } from "../ProductCategorySide";
import Other_kefl_kit from "./Other_kefl_kit";

const Product1 = () => {
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
    <div className="">
      <main>
        <section className="container mx-auto">
          <article className="grid md:grid-cols-2 md:gap-x-14 my-10 px-3 md:px-0">
            <div >
              <Image
                src={keza_development_kit_1}
                alt=""
                className="rounded-md sticky top-0 mb-10 md:pt-10 overflow-hidden"
              />
            </div>
            <div className="text-paragraph">
              <h3 className="font-bold text-2xl mb-4 text-darkGrey">
                Keza Development Kit
              </h3>
              <p>
                The Keza Development Kit is an IoT (Internet of Things) based
                educational kit created by Keza Education Future Lab. It is
                specifically designed for kids to engage in robotics, coding,
                and programming activities. The kit includes an advanced
                programming platform called PictoBlox, which is based on
                Scratch, making it user-friendly for children.
              </p>
              <br />
              <p>
                With the Keza Development Kit, kids can explore and create over
                15 different projects. These projects cover various
                functionalities, such as:
              </p>
              <br />
              <ul className="list pl-5">
                <li>Obstacle sensing</li>
                <li>Thermometer implementation</li>
                <li>Traffic light simulation</li>
                <li>Alarm system setup</li>
                <li>and even Home automation systems</li>
              </ul>
              <br />
              <p>
                The kit aims to provide a hands-on and interactive learning
                experience, allowing children to learn key concepts in
                technology, programming, and IoT while having fun building and
                experimenting with different projects.
              </p>
            </div>
          </article>
        </section>
        <Other_kefl_kit />
      </main>
    </div>
  );
};

export default Product1;
