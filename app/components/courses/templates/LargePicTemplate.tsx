"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import s1 from "../../images/TrafficLight/s1.jpeg";
import s2 from "../../images/TrafficLight/s2.jpeg";
import { step } from "@/app/store/currectStep";

// icons
import { SiOpslevel } from "react-icons/si";
import { GiArmorDowngrade } from "react-icons/gi";
import { AiFillApi } from "react-icons/ai";
import { BiLogoUnsplash } from "react-icons/bi";
import { BiPackage } from "react-icons/bi";
import { CgEricsson } from "react-icons/cg";
import { CgFigma } from "react-icons/cg";
import { CgPolaroid } from "react-icons/cg";
import { CgTally } from "react-icons/cg";
import { CgTrees } from "react-icons/cg";
import { CgTapDouble } from "react-icons/cg";
import { CgScreenShot } from "react-icons/cg";
import { CgServerless } from "react-icons/cg";
import { FaChessBishop } from "react-icons/fa";
import { FaMonument } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaPlug } from "react-icons/fa";
import { FaVenus } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { CourseData } from "@/app/store/courseData";
import { BsFillImageFill } from "react-icons/bs";
import { BsImage } from "react-icons/bs";
import { ImImage } from "react-icons/im";
import { imageType } from "@/app/store/courseData";

const LargePicTemplate = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);
  const [done, setDone] = useState<number[]>([]);
  const { currentStep } = step();
  const {
    course,
    setCourse,
    image1,
    setImage1,
    image2,
    image3,
    image4,
    setImage2,
    setImage3,
    setImage4,
  } = CourseData();
  const [currentImage1, setCurrentImage1] = useState<imageType>({
    position: "",
    file: null,
  });
  const [currentImage2, setCurrentImage2] = useState<imageType>({
    position: "",
    file: null,
  });
  const [currentImage3, setCurrentImage3] = useState<imageType>({
    position: "",
    file: null,
  });

  useEffect(() => {
    if (image1.file) {
      setCurrentImage1(image1);
    } else {
      setCurrentImage1({ position: "", file: null });
    }
    if (image2) {
      setCurrentImage2(image2);
    } else {
      setCurrentImage2({ position: "", file: null });
    }

    if (image3.file) {
      setCurrentImage3(image3);
    } else {
      setCurrentImage3({ position: "", file: null });
    }
  }, [image1, image2, image3]);

  return (
    <div className="w-full">
      <Accordion
        type="single"
        defaultValue="1"
        collapsible
        className="w-[100%] border-none"
      >
        <AccordionItem value="1" className="border border-none">
          <AccordionTrigger
            className={`pd_id _c uc pc_id hover:uf hover:se ${
              activeAccordion == 1
                ? "pc_id_courses_bottom uf_course se_course"
                : ""
            } ${done.includes(1) ? "uf_course se_course" : ""}`}
            onClick={() => {
              setActiveAccordion(1);
              if (activeAccordion == 1) {
                setActiveAccordion(0);
              }
            }}
          >
            <div className="flex items-center">
              <FaMonument className="text-3xl" />{" "}
              {course.steps.length > 0
                ? `STEP ${currentStep} : ${
                    course.steps[currentStep - 1]?.title
                  }`
                : "Add the course title"}
            </div>
          </AccordionTrigger>
          <AccordionContent
            className={`pd_id _c uc ${
              done.includes(8) ? "pc_id_courses" : ""
            } sm:pd_id gd`}
          >
            <div>
              <div className="flex gap-2">
                {currentImage1.file ? (
                  <Image
                    src={URL.createObjectURL(currentImage1.file)}
                    alt="KEFL Logo image"
                    className="w-[30%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                    width={500}
                    height={300}
                  />
                ) : (
                  <div className="w-[30%] h-[220px] cursor-pointer rounded-[5px] border-custom">
                    <BsImage className="h-full w-full" />
                  </div>
                )}
                {currentImage2.file ? (
                  <Image
                    src={URL.createObjectURL(currentImage2.file)}
                    alt="KEFL image"
                    className="w-[70%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                    width={500}
                    height={300}
                  />
                ) : (
                  <div className="w-[70%] h-[220px] cursor-pointer rounded-[5px] border-custom">
                    <BsFillImageFill className="h-full w-full" />
                  </div>
                )}
              </div>
              <div className="flex gap-2 justify-center mt-2">
                {currentImage3.file ? (
                  <Image
                    src={URL.createObjectURL(currentImage3.file)}
                    alt="image"
                    className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                    width={500}
                    height={250}
                  />
                ) : (
                  <div className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom">
                    <ImImage className="h-full w-full" />
                  </div>
                )}
              </div>
            </div>
            <div className="m-2 flex justify-end">
              <TooltipProvider>
                {done.includes(8) ? (
                  <Tooltip>
                    <TooltipTrigger
                      className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                      onClick={(e) => {
                        e.preventDefault();
                        const newDone = done.filter((item) => item !== 8);
                        setDone(newDone);
                      }}
                    >
                      <GoDotFill />
                      <p>Done</p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Mark this step as not completed</p>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <Tooltip>
                    <TooltipTrigger
                      className="border border-black px-3 rounded-full font-semibold"
                      onClick={(e) => {
                        e.preventDefault();
                        setDone([...done, 8]);
                      }}
                    >
                      To Do
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Mark this step as completed</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </TooltipProvider>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LargePicTemplate;
