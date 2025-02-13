"use client";

import Link from "next/link";
import Image from "next/image";
import mineduc from "../../../images/ministryofeducation.png";
import reb_white from "../../../images/reb_white.png";
import rightToPlay from "../../../images/rightToPlay.png";
import unesco from "../../../images/unesco.png";
import jica from "../../../images/jica.png";
import sakura from "../../../images/sakura.png";

export default function Patners() {
  const partners = [
    {
      name: "Ministry of Education",
      logo: mineduc,
      alt: "Ministry of Education Logo",
      link: "https://www.mineduc.gov.rw/",
    },
    {
      name: "Rwanda Education Board",
      logo: reb_white,
      alt: "Rwanda Education Board",
      link: "https://www.reb.gov.rw/home",
    },
    {
      name: "Right to play",
      logo: rightToPlay,
      alt: "Right to play",
      link: "https://righttoplay.com/en/",
    },
    {
      name: "unesco",
      logo: unesco,
      alt: "unesco",
      link: "https://www.unesco.org/en",
    },
    {
      name: "jica",
      logo: jica,
      alt: "jica",
      link: "https://www.jica.go.jp/english/",
    },
    {
      name: "sakura",
      logo: sakura,
      alt: "sakura",
      link: "",
    },
  ];

  return (
    <section className="mt-4 p-2 flex justify-center">
      <div className="w-[99%] sm:w-[50%] mt-4 p-2">
        <div className="flex flex-col gap-4 items-center text-center my-10 md:mt-20 md:mb-24 md:p-0">
          <h2 className="font-extrabold text-3xl md:text-5xl">Our partners</h2>
          <p className="mt-1 text-paragraph text-center max-w-xl">
            <strong>KEFL</strong> is trusted and partnering with the below
            organisations.
          </p>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
            {partners.map((partner, index) => (
              <li key={index} className="hover-container relative group">
                <div className="w-[90px] h-[60px] sm:w-[140px] sm:h-[80px] rounded-md overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    className="w-[90px] h-[60px] sm:w-[140px] sm:h-[80px] rounded-md"
                  />
                  <div className="">
                    <div className="overlay">
                      <div className="text-content">
                        {/* <h3 className="text-center font-bold text-white">
                          {partner.name}
                        </h3> */}
                        <div className="flex justify-center">
                          <Link
                            href={`${partner.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[5px] px-4 rounded mt-2">
                              Visit
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {partners.map((partner, index) => (
              <li key={index} className="hover-container relative group">
                <div className="w-[90px] h-[60px] sm:w-[140px] sm:h-[80px] rounded-md overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    className="w-[90px] h-[60px] sm:w-[140px] sm:h-[80px] rounded-md"
                  />
                  <div className="">
                    <div className="overlay">
                      <div className="text-content">
                        {/* <h3 className="text-center font-bold text-white">
                          {partner.name}
                        </h3> */}
                        <div className="flex justify-center">
                          <Link
                            href={`${partner.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[5px] px-4 rounded mt-2">
                              Visit
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {partners.map((partner, index) => (
              <li key={index} className="hover-container relative group">
                <div className="w-[90px] h-[60px] sm:w-[140px] sm:h-[80px] rounded-md overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    className="w-[90px] h-[60px] sm:w-[140px] sm:h-[80px] rounded-md"
                  />
                  <div className="">
                    <div className="overlay">
                      <div className="text-content">
                        {/* <h3 className="text-center font-bold text-white">
                          {partner.name}
                        </h3> */}
                        <div className="flex justify-center">
                          <Link
                            href={`${partner.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[5px] px-4 rounded mt-2">
                              Visit
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {partners.map((partner, index) => (
              <li key={index} className="hover-container relative group">
                <div className="w-[90px] h-[60px] sm:w-[140px] sm:h-[80px] rounded-md overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    className="w-[90px] h-[60px] sm:w-[140px] sm:h-[80px] rounded-md"
                  />
                  <div className="">
                    <div className="overlay">
                      <div className="text-content">
                        {/* <h3 className="text-center font-bold text-white">
                          {partner.name}
                        </h3> */}
                        <div className="flex justify-center">
                          <Link
                            href={`${partner.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[5px] px-4 rounded mt-2">
                              Visit
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {partners.map((partner, index) => (
              <li key={index} className="hover-container relative group">
                <div className="w-[90px] h-[60px] sm:w-[140px] sm:h-[80px] rounded-md overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    className="w-[90px] h-[60px] sm:w-[140px] sm:h-[80px] rounded-md"
                  />
                  <div className="">
                    <div className="overlay">
                      <div className="text-content">
                        {/* <h3 className="text-center font-bold text-white">
                          {partner.name}
                        </h3> */}
                        <div className="flex justify-center">
                          <Link
                            href={`${partner.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[5px] px-4 rounded mt-2">
                              Visit
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
