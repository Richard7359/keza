"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../../form/Button";
import { TbPlayerTrackNext } from "react-icons/tb";
import { useEffect, useState } from "react";
import { IoPlayBackOutline } from "react-icons/io5";
import { step } from "@/app/store/currectStep";
import { ChangeEvent } from "react";

import { GrCloudUpload } from "react-icons/gr";
import { TbTrashX } from "react-icons/tb";

import { motion } from "framer-motion";
import { CourseData } from "@/app/store/courseData";
import TemplateOptions from "../../dashboard/TemplatesOptions";
import { imageType } from "@/app/store/courseData";

const FormSchema = z.object({
  title: z.string(),
  course_title: z.string(),
});

function TwoImagesSidebySide() {
  const { currentStep, setCurrentStep, previousStep, setPreviousStep } = step();
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
  const {
    handleSubmit,
    register,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: course.basicInfo ? course.basicInfo.title : "",
      course_title:
        course.steps.length > 0 && currentStep > 0
          ? course.steps[currentStep - 1]?.title
          : "",
    },
  });

  const [error, setError] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [complexity, setComplexity] = useState<number>(0);
  const [level, setLevel] = useState("");
  const [template, setTemplate] = useState("Two Images Side by Side");
  const delta = currentStep - previousStep;
  const course_title_value = watch("course_title");
  const watchedTitle = watch("title");

  const [currentImage1, setCurrentImage1] = useState<imageType>({
    position: "",
    file: null,
  });
  const [currentImage2, setCurrentImage2] = useState<imageType>({
    position: "",
    file: null,
  });

  // const [currentImage1, setCurrentImage1] = useState<File | null>(null);
  // const [currentImage2, setCurrentImage2] = useState<File | null>(null);

  useEffect(() => {
    console.log("template options", template);
  }, [template]);

  useEffect(() => {
    setValue(
      "course_title",
      course.steps.length > 0 && currentStep > 0
        ? course.steps[currentStep - 1]?.title
        : ""
    );
    setValue("title", course.basicInfo ? course.basicInfo.title : "");
  }, [currentStep, previousStep]);

  useEffect(() => {
    // const currentStepObj = course.steps.find(
    //   (step) => step.step === currentStep
    // );

    // if (currentStepObj) {
    //   const up_left = currentStepObj.attachment.find(
    //     (att) => att.position === "up_left"
    //   );
    //   const up_right = currentStepObj.attachment.find(
    //     (att) => att.position === "up_right"
    //   );

    //  if (image1) {
    //   const up_left = currentStepObj.attachment.find(
    //     (att) => att.position === "up_left"
    //   );
    //   const up_right = currentStepObj.attachment.find(
    //     (att) => att.position === "up_right"
    //   );

    if (image1) {
      setCurrentImage1(image1);
    } else {
      setCurrentImage1({ position: "", file: null });
    }
    if (image2) {
      setCurrentImage2(image2);
    } else {
      setCurrentImage2({ position: "", file: null });
    }
    // }
  }, [image1, image2]);
  // }, [course]);

  useEffect(() => {
    setStepTitle(course_title_value);
  }, [course_title_value]);

  useEffect(() => {
    setBasicTitle(watchedTitle);
  }, [watchedTitle]);

  useEffect(() => {
    console.log("these are the course data after:", course);
  }, [course]);

  useEffect(() => {
    setError("");
  }, [complexity, level, file, watchedTitle]);

  const addAttachement = (position: string, file: File) => {
    if (currentStep > 0) {
      setImage1({ position: position, file: file });
      // setCourse({
      //   ...course,
      //   steps: course.steps.map((step) => {
      //     if (step.step == currentStep) {
      //       return {
      //         ...step,
      //         attachment: [
      //           ...step.attachment,
      //           { position: position, file: file },
      //         ],
      //       };
      //     }
      //     return step;
      //   }),
      // });
    }
  };

  // const addAttachement = (position: string, file: File) => {
  //   if (currentStep > 0) {
  //     setCourse({
  //       ...course,
  //       steps: course.steps.map((step) => {
  //         if (step.step == currentStep) {
  //           return {
  //             ...step,
  //             attachment: [
  //               ...step.attachment,
  //               { position: position, file: file },
  //             ],
  //           };
  //         }
  //         return step;
  //       }),
  //     });
  //   }
  // };

  const setStepTitle = (title: string) => {
    if (currentStep > 0) {
      setCourse({
        ...course,
        steps: course.steps.map((step) => {
          if (step.step == currentStep) {
            return {
              ...step,
              title: title,
            };
          }
          return step;
        }),
      });
    }
  };

  const setBasicTitle = (title: string) => {
    if (currentStep == 0) {
      setCourse({
        ...course,
        basicInfo: {
          ...course.basicInfo,
          title: title,
        },
      });
    }
  };

  return (
    <div className="h-[140px] flex items-center">
      <div className="flex w-full gap-2">
        {!currentImage1.file ? (
          <label className="opacity-1 flex w-[50%] h-[65px]  text-xs font-bold hover:cursor-pointer cursor-pointer rounded-[5px]">
            <input
              type="file"
              accept="image/jpeg,image/png,application/pdf,image/jpg"
              hidden={true}
              className="bg-green"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (currentStep > 0) {
                  setImage1({ position: "up_left", file: e.target.files![0] });
                }
              }}
            />
            <div className="flex w-full items-center border border-dashed rounded-[5px] input_bg">
              <span className="opacity-1 hover:shadow:sm flex h-12 w-12 p-2 mx-3 items-center justify-center rounded-full bg-white">
                <GrCloudUpload
                  size={34}
                  className="text-primary-500 text-deepSkyBlue"
                  strokeLinejoin="miter"
                />
              </span>
              <div>
                <p className="mt-2 text-xs">
                  Drop your files here or
                  <span className="cursor-pointer text-deepSkyBlue underline">
                    {" "}
                    browse
                  </span>
                </p>
                <p className="mt-2 text-xsm text_gray-400">
                  Max file size 10MB.
                </p>
              </div>
            </div>
          </label>
        ) : (
          <div className="mt-1 flex items-center gap-2 w-[50%]">
            <div className="flex items-center gap-7">
              <span className="flex cursor-pointer text-sky-600 font-bold text-sm">
                {currentImage1.file?.name}
              </span>
              <button
                onClick={() => {
                  if (currentStep > 0) {
                    setImage1({ position: "", file: null });
                  }
                }}
                className="flex items-center justify-center gap-2 rounded-lg px-[5px] py-1 text-xs font-semibold"
                type="button"
              >
                <TbTrashX
                  size={20}
                  className="text-primary text-red"
                  strokeLinejoin="miter"
                />
              </button>
            </div>
          </div>
        )}
        {!currentImage2.file ? (
          <label className="opacity-1 flex w-[50%] h-[65px] text-xs font-bold hover:cursor-pointer cursor-pointer rounded-[5px]">
            <input
              type="file"
              accept="image/jpeg,image/png,application/pdf,image/jpg"
              hidden={true}
              className="bg-green"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                // addAttachement("up_right", e.target.files![0]);
                if (currentStep > 0) {
                  setImage2({ position: "up_right", file: e.target.files![0] });
                }
              }}
            />
            <div className="flex w-full items-center border border-dashed rounded-[5px] input_bg">
              <span className="opacity-1 hover:shadow:sm flex h-12 w-12 p-2 mx-3 items-center justify-center rounded-full bg-white">
                <GrCloudUpload
                  size={34}
                  className="text-primary-500 text-deepSkyBlue"
                  strokeLinejoin="miter"
                />
              </span>
              <div>
                <p className="mt-2 text-xs">
                  Drop your files here or
                  <span className="cursor-pointer text-deepSkyBlue underline">
                    {" "}
                    browse
                  </span>
                </p>
                <p className="mt-2 text-xsm text_gray-400">
                  Max file size 10MB.
                </p>
              </div>
            </div>
          </label>
        ) : (
          <div className="mt-1 flex items-center gap-2 w-[50%]">
            <div className="flex items-center gap-7">
              <span className="flex cursor-pointer text-sky-600 font-bold text-sm">
                {currentImage2.file?.name}
              </span>
              <button
                onClick={() => {
                  if (currentStep > 0) {
                    setImage2({ position: "", file: null });
                  }
                }}
                className="flex items-center justify-center gap-2 rounded-lg px-[5px] py-1 text-xs font-semibold"
                type="button"
              >
                <TbTrashX
                  size={20}
                  className="text-primary text-red"
                  strokeLinejoin="miter"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TwoImagesSidebySide;
