import Navigation from "../../components/Navigation_bar/Navigation";
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
import Footer from "../../components/Footer";

import { TeamDialog } from "../../components/team/Dialog";

export default function Team() {
  const staff = [
    {
      title: "Board Chairman",
      names: "Antoine Mutsinzi",
      image: Antoine,
      media: [
        { icon: <IoLogoTwitter />, url: "https://twitter.com/a_mutsinzi" },
      ],
      bio: "Antoine has extensive experience in teacher development and educational leadership where he served as Director of Teacher Development and Training unit at Rwanda Education Board (REB) for more than 5 years and he have experience to work with Development partners in different area. He has played key roles in important activities in Rwanda’s education system such as the development and implementation of the Competence Based Curriculum (CBC).              He has experience working in strategic planning with both MINECOFIN and MINEDUC and has worked with various organizations and government institutions, on; validating and finalizing partner mapping, overseeing the effectiveness of coordination within their respective sectors. Antoine has occupied high positions in Local Government such as the Chairman of Nyarugenge District Council and now Chairing the Commission of Social Economic and Good Governance in Kigali City Council.              Since November 2018 he has been working as an independent Consultant and he owns companies called Sakura Group Ltd and Keza Education Future Lab (KEFL Ltd) with mission to facilitate Education to transform and create a sustainable impact in society. Academically, Antoine holds a Master’s Degree in Mathematics Education at Naruto University of Education, Japan. He holds a bachelor’s degree in Mathematics and science education from Kigali Institute of Education.",
    },
    {
      title: "Curriculum and instructional quality manager",
      names: "MUKIZA Emile",
      image: Emile,
      media: [
        { icon: <IoLogoTwitter />, url: "https://twitter.com/Mukiza78Emile" },
      ],
      bio: " Mr Emile Mukiza, has a proven track record as an Education Advisor, combines academic expertise with practical experience to drive positive transformations in education. He has a Masters in Education Administration, 12 years experience in education sector, he has an excellent experience in curriculum development, development of teaching and learning materials, teacher training, adult education, Early childhood development. He has actively participated in Competence Based Curriculum (CBC) development in Rwanda through Rwanda Education Board, elaboration, evaluation and procurement of teaching and learning materials for all levels of basic education. He has participated in elaboration of training documents on pedagogy and assessment used in teacher training.He had an opportunity to be in the the region- focused training program in improvement of teaching methodology in primary science and mathematics for sub Saharan Africa, held at OKAYAMA - JAPAN, and also in the training programme (for young leaders) Education (sciences and mathematics at the primary/secondary level 3) course in Yamagata, Japan.              As an author of physics textbooks; he had an opportunity to work as Physics Curriculum developer in National Curriculum Development Center (NCDC) As a supervisor and instructional or program specialist, he had the role of decision-maker, consultant, and specialist in advising Head teachers, teachers, and other professional personnel. His responsibilities included curriculum development, instruction, and teachers’ development through working together and retraining them in an in-service program. As a curriculum specialist, He also served as a member of a management team, his roles were to plan for and supervise curriculum development and implementation, and the provision of centralized instructional services; supervise and direct the work of subject teachers, specialists, and resource teachers.",
    },
    {
      title: "Director of Research, Development and partnership",
      names: "MUGIRANEZA Jean Pierre",
      image: Mugiraneza,
      media: [{ icon: <IoLogoTwitter />, url: "" }],
      bio: "An educationist & economist practitioner able to influence sustainable change across the full spectrum of education provision through designing and leading the implementation of education projects at large scale. 10+ years of experience in senior leadership across a wide range of national and international organizations within Rwanda and Africa.Worked with a range of development organizations including UKAid funded BLF, VVOB – Flemish Aid Organization, UNICEF, VSO, JICA, Save the Children, Plan International as well as MINEDUC and REB. Particular expertise in school leadership, teacher development, special educational needs, gender in education and safeguarding. Recent school leadership and inclusive education experience in Rwanda.",
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
      bio: "Currently, he is serving as the Managing Director at Keza Education Future Lab. Before this role, he worked as a part-time Tutorial Assistant in the MSPE department at the University of Rwanda - College of Education (UR-CE), where he assisted in teaching the Chemical Thermodynamics and Kinetics module. He also had over four years of experience teaching chemistry in secondary schools.In 2019&comma; he pursued postgraduate studies at the Africa Centre of Excellence for Innovative Teaching and Learning in Mathematics and Science (ACEITLMS) through the University of Rwanda College of Education. He successfully completed his Master’s degree in 2022 and has published at least four articles in reputable journals across the country. With a vast background in Mathematics, Chemistry, and Biology for three years in high school, He obtained a bachelor's degree in chemistry from the University of Rwanda in 2018. He has conducted various training sessions throughout his career, including Training TTC trainers, teachers, and young children on Learning through Play with Technology, Robotics, Artificial Intelligence (AI), 3D printing, and Micro-science kits.Pertinent to him Organizing Continuous Professional Development (CPD) sessions on STEM subjects, he has provided mentoring and coaching through Project Based Learning (PBL), and advocated for integrating ICT in education. Additionally, he possesses skills in monitoring and evaluation, curriculum design and implementation, coordination, planning, and educational management. Further, he has expertise in data collection using various tools and data analysis using software tools such as Statistical Package for the Social Sciences (SPSS).As an added strength, Mr. NGENDABANGA effectively manages teams and fosters a collaborative work environment. He firmly believes that a motivated and engaged workforce is the cornerstone of success for any organization.",
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
      bio: "Erneste NIYIGENA an Electronics Engineer with more than 5 years of experience in design, development, maintenance, and troubleshooting electrical and electronic systems. Seeking to continue to leverage my experience in the technology world that has an immediate impact on the community while bringing solutions to the community’s problems. Erneste Niyigena has worked in Pivot access from 2016 up 2019 as hardware developer of mobile devices. At this time He was responsible for the design and development of schematics and printed circuit boards of mobile Point Of Sale machines.            From the end of 2019 up now he is part time electrical field engineer in zipline international responsible for routine and non routine maintenance, troubleshooting and system upgrade of two Zipline distribution centers located in Rwanda. In Keza future education lab Erneste is system engineer of our makerspace. from his broad experience he works with students is design and development life cycle of new electrical/electronic products. Erneste‘s skills include Altium Design Circuit and PCB design tool, Eagle Circuit, C & C++",
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
                          <TeamDialog trigger={person.bio} description={person.bio} image={person.image} names={person.names} media={person.media} position={person.title}/>
                        </p>
                        <div className="py-3 hidden sm:flex absolute bottom-0 ">
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
