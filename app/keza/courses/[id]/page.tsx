"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ViewMaterials from "@/app/components/courses/Dialog";
import {
  Accordion,
} from "@/components/ui/accordion";

import final_traffic_light from "../../../images/TrafficLight/traffic_light.jpeg";
import useGetCourseById from "@/app/hooks/courses/usegGetCourseById";
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
              <ViewMaterials selected="beginner"/>
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
    </>
  );
};

export default Page;
