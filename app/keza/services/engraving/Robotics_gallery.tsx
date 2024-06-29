import React from 'react';
import Image from 'next/image';
import laser_cutter_machine from "../../../images/laser-cutter-machine.webp";
import child from "../../../images/bootcamp-image-4.jpg";
import bootcamp from "../../../images/bootcamp-image-2.jpg";
import bootcamp2 from "../../../images/bootcamp.jpg";
import bootcamp4 from "../../../images/bootcamp-image-4.jpg";

const Robotics_gallery = () => {
  return (
    <div>
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
            <Image src={bootcamp} alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src={child} alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src={bootcamp2} alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src={bootcamp4} alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src={bootcamp2} alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src={bootcamp} alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src={child} alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src={bootcamp} alt="" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="h-60">
            <Image src={bootcamp2} alt="" className="rounded-md w-full h-full object-cover" />
          </div>
        </div>
      </article>
    </section>
    </div>
  )
}

export default Robotics_gallery
