import Image from "next/image";
import { TbBrandCitymapper } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
const Engraving = ({ service }: ServiceProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex flex-col justify-center w-[70%]">
        <h2 className="sm:text-2xl font-bold pb-2 uppercase">
          {service.title}
        </h2>
        <Tabs defaultValue="summary" className="flex flex-col justify-center">
          <TabsList className="flex justify-center">
            <div className="grid grid-cols-2 w-[100%]">
              <TabsTrigger value="summary">Summary Section</TabsTrigger>
              <TabsTrigger value="production">Mass Production</TabsTrigger>
            </div>
          </TabsList>
          <TabsContent value="summary" className="flex justify-center">
            <div className=" w-[100%]">
              <div className="container mx-auto px-4">
                <div className=" flex flex-col-reverse md:flex-row items-center mt-1 bg-custom-gray rounded-lg">
                  <div className="md:w-1/2 md:h-[427px] relative rounded-tl-lg sm:rounded-tl-none rounded-tr-lg sm:rounded-br-lg">
                    <Image
                      src={service.image}
                      alt="Discovery Process"
                      className="w-full h-full object-cover rounded-tr-lg sm:rounded-tr-none rounded-tl-lg sm:rounded-bl-lg border border-custom-gray"
                    />
                  </div>
                  <div className="md:w-1/2 md:h-[427px] ">
                    <div className="p-8">
                      <p className="font-bold text-xl py-6">
                        {service.subTitle}
                      </p>
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
          </TabsContent>
          <TabsContent value="production" className="flex justify-center">
            <div className="w-[100%]">
              <div className="container mx-auto px-4">
                <div className=" flex flex-col-reverse md:flex-row items-center mt-1 bg-custom-gray rounded-lg">
                  <div className="md:w-1/2 md:h-[427px] ">
                    <div className="p-8">
                      <p className="font-bold text-xl py-6">
                        {service.subTitle}
                      </p>
                      <p className="mb-8 font-times font-custom-light text-lg">
                        {service.description}
                      </p>
                      <button className="bg-burgundy rounded-md px-4 py-2 text-white flex items-center my-6">
                        Read more{" "}
                        <TbBrandCitymapper className="font-bold size-6 mx-2" />
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:h-[427px] relative rounded-tl-lg sm:rounded-tl-none rounded-tr-lg sm:rounded-br-lg">
                    <Image
                      src={service.image}
                      alt="Discovery Process"
                      className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg sm:rounded-tl-none sm:rounded-tr-lg sm:rounded-br-lg border border-custom-gray"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Engraving;
