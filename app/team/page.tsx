import Navigation from "../components/Navigation_bar/Navigation";
import Image from "next/image";
import Antoine from "../images/Antoine-MUTSINZI.png";
import Emile from "../images/MUKIZA-Emile.png";
import Celestin from "../images/celestin_image.png";
import Mugiraneza from "../images/Jean-Pierre-Mugiraneza.png";
import Erneste from "../images/erneste-niyigena.png";
import Ariela from "../images/ariela.png";
import Clarise from "../images/clarisse.jpg";
import Raban from "../images/rabanImage.jpg";
import Carine from "../images/carine.jpg";
import Thiery from "../images/Thierry.png";
import Felix from "../images/felix.jpg";
import Dei from "../images/dei_image.jpg";

import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import Footer from "../components/Footer";

import { TeamDialog } from "../components/team/Dialog";

export default function Team() {
  const staff = [
    {
      title: "Board Chairman",
      names: "Antoine Mutsinzi",
      image: Antoine,
      media: [
        { icon: <IoLogoTwitter />, url: "https://twitter.com/a_mutsinzi" },
      ],
      bio: "Antoine, with over 5 years as Director of Teacher Development at Rwanda Education Board, played pivotal roles in implementing the Competence Based Curriculum.",
    },
    {
      title: "Curriculum and instructional quality manager",
      names: "MUKIZA Emile",
      image: Emile,
      media: [
        { icon: <IoLogoTwitter />, url: "https://twitter.com/Mukiza78Emile" },
      ],
      bio: "Emile Mukiza, an Education Advisor, brings expertise in curriculum development and teacher training with a Master's in Education Administration.",
    },
    {
      title: "Director of Research, Development and partnership",
      names: "MUGIRANEZA Jean Pierre",
      image: Mugiraneza,
      media: [{ icon: <IoLogoTwitter />, url: "" }],
      bio: "An educationist and economist with over a decade of senior leadership experience across Rwanda and Africa, specializing in school leadership, teacher development, and inclusive education.",
    },
    {
      title: "Managing Director",
      names: "NGENDABANGA Celestin",
      image: Celestin,
      media: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/ngendabanga-celestin-89a543210/",
        },
        { icon: <IoLogoTwitter />, url: "https://twitter.com/NgendabangaCel2" },
      ],
      bio: "As Managing Director at Keza Education Future Lab, Mr. NGENDABANGA blends teaching and a Master's from the Africa Centre of Excellence for Innovative Teaching and Learning.",
    },
    {
      title: "Digital Learning Senior Advisor",
      names: "NIYIGENA Erneste",
      image: Erneste,
      media: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/erneste-niyigena-10aa15102/",
        },
        {
          icon: <IoLogoTwitter />,
          url: "https://twitter.com/Erneste_N_1991",
        },
      ],
      bio: "Electronics Engineer with over 5 years' experience in design and maintenance of electrical systems, specializes in hardware development for mobile devices and field engineering for Zipline International.",
    },
    {
      title: "Finance & Administration",
      names: "IRADUKUNDA Audrey Audrey",
      image: Ariela,
      media: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/ariela-audrey-iradukunda-b930aa1b2/",
        },
        { icon: <IoLogoTwitter />, url: "https://twitter.com/iraduariela" },
      ],
      bio: "Audrey is dedicated to ensuring the smooth operation of administrative processes, adept at optimizing workflows and implementing efficient systems. ",
    },
    {
      title: "Robotics & Programming Senior Trainer",
      names: "UMULISA Clarisse",
      image: Clarise,
      media: [
        { icon: <FaLinkedin />, url: "" },
        { icon: <IoLogoTwitter />, url: "" },
      ],
      bio: "Clarisse is committed to creating dynamic learning environments where students can explore, create, and excel in the exciting fields of robotics and programming.",
    },
    {
      title: "Mechanical Engineer",
      names: "HABINEZA Raban",
      image: Raban,
      media: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/habineza-raban-a78397162/",
        },
        { icon: <IoLogoTwitter />, url: "" },
      ],
      bio: "Raban oversees the design and implementation of mechanical systems, ensuring efficiency and reliability in engineering projects at Raban.",
    },
    {
      title: "Finance Officer",
      names: "UMUTESI Carine",
      image: Carine,
      media: [
        { icon: <FaLinkedin />, url: "" },
        { icon: <IoLogoTwitter />, url: "" },
      ],
      bio: "Carine manages financial operations, ensuring fiscal responsibility and compliance with regulations to support Raban's financial health and strategic goals.",
    },
    {
      title: "Robotics & Programming Trainer",
      names: "ISHIMWE Thierry",
      image: Thiery,
      media: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/ishimwe-thierry-1b4420240/",
        },
        { icon: <IoLogoTwitter />, url: "" },
      ],
      bio: "Thierry guides and mentors aspiring engineers in mastering robotics and programming techniques, fostering innovation and expertise within Raban's team.",
    },
    {
      title: "Embeded Systems Engineer",
      names: "NIZEYIMANA Felix",
      image: Felix,
      media: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/ishimwe-thierry-1b4420240/",
        },
        { icon: <IoLogoTwitter />, url: "" },
      ],
      bio: "Felix spearheads the development and integration of embedded systems, optimizing functionality and performance to drive technological advancement.",
    },
    {
      title: "Electromechanical Engineer",
      names: "DEI François Audace",
      image: Dei,
      media: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/dei-francois-audace-119055234/",
        },
        { icon: <IoLogoTwitter />, url: "" },
      ],
      bio: "DEI leads the integration of electrical and mechanical systems, ensuring seamless functionality and performance optimization across projects.",
    },
  ];
  return (
    <div className="">
      <div className="bg-team-bg pb-4">
        <Navigation />
        <div className="pt-4 md:pt-6">
          <h2 className="text-2xl md:text-4xl font-bold text-black tracking-wide text-center">
            Our T<strong className="text-burgundy">e</strong>am
          </h2>
          <p className="text-gray-600 font-serif text-center mx-8">
            Meet a selection of key members from the KEFL team, each
            contributing their expertise in diverse roles:
          </p>
          <div className="flex justify-center">
            <div className="w-[90%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-2">
              {staff.map((person) => (
                <div key={person.title} className="flex justify-center mt-8">
                  <div className="w-[100%] h-[600px] md:w-[400px] md:h-[600px] bg-white rounded-lg">
                    <div className="h-[65%] w-full  flex justify-center items-center">
                      <Image
                        src={person.image}
                        alt={person.names}
                        className="w-[90%] h-[90%] object-cover rounded-lg bg-image"
                      />
                    </div>

                    <div className="flex justify-center h-[35%] items-cente">
                      <div className="relative w-[90%] h-full">
                        <p className="text-gray-600 font-bold tracking-wider text-xs uppercase">
                          {person.title}
                        </p>
                        <p className="text-black font-bold text-xl py-2">
                          {person.names}
                        </p>
                        <p className="text-gray-700 text-sm font-light">
                          <TeamDialog trigger={person.bio} description={person.bio} image={person.image} names={person.names} media={person.media}/>
                        </p>
                        <div className="py-3 flex absolute bottom-0">
                          {person.media.map((social) => (
                            <div
                              key={social.url}
                              className="bg-burgundy text-white hover:text-slate-300 p-2 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer mr-3"
                            >
                              <Link
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {social.icon}
                              </Link>{" "}
                            </div>
                          ))}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
}
