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
import final_traffic_light from "../../images/TrafficLight/traffic_light.jpeg";
import s1 from "../../images/TrafficLight/s1.jpeg";
import s2 from "../../images/TrafficLight/s2.jpeg";
import s1s2 from "../../images/TrafficLight/s1s2.jpg";
import s1s2full from "../../images/TrafficLight/s1s2full.jpeg";
import s4 from "../../images/TrafficLight/s4.jpeg";
import s4s1 from "../../images/TrafficLight/s4s1.jpeg";
import plugs4s1 from "../../images/TrafficLight/plugw1s4.jpeg";
import fulls1s2 from "../../images/TrafficLight/fulls1s2.jpeg";
import l2 from "../../images/TrafficLight/l2.jpeg";
import wd from "../../images/TrafficLight/wd.jpeg";
import plugl2wd from "../../images/TrafficLight/plugl2wd.jpg";
import fulll2wd from "../../images/TrafficLight/fulll2wd.jpeg";
import l1 from "../../images/TrafficLight/l1.jpeg";
import l1wd from "../../images/TrafficLight/l1wd.jpeg";
import l1wds1s2 from "../../images/TrafficLight/l1wds1s2.jpg";
import fulls1bottom from "../../images/TrafficLight/fulls1bottom.jpeg";
import w1 from "../../images/TrafficLight/w1.jpeg";
import w2 from "../../images/TrafficLight/w2.jpeg";
import w1w2 from "../../images/TrafficLight/w1w2.jpg";
import fullw1w2 from "../../images/TrafficLight/fullw1w2.jpeg";
import fullw1w2top from "../../images/TrafficLight/fullw1w2top.jpeg";
import plugtopbottom from "../../images/TrafficLight/plugtopbottom.jpg";
import top from "../../images/TrafficLight/bottom.jpeg";
import bottom from "../../images/TrafficLight/inner.jpeg";
import fullbottomtop from "../../images/TrafficLight/fulltopbottom.jpeg";
import x1 from "../../images/TrafficLight/x1.jpeg";
import x2 from "../../images/TrafficLight/x2.jpeg";
import x1x2 from "../../images/TrafficLight/x1x2.jpg";
import fulll1 from "../../images/TrafficLight/fulll1.jpeg";
import fulll1bottom from "../../images/TrafficLight/fulll1bottom.jpeg";
import b1 from "../../images/TrafficLight/b1.jpeg";
import b2 from "../../images/TrafficLight/b2.jpeg";
import b1b2 from "../../images/TrafficLight/b1b2.jpg";
import fullb1b2 from "../../images/TrafficLight/fullb1b2.jpeg";
import fullb1b2bottom from "../../images/TrafficLight/fullb1b2topbottom.jpeg";
import led1 from "../../images/TrafficLight/led1.jpeg";
import led2 from "../../images/TrafficLight/led2.jpeg";
import led3 from "../../images/TrafficLight/led3.jpeg";
import led4 from "../../images/TrafficLight/led4.jpeg";
import lh1 from "../../images/TrafficLight/lh1.jpeg";
import led1a from "../../images/TrafficLight/l1a.jpeg";
import lh1led1a from "../../images/TrafficLight/lh1led1a.jpg";
import fulll1lh1 from "../../images/TrafficLight/fulll1lh1.jpeg";
import fulll1lh2 from "../../images/TrafficLight/fulll1lh2.jpeg";
import lh1l4 from "../../images/TrafficLight/lh2l4.jpg";
import l1lh4 from "../../images/TrafficLight/l2lh1.jpg";
import fulll4 from "../../images/TrafficLight/fulll4.jpeg";
import inside_part from "../../images/TrafficLight/inside_part.jpeg";
import modelpart from "../../images/TrafficLight/modelpart.jpg";
import fullviewinside from "../../images/TrafficLight/fullviewinside.jpeg";
import finishedmodel from "../../images/TrafficLight/plugmodelpart.jpg";
import fullviewinternal from "../../images/TrafficLight/fullviewinternal.jpeg";
import battery from "../../images/TrafficLight/battery.jpeg";
import batterycable from "../../images/TrafficLight/batterycable.jpeg";
import fullbatterycable from "../../images/TrafficLight/cablebattery.jpg";
import batterryfull from "../../images/TrafficLight/batteryfull.jpeg";
import full from "../../images/TrafficLight/fullfinalview.jpeg";
import useGetCourseById from "@/app/hooks/courses/usegGetCourseById";
import TwoImagesSidebySide from "@/app/components/courses/templates/TwoImagesSidebySide";

