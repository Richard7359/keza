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
import keza_kit2 from "../../../images/keza-forklift.png";
import { CarouselSize } from "../carousel";
import Link from "next/link";
import { TbGardenCart } from "react-icons/tb";
import { ProductCategorySideBar } from "../ProductCategorySide";
import Other_kefl_kit from "./Other_kefl_kit";

const Product2 = () => {
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
          <Image src={keza_kit2} alt="" className="rounded-md sticky top-0 mb-10 pt-10 overflow-hidden" />
        </div>

        <div className="text-paragraph">
          <h3 className="font-bold text-2xl mb-4 text-darkGrey">Keza Forklift</h3>
          <p>
            The <strong>Keza forklift kit</strong>, developed by KEFL, serves
            as an innovative tool to captivate children&apos;s interest in robotics
            and programming, while also enhancing their understanding of
            fundamental concepts like simple machines that they learn in
            primary school. Geared towards students around the primary six
            level.
          </p>
          <br />
          <p>
            The kit&apos;s primary aim is to make the lessons about simple
            machines, such as lifts, more engaging and interactive. By
            combining hands-on building with programming, the Keza forklift
            kit bridges the gap between theoretical knowledge and practical
            application. What sets this kit apart is its utilization of an
            enhanced kid-friendly programming language, Pictoblox, which goes
            beyond traditional scratch programming. By introducing robotics in
            this context, students can grasp complex ideas like pulleys,
            levers, and mechanisms more effectively as they apply their
            learning to the real-world scenarios that the kit provides.
          </p>
          <br />
          <p>
            In doing so, the Keza forklift kit not only introduces young
            learners to robotics and coding but also deepens their
          </p>
          <br />
          <ul className="list pl-5">
            <li>Comprehension of basic machines</li>
            <li>
              Making the transition from theoretical classroom concepts to
              tangible, and
            </li>
            <li>Hands-on experiences both seamless and exciting</li>
          </ul>
        </div>
      </article>
    </section>

        <Other_kefl_kit />
      </main>
    </div>
  );
};

export default Product2;
