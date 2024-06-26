import laser_cutter_machine from "../../../images/laser-cutter-machine.webp";
import steam_training_image from "../../../images/steam.jpg";
import technology_gadget_image from "../../../images/technology_gadget.jpg";
import consultancy_image from "../../../images/Consultancy@2x.webp";
import Consultancy from "./service/Consultancy";
import Gadegets from "./service/Gadgets";
import Training from "./service/Training";
import Engraving from "./service/Engraving";

export default function Services() {
  const cutting_engraving = {
    title: "Cutting & Engraving of Designs",
    steps: [
      "Design and Material Selection",
      "Prototyping",
      "Engraving",
      "Mass Production",
    ],
    link: "",
    description:
      "A laser cutter machine is a sophisticated tool employing a focused laser beam to precisely cut, engrave, or mark materials across industries. It revolutionizes manufacturing and design by enabling clean, intricate cuts and engravings on diverse materials. These machines are vital, offering versatility, precision, and efficiency for modern manufacturing, design, and creativity.",
    image: laser_cutter_machine,
    subTitle: "Description",
  };
  const steam_training = {
    title: "STEAM training for teachers & students",
    steps: [
      "Design and Material Selection",
      "Prototyping",
      "Engraving",
      "Mass Production",
    ],
    link: "",
    description:
      "At KEFL, we are dedicated to providing a comprehensive STEAM strainings that equips teachers and students with the skills and knowledge needed to thrive in the 21st century. Through our robotics, coding and programming programs, we inspire people's minds, and prepare them for a future filled with innovation and discovery. Join us in shaping the future through technology.",
    image: steam_training_image,
    subTitle: "Description",
  };
  const technology_gadget = {
    title: "We provide technology gadgets in school",
    steps: [
      "Design and Material Selection",
      "Prototyping",
      "Engraving",
      "Mass Production",
    ],
    link: "",
    description:
      "Robotics is a technology that encompasses the design, building, implementation, and operation of robots. Robotics includes applications designed to conduct a specific task or series of tasks for commercial purposes. Robotics is a technology that encompasses the design, building, implementation, and operation of robots. Robotics includes applications designed to conduct a specific task or series of tasks for commercial purposes.",
    image: technology_gadget_image,
    subTitle: "Description",
  };
  const consultancy = {
    title: "Consultancy",
    steps: [
      "Design and Material Selection",
      "Prototyping",
      "Engraving",
      "Mass Production",
    ],
    link: "",
    description:
      "KEFL is a specialized consultancy firm dedicated to supporting schools and non-governmental organizations (NGOs) in their pursuit of educational excellence and community development. With a wealth of expertise and experience, KEFL offers tailored solutions to enhance the effectiveness and impact of educational institutions and nonprofit organizations.",
    image: consultancy_image,
    subTitle: "Description",
  };
  return (
    <section className="relative text-black font-montserrat tracking-tighter">
      <h2 className="text-2xl sm:text-4xl font-bold text-center pt-12">
        Services we provide
      </h2>
      <div className="flex justify-center pb-10">
        {" "}
        <p className="mt-1 text-paragraph text-center max-w-2xl  mx-2">
          Below are the courses we provide to young leaners joined us. Explore
          each course below by click the read more.
        </p>
      </div>
      <Engraving service={cutting_engraving} />
      <Training service={steam_training} />
      <Gadegets service={technology_gadget} />
      <Consultancy service={consultancy} />
    </section>
  );
}
