import Image from "next/image";
import laser_cutter_machine from "../../../../images/laser-cutter-machine.webp";
import { TbBrandCitymapper } from "react-icons/tb";
const SteamTraining = () => {
return (
    <div className="flex justify-center">
        <div className="py-16 w-[80%]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold pb-6 uppercase">
              Cutting & Engraving of Designs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border border-grey">
              <div className="flex justify-center md:border-r border-gray">
                <p className="text-sm font-semibold m-4 my-8 uppercase">Design Prep and Material Selection</p>
              </div>
              <div className="flex justify-center md:border-r border-gray">
                <p className="text-sm font-semibold m-4 my-8 uppercase">Prototyping</p>
              </div>
              <div className="flex justify-center md:border-r border-gray">
                <p className="text-sm font-semibold m-4 my-8 uppercase">Engraving</p>
              </div>
              <div className="flex justify-center md:border-r border-gray">
                <p className="text-sm font-semibold m-4 my-8 uppercase">Mass Production</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mt-8 bg-custom-gray rounded-lg">
            <div className="md:w-1/2 relative rounded-tr-lg rounded-bl-lg">
                <Image
                  src={laser_cutter_machine}
                  alt="Discovery Process"
                  width={640}
                  height={427}
                  className="w-full h-full object-cover rounded-tl-lg rounded-br-lg" 
                />
                <div className="absolute inset-0 bg-black opacity-15 rounded-tl-lg rounded-bl-lg"></div>
              </div>
              <div className="md:w-1/2 ">
                <div className="p-8">
                  <p className="font-bold text-xl py-6">Description</p>
                  <p className="mb-8 font-times font-custom-light text-lg">
                    A laser cutter machine is a sophisticated tool employing a
                    focused laser beam to precisely cut, engrave, or mark
                    materials across industries. It revolutionizes manufacturing
                    and design by enabling clean, intricate cuts and engravings
                    on diverse materials. These machines are vital, offering
                    versatility, precision, and efficiency for modern
                    manufacturing, design, and creativity.
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
)
}

export default SteamTraining;