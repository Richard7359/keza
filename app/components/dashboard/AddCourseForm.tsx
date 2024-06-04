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

import { motion } from "framer-motion";
import { CourseData, imageType } from "@/app/store/courseData";
import TemplateOptions from "./TemplatesOptions";

// Templates
import TwoImagesSidebySide from "../courses/templates/TwoImagesSidebySide";
import SingleImage from "../courses/templates/SingleImage";
import SingleImageFit from "../courses/templates/SingleImageFit";
import LargePic from "../courses/templates/LargePic";
import LargePicBottom from "../courses/templates/LargePicBottom";
import FourImagesSidebySide from "../courses/templates/FourImagesSidebySide";
import TwoUpandDown from "../courses/templates/TwoUpandDown";
import useGetCourse from "@/app/hooks/courses/usegGetCourse";
import { trpc } from "@/app/_trpc/client";

const FormSchema = z.object({
  title: z.string(),
  course_title: z.string(),
});

function AddCourseForm() {
  const { currentStep, setCurrentStep, previousStep, setPreviousStep } = step();
  const {
    course,
    setCourse,
    image1,
    image2,
    image3,
    image4,
    setImage1,
    setImage2,
    setImage3,
    setImage4,
    basicImage,
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
  const [uploading, setUploading] = useState<boolean>(false);
  const [basicAttachement, setBasicAttachment] = useState<any>();
  const delta = currentStep - previousStep;
  const course_title_value = watch("course_title");
  const watchedTitle = watch("title");
  const { data, refetch } = useGetCourse();
  const { mutate } = trpc.addCourse.addCourse.useMutation({
    onSuccess: () => {
      console.log("Success");
      refetch();
      alert("Course Added successfuly");
    },
    onError: (error) => {
      console.log("Error", error);
      alert("Error adding course");
    },
  });

  useEffect(() => {
    console.log("basic Attachement", basicAttachement);
    if (currentStep == 0) {
      setCourse({
        ...course,
        basicInfo: {
          ...course.basicInfo,
          attachment: basicAttachement?.basicInfo.attachment,
        },
      });
    }
  }, [basicAttachement]);

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
    setStepTitle(course_title_value);
  }, [course_title_value]);

  useEffect(() => {
    if (basicImage.file) {
      setError("");
    }
  }, [basicImage]);

  useEffect(() => {
    setError("");
  }, [image1, image2, image3, image4]);

  useEffect(() => {
    setBasicInfo(watchedTitle, complexity, level);
  }, [watchedTitle, complexity, level]);

  async function handleNext({action} : {action: string}) {
    const currentStepData = course.steps[currentStep - 1];
    console.log("currentStepData", currentStepData);
    if (currentStepData.title == "") {
      return setError("Title is required");
    }
    if (currentStepData.template == "Single Image" && image1.file == null) {
      return setError("Please attach an image");
    }
    setError("");
    const allImages: imageType[] = [];
    [image1, image2, image3, image4, basicImage].map((image, index) => {
      if (image.file) {
        allImages.push(image);
      }
    });
    const uploadedImages: {
      position: string;
      file: string;
    }[] = [];
    const uploadPromises = allImages.map(async (file) => {
      setUploading(true);
      if (!file.file) {
        setUploading(false);
        return setError("File is required");
      }
      const formData = new FormData();
      formData.append("file", file.file);
      formData.append("folder", "courses");
      try {
        const response = await fetch("/api/s3-upload", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data) {
          uploadedImages.push({ position: file.position, file: data.fileName });
        }
      } catch (error) {
        alert("error");
      }
    });

    await Promise.all(uploadPromises);
    const uploadedBasicImage = uploadedImages.find(
      (image) => image.position === "basic_image"
    );
    const updatedSteps: any = course.steps.map((step, index) => {
      const flattenedUploadedImages = uploadedImages
        .filter((img) => img.position !== "basic_image")
        .flat();
      if (index === currentStep - 1) {
        return {
          ...step,
          attachment: [...step.attachment, ...flattenedUploadedImages],
        };
      }
      return step;
    });
    setCourse({
      ...course,
      basicInfo: {
        ...course.basicInfo,
        attachment: uploadedBasicImage?.file
          ? (uploadedBasicImage?.file as string)
          : course.basicInfo.attachment,
      },
      steps: [
        ...updatedSteps,
        {
          title: "",
          step: currentStep + 1,
          template: "Single Image",
          attachment: [],
        },
      ],
    });
    setUploading(false);
    setError("");
    setImage1({ position: "", file: null });
    setImage2({ position: "", file: null });
    setImage3({ position: "", file: null });
    setImage4({ position: "", file: null });
    setPreviousStep(currentStep);
    setCurrentStep(currentStep + 1);
  }

  useEffect(() => {
    console.log("course", course);
  }, [course]);

  const handleBack = () => {
    if (currentStep === 0) return;
    setPreviousStep(currentStep);
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    setError("");
  }, [complexity, level, file, watchedTitle]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (currentStep == 0) {
      setUploading(true);
      if (
        data.title === "" ||
        !basicImage.file ||
        level === "" ||
        complexity === 0
      ) {
        setUploading(false);
        return setError("All fields are required");
      }
      if (currentStep == course.steps.length) {
        setCourse({
          basicInfo: { ...course.basicInfo },
          steps: [
            ...course.steps,
            {
              title: "",
              step: currentStep + 1,
              template: "Single Image",
              attachment: [],
            },
          ],
        });
      }
      setUploading(false);
      setImage1({ position: "", file: null });
      setPreviousStep(currentStep);
      setCurrentStep(currentStep + 1);
    } else {
      handleNext({action: "next"});
    }
  }

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

  const setBasicInfo = (title: string, complexity: number, level: string) => {
    if (currentStep == 0) {
      setCourse({
        ...course,
        basicInfo: {
          ...course.basicInfo,
          complexity: complexity,
          title: title,
          level: level,
        },
      });
    }
  };

  const handleSubmitForm = () => {
    console.log("this is the current Course : ", course);
    mutate({
      userId: "1",
      courseDetails: course,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[95%] ">
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
            <UploadImage />
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
                <TemplateOptions />
              </div>
            </div>
            <div className="">
              <label htmlFor="title" className="text-sm font-semibold mt-2">
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
          <label htmlFor="title" className="text-sm font-semibold mt-2">
            Attach images:
          </label>
          {course.steps[currentStep - 1]?.template == "Single Image" && (
            <SingleImage />
          )}
          {course.steps[currentStep - 1]?.template == "Single Image Fit" && (
            <SingleImageFit />
          )}
          {course.steps[currentStep - 1]?.template ==
            "Two Images Side by Side" && <TwoImagesSidebySide />}
          {course.steps[currentStep - 1]?.template ==
            "Large pic Left, Small pic Right with Bottom pic" && <LargePic />}
          {course.steps[currentStep - 1]?.template ==
            "Two Images Top, One Image Bottom" && <LargePicBottom />}
          {course.steps[currentStep - 1]?.template ==
            "Four Equal Images (2x2 Grid)" && <FourImagesSidebySide />}
          {course.steps[currentStep - 1]?.template ==
            "Two Images Vertically Stacked" && <TwoUpandDown />}
        </motion.div>
      )}
      {error ? <p className="text-red text-sm">{error}</p> : null}
      <div className="flex justify-between mt-2">
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-2">
            {currentStep > 0 && (
              <Button
                className=""
                disabled={true}
                type="button"
                onClick={() => handleBack()}
              >
                <p className="flex items-center gap-2">
                  <IoPlayBackOutline />
                  <p>back</p>
                </p>
              </Button>
            )}
            {uploading == false && (
              <Button type="submit" className="">
                <p className="flex items-center gap-2">
                  <p>Save&Next</p>
                  <TbPlayerTrackNext />
                </p>
              </Button>
            )}
          </div>
          {uploading == true && (
            <Button className="px-12">
              <div className="spinAnimation"></div>{" "}
            </Button>
          )}
        </div>
        {currentStep > 0 && (
          <Button type="button" className="" onClick={() => handleSubmitForm()}>
            <p className="flex items-center">
              <p>Submit</p>
              <TbPlayerTrackNext />
            </p>
          </Button>
        )}
      </div>
    </form>
  );
}

export default AddCourseForm;
