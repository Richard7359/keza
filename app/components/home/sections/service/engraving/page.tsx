import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div>
        <main>
    <section className="container mx-auto">
      <article className="grid md:grid-cols-2 md:gap-x-14 my-10 px-3 md:px-0">
        <div>
          <Image src="/assets/laser-cutter-machine.webp" alt="" className="rounded-md sticky top-0 overflow-hidden" />
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-4 mt-4 md:mt-0">
            Cutting & Engraving of designs
          </h3>
          <p className="text-paragraph">
            A laser cutter machine is a versatile and precise tool used in
            various industries for cutting, engraving, and etching materials
            with a high-powered laser beam. It operates by directing the laser
            beam onto the surface of the material, which melts, vaporizes, or
            burns away the material to create intricate and accurate cuts,
            designs, or patterns. Laser cutters are commonly used in
            industries such as manufacturing, crafting, prototyping, and even
            in artistic applications.
          </p>
          <br />
          <p className="text-paragraph">
            The machine&apos;s precision is derived from its ability to focus the
            laser beam to an extremely small point, allowing for intricate and
            fine detail work. The laser cutter&apos;s versatility is demonstrated
            through its capability to work with a wide range of materials,
            including wood, acrylic,leather, fabric, paper, and more. The
            machine&apos;s software allows users to create and upload designs,
            which the laser cutter then follows to produce the desired
            outcome.
          </p>
          <br />
          <p className="text-paragraph">
            Laser cutters offer several advantages, including minimal material
            wastage, high accuracy, speed, and the ability to create complex
            shapes that may be challenging to achieve with traditional cutting
            methods. They find application in industries such as signage
            production, jewelry making, architectural modeling, and even in
            educational settings for STEM-related projects.
          </p>
          <br />
          <p className="text-paragraph">
            It&apos;s important to note that laser cutting involves the use of
            powerful lasers, so proper safety precautions and training are
            necessary for their operation.
          </p>
        </div>
      </article>
    </section>
    <section>
      <article className="container mx-auto px-3 mt-20 md:px-0">
        <div className="flex flex-col items-center text-center mb-10 md:p-0">
          <h2 className="font-extrabold text-3xl md:text-4xl md:pr-8">
            Robotics Gallery
          </h2>
          <p className="text-sm mt-1 text-paragraph">
            Testimonials of the kids actively practicing robotics
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:grid-rows-3 gap-2 mb-10">
          
          <div className="h-60">
            <Image src="/assets/bootcamp.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src="/assets/bootcamp-image-4.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src="/assets/bootcamp.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src="/assets/bootcamp.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src="/assets/bootcamp-image-4.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src="/assets/bootcamp-image-4.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src="/assets/bootcamp.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src="/assets/laser-cutter-machine.webp" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src="/assets/bootcamp.jpg" alt="" className="rounded-md w-full h-full object-cover" />
          </div>
        </div>
      </article>
    </section>

    <section className="my-10">
      <article className="container mx-auto px-3 md:px-0">
        <div className="mt-20">
          <h2 className="mb-3 font-bold">
            Explore other courses <strong>KEFL</strong> provides to students
          </h2>
          <hr className="border-[#3f3e45] mb-10" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          <a href="./keza-forklift.html"
            className="card bg-white grid grid-rows-2 p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-40 h-52 border rounded">
            <h3 className="font-semibold pb-5 pt-2">Keza Forklift</h3>
            <Image src="/assets/keza-forklift.png" alt="Keza Forklift" className="w-fit object-cover" />
          </a>

          <a href="./keza-kid-trainer-kit.html"
            className="card bg-white grid grid-rows-2 p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-40 h-52 border rounded">
            <h3 className="font-semibold pb-5 pt-2">Keza Kid Trainer Kit</h3>
            <Image src="/assets/keza-kid-trainer-kit-full.png" alt="Keza Kit Trainer Kit" className="w-fit object-cover" />
          </a>

          <a href="./keza-traffic-light.html"
            className="card bg-white grid grid-rows-2 p-3 shadow-lg hover:shadow-2xl hover:cursor-pointer min-w-40 h-52 border rounded">
            <h3 className="font-semibold pb-5 pt-2">Keza Traffic Light</h3>
            <Image src="/assets/keza-traffic-light.png" alt="Keza Humanoid image" className="w-full object-cover" />
          </a>
        </div>
      </article>
    </section>
  </main>
    </div>
  )
}

export default page