const Page = () => {
  const { data } = useGetCourseById({ id: "1" });
  console.log("single Course ")
  useEffect(() => {
    console.log("single Course : ", data);
  })
  let localData;
  if (typeof window!== 'undefined') {
    localData = localStorage.getItem("done");
  }
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [done, setDone] = useState<number[]>(localData ? JSON.parse(localData) : []);

  useEffect(() => {
    localStorage.setItem("done", JSON.stringify(done));
  } , [done])

  return (
    <>
      <Navigation />
      <div className="mb-6">
        <div className="mb-4">
          <p className="text-center text-2xl font-bold mt-10">Trafic Light</p>
          <p className="text-center mt-1">BY Clarisse on may 6, 2024</p>
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
                  <AccordionItem value=" 1" className="border border-none">
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
                        <FaChessBishop className="text-3xl" /> STEP 1: Taking S1
                        and S2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion == 1 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2">
                        <Image
                          src={s1}
                          alt="KEFL Logo image"
                          className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                        <Image
                          src={s2}
                          alt="KEFL Logo image"
                          className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(1) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 1
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
                                  setDone([...done, 1]);
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
                  <AccordionItem value=" 2" className="border border-none mt-4">
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
                  <AccordionItem value="3" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 3
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(3) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(3);
                        if (activeAccordion == 3) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <SiOpslevel className="text-3xl" />
                        STEP 3: Full view of S1 and S2.
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc pc_id_courses sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={s1s2full}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(3) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 3
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
                                  setDone([...done, 3]);
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
                  <AccordionItem value="4" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 4
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(4) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(4);
                        if (activeAccordion == 4) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <GiArmorDowngrade className="text-3xl" />
                        STEP 4: Plugging WD into S1 & S2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc pc_id_courses sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={s4}
                            alt="KEFL Logo image"
                            className="w-[30%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={s4s1}
                            alt="KEFL Logo image"
                            className="w-[70%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={plugs4s1}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(4) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 4
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
                                  setDone([...done, 4]);
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
                  <AccordionItem value="5" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 5
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(5) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(5);
                        if (activeAccordion == 5) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" />
                        STEP 5 FULL VIEW OF WD AND S1&S2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc pc_id_courses
                      sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fulls1s2}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(5) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 5
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
                                  setDone([...done, 5]);
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
                  <AccordionItem value="6" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 6
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(6) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(6);
                        if (activeAccordion == 6) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <BiLogoUnsplash className="text-3xl" /> STEP 6: Plugging
                        L2 into WD&S1&S2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        done.includes(6) ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={l2}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={wd}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={plugl2wd}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(6) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 6
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
                                  setDone([...done, 6]);
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
                  <AccordionItem value="7" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 7
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(7) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(7);
                        if (activeAccordion == 7) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" />
                        STEP7:FULL VIEW OF L2 AND WD&S1&S2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        done.includes(7) ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fulll2wd}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(7) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 7
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
                                  setDone([...done, 7]);
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
                  <AccordionItem value="8" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 8
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(8) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(8);
                        if (activeAccordion == 8) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <BiPackage className="text-3xl" /> STEP 8: Plugging L1
                        into L2&WD&S1&S2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        done.includes(8) ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={l1}
                            alt="KEFL Logo image"
                            className="w-[30%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={l1wd}
                            alt="KEFL Logo image"
                            className="w-[70%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={l1wds1s2}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
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
                                  const newDone = done.filter(
                                    (item) => item !== 8
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
                  <AccordionItem value="9" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 9
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(9) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(9);
                        if (activeAccordion == 9) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" />
                        STEP 9: Full view of L1 and L2&WD&S1&S2 to form BOTTOM
                        PART
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        done.includes(9) ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fulls1bottom}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(9) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 9
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
                                  setDone([...done, 9]);
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
                  <AccordionItem value="10" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 10
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(10) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(10);
                        if (activeAccordion == 10) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <CgEricsson className="text-3xl" /> STEP 10: Plugging W2
                        into W1
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        done.includes(10) ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={w1}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={w2}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={w1w2}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(10) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 10
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
                                  setDone([...done, 10]);
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
                  <AccordionItem value="11" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 11
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(11) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(11);
                        if (activeAccordion == 11) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" /> STEP 11: Full view of
                        twice W1 and W2.
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        done.includes(11) ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fullw1w2}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(11) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 11
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
                                  setDone([...done, 11]);
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
                  <AccordionItem value="12" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion === 12
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(12) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(12);
                        if (activeAccordion === 12) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" />
                        STEP 12: Full view box of W1&W2 to form TOP PART
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        done.includes(12) ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fullw1w2top}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(12) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 12
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
                                  setDone([...done, 12]);
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
                  <AccordionItem value="13" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion === 13
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(13) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(13);
                        if (activeAccordion === 13) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <CgFigma className="text-3xl" /> STEP 13: Plugging Top
                        part into Bottom part
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        done.includes(13) ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={top}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={bottom}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={plugtopbottom}
                            alt="Plugging top into bottom"
                            className="w-[100%] h-[320px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(13) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 13
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
                                  setDone([...done, 13]);
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
                  <AccordionItem value="14" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion === 14
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(14) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(14);
                        if (activeAccordion === 14) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" />
                        STEP 14: Full view of TOP & BOTTOM Part
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion === 14 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fullbottomtop}
                          alt="Full view of TOP & BOTTOM Part"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(14) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 14
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
                                  setDone([...done, 14]);
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
                  <AccordionItem value="15" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion === 15
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(15) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(15);
                        if (activeAccordion === 15) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <CgPolaroid className="text-3xl" /> STEP 15: PLUGGING
                        L1(X4) INTO TOP & BOTTOM PART
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion === 15 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={x1}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={x2}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={x1x2}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(15) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 15
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
                                  setDone([...done, 15]);
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
                  <AccordionItem value="16" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion === 16
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(16) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(16);
                        if (activeAccordion === 16) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" /> STEP 16: Full view of
                        L1 and Top & Bottom Part
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion === 16 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2">
                        <Image
                          src={fulll1}
                          alt="KEFL Logo image"
                          className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                        <Image
                          src={fulll1bottom}
                          alt="KEFL Logo image"
                          className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(16) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 16
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
                                  setDone([...done, 16]);
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
                  <AccordionItem value="17" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion === 17
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(17) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(17);
                        if (activeAccordion === 17) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <CgTally className="text-3xl" /> STEP 17: Plugging B2
                        into B1
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion === 17 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={b1}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={b2}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={b1b2}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(17) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 17
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
                                  setDone([...done, 17]);
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
                  <AccordionItem
                    value="18"
                    className="border border-none mt-4"
                    onClick={() => {
                      setActiveAccordion(18);
                      if (activeAccordion === 18) {
                        setActiveAccordion(0);
                      }
                    }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion === 18
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(18) ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" /> STEP 18: Full view of
                        B1 and B2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion === 18 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fullb1b2}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(18) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 18
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
                                  setDone([...done, 18]);
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
                  <AccordionItem value="19" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion === 19
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(19) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(19);
                        if (activeAccordion === 19) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <CgTrees className="text-3xl" /> STEP 19: Plugging B1&B2
                        into Top & Bottom part
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion === 19 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={b1}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={b2}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={b1b2}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(19) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 19
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
                                  setDone([...done, 19]);
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
                  <AccordionItem value="20" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion === 20
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(20) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(20);
                        if (activeAccordion === 20) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" />
                        STEP 20: Full view of B1&B2 and Top & Bottom Part
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion === 20 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fullb1b2bottom}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(20) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 20
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
                                  setDone([...done, 20]);
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
                  <AccordionItem value="21" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion === 21
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(21) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(21);
                        if (activeAccordion === 21) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <CgTapDouble className="text-3xl" /> STEP 21:Taking 2
                        LED&apos;s as Red, Yellow and Green with wires
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion === 21 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={led1}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={led2}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={led3}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={led4}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(21) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 21
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
                                  setDone([...done, 21]);
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
                  <AccordionItem value="22" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion === 22
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(22) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(22);
                        if (activeAccordion === 22) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <CgScreenShot className="text-3xl" /> STEP 22: Plugging
                        wires with LED to LH1
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion === 22 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={lh1}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={led1a}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={lh1led1a}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(22) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 22
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
                                  setDone([...done, 22]);
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
                  <AccordionItem value="23" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion === 23
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(23) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(23);
                        if (activeAccordion === 23) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" /> STEP 23: Full view of
                        wires with LED to LH1
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion === 23 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fulll1lh1}
                          alt="image"
                          className="w-[50%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                        <Image
                          src={fulll1lh2}
                          alt="image"
                          className="w-[50%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(23) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newDone = done.filter(
                                    (item) => item !== 23
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
                                  setDone([...done, 23]);
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
                  <AccordionItem value="24" className="border border-none mt-4">
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion === 24
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(24) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(24);
                        if (activeAccordion === 24) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <FaMonument className="text-3xl" />
                        STEP 24: Plugging L3 to wires with LED and LH2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion === 24 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex justify-center">
                        <Image
                          src={lh1l4}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="flex justify-center mt-2">
                        <Image
                          src={l1lh4}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(24) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  const newDone = done.filter(
                                    (item) => item !== 24
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
                                onClick={() => {
                                  setDone([...done, 24]);
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
                  <AccordionItem
                    value=" 25"
                    className="border border-none mt-4"
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 25
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(25) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(25);
                        if (activeAccordion == 25) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" />
                        STEP 25: Full view of 4 Inside parts with LEDs and
                        wires.
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion == 25 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex justify-center">
                        <Image
                          src={fulll4}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(25) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  const newDone = done.filter(
                                    (item) => item !== 25
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
                                onClick={() => {
                                  setDone([...done, 25]);
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
                  <AccordionItem
                    value=" 26"
                    className="border border-none mt-4"
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 26
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(26) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(26);
                        if (activeAccordion == 26) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <FaPause className="text-3xl" /> STEP 26: Plugging
                        Inside parts into Model part
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion == 26 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2">
                        <Image
                          src={inside_part}
                          alt="KEFL Logo image"
                          className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                        <Image
                          src={modelpart}
                          alt="KEFL Logo image"
                          className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(26) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  const newDone = done.filter(
                                    (item) => item !== 26
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
                                onClick={() => {
                                  setDone([...done, 26]);
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
                  <AccordionItem
                    value=" 27"
                    className="border border-none mt-4"
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 27
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(27) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(27);
                        if (activeAccordion == 27) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" />
                        STEP 27: Full view of inside parts and Model part
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion == 27 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex justify-center">
                        <Image
                          src={fullviewinside}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(27) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  const newDone = done.filter(
                                    (item) => item !== 27
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
                                onClick={() => {
                                  setDone([...done, 27]);
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
                  <AccordionItem
                    value=" 28"
                    className="border border-none mt-4"
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 28
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(28) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(28);
                        if (activeAccordion == 28) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <FaPlug className="text-3xl" />
                        STEP 28: Plugging electronic wires to the finished model
                        part.
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion == 28 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex justify-center">
                        <Image
                          src={finishedmodel}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(28) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  const newDone = done.filter(
                                    (item) => item !== 28
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
                                onClick={() => {
                                  setDone([...done, 28]);
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
                  <AccordionItem
                    value="29"
                    className="border border-none mt-4"
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 29
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(29) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(29);
                        if (activeAccordion == 29) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" />
                        STEP 29: Full view of Internal side assembly with
                        electronic part.
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion == 29 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex justify-center">
                        <Image
                          src={fullviewinternal}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(29) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  const newDone = done.filter(
                                    (item) => item !== 29
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
                                onClick={() => {
                                  setDone([...done, 29]);
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
                  <AccordionItem
                    value="30"
                    className="border border-none mt-4"
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 30
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(30) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(30);
                        if (activeAccordion == 30) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <FaVenus className="text-3xl" /> STEP 30: Plugging
                        BATTERY and connecting CABLE
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion == 30 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={battery}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={batterycable}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={fullbatterycable}
                            alt="image"
                            className="w-[100%] h-[280px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(30) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  const newDone = done.filter(
                                    (item) => item !== 30
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
                                onClick={() => {
                                  setDone([...done, 30]);
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
                  <AccordionItem
                    value=" 31"
                    className="border border-none mt-4"
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 31
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(31) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(31);
                        if (activeAccordion == 31) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" />
                        STEP 31: Full view of BATTERY and connecting CABLE
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion == 31 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex justify-center">
                        <Image
                          src={batterryfull}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(31) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  const newDone = done.filter(
                                    (item) => item !== 31
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
                                onClick={() => {
                                  setDone([...done, 31]);
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
                  <AccordionItem
                    value=" 32"
                    className="border border-none mt-4"
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 32
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(32) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(32);
                        if (activeAccordion == 32) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <FaVenus className="text-3xl" /> STEP 32: Plugging
                        Battery with cable to The traffic light.
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion == 32 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={battery}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={batterycable}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={fullbatterycable}
                            alt="image"
                            className="w-[100%] h-[280px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(32) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  const newDone = done.filter(
                                    (item) => item !== 32
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
                                onClick={() => {
                                  setDone([...done, 32]);
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
                  <AccordionItem
                    value=" 33"
                    className="border border-none mt-4"
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        activeAccordion == 33
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${done.includes(33) ? "uf_course se_course" : ""}`}
                      onClick={() => {
                        setActiveAccordion(33);
                        if (activeAccordion == 33) {
                          setActiveAccordion(0);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <SlBadge className="text-3xl" /> STEP 33: Full View of
                        FINAL Assembly of TRAFFIC LIGHT
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        activeAccordion == 33 ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center mt-2">
                        <Image
                          src={full}
                          alt="image"
                          className="w-[100%] h-[280px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {done.includes(33) ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  const newDone = done.filter(
                                    (item) => item !== 33
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
                                onClick={() => {
                                  setDone([...done, 33]);
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
