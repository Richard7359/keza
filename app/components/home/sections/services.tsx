import Image from "next/image";
import ai2 from "../../../images/ai2.png";

export default function Services() {
  return (
    <section className="relative h-screen text-black">
      <h2 className="text-4xl font-bold mb-8 text-center">
      Services we provide
          </h2>
      <div className="flex justify-center">
        {" "}
        <p className="mt-1 text-paragraph text-center max-w-2xl">
          Below are the courses we provide to young leaners joined us. Explore
          each course below by click the read more.
        </p>
      </div>
      <div className="flex justify-center"> 
      <div className="py-16 w-[80%]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 uppercase">
            Discovery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border border-black">
            <div className="flex justify-center md:border-r border-black">
              <h3 className="text-lg font-bold m-4">
                Problem Definition
              </h3>
            </div>
            <div className="flex justify-center md:border-r border-black">
              <h3 className="text-lg font-bold m-4">
                Problem Definition
              </h3>
            </div>
            <div className="flex justify-center md:border-r border-black">
              <h3 className="text-lg font-bold m-4">
                Problem Definition
              </h3>
            </div>
            <div className="flex justify-center md:border-r border-black">
              <h3 className="text-lg font-bold m-4">
                Problem Definition
              </h3>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-16 border border-black">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-lg mb-8">
                Our discovery process evaluates your business, researches your
                brand, and provides solutions to your challenges. We answer
                critical strategic questions about your product vision and
                target market, ensuring a successful partnership.
              </p>
              <div className="flex items-center justify-between">
                {/* Add logos or icons */}
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src={ai2}
                alt="Discovery Process"
                width={640}
                height={427}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div></div>
    </section>
  );
}
