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
import SingleImage from "@/app/components/courses/AccordionItems/SingleImage";
import AccordionItems from "@/app/components/courses/AccordionItems/AccordionItems";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetCourseById({ id: id });
  useEffect(() => {
    console.log("single Course : ", data);
  }, [data]);

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

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Navigation />
      {data && (
        <div className="mb-6">
          <div className="mb-4">
            <p className="text-center text-2xl font-bold mt-10">
              {data.courses[0].CourseDetails?.basicInfo?.title}
            </p>
            <p className="text-center mt-1">
            {`${
              data.courses[0].CourseDetails?.basicInfo?.uploadedBy
            } on ${formatDate(data?.courses[0].CreatedOn)}`}
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={final_traffic_light}
              alt="KEFL Logo image"
              className="w-[80%] sm:w-[490px] h-[300px] cursor-pointer rounded-[5px] border-custom"
            />
          </div>
          <div className="flex justify-center mt-4">
            <div className="w-[80%] sm:w-[50%]">
              <ViewMaterials />
              <div className="mt-4">
                <div className="flex justify-center">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-[100%] border-none"
                  >
                    {data.courses[0].CourseDetails?.steps.map((item : any, index : any) => {
                      return <AccordionItems key={index} id="5" step={item} />;
                    })}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Page;
