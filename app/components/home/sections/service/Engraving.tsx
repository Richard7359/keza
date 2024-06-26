import Image from "next/image";
import { TbBrandCitymapper } from "react-icons/tb";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export interface ServiceProps {
  service: { title: string; steps: string[] , link?: string, description : string, image: any, subTitle?: string};
}
const Engraving = ({ service }: ServiceProps) => {
  return (
    <div className="flex justify-center">
      <div className="py-16 w-[80%]">
        <div className="container mx-auto px-4">
          <h2 className="sm:text-2xl font-bold pb-6 uppercase">{service.title}</h2>
          <div className="hidden sm:grid sm:grid-cols-1 md:grid-cols-4 gap-8 border border-grey sm:block">
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
          <div className=" flex flex-col-reverse md:flex-row items-center mt-8 bg-custom-gray rounded-lg">
            <div className="md:w-1/2 md:h-[427px] ">
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
    </div>
  );
};

export default Engraving;
