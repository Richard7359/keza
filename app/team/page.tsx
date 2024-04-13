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
import Dei from "../images/dei_image.jpg"

import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaFlickr } from "react-icons/fa";
import Link from "next/link";

export default function NavigationMenuDemo() {
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
      media: [
        { icon: <IoLogoTwitter />, url: "" },
      ],
      bio: "An educationist and economist with over a decade of senior leadership experience across Rwanda and Africa, specializing in school leadership, teacher development, and inclusive education.",
    },
    {
      title: "Managing Director",
      names: "NGENDABANGA Celestin",
      image: Celestin,
      media: [
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ngendabanga-celestin-89a543210/" },
        { icon: <IoLogoTwitter />, url: "https://twitter.com/NgendabangaCel2" }
      ],
      bio: "As Managing Director at Keza Education Future Lab, Mr. NGENDABANGA blends teaching and a Master's from the Africa Centre of Excellence for Innovative Teaching and Learning.",
    },
    {
      title: "Technology & digital play-based teaching and learning Senior Advisor",
      names: "NIYIGENA Erneste",
      image: Erneste,
      media: [
        { icon: <FaLinkedin />, url: "https://twitter.com/Erneste_N_1991" },
        { icon: <IoLogoTwitter />, url: "https://www.linkedin.com/in/erneste-niyigena-10aa15102/" },
      ],
      bio: "Electronics Engineer with over 5 years' experience in design and maintenance of electrical systems, specializes in hardware development for mobile devices and field engineering for Zipline International.",
    },
    {
      title: "Finance & Administration",
      names: "IRADUKUNDA Audrey Audrey",
      image: Ariela,
      media: [
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ariela-audrey-iradukunda-b930aa1b2/" },
        { icon: <IoLogoTwitter />, url: "https://twitter.com/iraduariela" },
      ],
      bio: "",
    },
    {
      title: "Robotics & Programming Senior Trainer",
      names: "UMULISA Clarisse",
      image: Clarise,
      media: [
        { icon: <FaLinkedin />, url: "" },
        { icon: <IoLogoTwitter />, url: "" },
      ],
      bio: "",
    },
    {
      title: "Mechanical Engineer",
      names: "HABINEZA Raban",
      image: Raban,
      media: [
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/habineza-raban-a78397162/" },
        { icon: <IoLogoTwitter />, url: "" },
      ],
      bio: "",
    },
    {
      title: "Finance Officer",
      names: "UMUTESI Carine",
      image: Carine,
      media: [
        { icon: <FaLinkedin />, url: "" },
        { icon: <IoLogoTwitter />, url: "" },
      ],
      bio: "",
    },
    {
      title: "Robotics & Programming Trainer",
      names: "ISHIMWE Thierry",
      image: Thiery,
      media: [
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ishimwe-thierry-1b4420240/" },
        { icon: <IoLogoTwitter />, url: "" },
      ],
      bio: "",
    },
    {
      title: "Embeded Systems Engineer",
      names: "NIZEYIMANA Felix",
      image: Felix,
      media: [
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ishimwe-thierry-1b4420240/" },
        { icon: <IoLogoTwitter />, url: "" },
      ],
      bio: "",
    },
    {
      title: "Electromechanical Engineer",
      names: "DEI François Audace",
      image: Dei,
      media: [
        { icon: <FaLinkedin />, url: "" },
        { icon: <IoLogoTwitter />, url: "" },
      ],
      bio: "",
    }
  ];
  return (
    <div className="bg-team-bg pb-4">
      <Navigation />
      <div className="pt-6">
        <p className="text-center py-2">Our Team</p>
        <p className="text-center">
          this is some text to be put here for a specific reason
        </p>
        <div className="flex justify-center">
          <div className="w-[94%] grid grid-cols-4">
            {staff.map((person) => (
              <div className="flex justify-center  mt-12" key={person.title}>
                <div className="w-[400px] h-[600px] bg-white rounded-lg">
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
                        {person.bio}
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
  );
}
