"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../form/Button";
import { TbPlayerTrackNext } from "react-icons/tb";
import { useState } from "react";
import Complexity from "./Complexity";
import Combobox from "./ComboBox";

const FormSchema = z.object({
  title: z.string(),
});

function BasicCourseInfo() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

  const [error, setError] = useState<string>("");

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.title === "") {
      setError("Title is required");
    }
    setError("");
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 ">
      <div className="flex flex-col gap-2 ">
        <label htmlFor="title" className="text-sm font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Enter the course title"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none"
          {...register("title")}
        />
      </div>
      <div>
        <Combobox />
      </div>
      <div className="mt-2">
        <label htmlFor="description" className="text-sm font-medium">
          Complexity
        </label>
        <div className="mt-2">
          <Complexity complexity={1} />
          <Complexity complexity={2} />
          <Complexity complexity={3} />
        </div>
      </div>
      {error ? <p className="text-red text-sm">{error}</p> : null}
      <div className="flex justify-end mt-2">
        <Button type="submit" className="">
          <p className="flex items-center gap-2 ">
            <p>Next</p>
            <TbPlayerTrackNext />
          </p>
        </Button>
      </div>
    </form>
  );
}

export default BasicCourseInfo;
