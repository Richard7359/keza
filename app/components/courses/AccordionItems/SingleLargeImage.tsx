"use client";
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

import React, { useEffect, useState } from "react";
import Navigation from "@/app/components/Navigation_bar/Navigation";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import ViewMaterials from "@/app/components/courses/Dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import final_traffic_light from "../../../images/TrafficLight/traffic_light.jpeg";
import s1 from "../../../images/TrafficLight/s1.jpeg";
import s2 from "../../../images/TrafficLight/s2.jpeg";
import s1s2 from "../../../images/TrafficLight/s1s2.jpg";
import s1s2full from "../../../images/TrafficLight/s1s2full.jpeg";
import s4 from "../../../images/TrafficLight/s4.jpeg";
import s4s1 from "../../../images/TrafficLight/s4s1.jpeg";
import plugs4s1 from "../../../images/TrafficLight/plugw1s4.jpeg";
import fulls1s2 from "../../../images/TrafficLight/fulls1s2.jpeg";
import l2 from "../../../images/TrafficLight/l2.jpeg";
import wd from "../../../images/TrafficLight/wd.jpeg";
import plugl2wd from "../../../images/TrafficLight/plugl2wd.jpg";
import fulll2wd from "../../../images/TrafficLight/fulll2wd.jpeg";
import l1 from "../../../images/TrafficLight/l1.jpeg";
import l1wd from "../../../images/TrafficLight/l1wd.jpeg";
import l1wds1s2 from "../../../images/TrafficLight/l1wds1s2.jpg";
import fulls1bottom from "../../../images/TrafficLight/fulls1bottom.jpeg";
import w1 from "../../../images/TrafficLight/w1.jpeg";
import w2 from "../../../images/TrafficLight/w2.jpeg";
import w1w2 from "../../../images/TrafficLight/w1w2.jpg";
import fullw1w2 from "../../../images/TrafficLight/fullw1w2.jpeg";
import fullw1w2top from "../../../images/TrafficLight/fullw1w2top.jpeg";
import plugtopbottom from "../../../images/TrafficLight/plugtopbottom.jpg";
import top from "../../../images/TrafficLight/bottom.jpeg";
import bottom from "../../../images/TrafficLight/inner.jpeg";
import fullbottomtop from "../../../images/TrafficLight/fulltopbottom.jpeg";
import x1 from "../../../images/TrafficLight/x1.jpeg";
import x2 from "../../../images/TrafficLight/x2.jpeg";
import x1x2 from "../../../images/TrafficLight/x1x2.jpg";
import fulll1 from "../../../images/TrafficLight/fulll1.jpeg";
import fulll1bottom from "../../../images/TrafficLight/fulll1bottom.jpeg";
import b1 from "../../../images/TrafficLight/b1.jpeg";
import b2 from "../../../images/TrafficLight/b2.jpeg";
import b1b2 from "../../../images/TrafficLight/b1b2.jpg";
import fullb1b2 from "../../../images/TrafficLight/fullb1b2.jpeg";
import fullb1b2bottom from "../../../images/TrafficLight/fullb1b2topbottom.jpeg";
import led1 from "../../../images/TrafficLight/led1.jpeg";
import led2 from "../../../images/TrafficLight/led2.jpeg";
import led3 from "../../../images/TrafficLight/led3.jpeg";
import led4 from "../../../images/TrafficLight/led4.jpeg";
import lh1 from "../../../images/TrafficLight/lh1.jpeg";
import led1a from "../../../images/TrafficLight/l1a.jpeg";
import lh1led1a from "../../../images/TrafficLight/lh1led1a.jpg";
import fulll1lh1 from "../../../images/TrafficLight/fulll1lh1.jpeg";
import fulll1lh2 from "../../../images/TrafficLight/fulll1lh2.jpeg";
import lh1l4 from "../../../images/TrafficLight/lh2l4.jpg";
import l1lh4 from "../../../images/TrafficLight/l2lh1.jpg";
import fulll4 from "../../../images/TrafficLight/fulll4.jpeg";
import inside_part from "../../../images/TrafficLight/inside_part.jpeg";
import modelpart from "../../../images/TrafficLight/modelpart.jpg";
import fullviewinside from "../../../images/TrafficLight/fullviewinside.jpeg";
import finishedmodel from "../../../images/TrafficLight/plugmodelpart.jpg";
import fullviewinternal from "../../../images/TrafficLight/fullviewinternal.jpeg";
import battery from "../../../images/TrafficLight/battery.jpeg";
import batterycable from "../../../images/TrafficLight/batterycable.jpeg";
import fullbatterycable from "../../../images/TrafficLight/cablebattery.jpg";
import batterryfull from "../../../images/TrafficLight/batteryfull.jpeg";
import full from "../../../images/TrafficLight/fullfinalview.jpeg";
import useGetCourseById from "@/app/hooks/courses/usegGetCourseById";
import TwoEqualImages from "@/app/components/courses/AccordionItems/TwoEqualImages";

const SingleLargeImage = () => {
  let localData;
  if (typeof window !== "undefined") {
    localData = localStorage.getItem("done");
  }
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [done, setDone] = useState<number[]>(
    localData ? JSON.parse(localData) : []
  );

  useEffect(() => {
    localStorage.setItem("done", JSON.stringify(done));
  }, [done]);
  return (
    <AccordionItem value="2" className="border border-none mt-4">
    <AccordionTrigger
      className={`pd_id _c uc pc_id hover:uf hover:se ${
        activeAccordion == 2
          ? "pc_id_courses_bottom uf_course se_course"
          : ""
      } ${done.includes(2) ? "uf_course se_course" : ""}`}
      onClick={() => {
        setActiveAccordion(2);
        if (activeAccordion == 2) {
          setActiveAccordion(0);
        }
      }}
    >
      <div className="flex items-center">
        <CgServerless className="text-3xl" />
        STEP 2: Plugging S2 into S1
      </div>
    </AccordionTrigger>
    <AccordionContent
      className={`pd_id _c uc ${
        activeAccordion == 2 ? "pc_id_courses" : ""
      } sm:pd_id gd`}
    >
      <div className="flex gap-2 justify-center">
        <Image
          src={s1s2}
          alt="KEFL Logo image"
          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
        />
      </div>
      <div className="m-2 flex justify-end">
        <TooltipProvider>
          {done.includes(2) ? (
            <Tooltip>
              <TooltipTrigger
                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  const newDone = done.filter(
                    (item) => item !== 2
                  );
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
                  setDone([...done, 2]);
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
  );
};

export default SingleLargeImage;
