"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../form/Button";
import { TbPlayerTrackNext } from "react-icons/tb";
import { useEffect, useState } from "react";
import Complexity from "./Complexity";
import Levels from "./LevelsOPtions";
import UploadImage from "./UploadImage";
import { IoPlayBackOutline } from "react-icons/io5";
import { IoFootstepsOutline } from "react-icons/io5";
import { step } from "@/app/store/currectStep";
import { ChangeEvent } from "react";

import { GrCloudUpload } from "react-icons/gr";
import { TbTrashX } from "react-icons/tb";

import { motion } from "framer-motion";
import { CourseData } from "@/app/store/courseData";
import TemplateOptions from "./TemplatesOptions";

const FormSchema = z.object({
  title: z.string(),
  course_title: z.string(),
});

function AddCourseForm() {
  const { currentStep, setCurrentStep, previousStep, setPreviousStep } = step();
  const { course, setCourse } = CourseData();
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
          ? course.steps[currentStep - 1].title
          : "",
    },
  });

  const [error, setError] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [complexity, setComplexity] = useState<number>(0);
  const [level, setLevel] = useState("");
  const [template, setTemplate] = useState("");
  const delta = currentStep - previousStep;
  const course_title_value = watch("course_title");
  const watchedTitle = watch("title");

  const [currentImage1, setCurrentImage1] = useState<File | null>(null);
  const [currentImage2, setCurrentImage2] = useState<File | null>(null);

  useEffect(() => {
    console.log("currentStep : ", currentStep);
    console.log("previousStep : ", previousStep);
    setValue(
      "course_title",
      course.steps.length > 0 && currentStep > 0
        ? course.steps[currentStep - 1].title
        : ""
    );
    setValue("title", course.basicInfo ? course.basicInfo.title : "");
  }, [currentStep, previousStep]);

  useEffect(() => {
    const currentStepObj = course.steps.find(
      (step) => step.step === currentStep
    );

    if (currentStepObj) {
      const up_left = currentStepObj.attachment.find(
        (att) => att.position === "up_left"
      );
      const up_right = currentStepObj.attachment.find(
        (att) => att.position === "up_right"
      );

      if (up_left) {
        setCurrentImage1(up_left.file);
      } else {
        setCurrentImage1(null);
      }
      if (up_right) {
        setCurrentImage2(up_right.file);
      } else {
        setCurrentImage2(null);
      }
    }
  }, [course]);

  useEffect(() => {
    setStepTitle(course_title_value);
  }, [course_title_value]);

  useEffect(() => {
    setBasicTitle(watchedTitle);
  }, [watchedTitle]);

  useEffect(() => {
    console.log("these are the course data after:", course);
  }, [course]);
  const handleNext = () => {
    if (error) return;
    setPreviousStep(currentStep);
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    console.log("handling back");
    if (currentStep === 0) return;
    setPreviousStep(currentStep);
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    setError("");
  }, [complexity, level, file, watchedTitle]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (
      currentStep == 0 &&
      (data.title === "" || !file || level === "" || complexity === 0)
    ) {
      return setError("All fields are required");
    }

    if (currentStep == 0) {
      setCourse({
        ...course,
        basicInfo: {
          title: data.title,
          level: level,
          complexity: complexity,
          uploadedBy: "Admin",
          attachment: file ? file.name : "",
        },
      });
      if (currentStep == course.steps.length) {
        setCourse({
          basicInfo: { ...course.basicInfo },
          steps: [
            ...course.steps,
            {
              title: "",
              step: currentStep + 1,
              template: "single-images",
              attachment: [],
            },
          ],
        });
      }
    } else if (currentStep > 0 && currentStep == course.steps.length) {
      setCourse({
        ...course,
        steps: [
          ...course.steps,
          {
            title: "",
            step: currentStep + 1,
            template: "single-images",
            attachment: [],
          },
        ],
      });
    }
    // reset();
    handleNext();

    // if (data.title === "") {
    //   setError("Title is required");
    // }
    // if (!file) {
    //   return setError("File is required");
    // }

    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("folder", "courses");
    // try {
    //   const response = await fetch("/api/s3-upload", {
    //     method: "POST",
    //     body: formData,
    //   });
    //   const data = await response.json();
    //   if (data) setFile(null);
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
    setError("");
  }

  const addAttachement = (position: string, file: File) => {
    if (currentStep > 0) {
      setCourse({
        ...course,
        steps: course.steps.map((step) => {
          if (step.step == currentStep) {
            return {
              ...step,
              attachment: [
                ...step.attachment,
                { position: position, file: file },
              ],
            };
          }
          return step;
        }),
      });
    }
  };

  const deleteAttachement = (position: string) => {
    if (currentStep > 0) {
      setCourse({
        ...course,
        steps: course.steps.map((step) => {
          if (step.step == currentStep) {
            return {
              ...step,
              attachment: step.attachment.filter(
                (att) => att.position !== position
              ),
            };
          }
          return step;
        }),
      });
    }
  };

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
    <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] ">
      <div className="flex gap-2 mb-3">
        <IoFootstepsOutline size={20} />
        {currentStep == 0 ? (
          <p className="text-sm font-semibold">Basic Course Information</p>
        ) : (
          <p className="text-sm font-semibold">Step : {currentStep}</p>
        )}
      </div>
      {currentStep == 0 && (
        <motion.div
          initial={{ x: 200 >= 0 ? "50%" : "-50%", opacity: 0 }}
          // delta was used to determine the direction but it's missbehaving for now will used later
          // initial={{ x: delte >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex flex-col gap-2 ">
            <div></div>
            <label htmlFor="title" className="text-sm font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter the course title"
              className="w-full rounded-md input_text input_bg border border-input bg-background px-3 py-2 text-sm outline-none"
              {...register("title")}
            />
          </div>
          <div className="mt-2 grid grid-cols-2">
            <div>
              <label htmlFor="description" className="text-sm font-semibold">
                Course Level
              </label>
              <Levels level={level} setLevel={setLevel} />
            </div>
            <div>
              <label htmlFor="description" className="text-sm font-semibold">
                Complexity
              </label>
              <div className="mt-2">
                <Complexity
                  complexity={1}
                  onClick={() => setComplexity(1)}
                  className={complexity == 1 ? "border border-green" : ""}
                />
                <Complexity
                  complexity={2}
                  onClick={() => setComplexity(2)}
                  className={complexity == 2 ? "border medium-border" : ""}
                />
                <Complexity
                  complexity={3}
                  onClick={() => setComplexity(3)}
                  className={complexity == 3 ? "border border-level4" : ""}
                />
              </div>
            </div>
          </div>
          <div>
            <UploadImage file={file} setFile={setFile} />
          </div>
        </motion.div>
      )}{" "}
      {currentStep > 0 && (
        <motion.div
          initial={{ x: 200 >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="">
            <div className="w-[100%]">
              <label htmlFor="title" className="text-sm font-semibold">
                Change Template
              </label>
              <div className="w-[100%]">
                <TemplateOptions
                  template={template}
                  setTemplate={setTemplate}
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="title" className="text-sm font-semibold">
                Title
              </label>
              <input
                type="text"
                id="course_title"
                placeholder="Enter the course title"
                className="w-full rounded-md input_text input_bg border border-input bg-background px-3 py-2 text-sm outline-none"
                {...register("course_title")}
              />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex gap-2">
              {!currentImage1 ? (
                <label className="opacity-1  text-xs font-bold hover:cursor-pointer w-[50%] h-[220px] cursor-pointer rounded-[5px]">
                  <input
                    type="file"
                    accept="image/jpeg,image/png,application/pdf,image/jpg"
                    hidden={true}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      addAttachement("up_left", e.target.files![0]);
                    }}
                  />
                  <div className="h-full flex flex-col items-center justify-center border border-dashed rounded-[5px] py-8 input_bg">
                    <span className="opacity-1 hover:shadow:sm flex h-20 w-20 items-center justify-center rounded-full bg-white">
                      <GrCloudUpload
                        size={34}
                        className="text-primary-500 text-deepSkyBlue"
                        strokeLinejoin="miter"
                      />
                    </span>
                    <p className="mt-2 text-xs">
                      Drop your files here or
                      <span className="cursor-pointer text-deepSkyBlue underline">
                        {" "}
                        browse
                      </span>
                    </p>
                    <p className="mt-2 text-xsm text_gray-400">
                      Max file size 10MB, PDF, JPG,PNG or JPEG file supported.
                    </p>
                  </div>
                </label>
              ) : (
                <div className="mt-1 flex items-center gap-2 w-[50%] h-[220px]">
                  <div className="flex items-center gap-7">
                    <span className="flex cursor-pointer text-sky-600 font-bold text-sm">
                      {currentImage1?.name}
                    </span>
                    <button
                      onClick={() => {
                        deleteAttachement("up_left");
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

              {!currentImage2 ? (
                <label className="opacity-1  text-xs font-bold hover:cursor-pointer w-[50%] h-[220px] cursor-pointer rounded-[5px]">
                  <input
                    type="file"
                    accept="image/jpeg,image/png,application/pdf,image/jpg"
                    hidden={true}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      addAttachement("up_right", e.target.files![0]);
                    }}
                  />
                  <div className="h-full flex flex-col items-center justify-center border border-dashed rounded-[5px] py-8 input_bg">
                    <span className="opacity-1 hover:shadow:sm flex h-20 w-20 items-center justify-center rounded-full bg-white">
                      <GrCloudUpload
                        size={34}
                        className="text-primary-500 text-deepSkyBlue"
                        strokeLinejoin="miter"
                      />
                    </span>
                    <p className="mt-2 text-xs">
                      Drop your files here or
                      <span className="cursor-pointer text-deepSkyBlue underline">
                        {" "}
                        browse
                      </span>
                    </p>
                    <p className="mt-2 text-xsm text_gray-400">
                      Max file size 10MB, PDF, JPG,PNG or JPEG file supported.
                    </p>
                  </div>
                </label>
              ) : (
                <div className="mt-1 flex items-center gap-2 w-[50%] h-[220px]">
                  <div className="flex items-center gap-7">
                    <span className="flex cursor-pointer text-sky-600 font-bold text-sm">
                      {currentImage2?.name}
                    </span>
                    <button
                      onClick={() => {
                        deleteAttachement("up_right");
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
        </motion.div>
      )}
      {error ? <p className="text-red text-sm">{error}</p> : null}
      <div className="flex justify-between mt-2">
        <div>
          {currentStep > 0 && (
            <Button className="" type="button" onClick={() => handleBack()}>
              <p className="flex items-center gap-2 ">
                <IoPlayBackOutline />
                <p>back</p>
              </p>
            </Button>
          )}
        </div>
        <Button type="submit" className="">
          {/* <Button className="" onClick={() => handleNext()}> */}
          <p className="flex items-center gap-2 ">
            <p>Save-Next</p>
            <TbPlayerTrackNext />
          </p>
        </Button>
      </div>
    </form>
  );
}

export default AddCourseForm;
