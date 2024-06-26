import Image from "next/image";
import laser_cutter_machine from "../../../../images/laser-cutter-machine.webp";
import { TbBrandCitymapper } from "react-icons/tb";

export interface ServiceProps {
  service: {
    title: string;
    steps: string[];
    link?: string;
    description: string;
    image: any;
    subTitle?: string;
  };
}
const Training = ({ service }: ServiceProps) => {
  return (
    <div className="flex justify-center">
      <div className="py-10 w-[80%]">
        <div className="container mx-auto px-4">
          <h2 className="sm:text-2xl font-bold pb-3 uppercase">
            {service.title}
          </h2>
          <div className="flex flex-col md:flex-row items-center mt-2 bg-custom-gray rounded-lg">
            <div className="md:w-1/2 md:h-[427px] relative rounded-tr-lg sm:rounded-tr-none rounded-tl-lg  sm:rounded-bl-lg">
              <Image
                src={service.image}
                alt="Discovery Process"
                className="w-full h-full object-cover rounded-tr-lg sm:rounded-tr-none rounded-tl-lg sm:rounded-bl-lg border border-custom-gray"
              />
            </div>
            <div className="md:w-1/2 md:h-[427px]">
              <div className="p-8">
                <p className="font-bold text-xl py-6">{service.subTitle}</p>
                <p className="mb-8 font-times font-custom-light text-lg">
                  {service.description}
                </p>
                <button className="bg-burgundy rounded-md px-4 py-2 text-white flex items-center my-6">
                  Read more{" "}
                  <TbBrandCitymapper className="font-bold size-6 mx-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
