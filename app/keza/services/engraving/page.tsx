import React from 'react';
import Image from 'next/image';
import laser_cutter_machine from "../../../images/laser-cutter-machine.webp";
import Robotics_gallery from './Robotics_gallery';

const page = () => {
  return (
    <div>
        <main>
    <section className="container mx-auto">
      <article className="grid md:grid-cols-2 md:gap-x-14 my-10 px-3 md:px-0">
        <div>
          <Image src={laser_cutter_machine} alt="" className="rounded-md sticky top-0 overflow-hidden" />
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
   <Robotics_gallery />
  </main>
    </div>
  )
}

export default page
