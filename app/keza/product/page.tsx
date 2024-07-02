import React from "react";
import Image from "next/image";
import keza_kit1 from "../../images/kezaz-development-kit.png";
import keza_kit2 from "../../images/keza-forklift.png";
import keza_kit3 from "../../images/keza-kid-trainer-kit-full.png";
import keza_kit4 from "../../images/keza-traffic-light.png";
// import image from "../../images/bootcamp-image-1.jpg";
import Navigation from "@/app/components/Navigation_bar/Navigation";
import Footer from "@/app/components/Footer";
import ProductCard from "./ProductCard";
import KezaDEvelopmentKit from "../../images/products/keza_development_kit_1.jpg";
import KezaPiano from "../../images/products/piano_4.jpg";

const page1 = () => {
  return (
    <div>
      <section className="my-4">
        <article className="container_kit sm:ml-8 px-3 md:px-0">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            <a
              href="/keza/product/1"
              className="card_kit bg-white grid p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-[160px] h-55 border rounded-sm"
            >
              <h3 className="font-semibold">Keza Development Kit</h3>
              <h3 className="font-semibold mb-5">Price : 50,000rwf</h3>
              <Image
                src={keza_kit1}
                alt="Keza Development Kit"
                className="w-fit object-cover"
              />
            </a>

            <a
              href="/keza/product/2"
              className="card_kit bg-white grid p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-40 h-55 border rounded"
            >
              <h3 className="font-semibold">Keza Forklift</h3>
              <h3 className="font-semibold mb-5">Price : 50,000rwf</h3>
              <Image
                src={keza_kit2}
                alt="Keza Forklift"
                className="w-fit object-cover"
              />
            </a>

            <a
              href="/keza/product/3"
              className="card_kit bg-white grid p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-40 h-55 border rounded"
            >
              <h3 className="font-semibold">Keza Kid Trainer Kit</h3>
              <h3 className="font-semibold mb-5">Price : 50,000rwf</h3>
              <Image
                src={keza_kit3}
                alt="Keza Kit Trainer Kit"
                className="w-fit object-cover"
              />
            </a>

            <a
              href="/keza/product/4"
              className="card_kit bg-white grid p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-40 h-55 border rounded"
            >
              <h3 className="font-semibold">Keza Traffic Light</h3>
              <h3 className="font-semibold mb-5">Price : 50,000rwf</h3>
              <Image
                src={keza_kit4}
                alt="Keza Humanoid image"
                className="w-full object-cover"
              />
            </a>
          </div>
        </article>
      </section>
      {/* <div className="m-2 min-h-[40vh] flex gap-2">
        <ProductCard image={KezaDEvelopmentKit} name="Keza Development Kit" price={20} category="Keza Kit" id={1}/>
        <ProductCard image={KezaPiano} name="Keza Piano" price={20} category="Keza Kit" id={2}/>
      </div> */}
    </div>
  );
};

export default page1;
