"use client";
import { step } from "@/app/store/currectStep";

import { CourseData } from "@/app/store/courseData";

// templates
import TwoImagesSidebySideTemplate from "./templates/TwoImagesSidebySideTemplate";
import SingleImageTemplate from "./templates/SingleImageTemplate";
import { useEffect, useState } from "react";

const Preview = () => {
  const { currentStep } = step();
  const { course, setCourse } = CourseData();
  const [currentCourse, setCurrentCourse] = useState<any>(null);

  // const currentCourse = course.steps.find((step) => step.step === currentStep);


  useEffect(() => {
    console.log("currentCourse : ", currentCourse);
    console.log("course from the preview : ", course);
    setCurrentCourse(course.steps.find((step) => step.step === currentStep))
  }, [course])

  return (
    <div className="flex justify-center">
      {currentStep == 0 ? (
        <div>
          this section will provide an overview of the feature of adding courses
          is structured , like the way images are uploaded how to change the
          template, next and save, submit form as final form ..............
        </div>
      ) : (
        // <div></div>
        // <SingleImageTemplate />
        <div className="w-full">
          {currentCourse?.template == "Single Image" && <SingleImageTemplate />}
          {currentCourse?.template == "Two Images Side by Side"  && <TwoImagesSidebySideTemplate />}
        </div>
      )}
    </div>
  );
};

export default Preview;
