import React from "react";
import Image from "next/image";
import keza_kit1 from "../../../images/kezaz-development-kit.png";
import keza_kit2 from "../../../images/keza-forklift.png";
import keza_kit3 from "../../../images/keza-kid-trainer-kit-full.png";
import keza_kit4 from "../../../images/keza-traffic-light.png";

const Kits = () => {
  return (
    <div className="my-8">
      <article className="container_kit mx-auto px-3 md:px-0">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-deepSkyBlue relative inline-block mr-2">
              <span className="relative text-white p-3 ">Locally made</span>
            </span>
            teaching materials
          </h2>
          <p className="my-5">
            Explore by looking at different KEFL products, what it helps
            students and how you may get them.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          <a
            href="/keza/product/1"
            className="card_kit bg-white grid p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-[160px] h-52 border rounded-sm"
          >
            <h3 className="font-semibold mb-5">Keza Development Kit</h3>
            <Image
              src={keza_kit1}
              alt="Keza Development Kit"
              className="w-fit object-cover"
            />
          </a>

          <a
            href="/keza/product/2"
            className="card_kit bg-white grid p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-40 h-52 border rounded"
          >
            <h3 className="font-semibold mb-5">Keza Forklift</h3>
            <Image
              src={keza_kit2}
              alt="Keza Forklift"
              className="w-fit object-cover"
            />
          </a>

          <a
            href="/keza/product/3"
            className="card_kit bg-white grid p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-40 h-52 border rounded"
          >
            <h3 className="font-semibold mb-5">Keza Kid Trainer Kit</h3>
            <Image
              src={keza_kit3}
              alt="Keza Kit Trainer Kit"
              className="w-fit object-cover"
            />
          </a>

          <a
            href="/keza/product/4"
            className="card_kit bg-white grid p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-40 h-52 border rounded"
          >
            <h3 className="font-semibold mb-5">Keza Traffic Light</h3>
            <Image
              src={keza_kit4}
              alt="Keza Humanoid image"
              className="w-full object-cover"
            />
          </a>

          <a
            href="/keza/product"
            className="card_kit bg-white p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-40 h-52 border rounded flex justify-center items-center"
          >
            <span className="inline-block mt-3 text-burgundy hover:underline">
              View all KEFL products
              <span className="animate-arrow">→</span>
            </span>
          </a>
        </div>
      </article>
    </div>
  );
};

export default Kits;
