"use client";

import Image from "next/image";
import mineduc from "../../../images/ministryofeducation.png";
import reb_white from "../../../images/reb_white.png";
import rightToPlay from "../../../images/rightToPlay.png";
import unesco from "../../../images/unesco.png";
import jica from "../../../images/jica.png";
import sakura from "../../../images/image.png";

export default function Scroling_patners() {
  const partners = [
    {
      name: "Ministry of Education",
      logo: mineduc,
      alt: "Ministry of Education Logo",
    },
    {
      name: "Rwanda Education Board",
      logo: reb_white,
      alt: "Rwanda Education Board",
    },
    {
      name: "Right to play",
      logo: rightToPlay,
      alt: "Right to play",
    },
    {
      name: "unesco",
      logo: unesco,
      alt: "unesco",
    },
    {
      name: "jica",
      logo: jica,
      alt: "jica",
    },
    {
      name: "sakura",
      logo: sakura,
      alt: "sakura",
      // style: "w-[450px]",
    },
  ];

  return (
    <section className="w-[100%] mt-4">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
          {partners.map((partner, index) => (
            <li key={index}>
              <Image
                src={partner.logo}
                alt={partner.alt}
                className="w-[250px] h-[130px] rounded-md"
                // className={`${partner.style ? partner.style : "w-[250px]"} h-[130px] mr-2 rounded-md`}
              />
            </li>
          ))}
          {partners.map((partner, index) => (
            <li key={index}>
              <Image
                src={partner.logo}
                alt={partner.alt}
                className="w-[250px] h-[130px] rounded-md"
                // className={`${partner.style ? partner.style : "w-[250px]"} h-[130px] mr-2 rounded-md`}
              />
            </li>
          ))}
          {partners.map((partner, index) => (
            <li key={index}>
              <Image
                src={partner.logo}
                alt={partner.alt}
                className="w-[250px] h-[130px] rounded-md"
                // className={`${partner.style ? partner.style : "w-[250px]"} h-[130px] mr-2 rounded-md`}
              />
            </li>
          ))}
          {partners.map((partner, index) => (
            <li key={index}>
              <Image
                src={partner.logo}
                alt={partner.alt}
                className="w-[250px] h-[130px] rounded-md"
                // className={`${partner.style ? partner.style : "w-[250px]"} h-[130px] mr-2 rounded-md`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
