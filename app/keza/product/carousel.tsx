"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import SelectedProductData from "../data/DummyData/selectedProductData"
import keza_development_kit_1 from "../../images/products/keza_development_kit_1.jpg";
import keza_development_kit_2 from "../../images/products/keza_development_kit_2.jpg";
import keza_development_kit_3 from "../../images/products/keza_development_kit_3.jpg";
import keza_development_kit_4 from "../../images/products/keza_development_kit_4.jpg";
import Image from "next/image";
export function CarouselSize(props: any) {
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
        keza_development_kit_4
    ],
    stock: 320,
    description: "This is a Tshirt",
  };

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {SelectedProductData.images.map((img: any, index: any) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-1">
                  <Image
                    src={img}
                    width={300}
                    height={300}
                    alt="img"
                    className="h-full w-full object-cover"
                    onClick={() => {
                      props.setImage(img);
                    }}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
