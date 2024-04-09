import Image from "next/image";
import laser_cutter_machine from "../../../../images/laser-cutter-machine.webp";
import { TbBrandCitymapper } from "react-icons/tb";

export interface ServiceProps {
  service: { title: string; steps: string[] , link?: string, description : string, image: any, subTitle?: string};
}
const RightImageService = ({ service }: ServiceProps) => {
  return (
    <div className="flex justify-center">
      <div className="py-16 w-[80%]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold pb-6 uppercase">{service.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border border-grey">
            {service.steps.map((step, id) => {
              return (
                <div
                  key={id}
                  className="flex justify-center md:border-r border-gray"
                >
                  <p className="text-sm font-semibold m-4 my-8 uppercase">
                    {step}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col md:flex-row items-center mt-8 bg-custom-gray rounded-lg">
            <div className="md:w-1/2 ">
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
            <div className="md:w-1/2 relative rounded-tr-lg rounded-br-lg">
              <Image
                src={service.image}
                alt="Discovery Process"
                width={640}
                height={427}
                className="w-full h-full object-cover rounded-tr-lg rounded-br-lg"
              />
              <div className="absolute inset-0 bg-black opacity-15 rounded-tr-lg rounded-br-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightImageService;