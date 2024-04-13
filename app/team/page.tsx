import Navigation from "../components/Navigation_bar/Navigation";
import Image from "next/image";
import Antoine from "../images/Antoine-MUTSINZI.png";
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
      title: "Board Chairman",
      names: "Antoine Mutsinzi",
      image: Antoine,
      media: [
        { icon: <IoLogoTwitter />, url: "https://twitter.com/a_mutsinzi" },
      ],
      bio: "Antoine, with over 5 years as Director of Teacher Development at Rwanda Education Board, played pivotal roles in implementing the Competence Based Curriculum.",
    },
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
      title: "Board Chairman",
      names: "Antoine Mutsinzi",
      image: Antoine,
      media: [
        { icon: <IoLogoTwitter />, url: "https://twitter.com/a_mutsinzi" },
      ],
      bio: "Antoine, with over 5 years as Director of Teacher Development at Rwanda Education Board, played pivotal roles in implementing the Competence Based Curriculum.",
    },
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
              <div className="flex justify-center" key={person.title}>
                <div className="w-[400px] h-[600px] bg-white rounded-lg">
                  <div className="h-[65%] w-full  flex justify-center items-center">
                    <Image
                      src={person.image}
                      alt={person.names}
                      className="w-[90%] h-[90%] object-cover rounded-lg bg-image"
                    />
                  </div>

                  <div className="flex justify-center items-cente">
                    <div className="w-[90%]">
                      <p className="text-gray-600 font-bold tracking-wider text-xs uppercase">
                        {person.title}
                      </p>
                      <p className="text-black font-bold text-xl py-2">
                        {person.names}
                      </p>
                      <p className="text-gray-700 text-sm font-light">
                        {person.bio}
                      </p>
                      <div className="py-3 flex">
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
