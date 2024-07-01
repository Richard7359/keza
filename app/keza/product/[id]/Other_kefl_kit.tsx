import React from 'react'
import Image from 'next/image'
import keza_kit1 from "../../../images/kezaz-development-kit.png";
import keza_kit2 from "../../../images/keza-forklift.png";
import keza_kit3 from "../../../images/keza-kid-trainer-kit-full.png";
import keza_kit4 from "../../../images/keza-traffic-light.png";


const Other_kefl_kit = () => {
  return (
    <div>
      
    <section className="my-10">
      <article className="container mx-auto px-3 md:px-0">
        <div className="mt-20">
          <h2 className="mb-3 font-bold">
            Other <strong>KEFL</strong> teaching materials you might like
          </h2>
          <hr className="border-[#3f3e45] mb-10" />
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
        {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          <a href="./keza-forklift.html"
            className="card bg-white grid grid-rows-2 p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-40 h-52 border rounded">
            <h3 className="font-semibold pb-5 pt-2">Keza Forklift</h3>
            <img src="/assets/keza-forklift.png" alt="Keza Forklift" className="w-fit object-cover" />
          </a>

          <a href="./keza-kid-trainer-kit.html"
            className="card bg-white grid grid-rows-2 p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-40 h-52 border rounded">
            <h3 className="font-semibold pb-5 pt-2">Keza Kid Trainer Kit</h3>
            <img src="/assets/keza-kid-trainer-kit-full.png" alt="Keza Kit Trainer Kit" className="w-fit object-cover" />
          </a>

          <a href="./keza-traffic-light.html"
            className="card bg-white grid grid-rows-2 p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-40 h-52 border rounded">
            <h3 className="font-semibold pb-5 pt-2">Keza Traffic Light</h3>
            <img src="/assets/keza-traffic-light.png" alt="Keza Humanoid image" className="w-full object-cover" />
          </a>

          <a href="./keza-car.html"
            className="card bg-white grid grid-rows-2 p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-40 h-52 border rounded">
            <h3 className="font-semibold pb-5 pt-2">Keza Car</h3>
            <img src="/assets/keza-car.JPG" alt="Keza Car image" className="w-full object-cover" />
          </a>
        </div> */}
      </article>
    </section>
    </div>
  )
}

export default Other_kefl_kit
