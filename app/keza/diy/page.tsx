import React from "react";
import Navigation from "@/app/components/Navigation_bar/Navigation";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Boot_camp_image from "../../images/bootcamp copy.jpg";
import Ecd from "../../images/TrafficLight/ECD.jpg";
import Coding from "../../images/coding.jpg";
import Interactive_programming from "../../images/interactive-engineering-for-kids.jpeg";
import Robotics from "../../images/robotics-for-kids.jpg";
import Artiffial_inteligence from "../../images/artificial_intelence1.png";
import Ichigo from "../../images/ichigojam.jpg";

const page = () => {
  return (
    <div>
      <Navigation />
      <div>this is diy page</div>
      <Footer />
    </div>
  );
};

export default page;
