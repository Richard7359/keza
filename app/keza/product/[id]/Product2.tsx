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
import keza_kit3 from "../../../images/keza-kid-trainer-kit-full.png";
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
        <div>
          <Image src={keza_kit3} alt="keza kid trainer"
            className="rounded-md sticky top-0 mb-10 md:pt-10 overflow-hidden" />
        </div>
        <div className="text-paragraph">
          <h3 className="font-bold text-2xl mb-4 text-darkGrey">
            Keza Kid Trainer Kit
          </h3>
          <p>
            A <strong>Keza kid trainer kit</strong> represents a robotic
            system designed to educate children in various subjects like
            mathematics, language, and art. The Keza kids trainer contributes
            to children&lsquo;s development in diverse domains like auditory skills,
            language proficiency, and logical thinking. Moreover, employing
            the strategy of learning through teaching has demonstrated
            heightened dedication and involvement. The Keza kid trainer kit ,
            devised by KEFL Ltd, utilizes locally available materials,
            rendering it affordable.
          </p>
          <br />
          <p>
            <strong>Keza kid trainer kit</strong> is a robot/tool used to
            teach early child alphabet, number, colors and animals. The design
            may be for functional purposes, such as interacting with human
            tools and environments. Keza kid trainer kit helps children
            develop in several different areas, such as:
          </p>
          <br />
          <ul className="list pl-5">
            <li>Writing</li>
            <li>Reading</li>
            <li>Knowing a language, and</li>
            <li>Reasoning</li>
          </ul>
          <br />
          <p>
            In addition, the approach of learning by teaching has shown an
            increased commitment and engagement. This product is a plaything
            that every child aged 3 to 6 should have access to. Consequently,
            we intend to actualize this goal by producing this toy within our
            laboratory.
          </p>
          <br />
        </div>
      </article>
    </section>
        <Other_kefl_kit />
      </main>
    </div>
  );
};

export default Product1;
