import Image from "next/image";
import laser_cutter_machine from "../../../images/laser-cutter-machine.webp";
import { TbBrandCitymapper } from "react-icons/tb";
import RightImageService from "./service/RightImageService";
import LeftImageService from "./service/LeftImageService";
export default function Services() {
  const cutting_engraving = {
    title: "Cutting & Engraving of Designs",
    steps: [
      "Design Prep and Material Selection",
      "Prototyping",
      "Engraving",
      "Mass Production",
    ],
    link: "",
    description:
      "A laser cutter machine is a sophisticated tool employing a focused laser beam to precisely cut, engrave, or mark materials across industries. It revolutionizes manufacturing and design by enabling clean, intricate cuts and engravings on diverse materials. These machines are vital, offering versatility, precision, and efficiency for modern manufacturing, design, and creativity.",
    image: laser_cutter_machine,
    subTitle: "Description",
  };
  return (
    <section className="relative text-black font-montserrat tracking-tighter">
      <h2 className="text-4xl font-bold text-center pt-12">
        Services we provide
      </h2>
      <div className="flex justify-center">
        {" "}
        <p className="mt-1 text-paragraph text-center max-w-2xl">
          Below are the courses we provide to young leaners joined us. Explore
          each course below by click the read more.
        </p>
      </div>
      <RightImageService service={cutting_engraving} />
      <LeftImageService service={cutting_engraving} />
    </section>
  );
}
